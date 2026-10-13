"use client";

import { Alert, Button, Form, Input, Modal, Select } from "antd";
import { useId, useRef, useState } from "react";
import { umrahPackages, type UmrahEnquiryValues } from "../../types/umrahEnquiry";
import styles from "./UmrahPlanningDialog.module.css";

type UmrahPlanningDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function UmrahPlanningDialog({ open, onClose }: UmrahPlanningDialogProps) {
  const [form] = Form.useForm<UmrahEnquiryValues>();
  const formId = useId();
  const sending = useRef(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const submit = async (values: UmrahEnquiryValues) => {
    if (sending.current) return;
    sending.current = true;
    setSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/umrah-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: AbortSignal.timeout(45_000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(typeof result.error === "string" ? result.error : "Unable to send your enquiry. Please try again.");
      }
      form.resetFields();
      setFeedback({ type: "success", message: "Your enquiry has been sent. Our team will be in touch soon." });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error && error.name === "Error"
          ? error.message
          : "We couldn't confirm that your enquiry was sent. Please check your connection and try again.",
      });
    } finally {
      sending.current = false;
      setSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => { if (!sending.current) onClose(); }}
      closable={!submitting}
      keyboard={!submitting}
      mask={{ closable: !submitting }}
      title={<h2 className={styles.title}>Plan Your Umrah</h2>}
      footer={null}
      centered
      width={640}
      className={styles.dialog}
      afterClose={() => setFeedback(null)}
      afterOpenChange={(visible) => {
        if (visible) form.focusField("firstName");
      }}
    >
      <p className={styles.intro}>Tell us about your plans for a comfortable and meaningful Umrah journey.</p>
      <Form
        form={form}
        name={`umrah-planning-${formId}`}
        layout="vertical"
        className={styles.form}
        scrollToFirstError={{ focus: true }}
        onFinish={submit}
        onValuesChange={() => setFeedback(null)}
        disabled={submitting}
        aria-busy={submitting}
      >
        <div className={styles.fields}>
          <Form.Item name="firstName" label="First Name" rules={[{ required: true, whitespace: true, message: "Please enter your first name." }]}>
            <Input autoComplete="given-name" placeholder="First name" maxLength={100} />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name" rules={[{ required: true, whitespace: true, message: "Please enter your last name." }]}>
            <Input autoComplete="family-name" placeholder="Last name" maxLength={100} />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email address." }, { type: "email", message: "Please enter a valid email address." }]}>
            <Input type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              { required: true, whitespace: true, message: "Please enter your phone number." },
              { pattern: /^\+?[\d\s().-]+$/, message: "Please enter a valid phone number." },
              {
                validator: (_, value: string | undefined) => {
                  const digits = value?.replace(/\D/g, "").length ?? 0;
                  return !value || (digits >= 7 && digits <= 15)
                    ? Promise.resolve()
                    : Promise.reject(new Error("Please enter a phone number with 7–15 digits."));
                },
              },
            ]}
            validateFirst
          >
            <Input type="tel" autoComplete="tel" placeholder="+92 300 1234567" maxLength={30} />
          </Form.Item>
        </div>
        <Form.Item name="package" label="Select Package" rules={[{ required: true, message: "Please select a package." }]}>
          <Select
            placeholder="Choose your Umrah package"
            options={Object.entries(umrahPackages).map(([value, label]) => ({ value, label }))}
          />
        </Form.Item>
        <Form.Item name="message" label="Message" rules={[{ required: true, whitespace: true, message: "Please enter your message." }]}>
          <Input.TextArea rows={4} maxLength={2000} placeholder="Share your preferred dates, number of travellers, or any special requests…" />
        </Form.Item>
        {feedback && (
          <div className={styles.feedback} role={feedback.type === "error" ? "alert" : "status"}>
            <Alert type={feedback.type} title={feedback.message} showIcon />
          </div>
        )}
        <div className={styles.actions}>
          <Button onClick={onClose} disabled={submitting}>Close</Button>
          <Button htmlType="submit" type="primary" loading={submitting} className={styles.submit}>
            {submitting ? "Sending…" : "Submit Enquiry"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

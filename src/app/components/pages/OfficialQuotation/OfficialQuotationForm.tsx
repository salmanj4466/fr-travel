"use client";

import dayjs, { type Dayjs } from "dayjs";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import type { OfficialQuotationData } from "@/app/types/officialQuotation";

interface Props {
  onGenerate: (data: OfficialQuotationData) => void;
}

type FormValues = Omit<OfficialQuotationData, "date" | "travelDate"> & {
  date: Dayjs;
  travelDate: Dayjs;
};

const Section = ({ title }: { title: string }) => (
  <div className="mb-4 mt-8 border-b border-[#dbe4eb] pb-2 first:mt-0">
    <h2 className="text-lg font-bold text-[#003f63]">{title}</h2>
  </div>
);

export default function OfficialQuotationForm({ onGenerate }: Props) {
  const [form] = Form.useForm<FormValues>();

  const submit = (values: FormValues) => {
    onGenerate({
      ...values,
      date: values.date.format("DDMMM,YYYY"),
      travelDate: values.travelDate.format("D-MMM,YYYY"),
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={submit}
      className="form-block bg-white [&_.ant-form-item-label>label]:font-semibold [&_.ant-input-affix-wrapper]:rounded-lg [&_.ant-input-number]:rounded-lg [&_.ant-input]:rounded-lg [&_.ant-picker]:rounded-lg [&_.ant-select-selector]:!rounded-lg"
      initialValues={{
        date: dayjs("2026-08-06"),
        customerName: "Ijaz",
        passengerCount: 2,
        duration: 21,
        airline: "Direct Airline",
        route: "Lahore-Jeddah-Lahore",
        travelDate: dayjs("2026-08-12"),
        ticketClass: "Economy",
        visa: "Umrah Visa one year Valid Only",
        transport:
          "Jeddah Airport to Makkah Hotel to Madina Hotel to Makkah Hotel to Jeddah Airport by Car/Bus",
        makkahDays: 12,
        makkahHotel: "EMAAR ANDULUSIA",
        makkahCategory: "3*",
        makkahRoom: "Double room",
        makkahMeal: "Breakfast",
        madinaDays: 8,
        madinaHotel: "AL ANSAR GOLDEN",
        madinaCategory: "4*",
        madinaRoom: "Room only",
        madinaMeal: "",
        adultPrice: 301000,
        validityNote:
          "All rates and services are subject to availability. This quotation is valid for 48 hours.",
        paymentNote:
          "Rates may increase from 10AUG,2026. 70% payment is required at booking and the balance upon delivery of all vouchers. All payment must be cleared before departure.",
        signatory: "Raja Ejaz",
      }}
    >
      <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6ccef5]">
            Official document
          </p>
          <h1 className="mt-1 text-3xl font-bold text-[#003f63]">
            Official Quotation
          </h1>
          <p className="mt-1 text-slate-500">
            Create the one-page customer quotation from the supplied format.
          </p>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          icon={<FilePdfOutlined />}
          className="!bg-[#003f63]"
        >
          Generate PDF
        </Button>
      </div>

      <Section title="Quotation and customer" />
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Quotation date"
            name="date"
            rules={[{ required: true }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item
            label="Customer name"
            name="customerName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Mr. Waqar" />
          </Form.Item>
        </Col>
        <Col xs={12} md={4}>
          <Form.Item
            label="Passengers"
            name="passengerCount"
            rules={[{ required: true }]}
          >
            <InputNumber min={1} className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={12} md={4}>
          <Form.Item label="Days" name="duration" rules={[{ required: true }]}>
            <InputNumber min={1} className="w-full" />
          </Form.Item>
        </Col>
      </Row>

      <Section title="Ticket and visa" />
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Form.Item label="Airline" name="airline">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item label="Route" name="route">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item label="Travel date" name="travelDate">
            <DatePicker className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item label="Ticket class" name="ticketClass">
            <Select options={[{ value: "Economy" }, { value: "Business" }]} />
          </Form.Item>
        </Col>
        <Col xs={24} md={16}>
          <Form.Item label="Visa" name="visa">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Section title="Transport" />
      <Form.Item label="Transport details" name="transport">
        <Input.TextArea rows={3} />
      </Form.Item>

      <Section title="Hotels" />
      <Row gutter={16}>
        <Col xs={24} md={5}>
          <Form.Item label="Makkah days" name="makkahDays">
            <InputNumber min={1} className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={24} md={7}>
          <Form.Item label="Makkah hotel" name="makkahHotel">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={12} md={4}>
          <Form.Item label="Category" name="makkahCategory">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={12} md={4}>
          <Form.Item label="Room" name="makkahRoom">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={4}>
          <Form.Item label="Meal" name="makkahMeal">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={5}>
          <Form.Item label="Madina days" name="madinaDays">
            <InputNumber min={1} className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={24} md={7}>
          <Form.Item label="Madina hotel" name="madinaHotel">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={12} md={4}>
          <Form.Item label="Category" name="madinaCategory">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={12} md={4}>
          <Form.Item label="Room" name="madinaRoom">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={4}>
          <Form.Item label="Meal" name="madinaMeal">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Section title="Price and notes" />
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Adult price (PKR)"
            name="adultPrice"
            rules={[{ required: true }]}
          >
            <InputNumber min={0} className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item label="Signatory" name="signatory">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Validity note" name="validityNote">
        <Input.TextArea rows={2} />
      </Form.Item>
      <Form.Item label="Payment note" name="paymentNote">
        <Input.TextArea rows={3} />
      </Form.Item>
      <div className="mt-6 flex justify-end">
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          icon={<FilePdfOutlined />}
          className="!bg-[#003f63]"
        >
          Generate PDF
        </Button>
      </div>
    </Form>
  );
}

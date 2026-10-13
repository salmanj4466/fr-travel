"use client";

import { useState } from "react";
import { Modal, Button } from "antd";
import QuotationForm from "../components/pages/Quotation/QuotationForm";
import QuotationPreview from "../components/pages/Quotation/QuotationPreview";
import { QuotationData } from "../types/quotation";

export default function Quotation() {
  const [quotation, setQuotation] = useState<QuotationData | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleGenerate = (data: QuotationData) => {
    console.log("Quotation data received:", data);

    setQuotation(data);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <>
      <div className="mx-auto py-2">
        <QuotationForm onGenerate={handleGenerate} />

        {/* {quotation && !isPreviewOpen && (
          <div className="mt-6 flex justify-center">
            <Button
              type="primary"
              size="large"
              onClick={() => setIsPreviewOpen(true)}
              className="bg-[#002B63]"
            >
              View Quotation
            </Button>
          </div>
        )} */}
      </div>

      <Modal
        title="Quotation Preview"
        open={isPreviewOpen}
        onCancel={handleClosePreview}
        footer={null}
        width={1000}
        centered
        destroyOnHidden
      >
        {quotation && <QuotationPreview data={quotation} />}
      </Modal>
    </>
  );
}

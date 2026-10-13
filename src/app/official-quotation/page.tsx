"use client";

import { useState } from "react";
import { Modal } from "antd";
import DashboardShell from "../components/common/DashboardShell";
import OfficialQuotationForm from "../components/pages/OfficialQuotation/OfficialQuotationForm";
import OfficialQuotationPreview from "../components/pages/OfficialQuotation/OfficialQuotationPreview";
import type { OfficialQuotationData } from "../types/officialQuotation";

export default function OfficialQuotationPage() {
  const [quotation, setQuotation] = useState<OfficialQuotationData | null>(
    null,
  );

  return (
    <DashboardShell>
      <OfficialQuotationForm onGenerate={setQuotation} />
      <Modal
        title="Official Quotation Preview"
        open={quotation !== null}
        onCancel={() => setQuotation(null)}
        footer={null}
        width={1000}
        centered
        destroyOnHidden
      >
        {quotation && <OfficialQuotationPreview data={quotation} />}
      </Modal>
    </DashboardShell>
  );
}

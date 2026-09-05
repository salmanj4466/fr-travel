"use client";

import dynamic from "next/dynamic";
import { PDFDownloadLink } from "@react-pdf/renderer";
import type { OfficialQuotationData } from "@/app/types/officialQuotation";
import OfficialQuotationPDF from "./OfficialQuotationPDF";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((module) => module.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[760px] items-center justify-center bg-gray-100">
        Loading PDF preview...
      </div>
    ),
  },
);

export default function OfficialQuotationPreview({
  data,
}: {
  data: OfficialQuotationData;
}) {
  const fileName = `official-quotation-${data.customerName.replace(/\s+/g, "-").toLowerCase() || "customer"}.pdf`;

  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#003f63]">PDF Preview</h2>
          <p className="text-sm text-slate-500">
            Review the document, then download the finished quotation.
          </p>
        </div>
        <PDFDownloadLink
          document={<OfficialQuotationPDF data={data} />}
          fileName={fileName}
        >
          {({ loading }) => (
            <button
              type="button"
              disabled={loading}
              className="rounded-lg bg-[#003f63] px-4 py-2 font-semibold text-white disabled:opacity-50"
            >
              {loading ? "Preparing..." : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-xl">
        <PDFViewer width="100%" height={760} showToolbar>
          <OfficialQuotationPDF data={data} />
        </PDFViewer>
      </div>
    </section>
  );
}

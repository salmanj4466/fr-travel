"use client";

import dynamic from "next/dynamic";
import { PDFDownloadLink } from "@react-pdf/renderer";

import QuotationPDF from "./QuotationPDF";
import { QuotationData } from "@/app/types/quotation";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((module) => module.PDFViewer),
  {
    ssr: false,

    loading: () => (
      <div className="flex h-[850px] items-center justify-center bg-gray-100">
        <div className="text-lg text-[#003F63]">Loading PDF viewer...</div>
      </div>
    ),
  },
);

interface Props {
  data: QuotationData;
}

export default function QuotationPreview({ data }: Props) {
  return (
    <section className="mt-4">
      {/* <div className="mb-5 flex flex-col gap-4 rounded-xl bg-white p-5 shadow md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#003F63]">
            Quotation Preview
          </h2>

          <p className="mt-1 text-sm text-gray-500">{data.quotationNumber}</p>
        </div>

        <PDFDownloadLink
          document={<QuotationPDF data={data} />}
          fileName={`${data.quotationNumber || "quotation"}.pdf`}
        >
          {({ loading }) => (
            <button
              type="button"
              disabled={loading}
              className="rounded-lg bg-[#003F63] px-6 py-3 font-semibold text-white transition hover:bg-[#00244f] disabled:opacity-50"
            >
              {loading ? "Preparing PDF..." : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div> */}

      <div className="overflow-hidden rounded-xl border border-gray-300 bg-gray-200 shadow-xl">
        <PDFViewer width="100%" height={900} showToolbar>
          <QuotationPDF data={data} />
        </PDFViewer>
      </div>
    </section>
  );
}

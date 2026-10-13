import { ArrowRightOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { Button, Collapse, type CollapseProps } from "antd";
import SectionTitle from "../SectionTitle";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "What documents are required for an Umrah visa?",
    children: (
      <p>
        You generally need a valid passport, recent photographs, identity
        documents, and confirmed travel details. Our team provides a complete,
        up-to-date checklist for your application.
      </p>
    ),
  },
  {
    key: "2",
    label: "What is included in your Umrah packages?",
    children: (
      <p>
        Packages can include return flights, visa processing, accommodation in
        Makkah and Madinah, airport transfers, local transport, and guided
        ziyarat. Exact inclusions are shown with each package.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can you customize a package for my family or group?",
    children: (
      <p>
        Yes. We can tailor travel dates, hotel category, room arrangements,
        transport, and trip duration for individuals, families, and larger
        groups.
      </p>
    ),
  },
  {
    key: "4",
    label: "How early should I book my Umrah journey?",
    children: (
      <p>
        Booking four to eight weeks in advance is recommended, especially for
        Ramadan and school holidays. Early booking provides better flight and
        hotel availability.
      </p>
    ),
  },
  {
    key: "5",
    label: "Will support be available during the journey?",
    children: (
      <p>
        Yes. Our team remains available throughout your journey to help with
        travel coordination, accommodation, transport, and other practical
        concerns.
      </p>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="faq-brand home-section bg-[#f5fbfd]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionTitle
            className="faq-title"
            eyebrow="Frequently asked questions"
            title="Everything you need to"
            accent="know before you go"
          />
          <p className="mt-7 text-sm leading-7 text-[#66706c] sm:text-base">
            Find quick answers about visas, packages, booking, and support for
            your Umrah journey.
          </p>

  
        </div>

        <Collapse
          accordion
          defaultActiveKey={["1"]}
          items={items}
          expandIconPlacement="end"
          className="home-faq self-start border-0! bg-transparent!"
        />
      </div>
    </section>
  );
}

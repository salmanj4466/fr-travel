"use client";

import { useState, type ReactNode } from "react";
import dayjs, { type Dayjs } from "dayjs";

import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Space,
  type FormProps,
} from "antd";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CarOutlined,
  DeleteOutlined,
  FileTextOutlined,
  GlobalOutlined,
  HomeOutlined,
  IdcardOutlined,
  PlusOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Hotel, QuotationData } from "@/app/types/quotation";

interface Props {
  onGenerate: (data: QuotationData) => void;
}

type FormValue = string | number | Dayjs | undefined;
type QuotationFormValues = Record<string, FormValue>;
type SectionKey =
  | "customer"
  | "ticket"
  | "accommodation"
  | "transport"
  | "visa";
const SECTION_ORDER: SectionKey[] = [
  "customer",
  "ticket",
  "accommodation",
  "transport",
  "visa",
];

const DEFAULT_TERMS = [
  "Ticket payment will be advance, for ground package 50% payment is required within 3 working days. Rest of the payment is required within 7 working days of booking.",
  "100% payment is required if travelling within a month of booking.",
  "All hotels quoted are subject to availability/confirmation.",
  "Hotel confirmation will be provided after 7 working days of 1st 50% advance payment.",
  "Visa fee is non-refundable once visa is applied.",
  "Refund of air ticket is subject to airline policy; company service charges will apply.",
  "Any change in the above plan will subject to charges as per revised rates.",
];

const DEFAULT_REQUIREMENTS = [
  "6-month valid passport from date of travel",
  "Passport size photograph with white background",
];

function SectionHeading({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="mb-5 mt-9 flex items-center gap-3 first:mt-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F0F7] text-lg text-[#003F63]">
        {icon}
      </div>
      <div className="min-w-0">
        <h2 className="text-lg font-bold text-[#003F63]">{title}</h2>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
}

export default function QuotationForm({ onGenerate }: Props) {
  const [form] = Form.useForm<QuotationFormValues>();
  const [activeSection, setActiveSection] = useState<SectionKey>("customer");
  const activeSectionIndex = SECTION_ORDER.indexOf(activeSection);

  const [adult, setAdult] = useState(2);
  const [pricePerAdult, setPricePerAdult] = useState(375075);

  const totalPrice = adult * pricePerAdult;

  const [hotelCount, setHotelCount] = useState(3);

  const textValue = (value: FormValue) =>
    typeof value === "string" ? value : "";
  const numberValue = (value: FormValue) =>
    typeof value === "number" ? value : 0;
  const formattedDate = (value: FormValue, format: string) =>
    dayjs.isDayjs(value) ? value.format(format) : "";

  const handleVisaQuantityChange = (value: number | null) => {
    const quantity = Number(value || 0);

    setAdult(quantity);
    form.setFieldValue("adult", quantity);
  };

  const handleFinishFailed: NonNullable<
    FormProps<QuotationFormValues>["onFinishFailed"]
  > = ({ errorFields }) => {
    if (errorFields.some(({ name }) => name.includes("customerName"))) {
      message.error("Please enter Customer Name");
    }
  };

  const createHotel = (values: QuotationFormValues, index: number): Hotel => {
    return {
      hotelName: textValue(values[`hotel${index}Name`]),
      checkIn: formattedDate(values[`hotel${index}CheckIn`], "DD/MMM/YY"),
      checkOut: formattedDate(values[`hotel${index}CheckOut`], "DD/MMM/YY"),
      nights: numberValue(values[`hotel${index}Nights`]),
      roomType: textValue(values[`hotel${index}RoomType`]),
      distance: textValue(values[`hotel${index}Distance`]),
      mealPlan: textValue(values[`hotel${index}MealPlan`]),
    };
  };

  const submit = (values: QuotationFormValues) => {
    const hotels: Hotel[] = [];

    for (let i = 1; i <= hotelCount; i++) {
      hotels.push(createHotel(values, i));
    }

    const data: QuotationData = {
      quotationNumber:
        textValue(values.quotationNumber) ||
        `UMPK_${dayjs().format("DDMMYYYY")}_WA_001`,
      date:
        formattedDate(values.date, "dddd, D MMMM YYYY") ||
        dayjs().format("dddd, D MMMM YYYY"),
      customerName: textValue(values.customerName),
      passengers: numberValue(values.passengers),
      travelPlan: textValue(values.travelPlan),
      adult: numberValue(values.adult),
      child: numberValue(values.child),
      infant: numberValue(values.infant),
      quoteValidFor: textValue(values.quoteValidFor) || "-",
      contactNo: textValue(values.contactNo),
      travelDate: formattedDate(values.travelDate, "DD/MMM/YY"),
      returnDate: formattedDate(values.returnDate, "DD/MMM/YY"),
      noOfDays: numberValue(values.noOfDays),
      male: numberValue(values.male),
      female: numberValue(values.female),
      airline: textValue(values.airline),
      departureAirport: textValue(values.departureAirport),
      pnrDetails: textValue(values.pnrDetails),
      ticketRemarks: textValue(values.ticketRemarks),

      hotels,

      accommodationRemarks: textValue(values.accommodationRemarks),
      transportType: textValue(values.transportType),
      ziyarat: textValue(values.ziyarat),
      haramainTrain: textValue(values.haramainTrain),
      transportRoute: textValue(values.transportRoute),
      transportRemarks: textValue(values.transportRemarks),
      visaType: textValue(values.visaType),
      visaQuantity: numberValue(values.visaQuantity),
      visaRemarks: textValue(values.visaRemarks),

      pricePerAdult,

      totalPrice,

      terms: DEFAULT_TERMS,

      requirements: DEFAULT_REQUIREMENTS,
    };

    console.log("Generated quotation:", data);

    onGenerate(data);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={submit}
      onFinishFailed={handleFinishFailed}
      className="[&_.ant-form-item-label>label]:font-semibold [&_.ant-form-item-label>label]:text-slate-700 [&_.ant-input-affix-wrapper]:rounded-lg [&_.ant-input-number]:rounded-lg [&_.ant-input]:rounded-lg [&_.ant-picker]:rounded-lg [&_.ant-select-selector]:!rounded-lg"
      initialValues={{
        quotationNumber: `UMPK_${dayjs().format("DDMMYYYY")}_WA_001`,

        date: dayjs(),

        passengers: 2,

        adult: 2,

        child: 0,

        infant: 0,

        travelPlan: "Customized Umrah Package",

        quoteValidFor: "-",

        noOfDays: 20,

        visaType: "Umrah Visa",

        visaQuantity: 2,

        airline: "Airblue",

        departureAirport: "Lahore",

        pricePerAdult: 375075,
      }}
    >
      {/* <div className="text-end">
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          className="!h-12 !bg-[#003F63] !px-8 !text-base !font-semibold !shadow-lg !shadow-blue-950/20"
        >
          Generate Quotation
        </Button>
      </div> */}
      <div className="mt-2 flex flex-col gap-7 lg:flex-row">
        <aside className="lg:w-60 lg:shrink-0">
          <div className="flex gap-2 overflow-x-auto rounded-2xl bg-slate-50 p-2 lg:sticky lg:top-5 lg:flex-col lg:overflow-visible">
            {[
              {
                key: "customer",
                label: "Customer / Travel Info",
                icon: <IdcardOutlined />,
              },
              {
                key: "ticket",
                label: "Ticket Info",
                icon: <GlobalOutlined />,
              },
              {
                key: "accommodation",
                label: "Accommodation",
                icon: <HomeOutlined />,
              },
              { key: "transport", label: "Transport", icon: <CarOutlined /> },
              {
                key: "visa",
                label: "Visa Service",
                icon: <FileTextOutlined />,
              },
            ].map((section) => {
              const isActive = activeSection === section.key;

              return (
                <button
                  key={section.key}
                  type="button"
                  onClick={() => setActiveSection(section.key as SectionKey)}
                  className={`flex min-w-max items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition lg:min-w-0 ${
                    isActive
                      ? "bg-[#003F63] text-white shadow-md shadow-blue-950/15"
                      : "text-slate-600 hover:bg-white hover:text-[#003F63]"
                  }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="min-w-0 flex-1 form-block">
          <div
            className={
              activeSection === "customer" ? "block scroll-v" : "hidden"
            }
          >
            {/* ================= CUSTOMER ================= */}

            <SectionHeading
              title="Customer & travel information"
              description="Who is travelling, and when is the journey planned?"
              icon={<IdcardOutlined />}
            />

            <Row gutter={16}>
              <Col xs={24} md={8}>
                <Form.Item label="Quotation Number" name="quotationNumber">
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="Quotation Date" name="date">
                  <DatePicker className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item
                  label="Customer Name"
                  name="customerName"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please enter Customer Name",
                    },
                  ]}
                >
                  <Input placeholder="Waqar Alam" />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="No. of Passengers" name="passengers">
                  <InputNumber min={1} className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="Travel Plan" name="travelPlan">
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="Quote Valid For" name="quoteValidFor">
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="Adults" name="adult">
                  <InputNumber
                    min={0}
                    className="w-full"
                    onChange={(value) => setAdult(Number(value || 0))}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="Children" name="child">
                  <InputNumber min={0} className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="Infant" name="infant">
                  <InputNumber min={0} className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="Contact No." name="contactNo">
                  <Input placeholder="+92 323 450 1111" />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="Travel Date" name="travelDate">
                  <DatePicker className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="Return Date" name="returnDate">
                  <DatePicker className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="No. of Days" name="noOfDays">
                  <InputNumber min={0} className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="Male" name="male">
                  <InputNumber min={0} className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="Female" name="female">
                  <InputNumber min={0} className="w-full" />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div
            className={activeSection === "ticket" ? "block scroll-v" : "hidden"}
          >
            {/* ================= TICKET ================= */}

            <SectionHeading
              title="Ticket details"
              description="Add airline, departure, and booking reference information."
              icon={<GlobalOutlined />}
            />

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item label="Airline" name="airline">
                  <Select
                    placeholder="Select airline"
                    options={[
                      { label: "Airblue", value: "Airblue" },
                      { label: "Saudi Airlines", value: "Saudi Airlines" },
                      { label: "AirSial", value: "AirSial" },
                      { label: "PIA", value: "PIA" },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label="Departure Airport" name="departureAirport">
                  <Select
                    placeholder="Select departure airport"
                    options={[
                      { label: "Lahore", value: "Lahore" },
                      { label: "Karachi", value: "Karachi" },
                      { label: "Sialkot", value: "Sialkot" },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={24}>
                <Form.Item label="PNR / Flight Details" name="pnrDetails">
                  <Input.TextArea rows={2} />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Remarks" name="ticketRemarks">
                  <Input.TextArea rows={3} />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div
            className={
              activeSection === "accommodation" ? "block scroll-v" : "hidden"
            }
          >
            <SectionHeading
              title="Accommodation"
              description="List each hotel included in this package."
              icon={<HomeOutlined />}
            />

            {Array.from({
              length: hotelCount,
            }).map((_, index) => {
              const hotelNumber = index + 1;

              return (
                <Card
                  key={hotelNumber}
                  size="small"
                  className="mb-4 overflow-hidden border border-slate-200 shadow-sm"
                  styles={{ body: { padding: "20px" } }}
                  title={
                    <div className="-m-3 flex items-center gap-2 bg-[#F4F8FB] px-5 py-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#003F63] text-xs font-bold text-white">
                        {hotelNumber}
                      </span>
                      <span className="font-semibold text-[#003F63]">
                        Hotel details
                      </span>
                    </div>
                  }
                >
                  <Row gutter={16}>
                    <Col xs={24} md={8}>
                      <Form.Item
                        label="Hotel Name"
                        name={`hotel${hotelNumber}Name`}
                      >
                        <Input placeholder="Makkah Hotel" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={8}>
                      <Form.Item
                        label="Check In"
                        name={`hotel${hotelNumber}CheckIn`}
                      >
                        <DatePicker className="w-full" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={8}>
                      <Form.Item
                        label="Check Out"
                        name={`hotel${hotelNumber}CheckOut`}
                      >
                        <DatePicker className="w-full" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={6}>
                      <Form.Item
                        label="Number of Nights"
                        name={`hotel${hotelNumber}Nights`}
                      >
                        <InputNumber min={0} className="w-full" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={6}>
                      <Form.Item
                        label="Room Type"
                        name={`hotel${hotelNumber}RoomType`}
                      >
                        <Input placeholder="1 x Double" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={6}>
                      <Form.Item
                        label="Distance"
                        name={`hotel${hotelNumber}Distance`}
                      >
                        <Input placeholder="Shuttle / 200 M" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={6}>
                      <Form.Item
                        label="Meal Plan"
                        name={`hotel${hotelNumber}MealPlan`}
                      >
                        <Input placeholder="Room Only" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
              );
            })}

            <Space className="mb-2 rounded-xl bg-slate-50 p-2">
              <Button
                type="dashed"
                icon={<PlusOutlined />}
                onClick={() => setHotelCount((current) => current + 1)}
              >
                Add Hotel
              </Button>

              {hotelCount > 1 && (
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => setHotelCount((current) => current - 1)}
                >
                  Remove Hotel
                </Button>
              )}
            </Space>

            <Form.Item
              label="Accommodation Remarks"
              name="accommodationRemarks"
            >
              <Input.TextArea
                rows={3}
                placeholder="Hotels check-in/out will be confirmed after package confirmation."
              />
            </Form.Item>
          </div>

          <div
            className={
              activeSection === "transport" ? "block scroll-v" : "hidden"
            }
          >
            <SectionHeading
              title="Ground transport"
              description="Specify transfers, ziyarat, train, and route arrangements."
              icon={<CarOutlined />}
            />

            <Row gutter={16}>
              <Col xs={24} md={8}>
                <Form.Item label="Transport Type" name="transportType">
                  <Input placeholder="Sharing" />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="Ziyarat" name="ziyarat">
                  <Input placeholder="N/A" />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="Haramain Train" name="haramainTrain">
                  <Input placeholder="N/A" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Transport Route" name="transportRoute">
                  <Input placeholder="JED(A) - MEC(H) - MED(H) - MEC(H) - JED(A)" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Remarks" name="transportRemarks">
                  <Input.TextArea rows={3} />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div
            className={activeSection === "visa" ? "block scroll-v" : "hidden"}
          >
            <SectionHeading
              title="Visa services"
              description="Include the visa category, quantity, and any remarks."
              icon={<FileTextOutlined />}
            />

            <Row gutter={16}>
              <Col xs={24} md={8}>
                <Form.Item label="Visa Type" name="visaType">
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="Visa Quantity" name="visaQuantity">
                  <InputNumber
                    min={0}
                    className="w-full"
                    onChange={handleVisaQuantityChange}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={24}>
                <Form.Item label="Remarks" name="visaRemarks">
                  <Input.TextArea rows={3} />
                </Form.Item>
              </Col>
            </Row>

            <SectionHeading
              title="Package pricing"
              description="The total updates automatically from adults and price per adult."
              icon={<WalletOutlined />}
            />

            <Row gutter={16} justify={"space-between"}>
              <Col xs={24} md={6}>
                <Form.Item label="Price Per Adult">
                  <InputNumber
                    value={pricePerAdult}
                    min={0}
                    className="w-full"
                    prefix="Rs"
                    onChange={(value) => setPricePerAdult(Number(value || 0))}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <div className="rounded-xl bg-gradient-to-br from-[#002B63] to-[#07557D] p-5 text-white shadow-lg shadow-blue-950/15">
                  <p className="text-xs font-bold tracking-[0.12em] text-blue-200">
                    PACKAGE TOTAL
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <span className="text-sm text-blue-100">
                      {adult} adult{adult === 1 ? "" : "s"}
                    </span>
                    <strong className="text-2xl leading-none">
                      Rs {totalPrice.toLocaleString()}
                    </strong>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* ================= SUBMIT ================= */}

          <div className="mt-10 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              {activeSectionIndex === SECTION_ORDER.length - 1
                ? "Review the details, then generate the ready-to-share PDF."
                : "Complete each section before generating the quotation."}
            </p>
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <Button
                size="large"
                icon={<ArrowLeftOutlined />}
                disabled={activeSectionIndex === 0}
                onClick={() =>
                  setActiveSection(SECTION_ORDER[activeSectionIndex - 1])
                }
                className="!h-12 !px-5 !font-semibold"
              >
                Back
              </Button>

              {activeSectionIndex < SECTION_ORDER.length - 1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() =>
                    setActiveSection(SECTION_ORDER[activeSectionIndex + 1])
                  }
                  className="!h-12 !bg-[#003F63] !px-6 !font-semibold !shadow-lg !shadow-blue-950/20"
                >
                  Next <ArrowRightOutlined />
                </Button>
              ) : (
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                  className="!h-12 !bg-[#003F63] !px-8 !text-base !font-semibold !shadow-lg !shadow-blue-950/20"
                >
                  Generate Quotation
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

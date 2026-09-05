"use client";

import {
  Document,
  Font,
  Image,
  Page,
  Path,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";
import type { OfficialQuotationData } from "@/app/types/officialQuotation";

Font.register({
  family: "Poppins",
  fonts: [
    { src: "/fonts/Poppins-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/Poppins-Bold.ttf", fontWeight: 700 },
  ],
});

const navy = "#0d2d52";
const sky = "#eef4fb";
const styles = StyleSheet.create({
  page: {
    padding: 34,
    fontFamily: "Poppins",
    color: "#161f2b",
    fontSize: 10,
    lineHeight: 1.35,
  },
  header: { flexDirection: "row", minHeight: 145, alignItems: "flex-start" },
  logoBlock: { width: "53%", paddingTop: 9 },
  logo: { width: 137, height: 105, objectFit: "contain" },
  brand: { color: navy, fontSize: 16, fontWeight: 700, marginTop: 2 },
  contactBlock: {
    width: "47%",
    paddingLeft: 12,
    borderLeftWidth: 1,
    borderLeftColor: "#dbe7f3",
  },
  contactLine: { color: navy, fontSize: 10, fontWeight: 700, marginBottom: 8 },
  contactRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  contactIcon: { width: 13, height: 13, marginRight: 6, marginTop: 1 },
  contactText: { color: navy, fontSize: 10, fontWeight: 700, flex: 1 },
  address: { fontSize: 9, lineHeight: 1.45 },
  addressRow: { flexDirection: "row", alignItems: "flex-start", marginTop: 2 },
  date: { textAlign: "right", fontSize: 9, fontWeight: 700, marginTop: 17 },
  title: {
    textAlign: "center",
    color: "#111",
    fontSize: 15,
    fontWeight: 700,
    textDecoration: "underline",
    marginBottom: 20,
    marginTop: 20,
  },
  greeting: { fontSize: 11, marginBottom: 14 },
  paragraph: { fontSize: 10.5, marginBottom: 14 },
  serviceLine: { fontSize: 10.5, marginBottom: 13 },
  strong: { fontWeight: 700 },
  price: { fontSize: 11, marginTop: 1, marginBottom: 21 },
  regards: { fontSize: 10.5, marginBottom: 11 },
  signatory: { fontSize: 10.5, fontWeight: 700, marginBottom: 20 },
  company: { fontSize: 10.5, fontWeight: 700, marginBottom: 18 },
  noteBox: {
    backgroundColor: sky,
    borderLeftWidth: 3,
    borderLeftColor: navy,
    padding: 9,
    marginTop: 3,
  },
  note: { fontSize: 8.5, lineHeight: 1.45 },
  footer: {
    position: "absolute",
    bottom: 22,
    left: 34,
    right: 34,
    borderTopWidth: 5,
    borderTopColor: "#4180ad",
    paddingTop: 6,
    textAlign: "center",
    color: "#4180ad",
    fontSize: 7,
  },
});

const Strong = ({ children }: { children: React.ReactNode }) => (
  <Text style={styles.strong}>{children}</Text>
);

function ContactIcon({
  type,
}: {
  type: "phone" | "email" | "web" | "location";
}) {
  if (type === "phone") {
    return (
      <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path
          d="M6.6 2.8 9.4 2l2.1 5.1-2.2 1.8c1 2.2 2.8 4 5 5l1.8-2.2 5.1 2.1-.8 2.8c-.3 1.1-1.3 1.9-2.5 1.9C11 18.5 5.5 13 5.5 6.1c0-1.2.8-2.2 1.9-2.5Z"
          fill={navy}
        />
      </Svg>
    );
  }

  if (type === "email") {
    return (
      <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path d="M3 5h18v14H3z" fill="none" stroke={navy} strokeWidth="2" />
        <Path d="m4 7 8 6 8-6" fill="none" stroke={navy} strokeWidth="2" />
      </Svg>
    );
  }

  if (type === "web") {
    return (
      <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path
          d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
          fill="none"
          stroke={navy}
          strokeWidth="2"
        />
        <Path
          d="M3.5 12h17M12 3c2.2 2.4 2.2 15.6 0 18M12 3c-2.2 2.4-2.2 15.6 0 18"
          fill="none"
          stroke={navy}
          strokeWidth="1.5"
        />
      </Svg>
    );
  }

  return (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
      <Path
        d="M12 21s7-6.2 7-11A7 7 0 1 0 5 10c0 4.8 7 11 7 11Z"
        fill="none"
        stroke={navy}
        strokeWidth="2"
      />
      <Path
        d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        fill="none"
        stroke={navy}
        strokeWidth="2"
      />
    </Svg>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: "phone" | "email" | "web";
  children: string;
}) {
  return (
    <View style={styles.contactRow}>
      <ContactIcon type={icon} />
      <Text style={styles.contactText}>{children}</Text>
    </View>
  );
}

export default function OfficialQuotationPDF({
  data,
}: {
  data: OfficialQuotationData;
}) {
  return (
    <Document
      title={`Official Quotation - ${data.customerName}`}
      author="FR TRAVELS"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logoBlock}>
            {/* React-PDF images do not use the HTML alt attribute. */}
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src="/images/logo.png" style={styles.logo} />
          </View>
          <View style={styles.contactBlock}>
            <ContactRow icon="phone">0300 9419367</ContactRow>
            <ContactRow icon="email">graja5159@gmail.com</ContactRow>
            <ContactRow icon="web">www.frtravel.com</ContactRow>
            <View style={styles.addressRow}>
              <ContactIcon type="location" />
              <Text style={[styles.address, { flex: 1 }]}>
                Near Hussain Eye Hospital, Hallah Road Pattoki, District Kasur
              </Text>
            </View>
            <Text style={styles.date}>Date: {data.date}</Text>
          </View>
        </View>
        <Text style={styles.title}>
          Revised Official Quotation for Umrah Services for{" "}
          {data.passengerCount} persons {data.duration} days
        </Text>
        <Text style={styles.greeting}>Dear Mr. {data.customerName},</Text>
        <Text style={styles.paragraph}>
          Please note the following Umrah services offered by our Company on the
          basis of {data.passengerCount} Adult Passengers as discussed:
        </Text>
        <Text style={styles.serviceLine}>
          Ticket <Strong>{data.airline}</Strong> {data.route}{" "}
          <Strong>{data.ticketClass}</Strong> Travel date tentatively{" "}
          {data.travelDate}
        </Text>
        <Text style={styles.serviceLine}>
          Visa <Strong>{data.visa}</Strong>
        </Text>
        <Text style={styles.serviceLine}>Transport {data.transport}</Text>
        <Text style={styles.serviceLine}>
          {data.makkahDays} days Hotel Makkah{" "}
          <Strong>
            {data.makkahHotel} {data.makkahCategory}
          </Strong>{" "}
          {data.makkahRoom} with <Strong>{data.makkahMeal}</Strong>
        </Text>
        <Text style={styles.serviceLine}>
          {data.madinaDays} days Hotel Madina{" "}
          <Strong>
            {data.madinaHotel} {data.madinaCategory}
          </Strong>{" "}
          {data.madinaRoom}
        </Text>
        <Text style={styles.price}>
          Adult Price:{" "}
          <Strong>PKR {data.adultPrice.toLocaleString("en-PK")}/=</Strong> Each
          Adult Person
        </Text>
        <Text style={styles.regards}>Regards,</Text>
        <Text style={styles.signatory}>{data.signatory}.</Text>

        <Text style={styles.company}>FR TRAVELS & TOURS</Text>
        <View style={styles.noteBox}>
          <Text style={styles.note}>
            <Strong>Note: </Strong>
            {data.validityNote} {data.paymentNote}
          </Text>
        </View>
        <Text style={styles.footer}>
          FR TRAVELS & TOURS | Umrah and Travel Services
        </Text>
      </Page>
    </Document>
  );
}

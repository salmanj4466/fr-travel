"use client";

import { QuotationData } from "@/app/types/quotation";
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Poppins",
  fonts: [
    { src: "/fonts/Poppins-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/Poppins-Medium.ttf", fontWeight: 500 },
    { src: "/fonts/Poppins-SemiBold.ttf", fontWeight: 600 },
    { src: "/fonts/Poppins-Bold.ttf", fontWeight: 700 },
  ],
});

const NAVY = "#002B63";
const GOLD = "#6ccef5";
const LIGHT_BLUE = "#D8E1F1";
const BORDER = "#777777";
const WHITE = "#FFFFFF";

const styles = StyleSheet.create({
  page: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Poppins",
    fontSize: 8,
    fontWeight: 400,
    color: "#000",
  },

  header: {
    flexDirection: "row",
    height: 52,
    marginBottom: 2,
  },

  logoContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  logo: {
    width: 150,
    height: 42,
    objectFit: "contain",
  },

  quotationInfo: {
    width: "70%",
  },

  quotationRow: {
    height: 25,
    flexDirection: "row",
  },

  quotationLabel: {
    width: "50%",
    backgroundColor: NAVY,
    color: WHITE,
    borderWidth: 0.5,
    borderColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 8,
    fontWeight: "700",
    fontFamily: "Poppins",
  },

  quotationValue: {
    width: "50%",
    backgroundColor: "#6ccef5",
    color: WHITE,
    borderWidth: 0.5,
    borderColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 7.5,
    fontWeight: "700",
  },

  sectionHeader: {
    backgroundColor: "#003f63",
    color: WHITE,
    height: 15,
    justifyContent: "center",
    paddingLeft: 4,
    fontSize: 7,
    fontWeight: "700",
  },

  table: {
    width: "100%",
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: BORDER,
  },

  row: {
    flexDirection: "row",
  },

  cell: {
    minHeight: 14,
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 2,
    paddingBottom: 2,
    justifyContent: "center",
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: BORDER,
  },

  center: {
    textAlign: "center",
  },

  bold: {
    fontWeight: "bold",
  },

  labelCell: {
    backgroundColor: LIGHT_BLUE,
    fontWeight: "700",
  },

  hotelHeader: {
    backgroundColor: LIGHT_BLUE,
    fontWeight: "700",
    textAlign: "center",
  },

  spacer: {
    height: 6,
  },

  termsHeader: {
    width: "100%",
    backgroundColor: "#6ccef5",
    color: WHITE,
    padding: 3,
    fontWeight: "700",
    fontSize: 7.5,
  },

  termsRow: {
    minHeight: 12,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: BORDER,
    padding: 2.5,
    justifyContent: "center",
  },

  requirementHeader: {
    width: "100%",
    backgroundColor: "#6ccef5",
    color: WHITE,
    padding: 3,
    fontWeight: "bold",
    fontSize: 6.5,
  },

  signatureContainer: {
    alignSelf: "flex-end",
    marginTop: 6,
    width: 105,
    height: 28,
    flexDirection: "row",
  },

  signatureLabel: {
    width: 55,
    backgroundColor: "#6ccef5",
    color: WHITE,
    padding: 3,
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 6.5,
  },

  signatureSpace: {
    width: 50,
    borderWidth: 0.5,
    borderColor: BORDER,
  },

  footer: {
    marginTop: 6,
    height: 16,
    backgroundColor: NAVY,
    color: WHITE,
    textAlign: "center",
    paddingTop: 3,
    fontSize: 7,
  },

  pageNumber: {
    marginTop: 2,
    textAlign: "right",
    fontSize: 5.5,
    color: "#777777",
  },

  detailsColumns: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: "10px",
  },

  termsColumn: {
    width: "66%",
    marginRight: "4%",
  },

  requirementsColumn: {
    width: "30%",
  },
});

interface CellProps {
  children?: React.ReactNode;
  width: string;
  label?: boolean;
  center?: boolean;
  bold?: boolean;
}

function Cell({
  children,
  width,
  label = false,
  center = false,
  bold = false,
}: CellProps) {
  return (
    <View style={[styles.cell, { width }, label ? styles.labelCell : {}]}>
      <Text style={[center ? styles.center : {}, bold ? styles.bold : {}]}>
        {children ?? "-"}
      </Text>
    </View>
  );
}

export default function QuotationPDF({ data }: { data: QuotationData }) {
  if (!data) {
    return (
      <Document>
        <Page style={styles.page}>
          <Text>No quotation data</Text>
        </Page>
      </Document>
    );
  }

  return (
    <Document
      title={`Quotation - ${data.quotationNumber}`}
      author="FR Managements"
    >
      <Page size="A4" style={styles.page}>
        {/* ================= HEADER ================= */}

        <View style={styles.header}>
          <View style={styles.logoContainer}>
            {/* React-PDF's Image type does not support the HTML alt attribute. */}
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image style={styles.logo} src="/images/fr-logo.jpeg" />
          </View>

          <View style={styles.quotationInfo}>
            <View style={styles.quotationRow}>
              <View style={styles.quotationLabel}>
                <Text>Quotation Number</Text>
              </View>

              <View style={styles.quotationValue}>
                <Text>{data.quotationNumber}</Text>
              </View>
            </View>

            <View style={styles.quotationRow}>
              <View style={styles.quotationLabel}>
                <Text>Date</Text>
              </View>

              <View style={styles.quotationValue}>
                <Text>{data.date}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ================= CUSTOMER ================= */}

        <View style={styles.sectionHeader}>
          <Text>CUSTOMER INFO:</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.row}>
            <Cell width="25%" label>
              Customer Name:
            </Cell>

            <Cell width="25%" center>
              {data.customerName}
            </Cell>

            <Cell width="15%" label>
              Quote valid for:
            </Cell>

            <Cell width="35%" center>
              {data.quoteValidFor}
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              No. of Passengers
            </Cell>

            <Cell width="25%" center>
              {data.passengers}
            </Cell>

            <Cell width="15%" label>
              Contact No:
            </Cell>

            <Cell width="35%" center>
              {data.contactNo}
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Travel Plan
            </Cell>

            <Cell width="25%" center>
              {data.travelPlan}
            </Cell>

            <Cell width="15%" label>
              Travel Date:
            </Cell>

            <Cell width="35%" center>
              {data.travelDate}
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Adult
            </Cell>

            <Cell width="25%" center>
              {data.adult}
            </Cell>

            <Cell width="15%" label>
              Return Date:
            </Cell>

            <Cell width="35%" center>
              {data.returnDate}
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Child
            </Cell>

            <Cell width="25%" center>
              {data.child}
            </Cell>

            <Cell width="15%" label>
              No of Days
            </Cell>

            <Cell width="35%" center>
              {data.noOfDays}
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Infant
            </Cell>

            <Cell width="25%" center>
              {data.infant}
            </Cell>

            <Cell width="15%" label>
              Male
            </Cell>

            <Cell width="17.5%" center>
              {data.male}
            </Cell>

            <Cell width="8%" label>
              Female
            </Cell>

            <Cell width="9.5%" center>
              {data.female}
            </Cell>
          </View>
        </View>

        <View style={styles.spacer} />

        {/* ================= TICKET ================= */}

        <View style={styles.sectionHeader}>
          <Text>TICKET</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.row}>
            <Cell width="25%" label>
              Airline
            </Cell>

            <Cell width="25%" center>
              {data.airline}
            </Cell>

            <Cell width="50%" center bold>
              PNR NO. / Flight Details
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Departure Airport
            </Cell>

            <Cell width="25%" center>
              {data.departureAirport}
            </Cell>

            <Cell width="50%" center>
              {data.pnrDetails}
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Remarks
            </Cell>

            <Cell width="75%">{data.ticketRemarks}</Cell>
          </View>
        </View>

        <View style={styles.spacer} />

        {/* ================= ACCOMMODATION ================= */}

        <View style={styles.sectionHeader}>
          <Text>ACCOMMODATION</Text>
        </View>

        <View style={styles.table}>
          {/* HOTEL HEADER */}

          <View style={styles.row}>
            <Cell width="25%" label>
              Hotel Name
            </Cell>

            {data.hotels.map((hotel, index) => (
              <Cell
                key={index}
                width={`${75 / Math.max(data.hotels.length, 1)}%`}
                center
                bold
              >
                {hotel.hotelName || `HOTEL ${index + 1}`}
              </Cell>
            ))}
          </View>

          {/* CHECK IN */}

          <View style={styles.row}>
            <Cell width="25%" label>
              Check In Date
            </Cell>

            {data.hotels.map((hotel, index) => (
              <Cell
                key={index}
                width={`${75 / Math.max(data.hotels.length, 1)}%`}
                center
              >
                {hotel.checkIn}
              </Cell>
            ))}
          </View>

          {/* CHECK OUT */}

          <View style={styles.row}>
            <Cell width="25%" label>
              Check Out Date
            </Cell>

            {data.hotels.map((hotel, index) => (
              <Cell
                key={index}
                width={`${75 / Math.max(data.hotels.length, 1)}%`}
                center
              >
                {hotel.checkOut}
              </Cell>
            ))}
          </View>

          {/* NIGHTS */}

          <View style={styles.row}>
            <Cell width="25%" label>
              Number of Nights
            </Cell>

            {data.hotels.map((hotel, index) => (
              <Cell
                key={index}
                width={`${75 / Math.max(data.hotels.length, 1)}%`}
                center
              >
                {hotel.nights}
              </Cell>
            ))}
          </View>

          {/* ROOM TYPE */}

          <View style={styles.row}>
            <Cell width="25%" label>
              Room Type
            </Cell>

            {data.hotels.map((hotel, index) => (
              <Cell
                key={index}
                width={`${75 / Math.max(data.hotels.length, 1)}%`}
                center
              >
                {hotel.roomType}
              </Cell>
            ))}
          </View>

          {/* DISTANCE */}

          <View style={styles.row}>
            <Cell width="25%" label>
              Distance (Meters)
            </Cell>

            {data.hotels.map((hotel, index) => (
              <Cell
                key={index}
                width={`${75 / Math.max(data.hotels.length, 1)}%`}
                center
              >
                {hotel.distance}
              </Cell>
            ))}
          </View>

          {/* MEAL */}

          <View style={styles.row}>
            <Cell width="25%" label>
              Meal Plan
            </Cell>

            {data.hotels.map((hotel, index) => (
              <Cell
                key={index}
                width={`${75 / Math.max(data.hotels.length, 1)}%`}
                center
              >
                {hotel.mealPlan}
              </Cell>
            ))}
          </View>

          {/* REMARKS */}

          <View style={styles.row}>
            <Cell width="25%" label>
              Remarks
            </Cell>

            <Cell width="75%">{data.accommodationRemarks}</Cell>
          </View>
        </View>

        <View style={styles.spacer} />

        {/* ================= TRANSPORT ================= */}

        <View style={styles.sectionHeader}>
          <Text>GROUND TRANSPORT</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.row}>
            <Cell width="25%" label>
              Transport Type
            </Cell>

            <Cell width="15%" center>
              {data.transportType}
            </Cell>

            <Cell width="12%" label center>
              Route
            </Cell>

            <Cell width="48%" center>
              {data.transportRoute}
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Ziyarat
            </Cell>

            <Cell width="15%" center>
              {data.ziyarat}
            </Cell>

            <Cell width="12%" label center>
              Route
            </Cell>

            <Cell width="48%" center>
              N/A
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Haramain Train
            </Cell>

            <Cell width="15%" center>
              {data.haramainTrain}
            </Cell>

            <Cell width="12%" label center>
              Route
            </Cell>

            <Cell width="48%" center>
              N/A
            </Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Remarks
            </Cell>

            <Cell width="75%">{data.transportRemarks}</Cell>
          </View>
        </View>

        <View style={styles.spacer} />

        {/* ================= VISA ================= */}

        <View style={styles.sectionHeader}>
          <Text>VISA</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.row}>
            <Cell width="25%" label>
              Visa Type
            </Cell>

            <Cell width="30%" center>
              {data.visaType}
            </Cell>

            <Cell width="10%" center>
              {data.visaQuantity}
            </Cell>

            <Cell width="35%">{data.visaRemarks}</Cell>
          </View>

          <View style={styles.row}>
            <Cell width="25%" label>
              Remarks
            </Cell>

            <Cell width="75%">{data.visaRemarks}</Cell>
          </View>
        </View>

        <View style={styles.spacer} />

        {/* ================= PRICE ================= */}

        <View style={styles.table}>
          <View style={styles.row}>
            <Cell width="40%" label>
              Total Package Price (PKR) Per Adult
            </Cell>

            <Cell width="10%" center>
              {data.adult}
            </Cell>

            <Cell width="20%" center>
              Rs {data.pricePerAdult.toLocaleString()}
            </Cell>

            <Cell width="30%" center bold>
              Rs {data.totalPrice.toLocaleString()}
            </Cell>
          </View>

          <View
            style={[
              styles.row,
              {
                backgroundColor: NAVY,
              },
            ]}
          >
            <View
              style={[
                styles.cell,
                {
                  width: "40%",
                },
              ]}
            >
              <Text
                style={{
                  color: WHITE,
                  fontWeight: "700",
                  fontSize: "10px",
                }}
              >
                TOTAL PRICE
              </Text>
            </View>

            <View
              style={[
                styles.cell,
                {
                  width: "10%",
                },
              ]}
            >
              <Text
                style={{
                  color: WHITE,
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {data.adult}
              </Text>
            </View>

            <View
              style={[
                styles.cell,
                {
                  width: "50%",
                },
              ]}
            >
              <Text
                style={{
                  color: WHITE,
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "10px",
                }}
              >
                Rs {data.totalPrice.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>

        {/* ================= TERMS ================= */}

        <View style={styles.detailsColumns}>
          <View style={styles.termsColumn}>
            <Text style={styles.termsHeader}>Terms & Conditions:</Text>

            {data.terms.map((term, index) => (
              <View key={index} style={styles.termsRow}>
                <Text>
                  {index + 1}. {term}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.requirementsColumn}>
            <Text style={styles.requirementHeader}>Requirement:</Text>

            {data.requirements.map((item, index) => (
              <View key={index} style={styles.termsRow}>
                <Text>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ================= SIGNATURE ================= */}

        <View style={styles.signatureContainer}>
          <View style={styles.signatureLabel}>
            <Text>Authorized</Text>

            <Text>Signature</Text>
          </View>

          <View style={styles.signatureSpace} />
        </View>

        {/* ================= FOOTER ================= */}

        <Text style={styles.footer}>
          Call: +92 323 450 1111 | Email: travel@frtravel.com |{" "}
          www.frtravel.com/pk
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
}

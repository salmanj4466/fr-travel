export interface Hotel {
  hotelName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  roomType: string;
  distance: string;
  mealPlan: string;
}

export interface QuotationData {
  quotationNumber: string;
  date: string;

  customerName: string;
  passengers: number;
  travelPlan: string;

  adult: number;
  child: number;
  infant: number;

  quoteValidFor: string;
  contactNo: string;

  travelDate: string;
  returnDate: string;
  noOfDays: number;

  male: number;
  female: number;

  airline: string;
  departureAirport: string;
  pnrDetails: string;
  ticketRemarks: string;

  hotels: Hotel[];
  accommodationRemarks: string;

  transportType: string;
  ziyarat: string;
  haramainTrain: string;
  transportRoute: string;
  transportRemarks: string;

  visaType: string;
  visaQuantity: number;
  visaRemarks: string;

  pricePerAdult: number;
  totalPrice: number;

  terms: string[];
  requirements: string[];
}

export const umrahPackages = {
  economy: "Economy Umrah",
  standard: "Standard Umrah",
  deluxe: "Deluxe Umrah",
} as const;

export type UmrahEnquiryValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  package: keyof typeof umrahPackages;
  message: string;
};

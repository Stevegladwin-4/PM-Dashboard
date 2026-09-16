import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preventive Maintenance Dashboard",
  description: "PM1-PM4 equipment preventive maintenance dashboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
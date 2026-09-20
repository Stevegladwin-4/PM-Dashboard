import "./globals.css";
import "./equipment-mobile.css";
import "./auth.css";
import "./analytics.css";
import "./recharts-analytics.css";
import "./final-analytics.css";
import "./schedule-search.css";
import "./compact-analytics.css";
import "./professional-analytics.css";
import "./compact-chart-height.css";
import "./four-analytics-cards.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preventive Maintenance Dashboard",
  description: "PM1-PM4 equipment preventive maintenance dashboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
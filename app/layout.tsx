import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maya Tutor | Ethiopia",
  description: "Connect Ethiopian university tutors with families who need academic support."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

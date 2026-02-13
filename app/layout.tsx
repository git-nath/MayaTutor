import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        <Script id="maya-theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const savedTheme = localStorage.getItem('maya-theme');
              const useDay = savedTheme === 'day';
              document.documentElement.classList.toggle('day-mode', useDay);
            } catch (_) {
              document.documentElement.classList.remove('day-mode');
            }
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}

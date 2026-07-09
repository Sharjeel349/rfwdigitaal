import type { Metadata } from "next";
import { Afacad_Flux, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maverick Creative Group | Culture Driven Creative Solutions",
  description: "Welcome to Maverick Creative Group, the premier urban creative agency that empowers and innovates the culture through digital platforms, culture-driven branding, and strategy.",
  keywords: ["Creative Agency", "Urban Creativity", "Digital Innovation", "Branding", "Web Design", "Marketing"],
  openGraph: {
    title: "Maverick Creative Group",
    description: "The premier urban creative agency that empowers and innovates the culture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${afacadFlux.variable} ${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}

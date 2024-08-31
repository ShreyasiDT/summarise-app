import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summarise - Quick Video Insights",
  description:
    "Summarise and talk to Youtube Videos. Get quick insights from long content.",
  keywords: [
    "video summary",
    "YouTube summary",
    "content insights",
    "AI summarization",
  ],
  authors: [{ name: "Rohit Meshram" }],
  openGraph: {
    title: "Summarise - Quick Video Insights",
    description: "Get quick insights from long YouTube videos",
    url: "https://your-website-url.com",
    siteName: "Summarise",
    images: [
      {
        url: "https://your-website-url.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summarise - Quick Video Insights",
    description: "Get quick insights from long YouTube videos",
    images: ["https://your-website-url.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="dark">
        <div className="relative h-screen overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}

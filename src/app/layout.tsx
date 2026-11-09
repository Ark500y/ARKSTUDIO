import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/cursor/CustomCursor";
import { BRAND_INFO } from "@/data/portfolioData";

export const viewport: Viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ark-studio-portfolio.vercel.app"),
  title: {
    default: "ARK® — Abdul Rehman | Premium Creative Developer & Web Designer",
    template: "%s | ARK® — Abdul Rehman",
  },
  description:
    "Abdul Rehman — Independent Web Designer, Frontend Developer & Graphic Designer based in Sargodha, Pakistan. Crafting high-converting digital experiences, luxury UI/UX interfaces, and bilingual Arabic/English web platforms worldwide.",
  keywords: [
    "Abdul Rehman",
    "ARK Studio",
    "Creative Developer",
    "Freelance Web Designer Sargodha",
    "Frontend Developer Pakistan",
    "Bilingual Arabic English Websites",
    "Next.js Developer",
    "Saudi Arabia Web Designer",
    "UAE Web Design",
    "UI/UX Design",
    "Three.js 3D Web",
  ],
  authors: [{ name: "Abdul Rehman", url: "https://ark-studio-portfolio.vercel.app" }],
  creator: "Abdul Rehman",
  publisher: "ARK®",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ark-studio-portfolio.vercel.app",
    title: "ARK® — Abdul Rehman | Premium Creative Developer Portfolio",
    description:
      "Crafting high-converting digital experiences, luxury UI/UX interfaces, and bilingual Arabic/English web platforms worldwide.",
    siteName: "ARK® Digital Studio",
    images: [
      {
        url: "/assets/hero-concept-1.jpg",
        width: 1200,
        height: 630,
        alt: "ARK® — Abdul Rehman Digital Studio Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARK® — Abdul Rehman | Premium Creative Developer",
    description:
      "Independent Web Designer & Frontend Developer crafting digital experiences that move brands forward.",
    images: ["/assets/hero-concept-1.jpg"],
    creator: "@AbdulRehmanARK",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: BRAND_INFO.founderName,
    alternateName: BRAND_INFO.legalName,
    jobTitle: BRAND_INFO.roleTitle,
    url: "https://ark-studio-portfolio.vercel.app",
    email: BRAND_INFO.contact.email,
    telephone: BRAND_INFO.contact.phoneIntl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sargodha",
      addressCountry: "PK",
    },
    knowsAbout: [
      "Website Design",
      "Frontend Development",
      "UI/UX Design",
      "Next.js",
      "React",
      "Three.js",
      "Arabic & English Bilingual Websites",
      "Graphic Design",
      "Brand Identity",
      "Technical SEO",
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ARK® Digital Studio",
    founder: {
      "@type": "Person",
      name: BRAND_INFO.founderName,
    },
    url: "https://ark-studio-portfolio.vercel.app",
    telephone: BRAND_INFO.contact.phoneIntl,
    email: BRAND_INFO.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sargodha",
      addressCountry: "PK",
    },
    areaServed: BRAND_INFO.targetRegions,
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body className="bg-[#08090D] text-[#F2EFE9] antialiased selection:bg-[#B99B70] selection:text-[#08090D]">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

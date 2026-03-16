import { Metadata } from "next";
import OsbeliaCastilloContent from "./OsbeliaCastilloContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Osbelia Castillo | Founding Attorney | Personal Injury Specialist",
  description: "Meet Osbelia Castillo, founding attorney of The Law Office of Osbelia Castillo. With over 5 years of experience in civil litigation and insurance defense, she fights for maximum recovery for personal injury victims. Bilingual advocacy in English and Spanish.",
};

const attorneySchema = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Osbelia Castillo",
  "image": "https://castillolawsb.com/assets/osbelia-castillo.jpg",
  "description": "Founding Attorney specializing in personal injury, catastrophic injuries, and wrongful death.",
  "url": "https://castillolawsb.com/attorneys/osbelia-castillo",
  "telephone": "805-283-7656",
  "knowsLanguage": ["English", "Spanish"],
  "memberOf": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://castillolawsb.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Attorneys",
      "item": "https://castillolawsb.com/attorneys/osbelia-castillo"
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd data={attorneySchema} />
      <JsonLd data={breadcrumbSchema} />
      <OsbeliaCastilloContent />
    </>
  );
}

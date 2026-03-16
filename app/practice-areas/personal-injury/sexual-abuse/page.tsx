import { Metadata } from "next";
import SexualAbuseContent from "./SexualAbuseContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sexual Abuse & Molestation Lawyers | Osbelia Castillo",
  description: "Survivors of sexual abuse and institutional neglect deserve justice. Our Santa Barbara personal injury attorneys provide compassionate, confidential, and aggressive advocacy. Free consultation.",
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
      "name": "Practice Areas",
      "item": "https://castillolawsb.com/practice-areas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Personal Injury",
      "item": "https://castillolawsb.com/practice-areas/personal-injury"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Sexual Abuse & Molestation",
      "item": "https://castillolawsb.com/practice-areas/personal-injury/sexual-abuse"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Sexual Abuse & Molestation Litigation Lawyers | Osbelia Castillo",
  "description": "Legal representation for survivors of sexual abuse and institutional betrayal.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <SexualAbuseContent />
    </>
  );
}

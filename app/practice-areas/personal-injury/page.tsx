import { Metadata } from "next";
import PersonalInjuryContent from "./PersonalInjuryContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Personal Injury Law Specialists | Santa Barbara | Osbelia Castillo",
  description: "Injured due to someone else's negligence? We specialize in personal injury law, representing victims in slip and fall, dog bites, and catastrophic injury cases. defense-side insights to every plaintiff's case. Free consultation.",
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
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Personal Injury Law Specialists | Osbelia Castillo",
  "description": "Comprehensive legal representation for all personal injury and premises liability cases.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <PersonalInjuryContent />
    </>
  );
}

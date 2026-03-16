import { Metadata } from "next";
import AsbestosContent from "./AsbestosContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Asbestos & Mesothelioma Lawyers | Osbelia Castillo",
  description: "Diagnosed with mesothelioma or lung cancer due to asbestos exposure? Our personal injury attorneys hold negligent corporations accountable. Free consultation.",
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
      "name": "Asbestos & Mesothelioma",
      "item": "https://castillolawsb.com/practice-areas/personal-injury/asbestos-mesothelioma"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Asbestos & Mesothelioma Litigation Lawyers | Osbelia Castillo",
  "description": "Legal representation for victims of occupational asbestos exposure and mesothelioma.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <AsbestosContent />
    </>
  );
}

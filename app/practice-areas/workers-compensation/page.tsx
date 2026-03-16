import { Metadata } from "next";
import WorkersCompensationContent from "./WorkersCompensationContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Workers' Compensation Lawyers | Santa Barbara | Osbelia Castillo",
  description: "Injured at work? Our California workers' compensation attorneys protect your rights and ensure you receive maximum medical and financial benefits. Free consultation.",
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
      "name": "Workers' Compensation",
      "item": "https://castillolawsb.com/practice-areas/workers-compensation"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Workers' Compensation Lawyers | Osbelia Castillo",
  "description": "Legal advocacy for injured workers seeking medical and wage benefits in California.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <WorkersCompensationContent />
    </>
  );
}

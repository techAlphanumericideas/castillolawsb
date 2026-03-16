import { Metadata } from "next";
import VehicleAccidentsContent from "./VehicleAccidentsContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Vehicle Accident Lawyers | Santa Barbara & Ventura | Castillo Law",
  description: "Specialized legal representation for car, truck, motorcycle, and pedestrian accidents. We investigate thoroughly to secure maximum compensation for your injuries.",
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
      "item": "https://castillolawsb.com/practice-areas/personal-injury"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Vehicle Accidents",
      "item": "https://castillolawsb.com/practice-areas/vehicle-accidents"
    }
  ]
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Vehicle Accident Legal Services",
  "description": "Expert legal advocacy for victims of motor vehicle collisions in Southern California.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <VehicleAccidentsContent />
    </>
  );
}

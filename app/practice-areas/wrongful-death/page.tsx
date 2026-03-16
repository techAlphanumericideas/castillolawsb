import { Metadata } from "next";
import WrongfulDeathContent from "./WrongfulDeathContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Wrongful Death Attorneys | Santa Barbara | Osbelia Castillo",
  description: "Navigating the loss of a loved one is devastating. Our wrongful death lawyers provide compassionate advocacy and aggressive legal representation to secure your family's future. Free consultation.",
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
      "name": "Wrongful Death",
      "item": "https://castillolawsb.com/practice-areas/wrongful-death"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Wrongful Death Litigation Lawyers | Osbelia Castillo",
  "description": "Compassionate legal support for families seeking justice after a wrongful death.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <WrongfulDeathContent />
    </>
  );
}

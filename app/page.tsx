import Hero from "@/components/home/hero";
import ServicesPreview from "@/components/home/services-preview";
import HowItWorks from "@/components/home/how-it-works";
import WhyFokomo from "@/components/home/why-fokomo";
import MobileService from "@/components/home/mobile-service";
import SurveyCta from "@/components/home/survey-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <WhyFokomo />
      <MobileService />
      <SurveyCta />

     
    </>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
import Hero from "@/components/home/hero";
import ServicesPreview from "@/components/home/services-preview";
import HowItWorks from "@/components/home/how-it-works";
import WhyFokomo from "@/components/home/why-fokomo";
import MobileService from "@/components/home/mobile-service";
import SurveyCta from "@/components/home/survey-cta";
import Partnership from "@/components/home/partnership";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-y border-zinc-200 bg-zinc-950 text-white">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">


<div className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8">

  {/* Announcement */}
  <div className="flex items-center gap-4">
    <span className="h-2 w-2 shrink-0 rounded-full bg-white" />

    <h2 className="text-sm font-semibold uppercase tracking-[0.16em] sm:text-base">
      Fokomo is coming to your estates
    </h2>
  </div>

  {/* Supporting text */}
  <p className="max-w-xl text-sm leading-6 text-zinc-400 sm:text-right">
    We’re testing a more convenient way to care for your car.
  </p>

</div>


  </div>
</section>

      <ServicesPreview />
      <HowItWorks />
      <WhyFokomo />
      <MobileService />
      <SurveyCta />
      <Partnership />

     
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
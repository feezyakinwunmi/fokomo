"use client";

import Image from "next/image";
import Link from "next/link";

const partners = [
{
name: "Phantomire Technologies",
title: "Technology Partner",
logo: "/phantom.png",
href: "https://phantomiretechnologies.com",
},

// Add more partners here
// {
//   name: "Partner Name",
//   title: "Strategic Partner",
//   logo: "/partner-logo.png",
//   href: "https://partnerwebsite.com",
// },
];

export default function Partnership() {
return ( <section className="border-y border-zinc-200 bg-white py-14"> <div className="mx-auto max-w-7xl px-6 lg:px-8">


    {/* Section heading */}
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
        Partnerships
      </p>
    </div>

    {/* Partners */}
    <div className="flex flex-wrap items-start gap-12">
      {partners.map((partner) => (
        <Link
          key={partner.name}
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-w-[220px] flex-col items-start"
          aria-label={`Visit ${partner.name}`}
        >
          {/* Logo */}
          <div className="flex h-20 items-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={220}
              height={80}
              className="h-auto max-h-16 w-auto max-w-[220px] object-contain grayscale transition duration-300 group-hover:grayscale-0"
            />
          </div>

          {/* Company name */}
          <p className="mt-5 text-sm font-semibold tracking-tight text-zinc-900 transition group-hover:text-zinc-600">
            {partner.name}
          </p>

          {/* Partnership type */}
          <p className="mt-1 text-xs text-zinc-400">
            {partner.title}
          </p>
        </Link>
      ))}
    </div>

  </div>
</section>


);
}

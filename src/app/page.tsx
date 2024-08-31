import { Blur } from "~/components/home/Blur";
import Home from "~/components/home/Home";
import Meteors from "~/components/magicui/meteors";
import Particles from "~/components/magicui/particles";
import Script from "next/script";

export default async function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Summarise",
    url: "https://your-website-url.com",
    description:
      "Summarise and talk to Youtube Videos. Get quick insights from long content.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://your-website-url.com/summary/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex flex-col items-center justify-center overflow-hidden">
        <Blur />
        <Meteors number={30} />
        <Particles
          className="absolute inset-0 -z-50"
          quantity={50}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <Home />
      </main>
    </>
  );
}

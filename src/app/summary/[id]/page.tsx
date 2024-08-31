import { Suspense } from "react";

import { Loader } from "./Loader";
import SummaryPage from "./SummaryPage";
import Particles from "~/components/magicui/particles";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="flex h-[calc(100vh-62px)] w-screen flex-col items-center justify-center p-4">
      <Suspense fallback={<Loader />}>
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <SummaryPage params={params} />
      </Suspense>
    </div>
  );
}

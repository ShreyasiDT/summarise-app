import { Suspense } from "react";
import processVideo from "~/actions/process-video";
import ChatWindow from "./ChatWindow";
import { Error } from "./Error";
import InitialContent from "./InitialContent";
import { Loader } from "./Loader";

interface SummaryPageProps {
  params: {
    id: string;
  };
}

export default async function SummaryPage({ params }: SummaryPageProps) {
  const { id } = params;

  const result = await processVideo(id);

  if (result?.status === "error") {
    return <Error />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className=" flex h-full w-full justify-between gap-2">
        <ChatWindow videoId={id} />
        <InitialContent
          chapters={
            typeof result?.output === "object" ? result?.output : undefined
          }
          videoInfo={result?.videoInfo}
        />
      </div>
    </Suspense>
  );
}

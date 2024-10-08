import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { VideoInfo } from "~/actions/download";
export const Thumbnail = ({ videoInfo }: { videoInfo: VideoInfo }) => {
  const { title, author, viewCount } = videoInfo;
  const imgSrc =
    videoInfo?.thumbnails?.[videoInfo?.thumbnails?.length - 1]?.url;

  return (
    <div>
      <Card className="rounded-xl ">
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <p className="text-xl font-bold uppercase">{title}</p>
          <small className="text-default-500">{author}</small>
          <h4 className="text-large font-bold">{viewCount} Views</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            priority
            alt="thumbnail"
            src={imgSrc ?? ""}
            width={300}
            height={300}
            className="rounded-xl object-cover"
            loading="eager"
          />
        </CardBody>
      </Card>
    </div>
  );
};

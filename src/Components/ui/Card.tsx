import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  type: "youtube" | "twitter";
  link: string;
}

export function Card({ title, type, link }: CardProps) {
  return (
    <div className="bg-white rounded-md w-72 h-96 shadow-md border-gray-100 border p-4 overflow-auto no-scrollbar">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="pr-4 text-gray-500">
            <ShareIcon size="md" />
          </div>
          <span>{title}</span>
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <ShareIcon size="md" />
          </div>
          <div className="text-gray-500">
            <ShareIcon size="md" />
          </div>
        </div>
      </div>
      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full"
            src={link.replace("/watch?v=", "/embed/")} //https://www.youtube.com/watch?v=w0CMnOP-2ac"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet max-h-72">
            <a href={link}></a> 
          </blockquote>
        )}
      </div>
    </div>
  );
}

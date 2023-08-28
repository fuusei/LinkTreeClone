import Image from "next/image";
import linktreeData from "./linktreeData.json";

function LinkRow({
  title,
  icon,
  url,
}: {
  title: string;
  icon: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          <Image
            className="rounded-sm"
            src={icon}
            alt={title}
            width={40}
            height={40}
          />
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

interface Data {
  name: string;
  avatar: string;
  links: Link[];
}

interface Link {
  title: string;
  icon: string;
  url: string;
}

export default function Home() {
  const data: Data = linktreeData;
  return (
    <div className="flex flex-col items-center">
      <Image
        priority
        className="rounded-full mx-auto mt-10"
        alt={data.name}
        src={data.avatar}
        width={120}
        height={120}
      />
      <h1 className="font-bold my-8 text-xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkRow key={link.url} {...link}></LinkRow>
      ))}
    </div>
  );
}

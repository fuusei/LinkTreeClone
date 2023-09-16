"use client";
import Image from "next/image";
import { linkTreeData } from "./linkTreeData";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";

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
      className="flex px-1 py-2 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-4 max-w-3xl"
    >
      <div className="flex w-full">
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
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText("https://linktreeclone-silk.vercel.app/");
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div className="flex flex-col">
      <div
        className={`flex justify-end px-4 py-2 ${
          copied ? `text-green-500` : `text-white hover:text-pink-500`
        } `}
      >
        <button
          onClick={copyToClipboard}
          className="flex flex-row items-center bg-gray-800/75 rounded-md p-2"
        >
          {copied ? "Copied!" : "Copy Link"}
          <div className="pl-1">
            <AiOutlineLink />
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <Image
          priority
          className="rounded-full mx-auto mt-10"
          alt={linkTreeData.name}
          src={linkTreeData.avatar}
          width={120}
          height={120}
        />
        <h1 className="font-bold my-8 text-xl">{linkTreeData.name}</h1>
        {linkTreeData.links.map((link) => (
          <LinkRow key={link.url} {...link}></LinkRow>
        ))}
      </div>
    </div>
  );
}

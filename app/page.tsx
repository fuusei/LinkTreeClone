import Image from "next/image";
import data from "../data.json"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image className="rounded-full mx-auto mt-10" 
        alt={data.name}
        src={data.avatar}
        width={120}
        height={120}
      />
      <h1 className="font-semibold my-5">{data.name}</h1>
    </div>
  );
}

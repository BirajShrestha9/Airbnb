import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

interface SearchResult {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
}

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: SearchResult) {
  return (
    <div className="flex">
      <div className="relative h-24 w-40 md:h-52 md:w-80 shrink-0">
        <Image alt="infocard" src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p>{description}</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import { useSearch } from "./UseSearch";
import SearchUrl from "./SearchPage";
import { useRouter } from "next/navigation";
export interface PropsTypes {
  img: string;
  location: string;
  distance: string;
}

function SmallCard({ img, location, distance }: PropsTypes) {
  const router = useRouter();
  const { searchInput, setSearchInput, startDate, endDate, noOfGuests } =
    useSearch();
  const search = () => {
    // router.push(
    //   `/search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guests=${noOfGuests}`,
    // );
    const url = SearchUrl({
      searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      noOfGuests,
    });
    setSearchInput("");
    router.push(url);
  };

  return (
    <div
      className={`flex  items-center m-2 mt-5 space-x-4 rounded-xl
cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out`}
      onClick={search}
    >
      <div className="relative h-16 w-16">
        <Image src={img} alt="image" layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500"> {distance}</h3>
      </div>
    </div>
  );
}
export default SmallCard;

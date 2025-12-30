"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import { useState, useEffect } from "react";
interface SearchResults {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
}
// interface SearchResultProp {
//   searchResults: SearchResults[];
// }

export default function Search() {
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const router = useSearchParams();
  const location = router.get("location");
  const noOfGuests = router.get("guests");
  const startDate = router.get("startDate");
  const endDate = router.get("endDate");

  const formattedStartDate = startDate
    ? format(new Date(startDate), "dd MMMM")
    : "";
  const formattedEndDate = endDate ? format(new Date(endDate), "dd MMMM") : "";
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  useEffect(() => {
    fetch("./SearchCard.json")
      .then((res) => res.json())
      .then((data) => setSearchResults(data));
  }, []);

  return (
    <div>
      <Header />
      <main className="flex">
        <section className="grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="btn-airbnb">Cancellation Flexibility</p>
            <p className="btn-airbnb">Type Of Place</p>
            <p className="btn-airbnb">Price</p>
            <p className="btn-airbnb">Rooms and Beds</p>
            <p className="btn-airbnb">More Filters</p>
          </div>

          {searchResults.map((item) => (
            <InfoCard
              key={item.img}
              img={item.img}
              location={item.location}
              title={item.title}
              description={item.description}
              star={item.star}
              price={item.price}
              total={item.total}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
// export async function getServerSideProps() {
//   const searchResults = await fetch("https://links.papareact.com/isz").then(
//     (res) => res.json()
//   );
//   return {
//     props: {
//       searchResults,
//     },
//   };
// }

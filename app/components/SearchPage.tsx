// app/search/page.tsx
// import Search from "../search/page";

// export default async function SearchPage() {
//   const res = await fetch("https://links.papareact.com/isz");
//   const data = res.json();
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
interface SearchProp {
  searchInput: string;
  startDate: string;
  endDate: string;
  noOfGuests: number;
}

function SearchUrl({
  searchInput,
  startDate,
  endDate,
  noOfGuests,
}: SearchProp) {
  return `/search?location=${searchInput}&startDate=${startDate}&endDate=${endDate}&guests=${noOfGuests}`;
}

export default SearchUrl;

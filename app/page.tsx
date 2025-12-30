"use client";

import "tailwindcss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Head from "next/head";
import SmallCard from "./components/SmallCard";
import MediumCard from "./components/MediumCard";

// import { PropsTypes } from "./components/SmallCard";
import { useEffect, useState } from "react";
import LargeCard from "./components/LargeCard";
import Footer from "./components/Footer";
// export interface CitiesProps {
//   exploreData: PropsTypes[];
// }

export default function Home() {
  const [exploreData, setExploreData] = useState([]);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("./Api.json")
      .then((res) => res.json())
      .then((data) => setExploreData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("./ApiCard.json")
      .then((res) => res.json())
      .then((data) => setCardsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-y overflow-x p-4 overflow-scroll  hover:scrollbar-hide cursor-grab p-3-ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wish Created by Qwerty"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

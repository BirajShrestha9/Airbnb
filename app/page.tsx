import "tailwindcss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>

      <Header />
      <Banner />
    </div>
  );
}

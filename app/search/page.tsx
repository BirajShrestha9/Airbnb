import Footer from "../components/Footer";
import Header from "../components/Header";
function Search() {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="btn-airbnb">Cancellation Flexibility</p>
            <p className="btn-airbnb">Type Of Place</p>
            <p className="btn-airbnb">Price</p>
            <p className="btn-airbnb">Rooms and Beds</p>
            <p className="btn-airbnb">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Search;

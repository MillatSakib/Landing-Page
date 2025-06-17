import featureOne from "../../assets/features/feature-1.png";
import featureTwo from "../../assets/features/feature-2.png";
import Content from "./Content";
import Image from "./Image";
import Data from "./Data.jsx";
import Listing from "./Listing.jsx";
import ServiceCard from "../../components/card/ServiceCard.jsx";
import cardData from "./CardData.jsx";

function Service() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {Data.map((data, key) => (
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              {key == 0 && <Image src={featureOne} />}
              <Content data={data} key={key} />{" "}
              {key == 1 && <Image src={featureTwo} />}{" "}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
              Trusted Worldwide
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <Listing text={"Explore Legality Guide"} />
              <Listing text={"Visit the Trust Center"} />
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {cardData.map((data, key) => (
              <ServiceCard data={data} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;

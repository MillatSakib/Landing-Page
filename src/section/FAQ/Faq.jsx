import ToolTrip from "../../components/ToolTrip/ToolTrip";
import "flowbite";
import tooltripData from "./tooltripData.jsx";

function Faq() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h2>
          <div className="max-w-screen-md mx-auto">
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              {tooltripData.map((data, key) => (
                <ToolTrip
                  title={data.title}
                  description={data.description}
                  item={key + 1}
                  key={key}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

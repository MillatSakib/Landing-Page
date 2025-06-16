import Svg from "../../components/svg/Svg";

function Footer() {
  const company = ["About", "Careers", "Brand Center", "Blog"];
  const helpCenter = ["Discord Server", "Twitter", "Facebook", "Contact Us"];
  const legal = ["Privacy Policy", "Licensing", "Terms"];
  const download = ["iOS", " Android", "Windows", "MacOS"];
  return (
    <>
      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          {/* <!-- Sub Footer 1 --> */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {company.map((companyy, key) => (
                  <li key={key} className="mb-4">
                    <a href="#" className="hover:underline">
                      {companyy}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {helpCenter.map((help, key) => (
                  <li key={key} className="mb-4">
                    <a href="#" className="hover:underline">
                      {help}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {legal.map((le, key) => (
                  <li key={key} className="mb-4">
                    <a href="#" className="hover:underline">
                      {le}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {company.map((companyy, key) => (
                  <li key={key} className="mb-4">
                    <a href="#" className="hover:underline">
                      {companyy}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {download.map((down, key) => (
                  <li key={key} className="mb-4">
                    <a href="#" className="hover:underline">
                      {down}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/* <!-- Sub Footer 2 --> */}
          <div className="text-center">
            <a
              href="#"
              className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Svg image="lws" />
              Learn with Sumit{" "}
            </a>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
              <a
                href="#"
                target="_blank"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                Flowbite
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                Tailwind CSS
              </a>
              .
            </span>
            <ul className="flex justify-center mt-5 space-x-5">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Svg image="facebook" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Svg image="insta" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Svg image="tweeter" />
                </a>
              </li>
              <li>
                <a
                  ink
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Svg image="github" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Svg image="world" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;

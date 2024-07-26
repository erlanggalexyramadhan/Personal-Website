import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta" })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setTime(
      new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta" })
    );
  }, []);

  return (
    <footer className="footer bg-white">
      <div className=" py-16 sm:px-6">
        <div className="mt-16 grid grid-cols-2 gap-8">
          <div className="text-left">
            <p className="text-lg font-medium text-gray-900 border-b-2">
              Social
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="https://github.com/erlanggalexyramadhan"
                >
                  Github
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Instagram{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:text-left">
            <p className="text-lg font-medium text-gray-900 border-b-2">
              Contact
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="tel:+6285212118660"
                >
                  {" "}
                  Phone{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="mailto:erlanggalexyramadhan25@gmail.com"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="mt-16 grid grid-cols-2 gap-4 uppercase">
            <div className="flex flex-col text-3xl md:text-7xl font-Poppins font-bold text-black justify-start">
              <h2>&copy; 2024</h2>
              <h2>Erlangga</h2>
            </div>

            <div className="flex flex-col font-Poppins gap-4 sm:mt-4 text-lg md:text-2xl text-gray-500 justify-start">
              <h3 className="font-bold text-black">Local time</h3>
              {time}
              <p>Jakarta, IDN</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

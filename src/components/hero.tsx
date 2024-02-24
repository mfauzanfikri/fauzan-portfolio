import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [isImgLoading, setisImgLoading] = useState(true);

  return (
    <section id="home" className="pt-24 lg:pt-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-col flex-wrap lg:flex-row">
          <div className="w-full self-center font-VT323 lg:w-1/2">
            <h1 className="font-medium text-primary md:text-2xl ">
              Hi, there! This is me,
              <span className="block text-4xl font-bold text-dark lg:text-6xl">
                M. Fauzan Fikri
              </span>
            </h1>
            <h2 className="mb-5 text-lg text-secondary lg:text-3xl">
              I'm a{" "}
              <span className="font-bold text-dark">
                <Typewriter
                  words={[
                    "Web Developer",
                    "Full-stack Developer",
                    "System Analyst",
                  ]}
                  loop
                  cursor
                />
              </span>
            </h2>
            <p className="mb-5 max-w-xs text-secondary md:max-w-sm md:text-lg lg:text-xl">
              Driven by <span className="font-semibold">passion</span> to make
              quality products made with a little bit of{" "}
              <span className="text-rose-500">love</span>.
            </p>

            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-2 text-base text-white hover:opacity-80 focus:outline-2 focus:outline-dark md:text-lg xl:text-xl"
            >
              Contact Me
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-0">
              <img
                src="./images/fauzan.png"
                alt="M. Fauzan Fikri"
                className="mx-auto max-w-full"
                width={445}
                height={560}
                onLoad={() => {
                  setisImgLoading(false);
                }}
              />
              <span
                className={`${isImgLoading && "hidden"} absolute bottom-4 left-1/2 -z-10 -translate-x-1/2 overflow-hidden sm:scale-125 lg:bottom-10`}
              >
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-80 xs:w-[400px]"
                >
                  <path
                    fill="#0ea5e9"
                    d="M52,-54.2C65.7,-38.3,73.8,-19.2,75,1.1C76.1,21.5,70.3,42.9,56.6,58.5C42.9,74.1,21.5,83.7,2.2,81.5C-17,79.3,-34.1,65.2,-46.5,49.6C-58.9,34.1,-66.7,17,-66.2,0.4C-65.8,-16.2,-57.2,-32.4,-44.8,-48.3C-32.4,-64.1,-16.2,-79.7,1.5,-81.2C19.2,-82.6,38.3,-70.1,52,-54.2Z"
                    transform="translate(100 100) scale(0.8)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

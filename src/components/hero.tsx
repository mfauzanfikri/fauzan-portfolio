import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="hero" className="pt-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap flex-col lg:flex-row">
          <div className="w-full self-center font-VT323 lg:w-1/2">
            <h1 className="font-medium text-primary md:text-2xl ">
              Hi, there! This is me,
              <span className="block font-bold text-4xl text-dark lg:text-6xl">
                M. Fauzan Fikri
              </span>
            </h1>
            <h2 className="text-slate-600 text-lg mb-5 lg:text-3xl">
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
            <p className="text-slate-600 mb-5 md:text-lg lg:text-xl">
              Driven by <span className="font-semibold">passion</span> to make
              quality products made with a little bit of{" "}
              <span className="text-rose-500">love</span>.
            </p>

            <a
              href="#"
              className="py-2 px-4 rounded-full md:text-lg xl:text-xl text-base bg-primary hover:opacity-80 text-white focus:outline-2 focus:outline-dark"
            >
              Contact me
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 relative lg:mt-0 lg:right-0">
              <img
                src="./images/fauzan.png"
                alt="M. Fauzan Fikri"
                className="max-w-full mx-auto"
              />
              <span className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 -z-10 md:scale-125">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#0ea5e9"
                    d="M52,-54.2C65.7,-38.3,73.8,-19.2,75,1.1C76.1,21.5,70.3,42.9,56.6,58.5C42.9,74.1,21.5,83.7,2.2,81.5C-17,79.3,-34.1,65.2,-46.5,49.6C-58.9,34.1,-66.7,17,-66.2,0.4C-65.8,-16.2,-57.2,-32.4,-44.8,-48.3C-32.4,-64.1,-16.2,-79.7,1.5,-81.2C19.2,-82.6,38.3,-70.1,52,-54.2Z"
                    transform="translate(100 100) scale(0.9)"
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

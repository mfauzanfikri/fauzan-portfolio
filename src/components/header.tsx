import { useEffect, useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const humbergerHandler = () => {
    setIsActive(!isActive);
  };

  const navItemHandler = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const header = document.querySelector("header");
    const fixedNav = header?.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > fixedNav!) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isScrolling ? "fixed z-[999] bg-opacity-60 shadow-nav backdrop-blur-[5px]" : "absolute"} left-0 top-0 z-10 flex w-full items-center bg-transparent`}
    >
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="block py-6 font-VT323 text-xl font-bold tracking-wide text-primary lg:text-2xl"
            >
              mfauzanfikri
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              onClick={humbergerHandler}
              className="absolute right-4 block lg:hidden"
            >
              <span
                className={`my-2 block h-[2px] w-[30px] origin-top-left rounded bg-dark transition duration-300 ease-in-out ${isActive && "rotate-45"}`}
              ></span>
              <span
                className={`my-2 block h-[2px] w-[30px] rounded bg-dark transition duration-300 ease-in-out ${isActive && "scale-0"}`}
              ></span>
              <span
                className={`my-2 block h-[2px] w-[30px] origin-bottom-left rounded bg-dark transition duration-300 ease-in-out ${isActive && "-rotate-45"}`}
              ></span>
            </button>

            <nav
              className={`${!isActive && "hidden"} absolute right-4 top-[110%] w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none`}
            >
              <ul className="flex flex-col gap-2.5 lg:flex-row lg:gap-0">
                <a
                  href="#home"
                  className="mx-8 py-2 text-base text-dark hover:text-primary lg:mx-2.5"
                  onClick={navItemHandler}
                >
                  <li>Home</li>
                </a>
                <a
                  href="#about"
                  className="mx-8 py-2 text-base text-dark hover:text-primary lg:mx-2.5"
                  onClick={navItemHandler}
                >
                  <li>About</li>
                </a>

                <a
                  href="#portfolio"
                  className="mx-8 py-2 text-base text-dark hover:text-primary lg:mx-2.5"
                  onClick={navItemHandler}
                >
                  <li>Portfolio</li>
                </a>
                <a
                  href="#tech-stack"
                  className="mx-8 py-2 text-base text-dark hover:text-primary lg:mx-2.5"
                  onClick={navItemHandler}
                >
                  <li>Tech Stack</li>
                </a>
                <a
                  href="#contact"
                  className="mx-8 py-2 text-base text-dark hover:text-primary lg:mx-2.5"
                  onClick={navItemHandler}
                >
                  <li>Contact</li>
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

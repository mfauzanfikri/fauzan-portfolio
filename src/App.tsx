import { useEffect, useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import TechStack from "./components/techStack";
import Loader from "./components/loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.add("overflow-hidden");
    setTimeout(() => {
      body?.classList.remove("overflow-hidden");
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;

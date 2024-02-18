import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import TechStack from "./components/techStack";

const App = () => {
  return (
    <>
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

import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
import Experience from "./Component/Experience/Experience";
import Contact from "./Component/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  const [activeComponent, setActiveComponent] = useState("hero");

  const renderComponent = () => {
    switch (activeComponent) {
      case "hero":
        return <Hero onNavigate={setActiveComponent} />;
      case "about":
        return <About />;
      case "project":
        return <Project />;
      case "contact":
        return <Contact />;
      case "experience":
        return <Experience />;

      default:
        return <Hero onNavigate={setActiveComponent} />;
    }
  };
  return (
    <>
      <Navbar onNavigate={setActiveComponent} />
      {renderComponent()}
    </>
  );
}

export default App;

import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"; // Import useState to manage sidebar state
import Navbar from "./components/homepage/navbar/Navbar";
import Hero from "./components/homepage/hero/Hero";
import { Parallax } from "./components/parallax/Parallax";
import About from "./components/about/About";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Sidebar } from "./components/homepage/sidebar/Sidebar";
import AllProjects from "./components/all projcts/AllProjects";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for controlling the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar open/close state
  };

  return (
    <Router>
      <div className="App">
        {/* Pass the sidebar state and toggle function to Sidebar component */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="Homepage">
                  <Navbar />
                  <Hero />
                </section>
                <section id="Services">
                  <Parallax type="services" />
                </section>
                <section>
                  <About />
                </section>
                <section id="Portfolio">
                  <Parallax type="portfolio" />
                </section>
                <Portfolio />
                <section id="Contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

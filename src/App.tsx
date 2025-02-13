import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import Board from "./Board";
import Contact from "./Contact";
import KSEA from "./KSEA";
import About from "./About";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import GoBackButton from "./GoBackButton";
import Maintenance from "./Maintenance";

const Router = ({ isUnderMaintenance }: { isUnderMaintenance: boolean }) => {
  return (
    <Routes>
      {isUnderMaintenance ? (
        <Route path="*" element={<Maintenance />} />
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/KSEA" element={<KSEA />} />
        </>
      )}
    </Routes>
  );
};

const App = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // To track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and beyond 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [isUnderMaintenance, setIsUnderMaintenance] = useState<boolean>(false);

  // Example: Set `isUnderMaintenance` based on some condition
  useEffect(() => {
    // You can fetch the status from an API or set it based on a time check
    setIsUnderMaintenance(false); // Set to true when the site is under maintenance
  }, []);

  return (
    <>
      {/* Conditionally render the navbar */}
      {!isUnderMaintenance && (
        <nav
          className={`fixed w-full z-40 top-0 start-0 bg-zinc-300 bg-opacity-80 transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to="/" end>
              <img
                src={logo}
                alt="K-PEnSA Logo"
                className="self-center h-8 w-auto cursor-pointer"
              />
            </NavLink>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                <li>
                  <NavLink
                    to="/ABOUT"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-slate-800 bg-slate-800 rounded md:bg-transparent md:p-0"
                        : "block py-2 px-3 text-slate-400 rounded hover:text-slate-800 md:p-0"
                    }
                    end
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/board"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-slate-800 bg-slate-800 rounded md:bg-transparent md:p-0"
                        : "block py-2 px-3 text-slate-400 rounded hover:text-slate-800 md:p-0"
                    }
                  >
                    Board
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/KSEA"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-slate-800 bg-slate-800 rounded md:bg-transparent md:p-0"
                        : "block py-2 px-3 text-slate-400 rounded hover:text-slate-800 md:p-0"
                    }
                  >
                    KSEA
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Contact"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-slate-800 bg-slate-800 rounded md:bg-transparent md:p-0"
                        : "block py-2 px-3 text-slate-400 rounded hover:text-slate-800 md:p-0"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      {location.pathname !== "/" && <GoBackButton />}
      <Router isUnderMaintenance={isUnderMaintenance} />

      <ScrollToTop />
      <Footer />
    </>
  );
};

const WrappedApp = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default WrappedApp;

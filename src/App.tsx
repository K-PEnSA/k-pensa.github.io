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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollY = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {!isUnderMaintenance && (
        <nav
          className={`fixed w-full z-40 top-0 start-0 bg-transparent transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to="/" end className="-ml-2">
              <img
                src={logo}
                alt="K-PEnSA Logo"
                className="self-center h-8 w-auto cursor-pointer"
              />
            </NavLink>

            {/* 햄버거 버튼 (모바일 전용) */}
            <button
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✖️" : "☰"}
            </button>

            {/* 모바일 메뉴 */}
            <div
              className={`absolute top-16 left-0 w-full bg-white/90 backdrop-blur-sm shadow-md md:hidden transition-transform duration-300 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col p-4 space-y-4">
                <li>
                  <NavLink
                    to="/about"
                    className="block py-2 px-3 text-slate-800 rounded hover:bg-slate-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/KSEA"
                    className="block py-2 px-3 text-slate-800 rounded hover:bg-slate-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    KSEA
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/board"
                    className="block py-2 px-3 text-slate-800 rounded hover:bg-slate-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Board
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="block py-2 px-3 text-slate-800 rounded hover:bg-slate-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* 데스크탑 메뉴 */}
            <div className="hidden md:flex md:w-auto">
              <ul className="flex space-x-8">
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-slate-800 font-semibold"
                        : "text-slate-700 hover:text-slate-800 font-medium"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/KSEA"
                    className={({ isActive }) =>
                      isActive
                        ? "text-slate-800 font-semibold"
                        : "text-slate-700 hover:text-slate-800 font-medium"
                    }
                  >
                    KSEA
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/board"
                    className={({ isActive }) =>
                      isActive
                        ? "text-slate-800 font-semibold"
                        : "text-slate-700 hover:text-slate-800 font-medium"
                    }
                  >
                    Board
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-slate-800 font-semibold"
                        : "text-slate-700 hover:text-slate-800 font-medium"
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

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import EventCarousel from "./EventCarousel";
import logoCopy from "./assets/logo-copy.png";

// Animated counter component
const AnimatedCounter = ({ target, suffix = "", duration = 2, delay = 0 }: {
  target: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const increment = target / (duration * 60); // 60fps
        const counter = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);

        return () => clearInterval(counter);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, target, duration, delay]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden h-screen flex flex-col items-center justify-center">
      <motion.div 
        style={{ y: backgroundY }}
        className="full-page-gradient absolute inset-0 w-full h-[120%]"
      />
      

      {/* Main content with parallax */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 w-full flex flex-col items-center justify-center px-6"
      >
        <div className="text-center flex flex-col items-center max-w-4xl">
          <motion.img
            src={logoCopy}
            alt="K-PEnSA logo"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="-mt-9 md:-mt-11 mb-6 w-16 h-16 object-contain"
          />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-5 bg-gradient-to-r from-pensa-blue-70 via-pensa-blue-100 to-pensa-blue-70 bg-[length:200%_auto] bg-clip-text text-6xl font-bold font-DMSerifText text-transparent text-center"
          >
            Welcome to K-PEnSA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-9 text-lg text-slate-700 lg:text-xl font-medium text-center max-w-none md:whitespace-nowrap"
          >
            Korea-Penn Engineers and Scientists Association | Penn Young Generation
            Group of KSEA
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8a-Y0WvsH0Gf5laTamkoapMDFSzVfwVmbuJm8hj-7wyJq0A/viewform?usp=header"
              target="_blank"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-pensa-blue-70 hover:bg-pensa-blue-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join Us
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        style={{ y: logoY }}
        className="absolute bottom-8 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center text-slate-600">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const statsY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className="relative bg-white py-24 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-slate-800 mb-6 font-DMSerifText"
            whileInView={{ 
              backgroundPosition: ["0% 50%", "100% 50%"] 
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Who We Are
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Founded in 2015, Korea-Penn Engineers and Scientists Association (K-PEnSA) 
            is a vibrant community at the University of Pennsylvania that brings together 
            students at the crossroads of academics, career development, and social connection.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          style={{ y: statsY }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div 
              className="text-4xl font-bold text-pensa-blue-70 mb-2"
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter target={70} suffix="+" delay={0.5} />
            </motion.div>
            <div className="text-lg text-slate-600">Active Members</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div 
              className="text-4xl font-bold text-pensa-blue-70 mb-2"
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter target={20} suffix="+" delay={0.6} />
            </motion.div>
            <div className="text-lg text-slate-600">Live Semesters</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div 
              className="text-4xl font-bold text-pensa-blue-70 mb-2"
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter target={25} suffix="+" delay={0.7} />
            </motion.div>
            <div className="text-lg text-slate-600">Events Every Year</div>
          </motion.div>
        </motion.div>

        {/* Buttons below stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-10 justify-center items-center mb-16"
        >
          <motion.a
            href="/#/about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white rounded-lg bg-pensa-blue-70 hover:bg-pensa-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More About Us
            <svg
              className="w-4 h-4 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </motion.a>
          <motion.a
            href="/#/board"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white rounded-lg bg-pensa-blue-70 hover:bg-pensa-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Meet the Board
            <svg
              className="w-4 h-4 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h3 
            className="text-4xl font-bold text-slate-800 mb-6 font-DMSerifText"
            whileInView={{ 
              backgroundPosition: ["0% 50%", "100% 50%"] 
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Past Events
          </motion.h3>
          <motion.p 
            className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Browse highlights from recent semesters—including career panels, info sessions, socials, and study sessions.
          </motion.p>
          
          {/* Event Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <EventCarousel />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-8 rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
        >

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-4xl font-bold text-slate-800 mb-6 font-DMSerifText"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Join Our Community?
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Connect with fellow Korean Penn students in engineering and science. 
              Build lasting friendships, advance your career, and be part of something special.
            </motion.p>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8a-Y0WvsH0Gf5laTamkoapMDFSzVfwVmbuJm8hj-7wyJq0A/viewform?usp=header"
              target="_blank"
              className="inline-flex justify-center items-center py-4 px-8 text-lg font-medium text-center text-white rounded-lg bg-pensa-blue-70 hover:bg-pensa-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join K-PEnSA Today
              <motion.svg
                className="w-4 h-4 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
    </div>
  );
}

export default Home;

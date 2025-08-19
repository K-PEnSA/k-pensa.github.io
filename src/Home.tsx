import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  return (
    <section className="full-page-gradient relative isolate overflow-hidden px-6 h-screen flex flex-col items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 bg-gradient-to-r from-pensa-blue-70 via-pensa-blue-100 to-pensa-blue-70 bg-[length:200%_auto] bg-clip-text text-6xl font-bold font-DMSerifText text-transparent"
        >
          Welcome to K-PEnSA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 text-lg font-normal text-slate-700 lg:text-xl sm:px-16 lg:px-48 font-medium"
        >
          Korea-Penn Engineers and Scientists Association | Penn Young Generation
          Group of KSEA
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
        >
          <a
            href="https://pennclubs.com/club/korea-penn-engineers-and-scientists-association"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-pensa-blue-70 hover:bg-pensa-blue-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Founded in 2015, Korea-Penn Engineers and Scientists Association (K-PEnSA) 
            is a vibrant community at the University of Pennsylvania that brings together 
            students at the crossroads of academics, career development, and social connection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-pensa-blue-70 mb-2">70+</div>
            <div className="text-lg text-slate-600">Active Members</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-pensa-blue-70 mb-2">20+</div>
            <div className="text-lg text-slate-600">Live Semesters</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-pensa-blue-70 mb-2">25+</div>
            <div className="text-lg text-slate-600">Events Every Year</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-6">
            What We Do
          </h3>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We host a variety of events throughout the year, including networking sessions, 
            social gatherings, and academic workshops to foster professional and personal growth. 
            From study sessions to faculty chats, we create opportunities for members to connect, 
            learn, and grow together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Connect with fellow Korean Penn students in engineering and science. 
            Build lasting friendships, advance your career, and be part of something special.
          </p>
          <a
            href="https://pennclubs.com/club/korea-penn-engineers-and-scientists-association"
            target="_blank"
            className="inline-flex justify-center items-center py-4 px-5 text-base font-medium text-center text-white rounded-lg bg-pensa-blue-70 hover:bg-pensa-blue-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Join K-PEnSA Today
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
    </section>
  );
};

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <CTA />
    </div>
  );
}

export default Home;

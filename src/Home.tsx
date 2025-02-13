import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-300 px-6 h-[80vh] flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="animate-linear mb-8 bg-gradient-to-r from-pensa-blue-70 via-pensa-blue-100 to-pensa-blue-70 bg-[length:200%_auto] bg-clip-text text-6xl font-bold font-DMSerifText text-transparent"
      >
        Welcome to K-PEnSA
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48"
      >
        Korean Penn Engineering and Scientists Association | Penn Young
        Generation Group of KSEA
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
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-pensa-blue-70 hover:bg-pensa-blue-100"
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
    </section>
  );
};

function Home() {
  return (
    <section className="bg-zinc-300">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <Header />
      </div>
    </section>
  );
}

export default Home;

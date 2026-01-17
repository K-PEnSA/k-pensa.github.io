import React from "react";
import logo from "./assets/logo.svg";
import ksealogo from "./assets/ksea-logo.png";
import YGgroups from "./assets/kseaYG.svg";
import ksea1 from "./assets/ksea-1.png";
import ksea2 from "./assets/ksea-2.jpg";
import { motion } from "framer-motion";

const EASE = "easeOut" as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const viewportOnce = { once: true, amount: 0.3 };

const Header: React.FC = () => {
  return (
    <div className="py-6 px-4 mx-auto max-w-screen-xl sm:py-8 lg:py-12 lg:px-6">
      <div className="mx-auto max-w-screen-lg text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-slate-700"
        >
          K-PEnSA: A KSEA YG Group
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          className="font-light text-gray-500 text-base sm:text-lg lg:text-xl px-4"
        >
          K-PEnSA is a proud member of the KSEA Young Generation (YG) Groups,
          uniting Korean STEM undergraduate organizations across the nation.
        </motion.p>
      </div>
    </div>
  );
};

const Part1: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden px-6 py-6 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE }}
                className="mt-2 text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-700"
              >
                What is KSEA?
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
                className="mt-6 text-base/7 text-gray-700"
              >
                <a href="ksea.org" className="font-bold">
                  KSEA
                </a>{" "}
                stands for Korean-American Scientists and Engineers Association.
                Established in 1971 as a non-profit professional organization,
                it has grown to welcome over 7,000 registered members with 78
                local chapters/branches, 36 affiliated professional societies,
                and 16 technical groups covering all major branches of science
                and engineering. Since its founding, it has been recognized as
                the main representative organization promoting the common
                interests of Korean-American scientists and engineers. KSEA's
                vision is to foster international cooperation between the U.S.
                and Korea, help members develop their full career potential, and
                serve the community.
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <div className="relative w-full h-64 flex items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-20">
              <motion.img
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: 0.26 }}
                alt="K-PEnSA Logo"
                src={logo}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 transform -rotate-12"
              />

              <motion.img
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}
                alt="KSEA Logo"
                src={ksealogo}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 transform rotate-12"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Part2: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden px-6 py-1 sm:py-4 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-6">
        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE }}
          className="lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden p-4 sm:p-6 lg:p-8 lg:ml-20"
        >
          <img
            alt=""
            src={YGgroups}
            className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-[600px]"
          />
        </motion.div>

        <div className="lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pl-4">
            <div className="lg:max-w-lg">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE }}
                className="mt-2 text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-700"
              >
                YG Group
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
                className="mt-6 text-base/7 text-gray-700"
              >
                Today, KSEA is actively involved in helping create opportunities
                for the young generation by establishing lines of communication
                with other talented scientists and engineers in the U.S. and
                Korea. Notably, there are several student and young
                professional-led KSEA chapters across the country called Young
                Generation (YG) groups. YG groups work within their respective
                local chapters and/or universities to serve their communities
                while working with the KSEA YG National Board and other groups
                to maintain active communication within the KSEA community.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
                className="mt-2 text-xl/8 text-gray-700"
              >
                Alongside K-PEnSA, there are 27 YG groups that are currently
                active!
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Part3: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden px-6 py-6 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE }}
                className="mt-2 text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-700"
              >
                YG/KSEA Opportunities
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
                className="mt-6 text-base/7 text-gray-700"
              >
                As a member of KSEA YG Groups, you are encouraged to attend any
                relevant events/conferences or apply to scholarships. Designed
                for Korean-American undergraduate students in STEM, Katalyst
                (Korean-American Mentorship and Leadership Immersion for Young
                Scientists and Technologists) is an annual conference that
                provides a platform for mentorship, leadership development,
                career planning, and networking. Additionally, to recognize
                outstanding undergraduate students of Korean heritage in the
                United States who excel in academics as well as in services to
                the community, KSEA awards $1,500 scholarships to 20 recipients
                every year.
                <br />
                <br />
                To take advantage of these opportunities, sign up for KSEA's
                free undergraduate membership{" "}
                <a
                  href="https://docs.google.com/document/d/11typOBmHbB3SFvyWqaqwDY26LuH09YXsSPLsZf0IEsQ/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  here!
                </a>
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE }}
          className="-ml-6 -mt-6 p-6 sm:-ml-8 sm:-mt-8 sm:p-8 lg:-ml-12 lg:-mt-12 lg:p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <motion.img
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
                alt="KSEA Opportunities"
                src={ksea1}
                className="w-48 h-auto sm:w-56 md:w-64 lg:w-80 rounded-2xl shadow-xl transform rotate-6 absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-10"
              />
              <motion.img
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
                alt="KSEA Activities"
                src={ksea2}
                className="w-48 h-auto sm:w-56 md:w-64 lg:w-80 rounded-2xl shadow-xl transform -rotate-6 absolute top-32 right-4 sm:top-40 sm:right-6 md:top-44 md:right-8 lg:top-48 lg:right-16 z-20"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function KSEA() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24">
      <div className="subtle-gradient-bg fixed inset-0 -z-10" />
      <Header />
      <Part1 />
      <Part2 />
      <Part3 />
    </section>
  );
}

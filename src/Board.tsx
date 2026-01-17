import React, { useState, useRef } from "react";

import joannaImage from "./assets/boards/Joanna.jpg";
import briannaImage from "./assets/boards/Brianna.jpg";
import monicaImage from "./assets/boards/Monica.jpg";
import jaimieImage from "./assets/boards/Jaimie.jpg";
import heidiImage from "./assets/boards/Heidi.jpg";
import joshhongImage from "./assets/boards/joshhong.jpg";
import bominImage from "./assets/boards/Bomin.jpg";
import christinaImage from "./assets/boards/Christina.jpg";
import lukeImage from "./assets/boards/Luke.jpg";
import { motion, useInView } from "framer-motion";

const introContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.20,
    },
  },
};

const introItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const JoinUsButton: React.FC = () => {
  const [isActive] = useState(false); // Button is active
  const [isTooltipVisible, setTooltipVisible] = useState(false); // Tooltip visibility state

  return (
    <div className="relative inline-block">
      {/* Button */}
      <a
        href={
          isActive
            ? "https://docs.google.com/forms/d/e/1FAIpQLSe4bOPsvW_lVJ02UFlgCqyNcDdmkEP_7WHb1ygXBlWpIw6QFw/viewform?usp=header"
            : undefined
        }
        target={isActive ? "_blank" : undefined}
        rel={isActive ? "noopener noreferrer" : undefined}
        onMouseEnter={() => {
          if (!isActive) setTooltipVisible(true);
        }}
        onMouseLeave={() => {
          setTooltipVisible(false);
        }}
        className={`mx-auto inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg 
          ${
            isActive
              ? "bg-pensa-blue-70 text-white hover:bg-pensa-blue-100"
              : "border border-slate-400 text-slate-400 cursor-not-allowed"
          }`}
      >
        Join the Board
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

      {isTooltipVisible && (
        <div
          role="tooltip"
          className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg transform -translate-x-1/2 left-1/2 mt-2"
        >
          Board Application is not open now.
        </div>
      )}
    </div>
  );
};

const boardMembers = [
  {
    name: "Monica Cho",
    position: "President",
    image: monicaImage,
    description: "Bioengineering",
  },
  {
    name: "Heidi Seo",
    position: "Vice President",
    image: heidiImage,
    description: "Computer Science",
  },
  {
    name: "Joanna Kim",
    position: "External Chair",
    image: joannaImage,
    description: "Biochemistry",
  },
  {
    name: "Brianna Hess",
    position: "Internal Chair",
    image: briannaImage,
    description: "Physics",
  },
  {
    name: "Josh Hong",
    position: "Secretary",
    image: joshhongImage,
    description: "Neuroscience",
  },
  {
    name: "Jaimie Ha",
    position: "Treasurer",
    image: jaimieImage,
    description: "Biology",
  },
  {
    name: "Christina Cho",
    position: "Marketing Chair",
    image: christinaImage,
    description: "Neuroscience",
  },
  {
    name: "Bomin Kwon",
    position: "Freshman Rep",
    image: bominImage,
    description: "Chemical and Biomolecular Engineering",
  },
  {
    name: "Luke Jun",
    position: "Freshman Rep",
    image: lukeImage,
    description: "Biology",
  },
];

const Board = () => {
  return (
    <section className="relative py-24">
      <div className="subtle-gradient-bg fixed inset-0 -z-10" />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
        <motion.div
          className="mx-auto max-w-screen-lg text-center"
          variants={introContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            variants={introItem}
            className="mb-4 text-6xl tracking-tight font-extrabold text-slate-700"
          >
            Meet the Board
          </motion.h2>

          <motion.p
            variants={introItem}
            className="font-light text-gray-500 sm:text-xl"
          >
            Behind all of our events stands a dedicated K-PEnSA family.
          </motion.p>

          <motion.div
            variants={introItem}
            className="py-4 px-4 mx-auto text-center max-w-screen-l lg:py-8 lg:px-6"
          >
            <p className="text-base/7 text-gray-700">
              The K-PEnSA board functions as the governing body of K-PEnSA. Our
              community wouldn't exist without the hard work and commitment of
              our board members.
              <br />
              The board consists of 8 different positions with new board members
              being chosen from aspiring and passionate general body and
              incoming members in the beginning of Fall semesters.
            </p>

            <motion.div
              variants={introItem}
              className="flex justify-center items-center my-16"
            >
              <JoinUsButton />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid gap-8 mb-6 lg:mb-16 sm:grid-cols-3 lg:grid-cols-3">
          {boardMembers.map((member, index) => (
            <BoardMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BoardMemberCard = ({
  member,
  index,
}: {
  member: any;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const baseDelay = index * 0.06;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 26, scale: 0.96 }
      }
      transition={{ duration: 0.45, delay: baseDelay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="text-start p-5"
    >
      <motion.img
        className="mx-auto mb-4 w-96 h-96 object-cover transition-all duration-300"
        src={member.image}
        alt={`${member.name} Avatar`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.35, delay: baseDelay + 0.1 }}
      />

      <motion.h3
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        transition={{ duration: 0.4, delay: baseDelay + 0.16 }}
        className="mt-2 mb-2 text-3xl font-bold tracking-tight text-slate-700"
      >
        <p>{member.name}</p>
      </motion.h3>

      <motion.h4
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        transition={{ duration: 0.4, delay: baseDelay + 0.22 }}
        className="font-light text-xl text-gray-600"
      >
        {member.position}
      </motion.h4>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        transition={{ duration: 0.4, delay: baseDelay + 0.28 }}
        className="mt-2 font-light text-slate-500"
      >
        {member.description}
      </motion.p>
    </motion.div>
  );
};

export default Board;

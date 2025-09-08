import React, { useState, useRef } from "react";

import joannaImage from "./assets/boards/Joanna.jpg";
import briannaImage from "./assets/boards/Brianna.jpg";
import monicaImage from "./assets/boards/Monica.jpg";
import jaimieImage from "./assets/boards/Jaimie.jpg";
import heidiImage from "./assets/boards/Heidi.jpg";
import joshhongImage from "./assets/boards/joshhong.jpg";
import tbdImage from "./assets/boards/placeholder.jpg";
import { motion, useInView } from "framer-motion";

const JoinUsButton: React.FC = () => {
  const [isActive] = useState(true); // Button is active
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
    name: "TBD",
    position: "Marketing Chair",
    image: tbdImage,
    description: "--",
  },
  {
    name: "TBD",
    position: "Freshman Rep",
    image: tbdImage,
    description: "--",
  },
  {
    name: "TBD",
    position: "Freshman Rep",
    image: tbdImage,
    description: "--",
  },
];

const Board = () => {
  return (
    <section className="relative py-24">
      <div className="subtle-gradient-bg fixed inset-0 -z-10" />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
        <div className="mx-auto max-w-screen-lg text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-6xl font-DMSerifText tracking-tight font-extrabold text-slate-700"
          >
            Meet the Board
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-light text-gray-500 sm:text-xl"
          >
            Behind all of our events stands a dedicated K-PEnSA family.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-4 px-4 mx-auto text-center max-w-screen-l lg:py-8 lg:px-6"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base/7 text-gray-700"
          >
            The K-PEnSA board functions as the governing body of K-PEnSA. Our
            community wouldn't exist without the hard work and commitment of our
            board members.
            <br />
            The board consists of 8 different positions with new board members being
            chosen from aspiring and passionate general body and incoming members in the beginning of Fall
            semesters.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center items-center my-16"
          >
            <JoinUsButton />
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

// New component for animated board member cards
const BoardMemberCard = ({ member, index }: { member: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index < 3 ? index * 0.1 : (index - 3) * 0.02 + 0.3 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="text-start p-5"
    >
      <motion.img
        className="mx-auto mb-4 w-96 h-96 object-cover saturate-50 hover:saturate-100 transition-all duration-300"
        src={member.image}
        alt={`${member.name} Avatar`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index < 3 ? index * 0.1 + 0.3 : (index - 3) * 0.02 + 0.6 }}
      />
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index < 3 ? index * 0.1 + 0.1 : (index - 3) * 0.02 + 0.4 }}
        className="mt-2 mb-2 text-3xl font-bold tracking-tight font-DMSerifText text-slate-700"
      >
        <p>{member.name}</p>
      </motion.h3>
      <motion.h4 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index < 3 ? index * 0.1 + 0.2 : (index - 3) * 0.02 + 0.5 }}
        className="font-light text-xl text-gray-600"
      >
        {member.position}
      </motion.h4>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index < 3 ? index * 0.1 + 0.3 : (index - 3) * 0.02 + 0.6 }}
        className="mt-2 font-light text-slate-500"
      >
        {member.description}
      </motion.p>
    </motion.div>
  );
};

export default Board;

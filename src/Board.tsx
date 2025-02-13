import React, { useState } from "react";
import hajoonImage from "./assets/boards/Professional-Headshot.png";
import joannaImage from "./assets/boards/Joanna.jpg";
import briannaImage from "./assets/boards/Brianna.jpg";
import monicaImage from "./assets/boards/Monica.jpg";
import joshleeImage from "./assets/boards/JoshL.jpg";
import seoyeonImage from "./assets/boards/Seoyeon.jpg";
import jaimieImage from "./assets/boards/Jaimie.jpg";
import heidiImage from "./assets/boards/Heidi.jpg";
import joshhongImage from "./assets/boards/joshhong.jpg";

const JoinUsButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false); // Button activation state
  const [isTooltipVisible, setTooltipVisible] = useState(false); // Tooltip visibility state

  return (
    <div className="relative inline-block">
      {/* Button */}
      <a
        href={
          isActive
            ? "https://docs.google.com/forms/d/e/1FAIpQLScZBjyvGFNOOhyTszx3tP_h--rjUrwrXml1LbCI4uNxiS6Vpg/viewform"
            : undefined
        }
        target={isActive ? "_blank" : undefined}
        rel={isActive ? "noopener noreferrer" : undefined}
        onMouseEnter={() => !isActive && setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        className={`mx-auto inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg 
          ${
            isActive
              ? "bg-pensa-blue-70 text-white hover:bg-pensa-blue-100"
              : "border border-slate-400 text-slate-400 cursor-not-allowed"
          }`}
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
    name: "Josh Lee",
    position: "President",
    image: joshleeImage,
    description: "Computer Science/Business",
  },
  {
    name: "Seoyeon Choi",
    position: "Vice President",
    image: seoyeonImage,
    description: "Physics/Biophysics",
  },
  {
    name: "Monica Cho",
    position: "External Chair",
    image: monicaImage,
    description: "Bioengineering",
  },
  {
    name: "Hajoon Park",
    position: "Internal Chair",
    image: hajoonImage,
    description: "Design/Computer Science",
  },
  {
    name: "Heidi Seo",
    position: "Secretary",
    image: heidiImage,
    description: "Computer Science/Economics",
  },
  {
    name: "Joanna Kim",
    position: "Treasurer",
    image: joannaImage,
    description: "Biochemistry",
  },

  {
    name: "Brianna Hess",
    position: "Marketing Chair",
    image: briannaImage,
    description: "Physics",
  },
  {
    name: "Jaimie Ha",
    position: "Freshman Rep",
    image: jaimieImage,
    description: "Biology",
  },
  {
    name: "Josh Hong",
    position: "Freshman Rep",
    image: joshhongImage,
    description: "Neuroscience",
  },
];

const Board = () => {
  return (
    <section className="bg-zinc-300 py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="mb-4 text-6xl font-DMSerifText tracking-tight font-extrabold text-slate-700">
            Meet the Board
          </h2>
          <p className="font-light text-gray-500 sm:text-xl">
            Behind all our events stands the dedicated PEnSA family.
          </p>
        </div>
        <div className="py-4 px-4 mx-auto text-center max-w-screen-l lg:py-8 lg:px-6">
          <p className="text-base/7 text-gray-700">
            PEnSA board functions as the governing body of K-PEnSA. Our
            community wouldn't exist without the hard work and commitment of our
            boards.
            <br />
            The board consists of 8 differnent positions. New board members are
            chosen from aspiring general members in the beginning of Fall
            semesters.
          </p>
          <div className="flex justify-center items-center my-16">
            <JoinUsButton />
          </div>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 sm:grid-cols-3 lg:grid-cols-3">
          {boardMembers.map((member, index) => (
            <div key={index} className="text-start p-5">
              <img
                className="mx-auto mb-4 w-96 h-96 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                src={member.image}
                alt={`${member.name} Avatar`}
              />
              <h3 className="mt-2 mb-2 text-3xl font-bold tracking-tight font-DMSerifText text-slate-700">
                <p>{member.name}</p>
              </h3>
              <h4 className="font-light font-mono text-xl text-gray-400">
                {member.position}
              </h4>
              <p className="mt-2 font-light text-slate-500">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;

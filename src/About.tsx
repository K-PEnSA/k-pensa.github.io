import { STATUS_CODES } from "http";
import React from "react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import logo from "./assets/logo.svg";
import demographics from "./assets/demographics.png";

const stats = [
  { id: 1, name: "Active Members", value: "50+" },
  { id: 2, name: "Live Semesters", value: "20+" },
  { id: 3, name: "Events Every Year", value: "30+" },
];
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base/7 text-gray-600">{stat.name}</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  </div>
</div>;

// const Stats = () => {
//   return (
//     <div className="mx-auto max-w-7xl px-6 lg:px-8">
//       <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
//         {stats.map((stat) => (
//           <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
//             <dt
//               className={`text-base leading-7 text-gray-600 ${
//                 stat.id === 1
//                   ? "text-pensa-blue-70"
//                   : stat.id === 2
//                   ? "text-pensa-red-100"
//                   : "text-gray-900"
//               }`}
//             >
//               {stat.name}
//             </dt>
//             <dd
//               className={`order-first text-3xl font-semibold tracking-tight sm:text-5xl ${
//                 stat.id === 1
//                   ? "text-pensa-blue-70"
//                   : stat.id === 2
//                   ? "text-pensa-red-100"
//                   : "text-gray-900"
//               }`}
//             >
//               {" "}
//               {stat.value}
//             </dd>
//           </div>
//         ))}
//       </dl>
//     </div>
//   );
// };

// const Testimony = () => {
//   return (
//     <section className="relative isolate overflow-hidden bg-zinc-300 px-6 py-24 sm:py-32 lg:px-8">
//       <div className="mx-auto max-w-2xl lg:max-w-4xl">
//         <figure className="mt-10">
//           <figcaption className="mb-10">
//             <img alt="" src={logo} className="mx-auto h-36" />
//           </figcaption>
//           <blockquote className="text-center text-xl font-semibold leading-8 text-slate-900 sm:text-2xl sm:leading-9">
//             <p>
//               “We are an academic, pre-professional, and social organization for
//               Korean Penn students who are seeking to find a community with the
//               common interest of science and engineering.”
//             </p>
//           </blockquote>
//         </figure>
//       </div>
//     </section>
//   );
// };

// function About() {
//   return (
//     <section className="bg-zinc-300">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
//         <Testimony />
//       </div>
//     </section>
//   );
// }

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-300 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-neutral-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-neutral-300">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div> */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl">
                Who We Are
              </h1>
              <p className="mt-6 text-base/7 text-gray-700">
                “We are an academic, pre-professional, and social organization
                for Korean Penn students who are seeking to find a community
                with the common interest of science and engineering.”
              </p>
            </div>
          </div>
        </div>

        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={demographics}
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                K-PEnSA is a Korean-affiliated organization that fosters
                community at the intersection of academics, professional
                development, and social connections, especially for students in
                engineering and science disciplines. We emphasize professional
                growth and the exchange of valuable career insights, equipping
                our members for success in their chosen fields. Our mission is
                to build a robust Korean engineering and sciences network that
                bridges undergraduate students, graduate students, researchers,
                faculty, and alumni.
              </p>
              {/* <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Academic
                    </strong>{" "}
                    abcd
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Social
                    </strong>{" "}
                    bla
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Pre-professional
                    </strong>{" "}
                    blah
                  </span>
                </li>
              </ul>
              <p className="mt-8">haha</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                haha
              </h2>
              <p className="mt-6">haha</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl">
                Who We Are
              </h1>
              <p className="mt-6 text-base/7 text-gray-700">
                “We are an academic, pre-professional, and social organization
                for Korean Penn students who are seeking to find a community
                with the common interest of science and engineering.”
              </p>
            </div>
          </div>
        </div>

        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={demographics}
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                K-PEnSA is a Korean-affiliated organization that fosters
                community at the intersection of academics, professional
                development, and social connections, especially for students in
                engineering and science disciplines. We emphasize professional
                growth and the exchange of valuable career insights, equipping
                our members for success in their chosen fields. Our mission is
                to build a robust Korean engineering and sciences network that
                bridges undergraduate students, graduate students, researchers,
                faculty, and alumni.
              </p>
              {/* <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Academic
                    </strong>{" "}
                    abcd
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Social
                    </strong>{" "}
                    bla
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Pre-professional
                    </strong>{" "}
                    blah
                  </span>
                </li>
              </ul>
              <p className="mt-8">haha</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                haha
              </h2>
              <p className="mt-6">haha</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

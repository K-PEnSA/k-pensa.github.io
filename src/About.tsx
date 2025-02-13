import demographics from "./assets/demographics.png";
import banner from "./assets/fbmainbanner.jpg";

const links = [
  { name: "Join K-PEnSA", href: "#" },
  { name: "KSEA", href: "#" },
  { name: "Meet our leadership", href: "#" },
  { name: "Contact Us", href: "#" },
];

const Header = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-800 py-24 sm:py-32 mb-12">
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            K-PEnSA
          </h2>
          <p className="mt-8 text-xl font-medium text-pretty text-gray-300 sm:text-2xl">
            “We are an academic, pre-professional, and social organization for
            Korean Penn students who are seeking to find a community with the
            common interest of science and engineering.”
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

const stats = [
  { id: 1, name: "Active Members", value: "70+" },
  { id: 2, name: "Live Semesters", value: "20+" },
  { id: 3, name: "Events Every Year", value: "25+" },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-300 px-0 py-12 sm:py-20 lg:overflow-visible lg:px-0">
      <Header />
      <div className="mx-auto mb-24 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl">
                Who We Are
              </h1>
            </div>
          </div>
        </div>

        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={banner}
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-md"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                Founded in 2015, Korea-Penn Engineers and Scientists Association
                (K-PEnSA) is a vibrant community at the University of
                Pennsylvania that brings together students at the crossroads of
                academics, career development, and social connection. Our
                mission is to support the unique cultural and academic needs of
                Penn students in engineering and science-related fields,
                fostering a space where members can share professional insights,
                resources, and experiences that drive career growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                Our members represent all four undergraduate schools at the
                university: Penn Engineering, the College of Arts and Sciences,
                The Wharton School, Penn Nursing, and students in graduate
                programs as well. By connecting students from diverse academic
                backgrounds, we aim to cultivate a collaborative environment
                rooted in intellectual curiosity and shared professional goals.
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
      </div>
    </div>
  );
}

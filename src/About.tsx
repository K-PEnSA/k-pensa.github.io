import demographics from "./assets/demographics.png";
import banner from "./assets/fbmainbanner.jpg";
import event from "./assets/skating.jpg";

const links = [
  {
    name: "Join K-PEnSA",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScZBjyvGFNOOhyTszx3tP_h--rjUrwrXml1LbCI4uNxiS6Vpg/viewform",
  },
  { name: "KSEA", href: "/#/KSEA" },
  { name: "Meet our leadership", href: "/#/board" },
  { name: "Contact Us", href: "/#/contact" },
];

const stats = [
  { id: 1, name: "Active Members", value: "70+" },
  { id: 2, name: "Live Semesters", value: "20+" },
  { id: 3, name: "Events Every Year", value: "25+" },
];

const whatwedo = `We host a variety of events throughout the year, including networking sessions, social gatherings, and academic workshops to foster professional and personal growth. Some events you can attend are...

- Fall/Spring GBMs
- Study Sessions
- Study Breaks
- Advanced Registration Lunch
- Faculty Chat
- Upperclassmen Panel
- End-of-Semester Social

Additionally, you can take part of our membership benefits such as PEnSA-pedig, K-PEnSA "Houses", and more!`;

const Header = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-800 py-24 sm:py-32 mb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            K-PEnSA
          </h2>
          <p className="mt-8 text-xl font-medium text-pretty text-gray-300 sm:text-2xl">
            "We are an academic, pre-professional, and social organization for
            Korean Penn students who are seeking to find a community with the
            common interest of science and engineering."
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

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-300 px-0 py-12 sm:py-24 lg:overflow-visible lg:px-0">
      <Header />
      <Section
        title="Who We Are"
        image={banner}
        text="Founded in 2015, Korea-Penn Engineers and Scientists Association
        (K-PEnSA) is a vibrant community at the University of
        Pennsylvania that brings together students at the crossroads of
        academics, career development, and social connection. Our
        mission is to support the unique cultural and academic needs of
        Penn students in engineering and science-related fields,
        fostering a space where members can share professional insights,
        resources, and experiences that drive career growth and success."
      />
      <Section
        title="Our Community"
        image={demographics}
        text="Our members represent all four undergraduate schools at the
                university: Penn Engineering, the College of Arts and Sciences,
                The Wharton School, Penn Nursing, and students in graduate
                programs as well. By connecting students from diverse academic
                backgrounds, we aim to cultivate a collaborative environment
                rooted in intellectual curiosity and shared professional goals."
      />
      <Section title="What We Do" image={event} text={whatwedo} />
    </div>
  );
}

interface SectionProps {
  title: string;
  image: string;
  text: string;
}

const Section = ({ title, image, text }: SectionProps) => {
  return (
    <div className="my-24 px-4 lg:px-0 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <h1 className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl">
              {title}
            </h1>
          </div>
          <div className="max-w-xl mt-12 mb-12 lg:mb-0 text-base/7 text-gray-700 lg:max-w-lg">
            {text.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:overflow-hidden">
          <img
            alt=""
            src={image}
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

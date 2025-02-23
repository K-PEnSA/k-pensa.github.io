import logo from "./assets/logo.svg";
import ksealogo from "./assets/ksea-logo.png";
import KSEA1 from "./assets/KSEA1.png";
import YGgroups from "./assets/kseaYG.svg";

const Header: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-full lg:max-w-full">
        <div className="flex">
          <img alt="" src={logo} className="mx-auto h-24" />{" "}
          <img alt="" src={ksealogo} className="mx-auto h-24" />
        </div>

        <figure className="mt-10">
          <blockquote className="text-center mx-auto w-full max-w-full">
            <p className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-4xl font-regular font-DMSerifText tracking-tight text-slate-700 break-words">
              K-PEnSA is part of the KSEA Young Generation (YG) Groups, <br />
              uniting Korean STEM undergrad organizations across the nation.
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

const Part1: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-300 px-6 py-6 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl">
                What is KSEA?
              </h1>
              <p className="mt-6 text-base/7 text-gray-700">
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
                interests of Korean-American scientists and engineers. KSEA’s
                vision is to foster international cooperation between the U.S.
                and Korea, help members develop their full career potential, and
                serve the community.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={KSEA1}
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
      </div>
    </div>
  );
};

const Part2: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-300 px-6 py-6 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl">
                YG Group
              </h1>
              <p className="mt-6 text-base/7 text-gray-700">
                Today, KSEA is actively involved in helping create opportunities
                for the young generation by establishing lines of communication
                with other talented scientists and engineers in the U.S. and
                Korea. Notably, there are several student and young
                professional-led KSEA chapters across the country called Young
                Generation (YG) groups. YG groups work within their respective
                local chapters and/or universities to serve their communities
                while working with the KSEA YG National Board and other groups
                to maintain active communication within the KSEA community.
              </p>
              <p className="mt-12 mb-6 text-xl/8 text-gray-700">
                Alongside K-PEnSA, there are 27 YG groups that are currently
                active!
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img alt="" src={YGgroups} className="w-full max-w-none" />
        </div>
      </div>
      <div className=" lg:mx-auto  lg:w-full lg:max-w-7xl  lg:py-12 lg:px-8 ">
        <div className="lg:pr-4">
          <div className=" text-base/7 text-gray-700">
            <p>
              As a member of KSEA YG Groups, you are encouraged to attend any
              relevant events/conferences or apply to scholarships. Designed for
              Korean-American undergraduate students in STEM, Katalyst
              (Korean-American Mentorship and Leadership Immersion for Young
              Scientists and Technologists) is an annual conference that
              provides a platform for mentorship, leadership development, career
              planning, and networking. To recognize outstanding undergraduate
              students of Korean heritage in the United States who excel in
              academics as well as in services to the community, KSEA awards
              $1,500 scholarships to 20 recipients every year.
              <br />
              To take advantage of these opportunities, sign up for KSEA’s free
              undergraduate membership{" "}
              <a
                href="https://docs.google.com/document/d/11typOBmHbB3SFvyWqaqwDY26LuH09YXsSPLsZf0IEsQ/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                here!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function KSEA() {
  return (
    <div className="bg-zinc-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Header />
      </div>
      <Part1 />
      <Part2 />
    </div>
  );
}

import logo from "./assets/logo.svg";
import ksealogo from "./assets/ksea-logo.png";
import KSEA1 from "./assets/KSEA1.png";
import YGgroups from "./assets/YGgroups.png";

const Header: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-full lg:max-w-full">
        <div className="flex">
          <img alt="" src={logo} className="mx-auto h-12" />{" "}
          <img alt="" src={ksealogo} className="mx-auto h-12" />
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
    <div className="relative isolate overflow-hidden bg-zinc-300 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl">
                What is KSEA?
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                KSEA stands for "Korean-American Scientists and Engineers
                Association." KSEA is a national organization fostering
                U.S.-Korea cooperation and career development for
                Korean-American scientists and engineers.Founded in 1971, KSEA
                supports 7,000+ members through 70+ groups. KSEA is a community
                of students & professionals across the country with interest in
                STEM & Korean culture.
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
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                “We are also part of KSEA (Korean-American Scientists and
                Engineers Association), K-PEnSA mainly participates in two of
                KSEA’s conferences, which are Katalyst and IMPACTS. ◦ Katalyst:
                a conference that focuses on mentorship, leadership, career
                planning, and networking. ◦ IMPACTS: a conference that builds
                peer support, offers corporate insights, and exposes students to
                industry roles beyond academia.”
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
};

const Part2: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-300 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl">
                YG Group
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                KSEA stands for "Korean-American Scientists and Engineers
                Association." KSEA is a national organization fostering
                U.S.-Korea cooperation and career development for
                Korean-American scientists and engineers.Founded in 1971, KSEA
                supports 7,000+ members through 70+ groups. KSEA is a community
                of students & professionals across the country with interest in
                STEM & Korean culture.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={YGgroups}
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          />
          <p className="my-12">hellslfos</p>
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
            </div>
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

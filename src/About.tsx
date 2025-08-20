import demographics from "./assets/demographics.png";
import banner from "./assets/fbmainbanner.jpg";
import event from "./assets/skating.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

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

export default function About() {
  return (
    <section className="relative py-24">
      <div className="subtle-gradient-bg fixed inset-0 -z-10" />
      
      {/* Header styled consistently with Board page */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
        <div className="mx-auto max-w-screen-lg text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-6xl font-DMSerifText tracking-tight font-extrabold text-slate-700"
          >
            About K-PEnSA
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-light text-gray-500 sm:text-xl"
          >
            "We are an academic, pre-professional, and social organization for
            Korean Penn students who are seeking to find a community with the
            common interest of science and engineering."
          </motion.p>
        </div>
      </div>
      
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
    </section>
  );
}

interface SectionProps {
  title: string;
  image: string;
  text: string;
}

const Section = ({ title, image, text }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="my-24 px-4 lg:px-0 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {title === "Our Community" ? (
          // Special layout for Our Community: pie chart on left, text on right
          <>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-start-1 lg:row-start-1 lg:overflow-hidden flex items-center justify-center"
            >
                          <div className="w-full h-80 flex flex-col items-start justify-start">
              <h3 className="text-lg font-semibold text-slate-600 mb-4">Major Distribution</h3>
              <AnimatedPieChart />
            </div>
            </motion.div>
            
            <div className="lg:col-start-2 lg:pl-4">
              <div className="lg:max-w-lg">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl"
                >
                  {title}
                </motion.h1>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-xl mt-12 mb-12 lg:mb-0 text-base/7 text-gray-700 lg:max-w-lg"
              >
                {text.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </motion.div>
            </div>
          </>
        ) : (
          // Original layout for other sections: text on left, image on right
          <>
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl"
                >
                  {title}
                </motion.h1>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-xl mt-12 mb-12 lg:mb-0 text-base/7 text-gray-700 lg:max-w-lg"
              >
                {text.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:overflow-hidden"
            >
              <img
                alt=""
                src={image}
                className="w-full max-w-none rounded-xl bg-gray-900 shadow-md"
              />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

// Animated Pie Chart Component using Recharts
const AnimatedPieChart = () => {
  const chartRef = useRef(null);
  const isChartInView = useInView(chartRef, { once: true, margin: "-50px" });

  // Sample data - you can adjust these percentages and labels
  const data = [
    { name: "Pre-Health/Natural Sciences", value: 49.4, color: "#99bdf7" },
    { name: "Engineering", value: 6.0, color: "#2f2e75" },
    { name: "CIS/DMD", value: 26.5, color: "#9b99f7" },
    { name: "Business/Humanities", value: 15.7, color: "#767699" },
    { name: "Design", value: 2.4, color: "#111136" }
  ];

  const COLORS = data.map(item => item.color);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded-md shadow-md">
          <p className="font-medium text-gray-800 text-sm">{payload[0].name}</p>
          <p className="text-gray-600 text-xs">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div ref={chartRef} className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, cx, cy, midAngle, innerRadius, outerRadius }) => {
              if (midAngle === undefined || innerRadius === undefined || outerRadius === undefined) {
                return null;
              }
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              
              return (
                <text 
                  x={x} 
                  y={y} 
                  fill="black" 
                  textAnchor={x > cx ? 'start' : 'end'} 
                  dominantBaseline="central"
                  className="text-xs font-medium"
                >
                  {name}
                </text>
              );
            }}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
            strokeWidth={0}
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

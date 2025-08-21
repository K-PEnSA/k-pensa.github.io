import demographics from "./assets/demographics.png";
import banner from "./assets/fbmainbanner.jpg";
import event from "./assets/skating.jpg";
import { motion, useInView, animate } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const links = [
  { name: "Join K-PEnSA", href: "https://docs.google.com/forms/d/e/1FAIpQLScZBjyvGFNOOhyTszx3tP_h--rjUrwrXml1LbCI4uNxiS6Vpg/viewform" },
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

type Slice = { name: string; value: number };

function AnimatedSweepPie({
  data,
  title = "Major Distribution",
  colors = ["#99bdf7", "#2f2e75", "#9b99f7", "#767699", "#111136", "#8B5CF6", "#3B82F6", "#EAB308", "#F43F5E", "#06B6D4"],
  animationDuration = 1200,
  startAngle = -90,
}: {
  data: Slice[];
  title?: string;
  colors?: string[];
  animationDuration?: number;
  startAngle?: number;
}) {
  const [sweep, setSweep] = useState(0);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(hostRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    setSweep(0);
    const controls = animate(0, 360, {
      duration: animationDuration / 1000,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setSweep(v),
    });
    return () => controls.stop();
  }, [inView, JSON.stringify(data), animationDuration]);

  const total = useMemo(() => data.reduce((a, d) => a + (isFinite(d.value) ? d.value : 0), 0), [data]);
  const palette = useMemo(() => Array.from({ length: data.length }, (_, i) => colors[i % colors.length]), [colors, data.length]);

  const RAD = Math.PI / 180;
  const LABEL_OFFSET =20; // distance outside the outerRadius
  const renderLabel = ({ name, cx, cy, midAngle, outerRadius }: any) => {
    const r = (outerRadius ?? 0) + LABEL_OFFSET;
    const x = cx + r * Math.cos(-midAngle * RAD);
    const y = cy + r * Math.sin(-midAngle * RAD);
    const textAnchor = Math.cos(-midAngle * RAD) >= 0 ? "start" : "end";
    
    // Split Pre-Health/Natural Sciences into two lines
    if (name === "Pre-Health/Natural Sciences") {
      const lineHeight = 14;
      return (
        <g>
          <text
            x={x}
            y={y - lineHeight/2}
            textAnchor={textAnchor}
            dominantBaseline="central"
            style={{ fontSize: "11px", fill: "#333" }}
          >
            Pre-Health/
          </text>
          <text
            x={x}
            y={y + lineHeight/2}
            textAnchor={textAnchor}
            dominantBaseline="central"
            style={{ fontSize: "11px", fill: "#333" }}
          >
            Natural Sciences
          </text>
        </g>
      );
    }
    
    return (
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        dominantBaseline="central"
        style={{ fontSize: "11px", fill: "#333" }}
      >
        {name}
      </text>
    );
  };

  return (
    <div ref={hostRef} className="w-full p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base sm:text-sm font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              startAngle={startAngle}
              endAngle={startAngle + sweep}
              innerRadius={70}
              outerRadius={130}
              paddingAngle={0}
              isAnimationActive={false}
              labelLine={({ cx, cy, midAngle, innerRadius, outerRadius }) => {
                const RAD = Math.PI / 180;
                const sin = Math.sin(-RAD * midAngle);
                const cos = Math.cos(-RAD * midAngle);
                const x1 = cx + outerRadius * cos;
                const y1 = cy + outerRadius * sin;
                const x2 = cx + (outerRadius + 12) * cos;
                const y2 = cy + (outerRadius + 12) * sin;
                return (
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#999"
                    strokeWidth={1}
                  />
                );
              }}
              label={renderLabel} 
            >
              {data.map((_, i) => (
                <Cell key={i} fill={palette[i]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(v: number, _n: string, { payload }: any) => [`${v}%`, payload?.name]}
              contentStyle={{ 
                fontSize: '12px', 
                padding: '6px 8px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function About() {
  const majors: Slice[] = [
    { name: "Pre-Health/Natural Sciences", value: 49.4 },
    { name: "Engineering", value: 6.0 },
    { name: "CIS/DMD", value: 26.5 },
    { name: "Business/Humanities", value: 15.7 },
    { name: "Design", value: 2.4 },
  ];

  return (
    <section className="relative py-24">
      <div className="subtle-gradient-bg fixed inset-0 -z-10" />

      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
        <div className="mx-auto max-w-screen-lg text-center">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-4 text-6xl font-DMSerifText tracking-tight font-extrabold text-slate-700">
            About K-PEnSA
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-light text-gray-500 sm:text-xl">
            "We are an academic, pre-professional, and social organization for Korean Penn students who are seeking to find a community with the common interest of science and engineering."
          </motion.p>
        </div>
      </div>

      <Section title="Who We Are" image={banner} text="Founded in 2015, Korea-Penn Engineers and Scientists Association (K-PEnSA) is a vibrant community at the University of Pennsylvania that brings together students at the crossroads of academics, career development, and social connection. Our mission is to support the unique cultural and academic needs of Penn students in engineering and science-related fields, fostering a space where members can share professional insights, resources, and experiences that drive career growth and success." />

      <Section
        title="Our Community"
        image={demographics}
        text="Our members represent all four undergraduate schools at the university: Penn Engineering, the College of Arts and Sciences, The Wharton School, Penn Nursing, and students in graduate programs as well. By connecting students from diverse academic backgrounds, we aim to cultivate a collaborative environment rooted in intellectual curiosity and shared professional goals."
        reverse={true}
        rightSlot={
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="-ml-0 lg:-ml-12"
          >
            <AnimatedSweepPie data={majors} title="Major Distribution 24-25" animationDuration={2500} />
          </motion.div>
        }
      />

      <Section title="What We Do" image={event} text={whatwedo} />
    </section>
  );
}

interface SectionProps {
  title: string;
  image: string;
  text: string;
  reverse?: boolean;
  hideImage?: boolean;
  rightSlot?: React.ReactNode;
}

const Section = ({ title, image, text, reverse = false, hideImage = false, rightSlot }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contentOrder = reverse ? "lg:order-2" : "lg:order-1";
  const sideOrder = reverse ? "lg:order-1" : "lg:order-2";
  const contentColSpan = rightSlot ? "" : hideImage ? "lg:col-span-2" : "";

  return (
    <div ref={ref} className="my-24 px-4 lg:px-0 mx-auto max-w-2xl lg:max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-10 lg:items-start">
        {rightSlot ? (
          <div className={`${sideOrder}`}>{rightSlot}</div>
        ) : !hideImage ? (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.8, delay: 0.4 }} className={`${sideOrder} -ml-12 -mt-12 p-12 lg:sticky lg:top-4`}>
            <img alt="" src={image} className="w-full max-w-none rounded-xl bg-gray-900 shadow-md" />
          </motion.div>
        ) : null}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.2 }} className={`${contentOrder} lg:pr-4 ${contentColSpan}`}>
          <div className="lg:max-w-lg">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} transition={{ duration: 0.8 }} className="mt-2 text-pretty text-4xl font-DMSerifText font-semibold tracking-tight text-slate-700 sm:text-5xl">
              {title}
            </motion.h1>
          </div>
          <div className="max-w-xl mt-12 mb-12 lg:mb-0 text-base/7 text-gray-700 lg:max-w-lg">
            {text.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </motion.div>
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

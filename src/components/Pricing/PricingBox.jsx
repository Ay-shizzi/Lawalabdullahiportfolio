import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";

const TABS = ["basic", "standard", "premium"];
const CONTENT_DURATION = 280; // ms for content fade

// All plan data in one place — no more repeated JSX blocks
const PLANS = {
  basic: {
    ctaLabel: "Start a Project",
    delivery: "Quick Delivery",
    revision: "Revisions",
    features: [
      ["1 Custom Landing Page", "Clean Modern Layout"],
      ["Responsive Design", "Smooth User Experience"],
      ["UI Implementation", "Figma Design Support"],
      ["Content Integration", "Deployment Assistance"],
      ["Performance Optimization", "Cross-Browser Compatibility"],
      ["Basic SEO Setup", "Conversion-Focused Structure"],
    ],
  },
  standard: {
    ctaLabel: "Discuss Project",
    delivery: "Quick Delivery",
    revision: "Revisions",
    features: [
      ["Up to 6 Custom Pages", "Scalable Frontend Architecture"],
      ["Responsive Layout System", "Figma Design Implementation"],
      ["SEO Friendly Structure", "Component-Based Development"],
      ["Content Management Setup", "Contact & Lead Forms"],
      ["API Integrations", "Analytics Integration"],
      ["Performance Optimization", "Deployment Support"],
    ],
  },
  premium: {
    ctaLabel: "Schedule a Call",
    delivery: "Quick Delivery",
    revision: "Revisions",
    features: [
      ["Full Web Application UI", "Scalable Frontend Architecture"],
      ["Authentication Interfaces", "Advanced UI Components"],
      ["Dashboard Development", "Security Best Practices"],
      ["API Integration", "Real-time Features Support"],
      ["State Management Setup", "Deployment & Optimization"],
      ["Performance Optimization", "Post-Launch Support"],
    ],
  },
};

const PricingBox = (content) => {
  const {
    basicTitle,
    basicDescription,
    standardTitle,
    standardDescription,
    premiumTitle,
    premiumDescription,
  } = content;

  const titles = {
    basic: basicTitle,
    standard: standardTitle,
    premium: premiumTitle,
  };
  const descs = {
    basic: basicDescription,
    standard: standardDescription,
    premium: premiumDescription,
  };

  const [activeTab, setActiveTab] = useState("basic");
  const [displayTab, setDisplayTab] = useState("basic"); // what's actually rendered
  const [contentVisible, setContentVisible] = useState(true);
  const [listKey, setListKey] = useState(0); // forces stagger replay
  const transitioning = useRef(false);

  const switchTab = (tab) => {
    if (tab === activeTab || transitioning.current) return;
    transitioning.current = true;

    // 1. Fade out
    setContentVisible(false);

    setTimeout(() => {
      // 2. Swap content while invisible
      setDisplayTab(tab);
      setActiveTab(tab);
      setListKey((k) => k + 1);

      // 3. Fade in
      setContentVisible(true);
      setTimeout(() => {
        transitioning.current = false;
      }, CONTENT_DURATION);
    }, CONTENT_DURATION);
  };

  const plan = PLANS[displayTab];
  const contentStyle = {
    opacity: contentVisible ? 1 : 0,
    transform: contentVisible ? "translateY(0)" : "translateY(8px)",
    transition: `opacity ${CONTENT_DURATION}ms ease, transform ${CONTENT_DURATION}ms ease`,
  };

  return (
    <div className="lg:w-7/12 w-full lg:p-0 lg:mr-6">
      <div className="w-full h-full btn-shadow font-secondary flex flex-col rounded-xl">
        {/* Tab bar */}
        <div className="relative flex max-[500px]:flex-col btn-shadow w-full justify-between items-center font-primary text-lg overflow-hidden rounded-t-xl">
          {/* Sliding active indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: `${TABS.indexOf(activeTab) * (100 / 3)}%`,
              width: `${100 / 3}%`,
              height: "3px",
              background: "linear-gradient(90deg, #fd4766, #ff8fa3)",
              borderRadius: "9999px 9999px 0 0",
              transition: "left 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}
          />

          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => switchTab(tab)}
              style={{
                transition: "color 0.25s ease, background-color 0.25s ease",
                color: activeTab === tab ? "#fd4766" : "#333",
                fontWeight: activeTab === tab ? 600 : 400,
                backgroundColor:
                  activeTab === tab ? "rgba(253,71,102,0.04)" : "transparent",
              }}
              className="px-3 flex-1 py-8 max-[500px]:w-full capitalize rounded-md"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="xl:p-8 md:p-12 p-6 mt-9" style={contentStyle}>
          {/* Title row */}
          <div className="flex justify-between lg:flex-row flex-col mb-10 max-[500px]:mb-5">
            <h2 className="sm:text-3xl text-2xl font-bold text-[#333] leading-9">
              {titles[displayTab]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-[#333] font-primary sm:text-lg text-md leading-8 font-normal max-[500px]:w-10/12 w-full">
            {descs[displayTab]}
          </p>

          {/* Feature list — staggered reveal on tab change */}
          <div
            key={listKey}
            className="flex justify-between sm:items-center items-start max-[500px]:flex-col font-medium text-[#333] lg:text-lg sm:text-md text-sm tracking-wide mt-8 w-full px-5"
          >
            <ul
              className="leading-10 max-[500px]:mb-3"
              style={{ listStyleType: "square" }}
            >
              {plan.features.map(([left], i) => (
                <li
                  key={left}
                  style={{
                    opacity: 0,
                    animation: `listItemIn 0.3s ease forwards`,
                    animationDelay: `${i * 45}ms`,
                  }}
                >
                  {left}
                </li>
              ))}
            </ul>
            <ul className="leading-10" style={{ listStyleType: "square" }}>
              {plan.features.map(([, right], i) => (
                <li
                  key={right}
                  style={{
                    opacity: 0,
                    animation: `listItemIn 0.3s ease forwards`,
                    animationDelay: `${(i + plan.features.length) * 40}ms`,
                  }}
                >
                  {right}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col w-full justify-center items-center md:mt-16 sm:mt-10 mt-6">
            <button
              className="uppercase feature-box flex justify-center items-center inner-shadow-effect w-full sm:h-16 h-12 rounded-lg btn-shadow tracking-wider text-sm group"
              style={{
                transition: "transform 0.18s ease, box-shadow 0.18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(253,71,102,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {plan.ctaLabel}
              <BiRightArrowAlt
                style={{
                  marginLeft: "6px",
                  transition: "transform 0.2s ease",
                }}
                className="cta-arrow text-lg"
              />
            </button>

            <div className="text-gray-400 text-xs flex max-[500px]:flex-col max-[500px]:w-full font-semibold mt-7 mb-1">
              <h6 className="flex mr-4">
                <AiOutlineClockCircle className="mr-2" />
                {plan.delivery}
              </h6>
              <h6 className="flex max-[500px]:mt-3">
                <FiActivity className="mr-2" />
                {plan.revision}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes listItemIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* Arrow nudge on CTA hover */
        button:hover .cta-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
};

export default PricingBox;

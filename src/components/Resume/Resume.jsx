import React, { useState, useRef } from "react";
import ResumeBox from "./ResumeBox";
import SkillsSection from "./SkillProgress"; // make sure this import matches your file name

const TABS = ["experience", "skills", "education"];
const DURATION = 280;

function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const [displayTab, setDisplayTab] = useState("experience");
  const [contentVisible, setVisible] = useState(true);
  const [panelKey, setPanelKey] = useState(0);
  const transitioning = useRef(false);

  const switchTab = (tab) => {
    if (tab === activeTab || transitioning.current) return;
    transitioning.current = true;

    setVisible(false);

    setTimeout(() => {
      setDisplayTab(tab);
      setActiveTab(tab);
      setPanelKey((k) => k + 1);
      setVisible(true);
      setTimeout(() => {
        transitioning.current = false;
      }, DURATION);
    }, DURATION);
  };

  const TAB_LABELS = {
    experience: "Experience",
    skills: "Professional Skills",
    education: "Education",
  };

  const contentStyle = {
    opacity: contentVisible ? 1 : 0,
    transform: contentVisible ? "translateY(0)" : "translateY(10px)",
    transition: `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
  };

  return (
    <div id="resume" className="xl:m-auto max-w-7xl px-5">
      {/* Heading */}
      <div className="w-full flex flex-col mb-14 items-center justify-center">
        <h6 className="capitalize tracking-widest lg:text-sm text-xs font-medium font-primary text-center">
          3+ Years Of Experience
        </h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-[#333] font-bold mt-3">
          My Resume
        </h1>
      </div>

      {/* Tab bar with sliding indicator */}
      <div className="relative flex sm:flex-row flex-col btn-shadow w-full justify-between items-center font-primary text-lg overflow-hidden rounded-xl">
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: `${TABS.indexOf(activeTab) * (100 / 3)}%`,
            width: `${100 / 3}%`,
            height: "3px",
            background: "linear-gradient(90deg, #fd4766, #ff8fa3)",
            borderRadius: "9999px 9999px 0 0",
            transition: "left 0.38s cubic-bezier(0.4,0,0.2,1)",
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
            className="px-3 w-full flex-1 py-8 rounded-md"
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div key={panelKey} style={contentStyle} className="w-full mt-0">
        {displayTab === "skills" ? (
          // ── SKILLS TAB — full width, rendered once ──
          <SkillsSection />
        ) : (
          // ── EXPERIENCE & EDUCATION — two-column layout ──
          <div className="sm:flex-row w-full flex-col flex">
            {/* LEFT COLUMN */}
            <div className="sm:pr-7 mt-10 sm:w-1/2 w-full">
              <div
                className="w-full flex flex-col mb-14 items-start justify-center"
                style={{
                  animation: "colHeaderIn 0.4s ease both",
                  animationDelay: "40ms",
                }}
              >
                <h6 className="capitalize tracking-widest lg:text-sm text-xs font-light font-primary">
                  {displayTab === "experience"
                    ? "2023 – present"
                    : "2013 - 2018"}
                </h6>
                <h1 className="lg:text-4xl text-2xl font-secondary text-[#333] font-bold mt-3">
                  {displayTab === "experience"
                    ? "Job Experience"
                    : "Education Quality"}
                </h1>
              </div>

              <div>
                <div
                  style={{
                    animation: "cardSlideIn 0.35s ease both",
                    animationDelay: "80ms",
                  }}
                >
                  <ResumeBox
                    title={
                      displayTab === "experience"
                        ? "Chief Operating Officer"
                        : "B.Tech of Physics/Electronics (2013 - 2018)"
                    }
                    subTitle={
                      displayTab === "experience"
                        ? "Jetz Technologies (Present)"
                        : "Federal University of Technology Minna "
                    }
                    description={
                      displayTab === "experience"
                        ? "Leading company operations, product execution, and technical project delivery. I coordinate development teams, oversee product strategy, and ensure successful deployment of digital solutions for clients and internal products."
                        : "Bachelor of Technology in Physics/Electronics with coursework focused on core physics principles, electronics, and laboratory-based experimentation. Graduated with a strong foundation in analytical thinking and problem-solving."
                    }
                  />
                </div>

                <div
                  style={{
                    animation: "cardSlideIn 0.35s ease both",
                    animationDelay: "160ms",
                  }}
                >
                  <ResumeBox
                    title={
                      displayTab === "experience" ? "Frontend Developer" : null
                    }
                    subTitle={
                      displayTab === "experience"
                        ? "L.A Square Tech (Previous)"
                        : null
                    }
                    description={
                      displayTab === "experience"
                        ? "Developed modern web interfaces and responsive user experiences for client projects. Worked with modern frontend technologies to build scalable, user-friendly applications and business websites."
                        : null
                    }
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="sm:pl-7 mt-10 sm:w-1/2 w-full">
              <div
                className="w-full flex flex-col mb-14 items-start justify-center"
                style={{
                  animation: "colHeaderIn 0.4s ease both",
                  animationDelay: "80ms",
                }}
              >
                <h6 className="capitalize tracking-widest lg:text-sm text-xs font-light font-primary">
                  {displayTab === "experience"
                    ? "2023 – present"
                    : "2022 – 2023"}
                </h6>
                <h1 className="lg:text-4xl text-2xl font-secondary text-[#333] font-bold mt-3">
                  {displayTab === "experience"
                    ? "Freelance Experience"
                    : "Certifications"}
                </h1>
              </div>

              <div>
                <div
                  style={{
                    animation: "cardSlideIn 0.35s ease both",
                    animationDelay: "120ms",
                  }}
                >
                  <ResumeBox
                    title={
                      displayTab === "experience"
                        ? "Independent Web & Software Developer"
                        : "THE COMPLETE 2023 WEB DEVELOPMENT BOOTCAMP"
                    }
                    subTitle={
                      displayTab === "experience"
                        ? "Self-Employed (Freelance)"
                        : "Udemy | The App Brewery (2022 – 2023)"
                    }
                    BtnText={displayTab === "experience" ? "5/5" : "Completed"}
                    description={
                      displayTab === "experience"
                        ? "Working with startups, businesses, and individuals to design and build websites, web applications, and digital platforms. Projects include custom web development, CMS-based websites, and system integrations tailored to client needs."
                        : "An intensive full-stack web development program covering modern web technologies including HTML, CSS, JavaScript, React, Node.js, APIs, and databases."
                    }
                  />
                </div>

                <div
                  style={{
                    animation: "cardSlideIn 0.35s ease both",
                    animationDelay: "200ms",
                  }}
                >
                  <ResumeBox
                    title={
                      displayTab === "education"
                        ? "CSS THE COMPLETE GUIDE"
                        : null
                    }
                    subTitle={
                      displayTab === "education"
                        ? "Udemy | Academind (2022 – 2023)"
                        : null
                    }
                    BtnText={displayTab === "education" ? "Certified" : null}
                    description={
                      displayTab === "education"
                        ? "Advanced training focused on modern CSS techniques including layouts, Flexbox, Grid, responsive design, and scalable styling architectures."
                        : null
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes colHeaderIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
      `}</style>
    </div>
  );
}

export default Resume;

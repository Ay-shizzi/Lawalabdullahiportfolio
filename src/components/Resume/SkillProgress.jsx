import React from "react";
import ResumeBox from "./ResumeBox";

const skillCategories = [
  {
    title: "Frontend Engineering",
    subTitle:
      "React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, Component Architecture",
    description:
      "Expert in building modern, scalable user interfaces with React ecosystem.",
  },
  {
    title: "Backend & APIs",
    subTitle: "REST API Integration, Firebase Authentication, WebAuthn.",
    description:
      "Full API integration capabilities including secure authentication and complex data handling.",
  },
  {
    title: "DevOps & Deployment",
    subTitle:
      "Git & GitHub Workflow, Vercel Deployment, CI/CD Basics, Environment Configuration",
    description:
      "Production-ready deployment pipelines and version control best practices.",
  },
  {
    title: "Mobile & Cross-Platform",
    subTitle: "React Native (WebView Apps), Hybrid App Development, Flutter",
    description: "Cross-platform mobile solutions using modern frameworks.",
  },
  {
    title: "UI/UX & Design",
    subTitle:
      "Responsive Design, Performance Optimization, Design Systems, Accessibility",
    description:
      "User-centered design with focus on performance and inclusive experiences.",
  },
];

function SkillsSection() {
  return (
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
            Core Competencies
          </h6>
          <h1 className="lg:text-4xl text-2xl font-secondary text-[#333] font-bold mt-3">
            Frontend & Backend
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
              title={skillCategories[0].title}
              subTitle={skillCategories[0].subTitle}
              description={skillCategories[0].description}
            />
          </div>

          <div
            style={{
              animation: "cardSlideIn 0.35s ease both",
              animationDelay: "160ms",
            }}
          >
            <ResumeBox
              title={skillCategories[1].title}
              subTitle={skillCategories[1].subTitle}
              description={skillCategories[1].description}
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
            Production & Design
          </h6>
          <h1 className="lg:text-4xl text-2xl font-secondary text-[#333] font-bold mt-3">
            Deployment Expertise
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
              title={skillCategories[2].title}
              subTitle={skillCategories[2].subTitle}
              description={skillCategories[2].description}
            />
          </div>

          <div
            style={{
              animation: "cardSlideIn 0.35s ease both",
              animationDelay: "200ms",
            }}
          >
            <ResumeBox
              title={skillCategories[3].title}
              subTitle={skillCategories[3].subTitle}
              description={skillCategories[3].description}
            />
          </div>

          <div
            style={{
              animation: "cardSlideIn 0.35s ease both",
              animationDelay: "240ms",
            }}
          >
            <ResumeBox
              title={skillCategories[4].title}
              subTitle={skillCategories[4].subTitle}
              description={skillCategories[4].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;

// Inline styles for matching animations
const styles = `
  @keyframes cardSlideIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes colHeaderIn {
    from { opacity: 0; transform: translateX(-12px); }
    to   { opacity: 1; transform: translateX(0);     }
  }
`;

// Note: Styles are globally scoped via Resume.jsx or Tailwind; animations work as-is

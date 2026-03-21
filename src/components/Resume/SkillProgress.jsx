import React, { useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend Engineering",
    icon: "⬡",
    accent: "#38bdf8",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Component Architecture",
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    icon: "⬡",
    accent: "#a78bfa",
    skills: [
      "REST API Integration",
      "Firebase Authentication",
      "WebAuthn",
      "File Upload Systems",
      "Form Data Handling",
    ],
  },
  {
    id: "devops",
    label: "DevOps & Deployment",
    icon: "⬡",
    accent: "#34d399",
    skills: [
      "Git & GitHub Workflow",
      "Vercel Deployment",
      "CI/CD Basics",
      "Environment Configuration",
    ],
  },
  {
    id: "mobile",
    label: "Mobile & Cross-Platform",
    icon: "⬡",
    accent: "#fb923c",
    skills: [
      "React Native (WebView Apps)",
      "Hybrid App Development",
      "Flutter",
    ],
  },
  {
    id: "uiux",
    label: "UI/UX & Design",
    icon: "⬡",
    accent: "#f472b6",
    skills: [
      "Responsive Design",
      "Performance Optimization",
      "Design Systems",
      "Accessibility",
    ],
  },
];

function SkillCard({ category, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animation: `skillCardIn 0.5s ease both`,
        animationDelay: `${index * 80}ms`,
        borderColor: hovered ? category.accent : "rgba(255,255,255,0.06)",
        boxShadow: hovered
          ? `0 0 32px ${category.accent}22, 0 8px 32px rgba(0,0,0,0.3)`
          : "0 2px 12px rgba(0,0,0,0.2)",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      className="relative rounded-2xl border bg-white p-6 cursor-default overflow-hidden"
    >
      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: category.accent,
          opacity: hovered ? 0.08 : 0.03,
          filter: "blur(40px)",
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: category.accent,
            boxShadow: `0 0 8px ${category.accent}`,
          }}
        />
        <span
          style={{ color: category.accent, letterSpacing: "0.12em" }}
          className="text-xs font-semibold uppercase tracking-widest"
        >
          {category.label}
        </span>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={skill}
            style={{
              animation: `chipIn 0.3s ease both`,
              animationDelay: `${index * 80 + i * 40 + 100}ms`,
              borderColor: hovered ? `${category.accent}55` : "rgba(51,51,51)",
              color: hovered ? "#333" : "#525861",
              transition:
                "border-color 0.3s ease, color 0.3s ease, background 0.3s ease",
              background: hovered ? `${category.accent}0d` : "transparent",
            }}
            className="text-xs sm:text-base px-3 py-1.5 rounded-full border font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="w-full px-5 py-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center mb-14">
        <span className="capitalize tracking-widest text-xs font-medium text-[#333] mb-3">
          What I Work With
        </span>
        <h1 className="lg:text-6xl text-4xl font-secondary text-[#333] font-bold text-center">
          Technical Skills
        </h1>
        <div
          style={{
            width: "48px",
            height: "3px",
            background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
            borderRadius: "999px",
            marginTop: "16px",
          }}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.id} category={cat} index={i} />
        ))}
      </div>

      <style>{`
        @keyframes skillCardIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chipIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default SkillsSection;

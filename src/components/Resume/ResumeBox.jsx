import React from "react";

function ResumeBox(props) {
  const { title, subTitle, BtnText, description } = props;

  if (title === null || title === undefined || title.length === 0) return null;

  return (
    <div
      id="resume-box"
      className="btn-shadow feature-box mb-10 rounded-md group"
      style={{ overflow: "hidden" }}
    >
      <div className="py-11 px-10 h-full">
        {/* Header row */}
        <div className="flex justify-between lg:items-center pb-6 lg:flex-row flex-col">
          <div className="mb-2">
            <h3 className="text-xl mb-1 font-semibold text-[#333] group-hover:text-white transition-colors duration-1000">
              {title}
            </h3>
            <small className="text-[#333] text-sm group-hover:text-white transition-colors duration-1000">
              {subTitle}
            </small>
          </div>

          {/* Badge with hover lift + colour flash */}
          <div></div>
        </div>

        {/* Animated divider — draws left to right */}
        <div
          className="border-t border-gray-400 mb-6"
          style={{
            transformOrigin: "left",
            animation: "dividerDraw 0.5s cubic-bezier(0.4,0,0.2,1) both",
            animationDelay: "0.15s",
          }}
        />

        {/* Description */}
        <p
          className="text-gray-400 font-primary font-normal text-lg"
          style={{
            animation: "descFadeIn 0.4s ease both",
            animationDelay: "0.22s",
          }}
        >
          {description}
        </p>
      </div>

      <style>{`
        @keyframes dividerDraw {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes descFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
    </div>
  );
}

export default ResumeBox;

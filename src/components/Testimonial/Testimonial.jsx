import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const DURATION = 420;

const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("idle"); // "idle" | "exit" | "enter"
  const [slideDir, setSlideDir] = useState(1); // 1 = going right, -1 = going left
  const pendingIndex = useRef(null);
  const locked = useRef(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") trigger("left");
      if (e.key === "ArrowRight") trigger("right");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  const trigger = (dir) => {
    if (locked.current) return;
    const d = dir === "right" ? 1 : -1;
    const next =
      d === 1
        ? (currentIndex + 1) % testimonials.length
        : (currentIndex - 1 + testimonials.length) % testimonials.length;
    startTransition(next, d);
  };

  const goToSlide = (index) => {
    if (locked.current || index === currentIndex) return;
    startTransition(index, index > currentIndex ? 1 : -1);
  };

  const startTransition = (nextIndex, dir) => {
    locked.current = true;
    pendingIndex.current = nextIndex;
    setSlideDir(dir);
    setPhase("exit");

    setTimeout(() => {
      setCurrentIndex(pendingIndex.current);
      setPhase("enter");
      // tiny RAF so "enter" start position is painted before transitioning to idle
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setPhase("idle");
          setTimeout(() => {
            locked.current = false;
          }, DURATION);
        }),
      );
    }, DURATION);
  };

  const { img, name, company, position, title, moreInfo, description, rating } =
    testimonials[currentIndex];

  // Exit: card slides out in the direction of travel
  // Enter: card arrives from opposite side, snaps in
  const getCardStyle = () => {
    const base = {
      transition: `transform ${DURATION}ms cubic-bezier(0.4,0,0.2,1), opacity ${DURATION}ms ease`,
      willChange: "transform, opacity",
    };
    if (phase === "idle")
      return { ...base, transform: "translateX(0) scale(1)", opacity: 1 };
    if (phase === "exit")
      return {
        ...base,
        transform: `translateX(${slideDir * -60}px) scale(0.97)`,
        opacity: 0,
      };
    if (phase === "enter")
      return {
        ...base,
        transform: `translateX(${slideDir * 60}px) scale(0.97)`,
        opacity: 0,
        transition: "none",
      };
    return base;
  };

  return (
    <div id="testimonial" style={{ overflow: "hidden" }}>
      {/* Heading */}
      <div className="text-center mb-10">
        <h6 className="tracking-widest text-sm font-medium">
          WHAT CLIENTS SAY
        </h6>
        <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl mt-3 text-[#333] font-secondary">
          Testimonial
        </h1>
      </div>

      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex justify-center lg:flex-row flex-col gap-x-10 p-5 items-center w-screen xl:m-auto max-w-7xl">
          <div className="w-full">
            {/* Top bar */}
            <div className="lg:flex justify-between w-full hidden mb-4">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/icons/quote.png"
                alt="quote"
                width="120px"
                style={{ animation: "quoteFloat 3s ease-in-out infinite" }}
              />
              <div className="flex mt-6 gap-3">
                <button
                  onClick={() => trigger("left")}
                  className="w-14 h-14 btn-shadow feature-box flex justify-center items-center rounded-md cursor-pointer hover:text-[#fd4766] transition-colors"
                  aria-label="Previous"
                >
                  <AiOutlineArrowLeft className="text-gray-400 text-2xl" />
                </button>
                <button
                  onClick={() => trigger("right")}
                  className="w-14 h-14 btn-shadow feature-box flex justify-center items-center rounded-md cursor-pointer hover:text-[#fd4766] transition-colors"
                  aria-label="Next"
                >
                  <AiOutlineArrowRight className="text-gray-400 text-2xl" />
                </button>
              </div>
            </div>

            {/* Card viewport — clips the sliding card */}
            <div style={{ overflow: "hidden", borderRadius: "1rem" }}>
              <div style={getCardStyle()}>
                {/* Prominent card with gradient accent bar + deep shadow */}
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "1rem",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(253,71,102,0.08)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    overflow: "hidden",
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    style={{
                      height: "4px",
                      background:
                        "linear-gradient(90deg, #fd4766 0%, #ff8fa3 100%)",
                    }}
                  />

                  <div className="p-10">
                    {/* Header row: title + rating */}
                    <div className="flex sm:flex-row flex-col sm:items-start w-full sm:justify-between gap-4">
                      <div>
                        <h3 className="capitalize md:text-2xl sm:text-xl text-lg font-semibold font-secondary text-gray-800">
                          {title}
                        </h3>
                        <span className="text-gray-400 font-primary md:text-base sm:text-sm text-xs">
                          {moreInfo}
                        </span>
                      </div>

                      {/* Rating badge */}
                      <div
                        key={currentIndex}
                        style={{
                          animation:
                            "badgePop 0.4s cubic-bezier(0.34,1.56,0.64,1) both",
                          background:
                            "linear-gradient(135deg, #fff5f7 0%, #fff 100%)",
                          border: "1px solid #ffd6de",
                          borderRadius: "8px",
                          padding: "6px 16px",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          boxShadow: "0 2px 8px rgba(253,71,102,0.12)",
                        }}
                        className="text-xs flex justify-center items-center"
                      >
                        <i className="rating text-[#fd4766] font-semibold not-italic">
                          {rating}
                        </i>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      style={{
                        height: "1px",
                        background:
                          "linear-gradient(90deg, #fd476620 0%, #e5e7eb 50%, transparent 100%)",
                        margin: "24px 0",
                      }}
                    />

                    {/* Description */}
                    <p className="w-full text-gray-500 font-normal font-primary md:text-lg text-base leading-8">
                      {description}
                    </p>

                    {/* Author row */}
                    {name && (
                      <div className="mt-8 flex items-center gap-4">
                        {/* <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            flexShrink: 0,
                            overflow: "hidden",
                            background: "#fd4766",
                            boxShadow: "0 0 0 3px #fff, 0 0 0 5px #fd476640",
                          }}
                        >
                          {img ? (
                            <img
                              src={img}
                              alt={name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          ) : (
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <span
                                style={{
                                  color: "#fff",
                                  fontSize: "22px",
                                  fontWeight: 700,
                                }}
                              >
                                {name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}
                        </div> */}
                        {/* <div>
                          <p className="font-bold text-sm capitalize text-gray-800 leading-tight">
                            {name}
                          </p>
                          {position && (
                            <p className="text-xs text-gray-400 capitalize mt-0.5">
                              {position}
                              {company ? ` · ${company}` : ""}
                            </p>
                          )}
                        </div> */}
                        {/* Decorative line */}
                        <div
                          style={{
                            flex: 1,
                            height: "1px",
                            background:
                              "linear-gradient(90deg, #e5e7eb, transparent)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile arrows */}
            <div className="lg:hidden flex justify-center gap-4 mt-6">
              <button
                onClick={() => trigger("left")}
                className="w-12 h-12 btn-shadow feature-box flex justify-center items-center rounded-md hover:text-[#fd4766] transition-colors"
              >
                <AiOutlineArrowLeft className="text-gray-400 text-xl" />
              </button>
              <button
                onClick={() => trigger("right")}
                className="w-12 h-12 btn-shadow feature-box flex justify-center items-center rounded-md hover:text-[#fd4766] transition-colors"
              >
                <AiOutlineArrowRight className="text-gray-400 text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="scroller w-full h-16 flex items-end justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              style={{
                margin: "0 6px",
                height: "10px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition:
                  "width 0.35s cubic-bezier(0.4,0,0.2,1), background-color 0.35s ease",
                width: index === currentIndex ? "32px" : "10px",
                backgroundColor: index === currentIndex ? "#fd4766" : "#d1d5db",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes badgePop {
          from { transform: scale(0.75); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes quoteFloat {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-7px); }
        }
      `}</style>
    </div>
  );
};

export default Testimonial;

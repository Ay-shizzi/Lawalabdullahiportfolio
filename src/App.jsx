import React, { useState, useEffect } from "react";
import "./assets/style.css";
import "./assets/script";

//Components
import Navbar from "./Layouts/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./Layouts/Footer";

//Elements
import Seperator from "./Elements/Seperator";
import BackToTop from "./Elements/BackToTop";
import Credits from "./Elements/Credits";
import Spinner from "./Elements/Spinner";
import WhatsAppButton from "./Elements/Whatsapp";

const App = () => {
  const [bodyClick, setBodyClick] = useState(false);
  const [onHireMeClick, setOnHireMeClick] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const hireMeClick = (childStateValue) => {
    setOnHireMeClick(childStateValue);
  };

  // className={`${!onHireMeClick ? "fixed " : null}`}
  // onClick={() => setBodyClick(true)}

  /////////////////////////////////////////////////////////   NAVBAR   //////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////   HOME   //////////////////////////////////////////////////////////

  const name = "Lawal Abdullahi Ayo";
  const profession = "Frontend Application Engineer";
  const aboutMe = `I build scalable, user-centered web applications. Using React, Next.js, and modern frontend architecture, I transform complex ideas into seamless digital experiences.`;
  const githubAccountLink = "https://github.com/Ay-shizzi";
  const twitterAccountLink = "https://twitter.com/ay_shizzi";
  const linkedinAccountLink =
    "https://linkedin.com/in/abdullahi-lawal-5032ba1b3";

  /////////////////////////////////////////////////////////   FEATURES   //////////////////////////////////////////////////////////

  // Just fill the content for number of boxes you want. e.g if you want 4 boxes fill up four boxes.

  const febox1Title = "Website Development";
  const febox1Description =
    "I design and develop modern, high-performance websites tailored to business goals. From landing pages to complex platforms, I work with modern technologies to deliver scalable and responsive web solutions.";

  const febox2Title = "Software Development";
  const febox2Description = `I build robust digital products and web applications designed to solve real business problems. This includes system architecture, application interfaces, API integrations, and scalable solutions.`;

  const febox3Title = "Mobile App Development";
  const febox3Description =
    "I help bring ideas to life through intuitive mobile applications for Android and iOS. Working with a skilled team, we design and develop mobile solutions that provide smooth user experiences and reliable performance.";

  /////////////////////////////////////////////////////////   RESUME   //////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////   PORTFOLIO   //////////////////////////////////////////////////////////

  const pobox1Img = "./WOD.png";
  const pobox1Title = "Walks Of Dubai";
  const pobox1NumOfLikes = "209";
  const pobox1Link = "https://walksofdubai.com/";

  const pobox2Img = "./Better Than Points.png";
  const pobox2Title = "Better Than Points";
  const pobox2NumOfLikes = "86";
  const pobox2Link = "https://betterthanpoints.com/";

  const pobox3Img = "./AXS.png";
  const pobox3Title = "AXS Agency";
  const pobox3NumOfLikes = "120";
  const pobox3Link = "https://axs-agency.webflow.io/";

  const pobox4Img = "./Ben Maria.png";
  const pobox4Title = "Ben Marias: Director of Photography";
  const pobox4NumOfLikes = "110";
  const pobox4Link = "https://www.benmarias.com/";

  const pobox5Img = "./FHANDP.png";
  const pobox5Title = "FHANDP";
  const pobox5NumOfLikes = "36";
  const pobox5Link = "https://www.fhandp.com/";

  const pobox6Img = "./L&F Real Estate.png";
  const pobox6Title = "L&F Real Estate";
  const pobox6NumOfLikes = "18";
  const pobox6Link = "https://landfrealestate.com/";

  /////////////////////////////////////////////////////////   TESTIMONIAL   //////////////////////////////////////////////////////////

  const testimonials = [
    {
      img: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-1st.png",
      name: "Nevine Acotanza",
      company: "RAINBOW-THEMES",
      position: "Chief Operating Office",
      title: "Website Development",
      moreInfo: "via Direct Client - Aug 2, 2024 - Oct 14, 2024",
      description: `The website development project was executed with exceptional skill and professionalism. 
      The final product was a visually stunning, highly functional website that perfectly aligned with our brand and business goals.
      Throughout the project, communication remained clear and efficient. 
      Progress updates were shared consistently, and feedback was incorporated quickly without delays. 
      The development process felt organized, collaborative, and very professional from start to finish.`,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-1st.png",
      name: "John Smith",
      company: "TechCorp Inc.",
      position: "CEO",
      title: "Frontend Web Development",
      moreInfo: "via Upwork - Jan 15, 2024 - Mar 02, 2024",
      description: ` The project was delivered with outstanding quality and attention to detail. The project resulted in a visually appealing, user-friendly interface that perfectly captured our brand identity.
      Every milestone was clearly discussed, 
      timelines were respected, and adjustments were handled quickly. The entire experience was smooth and highly professional.`,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-1st.png",
      name: "Sarah Johnson",
      company: "StartupXYZ",
      position: "Product Manager",
      title: "React & API Integration",
      moreInfo: "via LinkedIn - May 1, 2025 - Aug 15, 2025",
      description: `The collaboration process was straightforward and well organized. Communication was prompt, project updates were shared regularly, and feedback was incorporated without complications. The final product exceeded expectations and delivered exactly what was needed.`,
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  /////////////////////////////////////////////////////////   PRICING   //////////////////////////////////////////////////////////

  //Basic

  const prBasicTitle = "Build Your Landing Page";
  const prBasicPrice = "30";
  const prbasicDescription =
    "I design and develop fast, modern landing pages that clearly communicate your product or service and convert visitors into customers.";

  //Standard

  const prStandardTitle = "Build Your Business Website";
  const prStandardPrice = "50";
  const prStandardDescription =
    "A professional multi-page website built to represent your brand, showcase your services, and scale with your business.";

  //Premium

  const prPremiumTitle = "Build Your Web Application";
  const prPremiumPrice = "100";
  const prPremiumDescription =
    "Custom web applications designed for startups, platforms, and products that require advanced functionality and scalable architecture.";

  /////////////////////////////////////////////////////////   BLOG   //////////////////////////////////////////////////////////

  const blbox1Img =
    "https://miro.medium.com/v2/resize:fit:1024/0*zb0GzPvxSsnwuBOu.png";
  const blbox1Title = "What are cors and why is it important for browsers?";
  const blbox1Category = "Technology";
  const blbox1Time = "2";

  const blbox2Img =
    "https://blog.openreplay.com/images/how-to-build-your-own-react-components-library/images/hero.png";
  const blbox2Title = "Five most amazing React libraries.";
  const blbox2Category = "Discover";
  const blbox2Time = "7";

  const blbox3Img =
    "https://devtechnosys.com/insights/wp-content/uploads/2022/12/Mern-Stack.png";
  const blbox3Title = "Best Resources to learn mern stack in 2023.";
  const blbox3Category = "Learn";
  const blbox3Time = "6";

  /////////////////////////////////////////////////////////   FOOTER   //////////////////////////////////////////////////////////

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar bodyClick={bodyClick} onHireMeClick={hireMeClick} />

          <Home
            name={name}
            profession={profession}
            aboutMe={aboutMe}
            github={githubAccountLink}
            twitter={twitterAccountLink}
            linkedin={linkedinAccountLink}
          />
          <Seperator />
          <Features
            box1Title={febox1Title}
            box1Description={febox1Description}
            box2Title={febox2Title}
            box2Description={febox2Description}
            box3Title={febox3Title}
            box3Description={febox3Description}
          />
          <Seperator />
          <Portfolio
            box1Img={pobox1Img}
            box1NumOfLikes={pobox1NumOfLikes}
            box1Title={pobox1Title}
            box1Link={pobox1Link}
            box2Img={pobox2Img}
            box2NumOfLikes={pobox2NumOfLikes}
            box2Title={pobox2Title}
            box2Link={pobox2Link}
            box3Img={pobox3Img}
            box3NumOfLikes={pobox3NumOfLikes}
            box3Title={pobox3Title}
            box3Link={pobox3Link}
            box4Img={pobox4Img}
            box4NumOfLikes={pobox4NumOfLikes}
            box4Title={pobox4Title}
            box4Link={pobox4Link}
            box5Img={pobox5Img}
            box5NumOfLikes={pobox5NumOfLikes}
            box5Title={pobox5Title}
            box5Link={pobox5Link}
            box6Img={pobox6Img}
            box6NumOfLikes={pobox6NumOfLikes}
            box6Title={pobox6Title}
            box6Link={pobox6Link}
          />
          <Seperator />
          <Resume />
          <Seperator />
          <Testimonial testimonials={testimonials} />
          <Seperator />
          <Pricing
            basicTitle={prBasicTitle}
            basicPrice={prBasicPrice}
            basicDescription={prbasicDescription}
            standardTitle={prStandardTitle}
            standardPrice={prStandardPrice}
            standardDescription={prStandardDescription}
            premiumTitle={prPremiumTitle}
            premiumPrice={prPremiumPrice}
            premiumDescription={prPremiumDescription}
          />
          {/* <Seperator /> */}
          {/* <Blog
            box1Img={blbox1Img}
            box1Category={blbox1Category}
            box1Miuntes={blbox1Time}
            box1Title={blbox1Title}
            box2Img={blbox2Img}
            box2Category={blbox2Category}
            box2Miuntes={blbox2Time}
            box2Title={blbox2Title}
            box3Img={blbox3Img}
            box3Category={blbox3Category}
            box3Miuntes={blbox3Time}
            box3Title={blbox3Title}
          /> */}
          <Seperator />
          <Footer />
          {/* <Seperator /> */}
          <Credits />
          <WhatsAppButton />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default App;

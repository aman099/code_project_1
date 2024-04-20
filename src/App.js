import "./App.css";

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Audience from "./components/audience/Audience";
import GetInTouch from "./components/get in touch/GetInTouch";

import businessImg from "./assets/audience/Businesses.png";
import researchImg from "./assets/audience/Research.png";
import solopreneurImg from "./assets/audience/Solopreneur.png";
import startupImg from "./assets/audience/Startups.png";
import aiImg from "./assets/services/services-AI.jpg";
import benifit_1 from "./assets/benifits/benefit-1.png";
import benifit_2 from "./assets/benifits/benefit-2.png";
import benifit_3 from "./assets/benifits/benefit-3.png";
import benifit_4 from "./assets/benifits/benefit-4.png";
import benifit_5 from "./assets/benifits/benefit-5.png";
import howItWorks_1 from "./assets/howItWorks/how-it-works-one.png";
import howItWorks_2 from "./assets/howItWorks/how-it-works-two.png";
import howItWorks_3 from "./assets/howItWorks/how-it-works-three.png";
import howItWorks_4 from "./assets/howItWorks/how-it-works-four.png";
import ContactUs from "./components/contact us/ContactUs";
import Footer from "./components/footer/Footer";
import ContactUsFixed from "./components/Contact-Us-Fixed/ContactUsFixed";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

const cardContent_1 = [
  {
    img: solopreneurImg,
    title: "Solopreneur",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem enim, itaque debitis consequuntur harum unde sapiente.Quisque accumsan ante eget",
  },
  {
    img: businessImg,
    title: "Businesses",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem enim, itaque debitis consequuntur harum unde sapiente.Quisque accumsan ante eget",
  },
  {
    img: startupImg,
    title: "Startups",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem enim, itaque debitis consequuntur harum unde sapiente.Quisque accumsan ante eget",
  },
  {
    img: researchImg,
    title: "Research Org.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem enim, itaque debitis consequuntur harum unde sapiente.Quisque accumsan ante eget",
  },
];
const heading = [
  {
    id: 1,
    headingContent: "We got your back",
    paraContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,neque. dolor sit amet consectetur omnis
    dolores nobis explicabo inventore tempora. Modi ab ex architecto.`,
  },
  {
    id: 2,
    headingContent: "Services",
    paraContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,neque. dolor sit amet consectetur omnis\n dolores nobis explicabo inventore tempora. Modi ab ex architecto.",
  },
  {
    id: 3,
    headingContent: "Benefits",
    paraContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,neque. dolor sit amet consectetur omnis\n dolores nobis explicabo inventore tempora. Modi ab ex architecto.",
  },
  {
    id: 4,
    headingContent: "How It Works",
    paraContent: null,
  },
];

const cardContent_2 = [
  {
    img: aiImg,
    title: "Unlock the Future with AI",
    description:
      "Leverage the power of artificial intelligence to automate tirness AI to drive innovation and efficiency.",
    label: "Generative-AI Solutions",
  },
  {
    img: aiImg,
    title: "Unlock the Future with AI",
    description:
      "Leverage the power of artificial intelligence to automate tirness AI to drive innovation and efficiency",
    label: "Generative-AI Solutions",
  },
  {
    img: aiImg,
    title: "Unlock the Future with AI",
    description:
      "Leverage the power of artificial intelligence to automate tirness AI to drive innovation and efficiency",
    label: "Generative-AI Solutions",
  },
  {
    img: aiImg,
    title: "Unlock the Future with AI",
    description:
      "Leverage the power of artificial intelligence to automate tirness AI to drive innovation and efficiency",
    label: "Generative-AI Solutions",
  },
];

const cardContent_3 = [
  {
    img: benifit_1,
    title: "No Code Compromise",
    description:
      "Leverage the power of artificial intelligence to automate tirness AI to drive innovation and efficiency",
  },
  {
    img: benifit_2,
    title: "Quality Meets Affordability",
    description:
      "Leverage the power of artificial intelligence to automate tirness AI to drive innovation and efficiency",
  },
  {
    img: benifit_3,
    title: "Tailored to Fit Your Budget",
    description:
      "Leverage the power of artificial intelligence to automate tirness AI to drive innovation and efficiency",
  },
  {
    img: benifit_4,
    title: "Speed Without Sacrificing Quality",
    description:
      "Leverage the power of artificial intelligence to automate tirness AI to drive innovation and efficiency",
  },
  {
    img: benifit_5,
    title: "Fully Customised, Just for You",
    description:
      "Leverage the power of artificial intelligence to automate tirness AI to drive innovation and efficiency",
  },
];

const cardContent_4 = [
  {
    img: howItWorks_1,
    title: "Schedule Your Calls",
    description:
      "This first step ensures we understand your vision and  financial guidelines.",
  },
  {
    img: howItWorks_2,
    title: "Choose Your Dream Team",
    description:
      "you can either let us match you with the  perfect team or handpick your experts",
  },
  {
    img: howItWorks_3,
    title: "Launch Your Project",
    description: "With the team in place, dive into the development process.",
  },
  {
    img: howItWorks_4,
    title: "Track And Collaborate",
    description:
      "Enjoy complete transparency and  flexibility throughout the project lifecycle",
  },
];

const navbarMenus = [
  "Home",
  "Audience",
  "Services",
  "Get in touch",
  "Benefits",
  "How it works",
  "Contact us",
];

function App() {
  const [modalState, setModalState] = useState(false);

  function captureModalState(modal) {
    setModalState((state) => (modal ? true : false));
  }

  return (
    <div className="App">
      <Modal modalState={modalState} setModalState={setModalState} />
      <Navbar navbarMenus={navbarMenus} />
      <ContactUsFixed captureModalState={captureModalState} />
      <Hero />
      <Audience cardContent={cardContent_1} {...heading[0]} />
      <Audience cardContent={cardContent_2} {...heading[1]} />
      <GetInTouch />
      <Audience cardContent={cardContent_3} {...heading[2]} />
      <Audience cardContent={cardContent_4} {...heading[3]} />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

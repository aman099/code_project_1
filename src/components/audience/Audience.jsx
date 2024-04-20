import { useEffect, useState } from "react";
import "./Audience.scss";

import AudienceCards from "./audience-cards/AudienceCards";

// import businessImg from "../../assets/audience/Businesses.png";
// import researchImg from "../../assets/audience/Research.png";
// import solopreneurImg from "../../assets/audience/Solopreneur.png";
// import startupImg from "../../assets/audience/Startups.png";

// const cardContent = [
//   {
//     img: solopreneurImg,
//     title: "Solopreneur",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem enim, itaque debitis consequuntur harum unde sapiente.Quisque accumsan ante eget",
//   },
//   {
//     img: businessImg,
//     title: "Businesses",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem enim, itaque debitis consequuntur harum unde sapiente.Quisque accumsan ante eget",
//   },
//   {
//     img: startupImg,
//     title: "Startups",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem enim, itaque debitis consequuntur harum unde sapiente.Quisque accumsan ante eget",
//   },
//   {
//     img: researchImg,
//     title: "Research Org.",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem enim, itaque debitis consequuntur harum unde sapiente.Quisque accumsan ante eget",
//   },
// ];

let conditionalAudience;
let conditionalAudienceContainer;

function Audience({ cardContent, headingContent, paraContent, id }) {
  const [heading1, setHeading1] = useState("");

  useEffect(() => setHeading1(headingContent), [heading1]);

  conditionalAudience =
    (id === 1 && "audience_1") ||
    (id === 2 && "audience_2") ||
    (id === 3 && "audience_3") ||
    (id === 4 && "audience_4");

  conditionalAudienceContainer =
    (id === 1 && "audience_1_container") ||
    (id === 2 && "audience_2_container") ||
    (id === 3 && "audience_3_container") ||
    (id === 4 && "audience_4_container");

  return (
    <main id={`audience`} className={`${conditionalAudience}`}>
      <div className={`audience-container ${conditionalAudienceContainer}`}>
        {id === 4 && <span className="square-blocks-1"></span>}
        <div className="audience-heading-container">
          <h2>{heading1}</h2>
        </div>
        {paraContent && (
          <div className="audience-desc">
            <p>{paraContent}</p>
          </div>
        )}
        <div className="audience-cards-flex">
          <AudienceCards cardContent={cardContent} id={id} />
        </div>
        {id === 4 && <span className="square-blocks-2"></span>}
      </div>
    </main>
  );
}

export default Audience;

import { Fragment } from "react";
import "./AudienceCards.scss";

let conditionalImgClass;
let conditionalCardContainer;

function AudienceCards({ cardContent, id }) {
  conditionalImgClass =
    (id === 1 && "card_1_imgContainer") ||
    (id === 2 && "card_2_imgContainer") ||
    (id === 3 && "card_3_imgContainer") ||
    (id === 4 && "card_4_imgContainer");

  conditionalCardContainer =
    (id === 1 && "card_1_Container") ||
    (id === 2 && "card_2_Container") ||
    (id === 3 && "card_3_Container") ||
    (id === 4 && "card_4_Container");

  return (
    <>
      {cardContent.map((card, idx) => (
        <Fragment key={idx}>
          <div className={`audience-card ${conditionalCardContainer}`}>
            {id === 4 && <div className="card-label">{idx + 1}</div>}
            {id === 4 && <div className="card-triangle-abs"></div>}
            <div
              className={`audience-card-img-container ${conditionalImgClass}`}
            >
              <img src={card.img} alt={card.title} />
            </div>
            {id === 2 && <span className="ai-label">{card.label}</span>}
            <div className="audience-card-title">
              <h5>{card.title}</h5>
            </div>
            <div className="audience-card-desc">
              <p>{card.description}</p>
            </div>
          </div>
          {id === 4 && <span className="decoration"></span>}
        </Fragment>
      ))}
    </>
  );
}

export default AudienceCards;

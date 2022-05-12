import React from "react";

SecondContainerDisplayCard.defaultProps = {
  header: "Total Revenue",
  content: "€20,578,437.25",
};
function SecondContainerDisplayCard({ header, content }) {
  return (
    <div className="d-flex justify-content-center flex-column align-items-start">
      <p className="grey_text small_text">{header}</p>
      <h5>{content}</h5>
    </div>
  );
}

export default SecondContainerDisplayCard;

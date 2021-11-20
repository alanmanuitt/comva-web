import React from "react";
import { useInView } from "react-intersection-observer";

import "./Section.css";

const Section = ({ id, image, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  return (
    <section
      className={`slider ${inView ? "slider--zoom" : ""}`}
      id={id}
      ref={ref}
    >
      {flipped ? (
        <>
          <div className="slider_content">
            <h1 className="slider_title">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={image} alt="Solucion 2" className="slider_image" />
        </>
      ) : (
        <>
          <img src={image} alt="Solucion 1" className="slider_image" />
          <div className="slider_content">
            <h1 className="slider_title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Section;

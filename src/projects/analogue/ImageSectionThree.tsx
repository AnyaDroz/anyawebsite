import React from "react";
import Single from "../../case-study/image-layouts/Single";

export default function ImageSectionThree() {
  return (
    <Single
      layout="end"
      image={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-06-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-06.png"
          />
          <img
            src="/images/analogue-06.png"
            alt="How to set up css variables"
            loading="lazy"
          />
        </picture>
      }
      caption="(3a) A clock component styled with one layer of css variables"
    />
  );
}

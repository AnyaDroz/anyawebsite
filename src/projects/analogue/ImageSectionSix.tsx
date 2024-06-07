import Single from "../../case-study/image-layouts/Single";
import React from "react";

export default function ImageSectionSix() {
  return (
    <Single
      layout="start"
      image={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-10-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-10.png"
          />
          <img
            src="/images/analogue-10.png"
            alt="Example of why simple variables don't work"
            loading="lazy"
          />
        </picture>
      }
      caption="(4b) A clock component styled with one layer of css variables"
    />
  );
}

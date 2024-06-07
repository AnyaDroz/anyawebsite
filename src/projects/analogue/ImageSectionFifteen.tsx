import Single from "../../case-study/image-layouts/Single";
import React from "react";

export default function ImageSectionFifteen() {
  return (
    <Single
      layout="full"
      image={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-24-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-24.png"
          />
          <img
            src="/images/analogue-24.png"
            alt="Two iphones with light and dark theme apps"
            loading="lazy"
          />
        </picture>
      }
      caption="(9) Analogue in light & dark"
    />
  );
}

import Single from "../../case-study/image-layouts/Single";
import React from "react";

export default function ImageSectionEleven() {
  return (
    <Single
      layout="full"
      image={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-17-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-17.png"
          />
          <img
            src="/images/analogue-17.png"
            alt="Full spectrum of colours"
            loading="lazy"
          />
        </picture>
      }
      caption="(6a) The full spectrum colour palette and chosen shades for the default light theme"
    />
  );
}

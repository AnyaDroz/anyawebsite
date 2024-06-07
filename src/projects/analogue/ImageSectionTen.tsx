import Single from "../../case-study/image-layouts/Single";
import React from "react";

export default function ImageSectionTen() {
  return (
    <Single
      layout="start"
      image={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-16-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-16.png"
          />
          <img src="/images/analogue-16.png" alt="phone" loading="lazy" />
        </picture>
      }
      caption="(1a) Mobile example screen of light mode design system"
    />
  );
}

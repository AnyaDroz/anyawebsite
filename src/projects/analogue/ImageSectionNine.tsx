import GridTwo from "../../case-study/image-layouts/GridTwo";
import React from "react";

export default function ImageSectionNine() {
  return (
    <GridTwo
      imageOne={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-14-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-14.png"
          />
          <img src="/images/analogue-14.png" alt="phone" loading="lazy" />
        </picture>
      }
      captionOne="(1a) Mobile example screen of light mode design system"
      imageTwo={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-15-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-15.png"
          />
          <img src="/images/analogue-15.png" alt="phone" loading="lazy" />
        </picture>
      }
      captionTwo="(1b) Mobile example screen of light mode design systemexample screen of light mode design system"
    />
  );
}

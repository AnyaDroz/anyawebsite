import React from "react";
import GridTwo from "../../case-study/image-layouts/GridTwo";

export default function ImageSectionTwo() {
  return (
    <GridTwo
      imageOne={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-04-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-04.png"
          />
          <img
            src="/images/analogue-04.png"
            alt="Example of application in dark theme"
            loading="lazy"
          />
        </picture>
      }
      captionOne="(2a) Default dark theme application"
      imageTwo={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-05-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-05.png"
          />
          <img
            src="/images/analogue-05.png"
            alt="xample of application in light theme"
            loading="lazy"
          />
        </picture>
      }
      captionTwo="(2b) Default light theme application"
    />
  );
}

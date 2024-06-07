import React from "react";
import GridTwo from "../../case-study/image-layouts/GridTwo";

export default function ImageSectionFour() {
  return (
    <GridTwo
      imageOne={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-07-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-07.png"
          />
          <img src="/images/analogue-07.png" alt="phone" loading="lazy" />
        </picture>
      }
      captionOne="(3b) Switching themes only allows for a simple inversion"
      imageTwo={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-08-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-08.png"
          />
          <img src="/images/analogue-08.png" alt="phone" loading="lazy" />
        </picture>
      }
      captionTwo="(3c) The requirement is for the light theme to have additional style details, red clock hands and accent coloured hour lines."
    />
  );
}

import React from "react";
import GridTwo from "../../case-study/image-layouts/GridTwo";

export default function ImageSectionThirteen() {
  return (
    <GridTwo
      imageOne={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-19-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-19.png"
          />
          <img src="/images/analogue-19.png" alt="Typescale" loading="lazy" />
        </picture>
      }
      captionOne="(7a) Analogue Design System uses a Minor Third Typescale"
      imageTwo={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-20-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-20.png"
          />
          <img
            src="/images/analogue-20.png"
            alt="Typography usage"
            loading="lazy"
          />
        </picture>
      }
      captionTwo="(7b) Usage of typography as a component"
    />
  );
}

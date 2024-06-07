import Single from "../../case-study/image-layouts/Single";
import React from "react";

export default function ImageSectionSeven() {
  return (
    <Single
      layout="full"
      image={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-11-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-11.png"
          />
          <img
            src="/images/analogue-11.png"
            alt="Four mobile designs in different themes"
            loading="lazy"
          />
        </picture>
      }
      caption="(5a) The same application, one system of nested variables, all styles maintained in the theme.css files"
    />
  );
}

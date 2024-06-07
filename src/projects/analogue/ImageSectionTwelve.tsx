import Single from "../../case-study/image-layouts/Single";
import React from "react";

export default function ImageSectionTwelve() {
  return (
    <Single
      layout="full"
      image={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-18-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-18.png"
          />
          <img
            src="/images/analogue-18.png"
            alt="Component colours explainer"
            loading="lazy"
          />
        </picture>
      }
      caption="(6b) By changing just the global colours - all the shades needed changing with the application"
    />
  );
}

import GridThree from "../../case-study/image-layouts/GridThree";
import React from "react";

export default function ImageSectionOne() {
  return (
    <GridThree
      imageOne={
        <img
          src="/images/analogue-01.png"
          alt="Mobile phone mockup of design"
        />
      }
      captionOne="(1a) Mobile example screen of light mode design system"
      imageTwo={
        <img
          src="/images/analogue-02.png"
          alt="Example of light mode components"
        />
      }
      captionTwo="(1b) Selection of light mode components"
      imageThree={
        <img
          src="/images/analogue-03.png"
          alt="Example of dark mode components"
        />
      }
      captionThree="(1c) Dark mode components"
    />
  );
}

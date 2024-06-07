import Single from "../../case-study/image-layouts/Single";
import React from "react";
import GridThree from "../../case-study/image-layouts/GridThree";

export default function ImageSectionFourteen() {
  return (
    <GridThree
      imageOne={<img src="/images/analogue-21.png" alt="Elevation system" />}
      captionOne="(8a) Default elevation system"
      imageTwo={<img src="/images/analogue-22.png" alt="Card border radius" />}
      captionTwo="(8b) Border radii"
      imageThree={<img src="/images/analogue-23.png" alt="Radix Icons" />}
      captionThree="(8c) Radix Iconography set"
    />
  );
}

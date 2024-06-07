import React from "react";
import "./Analogue.module.css";
import Template from "../../case-study/text-layouts/Template";
import Header from "../../case-study/text-layouts/Header";
import Paragraph from "../../case-study/text-layouts/Paragraph";
import SubHeader from "../../case-study/text-layouts/SubHeader";
import GridThree from "../../case-study/image-layouts/GridThree";

function Analogue() {
  return (
    <Template>
      <Header
        tags="Design System"
        heading="Analogue Design System"
        subHeading="Using nested variables to create a white-labelled design system with a default, minimal Light & Dark theme."
        role="Product Designer"
      />
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
            src="/images/analogue-01.png"
            alt="Mobile example screen of light mode design system"
          />
        }
        captionTwo="(1b) Mobile example screen of light mode design systemexample screen of light mode design system"
        imageThree={
          <img
            src="/images/analogue-01.png"
            alt="Mobile example screen of light mode design system example screen of light mode design system"
          />
        }
        captionThree="(1c) Mobile example screen of light mode design system"
      />
      <SubHeader
        heading="Colours"
        subHeading="A common problem I’ve encountered is assigning unique colours directly to every state on an interaction, this is where alias variables come in."
      ></SubHeader>
      <Paragraph>
        <p>
          This case study uses a design for a note making app to represent the
          solution developed during my experience at Pollinate, a white-labelled
          product that serves banks by creating integrated experiences for
          onboarding and merchant acquiring.
        </p>
        <p>
          The challenge is - how to reskin an interface for a client in a highly
          configurable way, that matches a clients branding and needs exactly.
          The solution for this is a nested variable system used by companies
          such as Material and Adobe usually referred to as ‘design tokens’.
        </p>
        <p>
          From my experience with clients, not having this system has cost up to
          5 sprints of development time to apply a new client theme.
        </p>
      </Paragraph>
    </Template>
  );
}

export default Analogue;

import Header from "../../case-study/text-layouts/Header";
import Paragraph from "../../case-study/text-layouts/Paragraph";
import SubHeader from "../../case-study/text-layouts/SubHeader";

import CodeBlock from "../../common/CodeBlock";
import GridTwo from "../../case-study/image-layouts/GridTwo";
import React from "react";
import GridThree from "../../case-study/image-layouts/GridThree";
import Single from "../../case-study/image-layouts/Single";
import { codeOne } from "./code-text";
import { codeTwo } from "./code-text";
import { codeThree } from "./code-text";
import NavBar from "../../common/NavBar";

function Analogue() {
  return (
    <>
      <NavBar />
      <Header
        heading="Analogue Design System"
        subHeading="Using nested variables to create a white-labelled design system with a default, minimal Light & Dark theme."
        role="UI Designer"
        tags="Design Systems, Components, Tokens"
      />
      <GridThree
        imageOne="/images/analogue-01.png"
        captionOne="(1a) Mobile example screen of light mode design system"
        imageTwo="/images/analogue-02.png"
        captionTwo="(1b) Selection of light mode components"
        imageThree="/images/analogue-03.png"
        captionThree="(1c) Dark mode components"
      />
      <Paragraph>
        <p>
          This case study demonstrates the solution I built at Pollinate for a
          fully white labelled interface, I recreated this system on a new
          application that I created for the purpose of this case study so I can
          share it publicly.
        </p>
        <p>
          Restyling our application to match a clients’ branding and UI cost on
          average 5 sprints for an experienced developer to implement, this does
          not take into account ongoing style changes, rebranding, multiple
          theme per client support and new features requiring overrides.
        </p>
        <p>
          The solution for this is a nested variable system used by companies
          such as Material and Adobe usually referred to as design tokens This
          is not to be confused with a single layer of variable such as defining
          an accent colour.
        </p>
      </Paragraph>
      <SubHeader
        heading="The problem"
        subHeading="Style changes are costly, whether the application needs to support multiple clients’ requirements - or as simple as a designer breaking away from standard usage on a new feature (it happens!) - developers and designers want to focus on problem-solving, not on consistent colour usage and css overrides."
      ></SubHeader>
      <Paragraph>
        <p>
          I created a note taking application that takes has two default theme
          for light mode and dark mode. This can be rebranded on two levels - a
          basic re-skin where the main colours are changed, down to component
          level changes - all within the css file. There are two key differences
          between this and a standard design system. The use of a component
          variables and alias variables.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/analogue-04.png"
        imageTwo="/images/analogue-05.png"
        mobileOne="/images/analogue-04-mobile.png"
        mobileTwo="/images/analogue-05-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <Paragraph>
        <p>
          Most design systems do use variables. However they usually only allows
          for simple switching of themes across the basic properties - as you
          can see above - most of the styles are just an inversion or simple
          switch of colours. These css variables are usually written as
          --global-colour-accent as an example. Their role is for capturing
          values for consistency.
        </p>
        <p>
          The clock however, has style overrides to the default to demonstrate
          how
          <b>using variables with a middle layer is far more customisable.</b>
        </p>
      </Paragraph>
      <Single
        layout="end"
        image="/images/analogue-06.png"
        mobile="/images/analogue-06-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <GridTwo
        imageOne="/images/analogue-07.png"
        imageTwo="/images/analogue-08.png"
        mobileTwo="/images/analogue-08-mobile.png"
        mobileOne="/images/analogue-07-mobile.png"
        captionOne="(3b) Switching themes only allows for a simple inversion"
        captionTwo="(3c) The requirement is for the light theme to have additional style details, red clock hands and accent coloured hour lines."
      />
      <CodeBlock code={codeOne} />
      <Single
        layout="start"
        image="/images/analogue-09.png"
        mobile="/images/analogue-09-mobile.png"
        caption="(4a) A clock component styled with one layer of css variables"
      />
      <Single
        layout="start"
        image="/images/analogue-10.png"
        mobile="/images/analogue-10-mobile.png"
        caption="(4b) A clock component styled with one layer of css variables"
      />
      <Paragraph>
        <p>
          Now we have a fully customisable, white labelled design system for our
          front-end. All the styles are nested within each other in the css
          theme files and every component can be branded to the clients’
          requirements. You can also read my article about how to sync these
          changes with Figma, where these style variables can be pushed to your
          code repository directly by a designer.
        </p>
      </Paragraph>
      <Single
        layout="full"
        image="/images/analogue-11.png"
        mobile="/images/analogue-11-mobile.png"
        caption="(5a) The same application, one system of nested variables, all styles maintained in the theme.css files"
      />
      <GridTwo
        imageOne="/images/analogue-12.png"
        imageTwo="/images/analogue-13.png"
        captionOne="(1a) Mobile example screen of light mode design system"
        mobileOne="/images/analogue-13-mobile.png"
        mobileTwo="/images/analogue-12-mobile.png"
        captionTwo="(1b) Mobile example screen of light mode design system example screen of light mode design system"
      />
      <GridTwo
        imageOne="/images/analogue-14.png"
        imageTwo="/images/analogue-15.png"
        mobileTwo="/images/analogue-15-mobile.png"
        mobileOne="/images/analogue-14-mobile.png"
        captionOne="(1a) Mobile example screen of light mode design system"
        captionTwo="(1b) Mobile example screen of light mode design systemexample screen of light mode design system"
      />
      <SubHeader
        heading="Colours"
        subHeading="A common problem I’ve encountered is assigning unique colours directly to every state on an interaction, this is where alias variables come in."
      ></SubHeader>
      <Paragraph>
        <p>
          Alias variables behave like coordinators, they orchestrate the usage
          of colours by mixing them with another colour, this means you can
          programmatically generate a range of tones and shades - designers and
          developers will only have to apply this calculation once, and it will
          handle every interaction state across the application.
        </p>
      </Paragraph>
      <Single
        layout="start"
        image="/images/analogue-16.png"
        mobile="/images/analogue-16-mobile.png"
        caption="(1a) Mobile example screen of light mode design system"
      />
      <CodeBlock code={codeTwo} />
      <Single
        layout="full"
        image="/images/analogue-17.png"
        mobile="/images/analogue-17-mobile.png"
        caption="(6a) The full spectrum colour palette and chosen shades for the default light theme"
      />
      <Single
        layout="full"
        image="/images/analogue-18.png"
        mobile="/images/analogue-18-mobile.png"
        caption="(6b) By changing just the global colours - all the shades needed changing with the application"
      />
      <SubHeader
        heading="Typography"
        subHeading="One of my favourite discoveries when creating a design system the first time, was implementation of typography components that take props such as size, line-height and style."
      ></SubHeader>
      <CodeBlock code={codeThree} />
      <GridTwo
        imageOne="/images/analogue-19.png"
        imageTwo="/images/analogue-20.png"
        mobileOne="/images/analogue-19-mobile.png"
        mobileTwo="/images/analogue-20-mobile.png"
        captionOne="(7a) Analogue Design System uses a Minor Third Typescale"
        captionTwo="(7b) Usage of typography as a component"
      />
      <SubHeader
        heading="Elevation, Border radius and Iconography"
        subHeading="To complete this design system I’ve used Radix icons.  There are four elevation styles and four default border-radius styles."
      ></SubHeader>
      <Paragraph>
        <p>
          There are a few libraries I turn to for iconography- including Lucide
          iconography. The border radius is based on usage like buttons and
          inputs - finally elevation can be changed per theme as it’s captured
          in one line of code as a box-shadow.
        </p>
      </Paragraph>
      <GridThree
        imageOne="/images/analogue-21.png"
        captionOne="(8a) Default elevation system"
        imageTwo="/images/analogue-22.png"
        captionTwo="(8b) Border radii"
        imageThree="/images/analogue-23.png"
        captionThree="(8c) Radix Iconography set"
      />
      <Paragraph>
        <p>
          Finally below is a showcase of all the themes created with this Design
          System. The library created for Pollinate was far more extensive and
          intricate, including multiple themes per bank and the use of the
          Tokens Figma plugin, which enabled me to rebrand any prototype with
          the click of one button. It’s time consuming to set up at the start -
          but is worth it in the long run.
        </p>
        <p>
          A headless design system saved Pollinate 2 weeks of initial theme
          setup for every bank, 5 sprints to implement a theme down to a few
          days, it enabled the sales team to show our real application to a
          potential client in their own branding before any services are
          confirmed. It saved a designer a week each time a prototype needed to
          be rebranded.
        </p>
      </Paragraph>
      <Single
        layout="full"
        image="/images/analogue-24.png"
        mobile="/images/analogue-24-mobile.png"
        caption="(9) Analogue in light & dark"
      />
    </>
  );
}

export default Analogue;

import Header from "../../case-study/text-layouts/Header";
import GridThree from "../../case-study/image-layouts/GridThree";
import React from "react";

import SubHeader from "../../case-study/text-layouts/SubHeader";
import Paragraph from "../../case-study/text-layouts/Paragraph";
import GridTwo from "../../case-study/image-layouts/GridTwo";
import Single from "../../case-study/image-layouts/Single";
import NavBar from "../../common/NavBar";
import VideoBlock from "../../common/VideoBlock";

const Echo = () => {
  return (
    <>
      <NavBar />
      <Header
        heading="Echo Studio"
        subHeading="A story of two parts; A no-code software that showcases white-labelling functionality and our user experience to clients. An improved common front-end library and UX demonstrated in this new application."
        role="Product Designer & Angular Developer"
        tags="Design System, CSS variables, Design Tokens, UI"
      />
      <GridThree
        imageOne="/images/echo-01.png"
        captionOne="(1a) Mobile example screen of light mode design system"
        imageTwo="/images/echo-02.png"
        captionTwo="(1b) Selection of light mode components"
        imageThree="/images/echo-03.png"
        captionThree="(1c) Dark mode components"
      />
      <GridThree
        imageOne="/images/echo-04.png"
        captionOne="(1d) Guidelines on introducing user lifetime states"
        imageTwo="/images/echo-05.png"
        captionTwo="(1e) A focus on the mobile experience"
        imageThree="/images/echo-06.png"
        captionThree="(1f) New modern design system hosted in echo-studio"
      />
      <SubHeader
        heading="The problem (s)"
        subHeading="This project had two main challenges. The first was to cut costs with technical improvements in the way we build our front-end and handle client changes - the second was to improve the quality of the interface and experience to attract clients"
      />
      <Paragraph>
        <p>
          Image (2a) below shows a break down of the first challenge into three
          initiatives. The first step is to address the tech-debt associated
          with our common component library. For example each component had a
          client theme file, rather than a global theme file per client, as well
          as manual overrides on styling.
        </p>
        <p>
          Next, the way the codebase was set up meant that the product was not
          white-labelled. It was costing 10 sprints to add a new client brand to
          the application, and another 2 weeks to agree on a brand theme with
          the client. Lastly for, there is no demo of the product - a designer
          would have to manually reskin every screen in a prototype, taking up
          to a week leading up to a client pitch.
        </p>
        <p>
          (2b) Shows the three main challenges to improving the quality of our
          UI/UX. The three main areas I focussed on was -creating a systematic
          approach to the design system, improving the information hierarchy of
          the homepage of the application, and what an MVP for merchant lifetime
          states might look like.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/echo-07.png"
        imageTwo="/images/echo-08.png"
        mobileOne="/images/echo-07-mobile.png"
        mobileTwo="/images/echo-08-mobile.png"
        captionOne="(2a) Cutting costs through with technical improvements"
        captionTwo="(2b) Improving the quality of the interface and experience to attract clients"
      />
      <Single
        layout="start"
        image="/images/echo-09.png"
        mobile="/images/echo-09-mobile.png"
        caption="(3a) A new component library that all teams would use, and can be reskinned to a client brand in under a day"
      />
      <Single
        layout="start"
        image="/images/echo-10.png"
        mobile="/images/echo-10-mobile.png"
        caption="(3b) Creating empty states and trend insights as an MVP to merchant states"
      />
      <Single
        layout="start"
        image="/images/echo-11.png"
        mobile="/images/echo-11-mobile.png"
        caption="(3c) Showcase the product - in their theme - in live across any device"
      />
      <SubHeader
        heading="Design System & FE library"
        subHeading="I created a nested css variable system to enable white labelling of our product. I wrote an in-depth case study about why this is different from a standard DS here."
      />
      <GridThree
        imageOne="/images/echo-12.png"
        captionOne="(4a) A design system with no variables"
        imageTwo="/images/echo-13.png"
        captionTwo="(4b) A standard design system with tokens and global variables"
        imageThree="/images/echo-14.png"
        captionThree="(4c) A white-labelled design system with nested variables and a middle layer"
      />
      <Single
        layout="full"
        image="/images/echo-15.png"
        mobile="/images/echo-15-mobile.png"
        caption="(4d) Colour themes programmatically generated with css color-mix"
      />
      <GridTwo
        imageOne="/images/echo-16.png"
        imageTwo="/images/echo-17.png"
        mobileOne="/images/echo-16-mobile.png"
        mobileTwo="/images/echo-17-mobile.png"
        captionOne="(4e) Navigation component"
        captionTwo="(4f) Each theme has 4 subset themes"
      />
      <GridTwo
        imageOne="/images/echo-18.png"
        imageTwo="/images/echo-19.png"
        mobileOne="/images/echo-18-mobile.png"
        mobileTwo="/images/echo-19-mobile.png"
        captionOne="(4g) Thoughtful considertations with empty states"
        captionTwo="(4h) Encouraging engagement with trends and insights"
      />
      <SubHeader
        heading="Improved UX in the common portal"
        subHeading="Ease of use was the top reason for choosing a POS (28%) above functionality (27%) and Price (20%) in a survey by Capterra. Source"
      />
      <Paragraph>
        <p>
          Image (5a) shows the before and after of my design. I followed some
          stats around what Merchants want to see to create a hierarchy of
          information that matches their goals. The top motivators for SME’s are
          46% said make money, 38% want to provide great customer service and
          32%, to impact the local community.
        </p>
        <p>
          Just a few insights about knowing our users. So, the structure of the
          homepage is focussed on grow - to make money, get paid - but finding
          the best payment methods for customers and manage, for any additional
          services including community schemes. I followed the brand guidelines
          but wanted to create a more vibrant and modern feel to the platform.
        </p>
      </Paragraph>
      <Single
        layout="full"
        image="/images/echo-20.png"
        mobile="/images/echo-20-mobile.png"
        caption="(5a) Encouraging engagement with trends and insights"
      />
      <Single
        layout="full"
        image="/images/echo-21.png"
        mobile="/images/echo-21-mobile.png"
        caption="(5b) The reasoning behind the structure of the page"
      />
      <SubHeader
        heading="POC Echo-studio"
        subHeading="Before we even had the thought of Echo-studio, I wanted to see if there was any business value in the idea - so I used storybook to rebuild parts of our application and host it there."
      />
      <Paragraph>
        <p>
          This was a pivotal moment for me in my career - where I stopped
          thinking about design or code as a job I’m fulfilling - but what can I
          build or develop that will really drive business value.
        </p>
        <p>
          I spiked a solution with a React application (for speed) and storybook
          (for existing functionality) - but on steroids. Not only did this
          storybook host our components and all the configurability, but it also
          embedded pages of the app that you could view across different users,
          different brands, custom re-theme and even the first pass at something
          of a no-code builder to demonstrate forms in live. You can watch the
          video below (6c).
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/echo-22.png"
        imageTwo="/images/echo-23.png"
        mobileOne="/images/echo-22-mobile.png"
        mobileTwo="/images/echo-23-mobile.png"
        captionOne="(6a) Currently the only way of showing the product and our offering was a word doc"
        captionTwo="(6b) Our front-end library had custom theme files at component level - with manual, hard-coded values"
      />
      <VideoBlock
        src="/video/echo-01.mp4"
        gridColumn={"1/11"}
        textColor="black"
        caption="(6c) Video of the POC to create a demo and rebranding tool using storybook"
      />
      <SubHeader
        heading="Echo studio"
        subHeading="Echo studio finally came to life on a separate project, but for the sake of this case study I will show the designs on the home page designs I created."
      />
      <Paragraph>
        <p>
          As well as designing this application I also worked on building the
          front end for it using the Angular framework. Most of my experience in
          coding has been with React so it was a great experience to compare the
          two.
        </p>
        <p>
          Echo studio imports the css variables from the application - enabling
          a non technical user to update and rebrand the application in live.
          Echo studio has a simplified design system in keeping with the
          Pollinate branding.
        </p>
        <p>
          Functionality includes - showcasing the product in any theme, across
          any device, viewing the component library and changing styles at
          either a design system level - or at a component level. It enabled
          users to change copy and view the application on any user state e.g.
          first time user. Finally, the code can be exported or modified
          directly in the application. To access echo studio, users would just
          have to prefix the URL with the name.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/echo-24.png"
        imageTwo="/images/echo-25.png"
        mobileOne="/images/echo-24-mobile.png"
        mobileTwo="/images/echo-25-mobile.png"
        captionOne="(7a) Simple design system for Echo studio"
        captionTwo="(7b) Echo studio components"
      />
      <Single
        layout="start"
        image="/images/echo-26.png"
        mobile="/images/echo-26-mobile.png"
        caption="(7c) Modify colours, typography, border radius and more at a component level"
      />
      <Single
        layout="full"
        image="/images/echo-27.png"
        mobile="/images/echo-27-mobile.png"
        caption="(7d) Echo studio is essentially a side panel of tools"
      />
      <Single
        layout="full"
        image="/images/echo-28.png"
        mobile="/images/echo-28-mobile.png"
        caption="(7e) Reskin the application to any theme"
      />
      <GridTwo
        imageOne="/images/echo-29.png"
        imageTwo="/images/echo-30.png"
        mobileOne="/images/echo-29-mobile.png"
        mobileTwo="/images/echo-30-mobile.png"
        captionOne="(7f) View the application on mobile"
        captionTwo="(7g) View the application on tablet"
      />
      <GridTwo
        imageOne="/images/echo-31.png"
        imageTwo="/images/echo-32.png"
        mobileOne="/images/echo-31-mobile.png"
        mobileTwo="/images/echo-32-mobile.png"
        captionOne="(7h) Select a user view of the application"
        captionTwo="(7i) Understand all the states the app can appear in"
      />
      <Single
        layout="full"
        image="/images/echo-33.png"
        mobile="/images/echo-33-mobile.png"
        caption="(7f) The application in two additional themes"
      />
    </>
  );
};

export default Echo;

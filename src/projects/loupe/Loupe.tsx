import Header from "../../case-study/text-layouts/Header";
import GridThree from "../../case-study/image-layouts/GridThree";
import React from "react";
import SubHeader from "../../case-study/text-layouts/SubHeader";
import Paragraph from "../../case-study/text-layouts/Paragraph";
import Single from "../../case-study/image-layouts/Single";
import GridTwo from "../../case-study/image-layouts/GridTwo";

import NavBar from "../../common/NavBar";

import { PrototypeTwo, PrototypeOne } from "./LoupeVideos";
import VideoBlock from "../../common/VideoBlock";

const Loupe = () => {
  return (
    <>
      <NavBar />
      <Header
        heading="Loupe"
        subHeading="Connecting the fragmented user experience for planning and booking trips. Loupe is a content-led subscription offering reviews of places to stay, activities to try, restaurants to book and an online store. It’s main features are creating mapped itiniraries and favourites lists."
        role="Lead Product Designer & React Developer"
        tags="Design System, CSS variables, Design Tokens, UI"
      />
      <GridThree
        imageOne="/images/loupe-01.png"
        captionOne="(1a) Mobile version of the homepage"
        imageTwo="/images/loupe-02.png"
        captionTwo="(1b) Carousel interaction"
        imageThree="/images/loupe-03.png"
        captionThree="(1c) Map view of locations"
      />
      <PrototypeOne />
      <SubHeader
        heading="The problem"
        subHeading="The average travel consumer looks at 38 websites before making an online booking. Consumers often book across multiple platforms to coordinate a trip and tailor it to their preferences. "
      />
      <Paragraph>
        <p>
          Research shows that activities and experiences drive travel consumers’
          decisions. They feel their perspective and preferences are unique, so
          pre-packaged holidays don’t feel personal. This product enable users
          to discover places to stay, eat and shop through editorials created by
          the former editors of Condé Naste Traveller.
        </p>
        <p>
          Using storytelling to match users with a network of destinations - the
          app creates itineraries and suggestions based on usage. The product is
          monetised via a monthly membership for access to the content.
        </p>
        <p>Competitors include thenudge.com and mrandmrsSmith.com.</p>
      </Paragraph>
      <Single
        layout="full"
        image="/images/loupe-04.png"
        mobile="/images/loupe-04-mobile.png"
        caption="(2a) Favourites list on mobile"
      />
      <Single
        layout="end"
        image="/images/loupe-05.png"
        mobile="/images/loupe-05-mobile.png"
        caption="(2b) Finding places to eat"
      />
      <Single
        layout="start"
        image="/images/loupe-06.png"
        mobile="/images/loupe-06-mobile.png"
        caption="(2d) E-commerce on Loupe with custom UI illustration"
      />
      <Single
        layout="end"
        image="/images/loupe-07.png"
        mobile="/images/loupe-07-mobile.png"
        caption="(2e) Desktop and mobile maps of locations"
      />
      <SubHeader
        heading="Research"
        subHeading="This application was going to be replacing and rebranding an existing business. However research suggested that the new target audience has very different purchasing journey to the existing user base."
      />
      <Paragraph>
        <p>
          This project had a common theme running through it, a tension around
          whether this application was a functional, booking utility or an
          editorial subscription site that enabled booking as a secondary
          action. This is because we weren’t starting completely from scratch.
        </p>
        <p>
          There was a pre-existing business with an average of 3500 users per
          week that stakeholders wanted to win over with the new platform, so we
          could leverage the existing revenue and have insight into behaviour
          from day one
        </p>
        <p>
          I ran a customer purchasing journey interview with 3 of the most
          engaged users from this platform. They were in their 50s and used the
          site mostly for work, location was the most important factor, bookings
          tended to be quite last minute from a day to rare occasion of a month,
          not into ‘brands or influencers’, don’t engage with blogs or travel
          content, look for practicality. This was quite a surprise and sparked
          a debate about the direction of the product.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/loupe-08.png"
        imageTwo="/images/loupe-09.png"
        mobileOne="/images/loupe-08-mobile.png"
        mobileTwo="/images/loupe-09-mobile.png"
        captionOne="(3a) Customer purchasing journey"
        captionTwo="(3b) Extract from the service map created for Loupe"
      />
      <GridTwo
        imageOne="/images/loupe-10.png"
        imageTwo="/images/loupe-11.png"
        mobileOne="/images/loupe-10-mobile.png"
        mobileTwo="/images/loupe-11-mobile.png"
        captionOne="(3c) Booking-led vs Content-led"
        captionTwo="3d) Example, Trippin vs Air bnb"
      />
      <Paragraph>
        <p>
          Content-led bookings have a more exploratory UX with an interface that
          has a more editorial style layout and maximises on emotion and brand.
          They’re geared to align with a users values via subconscious appeal.
        </p>
        <p>
          Booking-led functionality UX is optimised for speed and has a more
          directional, linear journey. The interface is more cautious on
          spacing, maximising real-estate with main features such as search and
          filters to help get the user from A to B. The branding tends to be
          mainstream and minimal. After a few sessions with stakeholders we
          settled on a content-led approach which enabled me to create a
          site-map and user journeys for the initial offering.
        </p>
        <p>
          Booking-led functionality UX is optimised for speed and has a more
          directional, linear journey. The interface is more cautious on
          spacing, maximising real-estate with main features such as search and
          filters to help get the user from A to B. The branding tends to be
          mainstream and minimal. After a few sessions with stakeholders we
          settled on a content-led approach which enabled me to create a
          site-map and user journeys for the initial offering.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/loupe-12.png"
        imageTwo="/images/loupe-13.png"
        mobileOne="/images/loupe-12-mobile.png"
        mobileTwo="/images/loupe-13-mobile.png"
        captionOne="(4a) V1 Site map"
        captionTwo="(4b) V1 User flows"
      />
      <SubHeader
        heading="Low fidelity and first prototype"
        subHeading="To get initial feedback from users I created some initial wireframes which then became the first Loupe prototype."
      />
      <Paragraph>
        <p>
          Another challenge with this project is that we didn’t have any
          branding direction or guides until much later in the project. I
          created this initial UI as something half way between the existing
          website Loupe was being built on and inspiration from premium
          magazines.
        </p>
        <p>
          Feedback from the user research suggested the aesthetic was the right
          fit for our consumers “I absolutely love the aesthetic, how smooth
          everything is, it feels like I’ve found a hidden gem!” but we also
          found that users didn’t trust the reviews were authentic...”I think I
          will check the shop or restaurant on Trip Advisor to see if it’s legit
          or a red flag or something.”
        </p>
      </Paragraph>
      <Single
        layout="full"
        image="/images/loupe-14.png"
        mobile="/images/loupe-14-mobile.png"
        caption="(5a) Low fidelity designs"
      />
      <PrototypeTwo />
      <SubHeader
        heading="Branding & Design system"
        subHeading="Loupe used an external agency for the fundamental brand guidelines - the logo, main colour palettes and typography. I then explored visual treatments and application of these to the product."
      />
      <Paragraph>
        <p>
          Our brand values were defined as Inspire, Connect, Challenge, Belong.
          I then extended our visual brand guidelines to include the words Paper
          Feel, The Loupe, Secrets and Contrast
        </p>
        <p>
          Paper feel - the interface plays with the idea of being tactile with a
          handwritten font, tears and drawings laid over images. The Loupe is
          the brand symbol, it uses circles, a lens and plays with perspectives.
          Secrets is a bout revealing information to a user in stages e.g. our
          carousel circle interaction. The idea of contrast is presented by
          mixing sharp and soft and Serif and Sans Serif fonts.
        </p>
      </Paragraph>
      <GridThree
        imageOne="/images/loupe-15.png"
        captionOne="(6a) Cut out circle overlay"
        imageTwo="/images/loupe-16.png"
        captionTwo="(6b) Warped lettering"
        imageThree="/images/loupe-17.png"
        captionThree="6c) Clever placement"
      />
      <GridThree
        imageOne="/images/loupe-18.png"
        captionOne="(6d) Cut out warped ‘O’"
        imageTwo="/images/loupe-19.png"
        captionTwo="(6e) Cut out warped ‘O’ ii"
        imageThree="/images/loupe-20.png"
        captionThree="(6f) Simple layering and collage"
      />
      <GridThree
        imageOne="/images/loupe-21.png"
        captionOne="(6g) Placement ii"
        imageTwo="/images/loupe-22.png"
        captionTwo="(6h) Placement iii"
        imageThree="/images/loupe-23.png"
        captionThree="(6i) Hand written"
      />
      <Paragraph>
        <p>
          I created the Design System from the brand guidelines following an
          atomic structure, and defining the typographic scale and usage, as
          well as the interface colour palette and interactions. In addition to
          software elements, the project required many layout options for
          content, imagery and video. Some examples can be seen below.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/loupe-24.png"
        imageTwo="/images/loupe-25.png"
        mobileOne="/images/loupe-24-mobile.png"
        mobileTwo="/images/loupe-25-mobile.png"
        captionOne="(7a) Colour palette"
        captionTwo="(7b) Component library"
      />
      <VideoBlock
        src={"/video/loupe-03.mp4"}
        gridColumn="2/11"
        textColor="black"
        caption="(7c) Video layout"
      />
      <VideoBlock
        src={"/video/loupe-04.mp4"}
        gridColumn="2/11"
        textColor="black"
        caption="(7d) Header interaction I implemented with CSS"
      />
      <VideoBlock
        src={"/video/loupe-05.mp4"}
        gridColumn="2/11"
        textColor="black"
        caption="(7e) Video layering"
      />
      <VideoBlock
        src={"/video/loupe-06.mp4"}
        gridColumn="1/-1"
        textColor="black"
        caption="(7f) Custom loader designed and created in After Effects and exported as a Lottie file"
      />
      <Paragraph>
        <p>
          Data from the first week of launch has 2,063 site events, 26 full
          memberships and 39 newsletter opt-ins. In first month of launch for
          beta-cohort of users via email only, conversion rate of website to
          full membership averaged at 7% (industry standard 2-5%). The product
          that Pollinate created for Loupe was taken to rounds of funding so no
          further data is available.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/loupe-26.png"
        imageTwo="/images/loupe-27.png"
        mobileOne="/images/loupe-26-mobile.png"
        mobileTwo="/images/loupe-27-mobile.png"
        captionOne="(8a) Mobile concept for the Itinerary Shuffler"
        captionTwo="(8b) Carousel design and implementation"
      />
      <GridTwo
        imageOne="/images/loupe-28.png"
        imageTwo="/images/loupe-29.png"
        mobileOne="/images/loupe-28-mobile.png"
        mobileTwo="/images/loupe-29-mobile.png"
        captionOne="(8b) Example of content filtering"
        captionTwo="(8c) Search and footer designs"
      />
      <Single
        layout="end"
        image="/images/loupe-30.png"
        mobile="/images/loupe-30-mobile.png"
        caption="(8d) Desktop example of favourites list"
      />
    </>
  );
};

export default Loupe;

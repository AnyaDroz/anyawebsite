import Header from "../../case-study/text-layouts/Header";
import GridThree from "../../case-study/image-layouts/GridThree";
import React from "react";

import Single from "../../case-study/image-layouts/Single";
import SubHeader from "../../case-study/text-layouts/SubHeader";
import Paragraph from "../../case-study/text-layouts/Paragraph";
import GridTwo from "../../case-study/image-layouts/GridTwo";
import NavBar from "../../common/NavBar";

const Access = () => {
  return (
    <>
      <NavBar />
      <Header
        heading="Instant access"
        subHeading="Letting businesses try iwocaPay before sign up."
        role="Product Designer"
        tags="Design System, CSS variables, Design Tokens, UI"
      />
      <GridThree
        imageOne="/images/access-01.png"
        captionOne="(1a) Mobile example screen of light mode design system"
        imageTwo="/images/access-02.png"
        captionTwo="(1b) Selection of light mode components"
        imageThree="/images/access-03.png"
        captionThree="(1c) Dark mode components"
      />
      <Single
        layout="end"
        image="/images/access-04.png"
        mobile="/images/access-04-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <Single
        layout="full"
        image="/images/access-05.png"
        mobile="/images/access-05-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <Single
        layout="full"
        image="/images/access-06.png"
        mobile="/images/access-06-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <SubHeader
        heading="The problem"
        subHeading="Some SME's struggle to see how iwocaPay fits their business - 'iwocaPay looks great, but, it's not for us'"
      />
      <Paragraph>
        <p>
          We had a 50% increase in our traffic to the website, but conversion
          didn’t improve. So, what were these people looking for that they
          didn’t find? How can we better tailor iwocaPay or talk about iwocaPay
          so sellers can more quickly evaluate whether it’s a solution for them?
        </p>
        <p>
          In the first year of iwocaPay we were able to capture the industry of
          our merchants because of the manual onboarding. We saw some initial
          data to suggest industry segmented behaviour ( although numbers are
          too low to tell ) - part of this project was to recapture more
          business information at some point in the journey.
        </p>
        <p>
          Equally we can see the percentage of merchants onboarded sending a pay
          link is decreasing - suggesting they are getting through the first two
          sign up steps & not coming back to use the platform. We hypothesise
          this is because the ( upto 2 day! ) wait to be able to send a pay
          link. The good news - once they try it - they’re staying more active!
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/access-07.png"
        imageTwo="/images/access-08.png"
        mobileOne="/images/access-07-mobile.png"
        mobileTwo="/images/access-08-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <Single
        layout="start"
        image="/images/access-09.png"
        mobile="/images/access-09-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <SubHeader
        heading="New user journey"
        subHeading="Instead of asking merchants to sign up and then making them wait to see if they’re eligible, we built an instant access dashboard that would allow users to either continue onboarding or explore their account to understand more about the product."
      />
      <Paragraph>
        <p>
          There was plenty of discussion in figuring out when to ask which
          questions. The 'Director's profile' are the compulsory details we need
          to check a potential business. In this new flow we're requesting
          additional questions in step 2 as a way to understand our users and
          prioritise leads. The biggest removal of friction was we would no
          longer need to send a contract for the 'Seller agreement', users will
          be able to agree to this via a tickbox.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/access-10.png"
        imageTwo="/images/access-11.png"
        mobileOne="/images/access-10-mobile.png"
        mobileTwo="/images/access-11-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <GridTwo
        imageOne="/images/access-12.png"
        imageTwo="/images/access-13.png"
        mobileOne="/images/access-12-mobile.png"
        mobileTwo="/images/access-13-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <Single
        layout="full"
        image="/images/access-14.png"
        mobile="/images/access-14-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <Paragraph>
        <p>
          For this project - we needed a simple solution that could be
          implemented quickly and easily customisable in the future.
        </p>
        <p>
          The two interface options were an expandable activation modal, that
          would follow the User around the account whilst they explored features
          VS a new 'global dashboard' that would change states from a sign up
          screen to an activated account state.
        </p>
        <p>
          After speaking with developers - both options would require the same
          amount of effort. I created an initial prototype for Option 2 - a new
          global dashboard, to test with users. The goal for the test was to
          understand if potential sellers were able to see how iwocaPay fits
          their business through exploring it’s features.
        </p>
      </Paragraph>
      <GridThree
        imageOne="/images/access-15.png"
        captionOne="(1a) Mobile example screen of light mode design system"
        imageTwo="/images/access-16.png"
        captionTwo="(1b) Selection of light mode components"
        imageThree="/images/access-17.png"
        captionThree="(1c) Dark mode components"
      />
      <GridTwo
        imageOne="/images/access-18.png"
        imageTwo="/images/access-19.png"
        mobileOne="/images/access-18-mobile.png"
        mobileTwo="/images/access-19-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <Paragraph>
        <p>
          After implementatons there was a significant increase in both
          conversion rate (by 2%) and the speed of onboarding (it took on
          average under a day, compared to a week prior to the release).
        </p>
        <p>
          There was an even bigger impact for our ops & sales team who no longer
          had to explain the benefits of the product or manually onboard every
          merchant.
        </p>
        <p>
          "So, cost obviously - what’s it going to cost and what’s going to get
          taken away from any invoices that are paid"
        </p>
        <p>
          "cost is a big one..integrations too, but the cost is going to be a
          big one”
        </p>
        <p>
          "Ahh Paylinks - yeah! If this goes live - I wanna know about it! Yeah
          all the links is perfect...well, this is even better I can see the
          different options across the top - I have the option of seeing who
          pays - for this. Okay and the Pay Later option I can choose here who
          pays for that privilege."
        </p>
      </Paragraph>
      <Single
        layout="end"
        image="/images/access-20.png"
        mobile="/images/access-20-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <Single
        layout="full"
        image="/images/access-21.png"
        mobile="/images/access-21-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
    </>
  );
};

export default Access;

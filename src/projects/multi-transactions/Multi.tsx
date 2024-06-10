import Header from "../../case-study/text-layouts/Header";
import GridThree from "../../case-study/image-layouts/GridThree";
import React from "react";
import SubHeader from "../../case-study/text-layouts/SubHeader";
import Paragraph from "../../case-study/text-layouts/Paragraph";
import Single from "../../case-study/image-layouts/Single";
import GridTwo from "../../case-study/image-layouts/GridTwo";
import NavBar from "../../common/NavBar";

const Multi = () => {
  return (
    <>
      <NavBar />
      <Header
        heading="Multi-transactions"
        subHeading="Let buyers Pay later on multiple invoices at a time."
        role="Lead Product Designer & React Developer"
        tags="Design System, CSS variables, Design Tokens, UI"
      />
      <GridThree
        imageOne="/images/multi-01.png"
        captionOne="(1a) Mobile example screen of light mode design system"
        imageTwo="/images/multi-02.png"
        captionTwo="(1b) Selection of light mode components"
        imageThree="/images/multi-03.png"
        captionThree="(1c) Dark mode components"
      />
      <SubHeader
        heading="The problem"
        subHeading="iwocaPay is only really suitable for one-off invoices.  Buyers can only pay for a second invoice using Pay Later if they have paid off their first balance. "
      />
      <Paragraph>
        <p>
          This stops potential buyers from completing the sign-up and puts .off
          sellers with a regular client base from joining iwocaPay.
          Additionally, competing B2B Pay Later players such as TreviPay,
          Tillit, Balance and Behalf all offer financing on recurring payments.
        </p>
      </Paragraph>
      <Single
        layout="full"
        image="/images/multi-04.png"
        mobile="/images/echo-04-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <Single
        layout="end"
        image="/images/multi-05.png"
        mobile="/images/multi-05-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <GridTwo
        imageOne="/images/multi-06.png"
        imageTwo="/images/multi-07.png"
        mobileOne="/images/multi-06-mobile.png"
        mobileTwo="/images/multi-07-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <GridTwo
        imageOne="/images/multi-08.png"
        imageTwo="/images/multi-09.png"
        mobileOne="/images/multi-08-mobile.png"
        mobileTwo="/images/multi-09-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <Paragraph>
        <p>
          Data shows that the majority of businesses receive upto 10 invoices
          per month from upto 5 suppliers (a proportion of those being regular
          suppliers) it’s just not worthwhile to sign up for Pay later for only
          one of those transactions.
        </p>
        <p>
          By allowing multiple transactions for Pay later, there will be less
          friction to usage - both for buyers and sellers.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/multi-10.png"
        imageTwo="/images/multi-11.png"
        mobileOne="/images/multi-10-mobile.png"
        mobileTwo="/images/multi-11-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <Paragraph>
        <p>
          Customers provided feedback that “Repeat functionality would be great,
          I would’ve thought this already existed”...“We’re on a monthly
          retainer so it’s not worth it to use Pay Later just once every
          quarter” and that “A big part of our service is with regular
          customers”
        </p>
        <p>
          Multi-transactions was a hygiene feature, our users expected it to
          exist so this particular project did not require a full-scale
          discovery. I did however seek evidence to confirm this assumption by
          interviewing both buyers and sellers.
        </p>
        <p>
          Multi-transactions was a hygiene feature, our users expected it to
          exist so this particular project did not require a full-scale
          discovery. I did however seek evidence to confirm this assumption by
          interviewing both buyers and sellers.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/multi-12.png"
        imageTwo="/images/multi-13.png"
        mobileOne="/images/multi-12-mobile.png"
        mobileTwo="/images/multi-13-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <Paragraph>
        <p>
          A buyer’s dashboard needs to support a variety of combinations of
          different Pay link states - these states have different actions, and
          are of varying urgency. For example, an overdue Pay link should take
          priority over a partial Pay link.
        </p>
        <p>
          The challenges were; figuring out the hierarchy of information on the
          dashboard - to show the most important top-level information first and
          make sure users could also deep dive into the details of transactions
          for reconciliation and tracking.
        </p>
        <p>
          We ran a card sorting exercise to help us understand what was most
          important to our users. Additionally, we knew that many customers were
          sharing their dashboard with their accountants, so we repeated the
          same card-sorting exercise with this group of users.
        </p>
      </Paragraph>
      <GridTwo
        imageOne="/images/multi-14.png"
        imageTwo="/images/multi-15.png"
        mobileOne="/images/multi-14-mobile.png"
        mobileTwo="/images/multi-15-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <SubHeader
        heading="Low fidelity"
        subHeading="Emulating the look and feel of a paper invoices - I opted for a card system instead of numerical tables. Progress visualisations were added to encourage repayments and reduce buyer’s remorse."
      />
      <Paragraph>
        <p>
          Multiple repayment brought up the question of whether to consolidate
          them to a single schedule - but, we know from behavioural insights
          that users are engaged in activities with smaller achievements - so
          the payments were kept ‘attached’ to the original transaction to make
          them feel more manageable.
        </p>
      </Paragraph>
      <Single
        layout="full"
        image="/images/multi-16.png"
        mobile="/images/multi-16-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <Paragraph>
        <p>
          The high-fidelity designs made use of a pattern system for the top
          banner, for every different dashboard state, the user is greeted with
          a slightly different look & feel. This was a way of communicating if
          they are overdue or paid off their balance without relying on copy. .
        </p>
      </Paragraph>
      <Single
        layout="full"
        image="/images/multi-17.png"
        mobile="/images/multi-17-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <GridTwo
        imageOne="/images/multi-18.png"
        imageTwo="/images/multi-19.png"
        mobileOne="/images/multi-18-mobile.png"
        mobileTwo="/images/multi-19-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <GridTwo
        imageOne="/images/multi-20.png"
        imageTwo="/images/multi-21.png"
        mobileOne="/images/multi-20-mobile.png"
        mobileTwo="/images/multi-21-mobile.png"
        captionOne="(2a) Default dark theme application"
        captionTwo="(2b) Default light theme application"
      />
      <SubHeader
        heading="User testing"
        subHeading="We tested the designs with participants in user testing and with existing customers. Users found the dashboard intuitive and the account overview matched the information they wanted to see."
      />
      <Paragraph>
        <p>
          Some standout quotes were “The dashboard clearly states my next
          payment, there’s a countdown, I can see what my balance is. How much
          of a remaining limit I have almost like a credit card...” and “Pretty
          simple and straightforward, everything in one dashboard, there’s
          nothing else I’d really want to see from there, that’s pretty
          straightforward.”
        </p>
        <p>
          Visuals support their understanding and add a little delight. “I don’t
          really have any questions about this payment so far it all seems to
          make sense. The interest calculations do make sense as well, yeah they
          do make perfect sense, so no, it’s pretty easy to understand andI
          quite like the little graphic of the circle being filled..”
        </p>
        <p>
          Business owners couldn’t understand the schedules, and why there was
          interest included in the first month, as it states that the first 30
          days are interest free on the payment terms. The system is set up so
          that the repayments calculate to be equal, this makes it look like a
          mistake - which is a big friction point in financial products where
          trust is crucial.
        </p>
      </Paragraph>
      <Single
        layout="full"
        image="/images/multi-22.png"
        mobile="/images/multi-22-mobile.png"
        caption="(3a) A clock component styled with one layer of css variables"
      />
      <Paragraph>
        <p>
          Since this project, I’ve gained experience in both strategy and
          programming. If I could go back - I would descope the front-end build
          and think about what the smallest slice of delivery that could enable
          multiple transactions - infact the first version might not even need a
          custom built dashboard.
        </p>
        <p>
          In terms of development, my knowledge in programming has taught me
          feasibility and in particular for this project - how using CSS grids
          could make complex layouts simpler to implement.
        </p>
        <p>
          For design - I would use more familiar patterns e.g. my choice in
          icons and clearer navigation so users can find information more
          easily.
        </p>
      </Paragraph>
    </>
  );
};

export default Multi;

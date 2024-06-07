import "./Analogue.module.css";
import Template from "../../case-study/text-layouts/Template";
import Header from "../../case-study/text-layouts/Header";
import Paragraph from "../../case-study/text-layouts/Paragraph";
import SubHeader from "../../case-study/text-layouts/SubHeader";
import ImageSectionOne from "./ImageSectionOne";
import ImageSectionTwo from "./ImageSectionTwo";
import ImageSectionThree from "./ImageSectionThree";
import ImageSectionFour from "./ImageSectionFour";
import ImageSectionFive from "./ImageSectionFive";
import ImageSectionSix from "./ImageSectionSix";
import ImageSectionSeven from "./ImageSectionSeven";
import ImageSectionEight from "./ImageSectionEight";
import ImageSectionNine from "./ImageSectionNine";
import ImageSectionTen from "./ImageSectionTen";
import ImageSectionEleven from "./ImageSectionEleven";
import ImageSectionTwelve from "./ImageSectionTwelve";
import ImageSectionThirteen from "./ImageSectionThirteen";
import ImageSectionFourteen from "./ImageSectionFourteen";
import ImageSectionFifteen from "./ImageSectionFifteen";
import CodeBlock from "../../common/CodeBlock";

function Analogue() {
  const codeOne = `//clock-card.modules.css

//why is this customisation not possible, let’s take a look at the code.

.clock-hands { 
     background-color: var(--global_color_primary-content) 
}

.minute-lines { 
     color: var(--global_color_primary-content) 
}

.hour-lines { 
     color: var(--global_color_primary-content) 
}

.card-text { 
     color: var(--global_color_primary-content) 
}

//light-theme.modules.css

: root { --global_color_primary-content: --token_color_dark-grey }

//by changing the global style for primary-content to red for our customisation - you’ll affect every css property pointing to that variable. The only way to do this with this current setup would be to override the style in clock-card.modules.css, and we can’t do that because it will break the theme setup.`;

  const codeTwo = `//light-theme.modules.css

//We can programmatically generate our shades using color-mix, here is an example for our button hover colour
 
:root { 
--alias_color_accent-85: color-mix(in rgb, var(--global_color_accent) 85% , var(--global_color_accent-mix) 15%);

--alias_color_accent-hover: var(--alias_color_accent-85);

--component_color_button-filled-hover: var(--alias_color_accent-hover);
}`;

  return (
    <Template>
      <Header
        tags="Design System, CSS variables, Design Tokens, UI"
        heading="Analogue Design System"
        subHeading="Using nested variables to create a white-labelled design system with a default, minimal Light & Dark theme."
        role="UI Designer"
      />
      <ImageSectionOne />

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
          such as Material and Adobe usually referred to as <b>design tokens</b>{" "}
          This is not to be confused with a single layer of variable such as
          defining an accent colour.
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
          between this and a standard design system. The use of a{" "}
          <b>component variables</b> and alias variables.
        </p>
      </Paragraph>
      <ImageSectionTwo />
      <Paragraph>
        <p>
          Most design systems do use variables. However they usually only allows
          for simple switching of themes across the basic properties - as you
          can see above - most of the styles are just an inversion or simple
          switch of colours. These css variables are usually written as
          <b>--global-colour-accent</b> as an example. Their role is for
          capturing values for consistency.
        </p>
        <p>
          The clock however, has style overrides to the default to demonstrate
          how
          <b>using variables with a middle layer is far more customisable.</b>
        </p>
      </Paragraph>
      <ImageSectionThree />
      <ImageSectionFour />
      <CodeBlock code={codeOne} />
      <ImageSectionFive />
      <ImageSectionSix />
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
      <ImageSectionSeven />
      <ImageSectionEight />
      <ImageSectionNine />
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
      <ImageSectionTen />
      <CodeBlock code={codeTwo} />
      <ImageSectionEleven />
      <ImageSectionTwelve />
      <SubHeader
        heading="Typography"
        subHeading="One of my favourite discoveries when creating a design system the first time, was implementation of typography components that take props such as size, line-height and style."
      ></SubHeader>
      <CodeBlock
        code={
          "//light-theme.modules.css\n" +
          "\n" +
          "type Props = {\n" +
          "  size: ‘s’ | ‘m’ | ‘l’;\n" +
          "  lineHeight: ‘s’ | ‘m’ | ‘l’;\n" +
          "};\n" +
          "\n" +
          "const Paragraph = ({\n" +
          " size = ‘m’, \n" +
          "lineHeight =’l’,\n" +
          "  children,\n" +
          "}: PropsWithChildren<Props>) => {\n" +
          " ...\n" +
          "\n" +
          "<Paragraph size=’s’ line-height=’l’>Fusion Neue</Typography>\n" +
          "\n" +
          "//I also want to mention the beauty of shorthand font styling \n" +
          ".paragraph-small {\n" +
          "font: 16px 120% var(--global_typography_paragraph-font-family)\n" +
          "}"
        }
      />
      <ImageSectionThirteen />
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
      <ImageSectionFourteen />
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
      <ImageSectionFifteen />
    </Template>
  );
}

export default Analogue;

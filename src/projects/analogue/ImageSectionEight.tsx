import GridTwo from "../../case-study/image-layouts/GridTwo";

export default function ImageSectionEight() {
  return (
    <GridTwo
      imageOne={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-12-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-12.png"
          />
          <img src="/images/analogue-12.png" alt="phone" loading="lazy" />
        </picture>
      }
      captionOne="(1a) Mobile example screen of light mode design system"
      imageTwo={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-13-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-13.png"
          />
          <img src="/images/analogue-13.png" alt="phone" loading="lazy" />
        </picture>
      }
      captionTwo="(1b) Mobile example screen of light mode design systemexample screen of light mode design system"
    />
  );
}

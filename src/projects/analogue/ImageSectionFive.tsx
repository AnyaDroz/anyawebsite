import Single from "../../case-study/image-layouts/Single";

export default function ImageSectionFive() {
  return (
    <Single
      layout="start"
      image={
        <picture>
          <source
            media="(max-width: 478px)"
            srcSet="/images/analogue-09-mobile.png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/analogue-09.png"
          />
          <img
            src="/images/analogue-09.png"
            alt="Analogue clock component"
            loading="lazy"
          />
        </picture>
      }
      caption="(4a) A clock component styled with one layer of css variables"
    />
  );
}

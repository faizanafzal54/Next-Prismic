import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import SecondRowSlice from "../SecondRowSlice";
import styles from "../../styles/main.module.scss";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-white text-[#101010]"
    >
      <div className="w-full h-full">
        <div className="text-center">
          <Heading className={styles.mainHeading}>
            <PrismicText field={slice.primary.heading} />
          </Heading>
          <Heading className={styles.mainHeading}>
            <PrismicText field={slice.primary.sub_heading} />
          </Heading>
          <div className={styles.subHeading}>
            <PrismicRichText field={slice.primary.top_para} />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;

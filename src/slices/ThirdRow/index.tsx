import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { RepeatHeading } from "@/components/RepeatHeading";
import { ParagraphText } from "@/components/ParagraphText";
import { PrismicNextImage } from "@prismicio/next";
import styles from "../../styles/thridRow.module.scss";
/**
 * Props for `ThirdRow`.
 */
export type ThirdRowProps = SliceComponentProps<Content.ThirdRowSlice>;

/**
 * Component for "ThirdRow" Slices.
 */
const ThirdRow: FC<ThirdRowProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`flex flex-col lg:flex-row ${styles.main}`}>
        <div className={styles.box}>
          <div>
            <span className={styles.heading}>
              <PrismicRichText field={slice.primary.heading} />
            </span>
            <div className={styles.subText}>
              <PrismicRichText field={slice.primary.second_heading} />
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-6 mt-[4rem] items-center">
            <PrismicNextImage
              className={styles.customerImages}
              alt=""
              field={slice.primary.first_logo}
            />
            <PrismicNextImage
              className={styles.customerImages}
              alt=""
              field={slice.primary.second_logo}
            />
            <PrismicNextImage
              className={styles.customerImages}
              alt=""
              field={slice.primary.third_logo}
            />
            <PrismicNextImage
              className={styles.customerImages}
              alt=""
              field={slice.primary.fourth}
            />
            <PrismicNextImage
              className={styles.customerImages}
              alt=""
              field={slice.primary.first_logo}
            />
            <PrismicNextImage
              className={styles.customerImages}
              alt=""
              field={slice.primary.sixth_logo}
            />
            <PrismicNextImage
              className={styles.customerImages}
              alt=""
              field={slice.primary.seven_logo}
            />
            <PrismicNextImage
              className={styles.customerImages}
              alt=""
              field={slice.primary.eight_logo}
            />
          </div>
        </div>
        <div className={`${styles.boxTwo} relative`}>
          <div className={styles.boxTwoBGImageBox}>
            {/* Left Content with Text */}
            <div className="absolute inset-0  opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8 text-white max-w-md">
              <span className="text-xl font-bold">
                <PrismicRichText field={slice.primary.second_box_heading} />
              </span>
              <ParagraphText className="mt-2 text-sm">
                <PrismicRichText field={slice.primary.paragraphdiscription} />
              </ParagraphText>
            </div>

            {/* Right Content with Image */}
            <PrismicNextImage
              alt=""
              className={styles.boxTwoBGImage}
              field={slice.primary.box_image}
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default ThirdRow;

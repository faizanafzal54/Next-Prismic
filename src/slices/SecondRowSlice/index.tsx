import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { RepeatHeading } from "@/components/RepeatHeading";
import { ParagraphText } from "@/components/ParagraphText";
import styles from "../../styles/secondRow.module.scss";
/**
 * Props for `SecondRowSlice`.
 */
const data = [
  { without: 20, with: 10 },
  { without: 30, with: 20 },
  { without: 40, with: 30 },
  { without: 50, with: 40 },
];
export type SecondRowSliceProps =
  SliceComponentProps<Content.SecondRowSliceSlice>;

/**
 * Component for "SecondRowSlice" Slices.
 */
const SecondRowSlice: FC<SecondRowSliceProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`flex flex-col lg:flex-row ${styles.mainDiv}`}>
        <div className={`${styles.box} flex flex-col`}>
          <div className="top-heading">
            <span className={styles.heading}>
              <PrismicRichText field={slice.primary.heading} />
            </span>
            <div className={styles.subText}>
              <PrismicRichText field={slice.primary.sub_heading} />
            </div>
          </div>

          <div className={styles.firstChartBox}>
            <div className="flex items-end space-x-2">
              {data.map((item, index) => (
                <div
                  key={index.toString()}
                  className="flex flex-col items-center"
                >
                  <div
                    className="bg-gray-300 w-3"
                    style={{ height: `${item.without}px` }}
                  ></div>
                  <div
                    className="bg-black w-3"
                    style={{ height: `${item.with}px` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-2">
                <span className="w-[10px] h-[10px] rounded-[50%] bg-[#E2E4E4]"></span>
                <span className="text-[11px] font-[400] font-body leading-[13px] text-[#8A898E]">
                  <PrismicRichText field={slice.primary.without_green} />
                </span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="w-[10px] h-[10px] rounded-[50%] bg-[#101010]"></span>
                <ParagraphText className="text-[11px] font-[400] font-body leading-[13px] text-[#8A898E]">
                  <PrismicRichText field={slice.primary.with_green} />
                </ParagraphText>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.box} flex flex-col`}>
          <div>
            <span className={styles.heading}>
              <PrismicRichText field={slice.primary.second_heading} />
            </span>
            <div className={styles.subText}>
              <PrismicRichText field={slice.primary.second_sub_heading} />
            </div>
          </div>
          <div className={`grid grid-cols-4 gap-4 ${styles.boxTwoOptionsDiv}`}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className={styles.boxTwoOptions}>
                a
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div>
            <span className={styles.heading}>
              <PrismicRichText field={slice.primary.thirdheading} />
            </span>
            <ParagraphText className={styles.subText}>
              <PrismicRichText field={slice.primary.third_sub_heading} />
            </ParagraphText>
          </div>
          <div className="flex justify-center">
            <div className={styles.measureLabel}>94 tCO2e</div>
          </div>
          <div className="relative w-full max-w-lg mx-auto mt-10">
            <div className="relative h-10 w-full flex items-center">
              <div className="absolute w-full flex justify-between items-baseline">
                {Array.from({ length: 50 }).map((_, index) => (
                  <div
                    key={index}
                    className={`bg-gray-500 ${index % 5 === 0 ? "h-6 w-[2px]" : "h-3 w-[1px]"}`}
                  ></div>
                ))}
              </div>
              <div className="absolute h-12 w-[3px] bg-green-500 left-[51%] top-[-15px]"></div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default SecondRowSlice;

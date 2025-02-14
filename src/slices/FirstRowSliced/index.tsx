import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import styles from "../../styles/firstRow.module.scss";

/**
 * Props for `FirstRowSliced`.
 */
export type FirstRowSlicedProps =
  SliceComponentProps<Content.FirstRowSlicedSlice>;

/**
 * Component for "FirstRowSliced" Slices.
 */
const FirstRowSliced: FC<FirstRowSlicedProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`lg:flex-row ${styles.mainDiv}`}>
        <div className={`First-box ${styles.first}`}>
          <div className={styles.secFirst}>
            <div>
              <span className={styles.primaryHeading}>
                <PrismicText field={slice.primary.heading} />
              </span>
            </div>
            <div>
              <span className={styles.secondaryHeading}>
                <PrismicText field={slice.primary.second_heading} />
              </span>
            </div>
          </div>
          <div className="w-full">
            <div className={styles.labelDiv}>
              <span className={styles.labelIcon}>c</span>
              <span className={styles.label}>
                <PrismicRichText field={slice.primary.option_one} />
              </span>
            </div>
            <div className={styles.labelDiv}>
              <span className={styles.labelIcon}>c</span>
              <span className={styles.label}>
                <PrismicRichText field={slice.primary.option_two} />
              </span>
            </div>
            <div className={styles.labelDiv}>
              <span className={styles.labelIcon}>c</span>
              <span className={styles.label}>
                <PrismicRichText field={slice.primary.option_three} />
              </span>
            </div>
            <div className={styles.labelDiv}>
              <span className={styles.labelIcon}>c</span>
              <span className={styles.label}>
                <PrismicRichText field={slice.primary.option_four} />
              </span>
            </div>
            <div className={styles.labelDiv}>
              <span className={styles.labelIcon}>c</span>
              <span className={styles.label}>
                <PrismicRichText field={slice.primary.option_five} />
              </span>
            </div>
            <div className={styles.labelDiv}>
              <span className={styles.labelIcon}>c</span>
              <span className={styles.label}>
                <PrismicRichText field={slice.primary.option_six} />
              </span>
            </div>
          </div>
        </div>

        <div className={`Second-box ${styles.second}`}>
          <div className="w-[263px] lg:w-[540px] h-[106px]">
            <span className={styles.secondPrimaryHeading}>
              <PrismicRichText field={slice.primary.second_box_heading} />
            </span>
            <span className={styles.secondSecondaryHeading}>
              <PrismicRichText field={slice.primary.second_box_sub_heading} />
            </span>
          </div>
          <div className={styles.tableBox}>
            <table>
              <tbody>
                <tr className="border-b">
                  <td className={`border-r ${styles.cell}`}>
                    <PrismicRichText field={slice.primary.validation} />
                  </td>
                  <td className={`border-r ${styles.cell}`}>
                    <PrismicRichText field={slice.primary.date} />
                  </td>
                  <td className={`border-r ${styles.cell}`}>
                    <span className="bg-green-100 border-r text-green-700 px-4 py-1 rounded-[8px] flex items-center gap-2">
                      <PrismicRichText field={slice.primary.done} />
                    </span>
                  </td>
                  <td className={`border-r ${styles.cell}`}>
                    <PrismicRichText field={slice.primary.number_zero} />
                  </td>
                </tr>
                <tr className="border-b ">
                  <td className={`${styles.cell} border-r`}>
                    <PrismicRichText field={slice.primary.validation} />
                  </td>
                  <td className={`${styles.cell} border-r`}>
                    <PrismicRichText field={slice.primary.date} />
                  </td>
                  <td className={`${styles.cell} border-r`}>
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-[8px] flex items-center gap-2">
                      <PrismicRichText field={slice.primary.done} />
                    </span>
                  </td>
                  <td className={`${styles.cell} border-r`}>
                    <PrismicRichText field={slice.primary.number_zero} />
                  </td>
                </tr>
                <tr className="border-b ">
                  <td className={`${styles.cell} border-r`}>
                    <PrismicRichText field={slice.primary.validation} />
                  </td>
                  <td className={`${styles.cell} border-r`}>
                    <PrismicRichText field={slice.primary.date} />
                  </td>
                  <td className={`${styles.cell} border-r`}>
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-[8px] flex items-center gap-2">
                      <PrismicRichText field={slice.primary.done} />
                    </span>
                  </td>
                  <td className={`${styles.cell} border-r`}>
                    <PrismicRichText field={slice.primary.number_zero} />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className={`${styles.cell} border-r`}>
                    <PrismicRichText field={slice.primary.validation} />
                  </td>
                  <td className={`${styles.cell} border-r`}>
                    <PrismicRichText field={slice.primary.date} />
                  </td>
                  <td className={`${styles.cell} border-r`}>
                    <span className="bg-[#FFEDD5] text-[#7C2D12] px-4 py-1 rounded-[8px] flex items-center gap-2">
                      <PrismicRichText field={slice.primary.warning} />
                    </span>
                  </td>
                  <td className={`${styles.cell} border-r`}>
                    <PrismicRichText field={slice.primary.number_four} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default FirstRowSliced;

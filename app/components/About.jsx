import { about, shape3 } from "@/public";
import Image from "next/image";
import styles from "../styles/style";

const About = () => {
  return (
    <div id="about" className="relative">
      <section className={`${styles.boxWidth} ${styles.paddingY} mx-auto`}>
        <h2 className={`text-center ${styles.heading2} font-bangla `}>
          রাশিদা আহম্মেদ কারিগরি ট্রেনিং ইনস্টিটিউট সম্পর্কে
        </h2>

        <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div
            className="flex flex-col flex-1 xl:px-0 sm:px-16 px-6"
            data-aos="fade-left"
          >
            <p className={`${styles.paragraph} mt-5 text-justify font-bangla`}>
              কোন দেশের সম্পদ হল দক্ষ জনশক্তি , তাই দক্ষ জনশক্তি গড়ার লক্ষ্য
              ২০১০ সালে রাশিদা আহম্মেদ কারিগরি ট্রেনিং ইনস্টিটিউট গঠন করা হয় ।
              এখানে বিভিন্ন বিষয়ে ব্যবহারিক প্রশিক্ষন দেওয়া হয় । রাশিদা আহম্মেদ
              কারিগরি ট্রেনিং ইনস্টিটিউট কারিগরি শিক্ষাবোর্ড কর্তৃক অনুমোদিত
              প্রতিষ্ঠান। প্রশিক্ষন শেষে কারিগরি শিক্ষাবোর্ডের অধীনে পরীক্ষার
              মাধ্যমে সরকারী সার্টিফিকেট প্রদান করা হয়।
            </p>

            <p className={`${styles.paragraph} mt-5 text-justify font-bangla`}>
              মোঃ সাকিরুল ইসলাম ২০০৭ সালে দক্ষ জনশক্তি করার লক্ষ্য রাশিদা
              আহম্মেদ কারিগরি ট্রেনিং ইনস্টিটিউট গঠন করেন . রাশিদা আহম্মেদ
              কারিগরি ট্রেনিং ইনস্টিটিউট কম্পিউটার অফিস এপ্লিকেশন , গ্রাফিক্স
              ডিজাইন ডিজিটাল মার্কেটিং , অটোক্যাড , ড্রাইভিং কাম অটো মেকানিকস,
              কেয়ার গিভিং চাইল্ড এন্ড ওল্ড, ড্রেস মেকিং এন্ড টেইলারিং, স্পোকেন
              ইংলিশ,কোরিয়ান ভাষা, ইলেকট্রিক্যাল হাউজ ওয়্যারিং কোর্স ইত্যাদি
              বিষয়ে প্রশিক্ষণ প্রদান করে থাকে ।
            </p>
          </div>
          <div
            className={`flex flex-1 items-center xl:justify-end vxs:justify-center `}
            data-aos="fade-right"
          >
            <Image
              src={about}
              alt="paymentapp "
              className="w-[80%] rounded-md shadow-md"
              priority
            />
          </div>
        </div>
      </section>
      <Image src={shape3} alt="about" className="absolute z-[-50] bottom-0 left-0" />
    </div>
  );
};

export default About;

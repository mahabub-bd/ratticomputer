import React from 'react'

const Marquee = () => {
  return (
    <div className="bg-[#FFB802] text-black py-2 font-bangla font-light">
      <marquee behavior="scroll" direction="left">
        <strong>
          “রাশিদা আহম্মেদ কারিগরি ট্রেনিং ইনস্টিটিউট বাংলাদেশ কারিগরি শিক্ষাবোর্ড
          কর্তৃক অনুমোদিত প্রতিষ্ঠান। কোড: 50971 **** রাশিদা আহম্মেদ কারিগরি
          ট্রেনিং ইনস্টিটিউট কারিগরি শিক্ষার উন্নয়নে এক অনন্য উদাহরণ
        </strong>
      </marquee>
    </div>
  );
}

export default Marquee
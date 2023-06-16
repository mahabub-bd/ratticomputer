import React from "react";
import styles from "../styles/style";
import Image from "next/image";


import { categories } from "../constants";
import { shape,shape2 } from "@/public";

const Categories = () => {
  return (
    <div id="categories" className="relative">
      <div id="categories" className={`${styles.boxWidth} my-5 `}>
        <h2 className={`${styles.heading2} text-center my-4 font-bangla`}>
          আমাদের সার্ভিস সমূহ
        </h2>

        <div
          className="flex flex-wrap my-10 justify-around"
          data-aos="fade-left"
        >
          {categories.map((item) => (
            <div
              key={item.alt}
              className="vxs:min-w-[170px] lg:min-w-[230px] cursor-pointer  shadow-xl m-2 rounded-lg hover:translate-y-1"
            >
              <div className="flex flex-col  items-center justify-around flex-wrap p-2 ">
                <Image className="w-[80px]" src={item.img} alt={item.alt} />
                <h3 className="text-slate-700 mt-3 font-bangla font-semibold xl:text-[18px]  vxs:text-[15px]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={shape}
        className=" absolute top-0 left-0 shape-image z-[-50] opacity-60 "
        alt="shape"
        priority
      />
      <Image
        src={shape2}
        className=" absolute top-0 right-0 shape-image z-[-50] opacity-60"
        alt="shape"
        priority
      />
    </div>
  );
};

export default Categories;

import React from "react";
import styles from "../styles/style";
import Image from "next/image";


import { instractor} from "../constants";

const Instractor = () => {
  return (
    <div className={`${styles.boxWidth} my-5 lg:${styles.paddingX} xl:px-0`}>
      <h2 className={`${styles.heading2} text-center my-4 font-bangla`}>
        কোর্স ইন্সট্রাক্টর
      </h2>

      <div
        className="flex flex-wrap my-10 justify-evenly"
        data-aos="fade-up"
      >
        {instractor.map((item) => (
          <div
            key={item.des}
            className="vxs:w-[160px] xl:w-[250px] lg:w-[240px] m-2 rounded-lg flex flex-col justify-center items-center   hover:cursor-pointer"
          >
            <div
              href={item.des}
              className="flex flex-col  justify-around flex-wrap p-3 "
            >
              <Image
                className="vxs:w-[160px] vxs:h-[170px] xl:w-[170px] lg:w-[160px]  shadow-2xl rounded-md"
                src={item.img}
                alt={item.des}
              />
              <h3 className="text-mahitwo text-center font-bangla  mt-5 font-bold xl:text-[18px] md:marker:">
                {item.name}
              </h3>
              <h4 className="text-mahithree text-center mt-2 font-bangla xl:text-[16px]">
                {item.des}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instractor;

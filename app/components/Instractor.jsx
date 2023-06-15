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
            className="vxs:w-[180px] xl:w-[250px] lg:w-[250px] m-2 rounded-lg flex flex-col justify-center items-center   hover:cursor-pointer"
          >
            <div
              href={item.des}
              className="flex flex-col  justify-around flex-wrap p-3 "
            >
              <Image
                className="vxs:w-[180px] vxs:h-[200px] xl:w-[230px] lg:w-[250px] h-[250px]  shadow-2xl rounded-md"
                src={item.img}
                alt={item.des}
              />
              <h3 className="text-mahitwo text-center font-bangla  mt-5 font-bold text-[18px]">
                {item.name}
              </h3>
              <h4 className="text-mahithree text-center mt-2 font-bangla text-[16px]">
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

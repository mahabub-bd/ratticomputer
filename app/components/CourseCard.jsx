import { lessonimg, rating, signal, day } from "@/public";
import Image from "next/image";

import React from "react";

const CourseCard = ({
  courseImg,
  courseImgalt,
  link,
  tag,
  tagbg,
  title,
  lesson,
  duration,
  instractorName,
  instractorphoto,
  price,
}) => {
  return (
    <div className={`shadow-2xl rounded-md  hover:scale-95 cursor-pointer `}>
      <div>
        <Image
          src={courseImg}
          className="xl:w-[380px] vxs:w-[350px] h-[250px]  md:p-2 lg:p-0 "
          alt={courseImgalt}
          priority
        />
      </div>
      <div className="flex justify-between items-center p-2 mt-2 ">
        <p className="text-[14px]">
          <Image
            src={rating}
            className="w-[14px] inline mr-2"
            alt="rating_image"
          />
          4.9/31
        </p>
        <p
          className={`${tagbg} text-white  font-light rounded-md px-2 py-1  text-[14px]`}
        >
          {tag}
        </p>
      </div>
      <div>
        <p className="text-center font-semibold text-[20px] text-blue-700">
          {title}
        </p>
      </div>
      <div className="flex justify-between items-center my-2  border-b-[1px] px-2 py-2 ">
        <div className="flex items-center justify-between">
          <Image src={lessonimg} className="w-[16px] h-[16px]" alt="lesson" />
          <p className="text-[14px] ml-2">{lesson} Lessons</p>
        </div>
        <div className="flex items-center justify-between">
          <Image src={day} className="w-[16px] h-[16px]" alt="day" />
          <p className="text-[14px] ml-2">{duration} Month</p>
        </div>
        <div className="flex items-center justify-between">
          <Image src={signal} className="w-[16px] h-[16px]" alt="signal" />
          <p className="text-[14px] ml-2">Begineer</p>
        </div>
      </div>
      <div className="flex justify-between items-center p-2">
        <div className="flex justify-between items-center  ">
          <Image
            src={instractorphoto}
            className="w-[50px] h-[50px] rounded-full"
            alt="instractor_photo"
          />
          <p className="text-[18px]  font-bangla font-normal ml-3">
            {instractorName}
          </p>
        </div>

        <p className="text-[22px] font-semibold text-qpayone">BDT {price}</p>
      </div>
    </div>
  );
};

export default CourseCard;

import Image from "next/image";
import { gallery } from "../constants";
import styles from "../styles/style";

export default function Gallery() {
  return (
    <div className={`{${styles.boxWidth} my-4 `}  id="gallery">
      <h2 className={`${styles.heading2} text-center my-4 font-bangla`}>
        ইমেজ গ্যালারী
      </h2>
      <div className="flex flex-wrap gap-8 justify-around sm:p-3 xl:p-0">
        {gallery.map((item) => (
          <div key={item.alt} className=" ">
            <Image
              className="rounded-sm shadow-lg  object-contain"
              src={item.img}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

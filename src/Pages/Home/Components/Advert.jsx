import React from "react";
import clsx from "clsx";
export const Advert = ({ title, subtitle, img, variant }) => {
  return (
    <>
      <div className="advert_card w-[673px] h-[357px] rounded-xl relative">
        <img
          src={img}
          className="rounded-xl w-[673px] h-[357px] object-cover object-center absolute"
        />
        <p
          className={clsx(
            "font-yellowtail text-[36px] absolute top-[100px] left-[40px]",
            { "text-white": variant === "primary" },
            { "text-primary": variant === "green" }
          )}
        >
          {subtitle}
        </p>
        <h1
          className={clsx(
            "font-roboto-bold text-[40px] w-[258px]  absolute  left-[40px] top-[150px]",
            { "text-white": variant === "primary" },
            { "text-primary": variant === "green" }
          )}
        >
          {title}
        </h1>
      </div>
    </>
  );
};

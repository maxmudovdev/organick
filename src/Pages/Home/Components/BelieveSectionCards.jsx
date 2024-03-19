import React from "react";
import Sms from "../../../assets/icons/sms";

export const BelieveSectionCards = ({ title, subtitle }) => {
  return (
    <>
      <div className="w-[564px] h-[101px] flex gap-5">
        <Sms />
        <div className="content flex flex-col gap-2">
          <h3 className="title font-roboto-bold text-[25px] text-primary">
            {title}
          </h3>
          <p className="subtitle font-roboto-regular text-base text-for-text">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

import React from "react";

const Report = ({ title, subtitle }) => {
  return (
    <>
      <div className="w-[211px] h-[211px] rounded-full bg-secondary flex items-center justify-center">
        <div className="w-[201px] h-[201px] rounded-full bg-report-bg px-10 pt-[60px] ">
          <h2 className="text-center font-roboto-bold text-[50px] text-primary leading-[59px]">
            {title}
          </h2>
          <p className="font-roboto-medium text-center text-[18px] text-primary">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default Report;

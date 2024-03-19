import React from "react";

const About_card = ({ img, title, subtitle }) => {
  return (
    <>
      <div className="single-card bg-white rounded-xl w-[257px] h-[335px] pt-[50px] px-[38px] pb-[19px]">
        <div className="w-[100%] flex items-center justify-center">
          <div className="p-4 bg-report-bg rounded-xl">
            <img src={img} alt="" />
          </div>
        </div>
        <h2 className="text-primary font-roboto-bold text-[25px] text-center py-4">
          {title}
        </h2>
        <p className="text-center text-for-text">{subtitle}</p>
      </div>
    </>
  );
};

export default About_card;

import React from "react";
import Usericon from "../../../assets/icons/usericon";
import About from "../../About/About";
import Right from "../../../assets/icons/right";
import { ReButton } from "../../../Components/ReButton/ReButton";
import { NavLink } from "react-router-dom";

const Discover = ({ img, title, subtitle }) => {
  return (
    <div className="card w-[750px] h-[530] rounded-[32px] relative">
      <img src={img} className="rounded-[32px]" />
      <div className="w-[82px] h-[82px] font-roboto-bold text-[20px] text-primary flex flex-col items-center absolute top-10 left-8 bg-white justify-center rounded-full ">
        <p>28</p>
        <p>Nov</p>
      </div>
      <div className="inner-card pt-[46px] px-[57px] pb-[60px] bg-white w-[613px] h-[330px] absolute left-[35px] shadow-xl top-[250px] rounded-[30px]">
        <div className="flex items-center gap-2 font-roboto-regular text-primary text-xl">
          <Usericon />
          <p>By Rachi Card</p>
        </div>
        <h2 className="card-title mt-4 text-primary font-roboto-bold text-[25px]">
          {title}
        </h2>
        <p className="w-[444px] text-for-text leading-[165%] font-roboto-regular text-xl mb-4">
          {subtitle}
        </p>
        <NavLink to="/about" path={<About />}>
          <ReButton variant="yellow">
            Read More
            <div className="bg-primary p-2 rounded-full">
              <Right />
            </div>
          </ReButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Discover;

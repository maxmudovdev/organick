import React from "react";
import Insta from "../../../assets/icons/insta";
import Facebook from "../../../assets/icons/facebook";
import Twitter from "../../../assets/icons/twitter";

const About_us = ({ img, job, title }) => {
  return (
    <>
      <div
        className="card w-[449px] h-[615px] rounded-t-3xl rounded-tl-3xl"
        id="about_card"
      >
        <img
          src={img}
          alt=""
          className="w-[449px] h-[486px] object-cover object-center rounded-t-3xl rounded-tl-3xl"
        />
        <div
          id="about_card_content"
          className="content flex items-end justify-between px-[35px] py-[27px] rounded-b-3xl rounded-bl-3xl bg-cards-bg"
        >
          <div>
            <h4 className="font-roboto-bold text-primary text-[25px]">
              {title}
            </h4>
            <p className="font-yellowtail text-secondary text-[22px]">{job}</p>
          </div>
          <div className="icons flex items-center gap-2">
            <Insta />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default About_us;

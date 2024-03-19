import React from "react";
import Stars from "../../assets/icons/stars";
import { ReButton } from "../../Components/ReButton/ReButton";
const Card = ({ img, title, sale, price }) => {
  return (
    <>
      <div className="card flex items-center gap-[60px]">
        <div className="left">
          <img
            src={img}
            className="bg-section-bg rounded-3xl w-[600px] h-[600px] object-cover object-center"
          />
        </div>
        <div className="right">
          <div className="content">
            <h1 className="text-primary font-roboto-medium text-[32px]">
              {title}
            </h1>
            <Stars />
            <div className="py-[20px] flex items- gap-3">
              <strike className="text-gray font-roboto-medium text-xl">
                {sale}
              </strike>
              <p className="text-primary font-roboto-bold text-2xl">{price}</p>
            </div>
            <p className="w-[500px] pb-4">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <ReButton variant="primary">Add to Cart</ReButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import React from "react";
import Stars from "../../../assets/icons/stars";
const ProductCard = ({ type, image, name, price, sale, onClick }) => {
  return (
    <>
      <div
        className="card rounded-[30px] bg-cards-bg w-[320px] pt-[30px] pr-[20px] pb-[17px] pl-[30px] cursor-pointer"
        id="special_cards"
      >
        <p className="bg-primary py-2 px-4 inline text-white font-roboto-medium text-base rounded-md">
          {type}
        </p>
        <img
          id="special_images"
          className="w-[300px] h-[300px]  object-cover object-center"
          src={image}
        />
        <p className="font-roboto-medium text-[20px] text-primary border-b border-[1px solid] pb-[13px] border-b-border">
          {name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <strike className="font-roboto-medium text-[15px] text-gray ">
              {sale}
            </strike>
            <p className="text-primary font-roboto-bold text-[20px]">{price}</p>
          </div>
          <Stars />
        </div>
      </div>
    </>
  );
};
export default ProductCard;

import React from "react";

const Product_Section_Card = ({ img, id, text }) => {
  return (
    <>
      <div key={id} className="w-[450px] h-[450px] relative rounded-xl">
        <img className="w-[450px] h-[450px] rounded-xl" src={img} alt="" />
        <button className="px-[53px] py-[20px] mt-[-100px] bg-white rounded-2xl text-for-text font-roboto-medium text-[26px] absolute right-[20%] top-[60%]">
          {text}
        </button>
      </div>
    </>
  );
};

export default Product_Section_Card;

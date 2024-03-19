import React from "react";

import { ReButton } from "../ReButton/ReButton";
const Form = () => {
  return (
    <div className="bg-[url('.../../assets/images/form.png')] bg-cover bg-center rounded-3xl py-[100px] px-[70px] flex items-center justify-between">
      <h2 className="text-[50px] font-roboto-bold w-[357px] leading-[59px] text-white">
        Subscribe to our Newsletter
      </h2>
      <form action="#" className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Your Email Address"
          className="bg-white outline-none border-none py-[28px] px-[23px] rounded-2xl w-[300px]"
        />
        <ReButton variant="primary">Subscribe</ReButton>
      </form>
    </div>
  );
};

export default Form;

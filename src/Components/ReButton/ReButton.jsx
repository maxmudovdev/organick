import React from "react";
import clsx from "clsx";


export const ReButton = ({ children, onClick, variant }) => {
  return (
    <button
      onClick={onClick ? onClick : null}
      className={clsx(
        "flex items-center justify-center gap-[10px] px-[39px] py-[28px] rounded-[16px]",
        {
          "bg-yellow text-primary font-roboto-bold hover:bg-gray hover:text-primary":
            variant === "yellow",
        },
        {
          "bg-primary text-white font-roboto-bold hover:bg-gray hover:text-primary":
            variant === "primary",
        }
      )}
    >
      {children}
    </button>
  );
};

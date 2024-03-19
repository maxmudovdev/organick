import React from "react";
import Insta from "../../assets/icons/insta";
import Facebook from "../../assets/icons/facebook";
import Twitter from "../../assets/icons/twitter";
import Pinterest from "../../assets/icons/pinterest";
import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_container flex items-center justify-center">
          <div className="footer_1 w-[285px]  flex flex-col items-end pr-12">
            <h2 className="font-roboto-bold text-[30px] mb-8">Contact us</h2>
            <div className="mb-6">
              <p className="flex flex-col items-end font-roboto-bold">Email</p>
              <span className="font-roboto-regular">
                elshodjorayev701@gmail.com
              </span>
            </div>
            <div className="mb-6">
              <p className="flex flex-col items-end font-roboto-bold">Phone</p>
              <span className="font-roboto-regular">+998 90 069 22 00</span>
            </div>
            <div>
              <p className="flex flex-col items-end font-roboto-bold">
                Address
              </p>
              <span className="font-roboto-regular">Tashkent, Sergeli-7</span>
            </div>
          </div>
          <div className="footer_2 w-[626px] h-[300px]  flex items-start justify-center border-l border-r border-[4px solid] border-[#D5D5D5]">
            <div className="footer_2-wrapper w-[543px] h-[246px] ">
              <div className="w-[100%] flex items-center justify-center mb-5">
                <Logo />
              </div>
              <p className="font-roboto-regular text-base text-center text-[#525C60] mb-[30px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing{" "}
              </p>
              <div className="logos flex items-center justify-center gap-4">
                <div
                  id="instagram"
                  className="bg-[#EFF6F1] p-5 rounded-full cursor-pointer "
                >
                  <Insta />
                </div>
                <div id="facebook" className="bg-[#EFF6F1] p-5 rounded-full">
                  <Facebook />
                </div>
                <div id="twitter" className="bg-[#EFF6F1] p-5 rounded-full">
                  <Twitter />
                </div>
                <div id="pinterest" className="bg-[#EFF6F1] p-5 rounded-full">
                  <Pinterest />
                </div>
              </div>
            </div>
          </div>
          <div className="footer_3 w-[285px]  flex flex-col justify-between pl-12">
            <h2 className="font-roboto-bold text-[30px]">Utility Pages</h2>
            <ul className="leading-[45px] cursor-pointer">
              <p>Style Guide</p>
              <p>Page Not Found</p>
              <p>Password Protected</p>
              <p>Licences</p>
              <p>Changelog</p>
            </ul>
          </div>
        </div>
      </div>
      <p className="border-t border-[1px solid] border-[#D5D5D5] mx-auto block text-center mt-[100px] py-[30px]">
        Copyright © Organick | Designed by VictorFlow Templates - Powered by
        Webflow
      </p>
    </footer>
  );
};

export default Footer;

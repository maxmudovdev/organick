import React from "react";
import { NavLink } from "react-router-dom";
// components
import { ReButton } from "../../Components/ReButton/ReButton";
// pages
import Shop from "../Shop/Shop";
import ShopSingle from "../ShopSingle/ShopSingle";
import About_card from "./Components/About_card";
import ProductCard from "../Home/Components/ProductCards";

// images
import img2 from "../../assets/images/fresh.jpeg";
import img from "../../assets/images/creative.png";
// icons
import Sms from "../../assets/icons/sms";
import Right from "../../assets/icons/right";
import Fresh from "../../assets/icons/fresh.svg";
import Policy from "../../assets/icons/policy.svg";
import Secured from "../../assets/icons/secured.svg";
import Support from "../../assets/icons/support.svg";
import About_us from "./Components/About_us";
import { about_us } from "../../data/about-data";
import { products } from "../../data/products";
import Form from "../../Components/ReInput/Form";
const About = () => {
  return (
    <>
      <section className="bg-[url('.../../assets/images/about-bg.png')] bg-cover bg-center h-[450px] ">
        <div className="container flex h-[450px] items-center justify-center">
          <h1 className="text-primary font-roboto-bold text-[50px]">
            About Us
          </h1>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="container">
          <div className="wrapper flex items-end justify-around">
            <div className="left">
              <img className="w-[1021px]" src={img} alt="" />
            </div>
            <div className="right content pt-[100px] w-[580px]">
              <p className="font-yellowtail  text-[36px]  text-secondary">
                About Us
              </p>
              <h2 className="text-[50px] leading-[59px] font-roboto-bold text-primary">
                We do Creative Things for Success
              </h2>
              <p className="font-roboto-regular text-[18px] text-for-text">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley. <br />
                <br />
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="py-[50px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sms />
                  <h3 className="title font-roboto-medium  text-[20px] text-primary">
                    Modern Agriculture Equipment
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <Sms />
                  <h3 className="title font-roboto-medium  text-[20px] text-primary">
                    No growth hormones are used
                  </h3>
                </div>
              </div>
              <NavLink to="/shop" path={<Shop />}>
                <ReButton variant="primary">
                  Shop Now
                  <div className="bg-[#335B6B] p-2 rounded-full">
                    <Right />
                  </div>
                </ReButton>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-bg pb-[150px]">
        <div className="container">
          <div className="wrapper flex items-center justify-around py-[50px] ">
            <div className="left content pt-[100px] w-[580px]">
              <p className="font-yellowtail  text-[36px]  text-secondary">
                About Us
              </p>
              <h2 className="text-[50px] leading-[59px] font-roboto-bold text-primary">
                We do not buy from the open market & traders.
              </h2>
              <p className="font-roboto-regular text-[18px] text-for-text py-7">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </p>
              <div className="flex pb-[28px] items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sms />
                  <h3 className="title font-roboto-medium  text-[20px] text-primary">
                    Modern Agriculture Equipment
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <Sms />
                  <h3 className="title font-roboto-medium  text-[20px] text-primary">
                    No growth hormones are used
                  </h3>
                </div>
              </div>
              <NavLink to="/shop" path={<Shop />}>
                <ReButton variant="primary">
                  Shop Now
                  <div className="bg-[#335B6B] p-2 rounded-full">
                    <Right />
                  </div>
                </ReButton>
              </NavLink>
            </div>
            <div className="right">
              <img
                className="w-[600px] rounded-xl h-[600px] object-cover object-center"
                src={img2}
                alt=""
              />
            </div>
          </div>

          <div className="cards-wrapper flex items-center justify-between mx-auto flex-wrap pt-[50px] w-[1100px]">
            <About_card
              img={Policy}
              title="Return Policy"
              subtitle="Simply dummy text of the printintypesetting industry."
            />
            <About_card
              img={Fresh}
              title="Return Policy"
              subtitle="Simply dummy text of the printintypesetting industry."
            />
            <About_card
              img={Secured}
              title="Return Policy"
              subtitle="Simply dummy text of the printintypesetting industry."
            />
            <About_card
              img={Support}
              title="Return Policy"
              subtitle="Simply dummy text of the printintypesetting industry."
            />
          </div>
        </div>
      </section>

      <section className="about_us pb-[150px]">
        <div className="container">
          <div className="content pt-[150px]">
            <p className="font-yellowtail text-center text-secondary text-[36px]">
              Team
            </p>
            <h2 className="font-roboto-bold text-[50px] text-center text-primary">
              Our Organic Experts
            </h2>
            <p className="w-[850px] text-center text-for-text mx-auto pb-10">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="wrapper flex items-center justify-between">
            {about_us.map((e) => (
              <About_us key={e.id} img={e.img} title={e.name} job={e.job} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary h-[892px] py-[188px]">
        <div className="container">
          <div className="title">
            <p className="text-center text-secondary font-yellowtail text-[36px]">
              About Us
            </p>
            <h2 className="text-center text-white  text-[50px] font-roboto-bold mb-3">
              What We Offer for You
            </h2>
          </div>
          <div className="wrapper flex items-center justify-between">
            {products.slice(0, 4).map((e) => (
              <NavLink to="/shop-single" path={<ShopSingle />}>
                <ProductCard
                  key={e.id}
                  type={e.product_Cat}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  sale={e.sale_Price}
                  stars={e.rating}
                />
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[100px]">
        <div className="container">
          <Form />
        </div>
      </section>
    </>
  );
};

export default About;

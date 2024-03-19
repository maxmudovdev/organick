import React from "react";
import { NavLink, Link } from "react-router-dom";
// pages
import About from "../About/About";
import Shop from "../Shop/Shop";
import News from "../News/News";
import ShopSingle from "../ShopSingle/ShopSingle";
// images and icons
import Right from "../../assets/icons/right";
import img from "../../assets/images/believe.png";
import customer_user from "../../assets/images/customer-user.png";
import Stars from "../../assets/icons/stars";
import econis from "../../assets/images/econis.png";
import discover2 from "../../assets/images/discover2.png";
import discover1 from "../../assets/images/discover1.png";
import advert1 from "../../assets/images/advert1.png";
import advert2 from "../../assets/images/advert2.png";

// сomponents
import ProductCard from "./Components/ProductCards";
import Report from "./Components/Report";
import Product_Section_Card from "./Components/product-section-cards";
import Discover from "./Components/Discover";
import Form from "../../Components/ReInput/Form";
import { ReButton } from "../../Components/ReButton/ReButton";
import { BelieveSectionCards } from "./Components/BelieveSectionCards";
import { Advert } from "./Components/Advert";
// data
import { products } from "../../data/products";
import { BelieveSectionCardsData } from "../../data/BelieveSectionCards-data";
import { product_Section_Cards } from "../../data/products-card";
const Home = () => {
  return (
    <>
      <section className="bg-[url('.../../assets/images/hero.png')]  bg-cover bg-center h-[898px]">
        <div className="container">
          <div className="content w-[530px] pt-[247px]">
            <p className="text-secondary font-yellowtail text-[36px]">
              100% Natural Food
            </p>
            <h1 className="text-[70px] font-roboto-bold text-primary leading-[82px] mb-[23px]">
              Choose the best healthier way of life
            </h1>
            <NavLink to="/about" path={<About />}>
              <ReButton variant="yellow">
                <p className="text-primary text-[20px] font-roboto-bold">
                  Explore Now
                </p>
                <div className="bg-primary p-2 rounded-full">
                  <Right />
                </div>
              </ReButton>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="py-[145px]">
        <div className="container">
          <div className="advert_wrapper flex items-center justify-between">
            <Advert
              subtitle={"Naturall!!!"}
              title={"Get Garden Fresh Fruits"}
              img={advert1}
              variant="primary"
            />
            <Advert
              subtitle={"Offer!!"}
              title={"Get 10% offon Vegetables"}
              img={advert2}
              variant="green"
            />
          </div>
        </div>
      </section>

      <section className="bg-section-bg pb-[100px] ">
        <div className="container">
          <div className="wrapper flex ">
            <div className="left">
              <img className="w-[911px]" src={img} alt="" />
            </div>
            <div className="right content pt-[100px] w-[680px]">
              <p className="font-yellowtail  text-[36px]  text-secondary">
                About Us
              </p>
              <h2 className="text-[50px] font-roboto-bold text-primary">
                We Believe in Working Accredited Farmers
              </h2>
              <p className="font-roboto-regular text-[18px] text-for-text">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>

              <div className="right-cards my-[40px] flex flex-col items-start gap-8">
                {BelieveSectionCardsData.map((e) => (
                  <BelieveSectionCards
                    key={e.id}
                    title={e.title}
                    subtitle={e.subtitle}
                  />
                ))}
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

      <section className="product_section pt-[100px]">
        <div className="container">
          <p className="font-yellowtail text-center text-secondary">
            Categories
          </p>
          <h2 className="font-roboto-bold text-[50px] mt-2 mb-10 text-center text-primary">
            Our Products
          </h2>

          <div className="card-render-wrapper flex flex-wrap justify-between gap-[30px] mb-[122px]">
            {products.slice(0, 8).map((e) => (
              <Link to={`shop-single/${e.id}`} path={<ShopSingle />}>
                <ProductCard
                  onClick={() => console.log(e.id)}
                  key={e.id}
                  type={e.product_Cat}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  sale={e.sale_Price}
                  stars={e.rating}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center mb-[200px]">
            <NavLink to="/shop" path={<Shop />}>
              <ReButton variant="primary">
                Load More
                <div className="bg-[#335B6B] p-2 rounded-full">
                  <Right />
                </div>
              </ReButton>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="bg-[url('.../../assets/images/customer-bg.png')] bg-cover bg-center h-[1100px] ">
        <div className="container">
          <div className="wrapper pt-[100px]">
            <p className="text-secondary text-center font-yellowtail text-[36px]">
              Testimonial
            </p>
            <h2 className="font-roboto-bold text-primary text-[50px] text-center mt-[8px] mb-[50px]">
              What Our Customer Saying?
            </h2>

            <div className="user-wrapper w-[780px] mx-auto">
              <div className="images flex flex-col items-center">
                <img src={customer_user} />
                <Stars />
              </div>
              <p className="text-center font-roboto-regular text-xl text-for-text mb-5">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>

              <p className="text-center font-roboto-medium text-[26px] text-primary">
                Sara Taylor
              </p>
              <p className="text-for-text text-center text-[15px] font-roboto-regular">
                Consumer
              </p>
            </div>

            <div className="report-wrapper mx-auto w-[1000px] mt-[100px] flex items-center justify-between ">
              <Report title="100%" subtitle="Organic" />
              <Report title="100%" subtitle="Organic" />
              <Report title="100%" subtitle="Organic" />
              <Report title="100%" subtitle="Organic" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary h-[1000px] py-[150px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-yellowtail text-secondary text-[36px]">
                Offer
              </p>
              <h2 className="font-roboto-bold text-white text-[50px]">
                We Offer Organic For You
              </h2>
            </div>
            <NavLink to="/shop" path={<Shop />}>
              <ReButton variant="yellow">
                <p className="text-[20px] font-roboto-bold">View All Product</p>
                <div className="bg-primary p-2 rounded-full">
                  <Right />
                </div>
              </ReButton>
            </NavLink>
          </div>
          <div className="card-render  mt-[50px] flex flex-wrap justify-between gap-[30px] ">
            {products.slice(0, 4).map((e) => (
              <NavLink to={`shop-single/${e.id}`} path={<ShopSingle />}>
                <ProductCard
                  onClick={() => console.log(e.id)}
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

      <section className="h-[931px] flex">
        <img
          src={econis}
          className="w-[3000px] h-[931px] object-cover object-center"
          alt=""
        />
        <div className="container">
          <div className="text-wrapper w-[749px] h-[723px] bg-white shadow-xl my-[100px] ml-[-100px] rounded-3xl p-[80px]">
            <p className="text-secondary font-yellowtail text-[36px]">
              Eco Friendly
            </p>
            <h2 className="text-primary font-roboto-bold text-[50px] leading-[59px] mb-[35px]">
              Econis is a Friendly Organic Store
            </h2>
            <div className="mb-[35px]">
              <h3 className="text-[25px] font-roboto-medium text-primary ">
                Start with Our Company First
              </h3>
              <p className="text-for-text font-roboto-regular text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="mb-[35px]">
              <h3 className="text-[25px] font-roboto-medium text-primary ">
                Farming Strategies of Today
              </h3>
              <p className="text-for-text font-roboto-regular text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="mb-[35px]">
              <h3 className="text-[25px] font-roboto-medium text-primary ">
                Learn How to Grow Yourself
              </h3>
              <p className="text-for-text font-roboto-regular text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-product-bg h-[757px] py-[150px]">
        <div className="container">
          <div className="wrapper flex flex-wrap gap-[20px]">
            {product_Section_Cards.map((e) => (
              <Product_Section_Card key={e.id} text={e.text} img={e.img} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[177px]">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-yellowtail text-secondary text-[36px]">
                Offer
              </p>
              <h2 className="font-roboto-bold text-[50px] w-[702px] text-primary leading-[59px]">
                Discover weekly content about organic food, & more
              </h2>
            </div>
            <NavLink to="/news" path={<News />}>
              <ReButton variant="yellow">
                <p className="text-[20px] font-roboto-bold">More News</p>
                <div className="bg-primary p-2 rounded-full">
                  <Right />
                </div>
              </ReButton>
            </NavLink>
          </div>

          <div className="cards flex justify-between mt-12 gap-9">
            <Discover
              img={discover1}
              title="The Benefits of Vitamin D & How to Get It"
              subtitle="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            />
            <Discover
              img={discover2}
              title="The Benefits of Vitamin D & How to Get It"
              subtitle="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            />
          </div>
        </div>
      </section>

      <section className="my-[100px]">
        <div className="container">
          <Form />
        </div>
      </section>
    </>
  );
};

export default Home;

import React from "react";
import Form from "../../Components/ReInput/Form";
import Card from "./card";
import ProductCard from "../Home/Components/ProductCards";
import { NavLink } from "react-router-dom";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import { ReButton } from "../../Components/ReButton/ReButton";
import Shop from "../Shop/Shop";
const ShopSingle = () => {
  const { id } = useParams();
  const ID = parseInt(id);
  const product = products.find((item) => item.id === ID);

  return (
    <>
      <section className="bg-[url('.../../assets/images/abc.png')] bg-cover bg-center h-[450px]">
        <div className="container flex h-[450px] items-center justify-center">
          <h1 className="text-primary font-roboto-bold text-[50px]">
            Shop Single
          </h1>
        </div>
      </section>

      <section className="py-[40px]">
        <div className="container">
          <Card
            img={product.image}
            title={product.name}
            sale={product.sale_Price}
            price={product.price}
          />
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="flex items-center justify-center gap-5">
            <ReButton variant="primary">Product Description</ReButton>
            <ReButton variant="yellow">Additional Info</ReButton>
          </div>
          <p className="text-center text-for-text text-[20px] w-[1000px] py-5 mx-auto">
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="text-primary text-[36px] text-center font-roboto-bold">
            Related Products
          </h1>
          <div className="card-render  mt-[50px] flex flex-wrap justify-between gap-[30px] ">
            {products.slice(0, 4).map((e) => (
              <NavLink to="/" path={<Shop />}>
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

      <section className="py-[150px]">
        <div className="container">
          <Form />
        </div>
      </section>
    </>
  );
};

export default ShopSingle;

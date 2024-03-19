import React from "react";
import { NavLink } from "react-router-dom";
import ShopSingle from "../ShopSingle/ShopSingle";
import ProductCard from "../Home/Components/ProductCards";
import { products } from "../../data/products";
import Form from "../../Components/ReInput/Form";

const Shop = () => {
  return (
    <>
      <section className="bg-[url('.../../assets/images/shop-bg.png')] bg-cover bg-center h-[450px] ">
        <div className="container flex h-[450px] items-center justify-center">
          <h1 className="text-primary font-roboto-bold text-[50px]">Shop</h1>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card-render-wrapper flex items-center justify-between flex-wrap gap-[30px] py-[100px]">
            {products.map((e) => (
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

      <section className="pb-[100px]">
        <div className="container">
          <Form />
        </div>
      </section>
    </>
  );
};

export default Shop;

import React from "react";
import { Link } from "react-router-dom";
import { ReButton } from "../../Components/ReButton/ReButton";
const PageNotFound = () => {
  return (
    <section className="bg-[url('.../../assets/images/not_found.png')] bg-cover bg-center h-[700px]">
      <div className="container flex items-center justify-end">
        <div className="right w-[533px] mt-[100px]">
          <h1 className="font-roboto-bold text-[150px] text-secondary">404</h1>
          <p className="font-roboto-bold text-[50px] text-primary">
            Page not found
          </p>
          <p className="text-primary text-2xl font-roboto-medium mb-10">
            The page you are looking for doesn't exist or has been moved
          </p>
          <Link to="/">
            <ReButton variant="primary">Back to home page</ReButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;

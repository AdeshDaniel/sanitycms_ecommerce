import React from "react";

import { Product, FooterBanner, Herobanner } from "@/components";

const Home = () => {
  return (
    <>
      {/* herobanner component */}
      <Herobanner />
      <div className='products-heading'>
        <h2>Best Selling product</h2>
        <p>Speakers of many variations</p>
      </div>
      {/* product compoennt */}
      <div className='products-container'>
        {["product 1", "product 2", "product 3"].map((product) => product)}
      </div>
      {/* Footer component */}
      Footer
    </>
  );
};

export default Home;

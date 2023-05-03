import React from "react";

const Home = () => {
  return (
    <>
      {/* herobanner component */}
      HeroBanner
      <div>
        <h2>Best Selling product</h2>
        <p>Speakers of many variations</p>
      </div>
      {/* product compoennt */}
      <div>
        {["product 1", "product 2", "product 3"].map((product) => product)}
      </div>
      {/* Footer component */}
      Footer
    </>
  );
};

export default Home;

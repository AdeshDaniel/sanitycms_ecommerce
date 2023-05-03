import React from "react";

import { client } from "@/lib/client";
import { Product, FooterBanner, Herobanner } from "@/components";

const Home = ({ products, bannerData }) => {
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
        {products?.map((product) => product.name)}
      </div>
      {/* Footer component */}
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;

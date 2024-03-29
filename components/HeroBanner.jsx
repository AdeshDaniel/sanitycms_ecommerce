import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

const Herobanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <h3>{heroBanner.largeText2}</h3>
        <img
          src={urlFor(heroBanner.image)}
          alt='headphons'
          className='hero-banner-image'
        />

        <div>
          <Link href={`/product/ID${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>

          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;

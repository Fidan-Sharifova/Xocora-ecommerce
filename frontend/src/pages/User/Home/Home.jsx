import React from "react";
import Slider from "../../../components/Slider/Slider";
import Explore from "../../../components/Explore/Explore";
import ProductCount from "../../../components/Product-count/ProductCount";
import LimitedEdition from "../../../components/LimitedEdition/LimitedEdition";
import BestSelling from "../../../components/BestSelling/BestSelling";
import PerfectGiftsCard from "../../../components/PerfectGifts/PerfectGiftsCard";
import Personalized from "../../../components/Personalized/Personalized";
import Quotes from "../../../components/Quotes/Quotes";
import Pics from "../../../components/Pics/Pics";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Xocora</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Slider />
      <Explore />
      <ProductCount />
      <LimitedEdition />
      <BestSelling />
      <PerfectGiftsCard />
      <Personalized />
      <Quotes />
      <Pics />
    </div>
  );
};

export default Home;

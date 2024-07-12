import React from "react";
import { Hero } from "../tailwind-template/Hero";
import FoodList from "../food/foodList";
import CityList from "../city/cityList";

import { cities } from "@/lib/data";
import { foods } from "@/lib/data";
import TitleScroll from "../intros/titleScroll";
import { HeroParallaxDemo } from "../intros/heroParallax";

export default function HomeScreen() {
  return (
    <div className="">
      <Hero />
      <TitleScroll />
      <HeroParallaxDemo />
      <div className="mx-12">
        {/* @ts-ignore */}
        <FoodList foodList={foods} />
        {/* @ts-ignore */}
        <CityList cities={cities} />
      </div>
    </div>
  );
}

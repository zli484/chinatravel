import React from "react";
import { Hero } from "../tailwind-template/Hero";
import FoodList from "../food/foodList";
import CityList from "../city/cityList";

import { cities } from "@/lib/data";
import { foods } from "@/lib/data";
import TitleScroll from "../intros/titleScroll";
import { HeroParallaxDemo } from "../intros/heroParallax";
import FoodScreen from "@/app/food/page";
import CityScreen from "@/app/city/page";

export default function HomeScreen() {
  return (
    <div className="">
      <TitleScroll />
      <HeroParallaxDemo />
      <div className="mx-12">
        <FoodScreen />
        <CityScreen />
      </div>
    </div>
  );
}

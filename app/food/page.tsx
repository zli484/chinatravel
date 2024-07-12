import React from "react";
import FoodList from "@/components/food/foodList";
import prisma from "@/lib/services/prisma";

export default async function FoodScreen() {
  const foods = await prisma.food.findMany();

  return (
    <div>
      <FoodList foodList={foods} />
    </div>
  );
}

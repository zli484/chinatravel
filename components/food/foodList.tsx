import React from "react";
import { Food } from "@prisma/client";
import { FoodCard } from "./foodCard";

export default function FoodList({ foodList }: { foodList: Food[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-col-2 xl:grid-cols-3 gap-3">
      {foodList.map((food) => (
        <FoodCard food={food} key={food.id} />
      ))}
    </div>
  );
}

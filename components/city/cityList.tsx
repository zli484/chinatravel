import React from "react";
import { City } from "@prisma/client";
import { CityCard } from "./cityCard";

export default function CityList({ cities }: { cities: City[] }) {
  return (
    <div className="grid grid-cols-3">
      {cities.map((city) => (
        <CityCard city={city} key={city.id} />
      ))}
    </div>
  );
}

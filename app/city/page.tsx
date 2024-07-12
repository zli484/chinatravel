import React from "react";

import CityList from "@/components/city/cityList";
import prisma from "@/lib/services/prisma";

export default async function CityScreen() {
  const cities = await prisma.city.findMany();

  return (
    <div>
      <CityList cities={cities} />
    </div>
  );
}

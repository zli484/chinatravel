"use client";
import React from "react";
import { PinContainer } from "../ui/ace/3d-pin";
import Image from "next/image";
import luoyang from "@/images/cities/luoyang.jpg";
import { City } from "@prisma/client";

export function CityCard({ city }: { city: City }) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        title={city.name}
        href="https://en.wikipedia.org/wiki/Tourism_in_China"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {city.name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{city.tagline}</span>
          </div>
          {/* <div></div> */}
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"> */}
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <Image
              src={city.coverImage ? city.coverImage : ""}
              alt="logo"
              width={300}
              height={300}
            />
          </div>
          {/* </div> */}
        </div>
      </PinContainer>
    </div>
  );
}

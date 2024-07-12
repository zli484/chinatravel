"use client";
import React from "react";
import { ContainerScroll } from "../ui/ace/container-scroll-animation";
import Image from "next/image";
import china_map from "@/images/other/china_map.jpg";

export default function TitleScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Discover A China
              <br />
              <span className="text-3xl md:text-[6rem] font-bold mt-1 leading-none">
                You never seen before
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={china_map}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

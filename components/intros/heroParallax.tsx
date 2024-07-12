"use client";
import React from "react";
import { HeroParallax } from "../ui/ace/hero-parallax";
import beijing_1 from "@/images/hero/beijing_1.jpg";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      //   "https://unsplash.com/photos/a-large-statue-of-a-buddha-in-a-cave-8YTGBuffXuc",
      //   "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/beijing_1.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/cursor.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/shanghai_1.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/rogue.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/beijing_2.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/editorially.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/shanghai_2.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/editrix.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/chongqing.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/dumpling.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/jiuzhai.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/panda.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/river.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/street.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/tealand.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/yunnan.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/river.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/invoker.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/hotpot.webp",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      //   "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
      "https://xgtdkhfpckxhmfrlxjjp.supabase.co/storage/v1/object/public/pictures/street.jpg",
  },
];

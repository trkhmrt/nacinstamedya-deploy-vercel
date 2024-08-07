"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import image1 from './images/image00010.jpeg'
export default function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            '../images/image00010.jpeg',
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "https://r.resimlink.com/086SWV9I.jpeg",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "https://r.resimlink.com/NxQWofk5ameP.jpeg",
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "https://r.resimlink.com/F4nvySC.jpeg",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "https://r.resimlink.com/cX43YtR5sCP.jpeg",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "https://r.resimlink.com/FAdfPJl4.jpeg",
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "/images/image00016.jpeg",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "/images/image00017.jpeg",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail: ' https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
];

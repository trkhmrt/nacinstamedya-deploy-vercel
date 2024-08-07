import Image from "next/image";

import VanishInput from "@/components/VanishInput";
import {Parallax} from "@/components/Parallax";
import Hero from "@/components/Hero";
import TracingBeamDemo from "@/components/TracingBeam";
import HeroParallaxDemo from "@/components/P_Hero";
import CarouselDemo from "@/components/Carousel";
import Navbar from '@/components/Navbar'
import MarqueeDemoVertical from '@/components/CustomerSay'
import NavbarDemo from "@/components/Navbar";
import BlurFadeDemo from "@/components/BlurPhotos";
import LayoutGridDemo from "@/components/PhotoLayout";
import AccordionDemo from "@/components/FAQ";

export default function Home() {
    return (
        <main>
            <NavbarDemo></NavbarDemo>
            <HeroParallaxDemo></HeroParallaxDemo>
            <CarouselDemo></CarouselDemo>

            <LayoutGridDemo></LayoutGridDemo>
            <MarqueeDemoVertical></MarqueeDemoVertical>
            <AccordionDemo></AccordionDemo>
        </main>
    );
}

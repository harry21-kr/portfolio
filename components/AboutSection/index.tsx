"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import AboutMe from "./AboutMe";
import AboutStack from "./AboutStack";

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-[clamp(1.5rem,5vw,1.875rem)] font-semibold text-slate-500">
        보유 역량
      </h1>
      <Carousel>
        <CarouselContent>
          <AboutStack />
          <AboutMe />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default AboutSection;

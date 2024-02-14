import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex gap-10 items-center justify-center">
      <div className="flex-1 flex space-y-2 flex-col">
        <h1 className="text-4xl">Build Forms for your business</h1>
        <p>
          Capture and analyze product feedback and feature requests in one
          place.
        </p>
        <div className="flex gap-3 items-center">
          <Button variant="default">Try for free</Button>
          <div className="flex items-center gap-2">
            <span className="h-2 relative w-2 rounded-full bg-[#0cb770] after:block after:h-full after:w-full after:absolute after:rounded-full after:bg-inherit after:opacity-50 after:animate-signal"></span>
            <span>Trusted by over 415 businesses</span>
          </div>
        </div>
      </div>
      <div className="relative w-[500px] h-[500px]">
        <Image
          src="https://www.wishkit.io/images/dashboard-min.png"
          alt="hero-img"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default Hero;

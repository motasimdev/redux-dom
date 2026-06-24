import React from "react";
import { Link } from "react-router";
import DotField from "../DotField";
import { ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <>
      <section className="relative bg-purple-900 overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <DotField
            dotRadius={3.5}
            dotSpacing={11}
            cursorRadius={400}
            cursorForce={0.1}
            bulgeOnly
            bulgeStrength={55}
            glowRadius={70}
            sparkle
            waveAmplitude={0}
            gradientFrom="rgba(168, 85, 247, 0.35)"
            gradientTo="rgba(180, 151, 207, 0.25)"
            glowColor="transparent"
          />
        </div>
        <div className="max-w-315 mx-auto px-3 z-10">
          <div className="py-2.5 px-5 mt-5 rounded-2xl glassBg">
            <div className="flex justify-between">
              <div className="text-xl font-semibold text-purple-200">
                <p>MotaBazarr</p>
              </div>
              <ul className="flex items-center justify-between gap-x-5">
                <Link to={"/"}>
                  <li className="text-purple-300">Home</li>
                </Link>
                <Link to={"/shop"}>
                  <li className="text-purple-300">Shop</li>
                </Link>
                <Link to={"/"}>
                  <li className="text-purple-300">Contact</li>
                </Link>
              </ul>
              <div className="">
                <Link>
                  <ShoppingBag className="text-purple-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

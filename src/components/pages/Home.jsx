import DotField from "../DotField";
import BorderGlow from "../BorderGlow";
import SpotlightCard from "../SpotlightCard";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = ({ id }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
          <div className="flex justify-between items-center flex-wrap gap-y-2 px-8">
            {products.map((item) => (
              <div className="mt-20 ">
                <div className="w-80">
                  <BorderGlow
                    edgeSensitivity={19}
                    glowColor="40 80 80"
                    backgroundColor="#B331F1"
                    borderRadius={23}
                    glowRadius={48}
                    glowIntensity={1}
                    coneSpread={23}
                    animated
                    colors={["#c084fc", "#f472b6", "#38bdf8"]}
                  >
                    <SpotlightCard
                      className="custom-spotlight-card bg-purple-500"
                      spotlightColor="rgba(255, 255, 255, 0.25)"
                    >
                      <div key={item.id} className="">
                        <div className="h-70 w-70">
                          <img
                            src={item.thumbnail}
                            alt={item.thumbnail}
                            className="w-full h-full overflow-hidden rounded-2xl"
                          />
                        </div>
                        <h4 className="text-lg font-medium pt-5">
                          {item.title}
                        </h4>
                        <p className="line-clamp-3">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <button className="py-1 px-4 mt-2 bg-purple-900 text-purple-300 rounded-xl text-sm cursor-pointer hover:bg-purple-300 hover:text-purple-900 transition duration-300">
                            Add to cart
                          </button>
                          <Link to={`/product/${item.id}`}>
                            <button className="py-1 px-4 mt-2 bg-purple-900 text-purple-300 rounded-xl text-sm cursor-pointer hover:bg-purple-100 hover:text-purple-900 transition duration-300">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </SpotlightCard>
                  </BorderGlow>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

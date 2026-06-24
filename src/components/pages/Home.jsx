import { Link } from "react-router";
import DotField from "../DotField";
import BorderGlow from "../BorderGlow";
import SpotlightCard from "../SpotlightCard";

import calligh from "/src/assets/calligh.jpg";

function Home() {
  return (
    <>
      <section className="relative bg-purple-900 min-h-screen overflow-hidden">
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
          <div className="flex justify-between items-center mt-20 ">
            <div className="">
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
                  <div>
                    <div className="h-70 w-70">
                      <img src={calligh} alt={calligh} className="w-full h-full overflow-hidden"/>
                    </div>
                    <h4 className="text-lg font-medium pt-5">Your Content Here</h4>
                    <p className="">Hover near the edges to see the glow.</p>
                    
                  </div>
                </SpotlightCard>
              </BorderGlow>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

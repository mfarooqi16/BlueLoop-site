import HeroSection from "@/components/HeroSection";
import EcosystemCard from "@/components/EcosystemCard";
import { Leaf, Waves, TreePine } from "lucide-react";
import kelpImage from "@assets/stock_images/kelp_forest_underwat_67aab206.jpg";
import seagrassImage from "@assets/stock_images/seagrass_meadow_unde_6ec6c507.jpg";
import mangroveImage from "@assets/stock_images/mangrove_forest_coas_1a2489b9.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-ocean-100 mb-4">
            Understanding Blue Carbon Ecosystems
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Coastal and marine ecosystems capture and store carbon at rates far exceeding terrestrial forests, making them crucial allies in climate action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EcosystemCard
            title="Kelp Forests"
            description="Giant kelp can grow up to 60cm per day, creating underwater forests that capture carbon rapidly and provide critical habitat."
            carbonRate="11 tons C/ha/yr"
            image={kelpImage}
            icon={Waves}
          />
          <EcosystemCard
            title="Seagrass Meadows"
            description="Seagrass stores carbon in sediments for millennia, acting as long-term carbon sinks with exceptional permanence."
            carbonRate="138 tons C/ha/yr"
            image={seagrassImage}
            icon={Leaf}
          />
          <EcosystemCard
            title="Mangrove Forests"
            description="Mangroves thrive in coastal zones, storing massive amounts of carbon in both biomass and deep root systems."
            carbonRate="174 tons C/ha/yr"
            image={mangroveImage}
            icon={TreePine}
          />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-ocean-50 via-background to-navy-50 dark:from-navy-900 dark:via-background dark:to-ocean-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-700 dark:text-ocean-100 mb-4">
                AI-Powered Carbon Modeling
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                BlueLoop Intelligence combines satellite observations, oceanographic data, and machine learning to predict carbon sequestration potential with unprecedented accuracy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-ocean-500 rounded-full p-1 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">Real-time satellite data integration from NASA and NOAA</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-ocean-500 rounded-full p-1 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">Machine learning predictions with confidence intervals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-ocean-500 rounded-full p-1 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">Scenario simulation for climate change impacts</span>
                </li>
              </ul>
            </div>
            <div className="glass-elevated rounded-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-ocean-100 to-navy-100 dark:from-ocean-900 dark:to-navy-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Waves className="h-16 w-16 text-ocean-500 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Interactive Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-navy-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-80">
            BlueLoop Intelligence combines open ocean data and AI modeling to help researchers and policymakers understand and forecast blue carbon potential in coastal ecosystems.
          </p>
          <p className="text-xs opacity-60 mt-4">© 2025 BlueLoop Intelligence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

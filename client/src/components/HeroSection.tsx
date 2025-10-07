import { Button } from "@/components/ui/button";
import { ArrowRight, Waves } from "lucide-react";
import heroImage from "@assets/stock_images/aerial_view_coastal__f85eff58.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/60 to-navy-900/90" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Waves className="h-16 w-16 text-ocean-400" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Model Ocean Carbon Sequestration with AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          BlueLoop Intelligence models and visualizes oceanic carbon capture potential using satellite data and AI for coastal ecosystems like kelp forests, seagrass meadows, and mangroves.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-coral-500 hover:bg-coral-600 text-white font-semibold px-8 py-6 text-lg shadow-lg"
            data-testid="button-explore-dashboard"
          >
            Explore Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-semibold px-8 py-6 text-lg"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

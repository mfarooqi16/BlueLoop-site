import EcosystemCard from '../EcosystemCard';
import { Leaf } from 'lucide-react';
import kelpImage from "@assets/stock_images/kelp_forest_underwat_67aab206.jpg";

export default function EcosystemCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <EcosystemCard
        title="Kelp Forests"
        description="Giant kelp can grow up to 60cm per day, creating underwater forests that capture carbon rapidly."
        carbonRate="11 tons C/ha/yr"
        image={kelpImage}
        icon={Leaf}
      />
    </div>
  );
}

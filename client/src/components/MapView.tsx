import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Info } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Region {
  id: string;
  name: string;
  lat: number;
  lng: number;
  carbonScore: number;
}

interface MapViewProps {
  onRegionSelect?: (region: Region) => void;
}

export default function MapView({ onRegionSelect }: MapViewProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    { id: '1', name: 'Monterey Bay', lat: 36.8, lng: -121.9, carbonScore: 24.5 },
    { id: '2', name: 'San Francisco Bay', lat: 37.8, lng: -122.4, carbonScore: 18.3 },
    { id: '3', name: 'Channel Islands', lat: 34.0, lng: -120.0, carbonScore: 31.2 },
    { id: '4', name: 'San Diego Coast', lat: 32.7, lng: -117.2, carbonScore: 22.8 },
  ];

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region.id);
    onRegionSelect?.(region);
  };

  return (
    <Card className="h-full" data-testid="card-map-view">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-ocean-500" />
          California Coastal Regions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-to-br from-ocean-100 to-navy-100 dark:from-ocean-900 dark:to-navy-900 rounded-lg p-8 h-96 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path
                d="M 50 100 Q 80 80 100 100 L 120 250 Q 100 280 80 250 Z"
                fill="hsl(186 70% 45%)"
                opacity="0.3"
              />
            </svg>
          </div>
          
          <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
            {regions.map((region) => (
              <Button
                key={region.id}
                variant={selectedRegion === region.id ? "default" : "outline"}
                className={`h-auto flex-col gap-2 p-4 ${
                  selectedRegion === region.id ? 'bg-ocean-500 hover:bg-ocean-600' : ''
                }`}
                onClick={() => handleRegionClick(region)}
                data-testid={`button-region-${region.id}`}
              >
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">{region.name}</span>
                <span className="text-xs opacity-80">{region.carbonScore} tons C/km²/yr</span>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-ocean-50 dark:bg-ocean-900/20 rounded-md flex items-start gap-2">
          <Info className="h-4 w-4 text-ocean-600 dark:text-ocean-400 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            Click a region to view detailed environmental data and carbon sequestration metrics
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

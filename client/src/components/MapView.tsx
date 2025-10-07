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
    // California Current System
    { id: '1', name: 'Monterey Bay', lat: 36.8, lng: -121.9, carbonScore: 24.5 },
    { id: '2', name: 'San Francisco Bay', lat: 37.8, lng: -122.4, carbonScore: 18.3 },
    { id: '3', name: 'Channel Islands', lat: 34.0, lng: -120.0, carbonScore: 31.2 },
    { id: '4', name: 'San Diego Coast', lat: 32.7, lng: -117.2, carbonScore: 22.8 },
    { id: '5', name: 'Oregon Coast', lat: 44.6, lng: -124.0, carbonScore: 28.7 },
    { id: '6', name: 'Cape Mendocino', lat: 40.4, lng: -124.4, carbonScore: 33.5 },
    
    // Peru/Humboldt Current System
    { id: '7', name: 'Northern Peru', lat: -8.0, lng: -79.5, carbonScore: 42.3 },
    { id: '8', name: 'Central Peru', lat: -12.0, lng: -77.5, carbonScore: 45.8 },
    { id: '9', name: 'Southern Peru', lat: -16.4, lng: -73.5, carbonScore: 38.9 },
    { id: '10', name: 'Northern Chile', lat: -23.5, lng: -70.4, carbonScore: 41.2 },
    
    // Canary Current System
    { id: '11', name: 'Cape Blanc', lat: 20.8, lng: -17.0, carbonScore: 35.6 },
    { id: '12', name: 'Mauritania Coast', lat: 19.5, lng: -16.5, carbonScore: 37.4 },
    { id: '13', name: 'Senegal Coast', lat: 14.7, lng: -17.4, carbonScore: 29.8 },
    
    // Benguela Current System
    { id: '14', name: 'Namibia Coast', lat: -23.0, lng: 14.5, carbonScore: 39.7 },
    { id: '15', name: 'Cape Town', lat: -33.9, lng: 18.4, carbonScore: 32.1 },
    { id: '16', name: 'Lüderitz', lat: -26.6, lng: 15.2, carbonScore: 44.2 },
    
    // Somalia/Arabian Sea System
    { id: '17', name: 'Somalia Coast', lat: 10.0, lng: 51.0, carbonScore: 36.5 },
    { id: '18', name: 'Oman Coast', lat: 17.0, lng: 54.5, carbonScore: 34.8 },
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
          Major Global Upwelling Zones
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-to-br from-ocean-100 to-navy-100 dark:from-ocean-900 dark:to-navy-900 rounded-lg p-6 h-96 overflow-y-auto">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path
                d="M 50 100 Q 80 80 100 100 L 120 250 Q 100 280 80 250 Z"
                fill="hsl(186 70% 45%)"
                opacity="0.3"
              />
              <path
                d="M 200 50 Q 250 80 280 100 L 300 200 Q 280 250 250 220 Z"
                fill="hsl(186 70% 45%)"
                opacity="0.2"
              />
            </svg>
          </div>
          
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {regions.map((region) => (
              <Button
                key={region.id}
                variant={selectedRegion === region.id ? "default" : "outline"}
                className={`h-auto flex-col gap-1 p-3 ${
                  selectedRegion === region.id ? 'bg-ocean-500 hover:bg-ocean-600' : ''
                }`}
                onClick={() => handleRegionClick(region)}
                data-testid={`button-region-${region.id}`}
              >
                <MapPin className="h-3 w-3" />
                <span className="text-xs font-medium text-center">{region.name}</span>
                <span className="text-[10px] opacity-80">{region.carbonScore} C</span>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-ocean-50 dark:bg-ocean-900/20 rounded-md flex items-start gap-2">
          <Info className="h-4 w-4 text-ocean-600 dark:text-ocean-400 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            Upwelling zones bring nutrient-rich deep water to the surface, supporting high productivity and carbon sequestration. Click any region for detailed metrics.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

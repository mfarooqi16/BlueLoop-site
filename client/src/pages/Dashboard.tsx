import { useState } from "react";
import MapView from "@/components/MapView";
import DataChart from "@/components/DataChart";
import CarbonGauge from "@/components/CarbonGauge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const [selectedRegion, setSelectedRegion] = useState<{
    id: string;
    name: string;
    carbonScore: number;
  } | null>(null);

  const sstData = [
    { date: 'Jan', value: 18.2 },
    { date: 'Feb', value: 18.5 },
    { date: 'Mar', value: 19.1 },
    { date: 'Apr', value: 20.3 },
    { date: 'May', value: 21.8 },
    { date: 'Jun', value: 23.2 },
  ];

  const chlorophyllData = [
    { date: 'Jan', value: 2.1 },
    { date: 'Feb', value: 2.3 },
    { date: 'Mar', value: 3.2 },
    { date: 'Apr', value: 4.1 },
    { date: 'May', value: 3.8 },
    { date: 'Jun', value: 3.2 },
  ];

  const turbidityData = [
    { date: 'Jan', value: 1.2 },
    { date: 'Feb', value: 1.4 },
    { date: 'Mar', value: 1.8 },
    { date: 'Apr', value: 2.1 },
    { date: 'May', value: 1.9 },
    { date: 'Jun', value: 1.6 },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-ocean-100 mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Explore major global upwelling zones and view environmental data
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MapView onRegionSelect={(region) => setSelectedRegion(region)} />
          </div>
          
          <div>
            <CarbonGauge
              score={selectedRegion?.carbonScore || 0}
              region={selectedRegion?.name}
            />
          </div>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="sst" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sst" data-testid="tab-sst">Sea Surface Temperature</TabsTrigger>
              <TabsTrigger value="chlorophyll" data-testid="tab-chlorophyll">Chlorophyll-a</TabsTrigger>
              <TabsTrigger value="turbidity" data-testid="tab-turbidity">Turbidity</TabsTrigger>
            </TabsList>
            <TabsContent value="sst" className="mt-6">
              <DataChart
                title="Sea Surface Temperature"
                data={sstData}
                unit="°C"
                color="hsl(186 70% 45%)"
              />
            </TabsContent>
            <TabsContent value="chlorophyll" className="mt-6">
              <DataChart
                title="Chlorophyll-a Concentration"
                data={chlorophyllData}
                unit="mg/m³"
                color="hsl(158 65% 45%)"
              />
            </TabsContent>
            <TabsContent value="turbidity" className="mt-6">
              <DataChart
                title="Water Turbidity"
                data={turbidityData}
                unit="NTU"
                color="hsl(215 65% 45%)"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

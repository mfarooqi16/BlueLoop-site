import { useState } from "react";
import SimulationSlider from "@/components/SimulationSlider";
import PredictionResult from "@/components/PredictionResult";
import { Button } from "@/components/ui/button";
import { Loader2, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Simulation() {
  const [temperature, setTemperature] = useState(0);
  const [turbidity, setTurbidity] = useState(0);
  const [nutrients, setNutrients] = useState(0);
  const [permanence, setPermanence] = useState(0.8);
  const [prediction, setPrediction] = useState<{
    carbonPotential: number;
    co2eq: number;
    uncertainty: number;
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const basePotential = 24.5;
      const tempEffect = temperature * -1.2;
      const turbidityEffect = turbidity * -0.8;
      const nutrientEffect = nutrients * 0.5;
      
      const carbonPotential = Math.max(0, basePotential + tempEffect + turbidityEffect + nutrientEffect);
      const co2eq = carbonPotential * 3.67;
      const uncertainty = 0.08 + Math.abs(temperature) * 0.01 + Math.abs(nutrients) * 0.005;
      
      setPrediction({
        carbonPotential,
        co2eq,
        uncertainty: Math.min(uncertainty, 0.5),
      });
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-ocean-100 mb-2">
            AI Simulation
          </h1>
          <p className="text-muted-foreground">
            Adjust environmental parameters to predict carbon sequestration potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Environmental Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <SimulationSlider
                  label="Temperature Change"
                  value={temperature}
                  onChange={setTemperature}
                  min={-5}
                  max={5}
                  step={0.1}
                  unit="°C"
                  description="Sea surface temperature variation"
                />
                
                <SimulationSlider
                  label="Turbidity Change"
                  value={turbidity}
                  onChange={setTurbidity}
                  min={-3}
                  max={3}
                  step={0.1}
                  unit=" NTU"
                  description="Water clarity variation"
                />
                
                <SimulationSlider
                  label="Nutrient Level Change"
                  value={nutrients}
                  onChange={setNutrients}
                  min={-50}
                  max={50}
                  step={1}
                  unit="%"
                  description="Nutrient concentration change"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Carbon Accounting</CardTitle>
              </CardHeader>
              <CardContent>
                <SimulationSlider
                  label="Permanence Factor"
                  value={permanence}
                  onChange={setPermanence}
                  min={0.5}
                  max={1.0}
                  step={0.05}
                  unit=""
                  description="Long-term storage stability (default 80%)"
                />
              </CardContent>
            </Card>

            <Button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold py-6 text-lg"
              data-testid="button-calculate"
            >
              {isCalculating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-5 w-5" />
                  Calculate Potential
                </>
              )}
            </Button>
          </div>

          <div>
            {prediction ? (
              <PredictionResult
                carbonPotential={prediction.carbonPotential}
                co2eq={prediction.co2eq}
                uncertainty={prediction.uncertainty}
                permanence={permanence}
              />
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-12">
                  <Zap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Adjust parameters and click "Calculate Potential" to see predictions
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

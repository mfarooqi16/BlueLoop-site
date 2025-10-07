import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface PredictionResultProps {
  carbonPotential: number;
  co2eq: number;
  uncertainty: number;
  permanence?: number;
}

export default function PredictionResult({
  carbonPotential,
  co2eq,
  uncertainty,
  permanence = 0.8,
}: PredictionResultProps) {
  const adjustedCO2eq = co2eq * permanence;
  const confidencePercent = (1 - uncertainty) * 100;

  return (
    <Card data-testid="card-prediction-result">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-ocean-500" />
          Predicted Carbon Sequestration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="p-4 bg-ocean-50 dark:bg-ocean-900/20 rounded-lg">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
              Carbon Potential
            </p>
            <p className="text-3xl font-mono font-bold text-ocean-600 dark:text-ocean-400" data-testid="text-carbon-potential">
              {carbonPotential.toFixed(1)}
            </p>
            <p className="text-sm text-muted-foreground">tons C/km²/yr</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-card-border dark:bg-card rounded-lg">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                Raw CO₂e
              </p>
              <p className="text-xl font-mono font-bold text-foreground" data-testid="text-raw-co2eq">
                {co2eq.toFixed(1)}
              </p>
              <p className="text-xs text-muted-foreground">tons/km²/yr</p>
            </div>

            <div className="p-4 bg-card-border dark:bg-card rounded-lg">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                Adjusted CO₂e
              </p>
              <p className="text-xl font-mono font-bold text-foreground" data-testid="text-adjusted-co2eq">
                {adjustedCO2eq.toFixed(1)}
              </p>
              <p className="text-xs text-muted-foreground">{(permanence * 100)}% permanence</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <AlertCircle className="h-4 w-4" />
              Confidence Level
            </span>
            <span className="font-mono font-medium" data-testid="text-confidence">
              {confidencePercent.toFixed(0)}%
            </span>
          </div>
          <Progress value={confidencePercent} className="h-2" />
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <strong>Note:</strong> 1 ton of Carbon = 3.67 tons of CO₂ equivalent. Permanence factor accounts for long-term storage stability.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

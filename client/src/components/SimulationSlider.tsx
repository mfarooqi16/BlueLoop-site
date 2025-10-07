import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

interface SimulationSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  description?: string;
}

export default function SimulationSlider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  description,
}: SimulationSliderProps) {
  return (
    <Card data-testid={`card-slider-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">{label}</p>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <div className="text-right">
            <span className="text-2xl font-mono font-bold text-ocean-600 dark:text-ocean-400" data-testid={`text-value-${label.toLowerCase().replace(/\s+/g, '-')}`}>
              {value >= 0 ? '+' : ''}{value.toFixed(1)}
            </span>
            <span className="text-sm text-muted-foreground ml-1">{unit}</span>
          </div>
        </div>
        <Slider
          value={[value]}
          onValueChange={(values) => onChange(values[0])}
          min={min}
          max={max}
          step={step}
          className="w-full"
          data-testid={`slider-${label.toLowerCase().replace(/\s+/g, '-')}`}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{min}{unit}</span>
          <span>{max}{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CarbonGaugeProps {
  score: number;
  maxScore?: number;
  region?: string;
}

export default function CarbonGauge({ score, maxScore = 100, region }: CarbonGaugeProps) {
  const percentage = Math.min((score / maxScore) * 100, 100);
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Card data-testid="card-carbon-gauge">
      <CardHeader>
        <CardTitle className="text-lg">Carbon Potential Score</CardTitle>
        {region && <p className="text-sm text-muted-foreground">{region}</p>}
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r={radius}
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-gray-200 dark:text-gray-700"
            />
            <circle
              cx="96"
              cy="96"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(215 65% 45%)" />
                <stop offset="100%" stopColor="hsl(186 70% 45%)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-mono font-bold text-ocean-600 dark:text-ocean-400" data-testid="text-carbon-score">
              {score.toFixed(1)}
            </span>
            <span className="text-sm text-muted-foreground">tons C/km²/yr</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Sequestration Potential</p>
        </div>
      </CardContent>
    </Card>
  );
}

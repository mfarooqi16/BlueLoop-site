import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import DataChart from "@/components/DataChart";
import CarbonGauge from "@/components/CarbonGauge";

export default function Reports() {
  const sampleData = [
    { date: 'Jan', value: 18.2 },
    { date: 'Feb', value: 18.5 },
    { date: 'Mar', value: 19.1 },
    { date: 'Apr', value: 20.3 },
    { date: 'May', value: 21.8 },
    { date: 'Jun', value: 23.2 },
  ];

  const handleGeneratePDF = () => {
    console.log('Generating PDF report...');
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-ocean-100 mb-2">
              Reports
            </h1>
            <p className="text-muted-foreground">
              Summary of carbon sequestration analysis
            </p>
          </div>
          <Button
            onClick={handleGeneratePDF}
            className="bg-coral-500 hover:bg-coral-600 text-white font-semibold"
            data-testid="button-generate-pdf"
          >
            <Download className="mr-2 h-4 w-4" />
            Generate PDF Report
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <CarbonGauge score={24.5} region="Monterey Bay, CA" />
          
          <Card>
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-ocean-50 dark:bg-ocean-900/20 rounded-lg">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Carbon Potential
                  </p>
                  <p className="text-2xl font-mono font-bold text-ocean-600 dark:text-ocean-400">
                    24.5
                  </p>
                  <p className="text-xs text-muted-foreground">tons C/km²/yr</p>
                </div>
                
                <div className="p-4 bg-ocean-50 dark:bg-ocean-900/20 rounded-lg">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    CO₂ Equivalent
                  </p>
                  <p className="text-2xl font-mono font-bold text-ocean-600 dark:text-ocean-400">
                    90.0
                  </p>
                  <p className="text-xs text-muted-foreground">tons/km²/yr</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">Region Details</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">Monterey Bay, CA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Area:</span>
                    <span className="font-medium">1,245 km²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Confidence:</span>
                    <span className="font-medium">88%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <DataChart
            title="Sea Surface Temperature"
            data={sampleData}
            unit="°C"
            color="hsl(186 70% 45%)"
          />
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-ocean-500" />
                Report Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground leading-relaxed">
                This analysis evaluates the carbon sequestration potential of the Monterey Bay coastal region based on satellite-derived environmental data and machine learning predictions.
              </p>
              <div className="pt-3 border-t border-border">
                <h4 className="font-medium text-foreground mb-2">Key Findings:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-ocean-500">•</span>
                    <span>Average carbon sequestration rate of 24.5 tons C/km²/yr</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ocean-500">•</span>
                    <span>Stable temperature trends supporting kelp forest growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ocean-500">•</span>
                    <span>High confidence prediction (88%) based on model validation</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

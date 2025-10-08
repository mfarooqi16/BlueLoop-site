import FileUpload from "@/components/FileUpload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function Upload() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-ocean-100 mb-2">
            Data Upload
          </h1>
          <p className="text-muted-foreground">
            Upload your custom oceanographic data for analysis
          </p>
        </div>

        <div className="space-y-6">
          <FileUpload />

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-ocean-500" />
                Supported Data Formats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">CSV Requirements</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>First row should contain column headers</li>
                  <li>Date column in YYYY-MM-DD format</li>
                  <li>Supported variables: SST (°C), Chlorophyll-a (mg/m³), Turbidity (NTU)</li>
                  <li>Maximum file size: 10 MB</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-medium text-foreground mb-2">Example Format</h4>
                <div className="bg-muted rounded-md p-3 font-mono text-xs">
                  <div>date,sst,chlorophyll,turbidity</div>
                  <div>2025-01-01,18.2,2.1,1.2</div>
                  <div>2025-01-02,18.5,2.3,1.4</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

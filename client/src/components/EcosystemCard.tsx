import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface EcosystemCardProps {
  title: string;
  description: string;
  carbonRate: string;
  image: string;
  icon: LucideIcon;
}

export default function EcosystemCard({ title, description, carbonRate, image, icon: Icon }: EcosystemCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 overflow-hidden group" data-testid={`card-ecosystem-${title.toLowerCase().replace(' ', '-')}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="bg-ocean-500 p-2 rounded-md">
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-navy-700 dark:text-ocean-100">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="pt-2 border-t border-border">
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Carbon Sequestration Rate</p>
          <p className="text-lg font-mono font-bold text-ocean-600 dark:text-ocean-400">{carbonRate}</p>
        </div>
      </CardContent>
    </Card>
  );
}

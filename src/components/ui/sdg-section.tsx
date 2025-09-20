import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SDGSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "earth" | "water" | "climate" | "health";
  children: React.ReactNode;
  actionLabel: string;
  onAction: () => void;
}

const colorClasses = {
  earth: "from-earth-green to-forest-green",
  water: "from-ocean-blue to-sky-blue", 
  climate: "from-earth-green to-sunshine-yellow",
  health: "from-accent to-ocean-blue",
};

export function SDGSection({
  title,
  description,
  icon: Icon,
  color,
  children,
  actionLabel,
  onAction,
}: SDGSectionProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className={cn("bg-gradient-to-r text-white", colorClasses[color])}>
        <div className="flex items-center gap-3">
          <Icon className="h-8 w-8" />
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-white/90">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {children}
        <Button onClick={onAction} className="mt-4 w-full">
          {actionLabel}
        </Button>
      </CardContent>
    </Card>
  );
}
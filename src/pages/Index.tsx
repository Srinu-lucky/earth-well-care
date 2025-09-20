import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { SDGSection } from "@/components/ui/sdg-section";
import { 
  Thermometer, 
  Droplets, 
  Wheat, 
  Heart, 
  TrendingUp, 
  TrendingDown,
  MapPin,
  Users,
  Leaf,
  Activity
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import earthHero from "@/assets/earth-hero.jpg";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedRegion] = useState("Global");

  const handleClimateAction = () => {
    navigate("/climate-action");
  };

  const handleWaterAction = () => {
    toast({
      title: "Water Quality Alert System",
      description: "Monitoring water quality data for your region.",
    });
  };

  const handleHungerAction = () => {
    toast({
      title: "Food Donation Platform",
      description: "Connecting donors with local distribution centers.",
    });
  };

  const handleHealthAction = () => {
    toast({
      title: "Health Monitoring Dashboard",
      description: "Tracking community health indicators.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={earthHero} 
            alt="Earth from space showing environmental sustainability" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-sky-blue bg-clip-text">
            Sustainable Development Goals Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Monitoring Climate Action, Clean Water, Zero Hunger, and Health & Well-being
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-earth-green hover:bg-forest-green">
              Start Monitoring
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Global Metrics Dashboard */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Global Impact Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring of key sustainability indicators across all SDGs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard
            title="Global Temperature"
            value="+1.2°C"
            change="+0.1°C from last year"
            changeType="negative"
            icon={Thermometer}
          />
          <MetricCard
            title="Clean Water Access"
            value="74%"
            change="+2% improvement"
            changeType="positive"
            icon={Droplets}
          />
          <MetricCard
            title="Food Security Index"
            value="68.5"
            change="-1.2 points"
            changeType="negative"
            icon={Wheat}
          />
          <MetricCard
            title="Health Coverage"
            value="81%"
            change="+3% improvement"
            changeType="positive"
            icon={Heart}
          />
        </div>
      </section>

      {/* SDG Sections */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Climate Action */}
          <SDGSection
            title="Climate Action"
            description="Monitor climate changes and smart farming solutions"
            icon={Thermometer}
            color="climate"
            actionLabel="Access Climate Dashboard"
            onAction={handleClimateAction}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-earth-green" />
                  <span className="text-sm">Smart Farming Recommendations</span>
                </div>
                <span className="text-sm font-semibold">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-sunshine-yellow" />
                  <span className="text-sm">Climate Pattern Analysis</span>
                </div>
                <span className="text-sm font-semibold">Monitoring</span>
              </div>
            </div>
          </SDGSection>

          {/* Clean Water */}
          <SDGSection
            title="Clean Water & Sanitation"
            description="Monitor water quality and provide regional alerts"
            icon={Droplets}
            color="water"
            actionLabel="View Water Quality Data"
            onAction={handleWaterAction}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ocean-blue" />
                  <span className="text-sm">Regional Water Quality</span>
                </div>
                <span className="text-sm font-semibold text-earth-green">Good</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-destructive" />
                  <span className="text-sm">Contamination Alerts</span>
                </div>
                <span className="text-sm font-semibold">2 Active</span>
              </div>
            </div>
          </SDGSection>

          {/* Zero Hunger */}
          <SDGSection
            title="Zero Hunger"
            description="Food donation platform connecting donors with distribution"
            icon={Wheat}
            color="earth"
            actionLabel="Start Food Donation"
            onAction={handleHungerAction}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-earth-green" />
                  <span className="text-sm">People Fed This Month</span>
                </div>
                <span className="text-sm font-semibold">12,500</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Government Partnerships</span>
                </div>
                <span className="text-sm font-semibold">Active</span>
              </div>
            </div>
          </SDGSection>

          {/* Health & Well-being */}
          <SDGSection
            title="Good Health & Well-being"
            description="Monitor community health indicators and wellness programs"
            icon={Heart}
            color="health"
            actionLabel="Access Health Dashboard"
            onAction={handleHealthAction}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-accent" />
                  <span className="text-sm">Health Coverage Rate</span>
                </div>
                <span className="text-sm font-semibold">81%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-earth-green" />
                  <span className="text-sm">Wellness Programs</span>
                </div>
                <span className="text-sm font-semibold">Active</span>
              </div>
            </div>
          </SDGSection>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-earth-green to-ocean-blue">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join the Global Sustainability Movement</h2>
          <p className="text-xl mb-8 opacity-90">
            Together, we can monitor, act, and create a sustainable future for all
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Involved
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
              Contact Government Partners
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
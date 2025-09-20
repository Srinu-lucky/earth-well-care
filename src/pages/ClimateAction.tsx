import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Thermometer, 
  CloudRain, 
  Wind, 
  Sun, 
  TrendingUp, 
  TrendingDown,
  MapPin,
  Calendar,
  Leaf,
  Activity,
  AlertTriangle,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ClimateAction = () => {
  const { toast } = useToast();
  const [selectedRegion, setSelectedRegion] = useState("global");
  const [timeFrame, setTimeFrame] = useState("yearly");

  // Mock historical climate data
  const historicalData = {
    temperature: [
      { year: 2019, value: 14.7, change: "+0.8°C" },
      { year: 2020, value: 14.9, change: "+1.0°C" },
      { year: 2021, value: 14.8, change: "+0.9°C" },
      { year: 2022, value: 15.0, change: "+1.1°C" },
      { year: 2023, value: 15.2, change: "+1.3°C" },
      { year: 2024, value: 15.1, change: "+1.2°C" },
    ],
    precipitation: [
      { year: 2019, value: 12.5, change: "-2.1%" },
      { year: 2020, value: 13.2, change: "+3.4%" },
      { year: 2021, value: 11.8, change: "-7.8%" },
      { year: 2022, value: 12.9, change: "+0.8%" },
      { year: 2023, value: 11.5, change: "-10.2%" },
      { year: 2024, value: 12.1, change: "-5.6%" },
    ]
  };

  const smartFarmingRecommendations = [
    {
      crop: "Wheat",
      recommendation: "Plant drought-resistant varieties",
      urgency: "high",
      region: "Midwest USA"
    },
    {
      crop: "Rice",
      recommendation: "Implement water-saving irrigation",
      urgency: "medium",
      region: "Southeast Asia"
    },
    {
      crop: "Corn",
      recommendation: "Adjust planting schedule by 2 weeks",
      urgency: "high",
      region: "Brazil"
    },
    {
      crop: "Tomatoes",
      recommendation: "Use greenhouse cultivation",
      urgency: "low",
      region: "Mediterranean"
    }
  ];

  const handleExportData = () => {
    toast({
      title: "Data Export Initiated",
      description: "Climate data is being prepared for download.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="bg-gradient-to-r from-earth-green to-forest-green text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Thermometer className="h-12 w-12" />
            <div>
              <h1 className="text-4xl font-bold">Climate Action Monitoring</h1>
              <p className="text-xl opacity-90">Track climate patterns and smart farming solutions</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="global">Global</SelectItem>
              <SelectItem value="north-america">North America</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="south-america">South America</SelectItem>
              <SelectItem value="oceania">Oceania</SelectItem>
            </SelectContent>
          </Select>

          <Select value={timeFrame} onValueChange={setTimeFrame}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Time Frame" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
              <SelectItem value="decade">10 Years</SelectItem>
              <SelectItem value="century">100 Years</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={handleExportData} variant="outline" className="ml-auto">
            Export Data
          </Button>
        </div>

        {/* Current Climate Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Current Temperature"
            value="15.1°C"
            change="+1.2°C above pre-industrial"
            changeType="negative"
            icon={Thermometer}
          />
          <MetricCard
            title="Precipitation Level"
            value="12.1mm"
            change="-5.6% from average"
            changeType="negative"
            icon={CloudRain}
          />
          <MetricCard
            title="Wind Patterns"
            value="Moderate"
            change="Stable conditions"
            changeType="positive"
            icon={Wind}
          />
          <MetricCard
            title="Solar Radiation"
            value="High"
            change="+8% from seasonal avg"
            changeType="neutral"
            icon={Sun}
          />
        </div>

        <Tabs defaultValue="historical" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="historical">Historical Data</TabsTrigger>
            <TabsTrigger value="current">Current Conditions</TabsTrigger>
            <TabsTrigger value="farming">Smart Farming</TabsTrigger>
          </TabsList>

          {/* Historical Data Tab */}
          <TabsContent value="historical" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Climate Trends Over Time
                </CardTitle>
                <CardDescription>
                  Historical climate data showing temperature and precipitation changes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Temperature History */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-destructive" />
                      Temperature Changes (°C)
                    </h3>
                    <div className="space-y-3">
                      {historicalData.temperature.map((data) => (
                        <div key={data.year} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{data.year}</span>
                            <span className="text-2xl font-bold">{data.value}°C</span>
                          </div>
                          <div className="flex items-center gap-2 text-destructive">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-sm">{data.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Precipitation History */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CloudRain className="h-4 w-4 text-ocean-blue" />
                      Precipitation Changes (mm)
                    </h3>
                    <div className="space-y-3">
                      {historicalData.precipitation.map((data) => (
                        <div key={data.year} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{data.year}</span>
                            <span className="text-2xl font-bold">{data.value}mm</span>
                          </div>
                          <div className={`flex items-center gap-2 ${data.change.includes('-') ? 'text-destructive' : 'text-earth-green'}`}>
                            {data.change.includes('-') ? 
                              <TrendingDown className="h-4 w-4" /> : 
                              <TrendingUp className="h-4 w-4" />
                            }
                            <span className="text-sm">{data.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Current Conditions Tab */}
          <TabsContent value="current" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Real-Time Climate Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-destructive/10 to-destructive/5 border-l-4 border-destructive rounded">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                        <div>
                          <p className="font-medium">Heat Wave Alert</p>
                          <p className="text-sm text-muted-foreground">Temperatures 5°C above average</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-destructive">Active</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-earth-green/10 to-earth-green/5 border-l-4 border-earth-green rounded">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-earth-green" />
                        <div>
                          <p className="font-medium">Air Quality</p>
                          <p className="text-sm text-muted-foreground">Within acceptable limits</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-earth-green">Good</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-sunshine-yellow/10 to-sunshine-yellow/5 border-l-4 border-sunshine-yellow rounded">
                      <div className="flex items-center gap-3">
                        <Sun className="h-5 w-5 text-sunshine-yellow" />
                        <div>
                          <p className="font-medium">UV Index</p>
                          <p className="text-sm text-muted-foreground">High exposure levels</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold">8/10</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Regional Climate Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Arctic Region</h4>
                        <span className="text-sm text-destructive">Critical</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Ice coverage decreased by 12% this year</p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Amazon Rainforest</h4>
                        <span className="text-sm text-destructive">High Risk</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Deforestation rate at 15% above target</p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Sahel Region</h4>
                        <span className="text-sm text-sunshine-yellow">Moderate</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Drought conditions improving</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Smart Farming Tab */}
          <TabsContent value="farming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Smart Farming Recommendations
                </CardTitle>
                <CardDescription>
                  AI-powered agricultural advice based on current climate conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {smartFarmingRecommendations.map((rec, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{rec.crop}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          rec.urgency === 'high' ? 'bg-destructive/10 text-destructive' :
                          rec.urgency === 'medium' ? 'bg-sunshine-yellow/10 text-sunshine-yellow' :
                          'bg-earth-green/10 text-earth-green'
                        }`}>
                          {rec.urgency} priority
                        </span>
                      </div>
                      <p className="text-sm mb-2">{rec.recommendation}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {rec.region}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClimateAction;
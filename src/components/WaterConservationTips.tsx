
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Recycle, Sun, Home, Leaf, Globe } from "lucide-react";

const WaterConservationTips = () => {
  const conservationTips = [
    {
      id: 1,
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
      category: "Daily Usage",
      title: "Fix Leaky Faucets",
      description: "A single dripping faucet can waste over 3,000 gallons per year. Check and repair leaks immediately.",
      impact: "Save 3,000+ gallons/year",
      difficulty: "Easy"
    },
    {
      id: 2,
      icon: <Recycle className="w-6 h-6 text-green-600" />,
      category: "Reuse",
      title: "Greywater Recycling",
      description: "Reuse water from washing machines, showers, and sinks for irrigation and toilet flushing.",
      impact: "Save 30% water usage",
      difficulty: "Medium"
    },
    {
      id: 3,
      icon: <Sun className="w-6 h-6 text-yellow-600" />,
      category: "Rainwater",
      title: "Rainwater Harvesting",
      description: "Collect rainwater from rooftops and store in tanks for non-drinking purposes.",
      impact: "Save 50% on water bills",
      difficulty: "Medium"
    },
    {
      id: 4,
      icon: <Home className="w-6 h-6 text-purple-600" />,
      category: "Home Solutions",
      title: "Low-Flow Fixtures",
      description: "Install water-efficient showerheads, faucets, and dual-flush toilets to reduce consumption.",
      impact: "Save 20-30% water",
      difficulty: "Easy"
    },
    {
      id: 5,
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      category: "Gardening",
      title: "Drought-Resistant Plants",
      description: "Plant native, drought-resistant vegetation that requires minimal watering.",
      impact: "Save 50% garden water",
      difficulty: "Easy"
    },
    {
      id: 6,
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      category: "Advanced",
      title: "Atmospheric Water Generation",
      description: "Use solar-powered devices to extract water from air humidity in arid regions.",
      impact: "Generate 5-10L/day",
      difficulty: "Advanced"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Water Conservation & Reuse Tips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical solutions for water conservation, reuse, and sustainable management that you can implement today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conservationTips.map((tip, index) => (
            <Card 
              key={tip.id} 
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-scale-in group hover:rotate-1"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gray-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {tip.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {tip.category}
                    </Badge>
                  </div>
                  <Badge className={`text-xs ${getDifficultyColor(tip.difficulty)}`}>
                    {tip.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {tip.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {tip.impact}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Start Your Water Conservation Journey</h3>
            <p className="text-gray-600 mb-6">
              Every drop counts! Implementing even a few of these tips can make a significant impact on water conservation 
              and help build a more sustainable future for our communities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="animate-scale-in hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <p className="text-gray-600 text-sm">Average water savings with conservation</p>
              </div>
              <div className="animate-scale-in hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold text-green-600 mb-2">₹5,000</div>
                <p className="text-gray-600 text-sm">Annual savings on water bills</p>
              </div>
              <div className="animate-scale-in hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
                <div className="text-3xl font-bold text-purple-600 mb-2">1000L</div>
                <p className="text-gray-600 text-sm">Water saved per month per household</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterConservationTips;

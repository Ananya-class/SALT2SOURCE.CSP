
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Map as MapIcon, Globe, BarChart, Users } from "lucide-react";

const Map = () => {
  const mapFeatures = [
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: "Global Coverage",
      description: "Comprehensive data from all continents and major water bodies worldwide"
    },
    {
      icon: <BarChart className="text-green-600" size={32} />,
      title: "Real-time Data",
      description: "Live updates on water quality, scarcity levels, and desalination plant status"
    },
    {
      icon: <Users className="text-purple-600" size={32} />,
      title: "Community Reports",
      description: "User-generated content and local insights from our global community"
    },
    {
      icon: <MapIcon className="text-orange-600" size={32} />,
      title: "Interactive Layers",
      description: "Multiple data layers for comprehensive water resource analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Water Resources Map & Visualizer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore global water scarcity data, desalination facilities, and water quality metrics 
            through our comprehensive interactive mapping platform.
          </p>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Interactive Water Resources Map</h2>
              <p className="text-blue-100">Click and explore water data from around the world</p>
            </div>
            
            {/* Map Container - Placeholder for interactive map */}
            <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20" />
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Globe className="text-white" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Interactive Map Loading...</h3>
                <p className="text-blue-600 mb-6">Advanced mapping functionality will be integrated here</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Launch Full Map View
                </Button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
              <div className="absolute top-8 right-8 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-12 left-8 w-2 h-2 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-4 right-12 w-3 h-3 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
          </Card>
        </div>
      </section>

      {/* Map Features */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Map Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mapFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Insights */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Global Water Insights</h2>
            <p className="text-xl opacity-90">Key statistics from our comprehensive water database</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">21,000+</div>
              <p className="opacity-80">Desalination Plants</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="opacity-80">Countries Mapped</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95M</div>
              <p className="opacity-80">Cubic Meters/Day</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.2B</div>
              <p className="opacity-80">People Needing Access</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Map;

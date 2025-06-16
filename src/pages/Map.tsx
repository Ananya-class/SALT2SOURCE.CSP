
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndiaWaterMap from "@/components/IndiaWaterMap";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Droplets, BarChart3, Users } from "lucide-react";

const Map = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Water Source Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore water sources across India, monitor quality, and discover solutions for clean water access. 
            Our interactive map provides real-time insights into rivers, lakes, groundwater, and coastal water bodies.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Interactive Mapping</h3>
                <p className="text-sm text-gray-600">Click on markers to explore detailed information about each water source</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Droplets className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Quality Monitoring</h3>
                <p className="text-sm text-gray-600">Real-time water quality data with color-coded indicators</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Data Analytics</h3>
                <p className="text-sm text-gray-600">Comprehensive analysis of water availability and treatment needs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Community Reports</h3>
                <p className="text-sm text-gray-600">Local community input and real-time updates from the ground</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">
                India Water Resources Map
              </CardTitle>
              <CardDescription className="text-lg">
                Discover and explore water sources across the Indian subcontinent. Filter by type, 
                quality, and location to find relevant information for your area.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IndiaWaterMap />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Information */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding the Data</h2>
            <p className="text-lg text-gray-600">Learn how to interpret the water quality indicators and what they mean for your community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Water Quality Levels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div>
                    <span className="font-semibold">Excellent:</span>
                    <p className="text-sm text-gray-600">Safe for all uses, meets all drinking water standards</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div>
                    <span className="font-semibold">Good:</span>
                    <p className="text-sm text-gray-600">Generally safe, minimal treatment required</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div>
                    <span className="font-semibold">Moderate:</span>
                    <p className="text-sm text-gray-600">Requires treatment, some quality concerns</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div>
                    <span className="font-semibold">Poor:</span>
                    <p className="text-sm text-gray-600">Significant treatment needed, not safe for direct use</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">How to Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-green-600">Report Issues:</span>
                    <p className="text-sm text-gray-600">Notice pollution or water quality problems? Report them to local authorities.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">Conservation:</span>
                    <p className="text-sm text-gray-600">Practice water conservation to reduce pressure on these resources.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-600">Community Action:</span>
                    <p className="text-sm text-gray-600">Join local water conservation groups and awareness campaigns.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-600">Education:</span>
                    <p className="text-sm text-gray-600">Share knowledge about water sources and conservation with your community.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Map;

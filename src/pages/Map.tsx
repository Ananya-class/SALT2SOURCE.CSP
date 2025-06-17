
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeafletWaterMap from "@/components/LeafletWaterMap";
import WaterGame from "@/components/WaterGame";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Droplets, BarChart3, Users, Gamepad2 } from "lucide-react";

const Map = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section with enhanced animations */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-teal-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Water Source Explorer
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore water sources across Vishakhapatnam, monitor quality, and play conservation games. 
            Our interactive map provides real-time insights into local water bodies and treatment facilities.
          </p>
        </div>
      </section>

      {/* Key Features with stagger animation */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3 animate-pulse" />
                <h3 className="font-semibold text-gray-800 mb-2">Interactive Mapping</h3>
                <p className="text-sm text-gray-600">Click on markers to explore detailed information about each water source</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <Droplets className="w-12 h-12 text-green-600 mx-auto mb-3 animate-pulse" />
                <h3 className="font-semibold text-gray-800 mb-2">Quality Monitoring</h3>
                <p className="text-sm text-gray-600">Real-time water quality data with color-coded indicators</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-3 animate-pulse" />
                <h3 className="font-semibold text-gray-800 mb-2">Data Analytics</h3>
                <p className="text-sm text-gray-600">Comprehensive analysis of water availability and treatment needs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-3 animate-pulse" />
                <h3 className="font-semibold text-gray-800 mb-2">Community Reports</h3>
                <p className="text-sm text-gray-600">Local community input and real-time updates from the ground</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6">
                <Gamepad2 className="w-12 h-12 text-pink-600 mx-auto mb-3 animate-pulse" />
                <h3 className="font-semibold text-gray-800 mb-2">Conservation Game</h3>
                <p className="text-sm text-gray-600">Learn water conservation through interactive gaming</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
              Vishakhapatnam Water Resources Map
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Discover and explore water sources across the city. Click on markers to learn more about each location.
            </p>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <LeafletWaterMap />
          </div>
        </div>
      </section>

      {/* Water Conservation Game Section */}
      <section className="pb-12 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
              Water Conservation Challenge
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Test your water conservation knowledge and earn points in this fun, educational game!
            </p>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <WaterGame />
          </div>
        </div>
      </section>

      {/* Additional Information with wave animation */}
      <section className="pb-20 px-4 bg-white relative overflow-hidden">
        {/* Animated wave background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V30Q300,60,600,30T1200,30V0Z" className="fill-blue-50 opacity-50 animate-pulse"></path>
            <path d="M0,0V40Q300,80,600,40T1200,40V0Z" className="fill-blue-100 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></path>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">Understanding the Data</h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.1s' }}>Learn how to interpret the water quality indicators and what they mean for your community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Water Quality Levels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <span className="font-semibold">Excellent:</span>
                    <p className="text-sm text-gray-600">Safe for all uses, meets all drinking water standards</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div>
                    <span className="font-semibold">Good:</span>
                    <p className="text-sm text-gray-600">Generally safe, minimal treatment required</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div>
                    <span className="font-semibold">Moderate:</span>
                    <p className="text-sm text-gray-600">Requires treatment, some quality concerns</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div>
                    <span className="font-semibold">Poor:</span>
                    <p className="text-sm text-gray-600">Significant treatment needed, not safe for direct use</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">How to Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg hover:bg-green-50 transition-colors">
                    <span className="font-semibold text-green-600">Report Issues:</span>
                    <p className="text-sm text-gray-600">Notice pollution or water quality problems? Report them to local authorities.</p>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <span className="font-semibold text-blue-600">Conservation:</span>
                    <p className="text-sm text-gray-600">Practice water conservation to reduce pressure on these resources.</p>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-purple-50 transition-colors">
                    <span className="font-semibold text-purple-600">Community Action:</span>
                    <p className="text-sm text-gray-600">Join local water conservation groups and awareness campaigns.</p>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-orange-50 transition-colors">
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

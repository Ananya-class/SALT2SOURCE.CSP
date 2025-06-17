
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Map, Droplets, Waves, Lightbulb, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 animate-fade-in"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Droplets className="text-blue-200 opacity-30 animate-glow" size={60} />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <Waves className="text-blue-200 opacity-30 animate-pulse" size={80} />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '4s'}}>
          <Sparkles className="text-yellow-300 opacity-40 animate-bounce-gentle" size={40} />
        </div>
        <div className="absolute top-60 right-10 animate-float" style={{animationDelay: '3s'}}>
          <Star className="text-yellow-200 opacity-30 animate-wiggle" size={50} />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-x"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 animate-scale-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Droplets className="w-5 h-5 text-blue-200 animate-bounce-gentle" />
              <span className="text-blue-100 font-medium">Water Innovation Platform</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent animate-fade-in">
              SALT2SOURCE
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 opacity-90 animate-slide-in-left font-light">
            Transforming Salt Water into Clean, Sustainable Solutions
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-3xl mx-auto animate-slide-in-right leading-relaxed">
            Join our mission to make clean water accessible worldwide through innovative desalination technology, 
            community research, and global collaboration for a sustainable future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Link to="/features">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl rounded-full">
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Features
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl rounded-full backdrop-blur-sm">
                Join Our Mission
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/80 text-sm">Discover More</span>
            <ArrowDown className="text-white animate-pulse" size={32} />
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/50 to-green-50/50 opacity-70 animate-gradient-x"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-blue-600 animate-wiggle" />
              <span className="text-blue-800 font-medium">Core Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-slide-in-left">
              Revolutionary Water Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-in-right leading-relaxed">
              Discover how SALT2SOURCE is revolutionizing access to clean water through cutting-edge technology, 
              comprehensive education, and vibrant community engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="group hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 border-0 shadow-xl animate-scale-in hover:rotate-2 bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-spin transition-all duration-500 shadow-lg">
                  <Map className="text-white group-hover:scale-125 transition-transform duration-500" size={44} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">Interactive Water Map</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors mb-6">
                  Explore comprehensive global water scarcity data and discover desalination facilities through our 
                  advanced interactive mapping system with real-time updates
                </CardDescription>
                <Link to="/map">
                  <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-500 rounded-full px-8 py-3 shadow-lg" size="lg">
                    Explore Map
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 border-0 shadow-xl animate-scale-in hover:rotate-2 bg-gradient-to-br from-white to-green-50" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse transition-all duration-500 shadow-lg">
                  <div className="text-white text-4xl font-bold group-hover:scale-125 transition-transform duration-500">🌊</div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors mb-2">Advanced Desalination</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors mb-6">
                  Discover cutting-edge solar desalination methods and sustainable water purification technologies 
                  that are shaping the future of clean water access
                </CardDescription>
                <Link to="/features">
                  <Button className="bg-green-600 hover:bg-green-700 hover:scale-110 transition-all duration-500 rounded-full px-8 py-3 shadow-lg" size="lg">
                    Learn Technology
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 border-0 shadow-xl animate-scale-in hover:rotate-2 bg-gradient-to-br from-white to-purple-50" style={{animationDelay: '0.4s'}}>
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce transition-all duration-500 shadow-lg">
                  <Lightbulb className="text-white group-hover:scale-125 transition-transform duration-500" size={44} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">Community Wisdom</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors mb-6">
                  Share and discover innovative water conservation tips from our global community of environmental 
                  advocates and sustainability experts worldwide
                </CardDescription>
                <Link to="/tips">
                  <Button className="bg-purple-600 hover:bg-purple-700 hover:scale-110 transition-all duration-500 rounded-full px-8 py-3 shadow-lg" size="lg">
                    Get Inspired
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

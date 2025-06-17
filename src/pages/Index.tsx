
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Map, User, Mail, Facebook, Instagram, Twitter, Droplets, Waves, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 animate-fade-in"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Droplets className="text-blue-200 opacity-20" size={60} />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <Waves className="text-blue-200 opacity-20" size={80} />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '4s'}}>
          <Droplets className="text-blue-200 opacity-20" size={40} />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-scale-in">
            <span className="inline-block animate-bounce-gentle">S</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '0.1s'}}>A</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '0.2s'}}>L</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '0.3s'}}>T</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '0.4s'}}>2</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '0.5s'}}>S</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '0.6s'}}>O</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '0.7s'}}>U</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '0.8s'}}>R</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '0.9s'}}>C</span>
            <span className="inline-block animate-bounce-gentle" style={{animationDelay: '1s'}}>E</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-in-left">
            Transforming Salt Water into Clean, Sustainable Solutions
          </p>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto animate-slide-in-right">
            Join our mission to make clean water accessible worldwide through innovative desalination technology and community awareness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/features">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                Explore Features
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
        <ArrowDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white" size={32} />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 to-transparent opacity-50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-slide-in-left">Our Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right">
              Discover how SALT2SOURCE is revolutionizing access to clean water through technology, education, and community engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg animate-scale-in hover:rotate-1">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-spin transition-all duration-300">
                  <Map className="text-blue-600 group-hover:scale-125 transition-transform duration-300" size={40} />
                </div>
                <CardTitle className="text-2xl text-gray-800 group-hover:text-blue-600 transition-colors">Interactive Map</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Explore global water scarcity data and desalination facilities through our comprehensive interactive mapping system
                </CardDescription>
                <Link to="/map">
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300" size="lg">
                    View Map
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg animate-scale-in hover:rotate-1" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse transition-all duration-300">
                  <div className="text-blue-600 text-3xl font-bold group-hover:scale-125 transition-transform duration-300">🌊</div>
                </div>
                <CardTitle className="text-2xl text-gray-800 group-hover:text-blue-600 transition-colors">Desalination Tech</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Learn about cutting-edge solar desalination methods and sustainable water purification technologies
                </CardDescription>
                <Link to="/features">
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300" size="lg">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg animate-scale-in hover:rotate-1" style={{animationDelay: '0.4s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce transition-all duration-300">
                  <Lightbulb className="text-blue-600 group-hover:scale-125 transition-transform duration-300" size={40} />
                </div>
                <CardTitle className="text-2xl text-gray-800 group-hover:text-blue-600 transition-colors">Community Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Share and discover practical water conservation tips from our global community of environmental advocates
                </CardDescription>
                <Link to="/tips">
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300" size="lg">
                    Get Tips
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-transparent opacity-30 animate-gradient-x"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 animate-slide-in-left">
            We believe access to clean water is a fundamental human right. Through innovative desalination technology, 
            community education, and global collaboration, we're working to solve the world's water crisis one drop at a time.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center animate-scale-in hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-glow">2.2B</div>
              <p className="text-gray-600">People lack access to clean water</p>
            </div>
            <div className="text-center animate-scale-in hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-glow">97%</div>
              <p className="text-gray-600">Of Earth's water is salt water</p>
            </div>
            <div className="text-center animate-scale-in hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-glow">21K+</div>
              <p className="text-gray-600">Desalination plants worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

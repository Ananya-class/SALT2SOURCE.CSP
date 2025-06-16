
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Map, User, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            SALT2SOURCE
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transforming Salt Water into Clean, Sustainable Solutions
          </p>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Join our mission to make clean water accessible worldwide through innovative desalination technology and community awareness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/features">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
                Explore Features
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
        <ArrowDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" size={32} />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how SALT2SOURCE is revolutionizing access to clean water through technology, education, and community engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Map className="text-blue-600" size={40} />
                </div>
                <CardTitle className="text-2xl text-gray-800">Interactive Map</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Explore global water scarcity data and desalination facilities through our comprehensive interactive mapping system
                </CardDescription>
                <Link to="/map">
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700" size="lg">
                    View Map
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <div className="text-blue-600 text-3xl font-bold">🌊</div>
                </div>
                <CardTitle className="text-2xl text-gray-800">Desalination Tech</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Learn about cutting-edge solar desalination methods and sustainable water purification technologies
                </CardDescription>
                <Link to="/features">
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700" size="lg">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <div className="text-blue-600 text-3xl font-bold">💡</div>
                </div>
                <CardTitle className="text-2xl text-gray-800">Community Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Share and discover practical water conservation tips from our global community of environmental advocates
                </CardDescription>
                <Link to="/tips">
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700" size="lg">
                    Get Tips
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We believe access to clean water is a fundamental human right. Through innovative desalination technology, 
            community education, and global collaboration, we're working to solve the world's water crisis one drop at a time.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.2B</div>
              <p className="text-gray-600">People lack access to clean water</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">97%</div>
              <p className="text-gray-600">Of Earth's water is salt water</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">21K+</div>
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

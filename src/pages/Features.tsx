
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  const desalinationMethods = [
    {
      title: "Solar Desalination",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "☀️",
      description: "Harness solar energy to power desalination processes, providing sustainable and cost-effective clean water solutions for remote communities.",
      benefits: ["100% Renewable Energy", "Low Operating Costs", "Minimal Environmental Impact"]
    },
    {
      title: "Reverse Osmosis",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💧",
      description: "Advanced membrane technology that removes salt and impurities from seawater through high-pressure filtration systems.",
      benefits: ["High Efficiency", "Proven Technology", "Scalable Solutions"]
    },
    {
      title: "Multi-Stage Flash",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🔥",
      description: "Thermal desalination process that uses heat to evaporate seawater and produce fresh water through multiple distillation stages.",
      benefits: ["Large Scale Production", "High Water Quality", "Reliable Process"]
    },
    {
      title: "Electrodialysis",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "⚡",
      description: "Uses electrical current to remove salt ions from water through selective ion-exchange membranes.",
      benefits: ["Energy Efficient", "Selective Removal", "Compact Design"]
    },
    {
      title: "Vapor Compression",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🌪️",
      description: "Mechanical vapor compression technology that recycles energy to reduce power consumption in the desalination process.",
      benefits: ["Energy Recovery", "Reduced Emissions", "Cost Effective"]
    },
    {
      title: "Forward Osmosis",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🔬",
      description: "Innovative membrane process using natural osmotic pressure differences to purify water with lower energy requirements.",
      benefits: ["Ultra-Low Energy", "Emerging Technology", "High Potential"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Desalination Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge methods for transforming seawater into clean, drinkable water. 
            Each technology offers unique advantages for different applications and environments.
          </p>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {desalinationMethods.map((method, index) => (
              <Card key={method.title} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden animate-fade-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={method.image} 
                    alt={method.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 text-4xl bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                    {method.icon}
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-gray-800 group-hover:text-blue-600 transition-colors">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {method.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {method.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">The Future of Water Technology</h2>
          <p className="text-xl mb-12 opacity-90 max-w-4xl mx-auto">
            As technology advances, we're developing more efficient, sustainable, and cost-effective 
            methods to provide clean water to communities worldwide. Join us in this revolutionary journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
              <p className="opacity-80">Environmentally friendly processes that protect our oceans</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Affordable</h3>
              <p className="opacity-80">Cost-effective solutions accessible to all communities</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-2">Innovative</h3>
              <p className="opacity-80">Cutting-edge research driving breakthrough technologies</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;

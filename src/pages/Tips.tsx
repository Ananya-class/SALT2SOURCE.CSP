
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Tips = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tip: ''
  });

  const communityTips = [
    {
      title: "Collect Rainwater",
      author: "Sarah M.",
      location: "California, USA",
      tip: "Install a simple rain barrel system to collect water from your roof. Use this water for gardening and outdoor cleaning. A single inch of rain on a 1,000 square foot roof yields about 600 gallons of water!",
      likes: 234,
      category: "Collection"
    },
    {
      title: "Fix Leaks Immediately",
      author: "James L.",
      location: "Sydney, Australia",
      tip: "A single dripping faucet can waste over 3,000 gallons per year. Check your faucets, pipes, and toilets regularly. Most leaks are easy DIY fixes that can save hundreds of dollars on your water bill.",
      likes: 189,
      category: "Conservation"
    },
    {
      title: "Greywater Systems",
      author: "Maria G.",
      location: "Barcelona, Spain",
      tip: "Reuse water from your washing machine and bathroom sinks for irrigation. Simple greywater systems can reduce household water consumption by up to 40%. Make sure to use biodegradable soaps!",
      likes: 156,
      category: "Recycling"
    },
    {
      title: "Smart Irrigation",
      author: "Ahmed K.",
      location: "Dubai, UAE",
      tip: "Install drip irrigation systems and smart timers for your garden. Water early morning or late evening to reduce evaporation. Mulch around plants to retain moisture and reduce watering needs by 25-50%.",
      likes: 203,
      category: "Gardening"
    },
    {
      title: "Shower Efficiency",
      author: "Emma R.",
      location: "London, UK",
      tip: "Take shorter showers and install low-flow showerheads. A 5-minute shower uses about 25 gallons, while a 10-minute shower uses 50 gallons. Challenge your family to keep showers under 5 minutes!",
      likes: 178,
      category: "Household"
    },
    {
      title: "Water-Wise Landscaping",
      author: "Carlos M.",
      location: "Phoenix, USA",
      tip: "Choose native plants that are adapted to your local climate. They require less water and maintenance. Group plants with similar water needs together and use drought-resistant varieties.",
      likes: 167,
      category: "Landscaping"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.tip) {
      toast({
        title: "Tip Submitted Successfully!",
        description: "Thank you for sharing your water conservation tip with the community.",
      });
      setFormData({ name: '', email: '', tip: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Community Water Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover practical water conservation tips shared by our global community. 
            Learn from others and share your own water-saving strategies.
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityTips.map((tip, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tip.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span>❤️ {tip.likes}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                    {tip.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <User size={16} className="mr-1" />
                    <span className="mr-3">{tip.author}</span>
                    <span className="text-gray-400">📍 {tip.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {tip.tip}
                  </CardDescription>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      Try This Tip
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Tip Form */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Share Your Water Tip</h2>
            <p className="text-xl opacity-90">
              Help others conserve water by sharing your practical tips and experiences
            </p>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={20} />
                      <Input
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="pl-10 bg-white/90 border-white/30 text-gray-800"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10 bg-white/90 border-white/30 text-gray-800"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Water Conservation Tip</label>
                  <Textarea
                    placeholder="Share your practical water conservation tip with the community..."
                    value={formData.tip}
                    onChange={(e) => setFormData({...formData, tip: e.target.value})}
                    className="min-h-32 bg-white/90 border-white/30 text-gray-800"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  Submit Your Tip
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tips;

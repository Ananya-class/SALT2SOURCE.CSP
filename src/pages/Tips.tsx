
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Droplets, Lightbulb, Users, MapPin, Heart, Send } from "lucide-react";
import { useState } from "react";

const Tips = () => {
  const [newTip, setNewTip] = useState({ name: "", location: "", tip: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("New tip submitted:", newTip);
    setNewTip({ name: "", location: "", tip: "" });
  };

  const communityTips = [
    {
      id: 1,
      author: "Priya Sharma",
      location: "Rajasthan, Jaipur",
      tip: "In desert areas like Rajasthan, we collect rainwater during monsoon in underground tanks (tankas). Even a small 10x10 feet tank can store enough water for 2-3 months. Line it with local stone and lime mortar.",
      category: "Rainwater Harvesting",
      likes: 142,
      verified: true
    },
    {
      id: 2,
      author: "Ravi Kumar",
      location: "Tamil Nadu, Chennai",
      tip: "We installed a simple greywater system in our apartment. Water from washing machines and kitchen sinks (after removing soap) goes to our terrace garden. Saves 50-60 liters daily!",
      category: "Water Recycling",
      likes: 89,
      verified: true
    },
    {
      id: 3,
      author: "Meera Patel",
      location: "Gujarat, Ahmedabad",
      tip: "During water scarcity, we use earthen pots (matkas) to store and cool water naturally. They keep water 4-5 degrees cooler than room temperature and reduce the need for refrigeration.",
      category: "Traditional Methods",
      likes: 156,
      verified: true
    },
    {
      id: 4,
      author: "Suresh Reddy",
      location: "Karnataka, Bengaluru",
      tip: "Installed a simple water meter reader app on my phone. By tracking daily usage, our family reduced consumption from 800 liters to 600 liters per day. Small changes, big impact!",
      category: "Water Monitoring",
      likes: 73,
      verified: false
    },
    {
      id: 5,
      author: "Anjali Singh",
      location: "Maharashtra, Pune",
      tip: "We created a small borewell recharge pit in our compound. During monsoon, all roof water goes there. Our neighbors noticed their water levels improved too!",
      category: "Groundwater Recharge",
      likes: 198,
      verified: true
    },
    {
      id: 6,
      author: "Kiran Nair",
      location: "Kerala, Kochi",
      tip: "In Kerala's high rainfall areas, we use banana leaves and coconut fibers to filter rainwater naturally before storage. It's completely organic and works amazingly well.",
      category: "Natural Filtration",
      likes: 134,
      verified: true
    },
    {
      id: 7,
      author: "Deepak Joshi",
      location: "Uttar Pradesh, Lucknow",
      tip: "Started a neighborhood 'water-sharing' group. During summer, houses with borewells share water with those facing shortage. Unity is strength!",
      category: "Community Initiatives",
      likes: 267,
      verified: true
    },
    {
      id: 8,
      author: "Rekha Iyer",
      location: "Andhra Pradesh, Hyderabad",
      tip: "We use rice water (after washing rice) for watering plants. It's rich in nutrients and doesn't waste the water. Our curry leaf and tulsi plants love it!",
      category: "Household Tips",
      likes: 91,
      verified: false
    },
    {
      id: 9,
      author: "Manoj Thakur",
      location: "Himachal Pradesh, Shimla",
      tip: "In mountain areas, we collect spring water early morning when it's cleanest. Store in copper vessels - our grandparents' wisdom still works best!",
      category: "Traditional Wisdom",
      likes: 122,
      verified: true
    },
    {
      id: 10,
      author: "Sunita Gupta",
      location: "Delhi, New Delhi",
      tip: "Created a WhatsApp group for our society to share water-saving tips. We reduced building water consumption by 25% in 6 months through collective efforts!",
      category: "Technology & Community",
      likes: 185,
      verified: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Rainwater Harvesting": "bg-blue-100 text-blue-800",
      "Water Recycling": "bg-green-100 text-green-800",
      "Traditional Methods": "bg-yellow-100 text-yellow-800",
      "Water Monitoring": "bg-purple-100 text-purple-800",
      "Groundwater Recharge": "bg-indigo-100 text-indigo-800",
      "Natural Filtration": "bg-teal-100 text-teal-800",
      "Community Initiatives": "bg-orange-100 text-orange-800",
      "Household Tips": "bg-pink-100 text-pink-800",
      "Traditional Wisdom": "bg-amber-100 text-amber-800",
      "Technology & Community": "bg-violet-100 text-violet-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const quickTips = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Monsoon Preparation",
      tip: "Clean your roof and gutters before monsoon to ensure clean rainwater collection"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: "Daily Habits",
      tip: "Turn off tap while brushing teeth - saves 6 liters per minute"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community Action",
      tip: "Organize neighborhood water conservation drives during summer months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Community Water Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Learn from real experiences of people across India. Discover practical, 
            time-tested water conservation methods that work in Indian conditions.
          </p>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {quickTips.map((tip, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{tip.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Tips */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tips from Across India</h2>
            <p className="text-lg text-gray-600">Real solutions from real people in different regions of India</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {communityTips.map((tip) => (
              <Card key={tip.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {tip.author}
                        {tip.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Verified
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {tip.location}
                      </CardDescription>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(tip.category)}`}>
                      {tip.category}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">{tip.tip}</p>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                      <Heart className="w-4 h-4 mr-1" />
                      {tip.likes}
                    </Button>
                    <span className="text-sm text-gray-500">
                      Helpful for similar regions
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit New Tip */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800 flex items-center justify-center gap-2">
                <Send className="w-6 h-6 text-blue-600" />
                Share Your Water-Saving Tip
              </CardTitle>
              <CardDescription className="text-lg">
                Help your fellow Indians by sharing your water conservation experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={newTip.name}
                      onChange={(e) => setNewTip({...newTip, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Location (State, City)
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., Maharashtra, Mumbai"
                      value={newTip.location}
                      onChange={(e) => setNewTip({...newTip, location: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Water Conservation Tip
                  </label>
                  <Textarea
                    placeholder="Share your practical water conservation tip. Be specific about methods, quantities, and results you've seen..."
                    rows={5}
                    value={newTip.tip}
                    onChange={(e) => setNewTip({...newTip, tip: e.target.value})}
                    required
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                    Share Your Tip
                  </Button>
                </div>
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

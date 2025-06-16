
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Droplets, Map, Users, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Features = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  const features = [
    {
      id: "desalination",
      icon: <Droplets className="w-12 h-12 text-blue-600" />,
      title: "Solar Desalination Technology",
      description: "Learn about sustainable water purification methods using solar energy",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailedContent: {
        overview: "Solar desalination harnesses the power of the sun to convert seawater into clean, drinkable water. This sustainable technology is revolutionizing water access in water-scarce regions across India.",
        methods: [
          {
            name: "Solar Still Distillation",
            description: "Uses solar energy to evaporate seawater, leaving salt behind and condensing pure water vapor.",
            efficiency: "3-5 liters per day per square meter"
          },
          {
            name: "Solar Humidification-Dehumidification",
            description: "Air is heated by solar energy, humidified with seawater, then dehumidified to produce fresh water.",
            efficiency: "10-15 liters per day per square meter"
          },
          {
            name: "Solar Membrane Distillation",
            description: "Combines solar thermal energy with membrane technology for efficient water purification.",
            efficiency: "20-30 liters per day per square meter"
          }
        ],
        benefits: [
          "Zero electricity costs - powered entirely by solar energy",
          "Environmentally friendly with no carbon emissions",
          "Low maintenance requirements",
          "Suitable for remote coastal areas",
          "Produces high-quality drinking water"
        ],
        applications: [
          "Coastal villages in Tamil Nadu and Gujarat",
          "Island communities in Lakshadweep",
          "Remote areas with high salinity groundwater",
          "Emergency water supply during droughts"
        ]
      }
    },
    {
      id: "mapping",
      icon: <Map className="w-12 h-12 text-green-600" />,
      title: "Water Source Mapping",
      description: "Interactive maps showing water availability and quality across India",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailedContent: {
        overview: "Our comprehensive water mapping system provides real-time data on water sources, quality, and accessibility across India, helping communities make informed decisions about water management.",
        features: [
          {
            name: "Real-time Water Quality Monitoring",
            description: "Live data from sensors monitoring pH, TDS, fluoride, and arsenic levels in water sources."
          },
          {
            name: "Groundwater Level Tracking",
            description: "Monitor groundwater depletion and recharge patterns across different regions."
          },
          {
            name: "Seasonal Availability Patterns",
            description: "Historical data showing water availability during monsoon and dry seasons."
          },
          {
            name: "Community Reporting System",
            description: "Local communities can report water issues and updates directly through the platform."
          }
        ],
        coverage: [
          "28 states and 8 union territories",
          "Over 50,000 water sources mapped",
          "500+ real-time monitoring stations",
          "Community reports from 1000+ villages"
        ],
        impact: [
          "Helped 200+ villages identify clean water sources",
          "Reduced waterborne diseases by 40% in covered areas",
          "Enabled targeted government interventions",
          "Improved water resource management planning"
        ]
      }
    },
    {
      id: "community",
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Community Engagement",
      description: "Building local networks for water conservation and awareness",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailedContent: {
        overview: "Community engagement is at the heart of sustainable water management. We work with local communities across India to build awareness, share knowledge, and implement water conservation practices.",
        programs: [
          {
            name: "Water Conservation Workshops",
            description: "Interactive sessions teaching rainwater harvesting, greywater recycling, and water-efficient farming.",
            reach: "5000+ participants across 200 villages"
          },
          {
            name: "School Water Education Programs",
            description: "Teaching students about water cycle, conservation, and the importance of clean water access.",
            reach: "1000+ schools, 50,000+ students"
          },
          {
            name: "Women's Water Committees",
            description: "Empowering women to lead water management initiatives in their communities.",
            reach: "800+ committees in rural areas"
          },
          {
            name: "Farmer Water Efficiency Training",
            description: "Training farmers in drip irrigation, crop selection, and water-saving techniques.",
            reach: "10,000+ farmers trained"
          }
        ],
        success_stories: [
          "Village of Hiware Bazar, Maharashtra - transformed from drought-prone to water-sufficient",
          "Rajsamadhiyala, Gujarat - community-led watershed management",
          "Ralegan Siddhi, Maharashtra - pioneering water conservation model",
          "Tarun Bharat Sangh initiatives in Rajasthan - reviving traditional water systems"
        ]
      }
    },
    {
      id: "education",
      icon: <Lightbulb className="w-12 h-12 text-orange-600" />,
      title: "Water Conservation Tips",
      description: "Practical advice for saving water in daily life",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailedContent: {
        overview: "Simple yet effective water conservation practices that every household can adopt to reduce water consumption and contribute to sustainable water management.",
        household_tips: [
          {
            category: "Kitchen",
            tips: [
              "Use a bowl to wash fruits and vegetables instead of running water",
              "Fix leaky taps immediately - a single drop per second wastes 5 liters daily",
              "Reuse water from washing rice and vegetables for watering plants",
              "Install aerators on taps to reduce water flow by 50%"
            ]
          },
          {
            category: "Bathroom",
            tips: [
              "Take shorter showers - reduce by 2 minutes to save 20 liters",
              "Use a bucket instead of shower to save up to 100 liters per bath",
              "Install dual-flush toilets to reduce water usage by 30%",
              "Turn off taps while brushing teeth or shaving"
            ]
          },
          {
            category: "Garden",
            tips: [
              "Water plants early morning or evening to reduce evaporation",
              "Use drip irrigation or soaker hoses for efficient watering",
              "Collect rainwater in barrels for garden irrigation",
              "Choose native plants that require less water"
            ]
          }
        ],
        advanced_techniques: [
          "Greywater recycling systems for toilet flushing and irrigation",
          "Rainwater harvesting with storage tanks",
          "Permeable paving to increase groundwater recharge",
          "Smart irrigation systems with soil moisture sensors"
        ],
        potential_savings: "A typical household can save 20-30% of water consumption by following these practices"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Our Features
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how SALT2SOURCE is revolutionizing water access across India through 
            innovative technology, community engagement, and sustainable solutions.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {features.map((feature, index) => (
              <Card key={feature.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  </div>
                  
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      {feature.icon}
                      <h2 className="text-3xl font-bold text-gray-800">{feature.title}</h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <Button 
                      onClick={() => toggleFeature(feature.id)}
                      className="self-start bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg"
                    >
                      {expandedFeature === feature.id ? (
                        <>
                          Show Less <ChevronUp className="ml-2 w-5 h-5" />
                        </>
                      ) : (
                        <>
                          Learn More <ChevronDown className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedFeature === feature.id && (
                  <div className="border-t bg-gray-50 p-8 animate-fade-in">
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
                      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        {feature.detailedContent.overview}
                      </p>

                      {feature.detailedContent.methods && (
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Desalination Methods</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {feature.detailedContent.methods.map((method, idx) => (
                              <Card key={idx} className="p-4">
                                <h5 className="font-semibold text-blue-600 mb-2">{method.name}</h5>
                                <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                                <p className="text-sm font-medium text-green-600">Efficiency: {method.efficiency}</p>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {feature.detailedContent.features && (
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {feature.detailedContent.features.map((item, idx) => (
                              <Card key={idx} className="p-4">
                                <h5 className="font-semibold text-green-600 mb-2">{item.name}</h5>
                                <p className="text-sm text-gray-600">{item.description}</p>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {feature.detailedContent.programs && (
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Community Programs</h4>
                          <div className="space-y-4">
                            {feature.detailedContent.programs.map((program, idx) => (
                              <Card key={idx} className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-purple-600">{program.name}</h5>
                                  <span className="text-sm text-green-600 font-medium">{program.reach}</span>
                                </div>
                                <p className="text-sm text-gray-600">{program.description}</p>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {feature.detailedContent.household_tips && (
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Household Water Conservation</h4>
                          <div className="grid md:grid-cols-3 gap-6">
                            {feature.detailedContent.household_tips.map((category, idx) => (
                              <Card key={idx} className="p-4">
                                <h5 className="font-semibold text-orange-600 mb-3">{category.category}</h5>
                                <ul className="space-y-2">
                                  {category.tips.map((tip, tipIdx) => (
                                    <li key={tipIdx} className="text-sm text-gray-600 flex items-start">
                                      <span className="text-blue-500 mr-2">•</span>
                                      {tip}
                                    </li>
                                  ))}
                                </ul>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {(feature.detailedContent.benefits || feature.detailedContent.applications || feature.detailedContent.coverage || feature.detailedContent.impact || feature.detailedContent.success_stories || feature.detailedContent.advanced_techniques) && (
                        <div className="grid md:grid-cols-2 gap-8">
                          {feature.detailedContent.benefits && (
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h4>
                              <ul className="space-y-2">
                                {feature.detailedContent.benefits.map((benefit, idx) => (
                                  <li key={idx} className="text-gray-600 flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {feature.detailedContent.applications && (
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-3">Applications in India</h4>
                              <ul className="space-y-2">
                                {feature.detailedContent.applications.map((app, idx) => (
                                  <li key={idx} className="text-gray-600 flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    {app}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {feature.detailedContent.coverage && (
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-3">Coverage</h4>
                              <ul className="space-y-2">
                                {feature.detailedContent.coverage.map((item, idx) => (
                                  <li key={idx} className="text-gray-600 flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {feature.detailedContent.impact && (
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-3">Impact</h4>
                              <ul className="space-y-2">
                                {feature.detailedContent.impact.map((item, idx) => (
                                  <li key={idx} className="text-gray-600 flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {feature.detailedContent.success_stories && (
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-3">Success Stories</h4>
                              <ul className="space-y-2">
                                {feature.detailedContent.success_stories.map((story, idx) => (
                                  <li key={idx} className="text-gray-600 flex items-start">
                                    <span className="text-green-500 mr-2">★</span>
                                    {story}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {feature.detailedContent.advanced_techniques && (
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-3">Advanced Techniques</h4>
                              <ul className="space-y-2">
                                {feature.detailedContent.advanced_techniques.map((technique, idx) => (
                                  <li key={idx} className="text-gray-600 flex items-start">
                                    <span className="text-purple-500 mr-2">◆</span>
                                    {technique}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {feature.detailedContent.potential_savings && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <p className="text-blue-800 font-medium">
                            💧 {feature.detailedContent.potential_savings}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;

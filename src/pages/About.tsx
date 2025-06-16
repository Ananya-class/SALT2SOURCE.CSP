
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Arjun Mehta",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Environmental engineer with 12+ years experience in water technology. PhD from IIT Delhi in Water Resources Engineering. Previously worked with ISRO on satellite-based water monitoring systems.",
      expertise: "Water Technology, Satellite Monitoring, Policy Development"
    },
    {
      name: "Priya Krishnan",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Software architect specializing in geospatial systems and IoT solutions. MS from IISc Bangalore. Led the development of India's first real-time water quality monitoring network.",
      expertise: "IoT Systems, Geospatial Technology, Data Analytics"
    },
    {
      name: "Dr. Rajesh Gupta",
      role: "Head of Research",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Marine scientist and desalination expert. PhD from NIOT Chennai. Published 50+ research papers on sustainable desalination technologies and their application in Indian coastal regions.",
      expertise: "Desalination Technology, Marine Sciences, Sustainable Solutions"
    },
    {
      name: "Kavya Sharma",
      role: "Community Outreach Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Social impact strategist with grassroots experience across rural India. MA in Development Studies from JNU. Successfully implemented water conservation programs in 200+ villages.",
      expertise: "Community Development, Rural Outreach, Social Impact"
    }
  ];

  const milestones = [
    { year: "2020", event: "SALT2SOURCE founded with mission to solve India's water crisis through technology" },
    { year: "2021", event: "First solar desalination pilot project launched in Gujarat coastal villages" },
    { year: "2022", event: "Partnership with IIT Delhi for advanced water monitoring research" },
    { year: "2023", event: "Launched community water mapping initiative across 10 Indian states" },
    { year: "2024", event: "Reached 100+ villages with clean water access solutions" },
    { year: "2025", event: "Advanced water analytics platform serving 500+ communities nationwide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            About SALT2SOURCE
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of Indian engineers, scientists, and social advocates working to solve 
            India's water crisis through innovative desalination technology, community engagement, and 
            data-driven solutions tailored for Indian conditions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed opacity-90">
                  To make clean, safe drinking water accessible to every Indian by developing sustainable, 
                  affordable desalination and water purification technologies while fostering community-driven 
                  water conservation practices across the nation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-600 to-green-700 text-white">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <CardTitle className="text-3xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed opacity-90">
                  A water-secure India where every village, town, and city has reliable access to clean water. 
                  Where traditional wisdom meets modern technology to create sustainable water solutions 
                  for the world's largest democracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate experts from India's leading institutions, united by a common goal: 
              solving India's water challenges with innovation and community spirit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-blue-200 text-lg">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-blue-600 mb-2">Expertise:</h4>
                    <p className="text-sm text-gray-600">{member.expertise}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our mission to transform water access across India</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <p className="text-gray-700 text-lg leading-relaxed">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact Across India</h2>
            <p className="text-xl opacity-90">Numbers that reflect our commitment to water-secure India</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1.5M+</div>
              <p className="opacity-80">Liters of Clean Water Produced Daily</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="opacity-80">Villages & Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">12</div>
              <p className="opacity-80">Indian States Covered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25K+</div>
              <p className="opacity-80">Active Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Context */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why India Needs SALT2SOURCE</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Coastal Advantage</h3>
              <p className="text-gray-600">
                With 7,500+ km of coastline, India has immense potential for sustainable 
                desalination to supplement freshwater resources in coastal states.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Rural Focus</h3>
              <p className="text-gray-600">
                68% of India lives in rural areas where water access remains challenging. 
                Our community-driven approach addresses this ground reality.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Solar Abundance</h3>
              <p className="text-gray-600">
                India receives 300+ sunny days annually, making solar-powered 
                desalination economically viable and environmentally sustainable.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

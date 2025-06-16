
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Environmental engineer with 15+ years in water technology and sustainable solutions."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Software architect specializing in environmental data systems and renewable energy tech."
    },
    {
      name: "Dr. Amira Hassan",
      role: "Chief Scientist",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Marine biologist and desalination researcher with expertise in sustainable water purification."
    },
    {
      name: "James Thompson",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Project management expert focused on scaling clean water initiatives globally."
    },
    {
      name: "Elena Volkova",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Social impact strategist building communities around environmental consciousness."
    },
    {
      name: "Dr. Raj Patel",
      role: "Research Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Chemical engineer developing next-generation solar desalination technologies."
    }
  ];

  const milestones = [
    { year: "2020", event: "SALT2SOURCE founded with mission to democratize clean water access" },
    { year: "2021", event: "First solar desalination pilot project launched in California" },
    { year: "2022", event: "Community platform reaches 10,000 active members worldwide" },
    { year: "2023", event: "Partnership with UN Water for global water scarcity mapping" },
    { year: "2024", event: "50+ desalination projects completed across 5 continents" },
    { year: "2025", event: "Launch of advanced water analytics and prediction platform" }
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
            We are a passionate team of engineers, scientists, and advocates working to solve the global water crisis 
            through innovative desalination technology and community empowerment.
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
                  To make clean, safe drinking water accessible to everyone on Earth by developing sustainable, 
                  affordable desalination technologies and fostering global communities committed to water conservation.
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
                  A world where water scarcity is eliminated through innovation, collaboration, and sustainable practices. 
                  Where every community has the tools and knowledge to secure their water future.
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
              Passionate experts from diverse backgrounds united by a common goal: solving the world's water challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
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
            <p className="text-xl text-gray-600">Key milestones in our mission to transform water access globally</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
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
            <h2 className="text-4xl font-bold mb-4">Our Global Impact</h2>
            <p className="text-xl opacity-90">Numbers that reflect our commitment to clean water access</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">2.5M+</div>
              <p className="opacity-80">Gallons of Clean Water Produced</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="opacity-80">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">75+</div>
              <p className="opacity-80">Countries Reached</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <p className="opacity-80">Active Community Members</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const teamMembers = [
    {
      name: "P.Ananya",
      role: "Student Lead",
      image: "/lovable-uploads/c81b2bbb-757f-4116-bdda-002967566eae.png",
      bio: "IT engineering student at VIGNAN'S INSTITUTE OF ENGINEERING FOR WOMEN, Visakhapatnam. Passionate about water conservation and sustainable technology.",
      expertise: "Water Conservation, Community Engagement, Sustainable Technology, Technical Leadership"
    },
    {
      name: "A. Sahithi Aravinda",
      role: "Student",
      image: "/lovable-uploads/eea781a7-99f5-47fe-92fb-edcce279fbf2.png",
      bio: "IT engineering student at VIGNAN'S INSTITUTE OF ENGINEERING FOR WOMEN, Visakhapatnam. Passionate about leveraging technology for social impact.",
      expertise: "Community Development, Rural Outreach, Social Impact"
    },
    {
      name: "K.Uma Sree",
      role: "Student",
      image: "/lovable-uploads/48eb2015-0032-4152-9fb2-5e6867796496.png",
      bio: "IT engineering student at VIGNAN'S INSTITUTE OF ENGINEERING FOR WOMEN, Visakhapatnam. Passionate about using technology to solve real-world problems.",
      expertise: "Desalination Technology, Water Sciences, Sustainable Solutions"
    },
    {
      name: "S. Nalini",
      role: "Student",
      image: "/lovable-uploads/3b8da371-ebe4-44f5-bb46-4edc5cf65b6f",
      bio: "IT engineering student at VIGNAN'S INSTITUTE OF ENGINEERING FOR WOMEN, Visakhapatnam. Passionate about environmental sustainability and community service.",
      expertise: "Community Development, Rural Outreach, Social Impact"
    }
  ];

  const surveyImages = [
    {
      id: 1,
      image: "/lovable-uploads/dafcd9db-48ff-4009-bed8-a13115673070.png",
      title: "Community Water Access Survey",
      description: "Documenting water accessibility challenges in rural communities and understanding daily water collection routines."
    },
    {
      id: 2,
      image: "/lovable-uploads/74868a75-214e-440f-8713-5b198ed1a2e1.png",
      title: "Water Initiative Explanation",
      description: "Explaining the details of our webpage to the people and make them easily understand the importance of water sanitation."
    },
    {
      id: 3,
      image: "/lovable-uploads/b0f93c6f-892a-41c8-9876-3b677c8faadd.png",
      title: "Water Quality Testing Research",
      description: "Conducting comprehensive water quality assessments and collecting data for community health analysis."
    },
    {
      id: 4,
      image: "/lovable-uploads/affe5408-735d-4f20-9fc6-529ef6d0fcbd.png",
      title: "Home Water Conservation Study",
      description: "Studying household water usage patterns and implementing conservation strategies in residential areas."
    }
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
            We are a passionate team of Indian engineering students working to solve 
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
              Passionate students from VIGNAN'S INSTITUTE OF ENGINEERING FOR WOMEN, united by a common goal: 
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

      {/* Our Journey - Survey Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-green-100/20 animate-gradient-x"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 animate-bounce-gentle">
              Our Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slide-in-left">
              Survey & Research Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
              Documenting our field research, community surveys, and data collection efforts to understand 
              water challenges and create sustainable solutions for communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {surveyImages.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border-0 shadow-lg animate-scale-in overflow-hidden hover:rotate-2"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <Badge className="bg-white/90 text-gray-800 mb-2">
                      Research Documentation
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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

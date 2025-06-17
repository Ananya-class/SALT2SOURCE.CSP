
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SurveyGallery = () => {
  const surveyImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Community Water Access Survey",
      description: "Documenting water accessibility challenges in rural communities and understanding daily water collection routines."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Digital Water Mapping Initiative",
      description: "Using technology to map water sources and create digital databases for better resource management."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Water Quality Testing Research",
      description: "Conducting comprehensive water quality assessments and collecting data for community health analysis."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1521322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Home Water Conservation Study",
      description: "Studying household water usage patterns and implementing conservation strategies in residential areas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-green-100/20 animate-gradient-x"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 animate-bounce-gentle">
            Our Research Gallery
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

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-glow">Join Our Research Initiative</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Help us expand our research database by participating in our water access surveys and 
              contributing to our global understanding of water challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse">
                Participate in Survey
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyGallery;

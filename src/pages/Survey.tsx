
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Survey = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    waterSource: '',
    waterConcerns: [] as string[],
    desalinationAwareness: '',
    willingness: '',
    preferredTechnology: ''
  });

  const waterConcernOptions = [
    "Water scarcity in my area",
    "Poor water quality",
    "High water costs",
    "Unreliable water supply",
    "Environmental impact of current water sources",
    "Lack of water conservation awareness"
  ];

  const handleConcernChange = (concern: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        waterConcerns: [...formData.waterConcerns, concern]
      });
    } else {
      setFormData({
        ...formData,
        waterConcerns: formData.waterConcerns.filter(c => c !== concern)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast({
        title: "Survey Submitted Successfully!",
        description: "Thank you for your valuable feedback. We'll use this to improve our services.",
      });
      setFormData({
        name: '',
        email: '',
        message: '',
        waterSource: '',
        waterConcerns: [],
        desalinationAwareness: '',
        willingness: '',
        preferredTechnology: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Community Survey & Feedback
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Help us understand your water challenges and improve our solutions. 
            Your feedback shapes the future of clean water access.
          </p>
        </div>
      </section>

      {/* Survey Form */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
              <CardTitle className="text-3xl font-bold">Water Access Survey</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Share your experiences and help us build better water solutions
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Contact Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={20} />
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Water Source */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Water Access Questions
                  </h3>
                  
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700">What is your primary water source?</Label>
                    <RadioGroup value={formData.waterSource} onValueChange={(value) => setFormData({...formData, waterSource: value})}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="municipal" id="municipal" />
                        <Label htmlFor="municipal">Municipal water supply</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="well" id="well" />
                        <Label htmlFor="well">Private well</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bottled" id="bottled" />
                        <Label htmlFor="bottled">Bottled water</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other source</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Water Concerns */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium text-gray-700">What water-related concerns do you have? (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {waterConcernOptions.map((concern, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox
                          id={`concern-${index}`}
                          checked={formData.waterConcerns.includes(concern)}
                          onCheckedChange={(checked) => handleConcernChange(concern, checked as boolean)}
                        />
                        <Label htmlFor={`concern-${index}`} className="text-sm text-gray-700">
                          {concern}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desalination Awareness */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">How familiar are you with desalination technology?</Label>
                  <RadioGroup value={formData.desalinationAwareness} onValueChange={(value) => setFormData({...formData, desalinationAwareness: value})}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very-familiar" id="very-familiar" />
                      <Label htmlFor="very-familiar">Very familiar</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="somewhat-familiar" id="somewhat-familiar" />
                      <Label htmlFor="somewhat-familiar">Somewhat familiar</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-familiar" id="not-familiar" />
                      <Label htmlFor="not-familiar">Not familiar</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never-heard" id="never-heard" />
                      <Label htmlFor="never-heard">Never heard of it</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Willingness to Adopt */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">Would you consider using desalinated water if it were available in your area?</Label>
                  <RadioGroup value={formData.willingness} onValueChange={(value) => setFormData({...formData, willingness: value})}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="definitely" id="definitely" />
                      <Label htmlFor="definitely">Definitely yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="probably" id="probably" />
                      <Label htmlFor="probably">Probably yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maybe" id="maybe" />
                      <Label htmlFor="maybe">Maybe</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="probably-not" id="probably-not" />
                      <Label htmlFor="probably-not">Probably not</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="definitely-not" id="definitely-not" />
                      <Label htmlFor="definitely-not">Definitely not</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Additional Feedback */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Additional Feedback
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Share your thoughts, suggestions, or experiences related to water access and conservation *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your water challenges, ideas for improvement, or any other feedback you'd like to share..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-32 resize-y"
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Submit Survey
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  Thank you for taking the time to help us improve water access solutions worldwide.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Survey;

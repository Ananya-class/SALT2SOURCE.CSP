
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FileText, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const Survey = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    waterSource: '',
    waterConcerns: [] as string[],
    desalinationAwareness: '',
    willingness: '',
    preferredTechnology: '',
    message: ''
  });

  const waterConcernOptions = [
    'Water scarcity',
    'Poor water quality',
    'High cost of clean water',
    'Lack of access to safe drinking water',
    'Environmental pollution',
    'Saltwater intrusion',
    'Groundwater depletion'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in your name and email.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    const { error } = await supabase
      .from('survey_responses')
      .insert([{
        user_id: user?.id || null,
        name: formData.name,
        email: formData.email,
        water_source: formData.waterSource,
        water_concerns: formData.waterConcerns,
        desalination_awareness: formData.desalinationAwareness,
        willingness: formData.willingness,
        preferred_technology: formData.preferredTechnology,
        message: formData.message
      }]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to submit survey. Please try again.",
        variant: "destructive"
      });
      console.error('Error submitting survey:', error);
    } else {
      toast({
        title: "Survey Submitted!",
        description: "Thank you for participating in our water sustainability survey.",
      });
      setFormData({
        name: '',
        email: '',
        waterSource: '',
        waterConcerns: [],
        desalinationAwareness: '',
        willingness: '',
        preferredTechnology: '',
        message: ''
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Water Sustainability Survey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Help us understand water challenges in your community. Your responses will guide 
            our efforts to develop better water solutions and desalination technologies.
          </p>
        </div>
      </section>

      {/* Survey Form */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Share Your Water Story</CardTitle>
              <CardDescription className="text-lg">
                Your insights help us build better water solutions for communities across India
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address *</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                {/* Water Source */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">What is your primary source of water?</Label>
                  <RadioGroup 
                    value={formData.waterSource} 
                    onValueChange={(value) => setFormData({...formData, waterSource: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="municipal" id="municipal" />
                      <Label htmlFor="municipal">Municipal water supply</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="borewell" id="borewell" />
                      <Label htmlFor="borewell">Borewell/Groundwater</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="well" id="well" />
                      <Label htmlFor="well">Open well</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="river" id="river" />
                      <Label htmlFor="river">River/Lake</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rainwater" id="rainwater" />
                      <Label htmlFor="rainwater">Rainwater harvesting</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Water Concerns */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">What are your main water-related concerns? (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {waterConcernOptions.map((concern) => (
                      <div key={concern} className="flex items-center space-x-2">
                        <Checkbox
                          id={concern}
                          checked={formData.waterConcerns.includes(concern)}
                          onCheckedChange={(checked) => handleConcernChange(concern, checked as boolean)}
                        />
                        <Label htmlFor={concern} className="text-sm">{concern}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desalination Awareness */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">How familiar are you with desalination technology?</Label>
                  <RadioGroup 
                    value={formData.desalinationAwareness} 
                    onValueChange={(value) => setFormData({...formData, desalinationAwareness: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very-familiar" id="very-familiar" />
                      <Label htmlFor="very-familiar">Very familiar</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="somewhat-familiar" id="somewhat-familiar" />
                      <Label htmlFor="somewhat-familiar">Somewhat familiar</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="heard-of-it" id="heard-of-it" />
                      <Label htmlFor="heard-of-it">I've heard of it</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-familiar" id="not-familiar" />
                      <Label htmlFor="not-familiar">Not familiar at all</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Willingness to Adopt */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Would you be willing to use desalinated water in your community?</Label>
                  <RadioGroup 
                    value={formData.willingness} 
                    onValueChange={(value) => setFormData({...formData, willingness: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very-willing" id="very-willing" />
                      <Label htmlFor="very-willing">Very willing</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="willing" id="willing" />
                      <Label htmlFor="willing">Willing if affordable</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unsure" id="unsure" />
                      <Label htmlFor="unsure">Unsure</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unwilling" id="unwilling" />
                      <Label htmlFor="unwilling">Not willing</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Preferred Technology */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Which water treatment technology interests you most?</Label>
                  <RadioGroup 
                    value={formData.preferredTechnology} 
                    onValueChange={(value) => setFormData({...formData, preferredTechnology: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="solar-desalination" id="solar-desalination" />
                      <Label htmlFor="solar-desalination">Solar-powered desalination</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ro-systems" id="ro-systems" />
                      <Label htmlFor="ro-systems">Reverse Osmosis (RO) systems</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="water-recycling" id="water-recycling" />
                      <Label htmlFor="water-recycling">Water recycling systems</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="filtration" id="filtration" />
                      <Label htmlFor="filtration">Advanced filtration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unsure-tech" id="unsure-tech" />
                      <Label htmlFor="unsure-tech">I'm not sure</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Additional Comments */}
                <div className="space-y-2">
                  <Label>Additional Comments or Suggestions</Label>
                  <Textarea
                    placeholder="Share any additional thoughts about water challenges in your area or suggestions for solutions..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={loading}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? 'Submitting Survey...' : 'Submit Survey'}
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

export default Survey;

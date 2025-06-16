
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, MapPin, Calendar, Heart, Plus, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface CommunityTip {
  id: string;
  author_name: string;
  location: string;
  tip_content: string;
  category: string;
  likes: number;
  verified: boolean;
  created_at: string;
}

const Tips = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [tips, setTips] = useState<CommunityTip[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    authorName: '',
    location: '',
    tipContent: '',
    category: ''
  });

  const categories = [
    'Water Conservation',
    'Rainwater Harvesting',
    'Greywater Recycling',
    'Solar Desalination',
    'Community Solutions',
    'Home Filtration',
    'Awareness & Education'
  ];

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('community_tips')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tips:', error);
      toast({
        title: "Error",
        description: "Failed to load community tips",
        variant: "destructive"
      });
    } else {
      setTips(data || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.authorName || !formData.location || !formData.tipContent || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setSubmitLoading(true);
    
    const { error } = await supabase
      .from('community_tips')
      .insert([{
        user_id: user?.id || null,
        author_name: formData.authorName,
        location: formData.location,
        tip_content: formData.tipContent,
        category: formData.category
      }]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to submit tip. Please try again.",
        variant: "destructive"
      });
      console.error('Error submitting tip:', error);
    } else {
      toast({
        title: "Tip Submitted!",
        description: "Thank you for sharing your water conservation tip with the community.",
      });
      setFormData({
        authorName: '',
        location: '',
        tipContent: '',
        category: ''
      });
      setShowForm(false);
      fetchTips(); // Refresh the tips list
    }
    
    setSubmitLoading(false);
  };

  const handleLike = async (tipId: string, currentLikes: number) => {
    const { error } = await supabase
      .from('community_tips')
      .update({ likes: currentLikes + 1 })
      .eq('id', tipId);

    if (error) {
      console.error('Error updating likes:', error);
    } else {
      setTips(tips.map(tip => 
        tip.id === tipId ? { ...tip, likes: tip.likes + 1 } : tip
      ));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Lightbulb className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Community Water Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover practical water conservation tips from communities across India. 
            Share your own solutions and learn from others' experiences in sustainable water management.
          </p>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setShowForm(!showForm)}
          >
            <Plus className="w-4 h-4 mr-2" />
            {showForm ? 'Cancel' : 'Share Your Tip'}
          </Button>
        </div>
      </section>

      {/* Submission Form */}
      {showForm && (
        <section className="pb-12 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Share Your Water Conservation Tip</CardTitle>
                <CardDescription>
                  Help others in your community by sharing practical water-saving solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Your Name *</label>
                      <Input
                        placeholder="Enter your name"
                        value={formData.authorName}
                        onChange={(e) => setFormData({...formData, authorName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Location *</label>
                      <Input
                        placeholder="City, State"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Category *</label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => setFormData({...formData, category: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Your Tip *</label>
                    <Textarea
                      placeholder="Share your water conservation tip, technique, or solution..."
                      rows={4}
                      value={formData.tipContent}
                      onChange={(e) => setFormData({...formData, tipContent: e.target.value})}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={submitLoading}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {submitLoading ? 'Submitting...' : 'Submit Tip'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Tips Display */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading community tips...</p>
            </div>
          ) : tips.length === 0 ? (
            <div className="text-center py-12">
              <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No tips yet</h3>
              <p className="text-gray-500">Be the first to share a water conservation tip!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip) => (
                <Card key={tip.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {tip.category}
                      </Badge>
                      {tip.verified && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-800 mb-4 leading-relaxed">
                      {tip.tip_content}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{tip.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(tip.created_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="font-medium">By {tip.author_name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(tip.id, tip.likes)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Heart className="w-4 h-4 mr-1" />
                          {tip.likes}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tips;

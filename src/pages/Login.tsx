
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const { toast } = useToast();
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // Redirect if already logged in
  if (user) {
    navigate('/dashboard');
    return null;
  }

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasCapital = /[A-Z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (!minLength) {
      return 'Password must be at least 8 characters long';
    }
    if (!hasCapital) {
      return 'Password must contain at least one capital letter';
    }
    if (!hasSpecial) {
      return 'Password must contain at least one special character';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else {
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        newErrors.password = passwordError;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const { error } = await signIn(formData.email, formData.password);
    
    if (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Login Successful!",
        description: "Welcome back to SALT2SOURCE.",
      });
      navigate('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-32 h-32 bg-blue-300 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{animationDelay: '2s'}}>
        <div className="w-20 h-20 bg-blue-400 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float opacity-10" style={{animationDelay: '4s'}}>
        <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
      </div>
      
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md animate-scale-in">
          <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <CardHeader className="text-center pb-8 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <span className="text-white font-bold text-xl">S2S</span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 animate-slide-in-left">Welcome Back</CardTitle>
              <CardDescription className="text-gray-600 text-lg animate-slide-in-right">
                Sign in to your SALT2SOURCE account
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 animate-slide-in-left">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400 transition-colors duration-200" size={20} />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`pl-10 transition-all duration-300 hover:shadow-md focus:shadow-lg ${errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm animate-fade-in">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2 animate-slide-in-right">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400 transition-colors duration-200" size={20} />
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className={`pl-10 transition-all duration-300 hover:shadow-md focus:shadow-lg ${errors.password ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm animate-fade-in">{errors.password}</p>
                  )}
                  <div className="text-xs text-gray-500 mt-1">
                    Password must be at least 8 characters with a capital letter and special character
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
              
              <div className="text-center pt-4 border-t border-gray-200 animate-fade-in">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium transition-all duration-200 hover:scale-105 inline-block">
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;

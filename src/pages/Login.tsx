
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const validateForm = () => {
    const newErrors = { username: '', password: '' };
    let isValid = true;

    // Username validation - must have at least one special character
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!formData.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (!specialCharRegex.test(formData.username)) {
      newErrors.username = 'Username must contain at least one special character';
      isValid = false;
    }

    // Password validation - must be 8+ characters
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Login Successful!",
        description: "Welcome back to SALT2SOURCE.",
      });
      // Simulate redirect to dashboard
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S2S</span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800">Welcome Back</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Sign in to your SALT2SOURCE account
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <Input
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      className={`pl-10 transition-all duration-200 ${errors.username ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                    />
                  </div>
                  {errors.username && (
                    <p className="text-red-500 text-sm animate-fade-in">{errors.username}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className={`pl-10 transition-all duration-200 ${errors.password ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm animate-fade-in">{errors.password}</p>
                  )}
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                  Sign In
                </Button>
              </form>
              
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Sign up here
                  </Link>
                </p>
              </div>
              
              <div className="text-center">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot your password?
                </a>
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

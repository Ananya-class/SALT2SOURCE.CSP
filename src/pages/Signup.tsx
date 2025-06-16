
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const validateForm = () => {
    const newErrors = { fullName: '', email: '', username: '', password: '', confirmPassword: '' };
    let isValid = true;

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

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

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Account Created Successfully!",
        description: "Welcome to SALT2SOURCE. Please check your email for verification.",
      });
      // Simulate redirect to dashboard
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S2S</span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800">Join SALT2SOURCE</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Create your account and start making a difference
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <Input
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className={`pl-10 transition-all duration-200 ${errors.fullName ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm animate-fade-in">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`pl-10 transition-all duration-200 ${errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm animate-fade-in">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <Input
                      placeholder="Choose a username with special character"
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
                  <Input
                    type="password"
                    placeholder="Enter password (8+ characters)"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className={`transition-all duration-200 ${errors.password ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm animate-fade-in">{errors.password}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className={`transition-all duration-200 ${errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm animate-fade-in">{errors.confirmPassword}</p>
                  )}
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                  Create Account
                </Button>
              </form>
              
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Sign in here
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

export default Signup;

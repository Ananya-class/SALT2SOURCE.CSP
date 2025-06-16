
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Users, MapIcon, LogOut, ArrowUp, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userName] = useState("John Doe"); // This would come from authentication

  const dashboardStats = [
    {
      title: "Water Saved",
      value: "1,247",
      unit: "Gallons",
      change: "+12%",
      positive: true,
      icon: <div className="text-blue-600 text-2xl">💧</div>
    },
    {
      title: "Tips Shared",
      value: "23",
      unit: "Tips",
      change: "+5",
      positive: true,
      icon: <div className="text-green-600 text-2xl">💡</div>
    },
    {
      title: "Community Rank",
      value: "#847",
      unit: "Global",
      change: "+23",
      positive: true,
      icon: <div className="text-orange-600 text-2xl">🏆</div>
    },
    {
      title: "Days Active",
      value: "45",
      unit: "Days",
      change: "+1",
      positive: true,
      icon: <div className="text-purple-600 text-2xl">📅</div>
    }
  ];

  const recentActivity = [
    { action: "Shared a water conservation tip", time: "2 hours ago", type: "tip" },
    { action: "Completed daily water tracking", time: "1 day ago", type: "tracking" },
    { action: "Joined the Solar Desalination challenge", time: "3 days ago", type: "challenge" },
    { action: "Updated profile information", time: "5 days ago", type: "profile" }
  ];

  const upcomingGoals = [
    { goal: "Save 100 gallons this week", progress: 67, target: 100 },
    { goal: "Share 5 conservation tips", progress: 3, target: 5 },
    { goal: "Complete water audit", progress: 0, target: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Welcome Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Welcome back, {userName}! 👋</h1>
            <p className="text-xl opacity-90">
              You've saved 1,247 gallons of water this month. Keep up the great work!
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    {stat.icon}
                    <div className={`flex items-center text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.positive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                      <span className="ml-1">{stat.change}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.unit}</p>
                    <p className="text-sm font-medium text-gray-700">{stat.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          
          {/* Charts Placeholder */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-800">
                  <BarChart className="mr-2 text-blue-600" size={24} />
                  Water Usage Analytics
                </CardTitle>
                <CardDescription>Your water consumption over the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="mx-auto mb-4 text-blue-600" size={48} />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Charts Coming Soon</h3>
                    <p className="text-gray-600">Advanced analytics and visualizations will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Weekly Goals Progress</CardTitle>
                <CardDescription>Track your water conservation goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingGoals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{goal.goal}</span>
                      <span className="text-sm text-gray-500">{goal.progress}/{goal.target}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${(goal.progress / goal.target) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/tips">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-start">
                    <div className="mr-2">💡</div>
                    Share a Tip
                  </Button>
                </Link>
                <Link to="/map">
                  <Button variant="outline" className="w-full justify-start border-blue-600 text-blue-600 hover:bg-blue-50">
                    <MapIcon className="mr-2" size={16} />
                    View Water Map
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2" size={16} />
                  Join Challenge
                </Button>
                <Button variant="outline" className="w-full justify-start text-gray-600 hover:text-red-600 hover:border-red-600">
                  <LogOut className="mr-2" size={16} />
                  Sign Out
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;

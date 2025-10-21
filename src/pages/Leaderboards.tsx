import { useState } from "react";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Leaderboards = () => {
  const monthlyLeaders = [
    { rank: 1, name: "Sarah Chen", country: "🇨🇦 Canada", projects: 8, first: 3, second: 3, third: 2, total: 2450 },
    { rank: 2, name: "Miguel Rodriguez", country: "🇲🇽 Mexico", projects: 7, first: 2, second: 4, third: 1, total: 2280 },
    { rank: 3, name: "Amara Okafor", country: "🇳🇬 Nigeria", projects: 7, first: 2, second: 3, third: 2, total: 2150 },
    { rank: 4, name: "Yuki Tanaka", country: "🇯🇵 Japan", projects: 6, first: 1, second: 3, third: 2, total: 1980 },
    { rank: 5, name: "Emma Wilson", country: "🇬🇧 UK", projects: 6, first: 2, second: 2, third: 2, total: 1920 },
    { rank: 6, name: "Rajesh Kumar", country: "🇮🇳 India", projects: 5, first: 1, second: 2, third: 2, total: 1750 },
    { rank: 7, name: "Sofia Martinez", country: "🇪🇸 Spain", projects: 5, first: 0, second: 3, third: 2, total: 1680 },
    { rank: 8, name: "David Kim", country: "🇰🇷 South Korea", projects: 4, first: 1, second: 2, third: 1, total: 1590 },
    { rank: 9, name: "Isabella Santos", country: "🇧🇷 Brazil", projects: 4, first: 1, second: 1, third: 2, total: 1520 },
    { rank: 10, name: "Ahmed Hassan", country: "🇪🇬 Egypt", projects: 4, first: 0, second: 2, third: 2, total: 1450 }
  ];

  const quarterlyLeaders = [
    { rank: 1, name: "Sarah Chen", country: "🇨🇦 Canada", projects: 24, first: 10, second: 8, third: 6, total: 7350 },
    { rank: 2, name: "Miguel Rodriguez", country: "🇲🇽 Mexico", projects: 22, first: 8, second: 10, third: 4, total: 6890 },
    { rank: 3, name: "Amara Okafor", country: "🇳🇬 Nigeria", projects: 21, first: 7, second: 9, third: 5, total: 6550 },
    { rank: 4, name: "Emma Wilson", country: "🇬🇧 UK", projects: 20, first: 6, second: 8, third: 6, total: 6240 },
    { rank: 5, name: "Yuki Tanaka", country: "🇯🇵 Japan", projects: 19, first: 5, second: 9, third: 5, total: 5980 },
    { rank: 6, name: "Rajesh Kumar", country: "🇮🇳 India", projects: 18, first: 4, second: 7, third: 7, total: 5720 },
    { rank: 7, name: "David Kim", country: "🇰🇷 South Korea", projects: 17, first: 5, second: 6, third: 6, total: 5450 },
    { rank: 8, name: "Sofia Martinez", country: "🇪🇸 Spain", projects: 16, first: 3, second: 7, third: 6, total: 5180 },
    { rank: 9, name: "Isabella Santos", country: "🇧🇷 Brazil", projects: 15, first: 4, second: 5, third: 6, total: 4920 },
    { rank: 10, name: "Ahmed Hassan", country: "🇪🇬 Egypt", projects: 14, first: 2, second: 6, third: 6, total: 4650 }
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-amber-600";
    return "text-muted-foreground";
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6" />;
    if (rank === 2) return <Medal className="h-6 w-6" />;
    if (rank === 3) return <Award className="h-6 w-6" />;
    return <span className="font-bold text-lg">#{rank}</span>;
  };

  const LeaderboardTable = ({ leaders }: { leaders: typeof monthlyLeaders }) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-left font-semibold">Rank</th>
            <th className="px-4 py-3 text-left font-semibold">Name</th>
            <th className="px-4 py-3 text-left font-semibold">Country</th>
            <th className="px-4 py-3 text-center font-semibold">Projects</th>
            <th className="px-4 py-3 text-center font-semibold">🥇</th>
            <th className="px-4 py-3 text-center font-semibold">🥈</th>
            <th className="px-4 py-3 text-center font-semibold">🥉</th>
            <th className="px-4 py-3 text-right font-semibold">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader) => (
            <tr
              key={leader.rank}
              className="border-b border-border hover:bg-muted/50 transition-colors"
            >
              <td className="px-4 py-4">
                <div className={`flex items-center ${getRankColor(leader.rank)}`}>
                  {getRankIcon(leader.rank)}
                </div>
              </td>
              <td className="px-4 py-4 font-medium">{leader.name}</td>
              <td className="px-4 py-4 text-sm">{leader.country}</td>
              <td className="px-4 py-4 text-center">
                <Badge variant="outline">{leader.projects}</Badge>
              </td>
              <td className="px-4 py-4 text-center">{leader.first}</td>
              <td className="px-4 py-4 text-center">{leader.second}</td>
              <td className="px-4 py-4 text-center">{leader.third}</td>
              <td className="px-4 py-4 text-right font-bold text-primary">{leader.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Leaderboards</h1>
          <p className="text-xl text-muted-foreground">
            Track top performers and see where you rank among global contributors
          </p>
        </div>

        {/* Top 3 Spotlight */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {monthlyLeaders.slice(0, 3).map((leader, index) => (
            <Card key={leader.rank} className={`relative overflow-hidden ${index === 0 ? 'md:col-start-2 md:row-start-1 md:-order-1' : ''}`}>
              <div className={`absolute top-0 left-0 right-0 h-2 ${
                leader.rank === 1 ? 'bg-yellow-500' :
                leader.rank === 2 ? 'bg-gray-400' :
                'bg-amber-600'
              }`} />
              <CardHeader className="text-center pb-4">
                <div className={`flex justify-center mb-4 ${getRankColor(leader.rank)}`}>
                  {getRankIcon(leader.rank)}
                </div>
                <CardTitle className="text-2xl">{leader.name}</CardTitle>
                <p className="text-muted-foreground">{leader.country}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <span className="text-3xl font-bold text-primary">{leader.total.toLocaleString()}</span>
                  <span className="text-muted-foreground">pts</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold">{leader.first}</div>
                    <div className="text-muted-foreground">1st Place</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{leader.second}</div>
                    <div className="text-muted-foreground">2nd Place</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{leader.third}</div>
                    <div className="text-muted-foreground">3rd Place</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboards */}
        <Card>
          <CardHeader>
            <CardTitle>Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="monthly" className="text-lg">Monthly</TabsTrigger>
                <TabsTrigger value="quarterly" className="text-lg">Quarterly</TabsTrigger>
              </TabsList>
              
              <TabsContent value="monthly">
                <LeaderboardTable leaders={monthlyLeaders} />
              </TabsContent>
              
              <TabsContent value="quarterly">
                <LeaderboardTable leaders={quarterlyLeaders} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Want to see your name here?</h3>
              <p className="mb-6 text-lg opacity-90">
                Join RAPID Response Team and start making an impact today
              </p>
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Leaderboards;

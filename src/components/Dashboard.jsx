import { Heart, MessageSquare, Share2, Users } from 'lucide-react'
import StatCard from './StatCard'
import ChartContainer from './ChartContainer'

export default function Dashboard({ timeRange }) {
  // Mock stats - replace with real API calls
  const stats = {
    engagement: { value: 12453, trend: 12, icon: Heart },
    followers: { value: 98750, trend: 8, icon: Users },
    performance: { value: 94, unit: '%', trend: 5, icon: Share2 },
    interactions: { value: 45230, trend: 15, icon: MessageSquare }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Engagement" 
          value={stats.engagement.value}
          trend={stats.engagement.trend}
          icon={stats.engagement.icon}
        />
        <StatCard 
          title="Followers" 
          value={stats.followers.value}
          trend={stats.followers.trend}
          icon={stats.followers.icon}
        />
        <StatCard 
          title="Performance Score" 
          value={stats.performance.value}
          unit={stats.performance.unit}
          trend={stats.performance.trend}
          icon={stats.performance.icon}
        />
        <StatCard 
          title="Total Interactions" 
          value={stats.interactions.value}
          trend={stats.interactions.trend}
          icon={stats.interactions.icon}
        />
      </div>

      {/* Charts */}
      <ChartContainer />
    </main>
  )
}

import { BarChart3 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'

export default function Analyzer() {
  return (
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
          <BarChart3 size={36} className="text-primary" />
          Performance Analyzer
        </h1>
        <p className="text-gray-600">Detailed analytics and insights about your performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stat Card 1 */}
        <Card>
          <CardHeader>
            <CardTitle>Accuracy Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary mb-2">78%</p>
            <p className="text-sm text-gray-600">+5% from last week</p>
          </CardContent>
        </Card>

        {/* Stat Card 2 */}
        <Card>
          <CardHeader>
            <CardTitle>Average Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary mb-2">24m</p>
            <p className="text-sm text-gray-600">Per problem</p>
          </CardContent>
        </Card>

        {/* Stat Card 3 */}
        <Card>
          <CardHeader>
            <CardTitle>Topics Mastered</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary mb-2">8/15</p>
            <p className="text-sm text-gray-600">Keep practicing</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Details */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Charts and detailed performance metrics coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}

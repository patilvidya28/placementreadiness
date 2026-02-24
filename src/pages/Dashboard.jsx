import { LayoutDashboard } from 'lucide-react'
import CircularProgress from '../components/CircularProgress'
import SkillBreakdown from '../components/SkillBreakdown'
import ContinuePractice from '../components/ContinuePractice'
import WeeklyGoals from '../components/WeeklyGoals'
import UpcomingAssessments from '../components/UpcomingAssessments'

export default function Dashboard() {
  return (
    <div className="max-w-7xl">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
          <LayoutDashboard size={36} className="text-primary" />
          Dashboard
        </h1>
        <p className="text-gray-600">Welcome back! Here's your placement prep overview</p>
      </div>

      {/* Top Row - 2 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Overall Readiness */}
        <CircularProgress />

        {/* Skill Breakdown */}
        <SkillBreakdown />
      </div>

      {/* Middle Row - 2 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Continue Practice */}
        <ContinuePractice />

        {/* Weekly Goals */}
        <WeeklyGoals />
      </div>

      {/* Bottom Row - Full Width */}
      <UpcomingAssessments />
    </div>
  )
}

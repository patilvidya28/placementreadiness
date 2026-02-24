import { Card, CardHeader, CardTitle, CardContent } from './Card'

const daysOfWeek = [
  { day: 'Mon', hasActivity: true },
  { day: 'Tue', hasActivity: true },
  { day: 'Wed', hasActivity: false },
  { day: 'Thu', hasActivity: true },
  { day: 'Fri', hasActivity: true },
  { day: 'Sat', hasActivity: false },
  { day: 'Sun', hasActivity: false },
]

export default function WeeklyGoals() {
  const completed = 12
  const total = 20
  const percentage = (completed / total) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Problems Solved */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Problems Solved</span>
              <span className="font-semibold text-primary">
                {completed}/{total} this week
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-primary to-primary-light h-3 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          {/* Week Activity */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-700">Activity This Week</p>
            <div className="flex justify-between gap-2">
              {daysOfWeek.map((item) => (
                <div key={item.day} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                      item.hasActivity
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {item.hasActivity ? '✓' : ''}
                  </div>
                  <span className="text-xs text-gray-600">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Streak Info */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-primary">4 day streak!</span> Keep it up! 🔥
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

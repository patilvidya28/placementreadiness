import { Clock, ChevronRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from './Card'

const assessments = [
  {
    id: 1,
    title: 'DSA Mock Test',
    when: 'Tomorrow',
    time: '10:00 AM',
    color: 'bg-blue-50 border-l-4 border-blue-500',
    icon: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'System Design Review',
    when: 'Wednesday',
    time: '2:00 PM',
    color: 'bg-purple-50 border-l-4 border-primary',
    icon: 'bg-purple-100 text-primary',
  },
  {
    id: 3,
    title: 'HR Interview Prep',
    when: 'Friday',
    time: '11:00 AM',
    color: 'bg-green-50 border-l-4 border-green-500',
    icon: 'bg-green-100 text-green-600',
  },
]

export default function UpcomingAssessments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Assessments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {assessments.map((assessment) => (
            <div
              key={assessment.id}
              className={`p-4 rounded-lg ${assessment.color} hover:shadow-md transition duration-200 cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div className={`${assessment.icon} p-2 rounded-lg flex-shrink-0`}>
                  <Clock size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 truncate">
                    {assessment.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                    <span>{assessment.when}</span>
                    <span>•</span>
                    <span className="font-medium">{assessment.time}</span>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-400 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 py-2 px-4 text-center text-primary font-semibold hover:bg-gray-50 rounded-lg transition duration-200">
          View All Assessments →
        </button>
      </CardContent>
    </Card>
  )
}

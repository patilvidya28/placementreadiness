import { ChevronRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from './Card'

export default function ContinuePractice() {
  const completed = 3
  const total = 10
  const percentage = (completed / total) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Continue Practice</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Dynamic Programming
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Master advanced problem-solving techniques
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-semibold text-primary">
                {completed}/{total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          <button className="w-full mt-6 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Continue
            <ChevronRight size={18} />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

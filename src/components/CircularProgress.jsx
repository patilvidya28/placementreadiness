import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './Card'

export default function CircularProgress() {
  const [progress, setProgress] = useState(0)
  const score = 72
  const total = 100
  const radius = 90
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  useEffect(() => {
    // Animate the progress
    setTimeout(() => setProgress(score), 100)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Readiness</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative w-48 h-48">
            <svg
              className="transform -rotate-90"
              width="200"
              height="200"
              viewBox="0 0 200 200"
            >
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              {/* Progress circle */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="hsl(245, 58%, 51%)"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{
                  transition: 'stroke-dashoffset 1.5s ease-in-out',
                }}
              />
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-primary">{score}</div>
              <div className="text-sm text-gray-600">out of {total}</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-gray-700">Readiness Score</p>
            <p className="text-xs text-gray-500 mt-1">Keep practicing to improve</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

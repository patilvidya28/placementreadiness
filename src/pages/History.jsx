import { Clock } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'

const historyItems = [
  {
    id: 1,
    title: 'Completed: Two Pointers Problem',
    timestamp: '2 hours ago',
    status: 'completed',
    score: '95%'
  },
  {
    id: 2,
    title: 'Solved: Binary Tree Traversal',
    timestamp: '4 hours ago',
    status: 'completed',
    score: '88%'
  },
  {
    id: 3,
    title: 'Mock Interview Round 1',
    timestamp: 'Yesterday',
    status: 'completed',
    score: '82%'
  },
  {
    id: 4,
    title: 'Started: Graph Algorithms',
    timestamp: '2 days ago',
    status: 'in-progress',
    score: '60%'
  },
  {
    id: 5,
    title: 'Completed: Array Problems Batch',
    timestamp: '3 days ago',
    status: 'completed',
    score: '91%'
  },
]

export default function History() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
          <Clock size={36} className="text-primary" />
          Activity History
        </h1>
        <p className="text-gray-600">Track your learning journey and past activities</p>
      </div>

      <div className="space-y-4">
        {historyItems.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.timestamp}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                    item.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {item.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                  <p className="text-2xl font-bold text-primary">{item.score}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

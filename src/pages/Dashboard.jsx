import { LayoutDashboard } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
          <LayoutDashboard size={36} className="text-primary" />
          Dashboard
        </h1>
        <p className="text-gray-600">Welcome to your placement preparation dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-semibold mb-2">PROBLEMS SOLVED</h3>
          <p className="text-3xl font-bold text-primary">24</p>
          <p className="text-gray-500 text-sm mt-2">out of 150</p>
        </div>

        {/* Stats Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-semibold mb-2">INTERVIEWS COMPLETED</h3>
          <p className="text-3xl font-bold text-primary">5</p>
          <p className="text-gray-500 text-sm mt-2">Average Score: 78%</p>
        </div>

        {/* Stats Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-semibold mb-2">CURRENT STREAK</h3>
          <p className="text-3xl font-bold text-primary">12</p>
          <p className="text-gray-500 text-sm mt-2">days active</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-4">
            <p className="text-gray-700">Solved: Two Sum Problem</p>
            <span className="text-green-600 font-semibold">Completed</span>
          </div>
          <div className="flex items-center justify-between border-b pb-4">
            <p className="text-gray-700">Mock Interview: Round 1</p>
            <span className="text-blue-600 font-semibold">In Progress</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Completed: JavaScript Fundamentals</p>
            <span className="text-green-600 font-semibold">Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

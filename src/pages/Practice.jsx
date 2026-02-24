import { Code2, ChevronRight } from 'lucide-react'

export default function Practice() {
  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', solved: true },
    { id: 2, title: 'Add Two Numbers', difficulty: 'Medium', solved: false },
    { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', solved: false },
    { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', solved: false },
    { id: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium', solved: true },
    { id: 6, title: 'Regular Expression Matching', difficulty: 'Hard', solved: false },
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
          <Code2 size={36} className="text-primary" />
          Practice Problems
        </h1>
        <p className="text-gray-600">Solve coding problems to improve your skills</p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
            All Problems
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Easy
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Medium
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Hard
          </button>
        </div>
      </div>

      {/* Problems List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Difficulty</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <tr key={problem.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className={`w-4 h-4 rounded ${problem.solved ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{problem.title}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-primary hover:text-primary-dark flex items-center justify-center gap-1 mx-auto">
                      Solve <ChevronRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

import { ClipboardList, Clock, BarChart3 } from 'lucide-react'

export default function Assessments() {
  const assessments = [
    {
      id: 1,
      title: 'Technical Assessment - Round 1',
      type: 'Coding',
      duration: 90,
      questions: 3,
      status: 'completed',
      score: 85,
    },
    {
      id: 2,
      title: 'Data Structures Quiz',
      type: 'Quiz',
      duration: 45,
      questions: 20,
      status: 'completed',
      score: 92,
    },
    {
      id: 3,
      title: 'Aptitude Assessment',
      type: 'Assessment',
      duration: 120,
      questions: 50,
      status: 'not-started',
      score: null,
    },
    {
      id: 4,
      title: 'System Design Challenge',
      type: 'Coding',
      duration: 120,
      questions: 2,
      status: 'in-progress',
      score: null,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'not-started':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
          <ClipboardList size={36} className="text-primary" />
          Assessments
        </h1>
        <p className="text-gray-600">Track your assessment performance</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-semibold mb-2">COMPLETED</h3>
              <p className="text-3xl font-bold text-primary">2</p>
            </div>
            <div className="bg-primary bg-opacity-20 p-4 rounded-lg">
              <BarChart3 className="text-primary" size={32} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-semibold mb-2">IN PROGRESS</h3>
              <p className="text-3xl font-bold text-primary">1</p>
            </div>
            <div className="bg-primary bg-opacity-20 p-4 rounded-lg">
              <Clock className="text-primary" size={32} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-semibold mb-2">AVERAGE SCORE</h3>
              <p className="text-3xl font-bold text-primary">88.5%</p>
            </div>
            <div className="bg-primary bg-opacity-20 p-4 rounded-lg">
              <BarChart3 className="text-primary" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Assessments List */}
      <div className="space-y-4">
        {assessments.map((assessment) => (
          <div key={assessment.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{assessment.title}</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>Type: <strong>{assessment.type}</strong></span>
                  <span>Duration: <strong>{assessment.duration} mins</strong></span>
                  <span>Questions: <strong>{assessment.questions}</strong></span>
                </div>
              </div>
              <div className="text-right">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-2 ${getStatusColor(assessment.status)}`}>
                  {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1).replace('-', ' ')}
                </span>
                {assessment.score && (
                  <p className="text-2xl font-bold text-primary">{assessment.score}%</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

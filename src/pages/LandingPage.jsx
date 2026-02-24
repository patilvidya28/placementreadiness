import { useNavigate } from 'react-router-dom'
import { Code2, Video, BarChart3 } from 'lucide-react'

export default function LandingPage() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-2xl font-bold text-primary">PlacementPrep</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          Ace Your Placement
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Practice, assess, and prepare for your dream job
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105"
        >
          Get Started
        </button>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Practice Problems Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-200">
            <div className="flex justify-center mb-4">
              <Code2 size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Practice Problems
            </h3>
            <p className="text-gray-600">
              Solve hundreds of curated coding problems from top companies
            </p>
          </div>

          {/* Mock Interviews Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-200">
            <div className="flex justify-center mb-4">
              <Video size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Mock Interviews
            </h3>
            <p className="text-gray-600">
              Practice with realistic interview scenarios and get instant feedback
            </p>
          </div>

          {/* Track Progress Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-200">
            <div className="flex justify-center mb-4">
              <BarChart3 size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Track Progress
            </h3>
            <p className="text-gray-600">
              Monitor your improvement with detailed analytics and insights
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 PlacementPrep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

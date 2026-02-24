import { BookOpen, ExternalLink } from 'lucide-react'

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: 'Data Structures and Algorithms',
      category: 'Tutorial',
      level: 'Beginner',
      link: '#',
    },
    {
      id: 2,
      title: 'System Design Best Practices',
      category: 'Guide',
      level: 'Advanced',
      link: '#',
    },
    {
      id: 3,
      title: 'JavaScript Interview Tips',
      category: 'Article',
      level: 'Intermediate',
      link: '#',
    },
    {
      id: 4,
      title: 'Behavioral Interview Preparation',
      category: 'Course',
      level: 'All Levels',
      link: '#',
    },
    {
      id: 5,
      title: 'Competitive Programming Guide',
      category: 'Book',
      level: 'Advanced',
      link: '#',
    },
    {
      id: 6,
      title: 'Resume Building Workshop',
      category: 'Workshop',
      level: 'Beginner',
      link: '#',
    },
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Tutorial':
        return 'bg-blue-100 text-blue-800'
      case 'Guide':
        return 'bg-purple-100 text-purple-800'
      case 'Article':
        return 'bg-green-100 text-green-800'
      case 'Course':
        return 'bg-orange-100 text-orange-800'
      case 'Book':
        return 'bg-red-100 text-red-800'
      case 'Workshop':
        return 'bg-indigo-100 text-indigo-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-600'
      case 'Intermediate':
        return 'text-yellow-600'
      case 'Advanced':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
          <BookOpen size={36} className="text-primary" />
          Learning Resources
        </h1>
        <p className="text-gray-600">Curated resources to help you prepare</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search resources..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
            <option>All Categories</option>
            <option>Tutorial</option>
            <option>Guide</option>
            <option>Article</option>
            <option>Course</option>
            <option>Book</option>
            <option>Workshop</option>
          </select>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(resource.category)}`}>
                {resource.category}
              </span>
              <ExternalLink size={18} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.title}</h3>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${getLevelColor(resource.level)}`}>
                {resource.level}
              </span>
              <a
                href={resource.link}
                className="text-primary hover:text-primary-dark font-semibold text-sm"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

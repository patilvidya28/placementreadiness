import { User, Mail, Phone, MapPin, Edit2 } from 'lucide-react'

export default function Profile() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
          <User size={36} className="text-primary" />
          User Profile
        </h1>
        <p className="text-gray-600">Manage your account information</p>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
              U
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">User Name</h2>
              <p className="text-gray-600">Member since 2024</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
            <Edit2 size={18} />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 pb-4 border-b">
            <Mail className="text-primary" size={24} />
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-lg text-gray-900">user@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pb-4 border-b">
            <Phone className="text-primary" size={24} />
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="text-lg text-gray-900">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-primary" size={24} />
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-lg text-gray-900">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">24</p>
            <p className="text-gray-600">Problems Solved</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">5</p>
            <p className="text-gray-600">Assessments Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">88.5%</p>
            <p className="text-gray-600">Average Score</p>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Preferences</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
            <div>
              <p className="font-semibold text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive updates about new problems and assessments</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
            <div>
              <p className="font-semibold text-gray-900">Weekly Digest</p>
              <p className="text-sm text-gray-600">Get a weekly summary of your progress</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input type="checkbox" className="w-4 h-4 accent-primary" />
            <div>
              <p className="font-semibold text-gray-900">Marketing Updates</p>
              <p className="text-sm text-gray-600">Receive news about new features and special offers</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

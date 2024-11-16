import React from 'react'
import Layout from '../components/Layout'

const Settings = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        {/* Settings Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Settings</h2>
          <p className="text-lg text-gray-600 mt-2">Manage your preferences and account details</p>
        </div>

        {/* Account Information Section */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Account Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" placeholder="Enter your name" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg">Save Changes</button>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <input type="checkbox" className="h-5 w-5" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Push Notifications</span>
              <input type="checkbox" className="h-5 w-5" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">SMS Notifications</span>
              <input type="checkbox" className="h-5 w-5" />
            </div>
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg">Save Preferences</button>
        </div>

        {/* Language Preferences */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Language Preferences</h3>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Italian</option>
          </select>
          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg">Save Language</button>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Allow Profile Visibility</span>
              <input type="checkbox" className="h-5 w-5" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Enable Two-Factor Authentication</span>
              <input type="checkbox" className="h-5 w-5" />
            </div>
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg">Save Privacy Settings</button>
        </div>

        {/* Account Deletion */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Account Deletion</h3>
          <p className="text-gray-700 mb-4">If you wish to delete your account permanently, please click the button below. This action cannot be undone.</p>
          <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg">Delete Account</button>
        </div>
      </div>
    </Layout>
  )
}

export default Settings

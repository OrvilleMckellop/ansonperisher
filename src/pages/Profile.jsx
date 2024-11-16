import React from 'react'
import Layout from '../components/Layout'

const Profile = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        {/* Profile Header */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <div className="flex items-center space-x-6">
            {/* Profile Picture */}
            <img
              src="https://via.placeholder.com/100"
              alt="Profile Picture"
              className="rounded-full w-24 h-24 object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">User Details</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Email:</p>
              <p className="text-gray-800">johndoe@example.com</p>
            </div>
            <div>
              <p className="text-gray-600">Location:</p>
              <p className="text-gray-800">New York, USA</p>
            </div>
            <div>
              <p className="text-gray-600">Phone:</p>
              <p className="text-gray-800">(123) 456-7890</p>
            </div>
            <div>
              <p className="text-gray-600">Joined:</p>
              <p className="text-gray-800">January 2023</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">Project Completed</div>
              <span className="text-sm text-gray-800">"Dashboard UI Design" - 5 days ago</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">Commented on Post</div>
              <span className="text-sm text-gray-800">"Great work on the new feature!" - 2 weeks ago</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">Completed Training</div>
              <span className="text-sm text-gray-800">"React Basics" - 1 month ago</span>
            </li>
          </ul>
        </div>

        {/* Settings Button */}
        <div className="bg-white p-6 shadow rounded-lg mb-8 text-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-full">
            Edit Profile
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Profile

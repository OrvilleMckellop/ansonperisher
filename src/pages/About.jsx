import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        {/* About Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 mt-2">Learn more about our mission and values</p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to revolutionize the way businesses and individuals engage with technology. 
            We aim to provide innovative solutions that make everyday tasks easier and more efficient. 
            Whether it's through custom software development, tailored business solutions, or creative digital marketing, 
            we are here to help you succeed in a rapidly changing world.
          </p>
        </div>

        {/* Our Values */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
          <ul className="space-y-4">
            <li className="text-gray-700">
              <strong>Innovation:</strong> We are committed to staying ahead of the curve by continually exploring new technologies and approaches.
            </li>
            <li className="text-gray-700">
              <strong>Integrity:</strong> We believe in transparency and honesty in all of our business practices and interactions.
            </li>
            <li className="text-gray-700">
              <strong>Collaboration:</strong> Working together with our clients, partners, and teams is the key to our success.
            </li>
            <li className="text-gray-700">
              <strong>Customer-Centricity:</strong> Our clients' success is our success, and we always put their needs at the center of everything we do.
            </li>
          </ul>
        </div>

        {/* Our Team */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">Carlos Martínez</h4>
              <p className="text-gray-600">Creative Director</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            If you're ready to take the next step or have any questions, feel free to <a href="/contact" className="text-cyan-500 hover:underline">contact us</a>.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About

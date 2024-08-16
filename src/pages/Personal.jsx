import React from "react";

function Personal() {
  return (
    <div className="min-h-screen bg-light-beige p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Personal Information Header */}
        <h2 className="text-3xl font-bold text-crimson-red mb-6">
          Personal Information
        </h2>

        {/* Start Weight and End Weight */}
        <div className="mb-6">
          <label
            className="block text-midnight-black text-sm font-bold mb-2"
            htmlFor="start-weight"
          >
            Start Weight
          </label>
          <input
            type="number"
            id="start-weight"
            placeholder="Enter start weight"
            className="shadow appearance-none border border-deep-purple rounded w-full py-2 px-3 text-midnight-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-midnight-black text-sm font-bold mb-2"
            htmlFor="end-weight"
          >
            End Weight
          </label>
          <input
            type="number"
            id="end-weight"
            placeholder="Enter end weight"
            className="shadow appearance-none border border-deep-purple rounded w-full py-2 px-3 text-midnight-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Start Date and End Date */}
        <div className="mb-6">
          <label
            className="block text-midnight-black text-sm font-bold mb-2"
            htmlFor="start-date"
          >
            Start Date
          </label>
          <input
            type="date"
            id="start-date"
            className="shadow appearance-none border border-deep-purple rounded w-full py-2 px-3 text-midnight-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-midnight-black text-sm font-bold mb-2"
            htmlFor="end-date"
          >
            End Date
          </label>
          <input
            type="date"
            id="end-date"
            className="shadow appearance-none border border-deep-purple rounded w-full py-2 px-3 text-midnight-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* First Day and Last Day Photos */}
        <div className="mb-8">
          <label className="block text-midnight-black text-sm font-bold mb-2">
            First Day Photo
          </label>
          <input
            type="file"
            className="w-full text-midnight-black py-2 px-3 border border-deep-purple rounded leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-8">
          <label className="block text-midnight-black text-sm font-bold mb-2">
            Last Day Photo
          </label>
          <input
            type="file"
            className="w-full text-midnight-black py-2 px-3 border border-deep-purple rounded leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Notes & Reflections */}
        <div className="mb-8">
          <label
            className="block text-midnight-black text-sm font-bold mb-2"
            htmlFor="notes"
          >
            Notes & Reflections
          </label>
          <textarea
            id="notes"
            rows="5"
            placeholder="Write your thoughts, reflections, and progress here..."
            className="shadow appearance-none border border-deep-purple rounded w-full py-2 px-3 text-midnight-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Achievements Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-crimson-red mb-2">
            Achievements
          </h3>
          <div className="flex space-x-4">
            {/* Achievement badges go here */}
            <span className="bg-deep-purple text-white py-2 px-4 rounded-lg">
              7 Days
            </span>
            <span className="bg-deep-purple text-white py-2 px-4 rounded-lg">
              30 Days
            </span>
            {/* Add more badges as needed */}
          </div>
        </div>

        {/* Settings */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-crimson-red mb-2">Settings</h3>
          {/* Notification Preferences and Edit Info Section */}
          <p className="text-midnight-black">
            <button className="bg-crimson-red text-white py-2 px-4 rounded-lg hover:bg-electric-lime">
              Edit Information
            </button>
            <button className="ml-4 bg-crimson-red text-white py-2 px-4 rounded-lg hover:bg-electric-lime">
              Set Reminders
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Personal;

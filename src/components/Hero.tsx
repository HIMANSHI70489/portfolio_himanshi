import React from 'react';
import img from '../asset/himanshi1.jpg'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-purple-600">Himanshi</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            BBA Student & Aspiring Programmer
          </p>
          <div className="flex gap-4">
            <input
              type="file"
              id="profile-upload"
              className="hidden"
              accept="image/*"
            />
            <label
              htmlFor="profile-upload"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer"
            >
            </label>
          </div>
        </div>
        <div className="relative">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-purple-600">
            <img
              id="profile-preview"
              src={img}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
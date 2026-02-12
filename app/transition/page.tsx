"use client";

import { useEffect, useState } from "react";

export default function TransitionPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary-50 to-blue-100">
      <div
        className={`text-center max-w-md transition-all duration-500 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Animated Icon */}
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg
            className="w-12 h-12 text-primary-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Great effort!
        </h1>
        <p className="text-gray-600 text-lg mb-2">
          Every question helps your brain get ready to learn.
        </p>
        <p className="text-gray-500 mb-8">
          Now let's discover how appositives work together!
        </p>

        {/* Continue Button */}
        <button
          onClick={() => {
            // In a real app, this would navigate to the lesson
            alert("This would navigate to the lesson!");
          }}
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Start Lesson
        </button>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-primary-300" />
          <div className="w-2 h-2 rounded-full bg-primary-400" />
          <div className="w-2 h-2 rounded-full bg-primary-500" />
        </div>
      </div>
    </div>
  );
}

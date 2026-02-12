"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Question {
  id: number;
  sentence: string;
  prompt: string;
  options: string[];
  correctIndex: number;
}

const questions: Question[] = [
  {
    id: 1,
    sentence: "My dog, Buster, loves to play fetch.",
    prompt: "Which word or phrase is the appositive in this sentence?",
    options: ["My dog", "Buster", "loves", "fetch"],
    correctIndex: 1,
  },
  {
    id: 2,
    sentence: "The tallest building, the Empire State Building, is in New York.",
    prompt: "Which word or phrase is the appositive in this sentence?",
    options: [
      "The tallest building",
      "is in New York",
      "the Empire State Building",
      "tallest",
    ],
    correctIndex: 2,
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    setSelectedAnswer(optionIndex);
  };

  useEffect(() => {
    if (selectedAnswer !== null) {
      const timer = setTimeout(() => {
        if (isLastQuestion) {
          router.push("/transition");
        } else {
          setCurrentQuestionIndex((prev) => prev + 1);
          setSelectedAnswer(null);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, isLastQuestion, router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              APPOSITIVES
            </span>
            <span className="text-gray-500 text-sm">Pre-Lesson Quiz</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Let's see what you already know!
          </h1>
        </div>

        {/* Progress Indicator */}
        <div className="flex gap-2 mb-6">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full transition-colors ${
                index < currentQuestionIndex
                  ? "bg-primary-500"
                  : index === currentQuestionIndex
                  ? "bg-primary-300"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="text-sm text-gray-500 mb-4">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>

          <p className="text-lg font-medium text-gray-800 mb-4">
            {currentQuestion.prompt}
          </p>

          {/* Sentence Display */}
          <div className="bg-blue-50 border-l-4 border-primary-500 p-4 rounded-r-lg mb-6">
            <p className="text-gray-700 italic">"{currentQuestion.sentence}"</p>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
                } ${
                  selectedAnswer !== null && selectedAnswer !== index
                    ? "opacity-50"
                    : ""
                } disabled:cursor-default`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      selectedAnswer === index
                        ? "bg-primary-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-gray-700 font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

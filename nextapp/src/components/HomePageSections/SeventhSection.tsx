"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is the admission process?",
    answer:
      "Our admission process involves filling out an online application form, followed by an entrance test and a short interview with the student and their guardians.",
  },
  {
    question: "What are the school timings?",
    answer:
      "The school operates from 9:00 AM to 4:00 PM, Monday to Friday. Extra-curricular activities may extend beyond this schedule.",
  },
  {
    question: "Is school transportation available?",
    answer:
      "Yes, we provide secure and GPS-tracked transportation facilities for students across various zones of the city.",
  },
  {
    question: "Do you offer scholarships?",
    answer:
      "We offer merit-based and need-based scholarships. Students must apply during the admission process to be considered.",
  },
];

const SeventhSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#EEF4F8] py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h4 className="text-2xl md:text-3xl lg:text-4xl mb-12 text-slate-900 font-semibold">
          Frequently Asked Questions(FAQ'S)
        </h4>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-white shadow-lg p-6 rounded-md w-full md:w-1/3 text-slate-700 text-base leading-6">
            <p>
              Here, we’ve gathered some of the most commonly asked questions
              from students, parents, and visitors—along with clear, helpful
              answers. Whether you're curious about admissions, school
              facilities, or daily routines, this section is designed to make
              things easy to understand and accessible. We hope it clears your
              doubts and helps you feel more informed and confident.
            </p>
          </div>

          {/* FAQ List */}
          <div className="w-full md:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-md border border-gray-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div
                  className={`px-4 text-sm text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-40 py-2" : "max-h-0 py-0"
                  }`}
                >
                  {openIndex === index && <p>{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;

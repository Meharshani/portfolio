"use client";

import { useState } from "react";
import student1 from "@/images/student1.jpeg";

// Typescript interface for better safety
interface Student {
  id: string;
  name: string;
  picture: string;
  course: string;
  scholarship: number;
  status: string;
}

const students: Student[] = [
  {
    id: "9900",
    name: "Tayyaba Shahzad",
    picture: student1.src.toString(),
    course: "E-Commerce & Digital Marketing",
    scholarship: 100000,
    status: "Verified",
  },
];

export default function ScholarshipStatus() {
  const [search, setSearch] = useState("");
  const [student, setStudent] = useState<Student | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // Prevents page reload on enter key press
    if (!search.trim()) return;

    const result = students.find(
      (item) => item.id.toLowerCase() === search.trim().toLowerCase()
    );

    setStudent(result || null);
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-3 sm:p-6 mt-10">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 w-full max-w-xl">
        
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center tracking-tight">
          Scholarship Status
        </h1>
        <p className="text-center text-slate-500 mb-6 text-sm sm:text-base mt-1">
          Enter your Scholarship ID below
        </p>

        {/* Search Form - Wrapped in <form> to allow native Enter key submitting */}
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="text"
            placeholder="Enter Scholarship ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:flex-1 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none text-base transition-all"
          />

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 active:bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-700 font-semibold text-base transition duration-150 shadow-sm"
          >
            Search
          </button>
        </form>

        {/* Result Found */}
        {student && (
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50/60 p-4 sm:p-6 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img
                src={student.picture}
                alt={student.name}
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-green-500 shadow-md"
              />

              <h2 className="mt-3 text-lg sm:text-2xl font-bold text-slate-900">
                {student.name}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-medium">
                {student.course}
              </p>

              <span className="inline-block mt-2.5 px-3.5 py-1 sm:py-1.5 rounded-full bg-green-600 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-sm">
                ✓ {student.status}
              </span>
            </div>

            {/* Award Banner */}
            <div className="mt-5 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white p-4 sm:p-6 text-center shadow-md">
              <h3 className="text-xl sm:text-3xl font-black tracking-tight">
                🎉 Congratulations!
              </h3>

              <p className="mt-2 text-xs sm:text-base font-semibold text-yellow-100 uppercase tracking-wider">
                You have been awarded
              </p>

              <h1 className="text-2xl sm:text-4xl font-black mt-1">
                Rs. {student.scholarship.toLocaleString()}
              </h1>

              <p className="mt-1 text-xs sm:text-sm opacity-90 font-medium">
                Course Fee Waived
              </p>

              <div className="mt-4 text-base sm:text-2xl font-black bg-white text-red-600 rounded-xl py-2 px-3 shadow-inner">
                100% SCHOLARSHIP
              </div>
            </div>
          </div>
        )}

        {/* Result Not Found */}
        {searched && !student && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-4 sm:p-5 text-center transition-all">
            <h2 className="text-base sm:text-lg font-bold text-red-600">
              Scholarship ID Not Found
            </h2>
            <p className="text-slate-600 mt-1 text-xs sm:text-sm">
              Please double-check your ID and try searching again.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
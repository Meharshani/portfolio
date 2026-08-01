import student1 from "@/images/student1.jpeg";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-brand-100 py-10 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Scholarship Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-2xl mt-4">
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-semibold backdrop-blur mt-1">
                🎉 Congratulations!
              </span>

              <h1 className="mt-4 text-3xl md:text-5xl font-black">
                Rs. 100,000 Scholarship Awarded
              </h1>

              <p className="mt-3 text-lg text-orange-50 max-w-2xl">
                You successfully passed the MHR Solution Scholarship Test and
                qualified for a <strong>100% FREE Professional Course.</strong>
                Welcome to your learning journey.
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 backdrop-blur-lg px-8 py-6 border border-white/20 text-center mt-4 md:mt-0">
              <h2 className="text-5xl font-black">100%</h2>
              <p className="mt-2 text-lg font-semibold">
                Tuition Fee Waived
              </p>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mt-5">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Student Profile */}
            <div className="bg-white rounded-3xl shadow-lg p-6 border mt-2">

              <div className="flex flex-col items-center mt-2">

                <img
                  src={student1.src.toString()}
                  alt="Student"
                  className="w-36 h-36 rounded-full object-cover border-4 border-brand-500 shadow-lg mt-2"
                />

                <h2 className="mt-5 text-2xl font-bold">
                  Tayyaba Shahzad 
                </h2>

                <span className="mt-2 rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-semibold">
                  Scholarship Student
                </span>
              </div>

              <div className="mt-8 space-y-5">

                <div>
                  <p className="text-gray-500 text-sm">Course</p>
                  <h3 className="font-bold text-lg">
                    E-Commerce & Digital Marketing
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Duration</p>
                  <h3 className="font-semibold">
                    6 Months
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Instructor</p>
                  <h3 className="font-semibold">
                    MHR Solution Team
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Mode</p>
                  <h3 className="font-semibold">
                    Physical + Online Support
                  </h3>
                </div>

              </div>
            </div>

            {/* Course Details */}
            <div className="bg-white rounded-3xl shadow-lg p-6 border mt-4">

              <h2 className="text-xl font-bold mb-4 mt-1">
                📚 Course Details
              </h2>

              <p className="text-gray-600 leading-8 mt-2">
                This professional training program is specially designed for
                students who want to build a successful online business or work
                as digital marketing experts.
              </p>

              <ul className="mt-5 space-y-3">

                <li>✅ Shopify Store Development</li>

                <li>✅ Daraz Selling</li>

                <li>✅ Amazon Fundamentals</li>

                <li>✅ Facebook & Instagram Ads</li>

                <li>✅ TikTok Marketing</li>

                <li>✅ Canva Graphic Design</li>

                <li>✅ Product Hunting</li>

                <li>✅ Freelancing Guide</li>

              </ul>

            </div>

          </div>

          {/* Right Side */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-lg border p-8 mt-2">

              <h2 className="text-3xl font-bold mb-8 mt-2">
                6-Month Learning Roadmap
              </h2>

              <div className="space-y-8 mt-4">

                <div className="flex gap-5 mt-1">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mt-1">
                      Week 1 - Introduction
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Course orientation, business mindset, online earning
                      opportunities, digital marketing overview and setup of
                      required tools.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 mt-2">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mt-1">
                      Month 1
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Shopify Store Development, branding, product listing and
                      payment gateway setup.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 mt-2">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mt-1">
                      Month 2
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Facebook Ads, Instagram Marketing, audience targeting,
                      campaign optimization and analytics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 mt-2">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                    4
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mt-1">
                      Month 3
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Product hunting, supplier sourcing and winning product
                      research.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 mt-2">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                    5
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mt-1">
                      Month 4 & 5
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Advanced scaling, TikTok Ads, content creation, Canva,
                      email marketing and automation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 mt-2">
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    6
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mt-1">
                      Month 6 - Graduation
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Final project, portfolio preparation, freelancing,
                      interview preparation, certificate and internship
                      opportunity.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8 sm:text-4xl">
          How It Works
        </h2>

        {/* Steps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-indigo-600 text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900">Educational Resources</h3>
            <p className="text-gray-700 mt-4">
              Our platform provides curated, easy-to-understand educational content about PCOS, including symptoms, diagnosis, treatment options, and lifestyle changes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-indigo-600 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900">Symptom Tracking</h3>
            <p className="text-gray-700 mt-4">
              Track your symptoms, menstrual cycles, and health data to monitor progress and make informed decisions about your health.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-indigo-600 text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900">Personalized Insights</h3>
            <p className="text-gray-700 mt-4">
              AI-driven insights and recommendations tailored to your unique needs, including diet, exercise, and lifestyle changes for better health management.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-indigo-600 text-4xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold text-gray-900">Medication & Reminders</h3>
            <p className="text-gray-700 mt-4">
              Set medication reminders and track adherence to your treatment plan to ensure that you stay on track with your health goals.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-indigo-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-900">Community Support</h3>
            <p className="text-gray-700 mt-4">
              Connect with others in the PCOS community, share experiences, and receive support through moderated discussions and forums.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-indigo-600 text-4xl mb-4">🩺</div>
            <h3 className="text-xl font-semibold text-gray-900">Health Monitoring</h3>
            <p className="text-gray-700 mt-4">
              Integrate wearable devices and health apps to monitor your physical activity, sleep, and other vital health metrics in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

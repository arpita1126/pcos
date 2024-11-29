import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6 sm:text-4xl">
          About Us
        </h2>

        {/* Content Card Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder
            affecting millions of women worldwide. It is characterized by a
            range of symptoms, including irregular menstrual cycles, excess
            androgen production, and polycystic ovaries. This disorder can lead
            to various health issues, such as infertility, metabolic syndrome,
            and cardiovascular disease.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our platform aims to provide a centralized hub for information,
            symptom tracking, personalized insights, and community support. By
            leveraging AI-driven data analysis, our goal is to empower women
            with PCOS to take control of their health and well-being. With
            educational resources, symptom tracking, and tailored recommendations,
            we aim to make managing PCOS easier and more effective.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 mt-4">
            To improve the quality of life for women with PCOS through
            technology, data-driven insights, and a supportive community.
          </p>
        </div>

        {/* Optional Image Section (Responsive Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Learn More About Our Platform
            </h3>
            <p className="text-lg text-gray-700 mt-4">
              Our platform integrates symptom tracking, health monitoring, and
              community support, making it easier for women with PCOS to manage
              their condition.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-48 h-auto rounded-lg shadow-md"  // Make the image smaller by setting width to 12rem (w-48)
              src={about}
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

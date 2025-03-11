const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "Illinois Institute of Technology",
      location: "Chicago, IL",
      period: " Jan 2023 - Dec 2024",
      
    },
    {
        degree: "Master of Computer Science",
        school: "Illinois Institute of Technology",
        location: "Chicago, IL",
        period: " Jan 2023 - Dec 2024",
        
      },
  ];

  return (
    <section id="education" className="py-20 bg-white bg-opacity-80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Education
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Education items */}
            {education.map((edu, index) => (
              <div key={index} className="relative mb-12">
                {/* This flex container controls the alternating layout */}
                <div className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Center dot on the timeline */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>

                  {/* Content box with conditional padding */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                  } relative`}>
                    {/* Content card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <span className="text-blue-600 font-semibold">{edu.period}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{edu.degree}</h3>
                      <div className="text-gray-600 font-medium mt-1">
                        {edu.school}
                      </div>
                      <div className="text-gray-500 text-sm mb-4">{edu.location}</div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 
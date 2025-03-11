const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Accenture",
      location: "Hyderabad, India",
      period: "Sept 2020 - Dec 2022",
      description: [
        "Developed and maintained web applications using React.js and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and improved application performance",
        "Worked with RESTful APIs and database integration"
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                  }`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <span className="text-blue-600 font-semibold">{exp.period}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{exp.title}</h3>
                      <div className="text-gray-600 font-medium mt-1">
                        {exp.company}
                      </div>
                      <div className="text-gray-500 text-sm mb-4">{exp.location}</div>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-base">{item}</li>
                        ))}
                      </ul>
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

export default Experience; 
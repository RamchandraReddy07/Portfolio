const About = () => {
  return (
    <section id="about" className="py-20 bg-white bg-opacity-80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            I am a passionate developer with 2 years of experience in full-stack
            development. With expertise in modern web technologies and a keen
            eye for design, I create efficient and user-friendly applications
            that solve real-world problems.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            My journey in technology began with Frontend development, and since
            then, I've worked on various projects that have helped me develop a
            deep understanding of software development principles and best
            practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Education
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-600">
                  <span className="font-medium">
                    Master of Computer Science
                  </span>
                  <br />
                  Illinois Institute of Technology, Chicago, IL
                </li>
                {/* Add more education items */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
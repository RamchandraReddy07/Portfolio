import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16">
      <div className="container mx-auto px-4 py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Ramchandra Reddy Sathu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        {/* <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
           
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 md:w-80 md:h-80 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero; 
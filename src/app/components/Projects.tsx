import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project. Explain the problem it solves and the technologies used.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of your second project. Highlight the key features and your role in development.',
      image: '/project2.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-white bg-opacity-80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-700 transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
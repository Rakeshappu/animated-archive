
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';

interface Project {
  title: string;
  technologies: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Job Portal",
    technologies: "React, Node.js",
    startDate: "2023-01",
    endDate: "2023-06",
    description: "Developed a MERN Stack-based job portal web application enabling recruiters to post jobs and applicants to apply for jobs. Implemented features for recruiters to create, update, and manage job postings, and for applicants to search, filter, and submit applications.",
    image: "/lovable-uploads/8ecab248-27a2-4925-8a9c-e272968c97b1.png"
  },
  {
    title: "Carbon Footprint Calculator",
    technologies: "HTML CSS JS REACT NODE.JS Typescript",
    startDate: "2023-07",
    endDate: "2023-12",
    description: "We developed a Carbon Footprint Calculator as part of a four-member team during a competitive hackathon.",
    image: "/placeholder.svg"
  }
];

const Projects = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-project');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          My Projects
        </h1>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`relative grid md:grid-cols-2 gap-8 items-center opacity-0 ${
                index % 2 === 0 ? 'md:translate-x-[-300px]' : 'md:translate-x-[300px]'
              }`}
              style={{
                transform: `rotate(${index % 2 === 0 ? '-5deg' : '5deg'})`,
                transition: 'all 1s ease'
              }}
            >
              <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <h2 className="text-3xl font-bold text-primary">{project.title}</h2>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-semibold">Technologies:</span> {project.technologies}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Duration:</span>{' '}
                    {new Date(project.startDate).toLocaleDateString()} -{' '}
                    {new Date(project.endDate).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                <button className="bg-primary hover:bg-primary-dark text-neutral px-6 py-2 rounded-full transition-colors duration-300">
                  Learn More
                </button>
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

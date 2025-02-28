
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const certificates = [
    {
      id: 1,
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "March 2023",
      skills: ["React", "Redux", "Hooks", "Context API"],
      credentialLink: "#",
    },
    {
      id: 2,
      name: "Full Stack Development",
      issuer: "freeCodeCamp",
      date: "January 2023",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      credentialLink: "#",
    },
    {
      id: 3,
      name: "Python Data Structures",
      issuer: "Coursera",
      date: "November 2022",
      skills: ["Python", "Data Structures", "Algorithms"],
      credentialLink: "#",
    },
    {
      id: 4,
      name: "Machine Learning Fundamentals",
      issuer: "edX",
      date: "August 2022",
      skills: ["Python", "ML", "Data Analysis"],
      credentialLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-fade-in">
          Experience
        </h1>

        {/* Experience Section */}
        <section className="mb-16 animate-fade-in">
          <div className="bg-neutral-light/20 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Professional Journey
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                I'm currently building my industry experience through personal and academic projects. I'm passionate about technology and continuously enhancing my skills to prepare for professional opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-light/30 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Looking for Opportunities
                </h3>
                <p className="text-gray-300 mb-4">
                  I'm actively seeking internships and entry-level positions in software development where I can apply my skills and grow professionally.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Full Stack Development</li>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Software Engineering</li>
                </ul>
              </div>

              <div className="bg-neutral-light/30 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  What I Bring to the Table
                </h3>
                <p className="text-gray-300 mb-4">
                  While I'm building my professional experience, I offer:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Strong foundation in programming fundamentals</li>
                  <li>Experience with modern development tools and frameworks</li>
                  <li>Problem-solving skills and analytical thinking</li>
                  <li>Dedication to continuous learning and improvement</li>
                  <li>Ability to collaborate effectively in team environments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="animate-fade-in">
          <div className="bg-neutral-light/20 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">
              Certifications & Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-light/30 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {cert.name}
                      </h3>
                      <span className="text-sm text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-gray-300 mb-4">Issued by: {cert.issuer}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark underline text-sm mt-auto inline-block"
                    >
                      View credential
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;

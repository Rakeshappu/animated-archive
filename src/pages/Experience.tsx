
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import hk from "../images/hk.png"
import PS from "../images/PS.png"
import GAI from "../images/GAI.png"
import NPTL from "../images/NPTL.png"
import AIML from "../images/ALML.png"
import AD from "../images/AD.png"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";


const Experience = () => {
  const certificates = [
    {
      id: 1,
      name: "HackerRank badges",
      issuer: "HackerRank",
      date: "Since 2023",
      skills: ["C language, JavaScript"],
      media: hk,
    },
    {
      id: 2,
      name: "Problem Solving (Basic) Certificate",
      issuer: "HackerRank",
      date: "Since 2023",
      skills: ["C language"],
      media: PS,
    
    },
    {
      id: 3,
      name: "Generative AI Virtual Internship",
      issuer: "All India Council for Technical Education",
      date: "October 2024",
      skills: ["AI"],
      media: GAI,
      
    },
    {
      id: 4,
      name: "The Joy of Computing Using Python",
      issuer: "NPTEL ONLINE CERTIFICATION",
      date: "October 2024",
      skills: ["Python"],
      media: NPTL,
    
    },
    {
      id: 5,
      name: "AI_ML_Virtual_Internship_Certificate",
      issuer: "All India Council for Technical Education",
      date: "June 2024",
      skills: ["AI","ML"],
      media: AIML,
      
    },
    {
      id: 6,
      name: "Android Developer Virtual Internship",
      issuer: "All India Council for Technical Education",
      date: "January 2024",
      skills: [""],
      media: AD,
    
    },
  ];

  return (
    <div className="min-h-screen bg-neutral flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-fade-in">
          Experience
        </h1>

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
            </div>
          </div>
        </section>

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
                    
                    {cert.media && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <img 
                            src={cert.media} 
                            alt={cert.name} 
                            className="w-full h-auto max-h-40 object-contain mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                          />
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-auto bg-neutral-light/90 p-4">
                          <img 
                            src={cert.media} 
                            alt={cert.name} 
                            className="w-full h-auto max-h-[70vh] object-contain mx-auto" 
                          />
                        </DialogContent>
                      </Dialog>
                    )}
                    
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

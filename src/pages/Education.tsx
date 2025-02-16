
import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { GraduationCap, School, University } from 'lucide-react';

interface Education {
  institution: string;
  course: string;
  duration: string;
  grade: string;
  description: string;
  icon: any;
  image: string;
}

const educationData: Education[] = [
  {
    institution: "P. E. S. College Of Engineering, Mandya",
    course: "Information Science and Engineering",
    duration: "Dec 2021 - Jul 2025",
    grade: "7.98 CGPA",
    description: "I am currently pursuing a Bachelor's degree in Information Science and Engineering at P. E. S. College Of Engineering, Mandya.",
    icon: University,
    image: "/src/images/college.png"
  },
  {
    institution: "Nisarga Independent PU College, Kollegal",
    course: "PCMB",
    duration: "2019 - 2021",
    grade: "90.6%",
    description: "I completed my class 11 & 12 school education at Nisarga Independent PU College, Kollegal.",
    icon: School,
    image: "/src/images/pu.png"
  },
  {
    institution: "Jawwahar Navodaya Vidyalaya, Honadarabalu",
    course: "6th - 10th",
    duration: "2014 - 2019",
    grade: "83.6%",
    description: "I completed my class 6 - 10 education at Jawwahar Navodaya Vidyalaya, Honadarabalu, Chamarajnagar. And PROUD TO BE A NAVODAYAN.",
    icon: GraduationCap,
    image: "/src/images/school.png"
  }
];

const Education = () => {
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    educationRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-neutral-light">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-bold text-primary text-center mb-6">Education Journey</h1>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          My academic path has been a journey of continuous learning and growth.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30" />

          <div className="space-y-24">
            {educationData.map((edu, index) => (
              <div
                key={edu.institution}
                ref={(el) => (educationRefs.current[index] = el)}
                className={`relative grid md:grid-cols-2 gap-8 items-center opacity-0 transform 
                  ${index % 2 === 0 ? '-translate-x-24' : 'translate-x-24'} 
                  transition-all duration-1000`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full z-10">
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                </div>

                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                  <div className={`flex items-center space-x-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                    <edu.icon className="w-10 h-10 text-primary flex-shrink-0" />
                    <h2 className="text-2xl font-semibold text-white">{edu.institution}</h2>
                  </div>
                  <div className="space-y-2">
                    <p className="text-primary font-medium text-lg">{edu.course}</p>
                    <p className="text-gray-400">{edu.duration}</p>
                    <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                      <p className="text-primary font-semibold">Grade: {edu.grade}</p>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 0 ? 'md:order-2' : ''}`}>
                  <div className={`relative h-[300px] rounded-xl overflow-hidden group 
                    ${index % 2 === 0 ? 'transform -rotate-3' : 'rotate-3'}
                    transition-transform hover:rotate-0 duration-500 shadow-2xl`}
                  >
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

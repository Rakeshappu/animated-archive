
import { useEffect, useRef } from 'react';
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
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
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
    <div className="min-h-screen bg-neutral">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-bold text-primary text-center mb-6">Education</h1>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>

        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <div
              key={edu.institution}
              ref={(el) => (educationRefs.current[index] = el)}
              className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
              style={{ 
                transitionDelay: `${index * 200}ms`,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                overflow: 'hidden'
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <edu.icon className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-semibold text-white">{edu.institution}</h2>
                  </div>
                  <div className="space-y-2">
                    <p className="text-primary font-medium">{edu.course}</p>
                    <p className="text-gray-400">{edu.duration}</p>
                    <p className="text-white font-semibold">Grade: {edu.grade}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
                <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

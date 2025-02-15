
import { Github, Linkedin, Globe, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-neutral relative overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-white text-3xl md:text-4xl font-light">Hi, I am</h2>
            <h1 className="text-primary text-5xl md:text-7xl font-bold">Rakesh S</h1>
            <h3 className="text-white text-2xl md:text-3xl">
              Aspiring Full Stack Developer
            </h3>
            <p className="text-gray-300 text-lg max-w-xl">
              I am a motivated and versatile individual, always eager to take on new
              challenges. With a passion for learning I am dedicated to delivering
              high-quality results. With a positive attitude and a growth mindset,
              I am ready to make a meaningful contribution and achieve great things.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-neutral px-8 py-3 rounded-full transition-colors duration-300 font-semibold">
              Check Resume
            </button>
            <div className="flex space-x-6 pt-4">
              {[
                { Icon: Github, link: '#' },
                { Icon: Linkedin, link: '#' },
                { Icon: Globe, link: '#' },
                { Icon: Twitter, link: '#' },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in delay-300">
            <div className="absolute inset-0 bg-primary rounded-full opacity-20 blur-3xl"></div>
            <img
              src="/lovable-uploads/15f94349-1103-4075-8df5-b50ffc217470.png"
              alt="Profile"
              className="relative rounded-full w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

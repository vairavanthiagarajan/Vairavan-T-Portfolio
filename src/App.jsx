import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import alchemy from "./assets/alchemy.png";
import cinescope from "./assets/cinescope1.png";
import google from "./assets/google.png";
import netflix from "./assets/netflix.png";

const socialLinks = [
  { id: 1, name: "GitHub", icon: "github", url: "https://github.com/vairavanthiagarajan/" },
  { id: 2, name: "LinkedIn", icon: "linkedin", url: "www.linkedin.com/in/vairavan-t-0b40282b9" },
  { id: 3, name: "Twitter", icon: "twitter", url: "#" },
  { id: 4, name: "Instagram", icon: "instagram", url: "https://www.instagram.com/vairavan._" },
];

const skills = [
  { id: 1, title: "React", level: 70 },
  { id: 2, title: "Tailwind CSS", level: 90 },
  { id: 3, title: "Javascript", level: 80 },
  { id: 4, title: "Framer Motion", level: 75 },
  { id: 5, title: "Bootstrap", level: 80 },
  { id: 6, title: "HTML / CSS", level: 95 },
  { id: 7, title: "Material / Daisy UI", level: 80 },
];

const backend = [
  { id: 1, title: "Express.js", level: 70 },
  { id: 2, title: "Node.js", level: 75 },
  { id: 3, title: "Java", level: 65 },
];

const tools = [
  { id: 1, title: "Github", level: 85 },
  { id: 2, title: "Figma", level: 80 },
  { id: 3, title: "Vercel", level: 75 },
  { id: 4, title: "Netlify", level: 80 },
];

const projects = [
  { 
    id: 1, 
    title: "Alchemy: Resume Builder", 
    path: "https://alchemy-resume-builder.netlify.app/",
    description: "A modern resume builder with customizable templates",
    tech: ["Javascript", "Tailwind CSS"],
    img : alchemy,
  },
  { 
    id: 2, 
    title: "Cinescope: Movie Discover App", 
    path: "https://cine-scope-bhszs8gkx-vairavanthiagarajans-projects.vercel.app/",
    description: "Browse and discover movies with a sleek interface",
    tech: ["React", "API Integration" , "Tailwind CSS"],
    img : cinescope,
  },
  { 
    id: 3, 
    title: "Google Search Clone", 
    path: "https://google-clone-by-v.netlify.app/",
    description: "A functional clone of Google's search interface",
    tech: ["React js", "Express js", "Tailwind CSS"] ,
    img : google,
  },
  { 
    id: 4, 
    title: "Netflix Inspired Portfolio", 
    path: "https://vairavan-t-portfolio.netlify.app/",
    description: "A portfolio styled like the Netflix interface",
    tech: ["React", "Tailwind CSS"],
    img : netflix,
  },
];


export default function App() {
  const [show, setShow] = useState(true);
  const [sdisplay, setSdisplay] = useState(false);
  const [pdisplay, setPdisplay] = useState(false);
  const [cdisplay, setCdisplay] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000); 
  }, []);

  const showSkills = () => {
    if (!sdisplay) {
      setSdisplay(true);
      setPdisplay(false);
      setCdisplay(false);
    }
  };
  
  const showProjects = () => {
    if (!pdisplay) {
      setPdisplay(true);
      setSdisplay(false);
      setCdisplay(false);
    }
  };

  const showContact = () => {
    if (!cdisplay) {
      setCdisplay(true);
      setPdisplay(false);
      setSdisplay(false);
    }
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    const user_name = formData.get("user_name");
    const user_email = formData.get("user_email");
    const message = formData.get("message");
  
    emailjs.send('service_5v71epv', 'template_daercb3', {
      user_name: user_name,  
      user_email: user_email, 
      message: message, 
    }, 'fe_q-EgsDHTuWTDxu')
    .then(response => console.log("Email Sent!", response))
    .catch(error => console.error("Error:", error));
  };

  const text = "Vairavan Thiagarajan";
  const [boldCount, setBoldCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoldCount((prev) => (prev < text.length ? prev + 1 : 0));
    }, 400); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5 md:p-7 bg-[#0f172a] min-h-screen relative cursor-none">
      <CustomCursor />
      {show ? (
        <motion.div className="fixed inset-0 bg-[#0f172a] flex items-center justify-center z-50">
          <motion.div
          className="absolute inset-0 flex justify-center items-center font-DMsans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          >
            <h1 className="font-DMsans text-white text-3xl font-extralight"> <span className="font-CabinetGrotesk text-orange-200 font-bold">Vairavan T</span> Portfolio</h1>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="border-2 min-h-screen border-white/10 rounded-xl bg-[#0f172a]/40 shadow-[0_0_40px_rgba(56,189,248,0.1)] p-7 flex flex-col relative overflow-hidden">
        <motion.video 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute top-0 left-0 w-full h-full opacity-10 object-cover pointer-events-none" 
          autoPlay 
          loop 
          muted
          playsInline
        >
          <source src="bg1.mp4" type="video/mp4" />
        </motion.video>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }} 
        className="flex flex-col gap-1 content-start relative z-10"
        >
          <h1 className="font-DMsans text-5xl font-extralight text-orange-200">
            {text.split("").map((char, i) => (
            <motion.span
              key={i}
              animate={{ fontWeight: i < boldCount ? 800 : 200 }} 
              transition={{ duration: 0.2 }}
            >
              {char}
            </motion.span>
            ))}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/80">
            <p className="text-sm sm:text-base font-medium tracking-wider border-l-2 border-orange-200 pl-3">
              Designer & Developer
            </p>
            <span className="hidden sm:block">•</span>
            <p className="text-sm sm:text-base pl-1">Final Year B.TECH IT @ Vels University</p>
          </div>
          <div className="mt-4 flex gap-4 pb-3">
            {socialLinks.map(link => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-200 hover:text-[#0f172a] text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{link.name[0]}</span>
              </motion.a>
            ))}
          </div>
          <br />
          {sdisplay ? (
            <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 w-full max-w-3xl"
            >
              <h2 className="font-DMsans text-white text-xl md:text-2xl font-bold mb-4 border-b border-white/10 pb-2">Frontend</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map(skill => (
                  <motion.div 
                    key={skill.id}
                    className="group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                  <div className="flex justify-between mb-1">
                    <p className="text-white text-sm">{skill.title}</p>
                    <p className="text-white/60 text-xs">{skill.level}%</p>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-orange-200 to-orange-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                 </motion.div>
                ))}
              </div>
              <h2 className="font-DMsans text-white text-xl md:text-2xl font-bold mb-4 border-b border-white/10 pb-2">Backend</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {backend.map(skill => (
                  <motion.div 
                    key={skill.id}
                    className="group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                  <div className="flex justify-between mb-1">
                    <p className="text-white text-sm">{skill.title}</p>
                    <p className="text-white/60 text-xs">{skill.level}%</p>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-orange-200 to-orange-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                 </motion.div>
                ))}
              </div>
              <h2 className="font-DMsans text-white text-xl md:text-2xl font-bold mb-4 border-b border-white/10 pb-2">Tools & Platforms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tools.map(skill => (
                  <motion.div 
                    key={skill.id}
                    className="group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                  <div className="flex justify-between mb-1">
                    <p className="text-white text-sm">{skill.title}</p>
                    <p className="text-white/60 text-xs">{skill.level}%</p>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-orange-200 to-orange-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                 </motion.div>
                ))}
              </div>
            </motion.div>
          ) : pdisplay ? (
            <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-3xl"
            >
              <h2 className="font-DMsans text-2xl text-white mb-6 border-b border-white/10 pb-2 font-bold">
                Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((proj) => (
                  <motion.div
                    key={proj.id}
                    className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 hover:border-orange-200/50 group transition-all duration-300"
                  >
                    <div className="h-40 bg-gradient-to-br from-orange-200/10 to-blue-400/10 flex items-center justify-center">
                      <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${proj.img})` }}> 
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-lg font-medium mb-2 group-hover:text-orange-200 transition-colors duration-300">
                        {proj.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">{proj.description}</p>
                      <div className="flex gap-2 mb-4">
                        {proj.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={proj.path} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-orange-200 transition-colors duration-300"
                      >
                        <span className="text-sm">View Project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                          stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : cdisplay ? (
            <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-3xl"
            >
              <h2 className="font-DMsans text-white text-xl md:text-2xl mb-6 border-b border-white/10 pb-2 font-bold">Contact me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-white/80 mb-6">Feel free to reach out to me for any inquiries, collaboration proposals, or just to say hello.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-200/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p mailto="vairavanthiagarajanwork@gmail.com" className="text-white text-sm">vairavanthiagarajanwork@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-200/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Location</p>
                      <p className="text-white text-sm">Chennai, India</p>
                    </div>
                  </div>
              </div>
              </div>
              <div className="flex flex-col gap-4">
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 pt-3">
                <input type="text" name="user_name" placeholder="Your Name" className="p-2 border text-white border-white w-full max-w-3xl text-xs md:text-sm" required />
                <input type="email" name="user_email" placeholder="Your Email" className="p-2 border text-white border-white w-full max-w-3xl text-xs md:text-sm" required />
                <textarea name="message" placeholder="Your Message" className="p-2 border text-white border-white w-full max-w-3xl text-xs md:text-sm" required></textarea>
                <button type="submit" className="p-2 bg-gradient-to-r from-orange-200 to-orange-400 text-black w-full max-w-3xl text-xs md:text-sm">Send Email</button>
              </form>
              </div>
              </div>
            </motion.div>
          ) : (
            <p className="text-white text-xs md:text-sm w-full max-w-xl">
              I’m passionate about technology and love turning ideas into real-world solutions. As I complete my B.Tech in Information Technology at VELS University, I’ve gained hands-on experience through projects and internships, sharpening my skills in web development and problem-solving. I enjoy collaborating, learning new things, and finding creative ways to improve user experiences. Excited for new opportunities to grow and make an impact in the tech world!
            </p>
          )
          }
        </motion.div>
        <br />
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="flex flex-col gap-2 justify-end items-end md:absolute bottom-5 right-5 z-10"
    >
      <h1
        className={`font-[velcan] text-6xl md:text-7xl lg:text-9xl ${
          active === "skills" ? "text-orange-200" : "text-white"
        } hover:pr-5 duration-300 transition-all ease-in-out cursor-pointer`}
        onClick={() => {
          setActive("skills");
          showSkills();
          scrollToTop();
        }}
      >
        Skills
      </h1>
      <h1
        className={`font-[velcan] text-6xl md:text-7xl lg:text-9xl ${
          active === "projects" ? "text-orange-200" : "text-white"
        } hover:pr-5 duration-300 transition-all ease-in-out cursor-pointer`}
        onClick={() => {
          setActive("projects")
          showProjects();
          scrollToTop();
        }}
      >
        Projects
      </h1>
      <h1
        className={`font-[velcan] text-6xl md:text-7xl lg:text-9xl ${
          active === "contact" ? "text-orange-200" : "text-white"
        } hover:pr-5 duration-300 transition-all ease-in-out cursor-pointer`}
        onClick={() => {
          setActive("contact")
          showContact();
          scrollToTop();
        }}
      >
        Contact
      </h1>
      </motion.div>
      </motion.div>
      )}
      <div className="pt-4">
        <p className="text-center text-xs md:text-sm text-white/60 font-CabinetGrotesk">Created by @Vairavan Thiagarajan</p>
      </div>
    </div>
  );
}

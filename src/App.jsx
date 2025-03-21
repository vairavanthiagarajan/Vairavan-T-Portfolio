import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function App() {
  const [show, setShow] = useState(true);
  const [sdisplay, setSdisplay] = useState(false);
  const [pdisplay, setPdisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000); 
  }, []);

  const showSkills = () => {
    if (!sdisplay) {
      setSdisplay(true);
      setPdisplay(false);
    }
  };
  
  const showProjects = () => {
    if (!pdisplay) {
      setPdisplay(true);
      setSdisplay(false);
    }
  };

  return (
    <div className="p-7 bg-black relative">
      {show ? (
        <motion.div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <motion.div
          className="absolute inset-0 flex justify-center items-center font-DMsans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          >
            <h1 className="font-DMsans text-white text-3xl font-extralight"> <span className="font-CabinetGrotesk">Vairavan T</span> Portfolio</h1>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="h-[93.75vh] lg:h-[92vh] border-2 border-white/70 p-7 flex flex-col relative overflow-hidden"
        >
        <motion.video 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute top-0 left-0 w-full h-full opacity-50 object-cover pointer-events-none" 
          autoPlay 
          loop 
          muted
          playsInline
        >
          <source src="bg.mp4" type="video/mp4" />
        </motion.video>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }} 
        className="flex flex-col gap-1 content-start relative z-10"
        >
          <h1 className="font-DMsans text-5xl font-extralight text-white">Vairavan Thiagarajan</h1>
          <p className="text-white text-xs pl-1">(Designer & Developer)</p>
          <p className="text-white text-xs pl-1">Final Year B.TECH IT student @Vels University</p>
          <br />
          {sdisplay ? (
            <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-DMsans text-white text-xl md:text-2xl">Frontend</h2>
              <p className="text-white text-xs md:text-sm">React</p>
              <p className="text-white text-xs md:text-sm">Javascript</p>
              <p className="text-white text-xs md:text-sm">Tailwind CSS</p>
              <p className="text-white text-xs md:text-sm">Bootstrap</p>
              <p className="text-white text-xs md:text-sm">HTML / CSS</p>
              <p className="text-white text-xs md:text-sm">Framer Motion</p>
              <p className="text-white text-xs md:text-sm">Material / Daisy UI</p>
              <br />
              <h2 className="font-DMsans text-white text-xl md:text-2xl">Backend</h2>
              <p className="text-white text-xs md:text-sm">Express js</p>
              <p className="text-white text-xs md:text-sm">Node js</p>
              <p className="text-white text-xs md:text-sm">Java</p>
              <br />
              <h2 className="font-DMsans text-white text-xl md:text-2xl">Tools & Platforms</h2>
              <p className="text-white text-xs md:text-sm">Github</p>
              <p className="text-white text-xs md:text-sm">Figma</p>
              <p className="text-white text-xs md:text-sm">Netlify</p>
              <p className="text-white text-xs md:text-sm">Vercel</p>
            </motion.div>
          ) : pdisplay ? (
            <motion.div
            key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-DMsans text-white text-xl md:text-2xl">Projects</h2>
              <a href="https://alchemy-resume-builder.netlify.app/" target="_blank">
              <div className="flex flex-row gap-3 hover:pl-5 cursor-pointer duration-300 transition-all ease-in-out w-fit">
              <p className="text-white text-xs md:text-sm">Alchemy Resume Builder</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4 pt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              </div>
              </a>
              <a href="https://cine-scope-bhszs8gkx-vairavanthiagarajans-projects.vercel.app/" target="_blank">
              <div className="flex flex-row gap-3 hover:pl-5 cursor-pointer duration-300 transition-all ease-in-out w-fit">
              <p className="text-white text-xs md:text-sm">Movie Discover Web App</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4 pt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              </div>
              </a>
              <a href="https://google-clone-by-v.netlify.app/" target="_blank">
              <div className="flex flex-row gap-3 hover:pl-5 cursor-pointer duration-300 transition-all ease-in-out w-fit">
              <p className="text-white text-xs md:text-sm">Google Search Clone</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4 pt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              </div>
              </a>
              <a href="https://vairavan-t-portfolio.netlify.app/" target="_blank">
              <div className="flex flex-row gap-3 hover:pl-5 cursor-pointer duration-300 transition-all ease-in-out w-fit">
              <p className="text-white text-xs md:text-sm">Netflix Inspired Portfolio</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4 pt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              </div>
              </a>
            </motion.div>
          ) : (
            null
          )}
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }} 
        className="flex flex-col gap-2 justify-end items-end absolute bottom-5 right-5 z-10"
        >
          <h1 className="font-[velcan] text-6xl md:text-7xl lg:text-9xl text-white hover:pr-5 cursor-pointer duration-300 transition-all ease-in-out"
          onClick={showSkills}
          >
            Skills</h1>
          <h1 className="font-[velcan] text-6xl md:text-7xl lg:text-9xl text-white hover:pr-5 cursor-pointer duration-300 transition-all ease-in-out"
          onClick={showProjects}
          >
            Projects</h1>
          <h1 className="font-[velcan] text-6xl md:text-7xl lg:text-9xl text-white hover:pr-5 cursor-pointer duration-300 transition-all ease-in-out">Contact</h1>
        </motion.div>
      </motion.div>
      )}
    </div>
  );
}

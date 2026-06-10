import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css";
import rizqiImage from "./assets/rizqi.png";
import resumeFile from "./assets/Resume.pdf";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#0ea5e9", "#22c55e", "#06b6d4"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.4}
        />
      </div>

      <main className="max-w-7xl mx-auto px-6">

        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-10 items-center pt-16">

          <div data-aos="fade-up">

            <div className="glass inline-flex gap-3 px-5 py-2 rounded-full mb-6 shadow-lg">
              <img src={rizqiImage} className="w-9 rounded-md" />
              <q className="opacity-80">Learning, building, and creating impact through technology.</q>
            </div>

            <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 text-transparent bg-clip-text mb-6">
              Hi I'm Rizqi Fajri
            </h1>

            <BlurText
              text="A passionate full-stack developer crafting modern, intelligent, and high-performance digital experiences with cutting-edge technology."
              delay={150}
              animateBy="words"
              direction="top"
              className="mb-6 text-lg opacity-80"
            />

            <div className="flex gap-4">

              <a
                href={resumeFile}
                download="Rizqi_Fajri_CV.pdf"
                className="btn-primary"
              >
                Download CV
              </a>

              <a
                href="#project"
                className="btn-outline"
              >
                Explore Projects
              </a>

            </div>
          </div>


          <div data-aos="fade-up" data-aos-delay="200">

            <ProfileCard
              name="Rizqi Fajri"
              title="Full Stack Developer"
              handle="rizqifajri"
              status="Online"
              contactText="Contact Me"
              avatarUrl={rizqiImage}
              showUserInfo={true}
              enableTilt={true}
            />

          </div>

        </section>


        {/* ABOUT */}
        <section
          ref={aboutRef}
          className="mt-28 glass rounded-3xl p-12"
          data-aos="fade-up"
        >

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-4xl font-bold mb-6">
                About Me
              </h2>

              <BlurText
                text="I'm Rizqi Fajri sya'ban, an Information Systems student passionate about creating technology that solves real-world problems. I have experience developing web and mobile applications, ranging from community platforms and business solutions to social impact projects. Driven by curiosity and continuous learning, I strive to build innovative digital experiences that are useful, accessible, and meaningful for people."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-lg opacity-80"
              />

              <div className="grid grid-cols-3 mt-10 text-center">

                <div>
                  <h1 className="text-4xl text-cyan-400 font-bold">8</h1>
                  <p>Projects</p>
                </div>

                <div>
                  <h1 className="text-4xl text-cyan-400 font-bold">2+</h1>
                  <p>Years Exp</p>
                </div>

                <div>
                  <h1 className="text-4xl text-cyan-400 font-bold">3.79</h1>
                  <p>GPA</p>
                </div>

              </div>

            </div>


            <div className="flex justify-center">
              <Lanyard />
            </div>

          </div>

        </section>


        {/* TOOLS */}
        <section className="mt-32">

          <h1 className="section-title">
            Tools & Technologies
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-14">

            {listTools.map((tool) => (

              <div
                key={tool.id}
                className="glass card"
              >

                <img
                  src={tool.gambar}
                  className="w-14 mb-3"
                />

                <h3 className="font-semibold text-lg">
                  {tool.nama}
                </h3>

                <p className="opacity-60 text-sm">
                  {tool.ket}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* PROJECT */}
        <section id="project" className="mt-32">

          <h1 className="section-title text-center">
            Selected Projects
          </h1>

          <div className="mt-16">

            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
            />

          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="mt-32">

          <h1 className="section-title text-center">
            Contact & Chat
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="glass p-6 rounded-2xl">
              <ChatRoom />
            </div>


            <form
              action="https://formsubmit.co/rizqisyaban2510@gmail.com"
              method="POST"
              className="glass p-10 rounded-2xl"
            >

              <input
                type="text"
                name="Name"
                placeholder="Full Name"
                className="input"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="input"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                className="input"
                required
              />

              <button className="btn-primary w-full">
                Send Message
              </button>

            </form>

          </div>

        </section>

      </main>


      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
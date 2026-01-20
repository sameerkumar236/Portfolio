import Sidebar from "./components/ui/structure/Sidebar";
import RightNavbar from "./components/ui/structure/RightNavbar";
import MobileMenu from "./components/ui/MobileMenu";

import Hero from "./components/ui/sections/Hero";
import Stats from "./components/ui/sections/Stats";
import About from "./components/ui/sections/About";
import Resume from "./components/ui/sections/Resume";
import Tools from "./components/ui/sections/Tools";
import Projects from "./components/ui/sections/Projects";
import Contact from "./components/ui/sections/Contact";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <MobileMenu />
      <Sidebar />
      <RightNavbar />

      <main className="px-6 py-10 lg:ml-[22rem]">
        {/* 🔥 CENTER WRAPPER */}
        <div className="max-w-[880px] mx-auto relative top-5">
          
          <Hero />
          <Stats />
          <Projects />
          <About />
          <Resume />
          <Tools />
          <Contact />
        </div>
      </main>
    </div>
  );
}
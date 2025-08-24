import { Landing } from './components/sections/Landing';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';

export default function HomePage() {
  return (
    <div className="w-full">
      <Landing />
      <About />
      <Education />
      <div className="w-[80vw] mx-auto border-t border-white/10 text-center" />  
      <Skills />
      <div className="w-[80vw] mx-auto border-t border-white/10 text-center" />
      <Projects />
    </div>
  );
}
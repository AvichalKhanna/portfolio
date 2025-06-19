import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pic from './assets/pic.png'
import Project from './components/Project';
import game from './assets/game.mp4'
import jarvis from './assets/jarvis.mp4'
import incue from './assets/incue.jpeg'
import LFR from './assets/LFR.mp4'
import instagram from './assets/insta.svg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
import { useRef } from 'react';

function App() {
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='absolute top-0 left-0 w-screen h-screen'  style={{ fontFamily: 'Inter, sans-serif' }}>
        


        {/* Mobile Layout */}
        <div className='flex flex-col select-none'>
          <div ref={aboutRef} className='flex justify-center items-center w-full h-30 bg-[#1b1f23]'>
            <img src={pic} className='w-20 h-18 rounded-full pt-2'></img>
            <div className='flex flex-col leading-none justify-between'>
              <p className='text-[32px] whitespace-nowrap text-stone-300 pl-2 pt-1'>Avichal Khanna</p>
              <p className='text-[14px] whitespace-nowrap text-stone-500 pl-2 pt-1 mr-auto'>Full Stack Developer</p>
            </div>
          </div>

          {/*About*/}
          <hr className="border-t border-stone-300 my-5" />
          <div className="rounded-xl px-2">
            <p className="text-stone-400 text-lg leading-relaxed text-left">
              Hi, I am Avichal Khanna, an 18-year-old developer with 5+ years of programming experience.
              I’ve built everything from full-stack web apps to AI systems. Skilled in modern frameworks, UI/UX, and machine learning.
              I turn ideas into clean, high-impact digital solutions. Always learning, always building — this is just the beginning.
            </p>
          </div>
          <hr className="border-t border-stone-300 my-4" />

          {/*Projects*/}
          <div ref={projectRef} className='flex flex-col items-center justify-center align-center w-screen'>
          <Project
            name="Zombie Survival Game"
            description="UE5 based 3D Zombie Survival Game where defences could be purchased using fictional currency to protect against continous waves of Zombies"
            video={game}
            image = "NONE"
          />
          <Project
            name="Jarvis"
            description="Jarvis-Style Assistant made completely in python, Equipped with a Neural Scheme connected to Google's Gemini in backend, with Voice and Gesture Control, and human like voice reply."
            video={jarvis}
            image = "NONE"
          />
          <Project
            name="InCue"
            description="A website designed to ease event listing, promotion and management. All done in just one click."
            video= "NONE"
            image = {incue}
          />
          <Project
            name="Line Following Robot"
            description="Aurduino board based line follower bot that uses IR sensors to follow a given path, rpogrammed in C inspired Arduino Language."
            video= {LFR}
            image = "NONE"
          />
          </div>

          <hr className="border-t border-stone-300 my-4" />
          
          {/*Tech Stack*/}
          <div ref={experienceRef} className='w-screen text-stone-400 pt-5 pb-5'>
                <h2 className='text-lg'>Tech Stack</h2>
                <div className='flex gap-6 justify-center'>
                  <p>React.js</p>
                  <p>Tailwind</p>
                  <p>JSX</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JS</p>
                </div>
                <div className='flex gap-4 justify-center'>
                  <p>Node.js</p>
                  <p>Flask</p>
                  <p>Django</p>
                  <p>Socket.IO</p>
                  <p>WebSockets</p>
                </div>
                <div className='flex gap-4 justify-center'>
                  <p>Python</p>
                  <p>TensorFlow</p>
                  <p>Keras</p>
                  <p>Transformers</p>
                  <p>LLM</p>
                </div>
                <div className='flex gap-8 justify-center'>
                  <p>Arduino</p>
                  <p>C/C++</p>
                  <p>SQL</p>
                  <p>Java</p>
                  <p>Tkinter</p>
                </div>
          </div>

          {/*Socials Bar*/}
          <div ref={contactRef} className='bg-black w-screen-2 mx-5 h-15 mt-2 mb-15 rounded-full flex justify-center align-center items-center'>
            
            <a href="https://instagram.com/_avichalkhanna_" className="socialContainer containerOne mr-8">
              <img src={instagram} className="socialSvg instagramSvg" alt="Instagram" />
            </a>

            <a href="https://www.linkedin.com/in/avichal-khanna-92b5b1278/" className="socialContainer containerTwo mr-8">
              <img src={linkedin} className="socialSvg linkdinSvg" alt="LinkedIn" />
            </a>

            <a href="https://x.com/Avichal81" className="socialContainer containerThree">
              <img src={twitter} className="socialSvg twitterSvg" alt="Twitter" />
            </a>

          </div>

          {/*Nav Bar*/}
          <div className='fixed bottom-0 w-screen h-10 flex bg-black gap-4 justify-center items-center'>
                <a onClick={scrollToAbout}><p className='text-xl text-stone-600 transform hover:scale-110 transform transition 500s ease-in-out hover:text-stone-300'>About</p></a>
                <a onClick={scrollToProject}><p className='text-xl text-stone-600 transform hover:scale-110 transform transition 500s ease-in-out hover:text-stone-300'>Projects</p></a>
                <a onClick={scrollToExperience}><p className='text-xl text-stone-600 transform hover:scale-110 transform transition 500s ease-in-out hover:text-stone-300'>Experience</p></a>
                <a onClick={scrollToContact}><p className='text-xl text-stone-600 transform hover:scale-110 transform transition 500s ease-in-out hover:text-stone-300'>Contact</p></a>
          </div>

      </div>
      </div>
    </>
  )
}

export default App

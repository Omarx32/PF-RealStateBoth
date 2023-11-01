import React from "react";
import style from "./View.module.css";
import { Cards } from "./Cards/Cards";


export const View = () => {
  return (
    <div className="">
      <section id="home" className="w-full flex justify-center items-center h-screen ">
        <div className=" ">
          <img className={style.imgMe} src="./foto.png" alt="holacomovas" />
        </div>
        <div>
          <h1 class="text-8xl mb-4" className={style.text}>Omar</h1>
          <div>
          <h1 class="text-8xl mb-4 ml-12" className={style.text1}>Sampayo</h1>
          </div>
          <h3 className="text-4xl mt-8">Full-Stack Web Developer</h3>
          <p className=" mt-8">
            I'm 18 years old and I'm from Valencia, Venezuela. Over the last
            year, I have worked on various <br />
            projects using mainly the MERN stack. One of the things I enjoy most
            about my work is paying close attention to details. <br /> I like to
            focus on design and user experience, and I make sure that my
            projects are not only functional but also beautiful and enjoyable to
            use. <br />I am always up to date with the latest trends in
            technology and design.
          </p>
        </div>
      </section>
      <section id="exterprise" className="pt-32 pb-44">
        <div className="flex justify-center">
          <h1 className="text-7xl">My Exterprise</h1>
        </div>
        <div className="w-full flex justify-center items-center mt-32">
          <div className="pr-64">
            <div className="flex items-center mb-8">
              <img className="h-16 w-16" src="./react.svg" alt="" />
              <div>
                <h1 className="text-xl ml-16">Front-End</h1>
                <h1 className="text-xl ml-20">ReactJS NextJS</h1>
              </div>
            </div>
            <div>
              <p>
                {`
      <h2> Passionate about UI/UX.  I have experience in
     
                    `}
                <br />
                {` HTML5,  CSS3,  JS, REACT and NEXTJS frameworks </h2>`}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-8">
              <img className="h-16 w-16" src="./nodejs.svg" alt="" />
              <div>
                <h1 className="text-xl ml-16">Back-End </h1>
                <h1 className="text-xl ml-20 "> NodeJS NestJS</h1>
              </div>
            </div>

            <div>
              <p>
                {`
      <h2> Passionate about UI/UX.  I have experience in
     
                    `}
                <br />
                {` HTML5,  CSS3,  JS, REACT and NEXTJS frameworks </h2>`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="w-full flex justify-center items-center h-96">
        <div>
          <h1 className="text-7xl">My Projects</h1>
          <Cards />
        </div>
      </section>
      <section id="contactme" className="pt-16 pb-32">
        <h1 className="text-7xl text center flex justify-center items-center mb-32">
          Contact Me
        </h1>

        <div className="w-full flex justify-center items-center h-96 text-center ">
          <div className="">
            <div className="mb-16 text-3xl">
            <h1>Available to work opportunities</h1>
            </div>
                <div className="text-xl">
            <p>
              Have an exciting project you need help with?<br /> Send me an email or
              contact me via <br />instant message!
            </p>
              <div className="mt-8">
               <button> 
                Calendly
                </button>
              </div>
                </div>
                <div className="flex mt-16 ml-12 ">
                <div className="flex flex-wrap flex-col items-center mr-16 justify-around">
                    <img src="./icons8-twitter.svg" alt="" />
                    <img src="./icons8-linkedin.svg" alt="" />
                    <img src="./icons8-instagram.svg" alt="" />
                    <img src="./icons8-github.svg" alt="" />
                </div>
                <div className="flex flex-wrap flex-col colum items-center ml-8 mt-2 justify-around">
                <a className='mt-1'href="www.x.com/omarx32">www.x.com/omarx32</a>
                <br />
                <a href="www.x.com/omarx32">www.x.com/omarx32</a>
                <br />
                <a href="www.x.com/omarx32">www.x.com/omarx32</a>
                <br />
                <a className='mt-1' href="www.x.com/omarx32">www.x.com/omarx32</a>
                <br />
                </div>
                </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

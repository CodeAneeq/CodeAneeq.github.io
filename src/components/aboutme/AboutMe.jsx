import React from 'react'
import styles from './aboutme.module.scss'

const AboutMe = ({style, aneeqDark, aneeq}) => {

  return (
    <div className={`${styles.about_me_container}`} style={style}>
        <figure className={`${styles.aneeq_figure}`}>
            <img src={aneeqDark} alt="" />
        </figure>
        <div className={`${styles.about_content}`}>
            <h3>Curious About Me? Here you have it:</h3>
            <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </p>
            <p>
            I began my journey as a web developer in 2024, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, a year into my journey as a web developer, I’m building cutting-edge web applications using modern technologies such as React.js, Node.js, Tailwindcss, Scss, Firebase, Epress.Js, Mongo DB and much more.
            </p>
            
            <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
            
            <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! 😉
            </p>
        </div>
    </div>
  )
}

export default AboutMe
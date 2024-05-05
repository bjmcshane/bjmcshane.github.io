import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faRProject, faReact, faJava, faGitAlt, faDocker } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArr= 'About me'.split('')

    // useEffect(() => {
        // try{
            // return setTimeout(() => {
                // setLetterClass('text-animate-hover')
            // }, 3000)
        // } catch (e) {
            // console.log(e)
        // }
    // }, [])

    return (
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArr} idx={15} />
                </h1>
                <p>
                    My name's Brendan McShane, I'm a Data Scientist for Ford Motor Compay and a semi-recent graduate from Indiana University, where I 
                    received both my Bachelor's and Master's degrees in Computer Science. 
                </p>
                <p>
                    I'm currently a fulltime Ford Data Scientist working on projects or freelance work in my free time. I've gained a lot of expereince in data
                    analysis, software engineering best practices, python, git, docker, and much more. I've become a wizz and both the command line and the various
                    python debuggers, I've sharpened my API developmnent skills, and I've developed many great working relationships with my coworkers along the way.
                </p>
                <p>
                    When I was in school, my primary focus was machine learning and artificial intelligence.
                    I've coded neural networks from scratch, designed CNNs to diagnose COVID-19 in CT scans, developed
                    time series predictions to predict next day stock prices, and much more. During my studies, I also picked
                    up enough web development skills to enable me to code this website from scratch, and hey, I think it looks
                    pretty good!
                </p>
                <p>
                    Anyways, thanks for taking the time to read this little tidbit about me. Please feel free to take a look
                    at my LinkedIn, my GitHub, or to reach out via the Contact page! 
                </p>
                <p>
                    (Or, if you prefer to email me directly, you can find me at bjomcshane@gmail.com)
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faDocker} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faRProject} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJava} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
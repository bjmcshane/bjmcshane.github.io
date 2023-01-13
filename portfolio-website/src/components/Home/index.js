import LogoTitle from '../../assets/images/logo-s.png'
import ResumeImg from '../../assets/images/resume.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import React, { useState, useEffect } from 'react'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ' Brendan.'.split('')
    const jobArray = "I'm on the job hunt!".split('')

    // useEffect(() => {
        // try{
            // return setTimeout(() => {
                // setLetterClass('text-animate-hover')
            // }, 4000)
        // } catch (e) {
            // console.log(e)
        // }
    // }, [])
                    // <img src={LogoTitle} alt='developer' />
                    // <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
            // <Logo />
    
            // <img src={ResumeImg} alt="resume.png" className="resumeImg"/>

    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1> 
                <h2>Data Scientist / ML Expert / Recent Graduate </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home
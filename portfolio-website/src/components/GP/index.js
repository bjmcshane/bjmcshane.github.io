import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState } from 'react'
//import GPImg from '../../assets/images/gp.jpeg'
//<img src={GPImg} alt='gp.jpeg' className="GPImg" />


const GaussianProcess = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArr = 'Gaussian Process'.split('')


    return (
        <div className="container gaussian-process-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArr} idx={15} />
                </h1>
                <p>
                    During my first semester of graduate school at Indiana University, I took a machine learning course. It wasn't the "applied" type of machine
                    learning where you just learn how to import Tensorflow and let it do its thing, it was the type of machine learning course that involved a lot of notebooks,
                    pencils, and coding models from scratch with little to no imports.
                </p>
                <p>
                    One of the coolest and most challenging things I created from scratch was what is known in statistics as a Gaussian Process. I'll save you the statistical lecture but
                    the short version is that Gaussian Processes can be seen as an infinite-dimenstional generalization of multivariate normal distributions. Check out the code <a href="https://github.com/bjmcshane/gaussian-processes.git">here</a>!
                </p>
            </div>
        </div>
    )
}

export default GaussianProcess
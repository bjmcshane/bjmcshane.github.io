import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState } from 'react'
import NovaImg from '../../assets/images/Supernova.png'


const Supernova = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArr = 'Supernova Detector'.split('')


    return (
        <div className="container supernova-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArr} idx={15} />
                </h1>
                <p>
                    I've always been interested in space! Half the reason I've taken an interest in computers
                    and technology is because I knew it may well be a viable route for me to contribute to space
                    exploration, one way or another.
                </p>
                <p>
                    In this project, I applied a variety of classical machine learning techniques to clasify grayscale
                    images of the night sky as either containing a supernova, or not. I extracted data from the Popular
                    Supernova Project's database, cropped the images to 51x51 pixels, and went to work building algorithms
                    to determine whether or not these images contained a supernova.
                </p>
                <p>
                    The first step to this process was the data engineering. Tens of thousands of rows with 51x51 pixel values was
                    simply too much data for any classical machine learning model to handle effectively. I needed to cut down on the
                    number of variables, and to do so I implemented Principal Component Analysis (PCA) alongside other techniques. This
                    is a method of dimensionality reduction that retains much of the information from the original dataset. The best bang per
                    buck with respect to the number of columns we'd be using with this approach was 11.
                </p>
                <p>
                    From there, I developed and optimized 5 different machine learning algorithms for classification. These models
                    included a k-nearest neighbors classifier, logistic regression, a support vector machine, an artificial neural network
                    and an ensemble random forest. Anyways, code can be found <a href="https://github.com/bjmcshane/supernova_detector/tree/main">here</a>
                </p>
            </div>
            <img src={NovaImg} alt='supernova.jpg' className="supernovaImg" />
        </div>
    )
}

export default Supernova
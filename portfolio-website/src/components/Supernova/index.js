import './index'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState } from 'react'

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

                </p>
            </div>
        </div>
    )
}

export default Supernova
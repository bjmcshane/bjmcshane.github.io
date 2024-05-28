import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const stringArr = 'My Code'.split('')


    return (
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={stringArr} idx={15}/>
                </h1>
                <div className='project-list'>
                    <ul>
                        <li>
                            <NavLink exact="true" to="/supernova">
                                Supernova Detector
                            </NavLink>
                            <p>A PCA dimensionality reduction and ML approach to image classification </p>
                        </li>
                        <li>
                            <NavLink exact="true" to="/stocks">
                                Stock Forecasting
                            </NavLink>
                            <p>Stock forecasting with machine learning and backtesting </p>
                        </li>
                        <li>
                            <NavLink exact="true" to="/gaussian">
                                Gaussian Process
                            </NavLink>
                            <p>Gaussian Process coded from scratch</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
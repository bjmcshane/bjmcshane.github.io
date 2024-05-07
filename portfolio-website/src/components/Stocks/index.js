import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState } from 'react'
import NovaImg from '../../assets/images/Supernova.png'


const Stocks = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArr = 'Stock Forecasting'.split('')


    return (
        <div className="container supernova-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArr} idx={15} />
                </h1>
                <p>
                    During my last semester as an undergraduate student at Indiana University, I took an applied ML course which focused primarily on 
                    machine learning fundamentals and how to create models in python by importing packages and tuning hyper parameters. My final project for
                    this course was a stock forecasting tool, which utilized various forms of LSTMs, GMMs, and HMMs.
                </p>
                <p>
                    I, along with a team, chiefly developed a Gaussian Hidden Markov Model, a Gaussian Mixture Model Hidden Markov Model, and an LSTM.
                    We proceeded to take our models and test them on historical ticker data, comparing against academically published research results.
                    For the GMM HMM we utilized the works of Gupta Et Al and Hassan Et Al, and for the LSTM model we used Roondiwala Et Al, Pawar Et Al,
                    and Moghar Et Al as our benchmark (academic papers not linked here).
                </p>
                <p>
                    My primary role on this project was to assist in the design of the above models, and to develop another benchmark utilizing a python package to implement
                    simpler mathematical forms of prediction. Think simple and exponential moving averages, bollinger bands, relative strength index, etc. Our results didn't end
                    up making us millionaires, but we learned a lot about data sceince and the stock market (and also got an A). Code can be found  
                    <a href="https://github.com/bjmcshane/stock_forecasting/tree/main">here</a>

                </p>
            </div>
            <img src={NovaImg} alt='supernova.jpg' className="supernovaImg" />
        </div>
    )
}

export default Stocks
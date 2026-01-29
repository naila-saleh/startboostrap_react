import React from 'react'
import style from './portfolio.module.css'
export default function Portfolio() {
    return (
        <section className={`py-5`}>
            <div className={`container text-center`}>
                <h2 className={`text-uppercase py-2 ${style.title}`}>Portfolio</h2>
                <div className={`m-auto ${style.star}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 640 640"><path fill="#ffffff" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"/></svg>
                </div>
                <div className={`row g-4 py-5`}>
                    <div className={`col-lg-4 col-md-6 col-sm-6`}>
                        <img src={'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png'} className={`rounded-3 w-100`} />
                    </div>
                    <div className={`col-lg-4 col-md-6 col-sm-6`}>
                        <img src={'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png'} className={`rounded-3 w-100`} />
                    </div>
                    <div className={`col-lg-4 col-md-6 col-sm-6`}>
                        <img src={'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png'} className={`rounded-3 w-100`} />
                    </div>
                    <div className={`col-lg-4 col-md-6 col-sm-6`}>
                        <img src={'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png'} className={`rounded-3 w-100`} />
                    </div>
                    <div className={`col-lg-4 col-md-6 col-sm-6`}>
                        <img src={'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png'} className={`rounded-3 w-100`} />
                    </div>
                    <div className={`col-lg-4 col-md-6 col-sm-6`}>
                        <img src={'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png'} className={`rounded-3 w-100`} />
                    </div>
                </div>
            </div>
        </section>
    )
}

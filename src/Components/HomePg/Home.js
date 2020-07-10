import React from 'react';
import '../css/home.css'


export default class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <div className="hero-image">
                    <div className="hero-text">
                        <h1 className="main-text">Happy code</h1>
                    </div>
                </div>
                
                <section className="home-container__11">
                    <h2>Who Am I?</h2>
                    <div className="home-container">
                    <div className="image"></div>
                    <p className="content-inf">I am currently a student in the Road to Hire program that teaches motivated
                        young adults to code. I have a passion to code but most importantly to help others.
                         With my coding expertise, I hope to teach the underserved Latinx community.
                            Through my experiences, I was able to become more marketable, more independent,
                            more connected, and more proactive. I have the drive to get better every day.</p>
                    </div>
                </section>
                
            </React.Fragment>
        )
    }
}
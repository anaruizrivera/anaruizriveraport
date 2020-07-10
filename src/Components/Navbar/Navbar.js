import React from 'react';
import '../css/nav.css'




export default class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>


                <nav className="navbar1">
                    <div>
                        <h2 className="logo_name">Ana Edith Ruiz Rivera</h2>
                    </div>

                    <div className="container11">

                        <ul>
                            <li><a href="#home" className="active">HOME</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#skills">SKILLS</a></li>
                            <li><a href="#portfolio">PORTFOLIO</a></li>
                            <li><a href="#contact">CONTACT ME</a></li>
                        </ul>
                    </div>

                </nav>



            </React.Fragment>
        )

    }

}
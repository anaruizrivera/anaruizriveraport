import React from 'react';

import '../css/footer.css'




export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer id="footer">



                    <nav id="navbar">
                    <a className="fa fa-github-square" aria-hidden="true" href="https://github.com/anaruizrivera" target="_blank" rel="noopener noreferrer"></a>
                    <a className="fa fa-linkedin-square" aria-hidden="true" href="https://www.linkedin.com/in/ana-ruiz-rivera-97288b1a5/" target="_blank" rel="noopener noreferrer"></a>
                    <a className="fa fa-instagram" aria-hidden="true" href="https://www.instagram.com/ana.ruiz7711/" target="_blank" rel="noopener noreferrer"></a>

                        <div className="logoo">


                            <h2 className="logo_name_nav">Ana Ruiz Rivera   &copy; 2020, All Rights Reserved</h2>

                        </div>
                        <div class="container">
                            
                            <div className="flex-container">

                                <li className="linkss"><a href="#home" className="active">HOME</a></li>
                                <li className="linkss"><a href="#about">ABOUT</a></li>
                                <li className="linkss"><a href="#skills">SKILLS</a></li>
                                <li className="linkss"><a href="#portfolio">PORTFOLIO</a></li>
                                <li className="linkss"><a href="#contact">CONTACT ME</a></li>
                            </div>
                        </div>

                    </nav>



                </footer>
            </React.Fragment>
        )

    }
}
import React from 'react';
import '../css/skills.css'



export default class Skills extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="skills" className="skills_container">
                    <h3 className="nameskills">Skills </h3>
                    <div className="grid-container">
                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML-logo" />
                            <h2 className="anatext">HTML</h2>
                            <p className="anatext">Hypertext Markup Language</p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpartcss" src="https://www.w3schools.com/whatis/img_css.jpg" />
                            <h2 className="anatext">CSS</h2>
                            <p className="anatext">Cascading Style Sheets</p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://nszdeveloper.com/static/media/js.caa681b4.png" />
                            <h2 className="anatext">JAVASCRIPT</h2>
                            <p className="anatext">JavaScript, often abbreviated as JS.  </p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://coralogix.com/wp-content/uploads/2018/04/Coralogix-Nodejs-integration.jpg" />
                            <h2 className="anatext">NODE</h2>
                            <p className="anatext">Node.js is an open-source, cross-platform, JavaScript runtime.</p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoeZSx3g-TWWPhEBbUD4BoIFUUjl8vEMdDCg&usqp=CAU" />
                            <h2 className="anatext">REACT</h2>
                            <p className="anatext">React is an open-source JavaScript library for building user interfaces. </p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqYf4wXKaa-XOfMXnuCttpW3vfbyYH3GiZ7w&usqp=CAU" />
                            <h2 className="anatext">MySQL</h2>
                            <p className="anatext">MySQL is an open-source relational database management system.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
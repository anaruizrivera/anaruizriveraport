import React from 'react';
import '../css/skills.css'



export default class Skills extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="skills_container">
                    <h3 className="nameskills">Skills </h3>
                    <div className="grid-container">
                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML-logo" />
                            <h2>HTML</h2>
                            <p>Hypertext Markup Language</p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://banner2.cleanpng.com/20180510/trw/kisspng-html-css-design-and-build-web-sites-web-develop-5af50c33d59ff9.681459051526008883875.jpg" alt="css-logo" />
                            <h2>CSS</h2>
                            <p>Cascading Style Sheets</p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://banner2.cleanpng.com/20180429/www/kisspng-javascript-logo-html-comment-blog-5ae63c22d40699.0773573515250381148685.jpg" alt="javascript -ogo" />
                            <h2>JAVASCRIPT</h2>
                            <p>JavaScript, often abbreviated as JS.  </p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://banner2.cleanpng.com/20180628/kps/kisspng-node-js-javascript-software-developer-npm-teleological-argument-5b355523118c51.7437450215302218590719.jpg" alt="node-logo" />
                            <h2>NODE</h2>
                            <p>Node.js is an open-source, cross-platform, JavaScript runtime.</p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://www.pngfind.com/pngs/m/638-6386507_10-years-of-experience-react-native-logo-svg.png" alt="react-logo" />
                            <h2>REACT</h2>
                            <p>React is an open-source JavaScript library for building user interfaces. </p>
                        </div>

                        <div className="lg-info">
                            <img className="skills-imgpart" src="https://banner2.cleanpng.com/20180418/odq/kisspng-mysql-database-mariadb-phpmyadmin-blog-5ad7832572dd30.7737052115240732534705.jpg" alt="mysql-logo-open-source" />
                            <h2>MySQL</h2>
                            <p>MySQL is an open-source relational database management system.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
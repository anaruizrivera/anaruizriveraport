import React from 'react';
// import PortafolioInfo from '../Portafolio/Portafolio.json';
import '../css/portafolio.css'

 class Portafolio extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                {/* <section>
                    <h2 className="projects">Portfolio Projects</h2>
                    {PortafolioInfo.items.map(item=>(
                     
                        <section>
                            {/* <div className="anacontainer">
                                <div className="portafolio__container">
                                    <div className="grid">
                                    <h2>{item.name}</h2>
                                    <img className="portafolio_img"src={item.image} alt={item.alt}/>
                                    <p className="text">{item.description}</p>
                                    <button className="links-button" href={item.gitHub}>GitHub</button>
                                    <button className="links-button" href={item.url}>Website</button>

                                </div>
                                </div>
                                
                            </div>
                        </section>
                    ))} */}
                {/* </section> */} 
                <main>
                    <div>
                    <h2 className="projects">Portfolio Projects</h2>
                    </div>
                    <section className="grid">
                        <div className="separatediv">
                            <h2 className="titleprojects">Gateway Project</h2>
                            <img className="portafolio_img" src="../image/gateway.jpeg"/>
                            <p className="text" >Gateway is base on HTMl and CSS. We had to choose a country and I choosed Indonesia is centrally-located along ancient.</p>
                            <button className="links-button" ><a href="https://github.com/anaruizrivera/Gateway-Project">GitHub</a></button>
                            <button className="links-button"><a  href="https://anaruiz-gateway-project.netlify.app/">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">Hotel App</h2>
                        <img className="portafolio_img"src="../image/hotelapp.png"/>
                        <p className="text">This Hotel App consists of information and organized with images. It was most focus on Dubai.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/Hotel-App">GitHub</a></button>
                        <button className="links-button"><a  href="anaruiz-hotel-app.netlify.app">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">Speech Recognition Guessing Game</h2>
                        <img className="portafolio_img" src="../image/speech.png"/>
                        <p className="text">Modern guessing game with speech recognition feature. You need to speech throug the microphone and guess a number.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/Speech-Recognition-Guessing-Game-API">GitHub</a></button>
                        <button className="links-button" ><a href="https://anaruiz-guessing-game.netlify.app/">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">Animated Navigation Bar</h2>
                        <img className="portafolio_img" src="../image/animation.png"/>
                        <p className="text">Navigation bar specifically designed and developed for animation websites as well as for responsive apps.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/Animated-Navigation-Bar">GitHub</a></button>
                        <button className="links-button" ><a href="https://anaruiz-navbar.netlify.app/">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">Github Page Locator Ap</h2>
                        <img className="portafolio_img" src="../image/github.png"/>
                        <p className="text">Used GitHub API to create an app that will help you locate users with just entering their Github username.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/github-cards">GitHub</a></button>
                        <button className="links-button" ><a href="https://anaruiz.netlify.app/">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">React Tic Tac Toe</h2>
                        <img className="portafolio_img" src="../image/tikto.png"/>
                        <p className="text">Fun tic tac toe game created with React. You can play this with your friends and family, it will show the winner and if their is a tie.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/tic-tac-toe-game-app">GitHub</a></button>
                        <button className="links-button" ><a href="https://anaruizrivera-tic-tac-toe-game.netlify.app/">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">Friend List App Game</h2>
                        <img className="portafolio_img" src="../image/friendlist.png"/>
                        <p className="text">Designed and developed cards with a list of cards with friends. You are able to delete any friend of your list if you want.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/Friend-App-List">GitHub</a></button>
                        <button className="links-button" ><a href="https://anaruizrivera-friend-list.netlify.app/">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">Ecommerce Project With React</h2>
                        <img className="portafolio_img" src="../image/ecommerce.png"/>
                        <p className="text">This is just the product page created with React. This version holds a filter that filters products with Type and Price of every product.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/E-commerce-React">GitHub</a></button>
                        <button className="links-button"><a href="https://anaruizrivera-e-commerce-project.netlify.app/">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">Counter App</h2>
                        <img className="portafolio_img" src="../image/counter.png"/>
                        <p className="text">This website was base on Re-designing wikipedia and making improvement on the website. This was a group project, were I was able to colaborate and integrate parts of codes.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/counterAppp">GitHub</a></button>
                        <button className="links-button" ><a href="https://anaruizcounterapp.netlify.app/">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">To Do List App</h2>
                        <img className="portafolio_img" src="../image/note.png"/>
                        <p className="text">Created basic app in the Road to Hire Program, and it helps with organizing daily tasks.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/todo">GitHub</a></button>
                        <button className="links-button" ><a href="https://eager-leavitt-5dd0e0.netlify.app/">Website</a></button>
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">Pokemon Inquirer</h2>
                        <img className="portafolio_img" src="../image/terminal.png"/>
                        <p className="text">This is a very interesting node application, where you are able to train a pokemon of your choice. If you would like to see it in action, clone my GitHub Repo and run it in Terminal.</p>
                        <button className="links-button" ><a href="https://github.com/anaruizrivera/Pokemon-Inquirer-App">GitHub</a></button>
                        {/* <button className="links-button" href="">GitHub</button> */}
                        </div>

                        <div className="separatediv">
                        <h2 className="titleprojects">Wikipedia Re-design Project</h2>
                        <img className="portafolio_img" src="../image/wiki.png"/>
                        <p className="text">This website was base on Re-designing wikipedia and making improvement on the website. This was a group project, were I was able to colaborate and integrate parts of codes.</p>
                        <button className="links-button" ><a href="https://github.com/Veronica-B/wikipedia">GitHub</a></button>
                        {/* <button className="links-button" href="https://github.com/Veronica-B/wikipedia">Website</button> */}
                        </div>


                        


                         {/* <div className="separatediv">
                        <h2 className="titleprojects"></h2>
                        <img className="portafolio_img" src=""/>
                        <p className="text"></p>
                        <button className="links-button" href="">GitHub</button>
                        <button className="links-button" href="">Website</button>
                        </div> */}

                       

                    </section>
                </main>

            </React.Fragment>
        )
    }
}
export default Portafolio;
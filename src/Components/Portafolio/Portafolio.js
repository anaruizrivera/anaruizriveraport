import React from 'react';
import PortafolioInfo from '../Portafolio/Portafolio.json';
import '../css/portafolio.css'

 class Portafolio extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section>
                    
                    <div className="oneContainer"></div>
                </section>
                <section>
                    <h2>Portafolio Projects</h2>
                    {PortafolioInfo.items.map(item=>(
                        // hola
                        <section>
                            <div>
                                <div className="portafolio__container">
                                    <h2>{item.name}</h2>
                                    <img className="portafolio_img"src={item.image} alt={item.alt}/>
                                    <p className="text">{item.description}</p>
                                    <button className="links-button" href={item.gitHub}>Repo</button>
                                    <button className="links-button" href={item.url}>Website</button>

                            
                                </div>
                            </div>
                        </section>
                    ))}
                </section>

            </React.Fragment>
        )
    }
}
export default Portafolio;
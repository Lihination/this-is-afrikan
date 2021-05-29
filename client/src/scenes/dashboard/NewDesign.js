import React, {  useState } from 'react';
import SideModal from './SideModal'
import Leopard from "../../images/Leopard_back.png"
import marketclip from './video/marketclip.mp4'
import menu from './images/menu 1.png'
import MarketStall from './images/market-stall.png'


const NewDesign =()=> {
    const [show, showModal] = useState(false)

    const closeModalHandler = ()=>{
        showModal(false)
    }
        return (
            <div className='container'>
                {show ?  <div onClick={closeModalHandler} className="backdrop"></div> : null}
                <div style={{display:'flex'}}>
                    <SideModal show={show} closeModalHandler={closeModalHandler}/>
                    <img src={menu} onClick={()=> showModal(true)}/>
                    <small style={{margin:'5px', fontSize:"9px"}}>Menu</small>
                </div>
                {/* <div>
                    <h3>You are a Laughing Leopard</h3>
                    <div className="gallery">
                        <div>
                            <div className='grid-container'>
                                <img className='animal' src={Leopard}/>
                                <div className='column grid-item'>
                                    <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215667/snake_icon_ntqbhr.png"} alt=""/>
                                    <h4>The Pictograph</h4>
                                    <p>
                                        The pictograph of a leopard
                                        with a smiling human face
                                        represents the idea of a
                                        creature which traverses the
                                        human and animal form.
                                        It is the knowing smile of a
                                        guardian of ancient secrets,
                                        grave truths and esoteric
                                        knowledge
                                    </p>
                                </div>
                                <div className='column grid-item'>
                                <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215759/mask_va61zi.png"} alt=""/>
                        <h4>Divination</h4>
                        <p>
                        You are the Hidden
Crocodile.
The Hidden Crocodile is the
primary symbol for raw
power, might and majesty. 
                        </p></div>
                                <div className='column grid-item'><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215667/strength_qmjnla.png"} alt=""/>
                        <h4>Your Powers</h4>
                        <p>
                            <ul>
                                <li>Might</li>
                                <li>Honesty</li>
                                <li>Idealism</li>
                                <li>Fortune</li>
                                <li>Hot-headedness</li>
                            </ul>
                        </p></div>
                                <div className='column grid-item'><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215769/shoes_ojmsv4.png"} className="shoe" alt=""/>
                        <h4>Defy Odds Shoes</h4>
                        <p>
                            We’ve designed a pair of
                            shoes to provide a physical
                            reminder of your distinct
                            personality traits within an
                            ancient African historical
                            context to support your defy
                            odds journey    
                        </p></div>
                                
                            </div>
                            <div className='btn btn-black'>
                                <a href='#'>Buy Full Report</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <section className='videoSection'>
                    <video autoPlay loop muted>
                        <source src={marketclip}></source>
                    </video>
                    <img src={MarketStall} style={{
                        width: "20em",
                        height: "20em",
                        position:"absolute",
                        top:"20em",
                        left: " 30em"
                    }}/>

                    <div className='button'>
                        <a href='#'>Bid Now</a>
                    </div>
                </section>

            </div>
        )
    }

export default NewDesign

import React  from 'react'
import {Link, Redirect} from "react-router-dom"
import "./SideModal.scss"
import {SideModalData} from './SideModalData'

function Modal({show, closeModalHandler}) {    
    return (
        <div className="modal-wrapper"
        style={{
            overflow: show ? "overflow: hidden": "visible",
            transform: show ? 'translate(0vh)' : "translate(-100vh)",
            opacity: show ? "1" :"0"
        }}>
            <div className="modal-header">
                <div></div>
                <span onClick={closeModalHandler}  className='close-modal-btn'>X</span>
            </div>
            <div className="modal-content">
            <ul className='modal-body'>
                <div>
                    <img scr='https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215716/collection_x2ooz9.png'/>
                </div>
                {SideModalData.map((item, index) =>{
                    return(
                        <li key={index} className={item.className}>
                            <Link to={item.path}><h3>{item.title}</h3></Link>
                            {/* <Redirect to={item.component}/> */}
                            {/* history.push(item.component) */}
                            {/* history.replace(itemcomponent) */}
                        </li>
                    )
                })}
            </ul>
            </div> 
        </div>
    )
}

export default Modal

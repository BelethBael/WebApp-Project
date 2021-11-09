import React from "react";
import './Bottom.css'
import {FaFacebook, FaTwitter, FaTwitch, FaYoutube} from 'react-icons/fa'

class Bottom extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className='mainBottom'>

                <div className='head-line'>
                    <div className='menu'>
                        <h4>KGK</h4>
                        <a>ABOUT US</a>
                        <a>PRIVACY POLICY</a>
                        <a>TERMS & CONDITIONS</a>
                    </div>
                    <div className='menu'>
                        <h4>MY ACCOUNT</h4>
                        <a>MY ACCOUNT</a>
                        <a>MY ORDERS</a>
                        <a>AFFILIATE ACCOUNT</a>
                    </div>
                    <div className='menu'>
                        <h4>CUSTOMER SERVICE</h4>
                        <a>SUPPORT REQUESTS</a>
                        <a>HELP DESK</a>
                        <a>FAQ</a>
                        <a>KNOWLEDGE BASE</a>
                    </div>
                    <div className='menu'>
                        <h4>CONTACT US</h4>
                        <a>CUSTOMER SERVICE</a>
                        <a>ananda.m@ku.th</a>
                        <a>088-888-8888</a>
                    </div>

                </div>

                <div className='icon-socials'>
                    <FaFacebook size={40}></FaFacebook>
                    <FaTwitter size={40}></FaTwitter>
                    <FaTwitch size={40}></FaTwitch>
                    <FaYoutube size={40}></FaYoutube>

                </div>

            </div>
        )
    }
}

export default Bottom
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

class Footer extends React.Component{
    render(){
        return(
            <div className="container-fluid footer" id="footer">
                <div className="socials-media text-center">
                    <ul className="list-unstyled socialicons">
                        <span><a href="https://github.com/ian1202"><FaGithub id="socialicon1"/></a></span>
					    <span><a href="mailto:ianyenyh@gmail.com"><FaEnvelope id="socialicon2"/></a></span>
					    <span><a href="https://linkedin.com/in/ian-y-269b2a152"><FaLinkedinIn id="socialicon3"/></a></span>
					    <span><a href="tel:2018567441"><FaPhone id="socialicon4"/></a></span>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Footer;
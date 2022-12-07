import React, {Component} from 'react';
// import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                    
                </div>

                <div class="footer-copyright text-center py-3">© 2022 Copyright 
                    <a href="#" style={{color: "#65b6f0"}}> Capstone Project</a>
                </div>

            </footer>
        );
    }
}

export default Footer;
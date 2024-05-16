import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footercon">
                <div className="footer-links">
                    <div>
                        <img src='https://play-lh.googleusercontent.com/h_l3BK710iqr1mH8WY0yEtIJmyPGAKV4upFt4n--NxZO-fJ8wwZxV3ZoSQRn5z1a_Q' style={{ width: "200px", height: "200px", overflow: "hidden" }} />
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div >
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Help & FAQs</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul></div>
                </div>
                <div className="social-links">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

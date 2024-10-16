import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="footer-content">
				<div className="footer-content-left">
					<img src={assets.logodark} alt="" />
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
						dicta, consequatur rerum voluptates exercitationem doloribus
						praesentium obcaecati nihil neque, quo, distinctio placeat cum
						voluptatibus id sit unde doloremque maxime repellat.
					</p>
					<div className="footer-social-icons">
						<img src={assets.facebook_icon} alt="" />
						<img src={assets.twitter_icon} alt="" />
						<img src={assets.linkedin_icon} alt="" />
					</div>
				</div>
				<div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
				<div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-895-7818-597</li>
                        <li>contact@yourfood.com</li>
                    </ul>
                </div>
			</div>
            <hr />
            <p className="footer-copyright">Copyright 2024 &copy; Yourfood.com - All Right Reserved</p>
		</div>
	);
};

export default Footer;

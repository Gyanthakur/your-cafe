import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import {
	FacebookLogo,
	GitFork,
	GithubLogo,
	LinkedinLogo,
	TwitterLogo,
	WhatsappLogo,
} from "phosphor-react";

import { NavLink } from "react-router-dom";
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
						{/* <img src={assets.facebook_icon} alt="Facebook Icon" />
						<img src={assets.twitter_icon} alt="" />
						<img src={assets.linkedin_icon} alt="" /> */}
						<nav className="flex space-x-4">
							<NavLink
								to="https://www.facebook.com/profile.php?id=100026766931684"
								className="facebook-icon"
								target="_blank"
							>
								<FacebookLogo size={42} weight="fill" />
							</NavLink>
							<NavLink to="https://www.linkedin.com/in/gyan-pratap-singh-275785236/" target="_blank" className="linkedin-icon">
								<LinkedinLogo size={42} weight="fill" />
							</NavLink>
							<NavLink to="https://x.com/gps_96169" target="_blank" className="twitter-icon">
								<TwitterLogo size={42} weight="fill" />
							</NavLink>
							<NavLink to="https://wa.me/918957818597?text=Hey%20%F0%9F%91%8B%2C%20how%20can%20I%20help%20you%3F" target="_blank" className="whatsapp-icon">
								<WhatsappLogo size={42} weight="fill" />
							</NavLink>
							<NavLink to="https://github.com/Gyanthakur" target="_blank" className="github-icon">
								<GithubLogo size={42} weight="fill" />
							</NavLink>
							<NavLink to="https://github.com/Gyanthakur/your-cafe" target="_blank" className="gitfork-icon">
								<GitFork size={42} weight="fill" />
							</NavLink>
						</nav>
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
			<p className="footer-copyright">
				Copyright 2024 &copy; Yourfood.com - All Right Reserved
			</p>
		</div>
	);
};

export default Footer;

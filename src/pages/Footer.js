import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/shared/desktop/arrow.svg";
import facebook from "../assets/shared/desktop/facebook.svg";
import youtube from "../assets/shared/desktop/youtube.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import pinterest from "../assets/shared/desktop/pinterest.svg";
import instagram from "../assets/shared/desktop/instagram.svg";
import logo from "../assets/shared/desktop/logo.svg";
export default function Footer() {
	return (
		<>
			<footer className="flex justify-center items-center flex-col tablet:grid tablet:grid-cols-4 tablet:grid-row-5 tablet:px-[34px] py-[3.5rem] bg-black">
				<img
					className="logo-light tablet:col-start-1 tablet:col-end-2 tablet:row-end-1 tablet:row-start-2 tablet:row-end-3"
					src={logo}
				/>
				<div className="tablet:row-start-5 tablet:col-start-1 mt-[2rem] mb-[3rem] gap-[0.7rem] flex">
					<img src={facebook} />
					<img src={youtube} />
					<img src={twitter} />
					<img src={pinterest} />
					<img src={instagram} />
				</div>
				<ol className="text-white tablet:flex tablet:gap-3 tablet:col-start-1 tablet:col-end-2 tablet:row-start-1  text-center text-[12px] font-[700] tracking-[2px] uppercase list-none">
					<li>
						<Link to="/">
							<h2>Home</h2>
						</Link>
					</li>
					<li>
						<Link to="stories">
							<h2>Stories</h2>
						</Link>
					</li>
					<li>
						<Link to="features">
							<h2>Features</h2>
						</Link>
					</li>
					<li>
						<Link to="pricing">
							<h2>Pricing</h2>
						</Link>
					</li>
				</ol>
				<div className=" tablet:col-start-4 tablet:col-end-5 tablet:row-start-1 btn-four-box mt-[2rem] mb-[3rem]">
					<button className="btn-four">
						Get An Invite
						<img className="arrow-img-light" src={arrow} />
					</button>
				</div>
				<p className="tablet:col-start-3 tablet:col-end-5 tablet:row-start-5 text-right text-white text-[15px] opacity-[0.5]">
					Copyright 2023. All Rights Reserved
				</p>
			</footer>
		</>
	);
}

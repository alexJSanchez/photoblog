import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import mobile_menu from "../assets/shared/mobile/menu.svg";

export default function Navigation() {
	const [dropdown, SetDropdown] = useState(false);
	return (
		<nav className="dropdown">
			<div className="bg-white flex justify-between tablet:justify-evenly items-center mt-[1.7rem] mr-[1.5rem] tablet:mr-0 mb-[1.7rem] ml-[1rem] tablet:ml-0">
				<div className="nav-left">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>

				<Link
					to="stories"
					className="hidden tablet:block text-[12px] font-bold tracking-[2px] uppercase"
				>
					<h2>Stories</h2>
				</Link>
				<Link
					to="features"
					className="hidden tablet:block text-[12px] font-bold tracking-[2px] uppercase"
				>
					<h2>Features</h2>
				</Link>
				<Link
					to="pricing"
					className="hidden tablet:block text-[12px] font-bold tracking-[2px] uppercase"
				>
					<h2>Pricing</h2>
				</Link>

				<div className="tablet:hidden flex justify-center items-center">
					<img
						className="link"
						onClick={() => {
							SetDropdown(!dropdown);
						}}
						src={mobile_menu}
						alt="dropdown hamburger button"
					/>
				</div>
				<button className="hidden tablet:block py-3 px-6 text-white text-[12px] font-bold tracking-[2px] bg-black uppercase">
					Get An Invite
				</button>
			</div>
			{dropdown ? (
				<div className="tablet:hidden dropdown-menu dropdown-font flex flex-col items-center px-[2rem]">
					<Link to="/">
						<h2 onClick={() => SetDropdown(!dropdown)}>Home</h2>
					</Link>
					<Link to="stories">
						<h2 onClick={() => SetDropdown(!dropdown)}>Stories</h2>
					</Link>
					<Link to="features">
						<h2 onClick={() => SetDropdown(!dropdown)}>Features</h2>
					</Link>
					<Link to="pricing">
						<h2 onClick={() => SetDropdown(!dropdown)}>Pricing</h2>
					</Link>
					<div className="line bg-black px-4"> </div>
					<button className="py-[1rem] text-white bg-black w-full">
						Get An Invite
					</button>
				</div>
			) : (
				<></>
			)}
		</nav>
	);
}

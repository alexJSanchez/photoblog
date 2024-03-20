import React from "react";
import responsive from "../assets/features/desktop/responsive.svg";
import infinite from "../assets/features/desktop/no-limit.svg";
import bullhorn from "../assets/features/desktop/embed.svg";
import customdomain from "../assets/features/desktop/custom-domain.svg";
import boostexpo from "../assets/features/desktop/boost-exposure.svg";
import dragdrop from "../assets/features/desktop/drag-drop.svg";
import hero from "../assets/features/mobile/hero.jpg";
import heromid from "../assets/features/tablet/hero.jpg";
import herodesk from "../assets/features/desktop/hero.jpg";
import create_and_share_mid from "../assets/home/tablet/create-and-share.jpg";
import arrow from "../assets/shared/desktop/arrow.svg";
export default function Features() {
	return (
		<div>
			<div
				id="main-card"
				className="bg-black tablet:grid tablet:grid-cols-3 desktop:grid-cols-5"
			>
				<div
					id="main-card-top"
					className="tablet:col-start-3 desktop:col-start-3 desktop:col-end-6"
				>
					<img
						id="main-card-top-image "
						className="w-full tablet:hidden"
						src={hero}
						alt="man on mountain"
					/>
					<img
						id="main-card-top-image "
						className="w-full mobile:hidden tablet:block desktop:hidden"
						src={heromid}
						alt="man on mountain"
					/>
					<img
						id="main-card-top-image hidden desktop:block "
						className="w-full mobile:hidden desktop:block"
						src={herodesk}
						alt="man on mountain"
					/>
				</div>
				<div className="main-card-bottom-boommark tablet:hidden"></div>
				<div
					id="main-card-bottom"
					className="tablet:flex tablet:flex-col tablet:justify-center tablet:col-start-1 tablet:row-start-1 tablet:col-end-3 desktop:col-end-3 text-white bg-black pt-[4.5rem] pr-[1.5rem] pb-[4.5rem] pl-[2.063rem] tablet:px-[3.625rem] desktop:px-[6.25rem] "
				>
					<h2 className="text-white text-[2rem] tablet:text-[2.5rem] font-bold leading-[2.5rem] tablet:leading-[3rem] tracking-[0.208rem] tablet:tracking-[0.26rem] uppercase">
						FEATURES
					</h2>
					<p className="mt-[1rem] mb-[1.438rem] tablet:mt-[1.313rem] tablet:mb-[3rem] text-white text-[0.938rem] leading-[1.563rem] opacity-60">
						We make sure all of our features are designed to be loved by every
						aspiring and even professional photograpers who wanted to share
						their stories.
					</p>
				</div>
			</div>
			<div className="tablet:grid tablet:grid-cols-2 desktop:grid-cols-3 tablet:items-end justify-center px-[2.438rem] desktop:px-[10.313rem] pb-[5.688rem] pt-[4rem] tablet:py-[7rem] tablet:gap-[0.688rem]">
				<div className="text-center flex flex-col items-center tablet:mt-[3.5rem] ">
					<img src={responsive} className="max-w-[4.5rem]"></img>
					<h3 className="pt-[3rem] font-bold text-[1.125rem]">
						100% Responsive
					</h3>
					<p className="text-[0.938rem] pt-4 leading-[1.563rem] opacity-60">
						No matter which the device you’re on, our site is fully responsive
						and stories look beautiful on any screen.
					</p>
				</div>
				<div className="text-center flex flex-col items-center mt-[3.5rem]">
					<img src={infinite} className="max-w-[4.5rem]"></img>
					<h3 className="pt-[4.125rem] text-[1.125rem] font-bold ">
						No Photo Upload Limit
					</h3>
					<p className="text-[0.938rem] pt-4 leading-[1.563rem] opacity-60">
						Our tool has no limits on uploads or bandwidth. Freely upload in
						bulk and share all of your stories in one go.
					</p>
				</div>
				<div className="text-center flex flex-col items-center mt-[3.5rem] mb-[1.563rem]">
					<img src={bullhorn} className="max-w-[4.5rem]"></img>
					<h3 className="pt-[3rem] text-[1.125rem] font-bold leading-[1.563rem]">
						Available to Embed
					</h3>
					<p className="text-[0.938rem] pt-4 leading-[1.563rem] opacity-60">
						Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
						videos, Google Maps, and more.
					</p>
				</div>
				<div className="text-center flex flex-col items-center mt-[3.5rem]">
					<img src={customdomain} className="max-w-[4.5rem]"></img>
					<h3 className="pt-[3rem] text-[1.125rem] font-bold">Custom Domain</h3>
					<p className="text-[0.938rem] pt-4 leading-[1.563rem] opacity-60">
						With Photosnap subscriptions you can host your stories on your own
						domain. You can also remove our branding!
					</p>
				</div>
				<div className="text-center flex flex-col items-center mt-[3.5rem]">
					<img src={boostexpo} className="max-w-[4.5rem]"></img>
					<h3 className="pt-[3rem] text-[1.125rem] font-bold">
						Boost Your Exposure
					</h3>
					<p className="text-[0.938rem] pt-4 leading-[1.563rem] opacity-60">
						Users that viewed your story or gallery can easily get notifed of
						new and featured stories with our built in mailing list.
					</p>
				</div>
				<div className="text-center flex flex-col items-center mt-[3.5rem]">
					<img src={dragdrop} className="max-w-[4.5rem]"></img>
					<h3 className="pt-[3rem] text-[1.125rem] font-bold">
						Drag & Drop Image
					</h3>
					<p className="text-[0.938rem] pt-4 leading-[1.563rem] opacity-60">
						Easily drag and drop your image and get beautiful shots everytime.
						No over the top tooling to add friction to creating stories.
					</p>
				</div>
			</div>
			<div className="tablet:grid grid-cols-5 desktop:grid-cols-3 bg-sand tablet:bg-sandmid py-[4rem] desktop:py-[4.25rem] px-[2.063rem] desktop:px-[9.688rem] text-white bg-no-repeat bg-cover">
				<h2 className="text-[2rem] col-start-1 col-end-4 desktop:col-end-2 desktop:pr-8  font-bold leading-[2.5rem] tracking-[0.208rem] uppercase pb-[1.5rem] tablet:pb-0 ">
					We’re in beta. Get your invite today!
				</h2>
				<div className="btn-two-box col-start-6 desktop:col-end-3 flex items-center desktop:justify-end">
					<button className="btn-two-light flex items-center">
						GET AN INVITE
						<img className="arrow-img-light" alt="arrow" src={arrow} />
					</button>
				</div>
			</div>
		</div>
	);
}

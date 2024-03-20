import React from "react";

import create_and_share from "../assets/home/mobile/create-and-share.jpg";
import create_and_share_mid from "../assets/home/tablet/create-and-share.jpg";
import create_and_share_desk from "../assets/home/desktop/create-and-share.jpg";
import arrow from "../assets/shared/desktop/arrow.svg";
import beautiful_stories from "../assets/home/mobile/beautiful-stories.jpg";
import beautiful_stories_mid from "../assets/home/tablet/beautiful-stories.jpg";
import beautiful_stories_desk from "../assets/home/desktop/beautiful-stories.jpg";
import designed_for_everyone from "../assets/home/mobile/designed-for-everyone.jpg";
import designed_for_everyone_mid from "../assets/home/tablet/designed-for-everyone.jpg";
import designed_for_everyone_desk from "../assets/home/desktop/designed-for-everyone.jpg";
import responsive from "../assets/features/desktop/responsive.svg";
import infinite from "../assets/features/desktop/no-limit.svg";
import bullhorn from "../assets/features/desktop/embed.svg";
import mountain from "../assets/stories/mobile/mountains.jpg";
import mountain_mid from "../assets/stories/desktop/mountains.jpg";
import cityscapes from "../assets/stories/mobile/cityscapes.jpg";
import cityscapes_mid from "../assets/stories/desktop/cityscapes.jpg";
import daysvoyage from "../assets/stories/mobile/18-days-voyage.jpg";
import daysvoyage_mid from "../assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../assets/stories/mobile/architecturals.jpg";
import architecturals_mid from "../assets/stories/desktop/architecturals.jpg";
export default function Home() {
	return (
		<>
			<div className="App">
				<main>
					{/*Header*/}
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
								src={create_and_share}
								alt="man on mountain"
							/>
							<img
								id="main-card-top-image "
								className="w-full mobile:hidden tablet:block desktop:hidden"
								src={create_and_share_mid}
								alt="man on mountain"
							/>
							<img
								id="main-card-top-image hidden desktop:block "
								className="w-full mobile:hidden desktop:block"
								src={create_and_share_desk}
								alt="man on mountain"
							/>
						</div>
						<div className="main-card-bottom-boommark tablet:hidden"></div>
						<div
							id="main-card-bottom"
							className="tablet:flex tablet:flex-col tablet:justify-center tablet:col-start-1 tablet:row-start-1 tablet:col-end-3 desktop:col-end-3 text-white bg-black pr-6 py-[4.5rem] pl-[2.063rem] tablet:px-[3.625rem] desktop:px-[6.25rem]"
						>
							<h2 className="text-white text-[2rem] tablet:text-[2.5rem] font-bold leading-[2.5rem] tablet:leading-[3rem] tracking-[.208rem] tablet:tracking-[.26rem] uppercase">
								Create and share your photo Stories.
							</h2>
							<p className="mt-4 mb-[1.438rem] tablet:mt-[1.313rem] tablet:mb-12 text-white text-[.938rem] leading-[1.563rem] opacity-60">
								Photosnap is a platform for photographers and visual
								storytellers. We make it easy to share photos, tell stories and
								connect with others.
							</p>
							<div className="btn-four-box">
								<button className="btn-four">
									Get An Invite
									<img className="arrow-img-light" src={arrow} />
								</button>
							</div>
						</div>
					</div>
					{/*sub header one*/}
					<div className="bg-white tablet:grid tablet:grid-cols-3 desktop:grid-cols-5">
						<div className="tablet:col-start-1 desktop:col-end-4">
							<img className="w-full tablet:hidden" src={beautiful_stories} />
							<img
								className="w-full hidden tablet:block desktop:hidden"
								src={beautiful_stories_mid}
							/>
							<img
								className="w-full hidden desktop:block"
								src={beautiful_stories_desk}
							/>
						</div>
						<div className="tablet:flex tablet:flex-col tablet:justify-center tablet:col-start-2 desktop:col-start-4 tablet:row-start-1 tablet:col-end-6 text-black bg-white pt-[4.5rem] pr-4 pb-[4.5rem] pl-[2.063rem] tablet:px-[3.125rem] desktop:px-20">
							<h2 className="pr-[3.5rem] text-[2rem] tablet:text-10 font-bold leading-[2.5rem] tablet:leading-[3rem] tablet:pr-[6.125rem] tracking-[0.208rem] tablet:tracking-[0.26rem] uppercase">
								BEAUTIFUL STORIES EVERY TIME
							</h2>
							<p className="mt-4 mb-[1.438rem] tablet:mt-[1.313rem] tablet:mb-12 text-black font-[.938rem] leading-[1.563rem] opacity-60">
								We provide design templates to ensure your stories look
								terrific. Easily add photos, text, embed maps and media from
								other networks. Then share your story with everyone.
							</p>
							<div className="btn-two-box">
								<button className="btn-two">
									VIEW THE STORIES
									<img className="" src={arrow} />
								</button>
							</div>
						</div>
					</div>
					{/*sub header two*/}
					<div className="bg-white tablet:grid tablet:grid-cols-3 desktop:grid-cols-5">
						<div className="tablet:col-start-3 desktop:col-start-3 desktop:col-end-6">
							<img
								className="w-full tablet:hidden"
								src={designed_for_everyone}
								alt="design for everyone"
							/>
							<img
								className="w-full hidden tablet:block desktop:hidden"
								src={designed_for_everyone_mid}
								alt="design for everyone"
							/>
							<img
								className="w-full hidden desktop:block"
								src={designed_for_everyone_desk}
								alt="design for everyone"
							/>
						</div>
						<div className="tablet:flex tablet:flex-col tablet:justify-center tablet:col-start-1 tablet:row-start-1 tablet:col-end-3 desktop:col-end-3 text-black bg-white pt-[4.5rem] pr-[1.5rem] pb-[4.5rem] pl-[2.063rem] tablet:px-[3.125rem] desktop:px-[6.25rem]">
							<h2 className="pr-[3.5rem] text-[2rem] tablet:text-[2.5rem] font-bold leading-[2.5rem] tablet:leading-[3rem] tracking-[.208rem] tablet:tracking-[0.26rem] uppercase">
								DESIGNED FOR EVERYONE
							</h2>
							<p className="mt-[1rem] mb-[1.438rem] tablet:mt-[1.313rem] tablet:mb-[3rem] text-black font-[0.938rem] leading-[1.563rem] opacity-60">
								Photosnap can help you create stories that resonate with your
								audience. Our tool is designed for photographers of all levels,
								brands, businesses you name it.
							</p>
							<div className="btn-two-box">
								<button className="btn-two">
									VIEW THE STORIES
									<img className="" src={arrow} />
								</button>
							</div>
						</div>
					</div>

					{/*Featured story cards*/}
					<div className="tablet:grid tablet:grid-cols-2 desktop:grid-cols-4">
						{/*one*/}
						<div className="relative">
							<img
								src={mountain}
								alt="mountain"
								className="w-full tablet:hidden"
							></img>
							<img
								src={mountain_mid}
								alt="mountain"
								className="w-full hidden tablet:block "
							/>
							<div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
								<p className="text-white text-[1.125rem] font-bold leading-[1.563rem]">
									The Mountains
								</p>
								<p className="text-white text-[0.813rem]">by John Appleseed</p>
								<div className="line bg-white"> </div>
								<div className="btn-two-box">
									<button className="btn-two-light">
										READ STORY
										<img className="arrow-img-light" alt="arrow" src={arrow} />
									</button>
								</div>
							</div>
						</div>
						{/*two*/}
						<div className="relative">
							<img
								src={cityscapes}
								alt="city skylines"
								className="w-full tablet:hidden"
							></img>
							<img
								src={cityscapes_mid}
								alt="city skylines"
								className="w-full hidden tablet:block"
							></img>
							<div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
								<p className="text-white text-[1.125rem] font-bold leading-[1.563rem]">
									Sunset Cityscapes
								</p>
								<p className="text-white text-[0.813rem]">by Benjamin Cruz</p>
								<div className="line bg-white"> </div>
								<div className="btn-two-box">
									<button className="btn-two-light">
										READ STORY
										<img className="arrow-img-light" alt="arrow" src={arrow} />
									</button>
								</div>
							</div>
						</div>
						{/*three*/}
						<div className="relative">
							<img
								src={daysvoyage}
								alt="man walking on voyage"
								className="w-full tablet:hidden"
							></img>
							<img
								src={daysvoyage_mid}
								alt="man walking on voyage"
								className="w-full hidden tablet:block"
							></img>
							<div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
								<p className="text-white text-[1.125rem] font-bold leading-[1.563rem]">
									18 Days Voyage
								</p>
								<p className="text-white text-[0.813rem]">by Alexei Borodin</p>
								<div className="line bg-white"> </div>
								<div className="btn-two-box">
									<button className="btn-two-light">
										READ STORY
										<img className="arrow-img-light" src={arrow} />
									</button>
								</div>
							</div>
						</div>
						{/*four*/}
						<div className="relative">
							<img src={architecturals} className="w-full tablet:hidden"></img>
							<img
								src={architecturals_mid}
								className="w-full hidden tablet:block"
							></img>
							<div className="w-full absolute pr-[2rem] pl-[2rem] top-[70%] left-[10%] translate-x-[-10%] translate-y-[-10%]">
								<p className="text-white text-[1.125rem] font-bold leading-[1.563rem]">
									Architecturals
								</p>
								<p className="text-white text-[0.813rem]">by Samantha Brooke</p>
								<div className="line bg-white"> </div>
								<div className="btn-two-box">
									<button className="btn-two-light">
										READ STORY
										<img className="arrow-img-light" src={arrow} />
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* Detail cards */}
					<div className="pb-[5rem] px-[2rem] tablet:pt-[3.125rem] pt-[5rem] desktop:py-[7.5rem] tablet:px-[9.375rem] desktop:flex desktop:items-end">
						<div className="flex flex-col justify-center items-center ">
							<img src={responsive}></img>
							<h3 className="text-black text-center text-[1.125rem] font-bold leading-[1.563rem] pt-[3rem] pb-4">
								100% Responsive
							</h3>
							<p className="text-black text-center text-[0.938rem] leading-[1.563rem] opacity-60 desktop:px-6 ">
								No matter which the device you’re on, our site is fully
								responsive and stories look beautiful on any screen.
							</p>
						</div>
						<div className="flex flex-col justify-center items-center pt-[3.5rem] desktop:pt-0">
							<img src={infinite}></img>
							<h3 className="text-black text-center text-[1.125rem] font-bold leading-[1.563rem] pt-[3rem] desktop:pt-[4.125rem] pb-4">
								No Photo Upload Limit
							</h3>
							<p className="text-black text-center text-[0.938rem] leading-[1.563rem] opacity-60 desktop:px-6">
								Our tool has no limits on uploads or bandwidth. Freely upload in
								bulk and share all of your stories in one go.
							</p>
						</div>
						<div className="flex flex-col justify-center items-center pt-[3.5rem] desktop:pt-0">
							<img src={bullhorn}></img>
							<h3 className="text-black text-center text-[1.125rem] font-bold leading-[1.563rem] pt-[3rem] pb-4">
								Available to Embed
							</h3>
							<p className="text-black text-center text-[0.938rem] leading-[1.563rem] opacity-60 desktop:mb-[1.563rem]">
								Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
								videos, Google Maps, and more.
							</p>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

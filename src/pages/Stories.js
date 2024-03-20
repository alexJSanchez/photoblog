import React from "react";
import moon from "../assets/stories/mobile/moon-of-appalacia.jpg";
import moon_mid from "../assets/stories/desktop/moon-of-appalacia.jpg";

import mountain from "../assets/stories/mobile/mountains.jpg";
import mountain_mid from "../assets/stories/desktop/mountains.jpg";
import cityscapes from "../assets/stories/mobile/cityscapes.jpg";
import cityscapes_mid from "../assets/stories/desktop/cityscapes.jpg";
import daysvoyage from "../assets/stories/mobile/18-days-voyage.jpg";
import daysvoyage_mid from "../assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../assets/stories/mobile/architecturals.jpg";
import architecturals_mid from "../assets/stories/desktop/architecturals.jpg";

import arrow from "../assets/shared/desktop/arrow.svg";
export default function Stories() {
	return (
		<div>
			<div>
				<img
					src={moon}
					className="tablet:hidden w-full"
					alt="full moon in appalacia mountains"
				/>
				<div className="tablet:bg-moonmid bg-center bg-no-repeat bg-cover text-white bg-black py-[3rem] px-[1.75rem] desktop:px-[7rem] tablet:py-[7rem]">
					<h4 className="text-[.75rem] font-[700] tracking-[.125rem]">
						LAST MONTH’S FEATURED STORY
					</h4>
					<h2 className="py-4 pr-[0.313rem] tablet:max-w-[0.313rem] text-[2rem] tablet:text-[2.5rem] font-[700] leading-[2.5rem] tablet:leading-[3rem] tracking-[0.208rem] tablet:tracking-[0.26rem]">
						HAZY FULL MOON OF APPALACHIA
					</h2>
					<div className="flex text-[0.813rem] opacity-75 gap-2">
						<p>March 2nd 2020</p>
						<p>by John Appleseed</p>
					</div>
					<p className="py-4 tablet:max-w-[24.188rem] text-[0.938rem] opacity-60 leading-[1.563rem]">
						The dissected plateau area, while not actually made up of geological
						mountains, is popularly called "mountains," especially in eastern
						Kentucky and West Virginia, and while the ridges are not high, the
						terrain is extremely rugged.
					</p>
					<div className="btn-two-box">
						<button className="btn-two-light">
							READ THE STORY
							<img className="arrow-img-light" alt="arrow" src={arrow} />
						</button>
					</div>
				</div>
			</div>
			<div className="tablet:grid tablet:grid-cols-2 desktop:grid-cols-4">
				<div className="background-img-gradient">
					<div className="bg-mountain tablet:bg-mountainmid bg-center bg-no-repeat bg-cover">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white ">
							<p className="text-[0.813rem] ">April 16th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								The Mountains
							</h3>
							<p className="text-[0.813rem] pb-4">by John Appleseed</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-cityscapes tablet:bg-cityscapesmid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem] ">April 14th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Sunset Cityscapes
							</h3>
							<p className="text-[0.813rem] pb-4">by Benjamin Cruz</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-dayvoyage tablet:bg-dayvoyagemid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">April 11th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								18 Days Voyage
							</h3>
							<p className="text-[0.813rem] pb-4">by Alexei Borodin</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-architecturals tablet:bg-architecturalsmid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">April 9th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Architecturals
							</h3>
							<p className="text-[0.813rem] pb-4">by Samantha Brooke</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-worldtour tablet:bg-worldtourmid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">April 7th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								World Tour 2019
							</h3>
							<p className="text-[0.813rem] pb-4">by Timothy Wagner</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-unforeseen tablet:bg-unforeseenmid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">April 3rd 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Unforeseen Corners
							</h3>
							<p className="text-[0.813rem] pb-4">by William Malcolm</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-kingonafrica tablet:bg-kingonafricamid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">March 29th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								King on Africa: Part II
							</h3>
							<p className="text-[0.813rem] pb-4">by Tim Hillenburg</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-tripnowhere tablet:bg-tripnowheremid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">March 21st 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								The Trip to Nowhere
							</h3>
							<p className="text-[0.813rem] pb-4">by Felicia Rourke</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-rageofsea tablet:bg-rageofseamid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">March 19th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Rage of The Sea
							</h3>
							<p className="text-[0.813rem] pb-4">by Mohammed Abdul</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-runningfree tablet:bg-runningfreemid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">March 16th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Running Free
							</h3>
							<p className="text-[0.813rem] pb-4">by Michelle</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-behindwaves tablet:bg-behindwavesmid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">March 11th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Behind the Waves
							</h3>
							<p className="text-[0.813rem] pb-4">by Lamarr Wilson</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-calmwaters tablet:bg-calmwatersmid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">March 9th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Calm Waters
							</h3>
							<p className="text-[0.813rem] pb-4">by Samantha Brooke</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-milkyway tablet:bg-milkywaymid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">March 5th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								The Milky Way
							</h3>
							<p className="text-[0.813rem] pb-4">by Benjamin Cruz</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-darkforest tablet:bg-darkforestmid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">March 4th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Night at The Dark Forest
							</h3>
							<p className="text-[0.813rem] pb-4">by Mohammed Abdul</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-somwarpet tablet:bg-somwarpetmid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">March 1st 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Somwarpet’s Beauty
							</h3>
							<p className="text-[0.813rem] pb-4">by Michelle</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-dreams tablet:bg-dreamsmid bg-center bg-no-repeat bg-cover">
					<div className="background-img-gradient">
						<div className="pt-[13.438rem] tablet:pt-[21.25rem] pb-[2.5rem] px-[2.604rem] min-h-[23.438rem] text-white">
							<p className="text-[0.813rem]">February 25th 2020</p>
							<h3 className="text-[1.125rem] py-[0.25rem] font-bold leading-[1.563rem]">
								Land of Dreams
							</h3>
							<p className="text-[0.813rem] pb-4">by William Malcolm</p>
							<div className="bg-white opacity-25 py-[0.063rem] mb-[1.25rem]">
								{" "}
							</div>
							<div className="btn-two-box">
								<button className="btn-two-light ">
									READ STORY
									<img className="arrow-img-light" alt="arrow" src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

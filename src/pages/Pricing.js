import React, { useState } from "react";
import dusk from "../assets/pricing/mobile/hero.jpg";
import duskmid from "../assets/pricing/tablet/hero.jpg";
import duskdesk from "../assets/pricing/desktop/hero.jpg";
import checkmark from "../assets/pricing/desktop/check.svg";
import arrow from "../assets/shared/desktop/arrow.svg";
export default function Pricing() {
	const [discount, setDiscount] = useState(false);
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
						src={dusk}
						alt="man on mountain"
					/>
					<img
						id="main-card-top-image "
						className="w-full mobile:hidden tablet:block desktop:hidden"
						src={duskmid}
						alt="man on mountain"
					/>
					<img
						id="main-card-top-image hidden desktop:block "
						className="w-full mobile:hidden desktop:block"
						src={duskdesk}
						alt="man on mountain"
					/>
				</div>
				<div className="main-card-bottom-boommark tablet:hidden"></div>
				<div
					id="main-card-bottom"
					className="tablet:flex tablet:flex-col tablet:justify-center tablet:col-start-1 tablet:row-start-1 tablet:col-end-3 desktop:col-end-3 text-white bg-black pt-[4.5rem] pr-[1.5rem] pb-[4.5rem] pl-[2.063rem] tablet:px-[58px] desktop:px-[100px] "
				>
					<h2 className="text-white text-[2rem] tablet:text-[2.5rem] font-bold leading-[2.5rem] tablet:leading-[3rem] tracking-[0.208rem] tablet:tracking-[0.26rem] uppercase">
						FEATURES
					</h2>
					<p className="mt-[1rem] mb-[1.438rem] tablet:mt-[1.313rem] tablet:mb-[3rem] text-white text-[0.938rem] leading-[1.563rem] opacity-[0.6]">
						We make sure all of our features are designed to be loved by every
						aspiring and even professional photograpers who wanted to share
						their stories.
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center gap-[2rem] mt-[4rem] mb-[2.5rem]">
				{discount ? (
					<p className="text-[1.125rem] font-bold leading-[1.5625rem] opacity-50">
						Monthly
					</p>
				) : (
					<p className="text-[1.125rem] font-bold leading-[1.5625rem]">
						Monthly
					</p>
				)}
				<label class="switch">
					<input
						type="checkbox"
						onClick={() => {
							setDiscount(!discount);
						}}
					></input>
					<span class="slider round"></span>
				</label>
				{discount ? (
					<p className="text-[1.125rem] font-bold leading-[1.5625rem]">
						Yearly
					</p>
				) : (
					<p className="text-[1.125rem] font-bold leading-[1.5625rem] opacity-50">
						Yearly
					</p>
				)}
			</div>
			<div className="flex flex-col items-center justify-center mx-7 mb-[4rem] desktop:flex-row gap-[1.875rem]">
				<div className="tablet:grid tablet:grid-cols-4 tablet:grid-row-4 text-center tablet:text-left desktop:flex desktop:flex-col desktop:items-center desktop:text-center bg-[#F5F5F5] pt-[3.5rem] pb-[2.5rem] px-[1.375rem] tablet:px-[2.5rem] desktop:max-w-[21.875rem]">
					<div className="tablet:col-start-1 tablet:col-end-2 tablet:row-start-1 row-end-2">
						<h3 className="text-[1.5rem] font-bold leading-[1.563rem]">
							Basic
						</h3>
						<p className="text-[0.938rem] leading-[1.563rem] opacity-60 mt-[1.125rem] ">
							Includes basic usage of our platform. Recommended for new and
							aspiring photographers.
						</p>
					</div>
					<div className="tablet:col-start-4 tablet:row-start-1 tablet:row-end-1 tablet:text-right desktop:text-center desktop:pt-[2.5rem] ">
						<p className="text-[2.5rem] font-bold leading-[3rem] tracking-[0.26rem] uppercase pt-[2.5rem] tablet:pt-[0rem] ">
							{discount ? "$190.00" : "$19.00"}
						</p>
						<p className="text-[0.938rem] leading-[1.563rem] opacity-60">
							{discount ? "per year" : "per month"}
						</p>
					</div>
					<button className="row-start-3 col-start-1 col-end-3 text-[0.75rem] uppercase tracking-[0.125rem] font-bold bg-black text-white mt-[3.25rem] w-full py-[0.75rem]">
						pick plan
					</button>
				</div>
				<div className="tablet:grid tablet:grid-cols-4 tablet:grid-row-4 text-center tablet:text-left desktop:flex desktop:flex-col desktop:items-center desktop:text-center text-white bg-black my-6 desktop:my-0  pt-[3rem] desktop:pt-[5.75rem] pb-[2.5rem] desktop:pb-[4.438rem] px-[1.375rem] tablet:px-[2.5rem] desktop:max-w-[21.875rem]">
					<div className="tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-2 ">
						<h3 className="text-[1.5rem] font-bold leading-[1.5625rem]">Pro</h3>
						<p className="text-[0.9375rem] leading-[1.5625rem] opacity-60 mt-[1.125rem]">
							More advanced features available. Recommended for photography
							veterans and professionals.
						</p>
					</div>
					<div className="tablet:col-start-4 tablet:row-start-1 tablet:row-end-1 tablet:text-right desktop:text-center">
						<p className="text-[1.5rem] font-bold leading-[3rem] tracking-[0.26rem] uppercase pt-[2.5rem] ">
							{discount ? "$390.00" : "$39.00"}
						</p>
						<p className="text-[0.938rem] leading-[1.563rem] opacity-60 ">
							{discount ? "per year" : "per month"}
						</p>
					</div>
					<button className="tablet:row-start-3 tablet:col-start-1 tablet:col-end-3 text-[0.75rem] uppercase tracking-[0.125rem] font-bold bg-white text-black mt-[3.25rem] w-full py-[0.75rem]">
						pick plan
					</button>
				</div>
				<div className="tablet:grid tablet:grid-cols-4 tablet:grid-row-4 text-center tablet:text-left desktop:flex desktop:flex-col desktop:items-center desktop:text-center bg-[#F5F5F5] pt-[3.5rem] pb-[2.5rem] px-[1.375rem] tablet:px-[2.5rem] desktop:max-w-[21.875rem]">
					<div className="tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-2">
						<h3 className="text-[1.5rem] font-bold leading-[1.563rem]">
							Business
						</h3>
						<p className="text-[0.938rem] leading-[1.563rem] opacity-60 mt-[1.125rem] ">
							Additional features available such as more detailed metrics.
							Recommended for business owners.
						</p>
					</div>
					<div className="tablet:col-start-4 tablet:row-start-1 tablet:row-end-1 tablet:text-right desktop:text-center desktop:pt-[2.5rem] ">
						<p className="text-[2.5rem] font-bold leading-[3rem] tracking-[0.26rem] uppercase pt-[2.5rem] tablet:pt-0">
							{discount ? "$990.00" : "$99.00"}
						</p>
						<p className="text-[0.938rem] leading-[1.563rem] opacity-60 ">
							{discount ? "per year" : "per month"}
						</p>
					</div>
					<button className="row-start-3 col-start-1 col-end-3 text-[0.75rem] uppercase tracking-[0.125rem] font-bold bg-black text-white mt-[3.25rem] w-full py-[0.75rem]">
						pick plan
					</button>
				</div>
			</div>
			{/* {compare section} */}
			<div className="tablet:hidden mb-[4rem] px-[1.813rem] tablet:px-0">
				<p className="text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
					THE FEATURES
				</p>
				<div className="w-full h-[0.063rem] bg-black my-[1.438rem]"></div>
				<p className="text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
					UNLIMITED STORY POSTING
				</p>
				<div className="grid grid-cols-3 pt-[1rem]">
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.104rem] uppercase">
							BASIC
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Pro
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
				</div>
				<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-10"></div>
				<p className="text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
					UNLIMITED PHOTO UPLOAD
				</p>
				<div className="grid grid-cols-3 pt-[1rem]">
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							BASIC
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Pro
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
				</div>
				<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-10"></div>
				<p className="text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
					EMBEDDING CUSTOM CONTENT
				</p>
				<div className="grid grid-cols-3 pt-[1rem]">
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Pro
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
				</div>
				<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-10"></div>
				<p className="text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
					CUSTOMIZE METADATA
				</p>
				<div className="grid grid-cols-3 pt-[1rem]">
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Pro
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
				</div>
				<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-10"></div>
				<p className="text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
					ADVANCED METRICS
				</p>
				<div className="grid grid-cols-3 pt-[1rem]">
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Pro
						</h4>
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[8px]" />
					</div>
				</div>
				<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-10"></div>
				<p className="text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
					PHOTO DOWNLOADS
				</p>
				<div className="grid grid-cols-3 pt-4">
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Pro
						</h4>
					</div>
					<div>
						<h4 className="text-[10px] font-bold tracking-[0.1041875rem] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
				</div>
				<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-10"></div>
				<p className="text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
					SEARCH ENGINE INDEXING
				</p>
				<div className="grid grid-cols-3 pt-[1rem]">
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Pro
						</h4>
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
				</div>
				<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-10"></div>
				<p className="text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
					CUSTOM ANALYTICS
				</p>
				<div className="grid grid-cols-3 pt-4">
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							BASIC
						</h4>
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Pro
						</h4>
					</div>
					<div>
						<h4 className="text-[0.625rem] font-bold tracking-[0.1041875rem] uppercase">
							Business
						</h4>
						<img src={checkmark} className="mt-[0.5rem]" />
					</div>
				</div>
				<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-10"></div>
			</div>
			<div className="hidden tablet:block desktop:mx-[22.125rem]">
				<h3 className="text-[2.5rem] text-center font-bold tracking-[0.2604375rem] leading-[3rem]">
					COMPARE
				</h3>
				<div className="mx-[2.5rem] mt-[4rem] pb-[1.5625rem] tablet:mb-[7rem]">
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-0 col-end-2  row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							THE FEATURES
						</p>
						<p className=" col-start-3 row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							BASIC
						</p>
						<p className="col-start-4 col-end-5 row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							PRO
						</p>
						<p className="col-start-5 row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							BUSINESS
						</p>
					</div>
					<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[0.9375rem] text-left row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							UNLIMITED STORY POSTING
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[15px] text-left row-start-1 text-[12px] font-bold tracking-[0.125rem] uppercase">
							UNLIMITED PHOTO UPLOAD
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[0.9375rem] text-left row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							EMBEDDING CUSTOM CONTENT
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[1px] bg-black my-[1.4375rem] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[0.9375rem] text-left row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							CUSTOMIZE METADATA
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[0.9375rem] text-left row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							ADVANCED METRICS
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[1px] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[0.9375rem] text-left row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							PHOTO DOWNLOADS
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[0.0625rem] bg-black my-[23px] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[0.9375rem] text-left row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							SEARCH ENGINE INDEXING
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-20"></div>
					<div className="grid grid-cols-5 grid-rows-1 text-center">
						<p className="col-start-1 col-end-3 pl-[0.9375rem] text-left row-start-1 text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							CUSTOM ANALYTICS
						</p>
						<div className="col-start-3 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-4 col-end-5 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} className="hidden" />
						</div>
						<div className="col-start-5 row-start-1 row-start-1 flex justify-center items-center align-middle text-[0.75rem] font-bold tracking-[0.125rem] uppercase">
							<img src={checkmark} />
						</div>
					</div>
					<div className="w-full h-[0.0625rem] bg-black my-[1.4375rem] opacity-20"></div>
				</div>
			</div>
			<div className="tablet:grid grid-cols-5 bg-sand tablet:bg-sandmid py-[4rem] px-[2.0625rem] text-white bg-no-repeat bg-cover desktop:px-[10.3125rem]">
				<h2 className="text-[2rem] col-start-1 col-end-4 desktop:col-end-3 desktop:pr-4 font-bold leading-[2.5rem] tracking-[0.2083125rem] uppercase pb-[1.5rem] tablet:pb-0">
					We’re in beta. Get your invite today!
				</h2>
				<div className="btn-two-box col-start-6 flex items-center">
					<button className="btn-two-light flex items-center">
						GET AN INVITE
						<img className="arrow-img-light" src={arrow} />
					</button>
				</div>
			</div>
		</div>
	);
}
{
	/* <div className="w-full h-[1px] bg-black my-[23px]"></div>
					<div className="flex justify-between mx-[62px]">
						<p className="text-[12px] font-bold tracking-[2px] uppercase">
							UNLIMITED STORY POSTING
						</p>
						<img src={checkmark} />
						<img src={checkmark} />
						<img src={checkmark} />
					</div> */
}

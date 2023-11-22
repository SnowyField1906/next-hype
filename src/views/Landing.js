import { useEffect, useState } from "react";

import NFTPreview from "../components/NFTPreview";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getNFTs } from "../helpers/nft";

export default function Landing() {
	const [nfts, setNFTs] = useState([])

	useEffect(() => {
		getNFTs({}).then(res => setNFTs(res))
	}, [])

	const settings = {
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnHover: true,
		nextArrow: <></>,
		prevArrow: <></>,
	};

	return (
		<div className="space-y-6 lg:space-y-0">
			<div className="my-20 mx-auto w-full lg:w-5/6 text-center">
				<h1 className="leading-tight mb-2 text-7xl text-gray-900 md:leading-tight">
					Create your own digital arts powered by{' '}
					<span className="bg-gray-900 text-gray-100 px-4">
						Artificial Intelligence
					</span>
				</h1>
				<p className="text-gray-900 font-light my-10 text-xl">
					Create AI powered NFTs and trade on fully decentralized marketplace.
					<br />
					Easy to join, no wallet required.
				</p>
				<div className="mx-auto items-center w-full max-w-xl grid grid-cols-2 gap-5">
					<Link to="/generate" className="border py-4 px-12 bg-gray-300 border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-gray-100 transition-colors ease-in-out duration-500">Create</Link>
					<Link to="/discover" className="border py-4 px-12 border-gray-900 text-gray-100 bg-gray-900 hover:bg-gray-300 hover:text-gray-900 hover:border-gray-300 transition-colors ease-in-out duration-500">Explore</Link>
				</div>
			</div>
			<div className="-mx-24 py-20 bg-gray-800">
				<Slider {...settings} >
					{nfts.map((nft) => (
						<div className="">
							<NFTPreview {...nft} className="w-[20rem] h-[20rem]" />
						</div>
					))}
				</Slider>
			</div>
		</div >
	);
}
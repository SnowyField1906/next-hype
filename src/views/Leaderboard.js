import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getUsers } from "../helpers/user";

export default function LeaderBoard() {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const userIds = await getUsers();
			const users = await Promise.all(
				userIds.map(async (userId) => {
					const user = await getUsers(userId);
					return user;
				})
			);
			setUsers(users);
		};

		fetchData();
	}, []);

	const textIndexColor = ["text-yellow-400", "text-red-400", "text-blue-400"];

	if (users === null) {
		return (
			<div className="fixed top-0 right-0 z-30 h-screen w-screen flex items-center justify-center bg-gray-900 bg-opacity-50 select-none">
				<div className="h-full w-full flex items-center justify-center">
					<div className="animate-spin rounded-full self-center h-16 w-16 border-t-2 border-b-2 border-gray-300"></div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col justify-between">
			<h1 className="text-4xl text-gray-900">
				# Discover our <span className="twinkle-text">hall of fame</span>{" "}
			</h1>
			<div className="flex justify-between gap-1 mx-10 mt-10 mb-8">
				<p className="border-b truncate w-1/4 border-gray-900 text-2xl font-extralight">
					## top nft sellers
				</p>
				<p className="w-min border-gray-900 text-2xl font-extralight">/</p>
				<p className="border-b truncate w-1/4 border-gray-900 text-2xl font-extralight  text-center">
					## top data sellers
				</p>
				<p className="w-min border-gray-900 text-2xl font-extralight">/</p>
				<p className="border-b truncate w-1/4 border-gray-900 text-2xl font-extralight  text-center">
					## top nft buyers
				</p>
				<p className="w-min border-gray-900 text-2xl font-extralight">/</p>
				<p className="border-b truncate w-1/4 border-gray-900 text-2xl font-extralight text-right">
					## top data buyers
				</p>
			</div>
			<div>
				<div className="flex justify-between mx-10 gap-x-5">
					<div className="grid gap-y-3 z-20">
						{users
							?.sort(
								(a, b) => b.socialUser.numNFTSold - a.socialUser.numNFTSold
							)
							.slice(0, 5)
							.map((user, index) => (
								<Link
									to={`/profile/${user.id}`}
									className={`${textIndexColor[index]} flex items-center justify-between bg-gray-100 hover:bg-gray-800 px-5 py-3 place-items-center`}
								>
									<span className="flex items-center space-x-3">
										<p className={`text-base font-bold`}>{index + 1}</p>
										<img src={user.picture} className={`w-12 h-12`} alt="..." />
										<p className={`text-base font-semibold`}>{user.name}</p>
									</span>
									<span className="px-3 transition duration-200">
										{user.socialUser.numNFTSold}
									</span>
								</Link>
							))}
					</div>
					<div className="grid gap-y-3 z-20">
						{users
							?.sort(
								(a, b) =>
									b.socialUser.numPromptSold - a.socialUser.numPromptSold
							)
							.slice(0, 5)
							.map((user, index) => (
								<Link
									to={`/profile/${user.id}`}
									className={`${textIndexColor[index]} flex items-center justify-between bg-gray-100 hover:bg-gray-800 px-5 py-3 place-items-center`}
								>
									<span className="flex items-center space-x-3">
										<p className={`text-base font-bold`}>{index + 1}</p>
										<img src={user.picture} className={`w-12 h-12`} alt="..." />
										<p className={`text-base font-semibold`}>{user.name}</p>
									</span>
									<span className="px-3 transition duration-200">
										{user.socialUser.numPromptSold}
									</span>
								</Link>
							))}
					</div>
					<div className="grid gap-y-3 z-20">
						{users
							?.sort(
								(a, b) =>
									b.socialUser.numNFTPurchased - a.socialUser.numNFTPurchased
							)
							.slice(0, 5)
							.map((user, index) => (
								<Link
									to={`/profile/${user.id}`}
									className={`${textIndexColor[index]} flex items-center justify-between bg-gray-100 hover:bg-gray-800 px-5 py-3 place-items-center`}
								>
									<span className="flex items-center space-x-3">
										<p className={`text-base font-bold`}>{index + 1}</p>
										<img src={user.picture} className={`w-12 h-12`} alt="..." />
										<p className={`text-base font-semibold`}>{user.name}</p>
									</span>
									<span className="px-3 transition duration-200">
										{user.socialUser.numNFTPurchased}
									</span>
								</Link>
							))}
					</div>
					<div className="grid gap-y-3 z-20">
						{users
							?.sort(
								(a, b) =>
									b.socialUser.numPromptPurchased -
									a.socialUser.numPromptPurchased
							)
							.slice(0, 5)
							.map((user, index) => (
								<Link
									to={`/profile/${user.id}`}
									className={`${textIndexColor[index]} flex items-center justify-between bg-gray-100 hover:bg-gray-800 px-5 py-3 place-items-center`}
								>
									<span className="flex items-center space-x-3">
										<p className={`text-base font-bold`}>{index + 1}</p>
										<img src={user.picture} className={`w-12 h-12`} alt="..." />
										<p className={`text-base font-semibold`}>{user.name}</p>
									</span>
									<span className="px-3 transition duration-200">
										{user.socialUser.numPromptPurchased}
									</span>
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

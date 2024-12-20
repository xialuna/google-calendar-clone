import React, { useContext } from "react";
import { Trash2, X, Text, Calendar } from "lucide-react";
import GlobalContext from "../context/GlobalContext";
import { holidays } from "../../data";

const HolidayPopOver = () => {
	const { dayClicked, setShowHolidayPopOver } = useContext(GlobalContext);

	// Find holiday based on the clicked day
	// const holiday = holidays.find((holiday) => {
	// 	holiday.month == dayClicked.month() + 1 &&
	// 		holiday.day === dayClicked.date();
	// });

	// if (!holiday) return null;

	return (
		<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center item-center bg-white rounded-3xl shadow-2xl w-[28rem] overflow-hidden">
			<header className=" text-white">
				<button
					onClick={() => setShowHolidayPopOver(false)}
					className="bg-grayPrimary/70 rounded-full px-2 py-1 absolute right-4 top-3"
				>
					<Trash2 className="w-[1.15rem]" />
				</button>
				<button
					onClick={() => setShowHolidayPopOver(false)}
					className="bg-grayPrimary/70 rounded-full px-2 py-1 absolute right-4 top-3 mr-11"
				>
					<X className="w-[1.15rem]" />
				</button>
			</header>
			<div>
				<div className="h-40 overflow-hidden flex items-center justify-center ">
					<img src="/Christmas.jpg" alt={holidays.name} />
				</div>
				<div className="px-7 p-6">
					<div className="flex gap-4 mb-5">
						<span className="w-4 h-4 bg-green-500 rounded mt-2"></span>
						<div>
							<p className="text-[22px] font-light">Christmas Eve</p>
							<p className="text-graySecondary text-sm">Tuesday, December 24</p>
						</div>
					</div>
					<div className="flex gap-4 items-center  text-graySecondary text-sm mb-2">
						<Text className="w-4" />
						<p>Description</p>
					</div>
					<div className="flex gap-4 items-center  text-graySecondary text-sm">
						<Calendar className="w-4" />
						<p>Holiday Type</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HolidayPopOver;

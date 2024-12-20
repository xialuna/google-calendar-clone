/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import { holidays } from "../../data";

export default function Day({ day, rowIndex }) {
	const { setDayClicked, setShowHolidayPopOver } = useContext(GlobalContext);

	// Check if the day has a holiday
	const holiday = holidays.find(
		(h) => h.day === day.date() && h.month === day.month() + 1
	);

	const getCurrentDayClass = () => {
		return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
			? "bg-primary text-white rounded-full w-7"
			: "";
	};

	const handleClick = () => {
		if (holiday) {
			setDayClicked(day);
			setShowHolidayPopOver(true);
		}
	};

	return (
		<div
			className={`flex flex-col border border-gray-200 bg-white p-2 ${
				holiday ? "cursor-pointer" : ""
			}`}
			onClick={handleClick}
		>
			<header className="flex flex-col gap-0.5 items-center text-sm text-center">
				{rowIndex === 0 && (
					<p className="text-graySecondary mt-1">
						{day.format("ddd").toUpperCase()}
					</p>
				)}
				<p className={`p-1 my-1 ${getCurrentDayClass()}`}>{day.format("DD")}</p>
			</header>
			{holiday && (
				<p className="text-xs text-white bg-green rounded-lg px-2 py-1 text-center truncate">
					{holiday.name}
				</p>
			)}
		</div>
	);
}

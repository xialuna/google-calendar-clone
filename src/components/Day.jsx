/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import { holidays } from "../../data";

export default function Day({ day, rowIndex }) {
	const { setDayClicked, setShowHolidayPopOver, showHolidays } =
		useContext(GlobalContext);

	// Check if the day has a holiday and holiday toggle is on
	const holiday = showHolidays
		? holidays.find((h) => h.day === day.date() && h.month === day.month() + 1)
		: null;

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

	const isStartOfMonth = day.date() === 1;

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
				<p className={`p-1 my-1 ${getCurrentDayClass()}`}>
					{isStartOfMonth ? `${day.format("MMM")} ${day.date()}` : day.date()}
				</p>
			</header>
			{holiday && (
				<p className="text-xs text-white bg-green rounded-lg px-2 py-1 truncate">
					{holiday.name}
				</p>
			)}
		</div>
	);
}

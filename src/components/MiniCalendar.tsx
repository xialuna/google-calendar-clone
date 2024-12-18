import React, { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import { getMonth } from "../util";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlobalContext from "../context/GlobalContext";

const MiniCalendar = () => {
	const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
	const [currentMonth, setCurrentMonth] = useState(getMonth());

	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIndex));
	}, [currentMonthIndex]);

	// Synchronizes the mini calendar's state with the main calendar's position
	const { monthIndex, setMiniCalendarMonth, dayClicked, setDayClicked } =
		useContext(GlobalContext);

	// Updates the current month index whenever monthIndex(dependency) changes in the context
	useEffect(() => {
		setCurrentMonthIndex(monthIndex);
	}, [monthIndex]);

	//Buttons event handler
	function handlePrevMonth() {
		setCurrentMonthIndex(currentMonthIndex - 1);
	}

	function handleNextMonth() {
		setCurrentMonthIndex(currentMonthIndex + 1);
	}

	//Highlight current day
	const getCurrentDayClass = (day) => {
		const format = "DD-MM-YY";
		const currentDay = dayjs().format("DD-MM-YY");
		const formattedDay = day.format("DD-MM-YY");
		const selectedDay = dayClicked && dayClicked.format(format);
		if (currentDay === formattedDay) {
			return "bg-primary text-white rounded-full w-7";
		} else if (formattedDay == selectedDay) {
			return "bg-primary-100 rounded-full";
		} else {
			return "";
		}
	};

	return (
		<div className="mt-2">
			<header className="flex justify-between">
				{/* HEADING */}
				<p className="text-grayPrimary">
					{dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
						"MMMM YYYY"
					)}
				</p>
				<div>
					<button onClick={handlePrevMonth}>
						<ChevronLeft className="w-6 h-6" />
					</button>

					<button onClick={handleNextMonth}>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</header>

			<div className="grid grid-cols-7 grid-rows-6">
				{/* DAYS HEADING - Day.jsx */}
				{currentMonth[0].map((day, dayIndex) => (
					<span key={dayIndex} className="text-xs py-1 text-center">
						{day.format("dd").charAt(0)}
					</span>
				))}

				{/* DAYS - Month.jsx */}
				{currentMonth.map((week, weekIndex) => (
					<React.Fragment key={weekIndex}>
						{week.map((day, dayIndex) => (
							<button
								key={dayIndex}
								onClick={() => {
									setMiniCalendarMonth(currentMonthIndex);
									setDayClicked(day);
								}}
								className={`py-1 w-full ${getCurrentDayClass(
									day
								)} hover:bg-[#E4E8EE] hover:rounded-full`}
							>
								<span className="text-xs">{day.format("D")}</span>
							</button>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default MiniCalendar;

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
	const { monthIndex } = useContext(GlobalContext);

	// Updates the current month index whenever monthIndex(dependency) changes in the context
	useEffect(() => {
		setCurrentMonthIndex(monthIndex);
	}, [monthIndex]);

	function handlePrevMonth() {
		setCurrentMonthIndex(currentMonthIndex - 1);
	}

	function handleNextMonth() {
		setCurrentMonthIndex(currentMonthIndex + 1);
	}

	return (
		<div className="mt-9">
			<header className="flex justify-between">
				{/* HEADING */}
				<p className="text-grayPrimary">
					{dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
						"MMMM YYYY"
					)}
				</p>
				<button onClick={handlePrevMonth}>
					<ChevronLeft className="w-6 h-6" />
				</button>

				<button onClick={handleNextMonth}>
					<ChevronRight className="w-6 h-6" />
				</button>
			</header>
		</div>
	);
};

export default MiniCalendar;

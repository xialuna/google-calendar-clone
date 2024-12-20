import React, { useContext } from "react";
import logo from "/logo.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

export default function CalendarHeader() {
	const { monthIndex, setMonthIndex } = useContext(GlobalContext);

	//Reset to current month
	function handleReset() {
		setMonthIndex(dayjs().month());
	}

	function handlePrevMonth() {
		setMonthIndex(monthIndex - 1);
	}

	function handleNextMonth() {
		setMonthIndex(monthIndex + 1);
	}
	return (
		<header className="flex items-center px-4 py-2 gap-4">
			<img src={logo} alt="Google Calendar Logo" className="w-11 h-11"></img>
			<h1 className="text-2xl font-thin text-graySecondary">Calendar</h1>
			<button
				onClick={handleReset}
				className="border rounded-full py-2 px-7 border-graySecondary"
			>
				Today
			</button>
			<div className="flex gap-3 text-graySecondary">
				<button onClick={handlePrevMonth}>
					<ChevronLeft className="w-6 h-6" />
				</button>

				<button onClick={handleNextMonth}>
					<ChevronRight className="w-6 h-6" />
				</button>
				<h2 className="text-xl text-grayPrimary">
					{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
				</h2>
			</div>
		</header>
	);
}

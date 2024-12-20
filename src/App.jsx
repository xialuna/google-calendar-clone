import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalenderHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./context/GlobalContext";
import HolidayPopOver from "./components/HolidayPopOver";

function App() {
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	const { monthIndex, showHolidayPopOver } = useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex));
	}, [monthIndex]);
	return (
		<>
			{showHolidayPopOver && <HolidayPopOver />}
			<div className="h-screen flex flex-col font-productsans bg-[#F8FAFD]">
				<CalendarHeader />
				<div className="flex flex-1">
					<Sidebar />
					<Month month={currentMonth} />
				</div>
			</div>
		</>
	);
}

export default App;

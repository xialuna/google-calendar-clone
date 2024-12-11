import React, { useState } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalenderHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";

function App() {
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	return (
		<>
			<div className="h-screen flex flex-col">
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

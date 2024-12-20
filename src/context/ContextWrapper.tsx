/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
const ContextWrapper = (props) => {
	const [monthIndex, setMonthIndex] = useState(dayjs().month());
	const [miniCalendarMonth, setMiniCalendarMonth] = useState(null);
	const [dayClicked, setDayClicked] = useState(null);
	const [showHolidayPopOver, setShowHolidayPopOver] = useState(false); //initial value
	const [showHolidays, setShowHolidays] = useState(true);
	useEffect(() => {
		if (miniCalendarMonth !== null) {
			setMonthIndex(miniCalendarMonth);
		}
	}, [miniCalendarMonth]);
	return (
		<div>
			<GlobalContext.Provider
				value={{
					monthIndex,
					setMonthIndex,
					miniCalendarMonth,
					setMiniCalendarMonth,
					dayClicked,
					setDayClicked,
					showHolidayPopOver,
					setShowHolidayPopOver,
					showHolidays,
					setShowHolidays,
				}}
			>
				{props.children}
			</GlobalContext.Provider>
		</div>
	);
};

export default ContextWrapper;

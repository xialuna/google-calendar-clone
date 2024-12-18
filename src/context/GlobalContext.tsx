import React from "react";

const GlobalContext = React.createContext({
	monthIndex: 0,
	setMonthIndex: (index) => {},
	miniCalendarMonth: 0,
	setMiniCalendarMonth: (index) => {},
	dayClicked: null,
	setDayClicked: (day) => {},
});

export default GlobalContext;

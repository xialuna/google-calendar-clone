import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getMonth } from "../util";

const MiniCalendar = () => {
	const [currentMonthIndex, setCurrentIndex] = useState(dayjs().month());
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIndex));
	}, [currentMonthIndex]);
	return <div>MiniCalendar</div>;
};

export default MiniCalendar;

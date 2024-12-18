/* eslint-disable react/prop-types */
import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
const ContextWrapper = (props) => {
	const [monthIndex, setMonthIndex] = useState(dayjs().month());
	return (
		<div>
			<GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
				{props.children}
			</GlobalContext.Provider>
		</div>
	);
};

export default ContextWrapper;

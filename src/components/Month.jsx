/* eslint-disable react/prop-types */
import React from "react";
import Day from "./Day";

export default function Month({ month }) {
	return (
		//Render grid layout for each month
		<div className="flex-1 grid grid-cols-7 grid-rows-5">
			{month.map((week, weekIndex) => (
				<React.Fragment key={weekIndex}>
					{week.map((day, dayIndex) => (
						<Day day={day} key={dayIndex} rowIndex={weekIndex} />
					))}
				</React.Fragment>
			))}
		</div>
	);
}

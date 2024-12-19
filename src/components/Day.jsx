/* eslint-disable react/prop-types */
import React from "react";
import dayjs from "dayjs";

export default function Day({ day, rowIndex }) {
	const getCurrentDayClass = () => {
		return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
			? "bg-primary text-white rounded-full w-7"
			: "";
	};
	return (
		<div className="flex flex-col border border-gray-200 bg-white">
			<header className="flex flex-col gap-0.5 items-center text-sm text-center">
				{rowIndex === 0 && (
					<p className="text-graySecondary mt-1">
						{day.format("ddd").toUpperCase()}
					</p>
				)}
				<p className={`p-1 my-1 ${getCurrentDayClass()}`}>{day.format("DD")}</p>
			</header>
		</div>
	);
}

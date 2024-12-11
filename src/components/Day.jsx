/* eslint-disable react/prop-types */
import React from "react";

export default function Day({ day, rowIndex }) {
	return (
		<div className="flex flex-col border border-gray-200">
			<header className="flex flex-col gap-0.5 items-center text-sm p-1 my-1">
				{rowIndex === 0 && (
					<p className="text-graySecondary">
						{day.format("ddd").toUpperCase()}
					</p>
				)}
				<p>{day.format("DD")}</p>
			</header>
		</div>
	);
}

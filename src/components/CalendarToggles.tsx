import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const CalendarToggles = () => {
	const { showHolidays, setShowHolidays } = useContext(GlobalContext);

	return (
		<div className="mt-6 px-3">
			<h3 className="text-sm mb-4">Other calendars</h3>
			<ul className="space-y-3">
				<li className="flex items-center gap-3">
					<input
						type="checkbox"
						id="toggle-holidays"
						checked={showHolidays}
						onChange={() => setShowHolidays((prev) => !prev)}
						className="cursor-pointer accent-green scale-125"
					/>
					<label
						htmlFor="toggle-holidays"
						className="text-sm text-graySecondary cursor-pointer"
					>
						Holidays in Philippines
					</label>
				</li>
			</ul>
		</div>
	);
};

export default CalendarToggles;

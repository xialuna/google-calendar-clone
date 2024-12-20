import React, { useContext } from "react";
import { Trash2, X } from "lucide-react";
import GlobalContext from "../context/GlobalContext";

const HolidayPopOver = () => {
	const { setShowHolidayPopOver } = useContext(GlobalContext);
	return (
		<div className="h-screen w-full fixed top-0 left-0 flex justify-center item-center">
			<div className="bg-white rounded-lg shadow-2xl w-1/4">
				<header className="flex gap-4 justify-end items-center px-4 py-2">
					<button onClick={() => setShowHolidayPopOver(false)}>
						<Trash2 className="w-5" />
					</button>
					<button onClick={() => setShowHolidayPopOver(false)}>
						<X className="w-6" />
					</button>
				</header>
				<div className="grid grid-cols-1/4 items-end gap-y-7">
					<img></img>
					<div>
						<h2>Title</h2>
						<p>Date</p>
					</div>
					<div>
						<p>Public Holiday</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HolidayPopOver;

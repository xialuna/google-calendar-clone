import React from "react";
import logo from "../assets/logo.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarHeader() {
	return (
		<header className="flex items-center px-4 py-2 gap-4">
			<img src={logo} alt="Google Calendar Logo" className="w-11 h-11"></img>
			<h1 className="text-2xl font-thin text-graySecondary">Calendar</h1>
			<button className="border rounded-full py-2 px-7 border-graySecondary">
				Today
			</button>
			<div className="flex gap-3 text-graySecondary">
				<button>
					<ChevronLeft className="w-6 h-6" />
				</button>

				<button>
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
		</header>
	);
}

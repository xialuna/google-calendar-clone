import React from "react";
import MiniCalendar from "./MiniCalendar";
import CreateEventBtn from "./CreateEventBtn";

export default function Sidebar() {
	return (
		<aside className="p-5 w-64 ">
			<CreateEventBtn />
			<MiniCalendar />
		</aside>
	);
}

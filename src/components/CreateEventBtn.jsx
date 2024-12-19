import React from "react";
import { Plus } from "lucide-react";

const CreateEventBtn = () => {
	return (
		<button className="flex flex-column gap-2 py-2 px-4 items-center bg-white shadow shadow-gray-400 rounded-full  hover:bg-gray-200 mb-6">
			<Plus className="w-5" />
			<p className="x"> Create</p>
		</button>
	);
};

export default CreateEventBtn;

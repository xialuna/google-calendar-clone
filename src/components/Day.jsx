/* eslint-disable react/prop-types */
import React from "react";

export default function Day({ day }) {
	return <div>{day.format()}</div>;
}

import dayjs from "dayjs";
//dayjs().month() is the default value if there is nothing passed
export function getMonth(month = dayjs().month()) {
	month = Math.floor(month);
	const year = dayjs().year(); //represent current year
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const daysMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});
	return daysMatrix;
}

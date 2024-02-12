function formatToDDMMYYYY(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

function getDayAndFormattedDate(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const formattedDate = formatToDDMMYYYY(date);

  return { dayOfWeek, formattedDate };
}

function getLastSixDays(today) {
  const lastSixDays = [];

  for (let i = 0; i <= 6; i++) {
    const previousDay = new Date(today);
    previousDay.setDate(today.getDate() - i);

    const { dayOfWeek, formattedDate } = getDayAndFormattedDate(previousDay);
    lastSixDays.push({ dayOfWeek, 
        formattedDate, 
        done: -1});
  }

  return lastSixDays.reverse(); // Reverse the array to get the days in descending order
}

// Example usage:
const today = new Date(); // Assuming you have today's date
export const lastSixDays = getLastSixDays(today);

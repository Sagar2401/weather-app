export function formatDate(inputDateString) {
  // Parse the input date string
  const parsedDate = new Date(inputDateString);

  // Format the parsed date to "MMM DD, YYYY" format
  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return formattedDate;
}

export function filterHourlyData(hourlyData) {
  // Get the current time
  const currentTime = new Date();

  // Extract the current hour
  const currentHour = currentTime.getHours();
  // Filter the data for the current hour and the next 5 hours
  const filteredData = hourlyData?.filter((entry) => {
    const entryHour = new Date(entry.time).getHours();
    return entryHour >= currentHour && entryHour < currentHour + 6;
  });

  return filteredData?.map((entry) => {
    return {
      time: entry.time.split(" ")[1],
      temp: entry.temp_c,
      icon: entry.condition.icon,
    };
  });
}


export function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

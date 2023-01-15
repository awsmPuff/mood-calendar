import React from "react";

export default function Calendar(props) {
  const currentYear = new Date().getFullYear();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "November",
    "December",
  ];
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  const getAllDays = (year) => {
    const firstDay = new Date(`Jan 1 ${year}`);
    const lastDay = new Date(`Dec 31 ${year}`);
    const days = [firstDay];
    let lastDayInArr = firstDay;
    while (lastDayInArr.getTime() !== lastDay.getTime()) {
      days.push(addDays(lastDayInArr, 1));
      lastDayInArr = days[days.length - 1];
    }
    return days;
  };
  const dates = getAllDays(currentYear);

  const datesOfMonth = (month) => {
    const datesOfMon = dates.filter((date) => date.getMonth() == month);
    const daysofMon = datesOfMon.map((date) => date.getDate());
    return daysofMon;
  };

  const getFirstDay = (month) => {
    const first = new Date(`${month} 1 ${currentYear}`).getDay();
    return first;
  };

  const convert = (num) => {
    var arr = [];
    for (let i = 0; i <= num - 1; i++) {
      arr.push(1);
    }
    return arr;
  };

  return (
    <div className="Calendar flex-r">
      {months.map((month, index) => (
        <div className={`month month-${index} flex-c`} key={index}>
          <h3>{month}</h3>
          <div className="weekdays">
            {weekDays.map((day, index1) => (
              <div className="weekday flex-r" key={`${index}${index1}`}>
                {day}
              </div>
            ))}
          </div>
          <div className="days">
            {convert(getFirstDay(month)).map((ind) => (
              <div key={ind}></div>
            ))}
            {datesOfMonth(index).map((date, i) => (
              <div
                className={`day flex-r`}
                key={`${index}${i}`}
                onClick={props.handleClick}
                style={{ backgroundColor: `${props.color}` }}
              >
                {date}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import moment from "moment";
import React from "react";

interface CalendarItemProps {
  day: number;
}

const CalendarItem = (dayItem: CalendarItemProps) => {
  const { day } = dayItem;
  const isToday = moment(new Date()).date() === day ? true : false;

  return (
    <div
      className={` ${
        isToday ? "bg-green-100" : day === 0 ? "bg-gray-300" : "bg-gray-50"
      } p-2 rounded-md shadow min-h-[110px] cursor-pointer`}
    >
      {day === 0 ? "" : day}
    </div>
  );
};

export default CalendarItem;

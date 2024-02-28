import { eachDayOfInterval, endOfMonth, format, getDay, isToday, startOfMonth } from 'date-fns';
import React from 'react'

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export default function Calendar() {
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    });

    const startDayIndex = getDay(firstDayOfMonth);
  return (
    <div className='calendar-container'>
        {WEEKDAYS.map((day) => (
            <h2 key={day}>{day}</h2>
        ))}

        {Array.from({length: startDayIndex}).map((_, index) => (
            <div key={`empty-${index}`} className='border border-black rounded-md text-center' />
        ))}

        {daysInMonth.map((day, index) => (
            <div key={index} className={`border border-black rounded-md text-center p-2 md:p-6 ${isToday(day) ? "bg-black text-white font-bold" : ""}`}>{format(day, "d")}</div>
        ))}
    </div>
  )
}

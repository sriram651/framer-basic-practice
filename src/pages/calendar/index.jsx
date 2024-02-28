import Calendar from '@/components/Calendar/Calendar';
import { format } from 'date-fns';
import React from 'react'

export default function CalendarPage() {
    const currentDate = new Date();
  return (
    <div className='w-full mx-auto p-6 flex flex-col justify-start items-center gap-4'>
        <h1 className='text-center font-bold text-3xl'>{format(currentDate, "MMMM yyyy")}</h1>
        <Calendar />
    </div>
  )
}

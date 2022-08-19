import React from 'react'
import { ScheduleComponent,ViewsDirective,ViewDirective,Day,Week,Month,WorkWeek,Agenda,Inject,
Resize,DragAndDrop } from '@syncfusion/ej2-react-schedule'

import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { scheduleData } from '../data/dummy'
import { Header } from '../Components'

const Calendar = () => {
  return (
    <div className='m-2 md:md-10 mt-24 p-2
    md:p-10 bg-white rounded-3xl'>
      <Header
      title="Calender"
      category="App" />
      <ScheduleComponent
      height="650px"
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2021,0,11)}>
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,DragAndDrop,Resize]}/>
      </ScheduleComponent>
      </div>
  )
}

export default Calendar
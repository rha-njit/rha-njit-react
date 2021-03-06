import React from "react";
import moment from "moment";
import { Calendar, momentLocalizer} from "react-big-calendar";
// import 'react-calendar/dist/Calendar.css';

import "./officeHoursStyle.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function Hours() {
  return (
    <div className="calendar-outside">
      <h1>Office Hours</h1>
      <h1>Residence Hall Association</h1>
  
      <h3>These are the office hours of Executive Board of RHA.</h3> 
      <h3>Come stop by to ask questions about Residence Hall Association</h3>
        
      <div className="calendar">
        <Calendar
          localizer={localizer}
          events={[ 'Feb:14 Valentines Day', 
          ]}
          Day = 'Day'
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />

      </div>
      <footer> <h4>NJIT RHA &copy; 2021. Made by RHA Technology Officer</h4></footer>
    </div>
  );
}
export default Hours;

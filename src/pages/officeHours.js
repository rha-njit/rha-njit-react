import React from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

import "./officeHoursStyle.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function Hours() {
  return (
    <div className="calendar-outside">
      <h1>Office Hours</h1>
      <h1>Residence Hall Association</h1>
      <h1>These are the office hours of Executive Board of RHA.<br /> 
        Come stop by to ask questions about Residence Hall Association.
        </h1>
      <div className="calendar">
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
      <footer> <h4>NJIT RHA &copy; 2020. Made by RHA Technology Officer</h4></footer>
    </div>
  );
}
export default Hours;

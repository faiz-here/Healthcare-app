import React from 'react';
import './CalendarView.css';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = Array.from({ length: 31 }, (_, i) => i + 1); 
const appointmentDays = {
  4: ['09:00'],
  8: ['11:00'],
  14: ['13:00'],
  20: ['15:00'],
};

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>October 2021</h3>
      </div>

      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="calendar-day">
            {day}
          </div>
        ))}

        {dates.map((date) => (
          <div key={date} className="calendar-date">
            <span>{date}</span>
            {appointmentDays[date] &&
              appointmentDays[date].map((time, idx) => (
                <div key={idx} className="appointment-time">
                  {time}
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        <div className="appointment-card dentist">
          <h4>Dentist</h4>
          <p>10:00 AM - 11:00 AM</p>
        </div>
        <div className="appointment-card physio">
          <h4>Physiotherapy</h4>
          <p>02:00 PM - 03:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;

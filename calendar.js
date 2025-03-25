import React from 'react';

function CalendarPage() {
  return (
    <div>
      <h1>📅 Full Calendar</h1>
      {/* Replace with your actual calendar component */}
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=en.philippines%23holiday%40group.v.calendar.google.com" 
        style={{ border: 0, width: '100%', height: '600px' }} 
        frameBorder="0" 
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default CalendarPage;

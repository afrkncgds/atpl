import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = () => {
    return (
        <div className="calendar-container">
            {/* Takvim Bölümü */}
            <div className="calendar-section">
                <FullCalendar
                    initialView="dayGridMonth"
                    plugins={[dayGridPlugin]}

                    events={[
                        { title: 'Pre-Pilot Meeting Party', date: '2024-06-15', color: '#0000ff' },
                        { title: 'First Flight Day', date: '2024-06-15', color: '#ff0000' },
                        { title: 'Dummy Exam Day', date: '2024-06-15', color: '#00ff00' },

                    ]}
                    headerToolbar={{
                        left: 'prev,next',
                        center: 'title',
                        right: '',
                    }}
                    height="auto"
                />
            </div>


        </div>
    );

};

export default CalendarComponent;

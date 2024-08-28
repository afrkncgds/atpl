import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = () => {
    return (
        <div className="calendar-container">
            {/* Takvim Bölümü */}
            <div className="calendar-section">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={[
                        { title: 'First Flight Day', date: '2024-06-15', color: '#ff0000' },
                        { title: 'Dummy Exam Day', date: '2024-06-15', color: '#00ff00' },
                        { title: 'Pre-Pilot Meeting Party', date: '2024-06-15', color: '#0000ff' },
                    ]}
                    headerToolbar={{
                        left: 'prev,next',
                        center: 'title',
                        right: '',
                    }}
                    height="auto"
                />
            </div>

            {/* Etkinlik Listesi Bölümü */}
            <div className="event-list-section">
                <h3>Event List</h3>
                <ul>
                    <li>Pre-Pilot Meeting Party - 15 June 2024</li>
                    <li>First Flight Day - 15 June 2024</li>
                    <li>Dummy Exam Day - 15 June 2024</li>
                </ul>
            </div>
        </div>
    );

};

export default CalendarComponent;

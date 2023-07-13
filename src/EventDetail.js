import React from "react";
import { useParams } from "react-router-dom";
import './events.css';


const EventDetail = ({ events }) => {
    const { id } = useParams();

    const event = events.find((event) => event._id === id);

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="event-list">
            <h1 style={{color:"#fff"}}>Event Detail</h1>
            <div className="event-item">
                <span className="event-value">{event.value}</span> <br />
                <span className="event-date">Start Date: {event.startDate}</span> <br />
                <span className="event-date">End Date: {event.endDate}</span>
            </div>
        </div>
    );
};

export default EventDetail;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './events.css';

const Events = ({ events, deleteItem, editItem}) => {

    const [visibleTasks, setVisibleTasks] = useState(10);
  const [isLoading, setIsLoading] = useState(false);



    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            deleteItem(id);
        }
    };

    const handleEdit = (id) => {
        const editedEvent = prompt('Edit the event:');
        if (editedEvent !== null && editedEvent.trim() !== '') {
            editItem(id,editedEvent );
        }
    };



    const loadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
          setVisibleTasks(visibleTasks + 10);
          setIsLoading(false);
        }, 1000);
      };
    
      const renderEvents = events.slice(0, visibleTasks).map((event) => (
        <div key={event._id} className="event-item" >
          <span className="event-value">{event.value}</span> <br/>
          <span className="event-date">Start Date: {event.startDate}</span> <br/>
          <span className="event-date">End Date: {event.endDate}</span><br/>
          <div className="event-buttons">
          <button className="event-button" onClick={() => handleDelete(event._id)}>Delete</button>
          <button className="event-button" onClick={() => handleEdit(event._id)}>Edit</button>
          <button className="event-button"><Link className="event-link" to={`/events/${event._id}`}>View</Link></button>
          </div>
        </div>
      ));





    return (
    

    <div>
      <h1 style={{color: "#fff"}}>Events</h1>
      <div className="event-list">{renderEvents}</div>
      {visibleTasks < events.length && (
        <button className="load-more-button" style={{marginLeft: 215, borderRadius: 5, width: 105, height: 40}} onClick={loadMore} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );



};

export default Events;
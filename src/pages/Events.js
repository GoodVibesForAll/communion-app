import React, { useState, useEffect } from 'react';
import Hero from "../components/Hero";
import AddEvent from "../components/AddEvent";
import { Link } from 'react-router-dom';

const Events = () => {
  // Load events from local storage or use default values
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [
      { title: 'Community Prayer', date: '2025-03-10', category: 'Religious', location: 'City Park' },
      { title: 'Charity Drive', date: '2025-03-15', category: 'Charity', location: 'Downtown Center' }
    ];
  });

  const [filter, setFilter] = useState('');

  // Save events to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addNewEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <header>
        <h1>Communion App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/events">Events</Link> | <Link to="https://communionhub.org/discover-communities">About</Link>
        </nav>
      </header>
      <section>
        <Hero />
      </section>

      <h1>Event Listings</h1>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <ul>
        {events
          .filter(event => !filter || event.category === filter)
          .map((event, index) => (
            <li key={index}>
              <h3>{event.title}</h3>
              <p>{event.date} - {event.location}</p>
              <p>Category: {event.category}</p>
            </li>
          ))}
      </ul>

      <AddEvent onAdd={addNewEvent} />     
    </div>
  );
};

export default Events;

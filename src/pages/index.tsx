import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Event as EventsModel } from '../models';
import Event from '../components/event';

export default function EventsPage({ signOut }) {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    debugger
    const _events: any = await DataStore.query(EventsModel);
    debugger
    setEvents(_events);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <main className="sgnm events-wrapper">
      <section className="sgnm-upcoming-events sgnm-container">
        <h1 className="sgnm-center">Upcoming Events</h1>

        <hr />

        <div className="sgnm-events-container">
          {events.map((event) => (
            <Event {...event} key={event.id} />
          ))}
        </div>
      </section>
    </main>
  )
}

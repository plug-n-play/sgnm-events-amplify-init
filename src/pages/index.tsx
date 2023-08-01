import Event from '../components/event';

const events = [
  {
    country: "UK",
    city: "Southall",
    venue: "Gurdwara Sri Guru Singh Sabha",
    address1: "Guru Nanak Rd",
    address2: "Southall UB2 4NP",
    startDate: "31st July",
    endDate: "6th Aug",
    phone: "07967005629, 07813674720",
    time: "4 - 6 am",
    seq: "1",
    id: "1"
  },
  {
    country: "UK",
    city: "Slough",
    venue: "Gurdwara Sri Guru Singh Sabha",
    address1: "Sheehy Way",
    address2: "Berkshire, Slough SL2 5SS",
    startDate: "7th",
    endDate: "13th Aug",
    phone: "07967005629, 07813674720",
    time: "4 - 6 am",
    seq: "2",
    id: "2"
  },
  {
    country: "UK",
    city: "Walsall",
    venue: "Guru Nanak Gurdwara Sahib",
    address1: "162 W Bromwich St",
    address2: "Walsall WS1 4DE",
    startDate: "14th",
    endDate: "20th Aug",
    phone: "07967005629, 07813674720",
    time: "4 - 6 am",
    seq: "3",
    id: "3"
  },
  {
    country: "UK",
    city: "Smethwick",
    venue: "Guru Nanak Gurdwara Sahib",
    address1: "130 High St",
    address2: "Smethwick B66 3AP",
    startDate: "21st",
    endDate: "27th Aug",
    phone: "07967005629, 07813674720",
    time: "4 - 6 am",
    seq: "4",
    id: "4"
  }
];

export default function EventsPage({ signOut }) {

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

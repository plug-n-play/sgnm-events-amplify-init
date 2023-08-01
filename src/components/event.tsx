import styles from '../styles/Home.module.css';

export default function Event({
  id,
  country,
  city,
  venue,
  address1,
  address2,
  startDate,
  endDate,
  phone,
  time
}) {
  return (
    <div className="sgnm-event">
      <div className="sgnm-event-section-left">
        <img src="https://srigurunanakmission.org/images/events/city/sangat.jpg" alt="free basic camp" className="sgnm-event-img" />
      </div>
      <div className="sgnm-event-section-right">
        <div className="sgnm-event-section-location">{city}, {country}</div>
        <div>{startDate} - {endDate}, 2023</div>
        <br />
        <div>Venue:</div>
        <div>{venue},</div>
        <div>{address1},</div>
        <div>{address2},</div>
        <br />
        <div>Time: {time}</div>
        <p>No Registration Fee. Camp is absolutely free! </p>
        <div>
          <a href="https://srigurunanakmission.org/register.html" target="_blank">Register</a></div>
          <span>or Call {phone}</span>
          <a href="https://srigurunanakmission.org/register.html" target="_blank" className="sgnm-button sgnm-event-button">Register</a>
        </div>
        <div className="sgnm-cb"></div>
      </div>
  );
};

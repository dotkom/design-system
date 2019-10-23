import Event from './event';
import moment from 'moment';


const Day = ({ events, eventClickHandler, active }) => {
  const DAY = moment(events[0].start_time).format('dddd DD. MMMM');

  return (
    <div className="cal-day">
      <h2 className="cal-day--string">{DAY}</h2>
      { events.map((e, id) => {
        return <Event eventClickHandler={eventClickHandler} active={active} title={e.title} start_time={e.start_time} end_time={e.end_time} content={e.content} key={id} index={e.index} />
      })}
      <br />
    </div>
  );
};

export default Day;

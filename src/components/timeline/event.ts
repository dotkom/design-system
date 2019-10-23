import Remarkable from 'remarkable';
import moment from 'moment';

const markdown = (text) => {
  var md = new Remarkable();
  return {
    __html: md.render(text)
  };
};


const Event = ({ title, start_time, end_time, content, eventClickHandler, index, active }) => {
  const classes = (index === active) ? 'cal-event-content-active' : '';

  return (
    <div className="cal-event" id={`event-${index}`}>
      <div className="cal-event-indicator"></div>

      <div onClick={ () => { eventClickHandler(index); } } className="cal-event-header">
        <p className="cal-event-date">{moment(start_time).format('HH:mm')}</p>
        <h3 className="cal-event-title">{title}</h3>
      </div>

      <p className={`cal-event-content ${ classes }`} dangerouslySetInnerHTML={markdown(content)}/>
      <p className={`cal-event-content ${ classes } cal-event-endtime`}>Antatt sluttidspunkt: {moment(end_time).format('HH:mm')}</p>
    </div>
  );
};

export default Event;

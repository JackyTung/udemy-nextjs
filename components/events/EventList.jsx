import EventItem from './EventItem'

import classes from './event-list.module.css'

const EventList = ({ items = [] }) => (
  <ul className={classes.list}>
    {items.map(event => (
      <EventItem
        key={event.id}
        id={event.id}
        title={event.title}
        image={event.image}
        date={event.date}
        location={event.location}
      />
    ))}
  </ul>
)

export default EventList

import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'
import { getAllEvents } from '../../dummy-data'

export default function Events() {
  const events = getAllEvents()
  return (
    <div>
      <EventSearch />
      <EventList items={events} />
    </div>
  )
}

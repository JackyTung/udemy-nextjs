import { useRouter } from 'next/router'

import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'
import { getAllEvents } from '../../dummy-data'

export default function Events() {
  const router = useRouter()
  const events = getAllEvents()

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    console.log('hi')
    router.push(fullPath)
  }

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  )
}

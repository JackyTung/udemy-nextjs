import { Fragment } from 'react'
import { useRouter } from 'next/router'

import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import { getEventById } from '../../dummy-data'

const EventDetailPage = () => {
  const router = useRouter()
  const { eventId } = router.query
  const event = getEventById(eventId)
  if (!event) {
    return <p>No event from </p>
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage

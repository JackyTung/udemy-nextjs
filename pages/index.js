import {getFeaturedEvents} from '../dummy-data'

import EventList from '../components/events/EventList'

export default function Home() {
  const featureEvents = getFeaturedEvents()
  return (
   <div>
     <EventList items={featureEvents} />
   </div>
  )
}

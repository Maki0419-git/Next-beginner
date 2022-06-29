import React, { useState } from 'react'
import { useRouter } from 'next/router'

export const getServerSideProps = async (context) => {
    console.log('fetch events')
    const { category } = context.query
    const queryString = category ? `category=${category}` : ``
    const response = await fetch(`http://localhost:5000/events?${queryString}`)
    const data = await response.json()
    return {
        props: {
            data
        }
    }
}


const Events = ({ data }) => {
    const router = useRouter()
    const [events, setEvents] = useState(data)
    const filter = async (category) => {
        const response = await fetch(`http://localhost:5000/events?category=${category}`)
        const data = await response.json()
        setEvents(data)
        router.push(`/event?category=${category}`, undefined, { shallow: true })
    }
    return (
        <div>
            <h1>Events</h1>
            <button onClick={() => filter('sports')}>Sports</button>
            <button onClick={() => filter('food')}>Food</button>
            <button onClick={() => filter('technology')}>Technology</button>
            {
                events.map((event) => {
                    return (
                        <div key={event.id}>
                            <h2>{event.id} {event.title} {event.date} | {event.category} </h2>
                            <p>{event.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Events

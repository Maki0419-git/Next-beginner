import React, { useEffect, useState } from 'react'


const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboard, setDashboard] = useState(null);
    useEffect(() => {
        async function getData() {
            const response = await fetch(`http://localhost:5000/dashboard`)
            const data = await response.json()
            setDashboard(data)
            setIsLoading(false)
        }
        getData()
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Post - {dashboard.posts}</h2>
            <h2>Like - {dashboard.likes}</h2>
            <h2>Follower - {dashboard.followers}</h2>
            <h2>Following - {dashboard.following}</h2>
        </div>
    )
}

export default Dashboard

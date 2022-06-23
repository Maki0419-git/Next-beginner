import React from 'react'

// we need to set possible values of yoshino/[id]
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(user => {
        return { params: { id: user.id.toString() } }
    })
    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    console.log('fetch users')
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const data = await res.json();
    return {
        props: {
            users: data
        },
        revalidate: 60,
    }
}

const Details = ({ users }) => {
    return (
        <div>
            <h1>Details Page</h1>
            <h2>{users.name}</h2>
            <p>{users.email}</p>
            <p>{users.website}</p>
            <p>Fugiat reprehenderit duis fugiat Lorem ea do enim reprehenderit. Sit culpa mollit voluptate eu fugiat. Sit aliqua do nisi deserunt aliquip duis reprehenderit amet duis consectetur laborum proident commodo dolore. Ut excepteur et labore tempor quis aliquip magna.</p>
        </div>
    )
}

export default Details

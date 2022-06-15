export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    return {
        props: {
            users: data
        }
    }
}

const Yoshino = ({ users }) => {
    return (
        <div>
            <h1>All users</h1>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Yoshino

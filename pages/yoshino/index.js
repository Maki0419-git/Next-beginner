import styles from "../../styles/Users.module.css"
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
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
                    <div key={user.id} className={styles.single}>
                        <Link href={`yoshino/${user.id}`}>
                            <a>
                                <h3>{user.name}</h3>
                            </a>
                        </Link>

                    </div>
                ))
            }
        </div>
    )
}

export default Yoshino

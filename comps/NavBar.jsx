import Link from "next/link"

const NavBar = () => {
    return (
        <nav>
            <div>
                <h1>In magna cupidatat exercitation anim.</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/yoshino"><a>Yoshino List</a></Link>
        </nav>
    )
}

export default NavBar

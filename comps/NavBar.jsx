import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                {/* automatically lazy loading */}
                <Image src="/logo.png" width={128} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/yoshino"><a>Yoshino List</a></Link>
        </nav>
    )
}

export default NavBar

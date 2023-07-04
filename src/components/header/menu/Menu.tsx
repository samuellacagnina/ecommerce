import Link from "next/link"

function Menu() {
    return(
        <div>
            <ul className="flex space-x-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Home</Link></li>
            </ul>
        </div>
    )
}

export default Menu
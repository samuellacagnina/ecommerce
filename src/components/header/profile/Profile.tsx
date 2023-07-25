import Link from "next/link"
import { useState } from "react"
import ProfileBox from "../../Header/Profile/ProfileBox";

function Profile() {
    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(true);
    }

    const handleLeaveHover = () => {
        setHover(false);
    }
    return(
        <div className="relative" onMouseEnter={handleHover} onMouseLeave={handleLeaveHover}>
            <Link href="/">
                <img className="w-12 rounded-full" src="https://cdn.dribbble.com/assets/default_avatars/avatar-5-2e44c34bf198d3364e3a2647e6add7c33bbc29dc60153cec761468427d0e435b.png" alt="" />
            </Link>
            {hover && (
                <ProfileBox/>
            )}
        </div>
    )
}

export default Profile
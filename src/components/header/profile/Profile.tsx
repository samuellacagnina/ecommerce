import Link from "next/link"

function Profile() {
    return(
        <div>
            <Link href="/">
                <img className="w-12 rounded-full" src="https://cdn.dribbble.com/assets/default_avatars/avatar-5-2e44c34bf198d3364e3a2647e6add7c33bbc29dc60153cec761468427d0e435b.png" alt="" />
            </Link>
        </div>
    )
}

export default Profile
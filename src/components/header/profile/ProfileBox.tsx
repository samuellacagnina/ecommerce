import Link from "next/link"
import { useAuthContext } from "../../../context/AuthContext"

const ProfileBox = () => {

    const{ userName } = useAuthContext()

    return(
        <div className="absolute top-13 right-1 z-10 w-80 h-70 border border-black flex flex-col py-8 bg-[#fff]">
            <div className="flex flex-col justify-center items-center">
            <Link href="/">
                <img className="w-12 rounded-full mb-2" src="https://cdn.dribbble.com/assets/default_avatars/avatar-5-2e44c34bf198d3364e3a2647e6add7c33bbc29dc60153cec761468427d0e435b.png" alt="" />
            </Link>
            <h2>Hi { userName }!</h2> 
            </div>
            <ul className="pl-8 flex flex-col gap-2 mt-1">
                <li><Link href="/">work preferences</Link></li>
                <li><Link href="/">settings</Link></li>
                <hr />
                <li><Link href="/">sign out</Link></li>
            </ul>
        </div>
    )
}

export default ProfileBox
import { MouseEvent } from "react"

export default function ProfilePicture() {
    const imageUrl = "./src/assets/profile.jpg"
    const handleClick = (e: MouseEvent<HTMLImageElement>) => (e.currentTarget.style.display = "none")

    return (
        <>
            <img src={imageUrl} onClick={handleClick}></img>
        </>
    )
}

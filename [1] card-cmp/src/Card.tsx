import profilePic from "./assets/profile.jpg"

export default function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">This is me learning React</p>
        </div>
    )
}

import { useEffect, useState } from "react"

export default function DigitalClock() {
    const [time, setTime] = useState(new Date())

    // On component mount only
    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000)

        return () => clearInterval(intervalId)
    }, [])

    function formatTime() {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(n: number) {
        return n < 10 ? `0${n}` : n.toString()
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

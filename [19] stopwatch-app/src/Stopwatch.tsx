import { useEffect, useRef, useState } from "react"

export default function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef<number>()
    const startTimeRef = useRef(0)

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => clearInterval(intervalIdRef.current)
    }, [isRunning])

    const start = () => {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }

    const stop = () => setIsRunning(false)

    const reset = () => {
        setElapsedTime(0)
        setIsRunning(false)
    }

    const formatTime = () => {
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
        const seconds = Math.floor((elapsedTime / 1000) % 60)
        const millis = Math.floor((elapsedTime % 1000) / 10)

        return `${padStart(minutes)}:${padStart(seconds)}:${padStart(millis)}`
    }

    const padStart = (n: number) => String(n).padStart(2, "0")

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">
                    Start
                </button>
                <button onClick={stop} className="stop-button">
                    Stop
                </button>
                <button onClick={reset} className="reset-button">
                    Reset
                </button>
            </div>
        </div>
    )
}

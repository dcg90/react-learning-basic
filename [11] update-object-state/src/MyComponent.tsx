import { ChangeEvent, useState } from "react"

export type Car = {
    year: number
    make: string
    model: string
}

export default function MyComponent() {
    const [car, setCar] = useState<Car>({ year: 2024, make: "Ford", model: "Mustang" })

    const yearChange = (e: ChangeEvent<HTMLInputElement>) => setCar(c => ({ ...c, year: +e.target.value }))
    const makeChange = (e: ChangeEvent<HTMLInputElement>) => setCar(c => ({ ...c, make: e.target.value }))
    const modelChange = (e: ChangeEvent<HTMLInputElement>) => setCar(c => ({ ...c, model: e.target.value }))

    return (
        <div>
            <p>
                Your favorite car is: {car.year} {car.make} {car.model}
            </p>
            <input type="number" value={car.year} onChange={yearChange} /> <br />
            <input type="text" value={car.make} onChange={makeChange} /> <br />
            <input type="text" value={car.model} onChange={modelChange} /> <br />
        </div>
    )
}

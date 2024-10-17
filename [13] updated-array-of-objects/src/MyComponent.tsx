import { ChangeEvent, useState } from "react"

export type Car = { year: number; model: string; make: string }

export default function MyComponent() {
    const [cars, setCars] = useState<Car[]>([])
    const [year, setCarYear] = useState(new Date().getFullYear())
    const [make, setCarMake] = useState("")
    const [model, setCarModel] = useState("")

    const addCar = () => {
        const newCar = { year, model, make }
        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    const deleteCar = (index: number) => setCars(c => c.filter((_, i) => index !== i))

    const yearChange = (e: ChangeEvent<HTMLInputElement>) => setCarYear(+e.target.value)
    const makeChange = (e: ChangeEvent<HTMLInputElement>) => setCarMake(e.target.value)
    const modelChange = (e: ChangeEvent<HTMLInputElement>) => setCarModel(e.target.value)

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((c, i) => (
                    <li key={i} onClick={() => deleteCar(i)}>
                        {c.year} {c.make} {c.model}
                    </li>
                ))}
            </ul>
            <input type="number" value={year} onChange={yearChange} /> <br />
            <input type="text" value={make} onChange={makeChange} /> <br />
            <input type="text" value={model} onChange={modelChange} /> <br />
            <button onClick={addCar}>Add Car</button>
        </div>
    )
}

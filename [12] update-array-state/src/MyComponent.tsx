import { useState } from "react"

export default function MyComponent() {
    const [food, setFoods] = useState(["Apple", "Orange", "Banana"])

    const addFood = () => {
        const foodInput = document.getElementById("foodInput") as HTMLInputElement

        const newFood = foodInput.value
        setFoods(f => [...f, newFood])

        foodInput.value = ""
    }

    const deleteFood = (foodIndex: number) => setFoods(f => f.filter((_, i) => foodIndex !== i))

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((f, i) => (
                    <li key={i} onClick={() => deleteFood(i)}>
                        {f}
                    </li>
                ))}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={addFood}>Add Food</button>
        </div>
    )
}

import { ChangeEvent, useState } from "react"

export default function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF")

    const colorChange = (e: ChangeEvent<HTMLInputElement>) => setColor(e.currentTarget.value)

    return (
        <>
            <div className="color-picker-container">
                <h1>Color Picker</h1>

                <div className="color-display" style={{ backgroundColor: color }}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a color:</label>
                <input type="color" value={color} onChange={colorChange}></input>
            </div>
        </>
    )
}

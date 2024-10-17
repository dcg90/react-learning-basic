// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a functions every time the value of the input changes

import { ChangeEvent, useState } from "react"

function App() {
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("Visa")
    const [shipping, setShipping] = useState("Delivery")

    const nameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)
    const quatityChange = (e: ChangeEvent<HTMLInputElement>) => setQuantity(+e.currentTarget.value)
    const commentChange = (e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.currentTarget.value)
    const paymentChange = (e: ChangeEvent<HTMLSelectElement>) => setPayment(e.currentTarget.value)
    const shippingChange = (e: ChangeEvent<HTMLInputElement>) => setShipping(e.currentTarget.value)

    return (
        <>
            <div>
                <input type="text" value={name} onChange={nameChange} />
                <p>Name: {name}</p>

                <input type="number" value={quantity} onChange={quatityChange} />
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={commentChange} placeholder="Enter delivery instructions"></textarea>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={paymentChange}>
                    <option value=""></option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={shippingChange} />
                    Pick Up
                </label>

                <label>
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={shippingChange} />
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>
        </>
    )
}

export default App

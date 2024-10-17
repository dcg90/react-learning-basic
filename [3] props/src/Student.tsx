/** I GUESS PROP TYPES IS NOT THAT NEEDED WHEN USING TYPESCRIPT TYPE ANNOTATIONS */

// import PropTypes from "prop-types"

export type StudentData = {
    name: string
    age: number
    isStudent: boolean
}

export default function Student({ name, age, isStudent }: StudentData) {
    const _isStudent = isStudent ? "Yes" : "No"
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {_isStudent}</p>
        </div>
    )
}

// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool
// }

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

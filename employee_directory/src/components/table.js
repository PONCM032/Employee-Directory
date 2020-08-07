import React from "react";

function table({name, image, dob, gender, number, email}) {
    return (
        <tr>
            <td>
                <img src={image} alt={`${name} photo`}/>
            </td>
            <td>{name}</td>
            <td>{dob}</td>
            <td>{gender}</td>
            <td>{number}</td>
            <td>{email}</td>
        </tr>
    )
}

export default table;
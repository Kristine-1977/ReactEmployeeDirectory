import React from 'react';

function tablehead(props) {

    return (
        <thead className="bg-dark text-white">
            <tr>
                <th scope="col">Image</th>
                <th scope="col"><button onClick={props.handleSort} className="btn btn-dark">Name &#x02195;</button></th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Birthday</th>
            </tr>
        </thead>
    )
}
export default tablehead;
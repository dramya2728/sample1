import React from 'react'

export default function PersonList({person}) {
    
    return (
        <div>
            <h1>Iam {person.name} my age is {person.age}</h1>
        </div>
    );
}

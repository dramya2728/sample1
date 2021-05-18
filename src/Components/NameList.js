import React from 'react'
import PersonList from './PersonList'

export default function NameList() {
    const persons=[
        {
          id:1,
          name:"ramya",
          age:25  
        },
        {
            id:2,
            name:"krishna",
            age:20
        }
    ]
   
    //const names=["ramya","krishna","roy"]
   // const nameslist=names.map(name => <h2>{name}</h2>)
   const personslist=persons.map(person =><PersonList person={person} />)
    return (
        <div> {personslist}</div>
    );
}

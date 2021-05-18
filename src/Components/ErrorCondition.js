import React from 'react'

export default function ErrorCondition({name}) {
    if(name==='joker') {
      throw new Error('not a name')

    }
    return (
        <div>
          {name}  
        </div>
    )
}

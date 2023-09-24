import React, {useState} from 'react'
import "./Box.css"

const Box = ({key, color, isChanged}) => {
    const changed = isChanged ? 'Changed' : null
    console.log(isChanged)

    return (
        <div key={key} className="Box" style={{backgroundColor:color}}>
        {changed}
        </div>
    )
}

export default Box

import React,{useState} from 'react'

export default function AndhraBank(props) {
    let [name,setName]=useState("Amrutha")
    return (
        <div>
            {/*<h1>AndhraBank account for {props.info.firstName} {props.info.lastName}</h1>*/}
            <h1 onMouseEnter={()=>{setName("Amrutha Medisetti")}}>{name}</h1>
        </div>
    )
}


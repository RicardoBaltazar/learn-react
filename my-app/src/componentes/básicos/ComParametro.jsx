import React from 'react'

export default function ComParametro(props) {
    console.log(props)
    const sub = props.subtitulo
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{sub}</h3>
        </div>
    )
}
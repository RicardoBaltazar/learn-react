import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './componentes/básicos/Primeiro'
import ComParametro from './componentes/básicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro/>
        <ComParametro titulo="primeiro titulo" subtitulo="Segundo titulo"/>
    </div>
, document.getElementById('root')
)
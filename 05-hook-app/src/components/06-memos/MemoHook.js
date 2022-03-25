import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(true);



    const memoProcesoPesasdo = useMemo(() => procesoPesado(counter), [ counter ])

  return (
    <div>
        <h3>Memo Hook <small>{ counter }</small></h3>
        <hr />

        <p>{ memoProcesoPesasdo }</p>

        <button
            className='btn btn-primary'
            onClick={ increment } >
                +1
        </button>

        <button
            className='btn btn-outline-primary mx-3'
            onClick={() => setShow( !show )}    
        >
            Show/Hide { JSON.stringify( show )}
        </button>
    </div>
  )
}

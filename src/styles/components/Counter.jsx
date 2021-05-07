import {useState} from 'react'

export function Counter(){
    const [counter, setcounter] = useState(0);

    function increment(){
        setcounter(counter + 1)
    }

    function diminuir(){
        setcounter(counter - 1)
    }



    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={diminuir}>Diminuir</button>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}
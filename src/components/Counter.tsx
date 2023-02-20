import { useState } from 'react'
import classes from "./Counter.module.scss"

export const Counter = () => {

    const [count, setCount] = useState(0)

    const incremnt = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 className={classes.btn}>{count}</h1>
            <button onClick={incremnt}>increment</button>
        </div>
    )
}

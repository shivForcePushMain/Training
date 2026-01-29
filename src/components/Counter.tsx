import { useState } from "react";

export default function Counter(){
    const [count , setCount] = useState(0)

    const handleCount=()=>{
        setCount((prev)=> prev+1)
    }

    return <div>
        <div>
            <button onClick={handleCount}>Click count</button>
        </div>
        <div>
            {count}
        </div>
    </div>
}
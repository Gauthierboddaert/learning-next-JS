'use client'

import { useState } from "react";

const Admin = () => {

    const [count, setCount] = useState<number>(0);
    const [display, setDisplay] = useState<string>('flex');

    const changeDisplayValue = () => {
        'hidden' === display ? setDisplay('flex') : setDisplay('hidden');
    }

    return (
        <div>
            <h1 className={`${display}`}>count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click here</button>
            <button onClick={changeDisplayValue}>display count</button>
        </div>
    );


}

export default Admin;
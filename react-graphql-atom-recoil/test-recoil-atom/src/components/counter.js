import React, {useEffect} from 'react'
import {useRecoilState} from 'recoil'
import {counter} from "./states";

export default function Counter(props) {
    const [counterText, setCounterText] = useRecoilState(counter)
    useEffect(()=>{
        setCounterText('hello counter state object')
    },[])
    return <div>
        <h1>Counter Object states via recoil statement management</h1>
        <h3>counterValues: {counterText}</h3>
    </div>
}

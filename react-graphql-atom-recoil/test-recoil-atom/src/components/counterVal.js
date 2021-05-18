import React from 'react'
import {useRecoilValue} from 'recoil'
import {counter} from "./states";

export default function CounterValue(props) {
    const counterText = useRecoilValue(counter)
    return <div>
        <h3>counterValues from state: {counterText}</h3>
    </div>
}

import './App.css';
import Counter from "./components/counter";
import {RecoilRoot, useRecoilValue} from 'recoil'
import {counter} from "./components/states";
import CounterValue from "./components/counterVal";

function App() {
    return <div>
        <RecoilRoot>
            <Counter/>
            <CounterValue/>
        </RecoilRoot>
    </div>
}

export default App;

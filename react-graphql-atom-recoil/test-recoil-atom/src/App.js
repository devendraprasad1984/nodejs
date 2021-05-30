import './App.css';
import Counter from "./components/counter";
import {RecoilRoot} from 'recoil'
import {ApolloProvider, InMemoryCache, ApolloClient, from, HttpLink} from '@apollo/client'
import {onError} from '@apollo/client/link/error'
import CounterValue from "./components/counterVal";
import GetUsers from "./components/GetUsers";
import GetDogs from "./components/GetDogs";


const errorLink=onError(({graphqlErrors, networkError})=>{
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            alert(`Graphql error ${message} ${location} ${path}`);
        });
    }
})

const gqlServerLink=from([
    errorLink,
    new HttpLink({uri: 'http://localhost:6969/graphql'})
])

const client=new ApolloClient({
    cache: new InMemoryCache(),
    link: gqlServerLink
})

function App() {
    return <div>
        <ApolloProvider client={client}>
            <RecoilRoot>
                <Counter/>
                <CounterValue/>
                <h3>getting users from graphql</h3>
                <GetUsers/>
                <h3>getting dogs from graphql</h3>
                <GetDogs/>
            </RecoilRoot>
        </ApolloProvider>
    </div>
}

export default App;

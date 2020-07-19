const express=require('express');
const {getAccounts,getTransactions} = require('./api');
const ConfigError = require('./config-error');
const config=require('./config.json');
let authToken=undefined;

const books = [
    {title: 'Harry Potter', id: 1},
    {title: 'Twilight', id: 2},
    {title: 'Lorien Legacies', id: 3}
]

const app=express();
app.use(express.json());

app.get('/', (req,res)=> {
    res.send('<h1>welcome to node api for hackathon open banking 2020 - RBS</h1>');
});

app.get('/api/books', (req,res)=> {
    res.send(books);
});

app.get('/api/cust', async (req,res)=> {
    // res.send(config.customerNumber);
    res.send('231490383323')
});

app.get('/api/cust2', async (req,res)=> {
    // res.send(config.customerNumber);
    res.send('994260370680')
});

app.get('/api/accounts', async (req,res)=> {
    try{
        console.log('auth token from ob api',authToken);
        const accounts = await getAccounts(authToken);
        console.log('accounts are', accounts);
        res.send(accounts);
    }catch (error) {
        if (error instanceof ConfigError)
            console.log('Configuration error: ', error.message);
        else
            throw error;
    }
});

app.get('/api/transactions/:page/:accountId', async(req,res)=> {
    try{
        console.log('auth token from ob api',authToken,req.params);
        const transactions = await getTransactions(authToken,req.params.page,req.params.accountId);
        // console.log('accounts are', transactions);
        res.send(transactions);
    }catch (error) {
        if (error instanceof ConfigError)
            console.log('Configuration error: ', error.message);
        else
            throw error;
    }
});

const startServer=function(authorisedAccessToken){
    authToken=authorisedAccessToken;
    const port = process.env.PORT || 6200;
    app.listen(port, () => console.log(`Listening on port ${port}..`));

}

module.exports={
    startServer
}
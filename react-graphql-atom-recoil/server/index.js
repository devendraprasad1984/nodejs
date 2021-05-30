// require('babel-register');
// require('babel-polyfill');
// require('./run');


import express from 'express'
import cors from 'cors'
import GraphHTTP from 'express-graphql';
import Schema from "./schemaDef";

const app = express();
const PORT = 6969;

app.use(cors());
app.use(express.json());
app.use('/graphql', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});




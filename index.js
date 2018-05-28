import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
	res.send('GraphQL is amazing');
});

const root = { friend: () => {
    return {
        "id": 25874231,
        "fname": "Larry",
        "lname":"Jensen",
        "lang":"en",
        "email":"hello@juka.net",      
    
    }
} }; //resolver must match model

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));

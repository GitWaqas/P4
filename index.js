import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
	res.send('GraphQL is amazing');
});

class Friend {
	constructor(id, { firstName, lastName, gender, language, email }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.language = language;
		this.email = email;
	}
}

const friendDB = {};
const root = {
	friend: () => {
		return {
			id: 25874231,
			fname: 'Larry',
			lname: 'Jensen',
			lang: 'en',
			email: [ { email: 'lala@lal.dk' }, { email: 'lahehe@lal.dk' } ],
		}
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDB[id] = input;
        return new Friend(id, input);
    }
}; //resolver must match model

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));

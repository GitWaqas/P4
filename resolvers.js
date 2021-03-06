class Friend {
	constructor(id, { firstName, lastName, gender, language, email, contacts }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.language = language;
        this.email = email;
        this.contacts = contacts;
	}
}

const friendDB = {};

// resolver map
export const resolvers = {
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDB[id]);
        },
    },
    Mutation: {
        createFriend: ({ input }) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDB[id] = input;
            return new Friend(id, input);
        },
    },
};

//resolver must match model


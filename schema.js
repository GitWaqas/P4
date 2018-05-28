import { buildSchema } from 'graphql';

const schema = buildSchema(`
type Friend {
    id:ID
    fname: String
    lname: String
    gender: String
    lang: String
    email: String
}
type Query {
    friend: Friend
}
`)

export default schema;

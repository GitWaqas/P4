import { buildSchema } from 'graphql';

const schema = buildSchema(`
type Friend {
    id:ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    email: String
    contacts: [Contacts]
}

type Contacts{
    firstName:String
    lastName:String
}
input ContactInput{
    firstName:String
    lastName:String

}
enum Gender {
    MALE
    FEMALE
    HELICOPTER
}
type Query {
    getFriend(id:ID):Friend
}



input FriendInput {

    id:ID
    firstName: String!
    lastName: String
    gender: Gender
    language: String
    email: String
    contacts:[ContactInput]

}

type Mutation{
    createFriend(input: FriendInput): Friend
}
`);

export default schema;

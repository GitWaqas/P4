require("./dbSetup");
const User = require("../model/user");
const Location = require("../model/location");
const userFacade = require("../facade/userFacade");

// Test data
userFacade.createUser("Ebbe", "Olmersen", "en@mail.dk", "paradis", "Singer", "MGM", "www.mgm.com", 0, 0);






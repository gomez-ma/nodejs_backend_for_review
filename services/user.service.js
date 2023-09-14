const UserModel = require('../models/user.model.js');

class UserService {
    static registerUser(email, password) {
        try {
            const createUser = new UserModel({email, password});
            return createUser.save();
        }catch(err){
            throw err;
        }
    }

}

module.exports = UserService;
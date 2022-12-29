const jwt = require("jsonwebtoken");

const UserRepository = require("../repository/user-repository");
const { JWT_KEY } = require("../config/serverConfig");

class UserServiece{
    constructor(){
        this.userRepository = new UserRepository;
    }

    async createUser(data){
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log("Error at user serviece layer");
            throw {error};
        }
    }

    async deleteUser(data){
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log("Error at user serviece layer");
            throw {error};
        }
    }

    async createToken(user){
        try {
           const result = jwt.sign(user, JWT_KEY, {expiresIn : '1h'});
           return result; 
        } catch (error) {
            console.log("something went wrong in token creation");
            throw {error};
        }
    }

    async varifyToken(){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong in token validation", error);
            throw {error};
        }
    }
}

module.exports = UserServiece;
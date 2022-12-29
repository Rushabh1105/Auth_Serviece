const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserRepository = require("../repository/user-repository");
const { JWT_KEY } = require("../config/serverConfig");
const { use } = require("../routes");

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

    async signIn(email, password){
        try {
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch = await this.checkPassword(password, user.password);
            if(!passwordMatch){
                console.log("password does not match");
                throw {error : "Incorrect password"};
            }

            const newJWT = this.createToken({
                email : user.email,
                password : user.password,
            });

            return newJWT;
        } catch (error) {
            console.log("Error at user signin layer");
            throw {error};
        }
    }

    async createToken(user){
        try {
           const result = jwt.sign(user, JWT_KEY, {expiresIn : '1d'});
           return result; 
        } catch (error) {
            console.log("something went wrong in token creation");
            throw {error};
        }
    }

    async varifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong in token validation", error);
            throw {error};
        }
    }

    async checkPassword(userInputPlainPassword, encryptedPassword){
       try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("something went wrong in token validation", error);
            throw {error};
       } 
    }
}

module.exports = UserServiece;
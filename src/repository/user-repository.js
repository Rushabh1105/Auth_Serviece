const {User, Role} = require("../models/index");
const ValidationError = require("../utils/validation-error");
//const ValidationError = require("../utils/validation-error");

class UserRepository{
    async createUser(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log(error)
            if(error.name == "SequelizeValidationError"){
                let validationError = new ValidationError(error);
                console.log(validationError);
            }
            console.log("Error at user repository level");
            throw {error};
            
        }
    }


    async deleteUser(userId){
        try {
            await User.destroy({
                where : {
                    id : userId,
                }
            });
            return true;
        } catch (error) {
            console.log("Error at user repository level");
            throw {error};
        }
    }

    async getById(userId){
        try {
            const user = await User.findByPk(userId, {
                attributes : ['email', 'id'],
            });
            return user; 
        } catch (error) {
            console.log("Error at user repository level");
            throw {error};
        }
    }

    async getByEmail(userEmail){
        try {
            const user = await User.findOne({
                where : {
                    email : userEmail,
                }
            });
            return user;
        } catch (error) {
            console.log("Error at user repository level");
            throw {error};
        }
    }

    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                name : "ADMIN",
            });
            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Error at user repository level");
            throw {error};
        }
    }
}

module.exports = UserRepository;
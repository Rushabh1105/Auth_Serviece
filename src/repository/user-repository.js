const {User} = require("../models/index");

class UserRepository{
    async createUser(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
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
}

module.exports = UserRepository;
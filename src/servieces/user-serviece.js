const UserRepository = require("../repository/user-repository");

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
}

module.exports = UserServiece;
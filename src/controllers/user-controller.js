const UserServiece = require("../servieces/user-serviece");

const userServiece = new UserServiece;

const createUser = async (req, res) => {
    try {
        const response = await userServiece.createUser({
            email : req.body.email,
            password : req.body.password,
        });
        return res.status(201).json({
            success : true,
            message : "created a user",
            data : response.email,
            err : {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            message : "Something went wrong",
            success : false,
            err : error,
        })
    }
}

const signIn = async (req, res) => {
    try {
        const response = await userServiece.signIn(
            req.body.email, req.body.password
        );
        return res.status(201).json({
            success : true,
            message : "created a user",
            data : response,
            err : {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            message : "Something went wrong",
            success : false,
            err : error,
        })
    }
}


module.exports = {
    createUser,
    signIn,
}
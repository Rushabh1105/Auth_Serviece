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

const isAuthinticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userServiece.isAuthenticated(token);

        return res.status(201).json({
            success : true,
            message : "varified a user",
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


const isAdmin = async (req, res) => {
    try {
        const response = await userServiece.isAdmin(req.body.id);
        return res.status(201).json({
            success : true,
            message : "varified a user role",
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
        }); 
    }
}


module.exports = {
    createUser,
    signIn,
    isAuthinticated,
    isAdmin
}
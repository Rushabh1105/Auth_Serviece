const validateUserSignup = (req, res, next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success : false,
            data : {},
            message : "soemthing went wrong",
            err : "Email or password missing",
        })
    }
    next();
}

const isValidIsAdminRequest = (req, res, next) => {
    if(!req.body.id){
        return res.status(400).json({
            success : false,
            data : {},
            message : "soemthing went wrong",
            err : "user id not given",
        })
    }
    next();
}

module.exports = {
    validateUserSignup,
    isValidIsAdminRequest,
}
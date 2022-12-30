const { StatusCodes } = require("http-status-codes");

class AppError extends Error{
    constructor( 
        name = "something went wrong", 
        message = "something went wrong",
        description = "App name",
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
        ){
            super();
        this.message = message;
        this.description = description;
        this.name = name;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;
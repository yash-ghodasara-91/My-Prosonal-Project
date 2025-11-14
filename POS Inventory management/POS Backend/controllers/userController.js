const createHttpError = require("http-errors");


const register = async (req, res, next) => {
    try {
        
        const{name, phone, email, password, role } = req.body;

        if (!name || !phone || !email || !password || !role) {
            const error = createHttpError(400, "All firlds are required!");
            next(error);
        }


    } catch (error) {
        
    }
}

const login = async (req, res, next) => {

}

module.exports = {register, login}
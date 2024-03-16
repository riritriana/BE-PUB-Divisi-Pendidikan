const UserService = require('../services/users.v2.service');

const login = async (req, res, next) => {
    try {
        const result = await UserService.Login(req);
        res.cookie("jwt", result[1], {
            httpOnly: true,
            // secure: true,
        }).json(result[0])
    } catch (err) {
        next(err);
    }
};

module.exports = {
    login
};

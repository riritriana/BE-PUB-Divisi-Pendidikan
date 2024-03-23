const UserService = require('../services/users.v2.service');

const login = async (req, res, next) => {
    try {
        const result = await UserService.Login(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    login
};

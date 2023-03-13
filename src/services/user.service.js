const { User } = require('../db/models/');

class UserService {

    async getAllUsers() {
        const users = await User.findAll();
        return users;
    }

    async getUserById(id) {
        const user = await User.findByPk(id);
        return user;
    }

    async createUser(user) {
        const newUser = await User.create(user);
        return newUser;
    }

    async updateUser(id, user) {
        await User.update(user, {
            where: { id: id }
        });
        return await User.findByPk(id);
    }
}

module.exports = UserService;
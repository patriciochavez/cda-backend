const User = require('../models/users');
const userController = {};

userController.getUsers = async (req, res) => {
    try{
        const Users = await User.find();
        res.json(Users);
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userController.createUser = async (req, res) => {
    try{
        const { username } = req.body.username;
        const newUser = new User ({ username });
        await newUser.save();
        res.json({message: 'user created'});
    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
};

userController.deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({message: 'user deleted'});
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

module.exports = userController;
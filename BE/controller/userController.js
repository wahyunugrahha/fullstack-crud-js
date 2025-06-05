const User = require('../model/User');

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: 'User created successfully',
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    res.status(200).json({
      message: 'User retrieved successfully',
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      message: 'Users retrieved successfully',
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    await user.update(req.body);
    res.status(200).json({
      message: 'User updated successfully',
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    await user.destroy();
    res.status(200).json({
      message: 'User deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};

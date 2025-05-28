const User = require("../../models/User");

exports.update = async (req, res, next) => {
  try {
    const { username } = req.body;

    const user = await User.findOne({ _id: req.user._id });

    user.username = username || user.username;

    const updateUser = await user.save();

    return res.status(200).json({
      message: "User updated successfully",
      user: updateUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const removeUser = await User.findByIdAndDelete({
      _id: userId,
    });

    if (!removeUser) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    return res.status(200).json({
      message: "User removed successfully",
      removeUser,
    });
  } catch (error) {
    next(error);
  }
};
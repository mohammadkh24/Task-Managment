const Category = require("../../models/Category");

exports.getAll = async (req, res, next) => {
  try {
    const categories = await Category.find({ user: req.user._id });
    res.status(200).json({ categories });
  } catch (err) {
    next(err);
  }
};


exports.create = async (req, res, next) => {
  try {
    const { title } = req.body;

    const newCategory = await Category.create({
      title,
      user: req.user._id,
    });

    res.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (err) {
    next(err);
  }
};


exports.update = async (req, res, next) => {
  try {
    const { title } = req.body;
    const { id } = req.params;

    const category = await Category.findOne({ _id: id, user: req.user._id });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    category.title = title || category.title;
    const updatedCategory = await category.save();

    res.status(200).json({
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (err) {
    next(err);
  }
};


exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category deleted successfully",
      category,
    });
  } catch (err) {
    next(err);
  }
};

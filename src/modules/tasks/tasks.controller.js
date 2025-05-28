const Task = require("../../models/Task");

exports.getAll = async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
  
      const [tasks, total] = await Promise.all([
        Task.find({ user: req.user._id })
          .populate("category")
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit),
        Task.countDocuments({ user: req.user._id }),
      ]);
  
      res.status(200).json({
        tasks,
        page,
        totalPages: Math.ceil(total / limit),
        totalTasks: total,
      });
    } catch (error) {
      next(error);
    }
  };

exports.create = async (req, res, next) => {
  try {
    const { title, description, category } = req.body;

    const newTask = await Task.create({
      title,
      description,
      category,
      user: req.user._id,
    });

    res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { title, description, category, status } = req.body;
    const { id } = req.params;

    const task = await Task.findOne({ _id: id, user: req.user._id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = title || task.title;
    task.description = description !== undefined ? description : task.description;
    task.category = category || task.category;
    if (status && ["pending", "completed"].includes(status)) {
      task.status = status;
    }

    const updatedTask = await task.save();

    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task deleted successfully",
      task: deletedTask,
    });
  } catch (error) {
    next(error);
  }
};

exports.changeStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["pending", "completed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const task = await Task.findOne({ _id: id, user: req.user._id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = status;
    const updatedTask = await task.save();

    res.status(200).json({
      message: "Task status updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      _id: id,
      user: req.user._id,
    }).populate("category");

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      task,
    });
  } catch (error) {
    next(error);
  }
};

const express = require("express");
const docsRoutes = require("./Docs/swagger.routes");
const authRoutes = require("./modules/auth/auth.routes");
const usersRoutes = require("./modules/users/users.routes");
const categoriesRoutes = require("./modules/categories/categories.routes");
const tasksRoutes = require("./modules/tasks/tasks.routes");

const app = express();

// Req.body
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb" }));

// Routes
app.use("/document", docsRoutes);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/tasks", tasksRoutes);

// Not-Found Page
app.use((req, res, next) => {
  return res.status(404).json({
    message: "404 ! Path Not-Found! ",
  });
});

module.exports = app;

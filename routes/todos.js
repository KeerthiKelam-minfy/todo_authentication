import express from "express";
import { todos } from "../data/todos.js";
import authenticateToken from "../middlewares/auth.js";

const router = express.Router();

// get route (READ)
router.get("/todos", authenticateToken, (req, res) => {
  const userId = req.user.id;
  const userTodos = todos.filter((todo) => todo.userId === userId);
  res.json(userTodos);
});

// post route (CREATE)
router.post("/todos", authenticateToken, (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "Task is required." });
  }

  const newTodo = {
    id: todos.length + 1,
    task,
    userId: req.user.id,
  };

  todos.push(newTodo);

  res.status(201).json({ message: "Todo added!", task: newTodo });
});

// Detele route (DELETE)
router.delete("/todos/:id", authenticateToken, (req, res) => {
  const todoId = parseInt(req.params.id);
  const userId = req.user.id;

  const index = todos.findIndex((todo) => todo.id === todoId);

  if (index === -1) {
    return res.status(404).json({ message: "todo not found" });
  }

  if (todos[index].userId !== userId) {
    return res
      .status(403)
      .json({ message: "You can only delete your own todos" });
  }

  const deleted = todos.splice(index, 1);
  res.json({ message: "todo successfully deleted", todo: deleted[0] });
});

export default router;

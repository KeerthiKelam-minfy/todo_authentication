import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import authenticateToken from "./middlewares/auth.js";

const app = express();

dotenv.config();

app.use(express.json());

const users = [{ id: 1, username: "testuser", password: "password123" }];

// register endpoint

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // if the user already exists
  const userExists = users.find((u) => u.username === username);
  if (userExists) {
    return res.status(409).json({ message: "User already exists." });
  }

  const newUser = {
    id: users.length + 1,
    username,
    password,
  };

  users.push(newUser);
  res
    .status(201)
    .json({ message: "User successfully created.", user: newUser });
});

// Login endpoint

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // checking if user exists
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    res.status(401).json("Invalid username or password");
  }

  // create JWT payload.
  const payload = {
    id: user.id,
    username: user.username,
  };

  // JWT Sign token(expires in 1 hr)
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1hr" });

  res.json({ accessToken: token });
});

// Protected end point

app.get("/api/secret-quote", authenticateToken, (req, res) => {
  res.json({
    quote: "The secret to getting ahead is getting started.",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

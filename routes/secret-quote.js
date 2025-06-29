import express from "express";
import authenticateToken from "../middlewares/auth.js";

const router = express.Router()
// Protected end point

router.get("/secret-quote", authenticateToken, (req, res) => {
  res.json({
    quote: "The secret to getting ahead is getting started.",
  });
});

export default router;
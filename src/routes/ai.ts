import { Router } from "express";

import { getClaudeResponse } from "../lib/anthropic.js";

const router = Router();

router.post("/chat", async (req, res, next) => {
  try {
    const { message } = req.body ?? {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "A text 'message' is required." });
    }

    const response = await getClaudeResponse(message);

    return res.json({
      success: true,
      response,
    });
  } catch (error) {
    next(error);
  }
});

export default router;

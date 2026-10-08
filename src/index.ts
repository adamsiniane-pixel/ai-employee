import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import healthRouter from "./routes/health.js";
import aiRouter from "./routes/ai.js";
import stripeRouter from "./routes/stripe.js";
import { env } from "./config/env.js";

const app = express();
const port = env.port;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

app.use("/", healthRouter);
app.use("/api/ai", aiRouter);
app.use("/api/stripe", stripeRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`AI Employee running on http://localhost:${port}`);
});

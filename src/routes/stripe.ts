import { Router } from "express";

import { createCheckoutSession } from "../lib/stripe.js";

const router = Router();

router.post("/checkout", async (_req, res, next) => {
  try {
    const session = await createCheckoutSession();

    return res.json({
      success: true,
      checkoutUrl: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    next(error);
  }
});

export default router;

import Stripe from "stripe";

import { env } from "../config/env.js";

export const stripe = env.stripeSecretKey
  ? new Stripe(env.stripeSecretKey)
  : null;

export async function createCheckoutSession() {
  if (!stripe) {
    throw new Error("STRIPE_SECRET_KEY is not set.");
  }

  return stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: 2500,
          product_data: {
            name: "AI Employee Access",
          },
        },
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
}

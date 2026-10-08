import Anthropic from "@anthropic-ai/sdk";

import { env } from "../config/env.js";

export async function getClaudeResponse(prompt: string): Promise<string> {
  if (!env.anthropicApiKey) {
    throw new Error("ANTHROPIC_API_KEY is not set.");
  }

  const client = new Anthropic({ apiKey: env.anthropicApiKey });

  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const textParts = response.content
    .filter((part) => part.type === "text")
    .map((part) => (part.type === "text" ? part.text : ""));

  return textParts.join("\n");
}

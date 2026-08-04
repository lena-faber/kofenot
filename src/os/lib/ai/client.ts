import { KOFENOT_PRODUCT } from "@/os/constants/product";

const PRODUCT_CONTEXT = `
Product: ${KOFENOT_PRODUCT.name} — ${KOFENOT_PRODUCT.tagline}
Retail: $${KOFENOT_PRODUCT.retail_price} | 2 for $${KOFENOT_PRODUCT.bundle_price} | Free US shipping
Wholesale: ${KOFENOT_PRODUCT.wholesale_min} units minimum, retail-ready, private label, corporate branding
Made in ${KOFENOT_PRODUCT.made_in}, ships from ${KOFENOT_PRODUCT.ships_from} within ${KOFENOT_PRODUCT.ship_time}
Key features: ${KOFENOT_PRODUCT.features.join("; ")}
Value prop: Not another giveaway — people actually keep it and use it daily. Brand stays visible. Protects laptops, improves ergonomics.
`.trim();

export async function callAI(
  systemPrompt: string,
  userPrompt: string,
  options?: { json?: boolean },
): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (apiKey) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
          messages: [
            { role: "system", content: `${systemPrompt}\n\n${PRODUCT_CONTEXT}` },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.7,
          ...(options?.json ? { response_format: { type: "json_object" } } : {}),
        }),
      });

      if (response.ok) {
        const data = (await response.json()) as {
          choices: Array<{ message: { content: string } }>;
        };
        return data.choices[0]?.message?.content ?? "";
      }
    } catch (err) {
      console.error("[AI] OpenAI call failed, using template fallback:", err);
    }
  }

  return "";
}

export { PRODUCT_CONTEXT };

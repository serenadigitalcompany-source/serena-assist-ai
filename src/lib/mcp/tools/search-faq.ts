import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { FAQ } from "../data";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default defineTool({
  name: "search_faq",
  title: "Rechercher dans la FAQ",
  description:
    "Recherche dans la FAQ publique de Serena IA. Sans requête, retourne toutes les questions/réponses.",
  inputSchema: {
    query: z.string().trim().optional().describe("Mots-clés à rechercher dans les questions et réponses."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query ? normalize(query) : "";
    const items = q
      ? FAQ.filter((f) => normalize(f.q).includes(q) || normalize(f.a).includes(q))
      : [...FAQ];
    return {
      content: [
        {
          type: "text" as const,
          text: items.length
            ? items.map((f) => `Q: ${f.q}\nR: ${f.a}`).join("\n\n")
            : "Aucune question ne correspond à cette recherche.",
        },
      ],
      structuredContent: { items },
    };
  },
});

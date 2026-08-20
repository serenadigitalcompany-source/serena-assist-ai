import { defineTool } from "@lovable.dev/mcp-js";
import { SECURITY } from "../data";

export default defineTool({
  name: "get_security_policy",
  title: "Sécurité & RGPD",
  description:
    "Retourne les engagements publics de Serena IA en matière de sécurité, d'hébergement en Europe et de conformité RGPD.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      { type: "text" as const, text: SECURITY.map((s) => `${s.title}\n${s.text}`).join("\n\n") },
    ],
    structuredContent: { items: SECURITY },
  }),
});

import { defineTool } from "@lovable.dev/mcp-js";
import { INTEGRATIONS } from "../data";

export default defineTool({
  name: "list_integrations",
  title: "Lister les intégrations",
  description: "Liste les outils que Serena IA peut connecter (messageries, agendas, CRM).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text" as const,
        text: INTEGRATIONS.map((i) => `- ${i.name} (${i.category})`).join("\n"),
      },
    ],
    structuredContent: { integrations: INTEGRATIONS },
  }),
});

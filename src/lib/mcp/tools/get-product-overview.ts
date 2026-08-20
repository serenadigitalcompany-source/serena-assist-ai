import { defineTool } from "@lovable.dev/mcp-js";
import { PRODUCT, CHANNELS, USE_CASES, INDUSTRIES } from "../data";

export default defineTool({
  name: "get_product_overview",
  title: "Aperçu produit Serena IA",
  description:
    "Retourne la présentation publique de Serena IA : positionnement, canaux pris en charge, cas d'usage et secteurs cibles.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const overview = {
      product: PRODUCT,
      channels: CHANNELS,
      useCases: USE_CASES,
      industries: INDUSTRIES,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(overview, null, 2) }],
      structuredContent: overview,
    };
  },
});

import { defineMcp } from "@lovable.dev/mcp-js";
import getProductOverview from "./tools/get-product-overview";
import searchFaq from "./tools/search-faq";
import listIntegrations from "./tools/list-integrations";
import getSecurityPolicy from "./tools/get-security-policy";

export default defineMcp({
  name: "serena-landing-replica",
  title: "Serena Landing Replica",
  version: "0.1.0",
  instructions:
    "Outils en lecture seule sur le contenu public de Serena IA : aperçu produit et canaux, FAQ, intégrations disponibles, engagements sécurité & RGPD.",
  tools: [getProductOverview, searchFaq, listIntegrations, getSecurityPolicy],
});

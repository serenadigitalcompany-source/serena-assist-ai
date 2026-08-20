/** Public marketing content of the Serena IA landing page, exposed via MCP. */

export const PRODUCT = {
  name: "Serena IA",
  tagline: "La voix de votre entreprise même quand vous n'êtes pas là.",
  subline: "Le progrès à votre service.",
  description:
    "Serena IA est une assistante IA qui répond à vos clients 24/7 par téléphone, SMS et messageries : prise de rendez-vous, réponses aux questions fréquentes, transcription des appels et transfert vers un humain si nécessaire.",
  trial: "Essai gratuit 14 jours",
  rating: "Noté 5,0 sur 5 (avis Google vérifiés)",
} as const;

export const CHANNELS = [
  { name: "Appels", description: "Réception et émission d'appels, prise de rendez-vous et transfert à un humain." },
  { name: "WhatsApp", description: "Réponses automatiques aux messages WhatsApp de vos clients." },
  { name: "Instagram", description: "Gestion des messages directs Instagram." },
  { name: "Rendez-vous", description: "Prise, confirmation et rappel de rendez-vous dans votre agenda." },
  { name: "Transcription", description: "Transcription complète et résumé de chaque échange." },
] as const;

export const INTEGRATIONS = [
  { name: "WhatsApp", category: "Messagerie" },
  { name: "Instagram", category: "Messagerie" },
  { name: "Google Agenda", category: "Agenda" },
  { name: "Planity", category: "Agenda / Beauté" },
  { name: "HubSpot", category: "CRM" },
] as const;

export const USE_CASES = [
  "Prise de rendez-vous & FAQ",
  "Agent de support client IA",
  "Secrétariat téléphonique IA",
  "Répondeur téléphonique IA",
  "Transcription",
  "Service client",
  "Prise de commande",
  "Planification",
] as const;

export const INDUSTRIES = [
  "Coiffure & beauté",
  "Spa & bien-être",
  "Cliniques & santé",
  "Restaurants & hôtels",
  "Commerces de proximité",
] as const;

export const SECURITY = [
  {
    title: "Emplacement de nos serveurs",
    text: "L'intégralité des données est hébergée et traitée au sein de l'Union européenne, en conformité avec le RGPD.",
  },
  {
    title: "Partenaire LLM",
    text: "Les modèles de langage sont exécutés sur des serveurs situés en Europe, conformément au RGPD et à la réglementation européenne sur l'IA.",
  },
  {
    title: "Transparence",
    text: "Seules les données strictement nécessaires sont conservées et peuvent être supprimées à tout moment sur demande.",
  },
] as const;

export const FAQ = [
  {
    q: "Serena convient-il à mon activité ?",
    a: "Salons de coiffure, cabinets médicaux, restaurants, hôtels, commerces de proximité — Serena s'adapte à tous les métiers qui reçoivent des appels et messages.",
  },
  {
    q: "Faut-il des compétences techniques ?",
    a: "Non. Serena est opérationnelle en 60 secondes, sans aucune ligne de code. Notre équipe vous accompagne à la configuration.",
  },
  {
    q: "Les données sont-elles stockées en Europe ?",
    a: "Oui, 100% en Union Européenne. Serena est conforme RGPD et vos données peuvent être supprimées à tout moment sur demande.",
  },
  {
    q: "Serena peut-elle passer des appels sortants ?",
    a: "Oui, Serena gère les appels entrants ET sortants : relances clients, confirmations de rendez-vous, campagnes de rappel.",
  },
  {
    q: "En combien de temps peut-on démarrer ?",
    a: "Moins de 60 secondes pour créer votre assistant, quelques minutes pour le configurer selon votre activité.",
  },
  {
    q: "Que se passe-t-il si l'IA fait une erreur ?",
    a: "Serena transfère automatiquement l'appel à un humain si nécessaire, et vous avez accès à la transcription complète de chaque échange.",
  },
] as const;

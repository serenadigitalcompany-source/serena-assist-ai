import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageSquare, Instagram as IgIcon, CalendarDays, FileText, ChevronDown, Check, Star, Play, ArrowRight, Twitter, Linkedin } from "lucide-react";
import whatsappAsset from "@/assets/whatsapp.asset.json";
import instagramAsset from "@/assets/instagram.asset.json";
import gcalAsset from "@/assets/gcal.asset.json";
import hubspotAsset from "@/assets/hubspot.asset.json";
import serenaLogo from "@/assets/serena-logo-transparent.asset.json";
import planityAsset from "@/assets/planity.asset.json";
import instagramIconAsset from "@/assets/instagram-icon.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const NAVY = "#12308C";
const RED = "#E30613";

/* ---------- Serena logo (inline SVG) ---------- */
function SerenaLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="Serena">
      {/* upper navy arc */}
      <path d="M52 22 A22 22 0 1 0 20 46" stroke={NAVY} strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* equalizer bars */}
      <rect x="24" y="27" width="3" height="10" rx="1.5" fill={NAVY} />
      <rect x="30" y="22" width="3" height="20" rx="1.5" fill={NAVY} />
      <rect x="36" y="25" width="3" height="14" rx="1.5" fill={NAVY} />
      <rect x="42" y="28" width="3" height="8" rx="1.5" fill={NAVY} />
      {/* lower red arc */}
      <path d="M14 36 A22 22 0 0 0 46 54" stroke={RED} strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Wordmark({ height = 56 }: { height?: number }) {
  return <img src={serenaLogo.url} alt="Serena IA" style={{ height }} className="w-auto object-contain" />;
}

/* ---------- Small brand icons (SVG) ---------- */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#25D366" />
      <path fill="#fff" d="M22.5 18.7c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2s-.8.9-1 1.1c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.8.8 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM16 4C9.4 4 4 9.4 4 16c0 2.1.6 4.1 1.6 5.9L4 28l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12S22.6 4 16 4z" />
    </svg>
  );
}
function InstaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <defs>
        <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FCAF45" />
          <stop offset=".5" stopColor="#FD1D1D" />
          <stop offset="1" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#ig)" />
      <rect x="8" y="8" width="16" height="16" rx="5" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="16" cy="16" r="4" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="21" cy="11" r="1.3" fill="#fff" />
    </svg>
  );
}
function GCalIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <rect x="4" y="4" width="24" height="24" rx="4" fill="#fff" stroke="#e5e7eb" />
      <rect x="4" y="4" width="24" height="7" rx="4" fill="#4285F4" />
      <rect x="7" y="14" width="4" height="4" fill="#34A853" />
      <rect x="14" y="14" width="4" height="4" fill="#FBBC04" />
      <rect x="21" y="14" width="4" height="4" fill="#EA4335" />
      <rect x="7" y="21" width="4" height="4" fill="#FBBC04" />
      <rect x="14" y="21" width="4" height="4" fill="#EA4335" />
      <rect x="21" y="21" width="4" height="4" fill="#34A853" />
    </svg>
  );
}
function PlanityIcon({ size = 18 }: { size?: number }) {
  return <img src={planityAsset.url} alt="Planity" style={{ width: size, height: size }} className="object-contain" />;
}
function HubSpotIcon({ size = 18 }: { size?: number }) {
  return <img src={hubspotAsset.url} alt="HubSpot" style={{ width: size, height: size }} />;
}

/* ---------- Layout primitives ---------- */
const Eyebrow = ({ children, color = NAVY }: { children: React.ReactNode; color?: string }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] border"
    style={{ color, borderColor: color + "40", background: color + "0d" }}
  >
    {children}
  </span>
);

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative w-full py-24 px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const CTA = ({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "outline" }) =>
  variant === "primary" ? (
    <button
      className="px-6 py-3 rounded-full font-bold text-white text-[15px] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(18,48,140,0.55)]"
      style={{ background: NAVY }}
    >
      {children}
    </button>
  ) : (
    <button className="px-6 py-3 rounded-full font-bold text-[15px] border-2 border-[#0c0b0f]/15 text-[#0c0b0f] hover:border-[#0c0b0f]/40 transition-all">
      {children}
    </button>
  );

const Stars = () => (
  <div className="flex items-center gap-0.5">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} size={14} className="fill-[#FBBF24] text-[#FBBF24]" />
    ))}
  </div>
);

const Avatar = ({ letter, color }: { letter: string; color: string }) => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: color }}>
    {letter}
  </div>
);

/* ---------- Chat bubble ---------- */
function Chat({ avatar, messages }: { avatar: React.ReactNode; messages: { from: "user" | "bot"; text: string }[] }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(18,48,140,0.35)]">
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-black/5">
        {avatar}
        <div>
          <div className="text-sm font-bold text-[#0c0b0f]">Serena</div>
          <div className="text-[11px] text-black/50">En ligne</div>
        </div>
      </div>
      <div className="space-y-2.5">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-3.5 py-2 rounded-2xl text-[13.5px] leading-relaxed ${
                m.from === "user" ? "bg-[#f1f2f6] text-[#0c0b0f] rounded-br-md" : "text-white rounded-bl-md"
              }`}
              style={m.from === "bot" ? { background: NAVY } : {}}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Checklist = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((t) => (
      <li key={t} className="flex gap-3 text-[15px] text-[#0c0b0f]/80">
        <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: NAVY + "15", color: NAVY }}>
          <Check size={13} strokeWidth={3} />
        </span>
        {t}
      </li>
    ))}
  </ul>
);

/* ---------- Tabs data ---------- */
const TABS = [
  {
    id: "call",
    label: "Appels entrants",
    icon: <Phone size={16} />,
    avatar: <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: NAVY }}>S</div>,
    chat: [
      { from: "user" as const, text: "Serena, as-tu reçu des appels importants ce matin ?" },
      { from: "bot" as const, text: "Oui, j'ai traité 5 appels. J'ai filtré 2 démarchages et confirmé 2 rendez-vous sur votre Planity." },
      { from: "user" as const, text: "Et le 3ème ?" },
      { from: "bot" as const, text: "Un client voulait reporter — je l'ai reprogrammé samedi 10h avec son accord ✓" },
    ],
    title: "Je gère votre standard 24h/24",
    list: [
      "Réception et qualification des appels 24/7",
      "Prise de RDV synchronisée Planity & Google Agenda",
      "Comptes rendus instantanés par email/SMS",
      "Transfert d'appels sur demande",
    ],
  },
  {
    id: "wa",
    label: "WhatsApp & SMS",
    icon: <WhatsAppIcon size={16} />,
    avatar: <WhatsAppIcon size={36} />,
    chat: [
      { from: "user" as const, text: "Bonjour, est-ce que vous avez une place mardi à 14h ?" },
      { from: "bot" as const, text: "Oui, mardi 14h est disponible ! RDV confirmé, rappel SMS 24h avant 😊" },
      { from: "user" as const, text: "Super, c'est pour une coloration." },
      { from: "bot" as const, text: "Noté ! Durée estimée 1h30 ajoutée à votre réservation ✓" },
    ],
    title: "Répondez à tous vos messages automatiquement",
    list: [
      "Réponses automatiques WhatsApp & SMS 24/7",
      "Prise de rendez-vous via messagerie",
      "Rappels anti no-show automatiques",
    ],
  },
  {
    id: "ig",
    label: "Instagram DM",
    icon: <InstaIcon size={16} />,
    avatar: <InstaIcon size={36} />,
    chat: [
      { from: "user" as const, text: "Salut, c'est combien pour un balayage ?" },
      { from: "bot" as const, text: "Bonjour ! Tarif balayage dès 75€ selon longueur. Je peux vérifier nos dispo ? 🌟" },
      { from: "user" as const, text: "Oui, vendredi après 17h si possible ?" },
      { from: "bot" as const, text: "Vendredi 17h30 est dispo ! Je vous réserve — votre prénom ? 😊" },
    ],
    title: "Gérez vos DM Instagram sans effort",
    list: [
      "Réponse automatique aux DM Instagram",
      "Présentation des tarifs et services",
      "Redirection vers la prise de RDV",
    ],
  },
  {
    id: "rdv",
    label: "Prise de RDV",
    icon: <GCalIcon size={16} />,
    avatar: <GCalIcon size={36} />,
    chat: [
      { from: "user" as const, text: "Je veux prendre RDV pour jeudi." },
      { from: "bot" as const, text: "Jeudi j'ai 10h, 14h et 16h30. Lequel vous convient ?" },
      { from: "user" as const, text: "14h parfait." },
      { from: "bot" as const, text: "RDV confirmé jeudi 14h ! Rappel SMS mercredi soir + ajout Google Agenda ✓" },
    ],
    title: "Votre agenda toujours à jour automatiquement",
    list: [
      "Synchronisation Planity & Google Agenda",
      "Confirmations automatiques SMS/email",
      "Rappels anti no-show 24h avant",
      "Gestion des annulations et reports",
    ],
  },
  {
    id: "tr",
    label: "Transcription",
    icon: <FileText size={16} />,
    avatar: <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: RED }}>S</div>,
    chat: [
      { from: "user" as const, text: "Tu as reçu des appels pendant mon déplacement ?" },
      { from: "bot" as const, text: "3 appels ce matin : ① Marie B. — RDV reporté ✓ ② Client inconnu — tarifs renseignés ✓ ③ Fournisseur — devis en attente" },
      { from: "user" as const, text: "Envoie-moi les transcriptions complètes." },
      { from: "bot" as const, text: "Transcriptions envoyées sur contact@serena-ia.com ✓" },
    ],
    title: "Chaque appel résumé et transcrit automatiquement",
    list: [
      "Transcription complète de chaque appel",
      "Résumé envoyé par email en temps réel",
      "Historique consultable dans votre espace",
      "Zéro boîte vocale manquée",
    ],
  },
];

const TESTIMONIALS = [
  { letter: "M", color: NAVY, role: "Chef d'entreprise", text: "Franchement bluffé par le service. L'automatisation IA nous a permis de réduire énormément les no-show et de gagner un temps fou sur la gestion des appels. Tout est fluide, bien pensé et surtout efficace. Je recommande à 100% pour les entreprises qui veulent passer un cap." },
  { letter: "F", color: "#7C3AED", role: "Fondatrice · Salons de coiffure", text: "Je suis fondatrice d'une petite chaîne de salons de coiffure, le concept est génial ! Mes clients sont très satisfaits et c'est le plus important. J'ai encore plus de temps pour moi et pour m'occuper de choses plus importantes que les réponses aux appels et messages !" },
  { letter: "A", color: "#059669", role: "Kinésithérapeute · Normandie", text: "J'ai utilisé Serena et merci pour cette plate-forme qui m'a permis de mieux gérer mon temps, mes agendas et de m'organiser sur mes plannings. Cela m'a beaucoup simplifié la vie. Je recommande fortement !!!" },
  { letter: "Y", color: "#D97706", role: "Prothésiste ongulaire", text: "Étant prothésiste ongulaire il est très facile d'être débordée avec les messages et les appels. Serena m'a vraiment aidé dans mon organisation et elle m'a permis d'avoir plus de clientèle. Je recommande vivement !" },
  { letter: "H", color: "#2563EB", role: "Propriétaire de boutique", text: "Très intéressant pour les détenteurs de boutiques ou commerces physiques. J'ai beaucoup aimé la manière de répondre et la voix très réaliste de l'IA. Je peux continuer de répondre au téléphone, elle le fait à ma place quand je ne suis pas disponible." },
  { letter: "P", color: RED, role: "Entrepreneurs", text: "Impressionnant, gains de temps, des clients gagnés… Bravo ! Je recommande, mon nombre de ventes a explosé et ça m'a permis de gagner beaucoup de temps." },
];

const FAQ = [
  { q: "Serena convient-il à mon activité ?", a: "Salons de coiffure, cabinets médicaux, restaurants, hôtels, commerces de proximité — Serena s'adapte à tous les métiers qui reçoivent des appels et messages." },
  { q: "Faut-il des compétences techniques ?", a: "Non. Serena est opérationnelle en 60 secondes, sans aucune ligne de code. Notre équipe vous accompagne à la configuration." },
  { q: "Les données sont-elles stockées en Europe ?", a: "Oui, 100% en Union Européenne. Serena est conforme RGPD et vos données peuvent être supprimées à tout moment sur demande." },
  { q: "Serena peut-elle passer des appels sortants ?", a: "Oui, Serena gère les appels entrants ET sortants : relances clients, confirmations de rendez-vous, campagnes de rappel." },
  { q: "En combien de temps peut-on démarrer ?", a: "Moins de 60 secondes pour créer votre assistant, quelques minutes pour le configurer selon votre activité." },
  { q: "Que se passe-t-il si l'IA fait une erreur ?", a: "Serena transfère automatiquement l'appel à un humain si nécessaire, et vous avez accès à la transcription complète de chaque échange." },
];

/* ---------- Page ---------- */
function Landing() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(0);
  const active = TABS[tab];

  return (
    <div className="min-h-screen w-full bg-white text-[#0c0b0f]" style={{ fontFamily: "Inter, Montserrat, system-ui, sans-serif" }}>
      {/* Announce bar */}
      <div className="w-full text-white text-[13px] font-semibold text-center py-2.5 px-4" style={{ background: `linear-gradient(90deg, ${NAVY}, ${RED})` }}>
        Essai gratuit 14 jours · Démarrer maintenant →
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full h-[84px] bg-white/85 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <Wordmark />
          <div className="hidden lg:flex items-center gap-1">
            {/* Cas d'usage - mega menu */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3.5 py-2 rounded-md text-[14px] font-medium text-[#0c0b0f]/75 hover:bg-black/[0.04]">
                Cas d'usage <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <div className="w-[720px] rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-6 grid grid-cols-[1fr_1.6fr] gap-8">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0c0b0f]/45 mb-3">Cas d'utilisation</div>
                    <ul className="space-y-2">
                      {["Prise de rendez-vous & FAQ","Agent de support client IA","Secrétariat téléphonique IA","Répondeur téléphonique IA","Secrétariat","Transcription","Service Client","Prise de Commande","Planification","Plus de 100 options"].map(l => (
                        <li key={l}><a className="block text-[14px] text-[#0c0b0f]/80 hover:text-[color:var(--n)] cursor-pointer" style={{ ["--n" as any]: NAVY }}>{l}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0c0b0f]/45 mb-3">Industries</div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {["Beauté & Bien-être","Cabinet médical","Cabinet dentaire","Physiothérapeutes","Artisans","Avocats","Notaires","Conseillers fiscaux","Hôtels","Restauration","Commerce de détail","Concessions auto","Garages automobiles","Gestion Immobilière","Entreprises","Associations","Services publics","Indépendants"].map(l => (
                        <li key={l}><a className="block text-[14px] text-[#0c0b0f]/80 hover:text-[color:var(--n)] cursor-pointer truncate" style={{ ["--n" as any]: NAVY }}>{l}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a className="px-3.5 py-2 rounded-md text-[14px] font-medium text-[#0c0b0f]/75 hover:bg-black/[0.04] cursor-pointer">Tarifs</a>

            {/* Ressources */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3.5 py-2 rounded-md text-[14px] font-medium text-[#0c0b0f]/75 hover:bg-black/[0.04]">
                Ressources <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <div className="min-w-[200px] rounded-xl border border-black/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-2">
                  <a className="block px-3 py-2 rounded-md text-[14px] text-[#0c0b0f]/80 hover:bg-black/[0.04] cursor-pointer">Centre d'aide</a>
                </div>
              </div>
            </div>

            {/* À propos */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3.5 py-2 rounded-md text-[14px] font-medium text-[#0c0b0f]/75 hover:bg-black/[0.04]">
                À propos <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <div className="min-w-[200px] rounded-xl border border-black/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-2">
                  <a className="block px-3 py-2 rounded-md text-[14px] text-[#0c0b0f]/80 hover:bg-black/[0.04] cursor-pointer">Légal</a>
                  <a className="block px-3 py-2 rounded-md text-[14px] text-[#0c0b0f]/80 hover:bg-black/[0.04] cursor-pointer">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden sm:block px-3 py-2 text-[14px] font-medium text-[#0c0b0f]/75 hover:bg-black/[0.04] rounded-md">Se connecter</button>
            <button className="px-4 py-2 rounded-lg text-white text-[14px] font-bold" style={{ background: NAVY }}>
              Commencer maintenant
            </button>
          </div>
        </div>
      </nav>


      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at center 30%, rgba(18,48,140,0.14), transparent 60%)` }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white text-[13px] mb-8">
            <Stars />
            <span className="text-[#0c0b0f]/70">Noté 5,0 sur 5 avec +8 avis Google vérifiés</span>
          </div>
          <h1 className="text-[52px] sm:text-[68px] lg:text-[88px] font-extrabold leading-[0.98] tracking-[-0.045em]">
            La voix de votre entreprise<br />même quand vous{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #3a6de8, ${RED})` }}
            >
              n'êtes pas là.
            </span>
          </h1>
          <p className="mt-6 text-[18px] lg:text-[20px] text-[#0c0b0f]/65 max-w-2xl mx-auto leading-relaxed">
            Le progrès à votre service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <CTA>Essayer gratuitement</CTA>
          </div>

          {/* Demo card */}
          <div className="mt-14 max-w-[600px] mx-auto rounded-3xl border border-black/10 bg-black/[0.02] p-8 backdrop-blur">
            <div className="flex flex-col items-center gap-5">
              <div className="relative">
                <div
                  className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-white cursor-pointer"
                  style={{ background: NAVY, animation: "serena-pulse 2.8s ease-in-out infinite" }}
                >
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </div>
              </div>
              <p className="text-[14px] text-[#0c0b0f]/60">Cliquez sur l'orbe pour parler avec Serena</p>
              <div className="w-full space-y-2">
                {[
                  "Bonjour, comment pouvez-vous gérer mon standard téléphonique ?",
                  "Pouvez-vous vous synchroniser avec mon agenda Planity ?",
                  "Quels sont vos tarifs pour un salon de coiffure ?",
                ].map((q) => (
                  <div key={q} className="px-4 py-2.5 rounded-full bg-white border border-black/10 text-[13px] text-[#0c0b0f]/75 text-left hover:border-[color:var(--n)] cursor-pointer transition" style={{ ["--n" as any]: NAVY }}>
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@keyframes serena-pulse{0%,100%{box-shadow:0 0 0 0 rgba(18,48,140,0.5)}50%{box-shadow:0 0 0 24px rgba(18,48,140,0)}}`}</style>
      </section>

      {/* TABS CANAUX */}
      <Section>
        <div className="text-center mb-12">
          <Eyebrow color={RED}>Disponible 24h/24, 7j/7</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-[-0.04em]">Serena répond sur tous vos canaux</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setTab(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[14px] font-semibold transition ${
                i === tab ? "text-white" : "text-[#0c0b0f]/70 bg-black/[0.04] hover:bg-black/[0.08]"
              }`}
              style={i === tab ? { background: NAVY } : {}}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Chat avatar={active.avatar} messages={active.chat} />
          <div>
            <h3 className="text-3xl font-extrabold tracking-[-0.03em] mb-6">{active.title}</h3>
            <Checklist items={active.list} />
          </div>
        </div>
      </Section>


      {/* TESTIMONIALS */}
      <Section className="bg-black/[0.02]">
        <div className="text-center mb-12">
          <Eyebrow>+8 avis vérifiés</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-[-0.04em]">Ils nous font confiance</h2>
          <div className="mt-4 inline-flex items-center gap-2 text-[14px] text-[#0c0b0f]/70">
            <Stars /> <span>Noté 5,0 sur 5 · Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-black/10 hover:-translate-y-1 hover:border-[color:var(--n)] transition" style={{ ["--n" as any]: NAVY }}>
              <Stars />
              <p className="mt-4 italic text-[14.5px] text-[#0c0b0f]/80 leading-relaxed">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <Avatar letter={t.letter} color={t.color} />
                <div className="text-[13px] text-[#0c0b0f]/60">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* INTEGRATIONS - Orbital */}
      <Section>
        <div className="text-center mb-12">
          <Eyebrow>Intégrations</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-[-0.04em]">Connectez Serena à vos outils</h2>
          <p className="mt-4 text-[17px] text-[#0c0b0f]/65 max-w-2xl mx-auto">
            Serena s'intègre en quelques clics à vos logiciels de réservation, CRM et messageries.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[640px] aspect-square">
          {/* Orbit ring (rotates) with counter-rotating logos so they stay upright */}
          <div
            className="absolute inset-[12%] rounded-full border border-dashed border-[color:var(--n)]/25"
            style={{ ["--n" as any]: NAVY, animation: "orbit-spin 40s linear infinite" }}
          >
            {[
              { logo: whatsappAsset.url, label: "WhatsApp" },
              { logo: instagramIconAsset.url, label: "Instagram" },
              { logo: gcalAsset.url, label: "Google Agenda" },
              { logo: hubspotAsset.url, label: "HubSpot" },
              { logo: planityAsset.url, label: "Planity" },
            ].map((it, i, arr) => {
              const deg = (360 / arr.length) * i;
              return (
                <div
                  key={it.label}
                  className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10"
                  style={{ transform: `rotate(${deg}deg) translateX(220px) rotate(-${deg}deg)` }}
                >
                  <div
                    className="w-full h-full rounded-2xl bg-white border border-black/10 shadow-[0_10px_30px_-10px_rgba(18,48,140,0.35)] flex items-center justify-center"
                    style={{ animation: "orbit-counter 40s linear infinite" }}
                  >
                    <img src={it.logo} alt={it.label} className="w-12 h-12 object-contain" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Serena logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white border border-black/10 shadow-[0_20px_60px_-20px_rgba(18,48,140,0.4)] flex items-center justify-center z-10">
            <img src={serenaLogo.url} alt="Serena IA" className="w-28 h-28 object-contain" />
          </div>
        </div>

        <style>{`
          @keyframes orbit-spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
          @keyframes orbit-counter { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }
        `}</style>

        <div className="mt-14 flex flex-wrap gap-3 justify-center">
          <CTA>Essayer gratuitement</CTA>
          <CTA variant="outline">Voir toutes les intégrations</CTA>
        </div>
      </Section>


      {/* 3 ÉTAPES */}
      <Section className="bg-black/[0.02]">
        <div className="text-center mb-12">
          <Eyebrow>Démarrage simple</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-[-0.04em]">Opérationnel en 3 étapes</h2>
          <p className="mt-4 text-[17px] text-[#0c0b0f]/65 max-w-2xl mx-auto">
            Notre équipe vous accompagne pas à pas pour configurer Serena en moins d'une heure.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-white border border-black/10 hover:border-[color:var(--n)] transition" style={{ ["--n" as any]: NAVY }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold mb-4" style={{ background: NAVY }}>1</div>
            <h3 className="text-[18px] font-bold mb-2">Créez votre assistant en 60 secondes</h3>
            <p className="text-[14px] text-[#0c0b0f]/60 mb-5">Choisissez une voix HD française, donnez un nom et rédigez votre message d'accueil.</p>
            <div className="rounded-xl border border-black/10 overflow-hidden">
              <div className="text-white text-[12px] font-semibold px-3 py-2" style={{ background: NAVY }}>Choix de la voix</div>
              <div className="p-3 grid grid-cols-2 gap-2">
                {[["Sylvie HD", true], ["Vivienne HD", false], ["Thierry HD", false], ["Remy HD", false]].map(([n, a]) => (
                  <div key={n as string} className={`px-2 py-2 rounded-lg text-[12px] text-center border ${a ? "border-[color:var(--n)] bg-[color:var(--n)]/5 font-semibold" : "border-black/10"}`} style={{ ["--n" as any]: NAVY }}>{n}</div>
                ))}
              </div>
              <div className="px-3 pb-3">
                <button className="w-full py-2 rounded-lg bg-black/[0.05] text-[12px] font-semibold flex items-center justify-center gap-1"><Play size={12} /> Écouter</button>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-white border border-black/10 hover:border-[color:var(--n)] transition" style={{ ["--n" as any]: NAVY }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold mb-4" style={{ background: NAVY }}>2</div>
            <h3 className="text-[18px] font-bold mb-2">Configurez son comportement</h3>
            <p className="text-[14px] text-[#0c0b0f]/60 mb-5">Définissez horaires, transferts, réponses aux questions fréquentes.</p>
            <div className="space-y-3">
              {[["Répondre aux questions", true], ["Transférer les appels", true], ["Email résumé", false]].map(([n, on]) => (
                <div key={n as string} className="flex items-center justify-between rounded-lg border border-black/10 px-3 py-2.5">
                  <span className="text-[13px]">{n}</span>
                  <div className={`w-10 h-6 rounded-full relative transition ${on ? "" : "bg-black/15"}`} style={on ? { background: NAVY } : {}}>
                    <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition ${on ? "left-[18px]" : "left-0.5"}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-white border border-black/10 hover:border-[color:var(--r)] transition" style={{ ["--r" as any]: RED }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold mb-4" style={{ background: RED }}>3</div>
            <h3 className="text-[18px] font-bold mb-2">Laissez Serena prendre vos appels</h3>
            <p className="text-[14px] text-[#0c0b0f]/60 mb-5">Serena décroche, gère les conversations et vous envoie un résumé en temps réel.</p>
            <div className="space-y-2">
              {[["Marie B.", "RDV pris", "#059669"], ["Jean-Paul R.", "Transféré", "#D97706"]].map(([n, s, c]) => (
                <div key={n} className="flex items-center justify-between rounded-lg border border-black/10 px-3 py-2.5">
                  <div className="flex items-center gap-2"><Phone size={13} className="text-[#0c0b0f]/50" /><span className="text-[13px] font-medium">{n}</span></div>
                  <span className="text-[11px] font-semibold px-2 py-1 rounded-full text-white" style={{ background: c }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <CTA>Essayer gratuitement</CTA>
          <CTA variant="outline">Réserver une démo</CTA>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-6xl sm:text-7xl font-extrabold tracking-[-0.05em]">F.A.Q</h2>
          <div className="mt-6 inline-flex gap-1 p-1 rounded-full border border-black/10 bg-white">
            {["Général", "Fonctionnement", "Intégrations"].map((t, i) => (
              <button key={t} className={`px-4 py-1.5 rounded-full text-[13px] font-semibold ${i === 0 ? "text-white" : "text-[#0c0b0f]/60"}`} style={i === 0 ? { background: NAVY } : {}}>{t}</button>
            ))}
          </div>
        </div>
        <div className="max-w-[740px] mx-auto space-y-3">
          {FAQ.map((f, i) => (
            <div key={i} className="rounded-xl border border-black/10 bg-white overflow-hidden">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between text-left px-5 py-4">
                <span className="font-semibold text-[15px]">{f.q}</span>
                <ChevronDown size={18} className={`transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-[14px] text-[#0c0b0f]/65 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <CTA>Réserver une démo</CTA>
          <CTA variant="outline">Nous appeler</CTA>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Wordmark />
            <p className="mt-4 text-[14px] text-[#0c0b0f]/60 leading-relaxed">
              L'assistante IA qui répond à vos clients 24/7 par téléphone, SMS et messageries.
            </p>
            <a href="mailto:contact@serena-ia.com" className="mt-3 inline-block text-[14px] font-semibold" style={{ color: NAVY }}>contact@serena-ia.com</a>
          </div>
          {[
            ["Entreprise", ["À propos", "Investir", "Blog", "FAQ"]],
            ["Navigation", ["Accueil", "Tarifs", "Intégrations", "Cas d'usage"]],
            ["Légal", ["Confidentialité", "Mentions légales", "CGV", "Cookies", "DPA RGPD"]],
          ].map(([title, items]) => (
            <div key={title as string}>
              <div className="text-[13px] font-bold uppercase tracking-wider text-[#0c0b0f]/50 mb-4">{title}</div>
              <ul className="space-y-2.5">
                {(items as string[]).map((it) => (
                  <li key={it}><a className="text-[14px] text-[#0c0b0f]/75 hover:text-[#0c0b0f] cursor-pointer">{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[13px] text-[#0c0b0f]/50">© 2026 Serena IA. Tous droits réservés.</div>
          <div className="flex items-center gap-2">
            {[Twitter, Linkedin, IgIcon].map((I, i) => (
              <a key={i} className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:border-[color:var(--n)] cursor-pointer" style={{ ["--n" as any]: NAVY }}>
                <I size={15} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

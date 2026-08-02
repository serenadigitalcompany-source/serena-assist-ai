import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard, CalendarDays, ClipboardList, BarChart3, Users, Mic2,
  Settings2, PhoneCall, MessageSquare, Building2, HelpCircle, User,
  LogOut, ChevronLeft, ChevronRight, Search, Bell, Plus, Play, Check,
  X, Clock, Calendar as CalIcon, Phone, ChevronDown, PlayCircle,
  ChevronUp, MoreVertical, Send, Sparkles,
} from "lucide-react";
import serenaLogo from "@/assets/serena-logo-transparent.asset.json";
import whatsappAsset from "@/assets/whatsapp.asset.json";
import instagramIconAsset from "@/assets/instagram-icon.png.asset.json";
import gcalAsset from "@/assets/gcal.asset.json";
import planityAsset from "@/assets/planity.asset.json";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — Serena IA" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AppShell,
});

const NAVY = "#12308C";
const RED = "#E30613";
const BG = "var(--app-bg)";
const BORDER = "var(--app-border)";

type SectionId =
  | "dashboard" | "calendrier" | "rdv" | "resultats" | "contacts"
  | "config-ia" | "reglages-rdv" | "appels" | "sms" | "structure"
  | "aide" | "profil";

const NAV: { id: SectionId; label: string; icon: any }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "calendrier", label: "Calendrier", icon: CalendarDays },
  { id: "rdv", label: "Rendez-vous", icon: ClipboardList },
  { id: "resultats", label: "Résultats", icon: BarChart3 },
  { id: "contacts", label: "Contacts", icon: Users },
  { id: "config-ia", label: "Configuration IA", icon: Mic2 },
  { id: "reglages-rdv", label: "Réglages RDV", icon: Settings2 },
  { id: "appels", label: "Appels en direct", icon: PhoneCall },
  { id: "sms", label: "SMS & Automatisations", icon: MessageSquare },
  { id: "structure", label: "Structure", icon: Building2 },
  { id: "aide", label: "Centre d'aide", icon: HelpCircle },
  { id: "profil", label: "Mon profil", icon: User },
];

/* ============ SHELL ============ */
function AppShell() {
  const [section, setSection] = useState<SectionId>("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex" style={{ background: BG, fontFamily: "Inter, ui-sans-serif, system-ui" }}>
      <Sidebar section={section} setSection={setSection} collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 overflow-auto p-6 lg:p-10">
          <SectionRouter section={section} />
        </main>
      </div>
      <HelpBubble />
    </div>
  );
}

function Sidebar({ section, setSection, collapsed, setCollapsed }: any) {
  return (
    <aside
      className="shrink-0 border-r bg-white flex flex-col transition-all"
      style={{ width: collapsed ? 76 : 260, borderColor: BORDER }}
    >
      <div className="h-[84px] px-4 flex items-center gap-2 border-b" style={{ borderColor: BORDER }}>
        <img src={serenaLogo.url} alt="Serena IA" style={{ height: collapsed ? 32 : 44 }} className="object-contain shrink-0" />

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-1.5 rounded-md hover:bg-black/5 text-black/50"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-3">
        {NAV.map((item) => {
          const active = section === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-[14px] font-medium relative transition-colors"
              style={{
                color: active ? NAVY : "#4B5162",
                background: active ? "rgba(18,48,140,0.08)" : "transparent",
              }}
            >
              {active && <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r" style={{ background: NAVY }} />}
              <item.icon size={18} strokeWidth={2} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className="border-t p-3" style={{ borderColor: BORDER }}>
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg" style={{ background: "rgba(18,48,140,0.06)" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-[12px]" style={{ background: NAVY }}>
            BP
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="text-[13px] font-semibold truncate">Beauté Paris</div>
              <div className="text-[11px] text-black/50 truncate">Workspace</div>
            </div>
          )}
        </div>
        <Link to="/" className="mt-3 flex items-center gap-2 px-2 py-2 text-[13px] text-black/60 hover:text-black rounded-lg hover:bg-black/5">
          <LogOut size={16} />
          {!collapsed && <span>Déconnexion</span>}
        </Link>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="h-[64px] bg-white border-b flex items-center gap-4 px-6" style={{ borderColor: BORDER }}>
      <button className="p-1.5 rounded-md hover:bg-black/5 text-black/50"><ChevronLeft size={18} /></button>
      <div className="flex items-center gap-2 text-[13px] text-black/60">
        <span className="w-2 h-2 rounded-full" style={{ background: NAVY }} />
        <span className="font-medium">serena-ia.com</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button className="relative p-2 rounded-lg hover:bg-black/5 text-black/60">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: RED }} />
        </button>
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-[12px]" style={{ background: `linear-gradient(135deg,${NAVY},${RED})` }}>
          BP
        </div>
      </div>
    </header>
  );
}

function HelpBubble() {
  return (
    <button
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-50"
      style={{ background: `linear-gradient(135deg,${NAVY},${RED})` }}
      aria-label="Aide"
    >
      <HelpCircle size={24} />
    </button>
  );
}

/* ============ ROUTER ============ */
function SectionRouter({ section }: { section: SectionId }) {
  switch (section) {
    case "dashboard": return <DashboardHome />;
    case "calendrier": return <Calendrier />;
    case "rdv": return <RendezVous />;
    case "resultats": return <Resultats />;
    case "contacts": return <Contacts />;
    case "config-ia": return <ConfigIA />;
    case "reglages-rdv": return <ReglagesRDV />;
    case "appels": return <AppelsDirect />;
    case "sms": return <SmsAutomations />;
    case "structure": return <Structure />;
    case "aide": return <CentreAide />;
    case "profil": return <MonProfil />;
  }
}

/* ============ UI PRIMITIVES ============ */
function Panel({ children, className = "" }: any) {
  return (
    <div className={`bg-white border rounded-2xl ${className}`} style={{ borderColor: BORDER, boxShadow: "0 1px 2px rgba(16,24,40,0.04)" }}>
      {children}
    </div>
  );
}

function Btn({ children, variant = "primary", className = "", ...rest }: any) {
  const styles: any = {
    primary: { background: NAVY, color: "#fff" },
    danger: { background: RED, color: "#fff" },
    ghost: { background: "transparent", color: NAVY, border: `1px solid ${BORDER}` },
    success: { background: "#16A34A", color: "#fff" },
  };
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 h-10 rounded-lg text-[13px] font-semibold leading-none transition-transform hover:scale-[1.02] ${className}`}
      style={styles[variant]}

    >
      {children}
    </button>
  );
}

function Toggle({ on, onChange, color = NAVY }: { on: boolean; onChange: (v: boolean) => void; color?: string }) {
  return (
    <button
      onClick={() => onChange(!on)}
      className="relative w-11 h-6 rounded-full transition-colors"
      style={{ background: on ? color : "#D1D5DB" }}
    >
      <span
        className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all"
        style={{ left: on ? 22 : 2 }}
      />
    </button>
  );
}

function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: any }) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        <h1 className="text-[24px] sm:text-[30px] font-extrabold tracking-tight text-[#0c0b0f]">{title}</h1>
        {subtitle && <p className="mt-1 text-[14px] text-black/55">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}


/* ============ DASHBOARD HOME ============ */
function DashboardHome() {
  const kpis = [
    { label: "RDV aujourd'hui", value: 0, icon: CalIcon },
    { label: "Appels reçus", value: 12, icon: Phone },
    { label: "Messages traités", value: 47, icon: MessageSquare },
    { label: "RDV ce mois", value: 84, icon: ClipboardList },
  ];
  const config = [
    { label: "Voix IA choisie", done: true },
    { label: "Services ajoutés", done: true },
    { label: "Horaires d'ouverture", done: true },
    { label: "Calendrier connecté", done: false },
  ];

  return (
    <div>
      <PageHeader title="Bonjour, Beauté Paris 👋" subtitle="Voici un aperçu de votre activité aujourd'hui." />

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <Panel key={k.label} className="p-5">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(18,48,140,0.08)", color: NAVY }}>
                <k.icon size={18} />
              </div>
              <span className="text-[11px] font-semibold px-2 py-1 rounded-full" style={{ background: "#ECFDF5", color: "#16A34A" }}>+12%</span>
            </div>
            <div className="mt-4 text-[36px] font-extrabold leading-none text-[#0c0b0f]">{k.value}</div>
            <div className="mt-1 text-[13px] text-black/55">{k.label}</div>
          </Panel>
        ))}
      </div>

      {/* Configuration progress */}
      <Panel className="p-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[16px] font-bold">Configuration</div>
            <div className="text-[13px] text-black/55">75% complété — encore une étape avant d'être prêt</div>
          </div>
          <span className="text-[13px] font-bold" style={{ color: "#16A34A" }}>75%</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "#E5E7EB" }}>
          <div className="h-full rounded-full" style={{ width: "75%", background: "linear-gradient(90deg,#16A34A,#22C55E)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
          {config.map((c) => (
            <div key={c.label} className="flex items-center gap-3 text-[13px]">
              <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: c.done ? "#16A34A" : "#E5E7EB", color: "#fff" }}>
                {c.done ? <Check size={12} /> : <Clock size={12} color="#6B7280" />}
              </span>
              <span className={c.done ? "text-black/70" : "text-black/45"}>{c.label}</span>
            </div>
          ))}
        </div>
      </Panel>

      {/* 3 panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <Panel className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold">Prochains RDV</div>
            <button className="text-[12px] font-semibold" style={{ color: NAVY }}>Voir tout</button>
          </div>
          <div className="space-y-3">
            {[
              { name: "Marie Dubois", service: "Coupe + brushing", time: "14:30" },
              { name: "Julien Perrin", service: "Coloration", time: "16:00" },
              { name: "Sarah K.", service: "Manucure", time: "17:15" },
            ].map((r) => (
              <div key={r.name} className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-black/[0.02]">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold" style={{ background: NAVY }}>
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold truncate">{r.name}</div>
                  <div className="text-[11px] text-black/50 truncate">{r.service}</div>
                </div>
                <div className="text-[12px] font-bold" style={{ color: NAVY }}>{r.time}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-6">
          <div className="font-bold mb-4">Canaux de communication</div>
          <div className="space-y-4">
            {[
              { name: "Appels vocaux", pct: 62, color: NAVY },
              { name: "WhatsApp", pct: 24, color: "#25D366" },
              { name: "Instagram", pct: 10, color: "#E1306C" },
              { name: "SMS", pct: 4, color: RED },
            ].map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-[12px] mb-1"><span>{c.name}</span><span className="font-bold">{c.pct}%</span></div>
                <div className="h-2 rounded-full" style={{ background: "#F3F4F6" }}>
                  <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-6">
          <div className="font-bold mb-4">RDV ce mois par statut</div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { l: "Confirmés", v: 84, c: "#16A34A" },
              { l: "En attente", v: 32, c: "#F59E0B" },
              { l: "Annulés", v: 12, c: RED },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center">
                <div className="flex h-32 w-full items-end justify-center">
                  <div
                    className="w-10 rounded-t-lg"
                    style={{ height: `${Math.max((s.v / 84) * 100, 6)}%`, background: s.c }}
                  />
                </div>
                <div className="mt-2 text-[11px] font-semibold text-center">{s.l}</div>
                <div className="text-[14px] font-bold">{s.v}</div>
              </div>
            ))}
          </div>

        </Panel>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {[
          { icon: Clock, title: "Horaires", desc: "Ouvert 6 jours / 7", action: "Configurer" },
          { icon: Sparkles, title: "Services", desc: "12 services actifs", action: "Ajouter" },
          { icon: Users, title: "Équipe", desc: "1 collaborateur", action: "Gérer" },
        ].map((c) => (
          <Panel key={c.title} className="p-6 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(18,48,140,0.08)", color: NAVY }}>
              <c.icon size={20} />
            </div>
            <div className="flex-1">
              <div className="font-bold text-[15px]">{c.title}</div>
              <div className="text-[12px] text-black/50">{c.desc}</div>
            </div>
            <button className="text-[12px] font-semibold" style={{ color: NAVY }}>{c.action} →</button>
          </Panel>
        ))}
      </div>
    </div>
  );
}

/* ============ CALENDRIER ============ */
function Calendrier() {
  const [days, setDays] = useState({ L: true, M: true, Me: true, J: true, V: true, S: true, D: false });
  const dayLabels: Record<string, string> = { L: "Lundi", M: "Mardi", Me: "Mercredi", J: "Jeudi", V: "Vendredi", S: "Samedi", D: "Dimanche" };

  return (
    <div>
      <PageHeader
        title="Jours d'ouverture"
        subtitle="Configurez les plages horaires pendant lesquelles Serena prend vos rendez-vous."
        action={
          <div className="flex gap-2">
            <Btn variant="ghost"><CalIcon size={14} /> Importer depuis un site</Btn>
            <Btn variant="success"><Check size={14} /> Enregistrer</Btn>
          </div>
        }
      />

      <Panel className="p-6">
        <div className="flex gap-2 mb-6 flex-wrap">
          {Object.entries(days).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setDays({ ...days, [k]: !v })}
              className="w-11 h-11 rounded-full text-[13px] font-bold flex items-center justify-center transition-all"
              style={{
                background: v ? "#16A34A" : "#E5E7EB",
                color: v ? "#fff" : "#6B7280",
              }}
            >
              {k === "Me" ? "M" : k}
            </button>
          ))}
        </div>

        <div className="divide-y" style={{ borderColor: BORDER }}>
          {Object.entries(days).filter(([, v]) => v).map(([k]) => (
            <div key={k} className="py-5">
              <div className="font-bold text-[14px] mb-3">{dayLabels[k]}</div>
              <div className="space-y-2">
                {[["09:00", "12:30"], ["14:00", "19:00"]].map(([a, b], i) => (
                  <div key={i} className="flex items-center gap-3">
                    <TimeInput value={a} />
                    <span className="text-black/40">—</span>
                    <TimeInput value={b} />
                    <button className="p-1.5 rounded hover:bg-black/5 text-black/40"><X size={14} /></button>
                  </div>
                ))}
                <button className="text-[12px] font-semibold flex items-center gap-1" style={{ color: NAVY }}>
                  <Plus size={12} /> Ajouter une plage horaire
                </button>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
function TimeInput({ value }: { value: string }) {
  return (
    <div className="px-3 py-2 rounded-lg border text-[13px] font-mono flex items-center gap-2" style={{ borderColor: BORDER }}>
      {value}
      <ChevronDown size={12} className="text-black/40" />
    </div>
  );
}

/* ============ RENDEZ-VOUS ============ */
function RendezVous() {
  const [modal, setModal] = useState(false);
  const list = [
    { name: "Marie Dubois", service: "Coupe + brushing", date: "20/07 14:30", status: "Confirmé", who: "Charline" },
    { name: "Julien Perrin", service: "Coloration", date: "20/07 16:00", status: "Confirmé", who: "Charline" },
    { name: "Sarah K.", service: "Manucure", date: "20/07 17:15", status: "En attente", who: "—" },
    { name: "Antoine M.", service: "Barbe", date: "21/07 10:00", status: "Confirmé", who: "Charline" },
    { name: "Léa T.", service: "Balayage", date: "21/07 14:00", status: "Annulé", who: "Charline" },
  ];

  return (
    <div>
      <PageHeader
        title="Rendez-vous"
        subtitle="Tous les rendez-vous pris par Serena et manuellement."
        action={<Btn onClick={() => setModal(true)}><Plus size={14} /> Nouveau rendez-vous</Btn>}
      />

      <Panel className="overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: BORDER }}>
          <div className="relative flex-1 max-w-md">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
            <input placeholder="Rechercher un client…" className="w-full pl-9 pr-3 py-2 rounded-lg border text-[13px]" style={{ borderColor: BORDER }} />
          </div>
          <Btn variant="ghost">Filtres</Btn>
        </div>
        <table className="w-full text-[13px]">
          <thead className="text-left text-[11px] uppercase tracking-wide text-black/50">
            <tr className="border-b" style={{ borderColor: BORDER }}>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Collaborateur</th>
              <th className="px-4 py-3">Statut</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map((r) => (
              <tr key={r.name} className="border-b hover:bg-black/[0.02]" style={{ borderColor: BORDER }}>
                <td className="px-4 py-3 font-semibold">{r.name}</td>
                <td className="px-4 py-3 text-black/60">{r.service}</td>
                <td className="px-4 py-3 font-mono text-[12px]">{r.date}</td>
                <td className="px-4 py-3 text-black/60">{r.who}</td>
                <td className="px-4 py-3">
                  <span className="text-[11px] font-semibold px-2 py-1 rounded-full" style={{
                    background: r.status === "Confirmé" ? "#ECFDF5" : r.status === "En attente" ? "#FEF3C7" : "#FEE2E2",
                    color: r.status === "Confirmé" ? "#16A34A" : r.status === "En attente" ? "#B45309" : RED,
                  }}>{r.status}</span>
                </td>
                <td className="px-4 py-3 text-right"><MoreVertical size={14} className="text-black/40" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>

      {modal && <NouveauRdvModal onClose={() => setModal(false)} />}
    </div>
  );
}

function NouveauRdvModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-auto">
        <div className="p-6 border-b flex justify-between items-center" style={{ borderColor: BORDER }}>
          <h2 className="text-[20px] font-bold">Nouveau rendez-vous</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-black/5"><X size={18} /></button>
        </div>
        <div className="p-6 space-y-4">
          {[
            { label: "Date *", type: "input", val: "20/07/2026" },
            { label: "Service", type: "select", val: "— Aucun service —" },
            { label: "Collaborateur", type: "select", val: "— N'importe qui —" },
            { label: "Créneau disponible *", type: "select", val: "Sélectionnez d'abord un service" },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-[12px] font-semibold text-black/60">{f.label}</label>
              <div className="mt-1 flex items-center justify-between px-3 py-2.5 rounded-lg border text-[13px]" style={{ borderColor: BORDER }}>
                {f.val}
                <ChevronDown size={14} className="text-black/40" />
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3">
            <Field label="Nom *" />
            <Field label="Téléphone *" />
          </div>
          <Field label="E-mail" />
          <Field label="Notes" />
        </div>
        <div className="p-6 border-t flex justify-end gap-3" style={{ borderColor: BORDER }}>
          <Btn variant="ghost" onClick={onClose}>Annuler</Btn>
          <Btn onClick={onClose}>Créer le rendez-vous</Btn>
        </div>
      </div>
    </div>
  );
}
function Field({ label }: { label: string }) {
  return (
    <div>
      <label className="text-[12px] font-semibold text-black/60">{label}</label>
      <input className="mt-1 w-full px-3 py-2.5 rounded-lg border text-[13px]" style={{ borderColor: BORDER }} />
    </div>
  );
}

/* ============ RESULTATS ============ */
function Resultats() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 66, 92];
  return (
    <div>
      <PageHeader title="Résultats" subtitle="Suivez la performance de Serena au fil du temps." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { l: "Taux de prise", v: "94%", d: "+3 pts vs mois dernier" },
          { l: "Temps moyen appel", v: "1'42\"", d: "-8s vs mois dernier" },
          { l: "Satisfaction", v: "4.8/5", d: "sur 127 avis" },
        ].map((k) => (
          <Panel key={k.l} className="p-6">
            <div className="text-[13px] text-black/55">{k.l}</div>
            <div className="text-[36px] font-extrabold mt-2" style={{ color: NAVY }}>{k.v}</div>
            <div className="text-[11px] text-black/50 mt-1">{k.d}</div>
          </Panel>
        ))}
      </div>
      <Panel className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="font-bold">Appels traités (14 derniers jours)</div>
          <Btn variant="ghost">Exporter CSV</Btn>
        </div>
        <div className="flex items-end gap-2 h-56">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md transition-all hover:opacity-80" style={{ height: `${h}%`, background: `linear-gradient(180deg,${NAVY},#3a6de8)` }} />
          ))}
        </div>
      </Panel>
    </div>
  );
}

/* ============ CONTACTS ============ */
function Contacts() {
  const contacts = [
    { n: "Marie Dubois", t: "+33 6 12 34 56 78", e: "marie@mail.com", last: "20/07 14:30", rdv: 4 },
    { n: "Julien Perrin", t: "+33 6 22 33 44 55", e: "julien@mail.com", last: "20/07 16:00", rdv: 2 },
    { n: "Sarah Kadi", t: "+33 6 44 55 66 77", e: "sarah@mail.com", last: "18/07 11:00", rdv: 7 },
    { n: "Antoine Marchand", t: "+33 6 88 99 00 11", e: "antoine@mail.com", last: "15/07 09:15", rdv: 1 },
    { n: "Léa Tessier", t: "+33 6 12 45 67 89", e: "lea@mail.com", last: "12/07 17:30", rdv: 3 },
  ];
  return (
    <div>
      <PageHeader title="Contacts" subtitle="Votre carnet d'adresses clients." action={<Btn><Plus size={14} /> Ajouter un contact</Btn>} />
      <Panel className="overflow-hidden">
        <table className="w-full text-[13px]">
          <thead className="text-left text-[11px] uppercase tracking-wide text-black/50">
            <tr className="border-b" style={{ borderColor: BORDER }}>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Téléphone</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Dernier RDV</th>
              <th className="px-4 py-3">RDV total</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.n} className="border-b hover:bg-black/[0.02]" style={{ borderColor: BORDER }}>
                <td className="px-4 py-3 font-semibold flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold" style={{ background: NAVY }}>
                    {c.n.split(" ").map((x) => x[0]).join("")}
                  </div>
                  {c.n}
                </td>
                <td className="px-4 py-3 font-mono text-[12px]">{c.t}</td>
                <td className="px-4 py-3 text-black/60">{c.e}</td>
                <td className="px-4 py-3 text-black/60">{c.last}</td>
                <td className="px-4 py-3 font-bold">{c.rdv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}

/* ============ CONFIG IA (voix) ============ */
function ConfigIA() {
  const voices = [
    { n: "Sylvie Dragon HD Latest", tag: "HD", desc: "Voix féminine chaleureuse", featured: true },
    { n: "Thierry Dragon HD Latest", tag: "HD", desc: "Voix masculine posée", featured: true },
    { n: "Vivienne Dragon HD Latest", tag: "HD", desc: "Voix féminine expressive", featured: true },
    { n: "Rémy Dragon HD Latest", tag: "HD", desc: "Voix masculine dynamique", featured: true },
    { n: "Charline", desc: "Voix jeune et énergique" },
    { n: "Gérard", desc: "Voix mature et posée" },
    { n: "Sylvie", desc: "Voix féminine classique" },
    { n: "Jean", desc: "Voix masculine standard" },
    { n: "Antonia", desc: "Voix douce" },
    { n: "Thierry", desc: "Voix profonde" },
    { n: "Ariane", desc: "Voix cristalline" },
    { n: "Fabrice", desc: "Voix radio" },
    { n: "Denise", desc: "Voix élégante" },
    { n: "Henri", desc: "Voix rassurante" },
    { n: "Vivienne Multilingual", tag: "Multi", desc: "Multilingue" },
    { n: "Rémy Multilingual", tag: "Multi", desc: "Multilingue" },
  ];
  const [selected, setSelected] = useState("Sylvie Dragon HD Latest");
  return (
    <div>
      <PageHeader title="Voix de Serena" subtitle="Choisissez la voix qui accueillera vos clients." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {voices.map((v) => {
          const active = selected === v.n;
          return (
            <div
              key={v.n}
              onClick={() => setSelected(v.n)}
              className="cursor-pointer rounded-2xl border bg-white p-4 transition-all"
              style={{
                borderColor: active ? NAVY : BORDER,
                boxShadow: active ? `0 0 0 1px ${NAVY}` : "0 1px 2px rgba(16,24,40,0.04)",
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg,${NAVY},${RED})`, color: "#fff" }}>
                  <Mic2 size={18} />
                </div>
                {v.tag && <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(18,48,140,0.08)", color: NAVY }}>{v.tag}</span>}
              </div>
              <div className="mt-3 font-bold text-[13px] leading-snug break-words">{v.n}</div>
              <div className="mt-0.5 text-[11px] text-black/50 break-words">{v.desc}</div>
              <button className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: NAVY }}>
                <PlayCircle size={14} /> Écouter
              </button>
            </div>

          );
        })}
      </div>
    </div>
  );
}

/* ============ REGLAGES RDV ============ */
function ReglagesRDV() {
  const [rules, setRules] = useState({ conf: true, rappel: true, annul: false, buffer: true });
  return (
    <div>
      <PageHeader title="Réglages RDV" subtitle="Personnalisez les règles de prise de rendez-vous." />
      <div className="space-y-4">
        {[
          { k: "conf", t: "Confirmation automatique", d: "Confirme les RDV sans validation manuelle." },
          { k: "rappel", t: "Rappel client 24h avant", d: "Envoi automatique d'un SMS de rappel." },
          { k: "annul", t: "Autoriser l'annulation en ligne", d: "Le client peut annuler jusqu'à 2h avant." },
          { k: "buffer", t: "Tampon entre RDV (15 min)", d: "Ajoute un délai entre deux rendez-vous." },
        ].map((r) => (
          <Panel key={r.k} className="p-5 flex items-center justify-between">
            <div>
              <div className="font-bold text-[14px]">{r.t}</div>
              <div className="text-[12px] text-black/50 mt-0.5">{r.d}</div>
            </div>
            <Toggle on={(rules as any)[r.k]} onChange={(v) => setRules({ ...rules, [r.k]: v })} />
          </Panel>
        ))}
      </div>
    </div>
  );
}

/* ============ APPELS EN DIRECT ============ */
function AppelsDirect() {
  return (
    <div>
      <PageHeader title="Appels en direct" subtitle="Suivez et reprenez la main sur les conversations en cours." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white" style={{ background: `linear-gradient(135deg,${NAVY},${RED})` }}>
                <Mic2 size={18} />
              </div>
              <div>
                <div className="font-bold">Sélectionnez une conversation</div>
                <div className="text-[12px] text-black/50">Serena est en ligne</div>
              </div>
            </div>
            <Btn variant="danger"><PhoneCall size={14} /> Prendre la main</Btn>
          </div>
          <div className="text-center py-16">
            <div className="w-40 h-40 mx-auto rounded-full flex items-center justify-center" style={{ background: `radial-gradient(circle,${NAVY}22,transparent)` }}>
              <div className="w-24 h-24 rounded-full flex items-center justify-center animate-pulse" style={{ background: `linear-gradient(135deg,${NAVY},${RED})` }}>
                <span className="text-white text-[32px] font-bold">?</span>
              </div>
            </div>
            <div className="mt-6 text-[13px] text-black/55">Aucun appel en cours. Sélectionnez une conversation dans l'historique.</div>
          </div>
        </Panel>
        <Panel className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={16} style={{ color: NAVY }} />
            <div className="font-bold">Historique</div>
          </div>
          <div className="space-y-3">
            {[
              { n: "Marie Dubois", t: "il y a 5 min", d: "Prise de RDV" },
              { n: "+33 6 22 33…", t: "il y a 18 min", d: "Question tarifs" },
              { n: "Julien P.", t: "il y a 42 min", d: "Modification RDV" },
              { n: "Numéro masqué", t: "il y a 1h", d: "Renseignements" },
            ].map((h) => (
              <div key={h.n + h.t} className="p-3 rounded-lg border cursor-pointer hover:border-[var(--n)]" style={{ borderColor: BORDER, ["--n" as any]: NAVY }}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-[13px]">{h.n}</div>
                  <div className="text-[11px] text-black/40">{h.t}</div>
                </div>
                <div className="text-[11px] text-black/50 mt-1">{h.d}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

/* ============ SMS & AUTOMATISATIONS ============ */
function SmsAutomations() {
  const [rappel, setRappel] = useState(true);
  const [avis, setAvis] = useState(true);
  const [timing, setTiming] = useState("24h avant");

  return (
    <div>
      <PageHeader
        title="SMS & Automatisations"
        subtitle="Automatisez vos communications post-RDV."
        action={<Btn><Plus size={14} /> Nouvelle automatisation</Btn>}
      />

      <div className="space-y-4">
        <Panel className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(18,48,140,0.08)", color: NAVY }}>
                <Bell size={20} />
              </div>
              <div>
                <div className="font-bold">Rappel de RDV</div>
                <div className="text-[12px] text-black/50 mt-0.5">Envoyé automatiquement avant chaque rendez-vous.</div>
                <div className="mt-4 space-y-3">
                  <div>
                    <label className="text-[12px] font-semibold text-black/60">Envoi</label>
                    <div className="mt-1 relative">
                      <select value={timing} onChange={(e) => setTiming(e.target.value)} className="px-3 py-2 rounded-lg border text-[13px] w-56 appearance-none" style={{ borderColor: BORDER }}>
                        {["48h avant", "24h avant", "12h avant", "2h avant", "1h avant", "1h après le RDV", "24h après le RDV"].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-black/60">Contenu du SMS</label>
                    <textarea
                      className="mt-1 w-full px-3 py-2 rounded-lg border text-[13px] font-mono h-24"
                      style={{ borderColor: BORDER }}
                      defaultValue={"[Serena] Rappel: votre RDV chez {{salonName}} est prévu {{rdvDate}}. À bientôt !"}
                    />
                    <div className="text-[11px] text-black/40 mt-1">Variables: {"{{salonName}}"} {"{{rdvDate}}"} {"{{clientName}}"}</div>
                  </div>
                </div>
              </div>
            </div>
            <Toggle on={rappel} onChange={setRappel} />
          </div>
        </Panel>

        <Panel className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#FEF3C7", color: "#B45309" }}>
                <Sparkles size={20} />
              </div>
              <div>
                <div className="font-bold">Demande d'avis</div>
                <div className="text-[12px] text-black/50 mt-0.5">Envoyé après le rendez-vous pour collecter un avis.</div>
                <div className="mt-4">
                  <label className="text-[12px] font-semibold text-black/60">Contenu du SMS</label>
                  <textarea
                    className="mt-1 w-full px-3 py-2 rounded-lg border text-[13px] font-mono h-24"
                    style={{ borderColor: BORDER }}
                    defaultValue={"Merci pour votre visite chez {{salonName}} ! Votre avis compte beaucoup: {{reviewLink}}"}
                  />
                </div>
              </div>
            </div>
            <Toggle on={avis} onChange={setAvis} />
          </div>
        </Panel>

        <div className="flex justify-end">
          <Btn><Send size={14} /> Enregistrer</Btn>
        </div>
      </div>
    </div>
  );
}

/* ============ STRUCTURE ============ */
function Structure() {
  return (
    <div>
      <PageHeader title="Structure" subtitle="Gérez votre équipe et son organisation." />
      <Panel className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Users size={20} style={{ color: NAVY }} />
          <div className="font-bold">Équipe (1 collaborateur)</div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl border" style={{ borderColor: BORDER }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: NAVY }}>C</div>
          <div className="flex-1">
            <div className="font-bold">Charline</div>
            <div className="text-[12px] text-black/50">Coiffeuse — Administrateur</div>
          </div>
          <Btn variant="ghost">Modifier</Btn>
        </div>
        <button className="mt-6 w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2" style={{ background: NAVY }}>
          <Plus size={16} /> Ajouter un collaborateur
        </button>

        <div className="mt-8 space-y-6 text-[13px] text-black/70 leading-relaxed">
          <div>
            <div className="font-bold text-[14px] mb-2 text-black/90">Rôles disponibles</div>
            <p>Administrateur, Praticien, Assistant. Chaque rôle dispose de permissions spécifiques sur l'agenda, les clients et la configuration.</p>
          </div>
          <div>
            <div className="font-bold text-[14px] mb-2 text-black/90">Attribution des RDV</div>
            <p>Serena attribue automatiquement chaque rendez-vous au collaborateur disponible correspondant au service demandé.</p>
          </div>
          <div>
            <div className="font-bold text-[14px] mb-2 text-black/90">Horaires individuels</div>
            <p>Chaque collaborateur peut définir ses propres horaires, jours de congés et services proposés.</p>
          </div>
        </div>
      </Panel>
    </div>
  );
}

/* ============ CENTRE D'AIDE ============ */
function CentreAide() {
  const tabs = ["Introduction", "Démarrage Express", "Comportement", "Technique", "FAQ", "Legal"];
  const [tab, setTab] = useState("Technique");
  const [open, setOpen] = useState<string | null>("Paramètres d'Appel");

  const articles: Record<string, { q: string; a: string }[]> = {
    Technique: [
      { q: "Paramètres d'Appel", a: "Gérez la fidélité technique de votre standard téléphonique. Serena assure une qualité audio HD sur tous les appels entrants et sortants." },
      { q: "Durée max (10 minutes par appel par défaut)", a: "Vous pouvez ajuster la durée maximale d'un appel. Au-delà, Serena passe le relais ou raccroche." },
      { q: "Enregistrement (Conservé 30 jours)", a: "Tous les appels sont enregistrés et conservés 30 jours. Vous pouvez les consulter depuis l'historique." },
    ],
    Introduction: [{ q: "Bienvenue sur Serena", a: "Serena est votre assistante IA pour gérer vos appels, RDV et communications 24/7." }],
    "Démarrage Express": [{ q: "5 étapes pour démarrer", a: "Configurez votre voix, vos horaires, vos services, connectez votre agenda et activez." }],
    Comportement: [{ q: "Ton et style", a: "Personnalisez le comportement conversationnel de Serena." }],
    FAQ: [{ q: "Serena fonctionne-t-elle 24/7 ?", a: "Oui, Serena répond à vos appels et messages en continu." }],
    Legal: [{ q: "RGPD", a: "Toutes les données sont hébergées en Europe et conformes RGPD." }],
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-[40px] font-extrabold tracking-tight">Centre d'aide</h1>
        <p className="mt-2 text-[14px] text-black/55">Tout ce que vous devez savoir pour tirer le meilleur parti de Serena.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((t) => {
          const active = tab === t;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-4 py-2 rounded-full text-[13px] font-semibold transition-all"
              style={{
                background: active ? NAVY : "transparent",
                color: active ? "#fff" : "#4B5162",
                border: active ? "none" : `1px solid ${BORDER}`,
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      <Panel className="p-6 max-w-3xl mx-auto">
        <div className="font-bold text-[16px] mb-4 pb-3 border-b" style={{ borderColor: BORDER }}>Base de Connaissances — {tab}</div>
        <div className="divide-y" style={{ borderColor: BORDER }}>
          {articles[tab]?.map((a) => (
            <div key={a.q} className="py-4">
              <button
                onClick={() => setOpen(open === a.q ? null : a.q)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-bold text-[14px]">{a.q}</span>
                {open === a.q ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {open === a.q && <p className="mt-3 text-[13px] text-black/60 leading-relaxed">{a.a}</p>}
            </div>
          ))}
        </div>
      </Panel>
      <div className="text-center mt-8 text-[11px] text-black/40">© 2026 Serena IA. Tous droits réservés.</div>
    </div>
  );
}

/* ============ MON PROFIL ============ */
function MonProfil() {
  return (
    <div>
      <PageHeader title="Mon profil" subtitle="Gérez les infos publiques de votre entreprise." action={<Btn>Modifier</Btn>} />

      <Panel className="p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(18,48,140,0.08)", color: NAVY }}>
            <Building2 size={18} />
          </div>
          <div>
            <div className="font-bold">Informations entreprise</div>
            <div className="text-[12px] text-black/50">Visible par vos clients dans les échanges.</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px]">
          <Info label="Nom" value="Beauté Paris" />
          <Info label="Secteur" value="Salon de beauté" />
          <Info label="Téléphone" value="+33 4 77 XX XX XX" />
          <Info label="E-mail" value="contact@beaute-paris.fr" />
          <Info label="Adresse" value="24 Rue Charles de Gaulle, 42000 Saint-Étienne" />
          <Info label="SIRET" value="932 819 486 00018" />
        </div>
      </Panel>

      <Panel className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(227,6,19,0.08)", color: RED }}>
            <CalIcon size={18} />
          </div>
          <div>
            <div className="font-bold">Agenda</div>
            <div className="text-[12px] text-black/50">Connectez votre calendrier pour synchroniser vos RDV.</div>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { name: "Google Calendar", logo: gcalAsset.url, connected: false },
            { name: "Outlook Calendar", logo: null, icon: CalIcon, connected: false },
            { name: "Planity", logo: planityAsset.url, connected: true },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-4 p-4 rounded-xl border" style={{ borderColor: BORDER }}>
              {c.logo ? (
                <img src={c.logo} alt={c.name} className="w-10 h-10 object-contain" />
              ) : (
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#0078D4", color: "#fff" }}>
                  <CalIcon size={20} />
                </div>
              )}
              <div className="flex-1 font-semibold text-[14px]">{c.name}</div>
              {c.connected ? (
                <span className="text-[11px] font-semibold px-2 py-1 rounded-full" style={{ background: "#ECFDF5", color: "#16A34A" }}>
                  Connecté
                </span>
              ) : (
                <Btn>Connecter</Btn>
              )}
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="p-6 mt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(37,211,102,0.12)" }}>
            <img src={whatsappAsset.url} alt="" className="w-6 h-6 object-contain" />
          </div>
          <div>
            <div className="font-bold">Canaux messagerie</div>
            <div className="text-[12px] text-black/50">Reliez WhatsApp Business et Instagram DM.</div>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { name: "WhatsApp Business", logo: whatsappAsset.url },
            { name: "Instagram DM", logo: instagramIconAsset.url },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-4 p-4 rounded-xl border" style={{ borderColor: BORDER }}>
              <img src={c.logo} alt={c.name} className="w-10 h-10 object-contain" />
              <div className="flex-1 font-semibold text-[14px]">{c.name}</div>
              <Btn>Connecter</Btn>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide font-bold text-black/40">{label}</div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}

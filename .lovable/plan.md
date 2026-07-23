
## Objectif

Reproduire l'interface SaaS de Serena IA (vue dans l'écran filmé) en un dashboard démo entièrement navigable, aux couleurs de la landing page (navy `#12308C`, rouge `#E30613`, blanc). L'accent violet du SaaS original est remplacé par le navy Serena.

## Route et structure

Une seule route `/app` avec un layout (sidebar gauche + zone de contenu) et un état interne qui bascule entre les 12 sections. Le CTA "Mon dashboard" de la landing pointe déjà vers cette route.

```
src/routes/app.tsx           → shell (sidebar + topbar + workspace footer)
src/components/app/
  Sidebar.tsx                → nav 12 items + footer workspace + logout
  sections/
    DashboardHome.tsx        → "Bonjour, Beauté Paris" + 4 KPI + Configuration progress + 3 grands panneaux (Prochains RDV / Canaux / Statuts) + Horaires / Services / Équipe
    Calendrier.tsx           → "Jours d'ouverture" : pills L-M-M-J-V-S-D, plages horaires par jour, bouton "Enregistrer"
    RendezVous.tsx           → liste + modal "Nouveau rendez-vous" (Date / Service / Collaborateur / Créneau / Nom / Téléphone / Email / Notes)
    Resultats.tsx            → graphiques + KPIs volume d'appels
    Contacts.tsx             → tableau contacts
    ConfigurationIA.tsx      → grille des voix (Sylvie / Thierry / Vivienne / Rémy HD + Multilingual + prénoms) avec bouton play
    ReglagesRDV.tsx          → règles de prise de RDV
    AppelsDirect.tsx         → viewer conversation live + bouton "Prendre la main" + historique
    SmsAutomatisations.tsx   → cartes toggle "Rappel de RDV" / "Demande d'avis" + éditeur de contenu SMS avec variables
    Structure.tsx            → "Équipe (1 collaborateur)" + bouton "Ajouter un collaborateur" + descriptif
    CentreAide.tsx           → onglets (Introduction / Démarrage Express / Comportement / Technique / FAQ / Legal) + accordéons
    MonProfil.tsx            → Informations entreprise + Agenda (Google Calendar / Outlook / Planity avec boutons Connecter)
```

## Design tokens

- Fond page : `#F7F8FB` (gris très clair)
- Panneaux : blanc, bordure `#EAECEF`, radius 16, ombres douces
- Sidebar : blanc, item actif = fond `rgba(18,48,140,0.08)` + texte navy + barre gauche navy
- Accent principal (boutons, toggles ON, badges actifs) : navy `#12308C`
- Accent secondaire (alertes, indicateurs "live", CTA de conversion) : rouge `#E30613`
- Success (Enregistrer, points verts jours ouverts) : `#16A34A` (vert conservé pour la lisibilité fonctionnelle)
- Typo héritée de la landing

## Interactivité (démo, pas de backend)

- Navigation sidebar via `useState<Section>`
- Toggle switches, tabs, accordéons FAQ, modal "Nouveau RDV" : contrôlés localement
- Données mockées cohérentes (Beauté Paris, 24 rue Charles de Gaulle, 42000 Saint-Étienne)
- Bouton lecture voix : simple animation de barres

## Header topbar

Barre haute blanche avec breadcrumb ("serena-ia.com"), bouton retour, avatars, bouton "?" d'aide flottant en bas à droite (visible dans la vidéo).

## Ce qui n'est PAS modifié

Landing page (`src/routes/index.tsx`), racine, assets existants. Uniquement ajout de la nouvelle route et de ses composants.

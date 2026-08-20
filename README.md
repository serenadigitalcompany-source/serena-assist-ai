# Serena Landing Replica

Crée la landing page complète de SERENA IA en copiant fidèlement la structure et le design de https://www.limova.ai, puis en remplaçant tout le contenu par celui de serena-ia.com. Aucune mention de Limova ne doit apparaître.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 1. CHARTE GRAPHIQUE — BRANDBOOK OFFICIEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Couleurs
- Navy primary (60%) : #12308C
- Rouge accent (10%) : #E30613
- Blanc (30%) : #FFFFFF
- Fond dark page : #0c0b0f
- Cards dark : rgba(255,255,255,0.04)
- Bordures dark : rgba(255,255,255,0.09)
- Texte secondaire : rgba(255,255,255,0.55)

### Typographie
Police : Inter (Montserrat en fallback)
- Titres : font-weight 800, letter-spacing -0.04em
- Corps : Regular, line-height 1.65

### Logo Serena IA — SVG inline OBLIGATOIRE
Le logo est un S stylisé en 3 éléments :
- Arc supérieur navy #12308C (~270°) : part du bas-gauche, remonte, passe par le haut, revient centre-droit
- 4 barres equalizer navy #12308C au centre (hauteurs : 10 / 20 / 14 / 8 px)
- Arc inférieur rouge #E30613 (~200°) : part du centre-droit, descend, revient bas-gauche

Wordmark : "Serena" en font-weight 700

### Fond de page
Grille pointillée subtile sur fond #0c0b0f :
background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
background-size: 28px 28px;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 2. NAVIGATION — IDENTIQUE À SERENA-IA.COM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Position : sticky top, z-index 99
Fond : rgba(12,11,15,0.85) + backdrop-filter blur(16px) + border-bottom 1px rgba(255,255,255,0.09)
Hauteur : 68px

Gauche : Logo SVG Serena + texte "Serena" (font-weight 700)

Centre (liens) — exactement comme serena-ia.com :
- "Cas d'usage" + chevron dropdown
- "Tarifs"
- "Ressources" + chevron dropdown
- "À propos" + chevron dropdown

Chaque lien : padding 8px 14px, font-size 14px, font-weight 500, color rgba(255,255,255,0.75), hover background rgba(255,255,255,0.06)

Droite :
- "Se connecter" (ghost, no border)
- "Commencer maintenant" (bouton navy #12308C, border-radius 8px, font-weight 700)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 3. BARRE ANNONCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Au-dessus de la nav. Fond : linear-gradient(90deg, #12308C, #E30613)
Texte : "🎙️ Essai gratuit 14 jours · Aucune carte bancaire requise · Démarrer maintenant →"
Font-size 13px, font-weight 600, blanc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 4. HERO (copier le layout hero de Limova)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Glow radial navy derrière le titre : radial-gradient(ellipse, rgba(18,48,140,0.25), transparent 70%)

Badge étoiles (pill border) :
★★★★★ Noté 5,0 sur 5 avec +8 avis Google vérifiés

H1 (88px, weight 800, letter-spacing -0.045em) :
"Votre assistante IA
disponible 24/7."
→ "24/7." en dégradé text : linear-gradient(135deg, #12308C, #3a6de8, #E30613)

Sous-titre : "Libérez-vous des appels manqués et concentrez-vous sur ce qui compte vraiment — votre métier."

2 CTA :
- "Essayer gratuitement" → navy #12308C, border-radius full, hover shadow navy
- "Réserver une démo" → outline blanc, border-radius full

Carte démo centrale (max-width 600px, fond rgba blanc 4%, border, border-radius 24px) :
- Orbe circulaire 88px navy avec icône micro blanc
  → animation CSS pulse : box-shadow 0→24px rgba(18,48,140,0.5) en boucle 2.8s
- Texte "Cliquez sur l'orbe pour parler avec Serena"
- 3 query pills (fond semi-transparent, border arrondi) :
  1. "Bonjour, comment pouvez-vous gérer mon standard téléphonique ?"
  2. "Pouvez-vous vous synchroniser avec mon agenda Planity ?"
  3. "Quels sont vos tarifs pour un salon de coiffure ?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 5. SECTION TABS CANAUX (copier le système d'onglets agents de Limova)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eyebrow : "DISPONIBLE 24H/24, 7J/7" (badge rouge outline, uppercase, letter-spacing 0.1em)
Titre : "Serena répond sur tous vos canaux"

5 onglets pill (actif = fond navy #12308C) avec VRAIS logos SVG inline :

① Appels entrants — icône téléphone SVG
② WhatsApp & SMS — logo WhatsApp SVG (fond #25D366, bulle blanche)
③ Instagram DM — logo Instagram SVG (dégradé #FCAF45 → #FD1D1D → #833AB4, carré arrondi, cercle + point)
④ Prise de RDV — logo Google Calendar SVG (header #4285F4, cases #34A853 / #FBBC04 / #EA4335)
⑤ Transcription — icône document SVG

Chaque onglet = grille 2 colonnes : fenêtre chat (gauche) + texte (droite)

ONGLET ① — Appels entrants
Chat (avatar S navy) :
User : "Serena, as-tu reçu des appels importants ce matin ?"
Serena : "Oui, j'ai traité 5 appels. J'ai filtré 2 démarchages et confirmé 2 rendez-vous sur votre Planity."
User : "Et le 3ème ?"
Serena : "Un client voulait reporter — je l'ai reprogrammé samedi 10h avec son accord ✓"
Texte : titre "Je gère votre standard 24h/24", checklist :
✓ Réception et qualification des appels 24/7
✓ Prise de RDV synchronisée Planity & Google Agenda
✓ Comptes rendus instantanés par email/SMS
✓ Transfert d'appels sur demande

ONGLET ② — WhatsApp & SMS
Chat (avatar logo WhatsApp SVG) :
Client : "Bonjour, est-ce que vous avez une place mardi à 14h ?"
Serena : "Oui, mardi 14h est disponible ! RDV confirmé, rappel SMS 24h avant 😊"
Client : "Super, c'est pour une coloration."
Serena : "Noté ! Durée estimée 1h30 ajoutée à votre réservation ✓"
Texte : titre "Répondez à tous vos messages automatiquement"
✓ Réponses automatiques WhatsApp & SMS 24/7
✓ Prise de rendez-vous via messagerie
✓ Rappels anti no-show automatiques

ONGLET ③ — Instagram DM
Chat (avatar logo Instagram SVG dégradé) :
Client : "Salut, c'est combien pour un balayage ?"
Serena : "Bonjour ! Tarif balayage dès 75€ selon longueur. Je peux vérifier nos dispo ? 🌟"
Client : "Oui, vendredi après 17h si possible ?"
Serena : "Vendredi 17h30 est dispo ! Je vous réserve — votre prénom ? 😊"
Texte : titre "Gérez vos DM Instagram sans effort"
✓ Réponse automatique aux DM Instagram
✓ Présentation des tarifs et services
✓ Redirection vers la prise de RDV

ONGLET ④ — Prise de RDV
Chat (avatar logo Google Calendar SVG) :
Client : "Je veux prendre RDV pour jeudi."
Serena : "Jeudi j'ai 10h, 14h et 16h30. Lequel vous convient ?"
Client : "14h parfait."
Serena : "RDV confirmé jeudi 14h ! Rappel SMS mercredi soir + ajout Google Agenda ✓"
Texte : titre "Votre agenda toujours à jour automatiquement"
✓ Synchronisation Planity & Google Agenda
✓ Confirmations automatiques SMS/email
✓ Rappels anti no-show 24h avant
✓ Gestion des annulations et reports

ONGLET ⑤ — Transcription
Chat (avatar rouge) :
User : "Tu as reçu des appels pendant mon déplacement ?"
Serena : "3 appels ce matin : ① Marie B. — RDV reporté ✓ ② Client inconnu — tarifs renseignés ✓ ③ Fournisseur — devis en attente"
User : "Envoie-moi les transcriptions complètes."
Serena : "Transcriptions envoyées sur contact@serena-ia.com ✓"
Texte : titre "Chaque appel résumé et transcrit automatiquement"
✓ Transcription complète de chaque appel
✓ Résumé envoyé par email en temps réel
✓ Historique consultable dans votre espace
✓ Zéro boîte vocale manquée

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 6. SECTION GESTION MULTI-CANAL (copier "Piloter sur WhatsApp" de Limova)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Grille 2 colonnes : mockup téléphone (gauche) + texte (droite)
Glow radial rouge derrière la section

Mockup téléphone (frame sombre, border-radius 28px) :
Conversation WhatsApp entre patron et Serena :
Patron : "Serena, j'ai un appel manqué du 06 12 34 56 78 — tu sais qui c'est ?"
Serena : "C'est Mme Dupont, cliente habituelle. Voulait reporter son RDV — je l'ai reprogrammé samedi 10h ✓"
Patron : "Et les appels de ce matin ?"
Serena : "5 appels traités, 3 RDV confirmés, 1 info tarif donnée, 1 démarchage filtré. Tout dans votre espace Serena 📊"

Badge vert : logo WhatsApp SVG + "Disponible sur tous vos canaux"
Titre : "Gérez votre activité depuis n'importe où"
Desc : "Connectée à tous vos outils, Serena exécute vos demandes depuis un simple message. Vous restez aux commandes sans être scotché à votre téléphone."
Checklist :
✓ Connectée à Planity, Google Agenda, HubSpot
✓ Gestion multi-canaux en temps réel
✓ Synthèses quotidiennes sur WhatsApp
✓ Entraînée sur les données de votre entreprise
2 CTA : "Essayer gratuitement" + "Réserver une démo"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 7. AVIS CLIENTS (copier la grille testimonials de Limova)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eyebrow : "+8 AVIS VÉRIFIÉS"
Titre : "Ils nous font confiance"
Badge : ★★★★★ Noté 5,0 sur 5 · Google

Grille 3 colonnes, 6 cards (fond rgba blanc 4%, border, hover translateY -3px + border navy) :
Chaque card : étoiles dorées #FBBF24 | texte italique entre guillemets | avatar initiale colorée + métier (PAS de nom)

1. Avatar M navy #12308C / Chef d'entreprise
"Franchement bluffé par le service. L'automatisation IA nous a permis de réduire énormément les no-show et de gagner un temps fou sur la gestion des appels. Tout est fluide, bien pensé et surtout efficace. Je recommande à 100% pour les entreprises qui veulent passer un cap."

2. Avatar F violet #7C3AED / Fondatrice · Salons de coiffure
"Je suis fondatrice d'une petite chaîne de salons de coiffure, le concept est génial ! Mes clients sont très satisfaits et c'est le plus important. J'ai encore plus de temps pour moi et pour m'occuper de choses plus importantes que les réponses aux appels et messages !"

3. Avatar A vert #059669 / Kinésithérapeute · Normandie
"J'ai utilisé Serena et merci pour cette plate-forme qui m'a permis de mieux gérer mon temps, mes agendas et de m'organiser sur mes plannings. Cela m'a beaucoup simplifié la vie. Je recommande fortement !!!"

4. Avatar Y ambre #D97706 / Prothésiste ongulaire
"Étant prothésiste ongulaire il est très facile d'être débordée avec les messages et les appels. Serena m'a vraiment aidé dans mon organisation et elle m'a permis d'avoir plus de clientèle. Je recommande vivement !"

5. Avatar H bleu #2563EB / Propriétaire de boutique
"Très intéressant pour les détenteurs de boutiques ou commerces physiques. J'ai beaucoup aimé la manière de répondre et la voix très réaliste de l'IA. Je peux continuer de répondre au téléphone, elle le fait à ma place quand je ne suis pas disponible."

6. Avatar P rouge #E30613 / Entrepreneurs
"Impressionnant, gains de temps, des clients gagnés… Bravo ! Je recommande, mon nombre de ventes a explosé et ça m'a permis de gagner beaucoup de temps."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 8. INTÉGRATIONS (copier "+3200 intégrations" de Limova)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eyebrow : "4 INTÉGRATIONS DISPONIBLES"
Titre : "Connectez Serena à vos outils"
Sous-titre : "Serena s'intègre en quelques clics à vos logiciels de réservation, CRM et messageries."

Grille 4 cards avec VRAIS logos SVG inline (fond dark, border, hover translateY + border navy) :

PLANITY — SVG : rect rounded #7B4FE9 + lettre P blanche bold
GOOGLE AGENDA — SVG : rectangle blanc, header #4285F4, cases colorées #34A853/#FBBC04/#EA4335
HUBSPOT — SVG : 3 cercles orange #FF7A59 reliés (cercle centre + 2 satellites), intérieur blanc
WHATSAPP — SVG : rect rounded #25D366 + path bulle téléphone blanche

2 CTA : "Essayer gratuitement" + "Voir toutes les intégrations"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 9. 3 ÉTAPES (copier la section "3 étapes" de Limova)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eyebrow : "DÉMARRAGE SIMPLE"
Titre : "Opérationnel en 3 étapes"
Sous-titre : "Notre équipe vous accompagne pas à pas pour configurer Serena en moins d'une heure."

Grille 3 cards (fond dark, border, hover border navy) :

ÉTAPE 1 — badge "1" navy
Titre : "Créez votre assistant en 60 secondes"
Desc : "Choisissez une voix HD française, donnez un nom et rédigez votre message d'accueil."
Mini mockup UI intégré dans la card :
→ Barre titre navy + grille 2x2 voix (Sylvie HD sélectionnée border navy / Vivienne HD / Thierry HD / Remy HD) + bouton "▶ Écouter"

ÉTAPE 2 — badge "2" navy
Titre : "Configurez son comportement"
Desc : "Définissez horaires, transferts, réponses aux questions fréquentes."
Mini mockup UI : 3 toggles iOS
→ "Répondre aux questions" ON (navy)
→ "Transférer les appels" ON (navy)
→ "Email résumé" OFF (gris)

ÉTAPE 3 — badge "3" ROUGE #E30613
Titre : "Laissez Serena prendre vos appels"
Desc : "Serena décroche, gère les conversations et vous envoie un résumé en temps réel."
Mini mockup UI : liste 2 appels avec badges statut
→ Marie B. — badge "RDV pris" (vert)
→ Jean-Paul R. — badge "Transféré" (jaune)

2 CTA sous la grille : "Essayer gratuitement" + "Réserver une démo"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 10. FAQ (copier le style accordéon de Limova)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Titre grand (72px, letter-spacing -0.05em) : "F.A.Q"
3 onglets filtres : "Général" | "Fonctionnement" | "Intégrations"
Max-width 740px, centré

6 questions accordéon (une ouverte par défaut, chevron rotatif) :
1. Serena convient-il à mon activité ? → Salons, cabinets médicaux, restaurants, hôtels, commerces — adapté à tous
2. Faut-il des compétences techniques ? → Non, opérationnel en 60 secondes, aucun code
3. Les données sont-elles stockées en Europe ? → Oui, 100% UE, RGPD conforme, suppression sur demande
4. Serena peut-elle passer des appels sortants ? → Oui, entrants et sortants (relances, confirmations RDV)
5. En combien de temps peut-on démarrer ? → Moins de 60 secondes
6. Que se passe-t-il si l'IA fait une erreur ? → Transfert automatique + transcription complète disponible

Sous FAQ : "Réserver une démo" + "Nous appeler"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 11. CTA FINAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eyebrow : "COMMENCEZ AUJOURD'HUI"
Titre : "Connectez Serena à tous vos outils du quotidien"
Sous-titre : "Libérez-vous des appels manqués pour vous reconcentrer sur le développement de votre activité."
2 CTA : "Essayer gratuitement" (navy) + "Réserver une démo" (outline blanc)
Badge rating : ★★★★★ Noté 5,0 sur 5 · Google
Glow radial navy en fond

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 12. FOOTER (4 colonnes, style Limova)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Col 1 (large) : Logo Serena + "L'assistante IA qui répond à vos clients 24/7 par téléphone, SMS et messageries." + contact@serena-ia.com
Col 2 "Entreprise" : À propos / Investir / Blog / FAQ
Col 3 "Navigation" : Accueil / Tarifs / Intégrations / Cas d'usage
Col 4 "Légal" : Confidentialité / Mentions légales / CGV / Cookies / DPA RGPD

Bas du footer : © 2026 Serena IA. Tous droits réservés. + icônes sociales SVG (Twitter/X, LinkedIn, Instagram)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## RÈGLES ABSOLUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Tout le site en FRANÇAIS
- Aucun lorem ipsum — uniquement le contenu fourni ci-dessus
- Aucune mention de "Limova" dans le code ou le rendu
- Logo Serena = SVG inline uniquement, jamais image externe
- Rouge #E30613 = accent uniquement (10% max), jamais en fond de section entière
- Logos Planity / Google Agenda / Instagram / WhatsApp / HubSpot = vrais SVG inline, JAMAIS d'emoji
- Responsive : mobile 1 col, tablet 2 cols, desktop 3-5 cols
- Tech stack : React + TypeScript + Tailwind CSS + Framer Motion + Lucide React + shadcn/ui. Il faut que tu mettes le logo qui est en pièce jointe, que la couleur du fond de la landing soit blanche, et que tu mettes les réelles icones de whatsapp instagram, @connector:hubspot:"HubSpot" , google calendar

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2eeb4a7d-2e22-43bd-bb0e-92d1029030cb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

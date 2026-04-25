=====================================================================
BRIEF FIGMA — APPLICATION MOBILE BABIBUS
Version Finale Corrigée et Complète
Localisation intelligente des arrêts de bus
=====================================================================

Tu es un designer UI/UX senior de niveau mondial,
spécialisé dans les applications mobiles natives
iOS et Android les plus qualitatives du marché.
Références : Uber, Google Maps, Citymapper, Moovit.
Ta mission : concevoir tous les écrans de BaBiBUS,
application mobile de localisation des arrêts de bus
en temps réel. Interface révolutionnaire, fluide,
animée et cohérente de bout en bout.
Niveau attendu : Apple Design Award.

=====================================================================
⚠️ RÈGLES ABSOLUES — LIRE AVANT TOUT ⚠️
=====================================================================

RÈGLE 1 — FORMAT MOBILE STRICT
→ Chaque écran = frame 390 x 844 px (iPhone 14)
→ APPLICATION MOBILE NATIVE uniquement
→ JAMAIS de navbar horizontale web
→ JAMAIS de sidebar web
→ JAMAIS de layout desktop
→ Safe area haut 44px + safe area bas 34px
   sur chaque écran sans exception

RÈGLE 2 — SPLASH SCREEN SANS CHARGEMENT VISIBLE
Aucun spinner. Aucune barre de progression.
Aucun texte "Chargement en cours".
Le chargement se fait 100% en arrière-plan,
silencieux et invisible pour l'utilisateur.
L'utilisateur voit uniquement le logo BaBiBUS
sur un fond dégradé élégant. Rien d'autre.
Quand l'app est prête : transition magique
et douce vers la page d'accueil permanente.

RÈGLE 3 — LOGO BABIBUS RÉALISTE ET PROFESSIONNEL
Nom : BaBiBUS
"BaBi" en vert foncé #1B5E20 weight 800
"BUS" en orange #F57C00 weight 800
Police : Poppins Bold ou Nunito Black

Icône du logo :
Bus de ville moderne vu de 3/4 avant, réaliste.
Fenêtres avec reflets, carrosserie orange avec
ombres douces, roues avec jantes, porte coulissante,
rétroviseurs, pare-brise avec transparence.
Pin GPS vert #2E7D32 planté au-dessus du bus,
légèrement incliné, avec une petite ombre portée.

3 versions obligatoires :
→ Version A : couleurs officielles sur fond blanc
→ Version B : intégral blanc (pour fonds colorés)
→ Version C : icône seule sans texte

RÈGLE 4 — PAGE D'ACCUEIL PERMANENTE
S'affiche à CHAQUE ouverture de l'application.
Pas seulement au premier lancement.
Point d'entrée fixe et permanent de BaBiBUS.

RÈGLE 5 — ILLUSTRATION RÉALISTE SUR L'ACCUEIL
Entre le logo en haut et les boutons en bas.
Hauteur maximale : 220 px. Jamais plus.
Style : semi-réaliste de haute qualité.
Scène : bus orange moderne très détaillé
qui s'arrête à un arrêt. 2-3 passagers
consultent BaBiBUS sur leur smartphone.
Végétation verte urbaine. Bâtiments modernes.
Ciel lumineux. Vivante et professionnelle.
Couleurs : orange bus + vert végétation + blanc ville.

RÈGLE 6 — BORDURES ARRONDIES PARTOUT
Tous les éléments interactifs sont arrondis.
Rayons obligatoires et non négociables :
→ Boutons principaux    : 50px (pilule complète)
→ Champs de formulaire  : 16px
→ Cards et surfaces     : 20px
→ Bottom sheets         : 28px (haut uniquement)
→ Popups et modales     : 24px
→ Snackbars             : 50px (pilule)
→ FAB bouton flottant   : 50px (cercle parfait)
→ Avatars               : 50px (cercle parfait)
→ Barre de recherche    : 50px (pilule)
→ Badges et pills       : 50px (pilule)
→ Mini-carte dans form  : 20px
→ Items de liste        : 16px
→ Cases à cocher        : 6px

RÈGLE 7 — FLUIDITÉ ANIMATIONS ET INTERACTIONS
BaBiBUS doit se sentir vivante et réactive.
Aucun écran ne doit sembler statique.

Transitions entre écrans :
→ Navigation push/pop : glissement horizontal
  natif iOS (350ms ease-in-out)
→ Modales et bottom sheets : spring depuis le bas
  (400ms, ressort naturel et doux)
→ Splash → accueil : fade + scale 0.96 → 1
  (600ms ease-out, magique et élégant)
→ Overlay : fade progressif 40% (250ms)
→ Tab bar : glissement horizontal doux (250ms)

Micro-interactions obligatoires :
→ Boutons : compression légère au tap
  (scale 0.97, 150ms, rebond au relâchement)
→ Labels champs : montée animée au focus
  (label flottant vers le haut, 200ms ease-out)
→ Bordure champs : s'allume orange de gauche
  à droite au focus (sweep animation, 200ms)
→ Champ rempli : checkmark vert aparaît
  à droite (scale 0 → 1, 150ms)
→ Tab bar : rebond spring sur onglet actif
  (scale 1 → 1.2 → 1, 250ms)
→ FAB : pulsation douce 2s en boucle
  (scale 1 → 1.06 → 1, pour attirer l'attention)
→ Marqueurs carte GPS : pulse continu en boucle
  (halo qui s'agrandit et s'efface, 2s)
→ Marqueurs arrêts trouvés : apparition cascade
  (50ms de délai entre chaque, scale 0 → 1.2 → 1)
→ Tracé itinéraire : se dessine progressivement
  de départ à arrivée (800ms ease-in-out)
→ Cœur favoris : animation de remplissage au tap
  (scale 1 → 1.4 → 1, vide → orange plein, 300ms)
→ Cards : légère compression au tap
  (scale 0.98, ombre réduite, 100ms)
→ Swipe-to-delete : révélation progressive fond vert
  avec friction réaliste et naturelle
→ Compteurs dashboard admin : incrémentation animée
  de 0 → valeur finale (800ms ease-out)
→ Champs en erreur : tremblement horizontal
  (shake ±4px, 3 cycles, 300ms total)
→ Loading bouton : texte remplacé par spinner
  blanc (fade 200ms)
→ Burger → croix : morph animation (300ms)
→ Snackbars : spring bounce depuis bas,
  auto-dismiss après 3.5s, slide vers le bas
→ Pull-to-refresh : bus orange traverse l'écran
  horizontalement (animation custom BaBiBUS)

États interactifs de chaque composant :
→ Bouton : Normal | Pressed | Loading | Disabled
→ Champ : Empty | Focus | Filled | Error | Success
→ Card : Normal | Pressed | Swiped (delete)
→ Tab icône : Active (orange) | Inactive (gris)
→ FAB : Normal | Pressed | Pulsating
→ Marqueur : Normal | Selected | Pulse

=====================================================================
CHARTE GRAPHIQUE — 3 COULEURS OFFICIELLES UNIQUEMENT
=====================================================================

ORANGE — Couleur principale et dominante
Orange principal    : #F57C00
Orange vif CTA      : #FF6F00
Orange doux         : #FFB74D
Orange très pâle    : #FFF3E0
Orange pressed      : #E65100
Orange shadow       : rgba(245,124,0,0.30)

Usages de l'orange :
→ Fond de tous les headers de navigation
→ Tous les boutons d'action principaux (CTA)
→ FAB bouton flottant
→ Icônes actives de la Bottom Tab Bar
→ Indicateur d'onglet actif (trait sous icône)
→ Badges de numéros de lignes de bus
→ Marqueurs d'arrêts de bus sur la carte
→ Titres importants sur fond blanc
→ Splash screen (fond dégradé haut)
→ Zone haute de la page d'accueil permanente
→ Bordure focus des champs (state active)
→ Spinner et notifications

VERT — Touche élégante et équilibrée
Vert logo foncé     : #1B5E20
Vert principal      : #2E7D32
Vert moyen          : #388E3C
Vert très pâle      : #E8F5E9

Usages du vert :
→ Confirmations et messages de succès
→ Tracé de l'itinéraire sur la carte
→ Marqueur de position de l'utilisateur (GPS)
→ Boutons secondaires (contour vert)
→ Icônes internes aux champs de formulaire
→ Liens cliquables dans les textes
→ Badges "actif", "disponible", "en service"
→ Fond très pâle #E8F5E9 pour la carte
→ Accents décoratifs fins et ponctuels
→ Splash screen (fond dégradé bas)
→ Swipe-to-delete (fond révélé à gauche)

BLANC — Respiration, fond et clarté
Blanc pur           : #FFFFFF
Blanc cassé         : #FAFAFA
Blanc doux          : #F5F5F5

Usages du blanc :
→ Fond de toutes les pages intérieures
→ Texte sur fond orange ou vert foncé
→ Cards, surfaces et bottom sheets
→ Champs de formulaire (fond #FAFAFA)
→ Bottom Tab Bar et popups

Couleurs utilitaires :
Texte principal     : #1A1A1A
Texte secondaire    : #616161
Placeholder         : #9E9E9E
Bordures repos      : #E8E8E8
Erreur uniquement   : #C62828
Succès uniquement   : #2E7D32

Règle d'or 60 / 30 / 10 :
60% Blanc  → fonds, espaces, respirations
30% Orange → headers, boutons, badges, accents
10% Vert   → succès, secondaire, touches fines

Système d'ombres :
Niveau 1 (cards)     : 0 2px 8px rgba(0,0,0,0.08)
Niveau 2 (FAB)       : 0 4px 16px rgba(245,124,0,0.30)
Niveau 3 (modales)   : 0 8px 32px rgba(0,0,0,0.16)
Niveau 4 (sheets)    : 0 -4px 24px rgba(0,0,0,0.12)

Associations élégantes autorisées :
✅ Fond orange + texte blanc + icônes blanches
✅ Fond blanc + titres orange + icônes vertes
✅ Bouton pilule orange + bouton pilule contour vert
✅ Fond #E8F5E9 pour la carte (naturel et doux)
✅ Snackbar pilule verte + texte blanc (succès)
✅ Snackbar pilule rouge + texte blanc (erreur)
✅ Dégradé orange → vert foncé (splash screen)

Interdictions absolues :
❌ Orange et vert côte à côte en grande surface
❌ Texte orange sur fond vert
❌ Texte vert sur fond orange
❌ Plus de 3 couleurs sur un même écran

=====================================================================
SPÉCIFICATIONS TECHNIQUES MOBILES
=====================================================================

Format frame              : 390 x 844 px
Safe area haut            : 44 px (status bar)
Safe area bas             : 34 px (home indicator)
Hauteur header total      : 88 px
Hauteur Bottom Tab Bar    : 83 px total
Hauteur boutons pilule    : 52 px / rayon 50px
Hauteur champs formulaire : 56 px / rayon 16px
Marges latérales          : 20 px de chaque côté
Espacement vertical       : 14 px entre éléments
Police unique             : Inter (toute l'app)

Typographie système :
H1 titre principal        : 28px / weight 700 / #1A1A1A
H2 titre écran            : 22px / weight 600 / #1A1A1A
H3 titre section          : 18px / weight 600 / #1A1A1A
Sous-titre                : 16px / weight 500 / #616161
Corps de texte            : 16px / weight 400 / #616161
Texte secondaire          : 14px / weight 400 / #616161
Caption et labels         : 12px / weight 500 / #9E9E9E
Onglets tab bar           : 10px / weight 500

Navigation utilisateur :
Bottom Tab Bar blanche fixe, hauteur 83px.
4 onglets : Accueil | Recherche | Favoris | Profil
Onglet actif : icône orange + label orange +
indicateur trait orange 24px centré rayon 50px.
Onglets inactifs : icône + label gris #9E9E9E.
Spring bounce 250ms au changement d'onglet.
Fond blanc, bordure top 0.5px #E8E8E8.

Navigation administrateur :
Header orange arrondi bas + burger blanc droite.
Drawer depuis gauche 280px avec overlay 40%.
Pas de Bottom Tab Bar pour l'administrateur.

=====================================================================
FONCTIONNALITÉS — ISSU DU DIAGRAMME DE CAS D'UTILISATION
=====================================================================

UTILISATEUR (passager de bus) peut :
→ S'inscrire sur l'application BaBiBUS
→ Se connecter à son compte
→ Localiser les arrêts de bus proches de lui
  en temps réel grâce au GPS du smartphone
  (via le système de géolocalisation externe)
→ Rechercher un arrêt de bus par son nom
→ Consulter les informations d'un arrêt :
  - Afficher les lignes de bus disponibles
    à cet arrêt
  - Afficher la distance entre l'utilisateur
    et l'arrêt sélectionné
  - Afficher l'itinéraire pour rejoindre l'arrêt
    (via le système de géolocalisation externe)
→ Gérer ses favoris :
  - Ajouter un arrêt en favoris
  - Consulter la liste de ses favoris
  - Supprimer un arrêt de ses favoris

ADMINISTRATEUR peut :
→ Gérer les arrêts de bus :
  - Créer un nouvel arrêt de bus
  - Modifier un arrêt existant
  - Supprimer un arrêt
→ Gérer les lignes de bus :
  - Créer une nouvelle ligne de bus
  - Modifier une ligne existante
  - Supprimer une ligne de bus

SYSTÈME DE GÉOLOCALISATION (acteur externe) :
Sollicité automatiquement pour :
→ Localiser les arrêts proches de l'utilisateur
→ Calculer et afficher l'itinéraire
→ Calculer la distance arrêt ↔ utilisateur

=====================================================================
LISTE COMPLÈTE DES 40 ÉCRANS MOBILES À GÉNÉRER
=====================================================================

Chaque écran = frame Figma 390 x 844 px nommé.

——— SECTION 1 : ONBOARDING (Écrans 01 à 06) ———

ÉCRAN 01 — Splash Screen
⚠️ AUCUN indicateur de chargement sur l'écran.
Chargement 100% silencieux en arrière-plan.

Fond : dégradé vertical premium et élégant.
Orange #F57C00 (55% haut) vers vert foncé
#1B5E20 (45% bas). Transition douce et belle.

Centre absolu de l'écran uniquement :
Logo BaBiBUS version B (intégral blanc) centré.
Bus blanc réaliste très détaillé + pin blanc
légèrement incliné au-dessus du bus.
"BaBi" blanc weight 800 + "BUS" blanc weight 800.
Taille logo : 160px de large.

Animations :
Apparition : fade + scale 0.85 → 1 (500ms).
Respiration douce en boucle (1 → 1.02 → 1, 3s).

Rien d'autre. Pas de spinner. Pas de texte.
Pas de barre. Pas de pourcentage.
Juste le logo sur le dégradé. Simple et premium.
Quand prêt : fade élégant (600ms) vers l'accueil.

ÉCRAN 02 — Page d'accueil PERMANENTE
⚠️ S'AFFICHE À CHAQUE OUVERTURE DE L'APPLICATION.

Animation d'entrée générale : stagger descendant.
Chaque zone aparaît avec 150ms de délai
(slide-up 20px + fade, 400ms ease-out).

ZONE HAUTE — 32% de l'écran :
Fond orange #F57C00.
Coins inférieurs arrondis rayon 36px (courbe douce).
Logo BaBiBUS version B blanc centré, 130px large.
Bus blanc réaliste + pin blanc incliné.
"BaBi" blanc weight 800 + "BUS" blanc weight 800.
Espacement vertical équilibré autour du logo.

ZONE ILLUSTRATION — 30% de l'écran :
Fond blanc #FFFFFF.
Illustration semi-réaliste premium centrée.
Hauteur 220px maximum, jamais plus.
Bus orange moderne très détaillé à un arrêt de bus.
2-3 passagers avec smartphones (BaBiBUS visible).
Végétation verte urbaine réaliste, bâtiments,
ciel clair et lumineux. Vivante et mémorable.

ZONE BOUTONS — 38% de l'écran :
Fond blanc #FFFFFF.
Titre "Bienvenue sur BaBiBUS"
22px / weight 700 / #1A1A1A / centré.
Sous-titre "Trouvez votre bus, partout,
en temps réel" 14px / #616161 / centré.
Espacement 28px.

Bouton 1 — pilule orange pleine :
Rayon 50px / hauteur 52px / full-width / 20px marges.
Fond #F57C00. Ombre niveau 2 orange.
[→ blanc] "Se connecter" blanc weight 600.
Pressed : scale 0.97 + fond #E65100 (150ms).

Espacement 14px.

Bouton 2 — pilule contour vert :
Rayon 50px / hauteur 52px / full-width.
Fond blanc. Bordure 1.5px #2E7D32.
[personne+ vert] "S'inscrire" vert weight 600.
Pressed : scale 0.97 + fond #E8F5E9 (150ms).

Trait vert décoratif 40px centré opacité 20%.
Safe area basse 34px respectée.

ÉCRAN 03 — Inscription
Transition : slide depuis la droite (push natif).
Header orange arrondi bas (rayon 24px, 88px).
Logo version C blanc 36px gauche +
"Créer un compte" blanc weight 600 centré.
Fond blanc #FFFFFF.

Titre "Créer un compte" orange 22px weight 700.
Sous-titre "Rejoignez BaBiBUS" gris 14px centré.
Séparateur vert décoratif 40px centré opacité 25%.

Champs animés (rayon 16px, 56px, fond #FAFAFA,
bordure 1px #E8E8E8) :
Au focus : label flottant monte (200ms ease-out)
+ bordure sweep orange de gauche à droite.
Au filled : ✓ vert scale 0→1 à droite (150ms).

[icône personne vert] Nom
[icône personne vert] Prénom
[icône email vert] Adresse email
[icône cadenas vert] Mot de passe + icône œil vert
[icône cadenas vert] Confirmer mot de passe

Bouton pilule orange full-width "Créer mon compte" :
Normal | Loading (spinner blanc) | Success (✓ vert).

Texte bas centré 14px : "Déjà un compte ? " +
lien souligné vert weight 500 "Se connecter"

ÉCRAN 04 — Inscription avec erreurs
Identique à l'écran 03.
Champs invalides : shake ±4px 3 cycles (300ms) +
bordure rouge 1.5px #C62828 + label rouge.
Messages erreur rouge 12px glissent vers le bas
(slide-down 200ms) sous chaque champ invalide.
Exemples : "Ce champ est obligatoire" /
"Email invalide" / "Mots de passe différents"

ÉCRAN 05 — Connexion
Transition : slide depuis la droite.
Header orange arrondi bas + logo C blanc gauche.
Fond blanc.
Titre "Bon retour !" orange 22px weight 700.
Sous-titre "Connectez-vous à BaBiBUS" gris 14px.
Séparateur vert décoratif 40px.

Champs animés identiques (rayon 16px, 56px) :
[icône email vert] Adresse email
[icône cadenas vert] Mot de passe + icône œil vert

Lien vert #2E7D32 aligné droite 14px :
"Mot de passe oublié ?"

Bouton pilule orange full-width "Se connecter" :
Normal | Loading | Success → redirect accueil.

Texte bas : "Nouveau sur BaBiBUS ? " +
lien vert "S'inscrire"

ÉCRAN 06 — Connexion avec erreurs
Identique à l'écran 05 avec :
Champs invalides : shake + bordures rouges.
Message d'erreur rouge sous les champs :
"Email ou mot de passe incorrect."

——— SECTION 2 : ESPACE UTILISATEUR (07 à 24) ———

ÉCRAN 07 — Accueil Carte (onglet 1)
Transition : fade élégant depuis la connexion.
Status bar blanche (heure + signal + batterie).

Barre de recherche pilule (rayon 50px) blanche
flottante en haut (20px marges). Ombre niveau 1.
Icône loupe orange à gauche. Placeholder gris :
"Rechercher un arrêt BaBiBUS..."
Au focus : légère expansion scale horizontal 1.02.

Carte plein écran fond #E8F5E9.
Rues simulées : rectangles blancs bordure #E0E0E0.
Marqueur vert utilisateur + halo pulse continu
(scale 1 → 1.8, opacité 1 → 0, 2s en boucle).

FAB orange (rayon 50px, 56px) bas droite.
Ombre niveau 2 orange.
Pulsation douce 2s en boucle pour attirer l'attention.
Label pill orange "Arrêts proches" à gauche du FAB.
Positionné 16px au-dessus de la Bottom Tab Bar.

Bottom Tab Bar blanche. "Accueil" actif orange.
Indicateur orange + rebond spring au tap.

ÉCRAN 08 — Localisation en cours
Carte en fond (overlay blanc 12%).
Animation d'ondes GPS depuis le centre :
3 cercles verts concentriques s'agrandissent
et s'effacent en cascade (300ms décalé chacun).
Card arrondie (rayon 20px) blanche centrée 280px.
Ombre niveau 3. Scale 0.85 → 1 à l'apparition.
Logo BaBiBUS version A 56px centré.
Texte orange "Localisation en cours..." 14px.
Aucun spinner sur l'interface.
Les ondes GPS suffisent comme indication visuelle.

ÉCRAN 09 — Erreur géolocalisation
Carte en fond.
Overlay noir 30% fade progressif (250ms).
Bottom sheet (rayon 28px) spring depuis le bas.
Pill grise drag (rayon 50px, 40x4px) centrée haut.
Icône GPS orange barrée 48px centrée.
"Géolocalisation désactivée" weight 600 18px #1A1A1A.
Texte gris 14px centré explicatif.
Bouton pilule orange full-width :
"Aller dans les paramètres"
Bouton pilule contour vert full-width : "Annuler"
Bottom sheet draggable vers le bas pour fermer.

ÉCRAN 10 — Aucun arrêt trouvé
Carte + marqueur vert pulse utilisateur.
Bottom sheet (rayon 28px) 50% écran :
Pill grise drag centrée haut.
Illustration : bus seul avec float animation douce
(scale 1 → 1.03 → 1, 3s en boucle).
"Aucun arrêt trouvé" 18px weight 600 #1A1A1A.
Texte gris : "Aucun arrêt BaBiBUS dans votre zone."
Bouton pilule contour orange "Élargir la zone".
Bouton pilule contour vert "Réessayer".

ÉCRAN 11 — Arrêts proches trouvés
Carte plein écran fond #E8F5E9.
Marqueur vert utilisateur + halo pulse continu.
Marqueurs orange arrêts : aparition cascade
(50ms de délai entre chaque marqueur,
scale 0 → 1.2 → 1 spring pour chacun).

Bottom sheet (rayon 28px) spring depuis le bas.
Draggable entre 40% et 85% de la hauteur écran.
Pill grise drag (rayon 50px) centrée haut.
"Arrêts proches" weight 600 #1A1A1A +
badge pill orange "X arrêts" blanc.

Items arrêts (rayon 16px) en stagger fade :
[Rond orange 36px + bus blanc] nom arrêt weight 500
[pill orange rayon 50px] "Ligne XX"
[pill vert pâle rayon 50px] "250 m"
Au tap : scale 0.98 + fond #FFF3E0 (100ms).
Séparateur doux #E8E8E8 entre les items.

ÉCRAN 12 — Popup callout sur marqueur
Marqueur orange sélectionné : scale → 1.3 spring.
Popup (rayon 24px) blanche 220px de large.
Ombre niveau 2. Scale 0.8 → 1 + fade (250ms).
Nom arrêt weight 600 #1A1A1A.
[pill orange] numéro ligne.
[pill vert pâle] distance depuis position.
Bouton pilule orange small "Voir les détails →".
Petite flèche de connexion vers le marqueur.

ÉCRAN 13 — Rechercher un arrêt (onglet 2)
Transition : slide horizontal natif depuis tab bar.
Header orange arrondi bas "Rechercher" blanc.
Barre pilule (rayon 50px) active en focus immédiat.
Bordure orange animée sweep (200ms).
Icône loupe orange. Clavier iOS visible 40% bas.
Résultats en stagger fade depuis le haut :
[Rond orange 36px bus] nom arrêt weight 500 |
[pill orange] Ligne | [pill vert pâle] distance.
Item actif : fond #FFF3E0 + bordure left orange 3px.

ÉCRAN 14 — Recherche sans résultat
Header orange arrondi "Rechercher".
Illustration : loupe avec oscillation douce
(±5°, 2s en boucle). Fade depuis état chargé.
"Aucun résultat trouvé" weight 600 #1A1A1A.
Texte gris suggestion 14px.

ÉCRAN 15 — Consulter les informations d'un arrêt
Transition : slide depuis la droite (push natif).
Header orange arrondi :
← blanc + nom de l'arrêt blanc weight 600.

Mini-carte (rayon 20px, 170px) fond #E8F5E9 :
marqueur orange bounce à l'arrivée de l'écran
(scale 0 → 1.2 → 1 spring, 300ms).

Cards (rayon 20px) en stagger aparition (150ms) :

Card 1 — Lignes de bus disponibles :
Label vert small uppercase "LIGNES DE BUS"
Pills orange (rayon 50px) : "Ligne 01" "Ligne 42"
(issu de : afficher les lignes de bus)

Card 2 — Distance et durée :
Label vert small uppercase "DISTANCE"
[icône GPS vert] Distance calculée depuis position.
[horloge orange] Durée estimée à pied.
Pill vert pâle "À X min de vous".
(issu de : afficher la distance)

Bouton pilule vert plein full-width (rayon 50px) :
Ombre verte niveau 2.
[icône carte blanche] "Voir l'itinéraire"
→ issu de : afficher l'itinéraire.

Bouton pilule contour orange full-width (rayon 50px) :
[icône cœur orange] "Ajouter aux favoris"
→ cœur vide → plein (scale 1→1.4→1, 300ms).
→ issu de : ajouter en favoris.

ÉCRAN 16 — Afficher les lignes de bus d'un arrêt
Transition : slide depuis droite.
Header orange arrondi + "Lignes disponibles" blanc.
Cards (rayon 20px) en stagger 100ms :
[Badge pill orange 44px + numéro blanc bold]
Nom de la ligne weight 500 #1A1A1A.
[pill vert pâle] "Toutes les 15 min".
[icône bus vert à droite]
Issu de : afficher les lignes de bus.

ÉCRAN 17 — Afficher l'itinéraire
Transition : slide depuis droite.
Header orange arrondi ← "Itinéraire" blanc.
Carte (rayon 20px, 58% écran) fond #E8F5E9 :
Marqueur vert = position départ (utilisateur).
Marqueur orange = arrêt de bus destination.
Tracé vert #2E7D32 épais 3px se dessine
progressivement de départ à arrivée (800ms).
Arrêts intermédiaires visibles sur le parcours.

Bottom sheet (rayon 28px, 42% écran) spring :
Pill grise drag centrée.
[icône horloge orange] Durée weight 600 orange.
[icône route vert] Distance weight 600 vert.
Séparateur doux #E8E8E8.
Étapes textuelles gris 14px en liste.
Bouton pilule orange full-width :
"Démarrer la navigation →"
Issu de : afficher l'itinéraire.

ÉCRAN 18 — Mes favoris vide (onglet 3)
Transition : slide horizontal depuis tab bar.
Header orange "Mes favoris" blanc.
Centre de l'écran :
Bus + cœur avec float animation douce (3s boucle).
"Aucun favori ajouté" weight 600 18px #1A1A1A.
"Ajoutez des arrêts pour les retrouver rapidement."
Texte gris 14px centré.
Bouton pilule orange "Explorer les arrêts".
Bouton pilule contour vert "Rechercher un arrêt".
Issu de : consulter la liste des favoris (vide).

ÉCRAN 19 — Mes favoris avec données (onglet 3)
Header orange "Mes favoris" blanc +
compteur gris small "X favoris".
Items (rayon 16px) en liste avec date d'ajout :
[Rond orange 40px bus blanc] nom arrêt weight 500 |
[pill orange] ligne | [pill vert pâle] distance |
[icône cœur orange plein à droite]
Date d'ajout gris 12px sous le nom.
Swipe gauche : révélation progressive fond vert
arrondi + icône corbeille blanche (friction réaliste).
Suppression : slide + fade + reflow animé de la liste.
Issu de : consulter + supprimer des favoris.

ÉCRAN 20 — Mon profil (onglet 4)
Transition : slide horizontal depuis tab bar.
Header orange "Mon profil" blanc.
Avatar (rayon 50px, 68px) fond orange +
initiales blanches 24px weight 700.
Ombre orange niveau 1.
Nom + prénom weight 700 18px #1A1A1A.
Email gris 14px.
Pill verte (rayon 50px) "Utilisateur actif".
Séparateur #E8E8E8.
Label vert uppercase small "MON COMPTE".
Items (rayon 16px, 52px, bordure bottom #E8E8E8) :
[icône vert 20px] Label weight 500 #1A1A1A →
Modifier mon profil.
Notifications.
Historique des recherches.
Langue de l'application.
À propos de BaBiBUS.
Chevron tourne légèrement au tap (15°, 150ms).
Séparateur.
Bouton pilule rouge full-width "Se déconnecter".

ÉCRAN 21 — Modifier mon profil
Transition : slide depuis droite.
Header orange arrondi ← "Modifier mon profil".
Formulaire pré-rempli animé :
[personne vert] Nom (pré-rempli, état filled)
[personne vert] Prénom (pré-rempli, état filled)
[email vert] Email (pré-rempli, état filled)
Bouton pilule orange full-width "Sauvegarder".
Bouton pilule contour vert full-width "Annuler".

ÉCRAN 22 — Modifier profil (succès)
Identique à l'écran 20 avec snackbar verte en bas :
Pilule verte (rayon 50px) #2E7D32 spring.
[✓ blanc] "Profil mis à jour avec succès !" white.
Auto-dismiss 3.5s.

ÉCRAN 23 — À propos de BaBiBUS
Header orange ← "À propos".
Logo BaBiBUS version A centré 100px.
Nom "BaBiBUS" 22px weight 700 orange centré.
Version "v1.0.0" gris centré.
Cards (rayon 20px) avec liens verts :
Politique de confidentialité →
Conditions d'utilisation →
Nous contacter →
Note de bas de page : "Développé avec ❤️ pour
faciliter vos déplacements en bus."

ÉCRAN 24 — Mot de passe oublié
Transition : slide depuis droite.
Header orange arrondi ← "Mot de passe oublié".
Fond blanc.
Titre orange "Mot de passe oublié" 22px weight 700.
Texte gris 14px centré :
"Entrez votre email pour recevoir un lien
de réinitialisation."
Champ email animé (rayon 16px, 56px).
Bouton pilule orange :
"Envoyer le lien de réinitialisation"
États : Normal | Loading | Success (✓ + texte vert).
Lien vert "Retour à la connexion".

——— SECTION 3 : ADMINISTRATEUR (25 à 40) ———

ÉCRAN 25 — Connexion administrateur
Header orange "Espace Administrateur" blanc.
Fond blanc.
Titre "Accès Admin" orange 22px weight 700.
Sous-titre gris.
Champs animés (rayon 16px, 56px) :
[email vert] Adresse email
[badge vert] Matricule administrateur
[cadenas vert] Mot de passe + icône œil vert
Bouton pilule orange "Connexion Administrateur".
Loading | Success → redirect dashboard.

ÉCRAN 26 — Dashboard administrateur
Transition : fade depuis connexion admin.
Header orange arrondi bas, 88px :
Logo B blanc gauche 80px +
icône burger blanc droite.
Tap burger : hamburger → croix morph (300ms).
Fond #FAFAFA.

Card bienvenue (rayon 20px) #FFF3E0
bordure left 4px orange :
"Bonjour, Administrateur 👋" orange weight 700.
"Gérez l'application BaBiBUS" gris 14px.

Label vert uppercase "STATISTIQUES EN TEMPS RÉEL".
Grille 2x2 cards (rayon 20px, bordure #E8E8E8) :
Compteurs animés 0 → valeur finale (800ms) :
[chiffre orange 28px bold] [label gris 12px]
Arrêts actifs | Lignes | Utilisateurs | Favoris.

Label vert uppercase "GESTION".
2 grandes cards (rayon 20px, ombre niveau 1) :
[Rond orange 48px + icône blanche]
"Gérer les arrêts de bus"
description gris + "Accéder →" orange.
[Rond orange 48px + icône blanche]
"Gérer les lignes de bus"
description gris + "Accéder →" orange.
Au tap card : scale 0.98 + ombre réduite (100ms).

ÉCRAN 27 — Drawer menu administrateur
Overlay noir 40% fade progressif (300ms).
Drawer blanc (rayon 24px droite) spring 280px.

Header drawer 130px fond orange arrondi :
Logo B blanc centré 90px.
"Administration BaBiBUS" blanc 14px weight 300.

Items (rayon 16px, 52px, padding left 16px) :
[icône vert 20px] Label weight 500 #1A1A1A.
Item actif : fond #E8F5E9 + bordure left vert 3px
+ texte vert weight 600.
Éléments du menu :
Dashboard
Arrêts de bus
Lignes de bus
Séparateur #E8E8E8.
[icône rouge] "Se déconnecter" rouge #C62828.
Tap overlay ou swipe gauche → fermeture spring.

ÉCRAN 28 — Liste des arrêts de bus
Header orange "Arrêts de bus" blanc.
Barre pilule recherche (rayon 50px) par nom.
Compteur gris small "X arrêts enregistrés".
Skeleton loading pendant le chargement :
3 cards grises animées (shimmer orange).
Cards (rayon 20px, ombre niveau 1) :
[Rond orange 40px + bus blanc] nom arrêt weight 600
adresse gris 12px | lat/long gris 12px.
[icône crayon vert] Modifier |
[icône corbeille rouge] Supprimer.
Pull-to-refresh : bus orange traverse (animation custom).
FAB orange (rayon 50px, 56px) "+" blanc bas droite.
Scale 0 → 1 spring au montage de l'écran.

ÉCRAN 29 — Créer un arrêt
Transition : slide depuis le bas (modal push).
Header orange arrondi ← "Créer un arrêt" blanc.
Fond blanc.
Labels flottants orange animés au focus.
Champs (rayon 16px, 56px, fond #FAFAFA) :
[icône localisation vert] Nom de l'arrêt
[icône GPS vert] Latitude (clavier numérique)
[icône GPS vert] Longitude (clavier numérique)
[icône texte vert] Adresse complète

Mini-carte (rayon 20px, 160px) fond #E8F5E9 :
Tap → pin orange bounce (scale 0 → 1.2 → 1).
Drag pin → trailing fluide et réaliste.
Les coordonnées se mettent à jour en temps réel.
Texte vert 12px : "Appuyez pour placer l'arrêt"

Bouton pilule orange full-width "Enregistrer" :
Normal | Loading spinner | Success ✓.
Bouton pilule contour vert full-width "Annuler".

ÉCRAN 30 — Créer un arrêt (erreurs)
Identique à l'écran 29.
Champs invalides : shake ±4px 3 cycles (300ms) +
bordures rouges 1.5px arrondies.
Messages rouge 12px slide-down sous champs.

ÉCRAN 31 — Snackbar "Cet arrêt existe déjà"
Afficher l'écran 28 avec snackbar en bas :
Pilule rouge (rayon 50px) #C62828 spring.
[✗ blanc] "Cet arrêt existe déjà" weight 500.
Ombre rouge rgba(198,40,40,0.30).
Positionnée 20px du bas, centrée.
Auto-dismiss 3.5s + slide vers le bas.

ÉCRAN 32 — Snackbar "Arrêt créé avec succès"
Afficher l'écran 28 avec snackbar en bas :
Pilule verte (rayon 50px) #2E7D32 spring.
[✓ blanc] "Arrêt créé avec succès !" weight 500.
Ombre verte rgba(46,125,50,0.30).
Auto-dismiss 3.5s.

ÉCRAN 33 — Modifier un arrêt
Transition : slide depuis droite.
Identique à l'écran 29. Champs pré-remplis.
Tous les champs en état filled dès l'ouverture.
Header orange "Modifier l'arrêt" blanc.
Bouton pilule orange full-width "Mettre à jour".
Bouton pilule contour vert full-width "Annuler".

ÉCRAN 34 — Confirmer suppression d'un arrêt
Fond de l'écran 28 flouté (blur 4px, fade 200ms).
Bottom sheet (rayon 28px) spring depuis le bas.
Pill grise drag (rayon 50px) centrée haut.
Rond rouge clair 60px (rayon 50px) +
icône corbeille rouge 28px centrée.
"Supprimer cet arrêt ?" weight 700 18px #1A1A1A.
Texte gris 14px centré :
"Cette action est irréversible.
L'arrêt sera définitivement supprimé."
Bouton pilule rouge full-width :
"Supprimer définitivement"
Pressed : scale 0.97 + fond #B71C1C (150ms).
Bouton pilule contour vert full-width "Annuler".
Draggable vers le bas pour annuler.

ÉCRAN 35 — Liste des lignes de bus
Header orange "Lignes de bus" blanc.
Barre pilule recherche (rayon 50px).
Compteur gris "X lignes enregistrées".
Skeleton loading pendant le chargement.
Cards (rayon 20px, ombre niveau 1) :
[Badge pill orange 48px + numéro blanc bold 18px]
Nom ligne weight 600 #1A1A1A.
[pill vert pâle] "X arrêts desservis".
[icône crayon vert] | [icône corbeille rouge]
Pull-to-refresh animation bus custom.
FAB orange (rayon 50px) "+" blanc bas droite.

ÉCRAN 36 — Créer une ligne de bus
Transition : slide depuis le bas.
Header orange ← "Créer une ligne de bus" blanc.
Champs animés (rayon 16px, labels orange flottants) :
[icône numéro vert] Numéro de ligne (ex: 01)
[icône texte vert] Nom de la ligne

Couleur de la ligne :
Row de 8 cercles (rayon 50px, 40px diamètre).
Orange et vert en premier (mis en avant visuellement).
Cercle sélectionné : bordure noire 2.5px +
scale spring 250ms (1 → 1.15 → 1).

Section "Arrêts desservis" :
Barre de recherche mini pilule (rayon 50px).
Liste scrollable max 4 items visibles, 52px chacun :
[Case à cocher rayon 6px orange] nom arrêt.
Coche se dessine (stroke animation 200ms).
Drag-to-reorder pour ordonner les arrêts.

Bouton pilule orange "Enregistrer la ligne".
Bouton pilule contour vert "Annuler".

ÉCRAN 37 — Créer une ligne (erreurs)
Identique à l'écran 36.
Champs invalides : shake + erreurs rouges.
"Veuillez revoir vos informations."

ÉCRAN 38 — Snackbar "Cette ligne existe déjà"
Afficher l'écran 35 avec snackbar rouge en bas :
Pilule rouge (rayon 50px) #C62828 spring.
[✗ blanc] "Cette ligne existe déjà" weight 500.
Auto-dismiss 3.5s.

ÉCRAN 39 — Snackbar "Ligne créée avec succès"
Afficher l'écran 35 avec snackbar verte en bas :
Pilule verte (rayon 50px) #2E7D32 spring.
[✓ blanc] "Ligne de bus créée avec succès !"
Auto-dismiss 3.5s.

ÉCRAN 40 — Confirmer suppression d'une ligne
Fond de l'écran 35 flouté.
Bottom sheet (rayon 28px) spring depuis le bas.
Pill grise drag centrée haut.
Rond rouge clair 60px + corbeille rouge.
"Supprimer cette ligne ?" weight 700 18px.
Texte gris 14px centré :
"Les données seront perdues définitivement.
Les arrêts associés ne seront pas supprimés."
Bouton pilule rouge "Supprimer définitivement".
Bouton pilule contour vert "Annuler".

=====================================================================
COMPOSANTS RÉUTILISABLES — PAGE "COMPONENTS"
=====================================================================

LOGOS (3 versions) :
→ Logo A — couleurs officielles (fond blanc)
→ Logo B — intégral blanc (fonds colorés)
→ Logo C — icône seule (petits espaces)

NAVIGATION :
→ Status bar iOS sombre (sur fond orange)
→ Status bar iOS claire (sur fond blanc)
→ Header orange arrondi sans retour
→ Header orange arrondi avec ← blanc
→ Header orange arrondi avec burger ☰
→ Bottom Tab Bar (4 variantes onglet actif)
→ Bottom Tab Bar avec badge orange notification
→ Drawer administrateur complet

BOUTONS (pilule rayon 50px, 52px) — 4 états :
→ Pilule orange pleine + ombre orange
→ Pilule contour vert (fond blanc)
→ Pilule verte pleine + ombre verte
→ Pilule rouge pleine
→ Pilule orange small (popup carte)
→ Pilule chargement (spinner blanc intégré)
→ FAB orange 56px + ombre + pulsation

CHAMPS (rayon 16px, 56px) — 5 états complets :
→ Empty (label centré, icône verte)
→ Focus (label flottant + sweep orange)
→ Filled (label flottant + ✓ vert droit)
→ Error (bordure rouge + message + shake)
→ Success (bordure verte + ✓)
→ Textarea arrondie (rayon 16px)
→ Case à cocher orange animée (rayon 6px)
→ Barre de recherche pilule (rayon 50px)
→ Color picker cercles (rayon 50px)

NOTIFICATIONS :
→ Snackbar pilule verte + ombre verte (bas)
→ Snackbar pilule rouge + ombre rouge (bas)
→ Toast succès pilule verte (haut de l'écran)
→ Bottom sheet arrondie vide (rayon 28px)
→ Popup callout carte (rayon 24px)

CARDS (rayon 20px) — 3 états :
→ Card arrêt de bus (nom + GPS + actions)
→ Card ligne de bus (badge + nom + arrêts)
→ Card favori avec date d'ajout
→ Card statistique admin (compteur animé)
→ Item liste arrondi (rayon 16px)
→ Item swipe-to-delete (fond vert + corbeille)
→ Skeleton loading (shimmer animé)

CARTE ET MARQUEURS :
→ Marqueur utilisateur vert + halo pulse animé
→ Marqueur arrêt orange + bus blanc réaliste
→ Tracé itinéraire vert épais + flèches direction
→ Ondes GPS concentriques vertes (localisation)

BADGES ET PILLS (rayon 50px) :
→ Pill orange ligne de bus (texte blanc)
→ Pill vert pâle distance (texte vert)
→ Pill vert statut "En service"
→ Pill rouge "Hors service"
→ Badge notification orange (chiffre blanc)
→ Pill vert "Utilisateur actif"

ÉTATS SPÉCIAUX :
→ État vide animé (illustration float + boutons)
→ Skeleton loading (shimmer cards grises)
→ Ondes GPS animation localisation
→ Pull-to-refresh bus orange custom

=====================================================================
ORGANISATION DANS FIGMA
=====================================================================

PAGE 1 — "Logo & Branding"
Logo 3 versions complètes.
Illustration page d'accueil seule.
Palette officielle avec codes hex et usages.
Typographie Inter avec échelle complète.
Pack d'icônes : Phosphor Icons Outline.

PAGE 2 — "Flows"
Section A — "Onboarding" : Écrans 01 à 06
Section B — "Utilisateur" : Écrans 07 à 24
Section C — "Administrateur" : Écrans 25 à 40
Gap 48px entre frames.
Nommage strict :
"01 — Splash" / "02 — Accueil Permanent" /
"03 — Inscription" etc.
Flèches de prototype entre les frames connectées.

PAGE 3 — "Components"
Auto-layout activé sur tous les composants.
Variantes et états nommés précisément.
Organisés par catégories claires.

PAGE 4 — "Prototype Flow"
Tous les écrans connectés avec animations.
Transitions spring documentées.

=====================================================================
CHECKLIST FINALE — TOUT DOIT ÊTRE COCHÉ ✅
=====================================================================

✅ 390 x 844 px pour CHAQUE frame sans exception
✅ APPLICATION MOBILE NATIVE — zéro élément web
✅ SPLASH : logo seul sur dégradé orange→vert.
   ZÉRO indicateur de chargement visible.
   Chargement 100% silencieux en arrière-plan.
✅ Logo réaliste "BaBi" vert #1B5E20 weight 800 +
   "BUS" orange #F57C00 weight 800 + bus détaillé
   + pin GPS vert incliné (Poppins Bold)
✅ Illustration semi-réaliste sur l'accueil (220px max)
✅ Page d'accueil 02 PERMANENTE à chaque ouverture
✅ BORDURES ARRONDIES : boutons 50px / champs 16px /
   cards 20px / sheets 28px / snackbars 50px /
   barre recherche 50px / avatars 50px / FAB 50px
✅ FLUIDITÉ : transitions spring sur chaque écran
✅ ANIMATIONS : labels flottants / tracé itinéraire /
   counters stats / cascade marqueurs / float états
   vides / cœur favoris / coche / drag pin carte
✅ MICRO-INTERACTIONS : scale boutons pressed /
   shake champs erreur / rebond tab bar /
   pulsation FAB / morph burger / pull-to-refresh
✅ ÉTATS COMPLETS sur chaque composant :
   Normal / Pressed / Loading / Error / Success
✅ COHÉRENCE : même rayon, même police Inter,
   même pack Phosphor, même espacement partout
✅ TOUTES les fonctionnalités couvertes :
   S'inscrire / Se connecter / Localiser arrêts /
   Rechercher arrêt / Consulter infos arrêt /
   Afficher lignes / Afficher distance /
   Afficher itinéraire / Ajouter favori /
   Consulter favoris / Supprimer favori /
   Créer arrêt / Modifier arrêt / Supprimer arrêt /
   Créer ligne / Modifier ligne / Supprimer ligne
✅ Règle 60% blanc / 30% orange / 10% vert
✅ Safe area 44px haut + 34px bas sur chaque écran
✅ Bottom Tab Bar orange sur tous les écrans user
✅ Snackbars pilule positionnées en bas d'écran
✅ Bottom sheets draggables avec pill de drag grise
✅ Skeleton loading sur toutes les listes
✅ Pull-to-refresh avec animation bus orange custom
✅ Interface révolutionnaire, fluide, cohérente
   et absolument magnifique pour BaBiBUS
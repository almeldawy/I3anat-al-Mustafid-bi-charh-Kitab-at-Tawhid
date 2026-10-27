# Iʿânat al-Mustafîd bi-charh Kitâb at-Tawhîd — traduction française

Site de lecture de la traduction française du commentaire du Cheikh Sâlih ibn Fawzân al-Fawzân sur le *Kitâb at-Tawhîd* du Cheikh Muhammad ibn ʿAbd al-Wahhâb.

## Organisation du dépôt

Tous les fichiers sont à la racine du dépôt :

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil : présentation du livre, avancement, sommaire |
| `introduction.html` | Introduction du livre |
| `introduction-commentateur.html` | Introduction du commentateur |
| `chapitre-01.html` … `chapitre-67.html` | Un fichier par chapitre |
| `sommaire.js` | **La liste des pages** : menu de gauche, sommaire de l'accueil, boutons précédent/suivant |
| `style.css` | La mise en forme commune à toutes les pages |
| `modele-chapitre.html` | Modèle vide pour préparer un nouveau chapitre |

## Ajouter un nouveau chapitre

### Méthode simple (recommandée)

1. Ouvrez la page **`ajouter-chapitre.html`** du site (lien discret en bas de l'accueil).
2. Déposez le fichier Word du chapitre (ou collez son texte), vérifiez le numéro et le titre, ajoutez le titre arabe.
3. Cliquez sur **Mettre en forme** : un aperçu s'affiche avec la présentation du site.
4. **Téléchargez** la page (`chapitre-12.html`…) et déposez-la sur GitHub (*Add file → Upload files*).
5. **Copiez la ligne** proposée et collez-la à la fin de la liste `PAGES` dans `sommaire.js` (crayon ✎ sur GitHub).

### Si vous déposez directement votre propre fichier HTML

Nommez-le `chapitre-12.html` (toujours deux chiffres), ajoutez sa ligne dans `sommaire.js`, et vérifiez qu'il contient la ligne
`<script src="sommaire.js"></script>` avant `</body>`. La mise en forme est alors corrigée automatiquement à l'affichage
(polices, espaces, guillemets, retours à la ligne, arabe, poèmes) et le titre est ajouté d'après `sommaire.js`.

### Ce que la mise en forme automatique corrige

- polices et couleurs venant de Word / Google Docs (supprimées : toutes les pages ont la même police) ;
- espaces en trop, espaces insécables avant « : ; ! ? » et à l'intérieur des « guillemets » ;
- apostrophes typographiques (’), points de suspension (…), guillemets droits "…" → « … » ;
- paragraphes coupés au milieu d'une phrase (recollés) et doubles retours à la ligne ;
- versets et hadiths en arabe placés dans des encadrés, suivis de leur traduction ;
- arabe mélangé au français dans un même paragraphe (séparé) ;
- vers de poésie arabe regroupés (deux hémistiches par ligne) avec leur traduction regroupée.

## Mise en forme du texte arabe dans un chapitre

```html
<!-- Verset du Coran -->
<p class="ar-bloc coran" dir="rtl" lang="ar">﴿ ... ﴾</p>
<p class="trad">« Traduction du verset. »</p>

<!-- Hadith ou poème -->
<p class="ar-bloc" dir="rtl" lang="ar">...</p>
<p class="trad">« Traduction. »</p>

<!-- Mot arabe dans une phrase française -->
<span class="ar" lang="ar" dir="rtl">ﷺ</span>

<!-- Intertitre -->
<h2>Les enseignements de ce chapitre</h2>
```

## Publication avec GitHub Pages

Paramètres du dépôt → **Pages** → Source : *Deploy from a branch* → branche `main`, dossier `/ (root)`.

## Marque-pages et suivi de lecture

- La position de lecture de chaque chapitre est mémorisée automatiquement ; en rouvrant un chapitre, le site propose de reprendre au bon endroit.
- Un chapitre lu jusqu'au bout est marqué « ✓ lu » (on peut aussi le marquer à la main en fin de chapitre).
- L'icône 🔖 de la barre du haut ouvre le panneau des marque-pages : marquer le passage affiché (avec une note facultative), retrouver ou supprimer ses marque-pages, et les exporter/importer pour passer d'un appareil à l'autre.
- Tout est enregistré dans le navigateur du lecteur (aucun compte, aucun serveur).
- Le site s'adapte aux ordinateurs, tablettes et smartphones (menu fixe sur grand écran, menu coulissant sur tablette et téléphone).

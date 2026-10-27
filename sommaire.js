/* =====================================================================
   SOMMAIRE DU SITE — Iʿânat al-Mustafîd bi-charh Kitâb at-Tawhîd
   ---------------------------------------------------------------------
   C'EST LE SEUL FICHIER À MODIFIER QUAND VOUS AJOUTEZ UN CHAPITRE.

   1) Déposez la page du chapitre sur GitHub (ex. : chapitre-12.html)
   2) Ajoutez UNE ligne à la fin de la liste PAGES ci-dessous, sur le
      modèle des lignes existantes (n'oubliez pas la virgule à la fin).

   Le menu de gauche, le sommaire de l'accueil et les boutons
   « Chapitre précédent / suivant » se mettent à jour tout seuls.
   ===================================================================== */

var PAGES = [
  { fichier: "introduction.html",              surtitre: "Introduction", titre: "Introduction du livre" },
  { fichier: "introduction-commentateur.html", surtitre: "Introduction", titre: "Introduction du commentateur" },

  { fichier: "chapitre-01.html", numero: 1,  titre: "Le Livre du Tawhid", titreAr: "كتاب التوحيد" },
  { fichier: "chapitre-02.html", numero: 2,  titre: "Le mérite du tawhid et ce qu'il expie comme péchés", titreAr: "باب فضل التوحيد وما يكفر من الذنوب" },
  { fichier: "chapitre-03.html", numero: 3,  titre: "Celui qui réalise le tawhid entrera au Paradis sans compte", titreAr: "باب من حقق التوحيد دخل الجنة بغير حساب" },
  { fichier: "chapitre-04.html", numero: 4,  titre: "La crainte du shirk", titreAr: "باب الخوف من الشرك" },
  { fichier: "chapitre-05.html", numero: 5,  titre: "L'appel au témoignage qu'il n'y a de divinité qu'Allah", titreAr: "باب الدعاء إلى شهادة أن لا إله إلا الله" },
  { fichier: "chapitre-06.html", numero: 6,  titre: "Explication du tawhid et du témoignage qu'il n'y a de divinité qu'Allah", titreAr: "باب تفسير التوحيد وشهادة أن لا إله إلا الله" },
  { fichier: "chapitre-07.html", numero: 7,  titre: "Parmi les actes de shirk : porter l'anneau, le fil et leurs semblables pour lever le malheur ou le repousser", titreAr: "باب من الشرك لبس الحلقة والخيط ونحوهما لرفع البلاء أو دفعه" },
  { fichier: "chapitre-08.html", numero: 8,  titre: "Ce qui est venu au sujet des incantations (ruqâ) et des amulettes (tamâ'im)", titreAr: "باب ما جاء في الرقى والتمائم" },
  { fichier: "chapitre-09.html", numero: 9,  titre: "Celui qui recherche la bénédiction (tabarruk) auprès d'un arbre, d'une pierre ou de choses semblables", titreAr: "باب من تبرك بشجرة أو حجر ونحوهما" },
  { fichier: "chapitre-10.html", numero: 10, titre: "Ce qui a été dit concernant le sacrifice (Ad-Dhabh) pour un autre qu'Allah", titreAr: "باب ما جاء في الذبح لغير الله" },
  { fichier: "chapitre-11.html", numero: 11, titre: "Il est interdit d'immoler pour Allah dans un endroit où l'on immole pour un autre qu'Allah", titreAr: "باب لا يذبح لله بمكان يذبح فيه لغير الله" },

  { fichier: "chapitre-12.html", numero: 12, titre: "Du fait de faire un vœu pour un autre qu'Allah, qui relève du shirk", titreAr: "باب من الشرك النذر لغير الله" },

  { fichier: "chapitre-13.html", numero: 13, titre: "Parmi les actes de shirk : chercher refuge auprès d'un autre qu'Allah", titreAr: "باب من الشرك الاستعاذة بغير الله" },

  { fichier: "chapitre-14.html", numero: 14, titre: "Parmi les actes de shirk : demander le secours d'un autre qu'Allah ou invoquer un autre que Lui", titreAr: "باب من الشرك أن يستغيث بغير الله أو يدعو غيره" },

  { fichier: "chapitre-15.html", numero: 15, titre: "La parole d'Allah (le Très Haut) : « Associent-ils ce qui ne crée rien, alors qu'eux-mêmes sont créés, et qui ne peuvent leur apporter aucun secours… »", titreAr: "باب قول الله تعالى: ﴿أيشركون ما لا يخلق شيئا وهم يخلقون ○ ولا يستطيعون لهم نصرا﴾" },

  { fichier: "chapitre-16.html", numero: 16, titre: "La parole d'Allah (le Très Haut) : « Jusqu'à ce que, lorsque la frayeur s'est dissipée de leurs cœurs, ils disent : Qu'a dit votre Seigneur ? Ils disent : La vérité. Et c'est Lui le Très Haut, le Très Grand »", titreAr: "باب قول الله تعالى: ﴿حتى إذا فزع عن قلوبهم قالوا ماذا قال ربكم قالوا الحق وهو العلي الكبير﴾" },

  { fichier: "chapitre-17.html", numero: 17, titre: "L'intercession", titreAr: "باب الشفاعة" },

  { fichier: "chapitre-18.html", numero: 18, titre: "La parole d'Allah (le Très Haut) : « Tu ne guides pas qui tu aimes… »", titreAr: "باب قول الله تعالى: ﴿إنك لا تهدي من أحببت﴾" },

  { fichier: "chapitre-19.html", numero: 19, titre: "Ce qui est rapporté au sujet du fait que la cause de la mécréance des fils d'Adam et de leur abandon de leur religion est l'exagération envers les vertueux", titreAr: "باب ما جاء في أن سبب كفر بني آدم وتركهم دينهم هو الغلو في الصالحين" },

  { fichier: "chapitre-20.html", numero: 20, titre: "Ce qui est rapporté au sujet de la gravité [du péché] de celui qui adore Allah auprès de la tombe d'un homme vertueux ; qu'en est-il alors s'il l'adore [lui-même] ?", titreAr: "باب ما جاء في التغليظ فيمن عبد الله عند قبر رجل صالح، فكيف إذا عبده؟" },

  { fichier: "chapitre-21.html", numero: 21, titre: "Ce qui est rapporté au sujet du fait que l'exagération envers les tombes des vertueux en fait des idoles adorées en dehors d'Allah", titreAr: "باب ما جاء أن الغلو في قبور الصالحين يصيرها أوثانا تعبد من دون الله" },

  { fichier: "chapitre-22.html", numero: 22, titre: "Ce qui est rapporté au sujet de la protection, par l'Élu ﷺ, du domaine du tawhid, et de sa fermeture de toute voie menant au shirk", titreAr: "باب ما جاء في حماية المصطفى ﷺ جناب التوحيد وسده كل طريق يوصل إلى الشرك" },

  { fichier: "chapitre-23.html", numero: 23, titre: "Ce qui est rapporté au sujet du fait qu'une partie de cette communauté adorera les idoles", titreAr: "باب ما جاء أن بعض هذه الأمة يعبد الأوثان" },

  { fichier: "chapitre-24.html", numero: 24, titre: "Ce qui est rapporté au sujet de la sorcellerie", titreAr: "باب ما جاء في السحر" },

  { fichier: "chapitre-25.html", numero: 25, titre: "Exposé de certaines sortes de sorcellerie", titreAr: "باب بيان شيء من أنواع السحر" },

  { fichier: "chapitre-26.html", numero: 26, titre: "Ce qui est rapporté au sujet des devins et de leurs semblables", titreAr: "باب ما جاء في الكهان ونحوهم" },

  { fichier: "chapitre-27.html", numero: 27, titre: "Ce qui est rapporté au sujet de la nushra", titreAr: "باب ما جاء في النشرة" },

  { fichier: "chapitre-28.html", numero: 28, titre: "Ce qui est rapporté au sujet du mauvais augure (at-tatayyur)", titreAr: "باب ما جاء في التطير" },

  { fichier: "chapitre-29.html", numero: 29, titre: "Ce qui est rapporté au sujet de l'astrologie (at-tanjîm)", titreAr: "باب ما جاء في التنجيم" },

  { fichier: "chapitre-30.html", numero: 30, titre: "Ce qui est rapporté au sujet de la demande de pluie aux anwâ'", titreAr: "باب ما جاء في الاستسقاء بالأنواء" },

  { fichier: "chapitre-31.html", numero: 31, titre: "La parole d'Allah (le Très Haut) : « Et parmi les gens, il en est qui prennent, en dehors d'Allah, des égaux qu'ils aiment comme on aime Allah »", titreAr: "باب قول الله تعالى: ﴿ومن الناس من يتخذ من دون الله أندادا يحبونهم كحب الله﴾" },

  { fichier: "chapitre-32.html", numero: 32, titre: "La parole d'Allah (le Très Haut) : « C'est seulement le Diable qui vous fait peur de ses alliés. Ne les craignez donc pas, et craignez-Moi, si vous êtes croyants »", titreAr: "باب قول الله تعالى: ﴿إنما ذلكم الشيطان يخوف أولياءه فلا تخافوهم وخافون إن كنتم مؤمنين﴾" },

  { fichier: "chapitre-33.html", numero: 33, titre: "La parole d'Allah (le Très Haut) : « Et c'est en Allah que vous devez placer votre confiance, si vous êtes croyants »", titreAr: "باب قول الله تعالى: ﴿وعلى الله فتوكلوا إن كنتم مؤمنين﴾" },

  { fichier: "chapitre-34.html", numero: 34, titre: "La parole d'Allah (le Très Haut) : « Se sentent-ils donc à l'abri du stratagème d'Allah ? Seuls se sentent à l'abri du stratagème d'Allah les gens perdants »", titreAr: "باب قول الله تعالى: ﴿أفأمنوا مكر الله فلا يأمن مكر الله إلا القوم الخاسرون﴾" },

  { fichier: "chapitre-35.html", numero: 35, titre: "La patience face aux décrets d'Allah relève de la foi en Allah", titreAr: "باب من الإيمان بالله الصبر على أقدار الله" },

  { fichier: "chapitre-36.html", numero: 36, titre: "Ce qui est rapporté au sujet de l'ostentation (ar-riyâ')", titreAr: "باب ما جاء في الرياء" },

  { fichier: "chapitre-37.html", numero: 37, titre: "Il relève du shirk que l'homme vise ce bas monde par son œuvre", titreAr: "باب من الشرك إرادة الإنسان بعمله الدنيا" },

  { fichier: "chapitre-38.html", numero: 38, titre: "Celui qui obéit aux savants et aux gouvernants dans l'interdiction de ce qu'Allah a rendu licite ou la licitation de ce qu'Allah a interdit les a certes pris pour seigneurs", titreAr: "باب من أطاع العلماء والأمراء في تحريم ما أحل الله أو تحليل ما حرمه الله فقد اتخذهم أربابا" },

  { fichier: "chapitre-39.html", numero: 39, titre: "La parole d'Allah (le Très Haut) : « N'as-tu pas vu ceux qui prétendent croire à ce qui a été descendu vers toi et à ce qui a été descendu avant toi, et qui veulent prendre pour juge le tâghût… »", titreAr: "باب قول الله تعالى: ﴿ألم تر إلى الذين يزعمون أنهم آمنوا بما أنزل إليك وما أنزل من قبلك يريدون أن يتحاكموا إلى الطاغوت﴾" },

  { fichier: "chapitre-40.html", numero: 40, titre: "Celui qui renie quelque chose des noms et des attributs", titreAr: "باب من جحد شيئا من الأسماء والصفات" },

  { fichier: "chapitre-41.html", numero: 41, titre: "La parole d'Allah (le Très Haut) : « Ils connaissent le bienfait d'Allah, puis ils le renient »", titreAr: "باب قول الله تعالى: ﴿يعرفون نعمة الله ثم ينكرونها﴾" },

  { fichier: "chapitre-42.html", numero: 42, titre: "La parole d'Allah (le Très Haut) : « Ne donnez donc pas d'égaux à Allah, alors que vous savez »", titreAr: "باب قول الله تعالى: ﴿فلا تجعلوا لله أندادا وأنتم تعلمون﴾" },

  { fichier: "chapitre-43.html", numero: 43, titre: "Ce qui est rapporté au sujet de celui qui ne se contente pas du serment par Allah", titreAr: "باب ما جاء فيمن لم يقنع بالحلف بالله" },

  { fichier: "chapitre-44.html", numero: 44, titre: "La parole : « Ce qu'Allah a voulu et ce que tu as voulu »", titreAr: "باب قول: ما شاء الله وشئت" },

  { fichier: "chapitre-45.html", numero: 45, titre: "Celui qui insulte le temps a certes offensé Allah", titreAr: "باب من سب الدهر فقد آذى الله" },

  { fichier: "chapitre-46.html", numero: 46, titre: "Se nommer « juge des juges » et ce qui y ressemble", titreAr: "باب التسمي بقاضي القضاة ونحوه" },

  { fichier: "chapitre-47.html", numero: 47, titre: "Le respect des noms d'Allah (le Très Haut) et le changement du nom pour cette raison", titreAr: "باب احترام أسماء الله تعالى وتغيير الاسم من أجل ذلك" },

  { fichier: "chapitre-48.html", numero: 48, titre: "Celui qui plaisante avec une chose dans laquelle il y a la mention d'Allah, ou du Coran, ou du Messager", titreAr: "باب من هزل بشيء فيه ذكر الله أو القرآن أو الرسول" },

  { fichier: "chapitre-49.html", numero: 49, titre: "La parole d'Allah (le Très Haut) : « Et si Nous lui faisons goûter une miséricorde de Notre part, après qu'un mal l'a touché, il dit certes : \"Ceci m'est dû\" »", titreAr: "باب قول الله تعالى: ﴿ولئن أذقناه رحمة منا من بعد ضراء مسته ليقولن هذا لي﴾" },

  { fichier: "chapitre-50.html", numero: 50, titre: "La parole d'Allah (le Très Haut) : « Puis, lorsqu'Il leur eut donné un [enfant] sain, ils Lui donnèrent des associés en ce qu'Il leur avait donné »", titreAr: "باب قول الله تعالى: ﴿فلما آتاهما صالحا جعلا له شركاء فيما آتاهما﴾" },

  { fichier: "chapitre-51.html", numero: 51, titre: "La parole d'Allah (le Très Haut) : « C'est à Allah qu'appartiennent les plus beaux noms ; invoquez-Le donc par eux, et laissez ceux qui dévient au sujet de Ses noms »", titreAr: "باب قول الله تعالى: ﴿ولله الأسماء الحسنى فادعوه بها وذروا الذين يلحدون في أسمائه﴾" },

  { fichier: "chapitre-52.html", numero: 52, titre: "On ne dit pas : « La paix soit sur Allah »", titreAr: "باب لا يقال: السلام على الله" },

  { fichier: "chapitre-53.html", numero: 53, titre: "La parole : « Ô Allah, pardonne-moi si Tu veux »", titreAr: "باب قول: اللهم اغفر لي إن شئت" },

  { fichier: "chapitre-54.html", numero: 54, titre: "On ne dit pas : « mon serviteur » et « ma servante »", titreAr: "باب لا يقول: عبدي وأمتي" },

  { fichier: "chapitre-55.html", numero: 55, titre: "On ne repousse pas celui qui demande par Allah", titreAr: "باب لا يرد من سأل بالله" },

  { fichier: "chapitre-56.html", numero: 56, titre: "On ne demande par le Visage d'Allah que le Paradis", titreAr: "باب لا يسأل بوجه الله إلا الجنة" },

  { fichier: "chapitre-57.html", numero: 57, titre: "Ce qui est rapporté au sujet de « si » (al-law)", titreAr: "باب ما جاء في اللو" },

  { fichier: "chapitre-58.html", numero: 58, titre: "L'interdiction d'insulter le vent", titreAr: "باب النهي عن سب الريح" },

  { fichier: "chapitre-59.html", numero: 59, titre: "La parole d'Allah (le Très Haut) : « Ils avaient sur Allah des pensées contraires à la vérité, des pensées de l'époque de l'ignorance. Ils disaient : \"Avons-nous quelque chose à décider en l'affaire ?\" Dis : \"L'affaire tout entière appartient à Allah\" »", titreAr: "باب قول الله تعالى: ﴿يظنون بالله غير الحق ظن الجاهلية يقولون هل لنا من الأمر من شيء قل إن الأمر كله لله﴾" },

  { fichier: "chapitre-60.html", numero: 60, titre: "Ce qui est rapporté au sujet de ceux qui renient la prédestination", titreAr: "باب ما جاء في منكري القدر" },

  { fichier: "chapitre-61.html", numero: 61, titre: "Ce qui est rapporté au sujet de ceux qui font des images", titreAr: "باب ما جاء في المصورين" },

  { fichier: "chapitre-62.html", numero: 62, titre: "Ce qui est rapporté au sujet de l'abondance des serments", titreAr: "باب ما جاء في كثرة الحلف" },

  { fichier: "chapitre-63.html", numero: 63, titre: "Ce qui est rapporté au sujet de la protection d'Allah et de la protection de Son Prophète", titreAr: "باب ما جاء في ذمة الله وذمة نبيه" },

  { fichier: "chapitre-64.html", numero: 64, titre: "Ce qui est rapporté au sujet du fait de jurer au nom d'Allah", titreAr: "باب ما جاء في الإقسام على الله" },

  { fichier: "chapitre-65.html", numero: 65, titre: "On ne demande pas l'intercession d'Allah auprès de l'une de Ses créatures", titreAr: "باب لا يستشفع بالله على أحد من خلقه" },

  { fichier: "chapitre-66.html", numero: 66, titre: "Ce qui est rapporté au sujet de la protection, par le Prophète ﷺ, du domaine réservé du tawhid, et de son obstruction des voies du shirk", titreAr: "باب ما جاء في حماية النبي ﷺ حمى التوحيد وسده طرق الشرك" },

  { fichier: "chapitre-67.html", numero: 67, titre: "Ce qui est rapporté au sujet de la parole d'Allah (le Très Haut) : « Ils n'ont pas estimé Allah à Sa juste valeur, alors que la terre tout entière sera dans Sa poignée le Jour de la Résurrection »", titreAr: "باب ما جاء في قول الله تعالى: ﴿وما قدروا الله حق قدره والأرض جميعا قبضته يوم القيامة﴾" },

  /* ↓↓↓ AJOUTEZ LES PROCHAINS CHAPITRES ICI, par exemple :
  { fichier: "chapitre-68.html", numero: 68, titre: "Titre complet du chapitre 68", titreAr: "باب ..." },
  */
];

/* Nombre total de chapitres du Kitâb at-Tawhîd (pour la barre de progression de l'accueil) */
var TOTAL_CHAPITRES = 67;

/* =====================================================================
   Rien à modifier en dessous de cette ligne.
   ===================================================================== */
(function () {
  "use strict";

  function lire(cle) { try { return localStorage.getItem(cle); } catch (e) { return null; } }
  function ecrire(cle, val) { try { localStorage.setItem(cle, val); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function libelle(p) { return p.numero ? "Chapitre " + p.numero : (p.surtitre || ""); }

  var root = document.documentElement;
  var theme = lire("ktt-theme"); if (theme) root.setAttribute("data-theme", theme);
  var taille = parseFloat(lire("ktt-taille")); if (taille) root.style.setProperty("--taille", taille + "px");

  var nomFichier = decodeURIComponent(location.pathname.split("/").pop() || "index.html");
  if (nomFichier === "") nomFichier = "index.html";
  var estAccueil = nomFichier === "index.html" || !/\.html?$/.test(nomFichier);
  var idx = -1;
  for (var i = 0; i < PAGES.length; i++) if (PAGES[i].fichier === nomFichier) idx = i;

  /* =================================================================
     MISE EN FORME AUTOMATIQUE DU TEXTE
     Nettoie n'importe quelle page de chapitre (polices, espaces,
     retours à la ligne, arabe, poèmes, guillemets) pour qu'elle ait
     exactement la même présentation que les autres.
     ================================================================= */
  var A = "\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFF";
  var RE_AR = new RegExp("[" + A + "]");
  var RE_AR_G = new RegExp("[" + A + "]", "g");
  var RE_RUN = new RegExp("[" + A + "](?:[" + A + "\\s\\u00a0\\u202f○]*[" + A + "])?", "g");
  var LAT = "A-Za-zÀ-ÖØ-öø-ÿĀ-ſḀ-ỿ";
  var RE_LAT = new RegExp("[" + LAT + "]");
  var NBSP = " ", FINE = " ";

  function texte(el) { return (el.textContent || "").replace(/[\s  ]+/g, " ").trim(); }
  function estArabe(t) {
    t = t.replace(/[\s  ﴿﴾○۝«»()\[\]:.،؛,;!?\-–—"'’0-9٠-٩…*]/g, "");
    if (!t) return false;
    return (t.match(RE_AR_G) || []).length / t.length > 0.9;
  }
  function deballer(el) { var p = el.parentNode; if (!p) return; while (el.firstChild) p.insertBefore(el.firstChild, el); p.removeChild(el); }
  function textNodes(el) {
    var out = [], w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    while (w.nextNode()) out.push(w.currentNode);
    return out;
  }

  /* Typographie française appliquée à un morceau de texte */
  function typo(s) {
    s = s.replace(/[ \t\r\n  ]+/g, function (m) { return /[  ]/.test(m) ? NBSP : " "; });
    s = s.replace(/`/g, "ʿ").replace(/\.\.\./g, "…").replace(/---?/g, "—").replace(/ - /g, " – ");
    s = s.replace(new RegExp("([" + LAT + "])'(?=[" + LAT + "ʿ])", "g"), "$1’");
    s = s.replace(/"([^"]+)"/g, "«" + NBSP + "$1" + NBSP + "»");
    s = s.replace(/«[   ]*/g, "«" + NBSP).replace(/[   ]*»/g, NBSP + "»");
    s = s.replace(/([^\s  («\d])[   ]*([;!?])(?=[\s »)]|$)/g, "$1" + FINE + "$2");
    s = s.replace(/^[   ]+([;!?])/, FINE + "$1");
    s = s.replace(/([^\s  («\/\d])[   ]*:(?=[\s »)]|$)/g, "$1" + NBSP + ":");
    s = s.replace(/^[   ]+:/, NBSP + ":");
    s = s.replace(/[   ]+([,.])(?![.\d])/g, "$1");
    s = s.replace(/\(\s+/g, "(").replace(/\s+\)/g, ")");
    return s;
  }

  /* Coupe un paragraphe au caractère n° idx (les styles en ligne sont conservés) */
  function couperA(p, idx) {
    var nodes = textNodes(p), n = 0;
    for (var i = 0; i < nodes.length; i++) {
      var l = nodes[i].nodeValue.length;
      if (n + l >= idx) {
        var r = document.createRange();
        r.setStart(p, 0); r.setEnd(nodes[i], idx - n);
        return r.extractContents();
      }
      n += l;
    }
    return null;
  }

  function normaliser(conteneur, pageForcee) {
    if (!conteneur || conteneur.getAttribute("data-normalise")) return;
    var entete = conteneur.querySelector(".entete");
    if (entete) entete.parentNode.removeChild(entete);

    /* 1. Nettoyage : styles Word/Google Docs, polices, balises inutiles */
    conteneur.querySelectorAll("style,script,meta,link,title,xml,o\\:p,colgroup").forEach(function (e) { e.remove(); });
    conteneur.querySelectorAll("font,span,div,section,blockquote,center,u,ins,a:not([href])").forEach(deballer);
    conteneur.querySelectorAll("b").forEach(function (b) { var s = document.createElement("strong"); while (b.firstChild) s.appendChild(b.firstChild); b.replaceWith(s); });
    conteneur.querySelectorAll("i").forEach(function (b) { var s = document.createElement("em"); while (b.firstChild) s.appendChild(b.firstChild); b.replaceWith(s); });
    conteneur.querySelectorAll("*").forEach(function (e) {
      ["style", "class", "align", "face", "size", "color", "lang", "dir", "width", "height", "valign", "id"].forEach(function (a) { e.removeAttribute(a); });
    });
    conteneur.querySelectorAll("h1").forEach(function (h) { var n = document.createElement("h2"); n.innerHTML = h.innerHTML; h.replaceWith(n); });
    conteneur.querySelectorAll("h4,h5,h6").forEach(function (h) { var n = document.createElement("h3"); n.innerHTML = h.innerHTML; h.replaceWith(n); });
    /* texte « nu » (hors paragraphe) -> paragraphe */
    Array.prototype.slice.call(conteneur.childNodes).forEach(function (n) {
      if (n.nodeType === 3 && n.nodeValue.trim()) { var p = document.createElement("p"); n.replaceWith(p); p.appendChild(n); }
      else if (n.nodeType === 1 && /^(STRONG|EM|SUP|SUB|A)$/.test(n.tagName)) { var q = document.createElement("p"); n.replaceWith(q); q.appendChild(n); }
    });
    /* double retour à la ligne dans un paragraphe -> deux paragraphes */
    conteneur.querySelectorAll("p").forEach(function (p) {
      if (/(<br\s*\/?>\s*){2,}/i.test(p.innerHTML)) {
        p.innerHTML.split(/(?:<br\s*\/?>\s*){2,}/i).forEach(function (h) {
          if (h.trim()) { var n = document.createElement("p"); n.innerHTML = h; p.parentNode.insertBefore(n, p); }
        });
        p.remove();
      }
    });
    conteneur.querySelectorAll("li > p:only-child").forEach(deballer);
    conteneur.normalize();
    /* éléments vides */
    conteneur.querySelectorAll("p,h2,h3,li,strong,em").forEach(function (e) { if (!texte(e) && !e.querySelector("img")) e.remove(); });

    /* 2. Titre répété en tête du texte -> supprimé (il est déjà dans l'en-tête) */
    var page = pageForcee || PAGES[idx];
    var simple = function (s) { return s.toLowerCase().replace(/^chapitre\s+\d+\s*[:·.\-–]?\s*/, "").replace(/[^a-zà-ÿ0-9]+/g, ""); };
    var premier = conteneur.firstElementChild;
    if (premier && page && simple(texte(premier)) === simple(page.titre)) premier.remove();

    /* 3. Typographie française (hors texte arabe) */
    conteneur.querySelectorAll("p,li,h2,h3").forEach(function (b) {
      if (estArabe(texte(b))) return;
      textNodes(b).forEach(function (t) { t.nodeValue = typo(t.nodeValue); });
    });
    conteneur.querySelectorAll("p,li,h2,h3").forEach(function (b) {
      var f = b.firstChild; if (f && f.nodeType === 3) f.nodeValue = f.nodeValue.replace(/^[\s ]+/, "");
      var l = b.lastChild; if (l && l.nodeType === 3) l.nodeValue = l.nodeValue.replace(/[\s ]+$/, "");
    });

    /* 4. Paragraphe qui commence par un long passage arabe suivi du français -> séparés */
    conteneur.querySelectorAll("p").forEach(function (p) {
      var t = p.textContent, m = t.search(RE_LAT);
      if (m <= 0) return;
      var debut = t.slice(0, m);
      if ((debut.match(RE_AR_G) || []).length < 15 || !estArabe(debut)) return;
      var frag = couperA(p, m);
      if (!frag) return;
      if (/«[\s\u00a0]*$/.test(frag.textContent)) p.insertBefore(document.createTextNode("«" + NBSP), p.firstChild);
      var ar = document.createElement("p");
      ar.textContent = frag.textContent.replace(/^[\s «]+/, "").replace(/[\s «»]+$/, "");
      p.parentNode.insertBefore(ar, p);
      var f = p.firstChild; if (f && f.nodeType === 3) f.nodeValue = f.nodeValue.replace(/^[\s ]+/, "");
      if (/^[^«]*»/.test(p.textContent)) { /* « orphelin */ }
    });

    /* 5. Blocs arabes (versets, hadiths, vers) */
    var blocs = Array.prototype.slice.call(conteneur.children);
    blocs.forEach(function (b) {
      if (b.tagName !== "P" || !estArabe(texte(b))) return;
      var t = b.textContent.replace(/[\s  ]+/g, " ").trim().replace(/^«\s*(.*?)\s*»$/, "$1");
      b.textContent = t;
      b.className = "ar-bloc" + (t.indexOf("﴿") > -1 ? " coran" : "");
      b.setAttribute("dir", "rtl"); b.setAttribute("lang", "ar");
    });

    /* 6. Poèmes : vers arabes consécutifs regroupés, traduction regroupée */
    blocs = Array.prototype.slice.call(conteneur.children);
    for (var i = 0; i < blocs.length; i++) {
      var run = [];
      while (i + run.length < blocs.length) {
        var c = blocs[i + run.length];
        if (c.className === "ar-bloc" && texte(c).length < 80) run.push(c); else break;
      }
      if (run.length < 2) continue;
      var div = document.createElement("div");
      div.className = "poeme" + (run.length % 2 === 0 ? " deux" : "");
      div.setAttribute("dir", "rtl"); div.setAttribute("lang", "ar");
      run[0].parentNode.insertBefore(div, run[0]);
      run.forEach(function (v) { v.className = "vers"; v.removeAttribute("dir"); v.removeAttribute("lang"); div.appendChild(v); });
      /* traduction des vers : lignes courtes qui suivent */
      var lignes = [], k = i + run.length;
      while (k < blocs.length && lignes.length < run.length) {
        var s = blocs[k], st = texte(s);
        if (s.tagName !== "P" || s.className || st.length > 170 || (lignes.length === 0 && /^«/.test(st)) || s.querySelector("br")) break;
        if (lignes.length > 0 && /^«/.test(st)) break;
        lignes.push(s); k++;
        if (/[.»!?]$/.test(st) && lignes.length >= Math.ceil(run.length / 2)) break;
      }
      if (lignes.length >= 2) {
        var tr = document.createElement("p"); tr.className = "trad trad-poeme";
        lignes.forEach(function (l, j) { if (j) tr.appendChild(document.createElement("br")); while (l.firstChild) tr.appendChild(l.firstChild); l.remove(); });
        div.parentNode.insertBefore(tr, div.nextSibling);
      }
      i += run.length - 1;
      blocs = Array.prototype.slice.call(conteneur.children);
    }

    /* 6 bis. Phrase coupée en deux paragraphes -> recollée */
    blocs = Array.prototype.slice.call(conteneur.children);
    for (var q = blocs.length - 1; q > 0; q--) {
      var a1 = blocs[q - 1], a2 = blocs[q];
      if (a1.tagName === "P" && a2.tagName === "P" && !a1.className && !a2.className &&
          /[A-Za-zà-ÿ,]$/.test(texte(a1)) && /^[a-zà-ÿ]/.test(texte(a2))) {
        a1.appendChild(document.createTextNode(" "));
        while (a2.firstChild) a1.appendChild(a2.firstChild);
        a2.remove();
      }
    }

    /* 7. Traductions et suites de phrase */
    blocs = Array.prototype.slice.call(conteneur.children);
    blocs.forEach(function (b, j) {
      var prec = blocs[j - 1];
      if (!prec || b.tagName !== "P" || b.className) return;
      var precArabe = /ar-bloc|poeme/.test(prec.className);
      var t = texte(b);
      /* « traduction » suivie du commentaire dans le même paragraphe -> séparés */
      if (precArabe && /^«/.test(t) && t.length - t.lastIndexOf("»") >= 90) {
        var raw = b.textContent, prof = 0, fin = -1;
        for (var x = 0; x < raw.length; x++) {
          if (raw[x] === "«") prof++;
          else if (raw[x] === "»") { prof--; if (prof === 0) { fin = x + 1; break; } }
        }
        var reste = fin > 0 ? raw.slice(fin) : "";
        var mm = reste.match(/^[\s  .,;:]*(?=[A-ZÀ-Ý(])/);
        if (mm && reste.length > 40) {
          var morceau = couperA(b, fin + mm[0].length);
          var np = document.createElement("p"); np.className = "trad";
          np.appendChild(morceau);
          var dl = np.lastChild; if (dl && dl.nodeType === 3) dl.nodeValue = dl.nodeValue.replace(/[\s ]+$/, "");
          b.parentNode.insertBefore(np, b);
          return;
        }
      }
      if (precArabe && (/^«/.test(t) && t.length - t.lastIndexOf("»") < 90 && t.indexOf("﴿") < 0 || /poeme/.test(prec.className) && b.querySelector("br"))) {
        b.className = /poeme/.test(prec.className) ? "trad trad-poeme" : "trad"; return;
      }
      if ((precArabe || /trad/.test(prec.className)) && /^[a-zà-ÿ—–…]/.test(t)) b.className = "suite";
    });

    /* 8. Mots arabes dans le texte français */
    conteneur.querySelectorAll("p:not(.ar-bloc):not(.vers),li,h2,h3,td").forEach(function (b) {
      textNodes(b).forEach(function (t) {
        if (!RE_AR.test(t.nodeValue)) return;
        var s = t.nodeValue, frag = document.createDocumentFragment(), last = 0, m;
        RE_RUN.lastIndex = 0;
        while ((m = RE_RUN.exec(s))) {
          if (m.index > last) frag.appendChild(document.createTextNode(s.slice(last, m.index)));
          var sp = document.createElement("span");
          sp.className = "ar"; sp.setAttribute("lang", "ar"); sp.setAttribute("dir", "rtl");
          sp.textContent = m[0]; frag.appendChild(sp); last = m.index + m[0].length;
        }
        if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
        t.replaceWith(frag);
      });
    });

    /* 9. En-tête du chapitre (titre français + titre arabe) */
    if (!entete && page) {
      entete = document.createElement("header");
      entete.className = "entete";
      entete.innerHTML = '<p class="surtitre">' + esc(libelle(page)) + '</p><h1>' + esc(typo(page.titre)) + '</h1>' +
        (page.titreAr ? '<p class="titre-ar" lang="ar" dir="rtl">' + esc(page.titreAr) + '</p>' : "");
    }
    if (entete) { entete.querySelectorAll("h1,.surtitre").forEach(function (h) { textNodes(h).forEach(function (t) { t.nodeValue = typo(t.nodeValue); }); }); conteneur.insertBefore(entete, conteneur.firstChild); }
    conteneur.setAttribute("data-normalise", "1");
  }
  window.KTT = { normaliser: normaliser, PAGES: PAGES, typo: typo };

  function preparerArticle() {
    var article = document.querySelector("article");
    if (!article && idx > -1) {
      /* page déposée sans la structure du site : on la reconstruit */
      var main = document.querySelector("main") || document.body;
      article = document.createElement("article");
      Array.prototype.slice.call(main.childNodes).forEach(function (n) {
        if (n.nodeType === 1 && /^(SCRIPT|HEADER|NAV|FOOTER|STYLE|LINK)$/.test(n.tagName)) return;
        article.appendChild(n);
      });
      if (main === document.body) { var m = document.createElement("main"); m.appendChild(article); document.body.insertBefore(m, document.body.firstChild); }
      else main.appendChild(article);
    }
    if (article && idx > -1) normaliser(article);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    preparerArticle();

    /* ---------- Barre du haut ---------- */
    var barre = document.createElement("header");
    barre.className = "barre";
    barre.innerHTML =
      '<button class="btn-icone" id="btn-menu" aria-label="Ouvrir le sommaire" aria-expanded="false">' +
        '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>' +
      '<a class="barre-titre" href="index.html"><span class="barre-ar" lang="ar">إعانة المستفيد</span><span class="barre-fr">Iʿânat al-Mustafîd</span></a>' +
      '<div class="barre-outils">' +
        '<button class="btn-icone" id="btn-moins" aria-label="Réduire le texte">A−</button>' +
        '<button class="btn-icone" id="btn-plus" aria-label="Agrandir le texte">A+</button>' +
        '<button class="btn-icone" id="btn-marques" aria-label="Marque-pages" aria-expanded="false" title="Marque-pages">' +
          '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path class="mp-ico" d="M6 3h12v18l-6-4.5L6 21z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' +
          '<span class="mp-compte" id="mp-compte" hidden></span></button>' +
        '<button class="btn-icone" id="btn-theme" aria-label="Mode clair / sombre">' +
          '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor"/></svg></button>' +
      '</div>' +
      '<div class="progression" id="progression"></div>';
    body.insertBefore(barre, body.firstChild);

    /* ---------- Menu latéral ---------- */
    var nav = document.createElement("nav");
    nav.className = "menu"; nav.id = "menu"; nav.setAttribute("aria-label", "Sommaire");
    var html = '<div class="menu-tete"><a href="index.html" class="menu-accueil' + (estAccueil ? " actif" : "") + '">Accueil</a>' +
      '<input type="search" id="menu-recherche" placeholder="Rechercher un chapitre…" aria-label="Rechercher un chapitre"></div><ol class="menu-liste">';
    PAGES.forEach(function (p, j) {
      html += '<li data-texte="' + esc((libelle(p) + " " + p.titre).toLowerCase()) + '"><a href="' + esc(p.fichier) + '"' + (j === idx ? ' class="actif" aria-current="page"' : "") + '>' +
        '<span class="menu-num">' + esc(libelle(p)) + '<span class="statut" data-fichier="' + esc(p.fichier) + '"></span></span><span class="menu-titre">' + esc(typo(p.titre)) + '</span></a>' +
        (j === idx ? '<ol class="menu-sous" id="menu-sous"></ol>' : "") + '</li>';
    });
    html += '</ol>';
    nav.innerHTML = html;
    var voile = document.createElement("div"); voile.className = "voile"; voile.id = "voile";
    body.insertBefore(voile, barre.nextSibling);
    body.insertBefore(nav, voile.nextSibling);
    body.classList.add("avec-menu");

    /* Intertitres de la page courante sous l'entrée active du menu */
    var sous = document.getElementById("menu-sous");
    var h2s = document.querySelectorAll("article h2");
    if (sous && h2s.length) {
      h2s.forEach(function (h, k) {
        if (!h.id) h.id = "section-" + (k + 1);
        var li = document.createElement("li");
        li.innerHTML = '<a href="#' + h.id + '">' + esc(h.textContent) + '</a>';
        sous.appendChild(li);
      });
    }

    function ouvrir(o) {
      body.classList.toggle("menu-ouvert", o);
      document.getElementById("btn-menu").setAttribute("aria-expanded", o ? "true" : "false");
    }
    document.getElementById("btn-menu").onclick = function () { ouvrir(!body.classList.contains("menu-ouvert")); };
    voile.onclick = function () { ouvrir(false); };
    nav.addEventListener("click", function (e) { if (e.target.closest("a") && window.innerWidth < 1000) ouvrir(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") ouvrir(false); });
    var actif = nav.querySelector("a.actif");
    if (actif) actif.scrollIntoView({ block: "center" });

    document.getElementById("menu-recherche").addEventListener("input", function () {
      var q = this.value.trim().toLowerCase();
      nav.querySelectorAll(".menu-liste > li").forEach(function (li) {
        li.style.display = !q || li.getAttribute("data-texte").indexOf(q) > -1 ? "" : "none";
      });
    });

    /* ---------- Outils : taille du texte et thème ---------- */
    function changerTaille(d) {
      var t = parseFloat(getComputedStyle(root).getPropertyValue("--taille")) || 19;
      t = Math.min(26, Math.max(15, t + d));
      root.style.setProperty("--taille", t + "px"); ecrire("ktt-taille", t);
    }
    document.getElementById("btn-plus").onclick = function () { changerTaille(1); };
    document.getElementById("btn-moins").onclick = function () { changerTaille(-1); };
    document.getElementById("btn-theme").onclick = function () {
      var sombre = root.getAttribute("data-theme") === "dark" ||
        (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
      var t = sombre ? "light" : "dark"; root.setAttribute("data-theme", t); ecrire("ktt-theme", t);
    };

    /* ---------- Page de chapitre : navigation précédent / suivant ---------- */
    var article = document.querySelector("article");
    if (idx > -1 && article) {
      ecrire("ktt-derniere", PAGES[idx].fichier);
      var prec = PAGES[idx - 1], suiv = PAGES[idx + 1];
      var pied = document.createElement("nav");
      pied.className = "pied-nav"; pied.setAttribute("aria-label", "Navigation entre chapitres");
      pied.innerHTML =
        (prec ? '<a class="pn pn-prec" href="' + esc(prec.fichier) + '"><span>← ' + esc(libelle(prec)) + '</span><strong>' + esc(typo(prec.titre)) + '</strong></a>'
              : '<a class="pn pn-prec" href="index.html"><span>← Accueil</span><strong>Sommaire du livre</strong></a>') +
        (suiv ? '<a class="pn pn-suiv" href="' + esc(suiv.fichier) + '"><span>' + esc(libelle(suiv)) + ' →</span><strong>' + esc(typo(suiv.titre)) + '</strong></a>'
              : '<div class="pn pn-suiv pn-attente"><span>Suite</span><strong>Le prochain chapitre sera mis en ligne prochainement, si Allah le veut.</strong></div>');
      article.parentNode.insertBefore(pied, article.nextSibling);
    }

    /* ---------- Accueil : sommaire et reprise de lecture ---------- */
    var zone = document.getElementById("sommaire-accueil");
    if (zone) {
      var s = '<ol class="table">';
      PAGES.forEach(function (p) {
        s += '<li><a href="' + esc(p.fichier) + '"><span class="t-num">' + (p.numero ? p.numero : "✦") + '</span>' +
          '<span class="t-txt"><span class="t-lib">' + esc(libelle(p)) + '<span class="statut" data-fichier="' + esc(p.fichier) + '"></span></span><span class="t-titre">' + esc(typo(p.titre)) + '</span>' +
          (p.titreAr ? '<span class="t-ar" lang="ar" dir="rtl">' + esc(p.titreAr) + '</span>' : "") + '</span></a></li>';
      });
      s += '</ol>';
      zone.innerHTML = s;

      var nbChap = PAGES.filter(function (p) { return p.numero; }).length;
      var etat = document.getElementById("etat-traduction");
      if (etat) etat.innerHTML = '<div class="etat-ligne"><span>' + nbChap + ' chapitre' + (nbChap > 1 ? "s" : "") + ' traduit' + (nbChap > 1 ? "s" : "") +
        ' sur ' + TOTAL_CHAPITRES + '</span><span>' + Math.round(nbChap / TOTAL_CHAPITRES * 100) + ' %</span></div>' +
        '<div class="etat-barre"><span style="width:' + (nbChap / TOTAL_CHAPITRES * 100) + '%"></span></div>';

      var dernier = PAGES[PAGES.length - 1], nouv = document.getElementById("dernier-ajout");
      if (nouv && dernier) nouv.innerHTML = 'Dernier ajout : <a href="' + esc(dernier.fichier) + '">' + esc(libelle(dernier)) + ' — ' + esc(typo(dernier.titre)) + '</a>';
    }

    /* =================================================================
       SUIVI DE LECTURE ET MARQUE-PAGES
       Tout est enregistré dans le navigateur du lecteur (localStorage) :
       - ktt-pos     : dernière position lue dans chaque chapitre
       - ktt-lus     : chapitres terminés
       - ktt-marques : marque-pages posés par le lecteur
       ================================================================= */
    function lireJSON(cle, defaut) { try { var v = JSON.parse(lire(cle)); return v == null ? defaut : v; } catch (e) { return defaut; } }
    function ecrireJSON(cle, v) { ecrire(cle, JSON.stringify(v)); }
    var positions = lireJSON("ktt-pos", {}); if (typeof positions !== "object" || Array.isArray(positions)) positions = {};
    var lus = lireJSON("ktt-lus", {}); if (typeof lus !== "object" || Array.isArray(lus)) lus = {};
    var marques = lireJSON("ktt-marques", []); if (!Array.isArray(marques)) marques = [];
    function pageDe(f) { for (var k = 0; k < PAGES.length; k++) if (PAGES[k].fichier === f) return PAGES[k]; return null; }
    function dateCourte(t) { try { return new Date(t).toLocaleDateString("fr-FR", { day: "numeric", month: "short" }); } catch (e) { return ""; } }

    /* Blocs de lecture numérotés (paragraphes, poèmes, intertitres) */
    var blocs = [];
    if (idx > -1 && article) {
      blocs = Array.prototype.filter.call(article.children, function (el) { return !el.classList.contains("entete") && !/^(SCRIPT|STYLE)$/.test(el.tagName); });
      blocs.forEach(function (b, k) { b.setAttribute("data-bloc", k); if (!b.id || /^l-\d+$/.test(b.id)) b.id = "l-" + k; });
    }
    /* Si la mise en page d'un chapitre a changé, on retrouve chaque marque-page grâce à son extrait */
    var recalage = {};
    function recaler() {
      if (idx < 0 || !blocs.length) return;
      var f = PAGES[idx].fichier, change = false;
      marques.forEach(function (m) {
        if (m.fichier !== f || !m.extrait || extrait(m.i) === m.extrait) return;
        var ancien = m.i, debut = m.extrait.replace(/…$/, "").slice(0, 60);
        for (var k = 0; k < blocs.length; k++) if (extrait(k) === m.extrait) { m.i = k; break; }
        if (m.i === ancien) for (var j = 0; j < blocs.length; j++) if ((blocs[j].textContent || "").replace(/\s+/g, " ").indexOf(debut) > -1) { m.i = j; break; }
        if (m.i !== ancien) { recalage[ancien] = m.i; change = true; }
      });
      if (change) ecrireJSON("ktt-marques", marques);
    }
    recaler();
    function blocCourant() {
      var lim = (parseFloat(getComputedStyle(root).getPropertyValue("--barre-h")) || 56) + 12;
      for (var k = 0; k < blocs.length; k++) { if (blocs[k].getBoundingClientRect().bottom > lim) return k; }
      return Math.max(0, blocs.length - 1);
    }
    function extrait(k) {
      var b = blocs[k]; if (!b) return "";
      var t = (b.textContent || "").replace(/\s+/g, " ").trim();
      return t.length > 140 ? t.slice(0, 137).replace(/\s+\S*$/, "") + "…" : t;
    }
    function pctLecture() {
      var art = article.getBoundingClientRect(), h = art.height - window.innerHeight * 0.6;
      return Math.max(0, Math.min(100, Math.round((-art.top + 60) / Math.max(1, h) * 100)));
    }

    /* Statuts (✓ lu, % en cours, nombre de marque-pages) dans le menu et le sommaire */
    function majStatuts() {
      document.querySelectorAll(".statut").forEach(function (s) {
        var f = s.getAttribute("data-fichier"), n = marques.filter(function (m) { return m.fichier === f; }).length, h = "";
        if (lus[f]) h += '<span class="st st-lu" title="Chapitre lu">✓ lu</span>';
        else if (positions[f] && positions[f].pct > 0) h += '<span class="st st-cours" title="Lecture en cours">' + positions[f].pct + ' %</span>';
        if (n) h += '<span class="st st-mp" title="' + n + ' marque-page' + (n > 1 ? "s" : "") + '">🔖 ' + n + '</span>';
        s.innerHTML = h;
      });
      var c = document.getElementById("mp-compte");
      if (c) { c.hidden = !marques.length; c.textContent = marques.length; }
      var btn = document.getElementById("btn-marques");
      if (btn) btn.classList.toggle("plein", idx > -1 && marques.some(function (m) { return m.fichier === PAGES[idx].fichier; }));
      document.querySelectorAll(".bloc-marque").forEach(function (b) { b.classList.remove("bloc-marque"); });
      if (idx > -1) marques.forEach(function (m) { if (m.fichier === PAGES[idx].fichier && blocs[m.i]) blocs[m.i].classList.add("bloc-marque"); });
    }

    /* Panneau des marque-pages */
    var panneau = document.createElement("aside");
    panneau.className = "panneau-mp"; panneau.id = "panneau-mp"; panneau.setAttribute("aria-label", "Marque-pages"); panneau.setAttribute("aria-hidden", "true");
    var voileMp = document.createElement("div"); voileMp.className = "voile voile-mp";
    body.appendChild(voileMp); body.appendChild(panneau);

    function rendrePanneau() {
      var h = '<div class="mp-tete"><h2>Marque-pages</h2><button class="btn-icone" id="mp-fermer" aria-label="Fermer">✕</button></div>';
      if (idx > -1 && blocs.length) {
        h += '<div class="mp-ajout"><p class="mp-aide">Ajoute un marque-page au passage affiché en haut de l\'écran.</p>' +
          '<input type="text" id="mp-note" maxlength="120" placeholder="Note (facultatif)" aria-label="Note du marque-page">' +
          '<button class="bouton" id="mp-ajouter">＋ Marquer ce passage</button>' +
          '<button class="bouton bouton-second" id="mp-lu">' + (lus[PAGES[idx].fichier] ? "✓ Chapitre lu — annuler" : "Marquer le chapitre comme lu") + '</button></div>';
      }
      if (!marques.length) {
        h += '<p class="mp-vide">Aucun marque-page pour l\'instant.' + (idx > -1 ? "" : " Ouvrez un chapitre, puis touchez l'icône 🔖 pour marquer un passage.") + '</p>';
      } else {
        var tri = marques.slice().sort(function (a, b) { var pa = PAGES.indexOf(pageDe(a.fichier)), pb = PAGES.indexOf(pageDe(b.fichier)); return pa - pb || a.i - b.i; });
        var courant = null;
        h += '<ul class="mp-liste">';
        tri.forEach(function (m) {
          var p = pageDe(m.fichier); if (!p) return;
          if (courant !== m.fichier) { courant = m.fichier; h += '<li class="mp-groupe">' + esc(libelle(p)) + ' — ' + esc(typo(p.titre)) + '</li>'; }
          h += '<li class="mp-item"><a href="' + esc(m.fichier) + '#l-' + m.i + '" data-mp="' + esc(m.id) + '">' +
            (m.note ? '<strong class="mp-note">' + esc(m.note) + '</strong>' : "") +
            '<span class="mp-extrait">' + esc(m.extrait || "") + '</span><span class="mp-date">' + esc(dateCourte(m.t)) + '</span></a>' +
            '<button class="mp-suppr" data-suppr="' + esc(m.id) + '" aria-label="Supprimer ce marque-page">✕</button></li>';
        });
        h += '</ul>';
      }
      h += '<div class="mp-pied"><p>Vos marque-pages sont enregistrés dans ce navigateur. Pour les transférer vers un autre appareil :</p>' +
        '<div class="mp-pied-btns"><button class="bouton bouton-second" id="mp-export">Exporter</button>' +
        '<label class="bouton bouton-second" for="mp-import-f">Importer</label><input type="file" id="mp-import-f" accept=".json,application/json" hidden></div>' +
        '<p class="mp-msg" id="mp-msg" role="status"></p></div>' +
        '<div class="mp-reinit"><h3>Réinitialiser</h3>' +
        (idx > -1 ? boutonReinit("chapitre", "Effacer la progression de ce chapitre") : "") +
        boutonReinit("progression", "Effacer toute la progression de lecture") +
        boutonReinit("marques", "Supprimer tous les marque-pages") +
        boutonReinit("tout", "Tout effacer (progression et marque-pages)") + '</div>';
      panneau.innerHTML = h;
    }

    /* Réinitialisation (avec confirmation en deux temps, sans boîte de dialogue) */
    function boutonReinit(type, libelleBtn) {
      return '<div class="reinit" data-reinit="' + type + '"><button class="lien-bouton reinit-demande">' + esc(libelleBtn) + '</button>' +
        '<span class="reinit-confirm" hidden>' + esc(libelleBtn) + ' ? <button class="bouton reinit-oui">Oui, effacer</button><button class="lien-bouton reinit-non">Annuler</button></span></div>';
    }
    function reinitialiser(type) {
      var f = idx > -1 ? PAGES[idx].fichier : null;
      if (type === "chapitre" && f) { delete positions[f]; delete lus[f]; }
      if (type === "progression" || type === "tout") { positions = {}; lus = {}; ecrire("ktt-derniere", ""); }
      if (type === "marques" || type === "tout") marques = [];
      ecrireJSON("ktt-pos", positions); sauver(); majReprise(); majFin();
      var txt = { chapitre: "Progression du chapitre effacée.", progression: "Progression de lecture effacée.", marques: "Marque-pages supprimés.", tout: "Tout a été effacé." }[type];
      return txt;
    }
    document.addEventListener("click", function (e) {
      var zoneR = e.target.closest(".reinit"); if (!zoneR) return;
      var conf = zoneR.querySelector(".reinit-confirm"), dem = zoneR.querySelector(".reinit-demande");
      if (e.target.closest(".reinit-demande")) { conf.hidden = false; dem.hidden = true; return; }
      if (e.target.closest(".reinit-non")) { conf.hidden = true; dem.hidden = false; return; }
      if (e.target.closest(".reinit-oui")) {
        var t = reinitialiser(zoneR.getAttribute("data-reinit"));
        if (body.classList.contains("mp-ouvert")) rendrePanneau();
        message(t);
        var mr = document.getElementById("ml-msg"); if (mr) mr.textContent = t;
      }
    });
    function ouvrirPanneau(o) {
      if (o) rendrePanneau();
      body.classList.toggle("mp-ouvert", o);
      panneau.setAttribute("aria-hidden", o ? "false" : "true");
      document.getElementById("btn-marques").setAttribute("aria-expanded", o ? "true" : "false");
      if (o) { ouvrir(false); var f = panneau.querySelector("#mp-fermer"); if (f) f.focus(); }
    }
    document.getElementById("btn-marques").onclick = function () { ouvrirPanneau(!body.classList.contains("mp-ouvert")); };
    voileMp.onclick = function () { ouvrirPanneau(false); };
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") ouvrirPanneau(false); });

    function sauver() { ecrireJSON("ktt-marques", marques); ecrireJSON("ktt-lus", lus); majStatuts(); }
    function message(t) { var m = document.getElementById("mp-msg"); if (m) m.textContent = t; }

    panneau.addEventListener("click", function (e) {
      var t = e.target;
      if (t.closest("#mp-fermer")) { ouvrirPanneau(false); return; }
      var sup = t.closest("[data-suppr]");
      if (sup) { var id = sup.getAttribute("data-suppr"); marques = marques.filter(function (m) { return m.id !== id; }); sauver(); rendrePanneau(); return; }
      if (t.closest("#mp-ajouter")) {
        var k = blocCourant(), f = PAGES[idx].fichier, note = (document.getElementById("mp-note").value || "").trim();
        var exist = marques.filter(function (m) { return m.fichier === f && m.i === k; })[0];
        if (exist) { if (note) exist.note = note; exist.t = Date.now(); }
        else marques.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), fichier: f, i: k, extrait: extrait(k), note: note, t: Date.now() });
        sauver(); rendrePanneau(); message("Passage marqué.");
        if (blocs[k]) { blocs[k].classList.add("bloc-flash"); setTimeout(function () { blocs[k].classList.remove("bloc-flash"); }, 1600); }
        return;
      }
      if (t.closest("#mp-lu")) {
        var fl = PAGES[idx].fichier; if (lus[fl]) delete lus[fl]; else lus[fl] = Date.now();
        sauver(); rendrePanneau(); majFin(); return;
      }
      if (t.closest("#mp-export")) {
        var donnees = { site: "ktt", version: 1, exporte: new Date().toISOString(), marques: marques, lus: lus, positions: positions };
        var url = URL.createObjectURL(new Blob([JSON.stringify(donnees, null, 1)], { type: "application/json" }));
        var a = document.createElement("a"); a.href = url; a.download = "marque-pages-kitab-tawhid.json"; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000); message("Fichier exporté.");
        return;
      }
      var lien = t.closest("a[data-mp]");
      if (lien && idx > -1 && lien.getAttribute("href").split("#")[0] === PAGES[idx].fichier) {
        e.preventDefault(); ouvrirPanneau(false); allerA(parseInt(lien.getAttribute("href").split("#l-")[1], 10));
      }
    });
    panneau.addEventListener("change", function (e) {
      if (e.target.id !== "mp-import-f" || !e.target.files[0]) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var d = JSON.parse(r.result); if (!d || !Array.isArray(d.marques)) throw 0;
          var ids = {}; marques.forEach(function (m) { ids[m.fichier + "|" + m.i] = 1; });
          var n = 0;
          d.marques.forEach(function (m) { if (m && typeof m.fichier === "string" && typeof m.i === "number" && !ids[m.fichier + "|" + m.i]) { marques.push({ id: String(m.id || Date.now().toString(36) + n), fichier: m.fichier, i: m.i, extrait: String(m.extrait || ""), note: String(m.note || ""), t: m.t || Date.now() }); n++; } });
          if (d.lus && typeof d.lus === "object") Object.keys(d.lus).forEach(function (f) { lus[f] = lus[f] || d.lus[f]; });
          if (d.positions && typeof d.positions === "object") Object.keys(d.positions).forEach(function (f) { if (!positions[f] || (d.positions[f].t || 0) > (positions[f].t || 0)) positions[f] = d.positions[f]; });
          ecrireJSON("ktt-pos", positions); sauver(); rendrePanneau(); majReprise();
          message(n + " marque-page" + (n > 1 ? "s" : "") + " importé" + (n > 1 ? "s" : "") + ".");
        } catch (err) { message("Ce fichier n'est pas un export de marque-pages valide."); }
      };
      r.readAsText(e.target.files[0]);
    });

    /* Aller à un passage (lien #l-N) en tenant compte de la barre du haut */
    function allerA(k) {
      var b = blocs[k]; if (!b) return;
      b.scrollIntoView({ block: "start" });
      b.classList.add("bloc-flash"); setTimeout(function () { b.classList.remove("bloc-flash"); }, 1800);
    }

    /* Page de chapitre : mémorisation de la position + fin de lecture */
    var finCarte = null;
    function majFin() {
      if (!finCarte) return;
      var f = PAGES[idx].fichier;
      finCarte.innerHTML = lus[f]
        ? '<span class="fin-ok">✓ Chapitre lu</span><button class="lien-bouton" id="fin-annuler">Marquer comme non lu</button>'
        : '<button class="bouton bouton-second" id="fin-lu">Marquer ce chapitre comme lu</button>';
    }
    if (idx > -1 && article && blocs.length) {
      var fichierCourant = PAGES[idx].fichier;
      finCarte = document.createElement("div"); finCarte.className = "fin-lecture";
      article.parentNode.insertBefore(finCarte, article.nextSibling);
      finCarte.addEventListener("click", function (e) {
        if (e.target.id === "fin-lu") lus[fichierCourant] = Date.now();
        else if (e.target.id === "fin-annuler") delete lus[fichierCourant];
        else return;
        sauver(); majFin();
      });
      majFin();

      var minuteur = null;
      var enregistrer = function () {
        var pct = pctLecture(), k = blocCourant();
        positions[fichierCourant] = { i: k, pct: pct, t: Date.now() };
        ecrireJSON("ktt-pos", positions);
        if (pct >= 98 && !lus[fichierCourant]) { lus[fichierCourant] = Date.now(); sauver(); majFin(); }
      };
      window.addEventListener("scroll", function () { clearTimeout(minuteur); minuteur = setTimeout(enregistrer, 400); }, { passive: true });
      window.addEventListener("pagehide", enregistrer);

      /* Arrivée sur la page : lien direct vers un passage, ou proposition de reprise */
      var m = /^#l-(\d+)$/.exec(location.hash);
      var anc = positions[fichierCourant];
      if (m) setTimeout(function () { var n = parseInt(m[1], 10); allerA(recalage[n] != null ? recalage[n] : n); }, 60);
      else if (anc && anc.i > 1 && anc.pct < 98 && blocs[anc.i]) setTimeout(function () {
        if (Math.abs(blocCourant() - anc.i) <= 2) return; /* le navigateur a déjà restauré la position */
        var toast = document.createElement("div");
        toast.className = "toast"; toast.setAttribute("role", "status");
        toast.innerHTML = '<span>Vous vous étiez arrêté à ' + anc.pct + ' % de ce chapitre.</span>' +
          '<button class="bouton" id="toast-ok">Reprendre</button><button class="btn-icone" id="toast-x" aria-label="Ignorer">✕</button>';
        body.appendChild(toast);
        requestAnimationFrame(function () { toast.classList.add("visible"); });
        var fermerToast = function () { toast.classList.remove("visible"); setTimeout(function () { toast.remove(); }, 300); };
        toast.querySelector("#toast-ok").onclick = function () { allerA(anc.i); fermerToast(); };
        toast.querySelector("#toast-x").onclick = fermerToast;
        setTimeout(fermerToast, 12000);
      }, 350);
    }

    /* Accueil : carte « Ma lecture » */
    function majReprise() {
      var zoneL = document.getElementById("ma-lecture");
      var dern = null, tmax = 0;
      Object.keys(positions).forEach(function (f) { if (pageDe(f) && positions[f].t > tmax) { tmax = positions[f].t; dern = f; } });
      if (!dern) { var ancien = lire("ktt-derniere"); if (pageDe(ancien)) dern = ancien; }
      var reprise = document.getElementById("reprise");
      if (reprise && !dern) reprise.innerHTML = "";
      if (reprise && dern) {
        var pd = pageDe(dern), po = positions[dern];
        reprise.innerHTML = '<a class="bouton bouton-second" href="' + esc(dern) + (po && po.i > 1 && !lus[dern] ? "#l-" + po.i : "") + '">Reprendre : ' + esc(libelle(pd)) + (po && !lus[dern] && po.pct ? " (" + po.pct + " %)" : "") + '</a>';
      }
      if (!zoneL) return;
      var nbLus = PAGES.filter(function (p) { return lus[p.fichier]; }).length;
      var h = '<div class="etat-ligne"><span>' + nbLus + ' page' + (nbLus > 1 ? "s" : "") + ' lue' + (nbLus > 1 ? "s" : "") + ' sur ' + PAGES.length + ' en ligne</span><span>' + Math.round(nbLus / PAGES.length * 100) + ' %</span></div>' +
        '<div class="etat-barre"><span style="width:' + (nbLus / PAGES.length * 100) + '%"></span></div>';
      if (dern) {
        var p2 = pageDe(dern), q = positions[dern];
        h += '<p class="ml-reprise">Dernière lecture : <a href="' + esc(dern) + (q && q.i > 1 && !lus[dern] ? "#l-" + q.i : "") + '">' + esc(libelle(p2)) + ' — ' + esc(typo(p2.titre)) + '</a>' +
          (lus[dern] ? " · terminé" : q && q.pct ? " · " + q.pct + " %" : "") + '</p>';
      } else h += '<p class="ml-reprise">Commencez la lecture : votre progression s\'enregistrera automatiquement.</p>';
      if (marques.length) {
        var recents = marques.slice().sort(function (a, b) { return b.t - a.t; }).slice(0, 4);
        h += '<h3 class="ml-titre">Derniers marque-pages</h3><ul class="ml-liste">';
        recents.forEach(function (mm) {
          var pp = pageDe(mm.fichier); if (!pp) return;
          h += '<li><a href="' + esc(mm.fichier) + '#l-' + mm.i + '"><span class="ml-lib">🔖 ' + esc(libelle(pp)) + (mm.note ? " — " + esc(mm.note) : "") + '</span><span class="ml-ext">' + esc(mm.extrait || "") + '</span></a></li>';
        });
        h += '</ul>';
      }
      h += '<button class="bouton bouton-second ml-tous" id="ml-tous">🔖 ' + (marques.length ? "Tous mes marque-pages (" + marques.length + ")" : "Mes marque-pages") + '</button>';
      if (nbLus || dern || marques.length) {
        h += '<details class="ml-reinit"><summary>Réinitialiser ma lecture</summary>' +
          boutonReinit("progression", "Effacer toute la progression de lecture") +
          boutonReinit("marques", "Supprimer tous les marque-pages") +
          boutonReinit("tout", "Tout effacer (progression et marque-pages)") + '</details>';
      }
      h += '<p class="mp-msg" id="ml-msg" role="status"></p>';
      zoneL.innerHTML = h;
      document.getElementById("ml-tous").onclick = function () { ouvrirPanneau(true); };
    }
    majReprise();
    majStatuts();
    window.addEventListener("storage", function () {
      positions = lireJSON("ktt-pos", {}); lus = lireJSON("ktt-lus", {}); marques = lireJSON("ktt-marques", []);
      majStatuts(); majReprise();
    });

    /* ---------- Barre de progression de lecture + retour en haut ---------- */
    var prog = document.getElementById("progression");
    var haut = document.createElement("button");
    haut.className = "haut"; haut.setAttribute("aria-label", "Revenir en haut"); haut.innerHTML = "↑";
    haut.onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };
    body.appendChild(haut);
    function surScroll() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
      haut.classList.toggle("visible", window.scrollY > 800);
    }
    window.addEventListener("scroll", surScroll, { passive: true }); surScroll();
  });
})();

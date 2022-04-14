const booksDataBase = [
  {
    titre: 'Le dahlia noir',
    auteur: 'James Ellroy',
    editions: '\u00c9ditions Rivages',
    datePublication: '2015',
    ISBN: '9782743632182',
    resume:
      "Le 15 janvier 1947, dans un terrain vague de Los Angeles, est d\u00e9couvert le corps nu et mutil\u00e9, sectionn\u00e9 en deux au niveau de la taille, d'une jeune fille de vingt-deux ans : Betty Short, surnomm\u00e9e le Dahlia Noir, par un reporter, \u00e0 cause de son penchant \u00e0 se v\u00eatir totalement en noir. Le meurtre est rest\u00e9 l'une des \u00e9nigmes les plus c\u00e9l\u00e8bres des annales du crime en Am\u00e9rique. Quarante apr\u00e8s, James Ellroy s'est pench\u00e9 sur l'affaire Betty Short et lui a donn\u00e9 une solution romanesque, qu'il d\u00e9die \u00e0 sa propre m\u00e8re, elle-m\u00eame assassin\u00e9e le 22 juin 1958. Le thriller \u00e0 lire, le shocker pour lequel les autres \u00e9crivains seraient pr\u00eats \u00e0 tuer pour l'avoir \u00e9crit, est le prodigieux Dahlia noir de James Ellroy. (Harlan Ellison)",
    genre: ['Fiction'],
    nbrPages: 560,
    picture:
      'http://books.google.com/books/content?id=7uysBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    note: 1,
    etat: 1,
    boite: 6,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Lune sanglante',
    auteur: 'James Ellroy',
    editions: '\u00c9ditions Rivages',
    datePublication: '2015',
    ISBN: '9782743632236',
    resume:
      "Des \u00e9crivains comme \u00e7a, dans le roman noir, on en d\u00e9couvre un tous les dix ans. (Michel Lebrun, Le Matin) Op\u00e9ra noir, peupl\u00e9 de fant\u00f4mes, o\u00f9 le sexe et la mort r\u00f4dent sans cesse dans l'immensit\u00e9 inhumaine de Los Angeles la mal nomm\u00e9e, Lune sanglante est un fulgurant joyau, une moderne trag\u00e9die, qui porte fi\u00e8rement en exergue une citation du Richard II de Shakespeare. (Bertrand Audusse, Le Monde) ... Un des plus remarquables romans noirs de la d\u00e9cennie, par sa pr\u00e9occupation intellectuelle \u00e9lev\u00e9e, son \u00e9criture savante et, pour le dire balistiquement, son \u00e9pouvantable puissance d'arr\u00eat... (Jean-Patrick Manchette, Lib\u00e9ration)",
    genre: ['Fiction'],
    nbrPages: 368,
    picture:
      'http://books.google.com/books/content?id=Ge-sBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    note: 3,
    etat: 1,
    boite: 6,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Vagabond des mers du sud',
    auteur: 'Bernard Moitessier',
    editions: 'Arthaud',
    datePublication: '2018',
    ISBN: '9782081469655',
    resume:
      'N\u00e9 en 1925 en Indochine, Bernard Moitessier navigue avec les p\u00eacheurs du golfe du Siam. \u00c0 27 ans, il part en solitaire \u00e0 bord de Marie-Th\u00e9r\u00e8se, une jonque avec laquelle il fera naufrage. Dans des conditions propres \u00e0 effrayer les plus t\u00e9m\u00e9raires, avec \u00e0 bord un simple compas et un sextant, il affronte durant quatrevingt-cinq jours la mousson, avant d\u2019\u00e9chouer aux \u00eeles Chagos. Accueilli \u00e0 l\u2019\u00eele Maurice, il met trois ans \u00e0 reconstruire un bateau et reprend la mer avec Marie-Th\u00e9r\u00e8se II, vers l\u2019Afrique du Sud et les Antilles. C\u2019est cette \u00e9tonnante aventure que raconte ici Bernard Moitessier, l\u2019un des plus grands navigateurs de tous les temps apr\u00e8s son tour du monde et demi en solitaire, en 1968-69, \u00e0 la suite duquel il publie La Longue Route, un livre culte. Celui qui fut un mod\u00e8le pour nombre de marins aura aussi incarn\u00e9, par ses combats \u00e9cologiques et son altruisme, toute une \u00e9poque. Il est d\u00e9c\u00e9d\u00e9 en juin 1994.',
    genre: ['Travel'],
    nbrPages: 399,
    picture:
      'http://books.google.com/books/content?id=ynVmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    note: 2,
    etat: 2,
    boite: 6,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: "L'\u00e9tranger",
    auteur: 'Albert Camus',
    editions: 'Editions Gallimard',
    datePublication: '1942',
    ISBN: 'UOM:49015000206152',
    resume: 'Analyse : Roman psychologique (intime).',
    genre: ['Fiction'],
    nbrPages: 185,
    picture:
      'http://books.google.com/books/content?id=dNQNAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    note: 5,
    etat: 3,
    boite: 7,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Le mythe de Sisyphe',
    auteur: 'Albert Camus',
    editions: 'Editions Gallimard',
    datePublication: '1985',
    ISBN: 'UCSC:32106009590958',
    resume:
      "L'absurde, le suicide, etc. Premier essai philosophique (1942) de l'auteur. Indispensable (ou presque) \u00e0 tout apprenti philosophe.",
    genre: ['Foreign Language Study'],
    nbrPages: 187,
    picture:
      'http://books.google.com/books/content?id=24gOAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    note: 3,
    etat: 1,
    boite: 5,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'American Psycho',
    auteur: 'Bret Easton Ellis',
    editions: '10/18',
    datePublication: '2007',
    ISBN: '226403937X',
    resume:
      '" Je suis cr\u00e9atif, je suis jeune, [...] extr\u00eamement motiv\u00e9 et extr\u00eamement performant. Autrement dit, je suis fonci\u00e8rement indispensable a la soci\u00e9t\u00e9 ". Avec son sourire carnassier et ses costumes chics, Patrick Bateman correspond au profil type du jeune Yuppie des ann\u00e9es Trump. Comme ses associ\u00e9s de la Chemical Bank, il est d\'une ambition sans scrupules. Comme ses amis, de il rythme ses soir\u00e9es-cocktails pauses coca\u00efne. \u00c0 la seule diff\u00e9rence que Patrick Bateman viole torture et tue. La nuit, il d\u00e9voile sa double personnalit\u00e9 en agressant de simples passants, des clochards, voire un ami. Mais il ne ressent jamais rien. Juste une l\u00e9g\u00e8re contrari\u00e9t\u00e9 lorsque ses sc\u00e9narios ne se d\u00e9roulent pas exactement comme pr\u00e9vu...',
    genre: ['Fiction'],
    nbrPages: 526,
    picture:
      'http://books.google.com/books/content?id=a5kNrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    note: 3,
    etat: 3,
    boite: 1,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Moins que z\u00e9ro',
    auteur: 'Bret EASTON ELLIS',
    editions: 'Robert Laffont',
    datePublication: '2016',
    ISBN: '9782221123300',
    resume:
      "En 1985, le roman d'un jeune homme de vingt et un ans prenait la temp\u00e9rature de l'Am\u00e9rique. Et pr\u00e9disait, avec l'autorit\u00e9 et la lucidit\u00e9 exceptionnellement accord\u00e9es \u00e0 la jeunesse, que le climat allait se refroidir. Le livre, vite acclam\u00e9 pour \u00eatre plus vite encore r\u00e9duit \u00e0 une c\u00e9l\u00e9bration du vide, d\u00e9crivait en r\u00e9alit\u00e9, avec ironie et compassion, la mis\u00e8re de la jeunesse dor\u00e9e de Beverly Hills ou de Bel Air. Mis\u00e8re de la drogue devenue pharmaceutique, du sexe cadenass\u00e9 par la pornographie, de l'argent f\u00e9tichis\u00e9, du langage \u00e9dulcor\u00e9 surtout. Jamais la richesse n'avait \u00e9t\u00e9 aussi pauvre. Mais, indiff\u00e9rent au sort des particules p\u00e9trifi\u00e9es, trop savant pour se soucier de l'avenir, assez \u00e9l\u00e9gant pour dissimuler ses inspirations, Bret Easton Ellis d\u00e9tournait d\u00e9j\u00e0 son regard de la religion cathodique pour le poser ailleurs : \" [...] ils se retournaient pour lever les yeux vers l'\u00e9cran monolithique sur lequel on balan\u00e7ait les images. Certains pronon\u00e7aient les paroles de la chanson en cours. Mais je me concentrais sur ceux qui ne pronon\u00e7aient pas les paroles ; sur ceux qui les avaient oubli\u00e9es ; sur ceux qui ne les avaient peut-\u00eatre jamais sues \". Impassible, Bret Easton Ellis invite \u00e0 le lire ceux qui savent se taire, ceux qui savent oublier, ceux qui n'ont jamais cru devoir apprendre. Pierre Guglielmina",
    genre: ['Fiction'],
    nbrPages: 123,
    picture:
      'http://books.google.com/books/content?id=14_RCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    note: 5,
    etat: 2,
    boite: 7,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Lunar Park',
    auteur: 'Bret Easton Ellis',
    editions: '10 * 18',
    datePublication: '2010',
    ISBN: '2264051132',
    resume:
      "O\u00f9 s'arr\u00eate le r\u00e9el ? O\u00f9 commence la fiction? Dans cette oeuvre introspective, Bret Easton Ellis nous d\u00e9voile les coulisses de sa vie d'\u00e9crivain. Us\u00e9 par les exc\u00e8s du star-system, l'auteur sulfureux d\u00e9cide de se ranger et d'aller vivre sur la c\u00f4te Est am\u00e9ricaine avec sa femme et son fils. Mais, tr\u00e8s vite, un nouvel assaut de d\u00e9rapages contrarie le tableau idyllique de l'homme assagi. Dans un univers fantasmatique, rempli de sexe et de m\u00e9dicaments, il d\u00e9couvre que sa belle maison est hant\u00e9e par le spectre de son p\u00e8re, et peut \u00eatre aussi par Patrick Bateman, le h\u00e9ros assassin d'\"American Psycho\". Tandis que la moquette du s\u00e9jour \" pousse \" et qu'une peluche prend vie sous ses yeux, l'autobiographie commence \u00e0 danser sur le fil du r\u00e9cit d'horreur, pr\u00eate \u00e0 y sombrer \u00e0 tout moment...",
    genre: ['Fiction'],
    nbrPages: 472,
    picture:
      'http://books.google.com/books/content?id=SblOewAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    note: 2,
    etat: 3,
    boite: 2,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Au sud de nulle part',
    auteur: 'Charles Bukowski',
    editions: null,
    datePublication: '2021',
    ISBN: '2264076577',
    resume: null,
    genre: null,
    nbrPages: 283,
    picture: null,
    note: 4,
    etat: 1,
    boite: 1,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: "Journal d'un vieux d\u00e9gueulasse",
    auteur: 'Charles Bukowski',
    editions: 'LGF/Le Livre de Poche',
    datePublication: '1998',
    ISBN: '2253143847',
    resume:
      "C'est en 1967, dans le magazine anticonformiste Open City, qu'un po\u00e8te presque inconnu commen\u00e7a de publier une chronique r\u00e9guli\u00e8re. Avec une brutalit\u00e9 rarement \u00e9gal\u00e9e, doubl\u00e9e d'une superbe indiff\u00e9rence au scandale, il y exprimait sa r\u00e9volte contre la soci\u00e9t\u00e9 am\u00e9ricaine, le pouvoir, l'argent, la famille, la morale. L'alcool, le sexe, les \u00e9chos d'une vie marginale et souvent mis\u00e9rable y \u00e9taient brandis comme autant de signes de rupture... Depuis lors, l'auteur des Contes de la folie ordinaire, d'Au sud de nulle part, de Pulp, disparu en 1994, est devenu c\u00e9l\u00e8bre. Ce journal, ici \u00e9dit\u00e9 dans une nouvelle traduction et dans sa version int\u00e9grale, n'est pas seulement un des sommets de son \u0153uvre, c'est un classique de la litt\u00e9rature contestataire, qui conserve, trente ans apr\u00e8s sa naissance, toute sa force, toute sa fra\u00eecheur.",
    genre: ['Fiction'],
    nbrPages: 315,
    picture:
      'http://books.google.com/books/content?id=L3bIGwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    note: 3,
    etat: 1,
    boite: 7,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Un tueur sur la route',
    auteur: 'James Ellroy',
    editions: '\u00c9ditions Rivages',
    datePublication: '2015',
    ISBN: '9782743632311',
    resume:
      "Il existe une dynamique dans la mise en oeuvre de l'horreur : servez-la garnie d'hyperboles fleuries, et la distance s'installe m\u00eame si la terreur est pr\u00e9sente, puis branchez tous les feux du clich\u00e9 litt\u00e9raire ou figuratif, et vous ferez na\u00eetre un sentiment de gratitude parce que le cauchemar prendra fin, un cauchemar au premier abord trop horrible pour \u00eatre vrai. Je n'ob\u00e9irai pas \u00e0 cette dynamique, je ne vous laisserai pas me prendre en piti\u00e9.... Je m\u00e9rite crainte et respect pour \u00eatre demeur\u00e9 inviol\u00e9 jusqu'au bout du voyage que je vais d\u00e9crire, et puisque la force de mon cauchemar interdit qu'il prenne fin, vous me les offrirez. Ainsi parle Martin Michael Plunkett, \u00e2g\u00e9 de 35 ans, coupable de plusieurs dizaines de meurtres sexuels couvrant tout le territoire des \u00c9tats-Unis sur une p\u00e9riode de dix ans. Avec Un tueur sur la route, James Ellroy s'est attach\u00e9 \u00e0 faire le portrait, de l'int\u00e9rieur, d'un serial killer.",
    genre: ['Fiction'],
    nbrPages: 399,
    picture:
      'http://books.google.com/books/content?id=QfCsBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    note: 2,
    etat: 1,
    boite: 7,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: '\u00c0 cause de la nuit',
    auteur: 'James Ellroy',
    editions: '\u00c9ditions Rivages',
    datePublication: '2015',
    ISBN: '9782743631918',
    resume:
      "Il est psychiatre, manipule les solitaires et les faibles. C'est la nuit qu'il exerce son pouvoir mal\u00e9fique. Plus il soutire d'informations \u00e0 ses malades, plus sa puissance s'accro\u00eet. Jusqu'au jour o\u00f9 ce voyageur de la nuit croise le chemin du sergent Lloyd Hopkins. Apr\u00e8s Lune sanglante, A cause de la nuit est le second \u00e9pisode de la saga de Lloyd Hopkins. Les romans d'Ellroy nous emm\u00e8nent sur les chemins d\u00e9voy\u00e9s de la drogue et de la folie, dans les sph\u00e8res troubles de l'intelligence pervertie. Baign\u00e9s d'une lumi\u00e8re \u00e9trange, ils ont la beaut\u00e9 inqui\u00e9tante d'une nouvelle arme (Gilles Berton, Play Boy) Pour une fois, il n'est pas exag\u00e9r\u00e9 de parler d'un sens du suspense qui secoue les tripes, car tout est ma\u00eetrise, toute la sensibilit\u00e9 de l'auteur est au service de cette infernale histoire. (Jacques Mondoloni, Le Proven\u00e7al)",
    genre: ['Fiction'],
    nbrPages: 394,
    picture:
      'http://books.google.com/books/content?id=pOysBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    note: 3,
    etat: 2,
    boite: 5,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Le coeur des t\u00e9n\u00e8bres',
    auteur: 'Joseph Conrad',
    editions: 'LGF/Le Livre de Poche',
    datePublication: '2012',
    ISBN: '2253167444',
    resume:
      "Le Coeur des t\u00e9n\u00e8bres s'inspire d'un \u00e9pisode de la vie de Conrad en 1890 dans l'\u00c9tat libre du Congo mis en coupe r\u00e9gl\u00e9e au profit de L\u00e9opold II. De cette exp\u00e9rience am\u00e8re, l'\u00e9crivain a tir\u00e9 un r\u00e9cit ench\u00e2ss\u00e9 dont chaque \u00e9l\u00e9ment, \u00e0 la fa\u00e7on des poup\u00e9es russes, dissimule une autre r\u00e9alit\u00e9 la Tamise annonce le Congo, le yawl de croisi\u00e8re la Nellie le vapeur caboss\u00e9 de Marlow, truchement de Conrad. Ces changements d'identit\u00e9 sont favoris\u00e9s par les \u00e9clairages instables au coucher du soleil ou par le brouillard qui modifie tous les rep\u00e8res et dont \u00e9merge Kurtz. Pr\u00e9sent\u00e9 par de nombreux personnages bien avant d'entrer en sc\u00e8ne, celui-ci fait voler en \u00e9clats toutes les d\u00e9finitions et finit par incarner le coeur \u00e9nigmatique des t\u00e9n\u00e8bres: le lieu o\u00f9 se rencontrent l'abjection la plus absolue et l'id\u00e9alisme le plus haut.",
    genre: null,
    nbrPages: 215,
    picture:
      'http://books.google.com/books/content?id=JdE1NAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    note: 5,
    etat: 3,
    boite: 5,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Le Monde selon Garp',
    auteur: 'John Irving',
    editions: 'M\u00e9dia Diffusion',
    datePublication: '2013',
    ISBN: '9782021122282',
    resume:
      "Alors qu'en 1943, face \u00e0 une contraception d\u00e9faillante, le souci de bien des femmes reste d'avoir un homme sans avoir d'enfant, la pr\u00e9occupation de l'excentrique Jenny est d'avoir un enfant et surtout pas d'homme. C'est ainsi qu'elle jette son d\u00e9volu sur le sergent technicien Garp, \u00ab op\u00e9rationnellement \u00bb intact en d\u00e9pit de son cerveau endommag\u00e9. De cette \u00e9ph\u00e9m\u00e8re union na\u00eetra S.T. Garp. Impossible de r\u00e9sumer ce roman d\u00e9bordant d'humour et d'\u00e9nergie peupl\u00e9 de personnages passion\u00e9s, foisonnant de p\u00e9rip\u00e9ties d\u00e9lirantes. Le Monde selon Garp, c'est d'abord le r\u00e9cit des rapports orageux et tendres entre une m\u00e8re c\u00e9l\u00e8bre, f\u00e9ministe malgr\u00e9 elle, et son fils \u00e9crivain, tous deux individualistes forcen\u00e9s. Le Monde selon Garp, c'est aussi un savoureux commentaire sur l'art et l'imaginaire, la preuve \u00e9clatante que l'outrance et le baroque peuvent \u00e9clairer notre monde avec une justesse incomparable. Car selon Garp et son cr\u00e9ateur, \u00ab le romancier est un m\u00e9decin qui ne s'occuperait que des incurables.Et nous sommes tous des incurables! \u00bb",
    genre: ['Fiction'],
    nbrPages: 672,
    picture:
      'http://books.google.com/books/content?id=GKnMucLt5VsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    note: 3,
    etat: 2,
    boite: 7,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: "Harry Potter \u00e0 l'\u00e9cole des sorciers",
    auteur: 'Joanne Kathleen Rowling',
    editions: 'Gallimard jeunesse',
    datePublication: '2017',
    ISBN: '2070584623',
    resume:
      "Le jour de ses onze ans, Harry Potter, un orphelin \u00e9lev\u00e9 par un oncle et une tante qui le d\u00e9testent, voit son existence boulevers\u00e9e. Un g\u00e9ant vient le chercher pour l'emmener \u00e0 Poudlard, une \u00e9cole de sorcellerie ! Voler en balai, jeter des sorts, combattre les trolls : Harry se r\u00e9v\u00e8le un sorcier dou\u00e9. Mais un myst\u00e8re entoure sa naissance et l'effroyable V., le mage dont personne n'ose prononcer le nom.",
    genre: null,
    nbrPages: 311,
    picture:
      'http://books.google.com/books/content?id=hH87swEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    note: 5,
    etat: 1,
    boite: 2,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Harry Potter 2 et la chambre des secrets',
    auteur: 'Joanne K. Rowling',
    editions: 'Gallimard jeunesse',
    datePublication: '2017',
    ISBN: '207058464X',
    resume:
      "Une rentr\u00e9e fracassante en voiture volante, une \u00e9trange mal\u00e9diction qui s'abat sur les \u00e9l\u00e8ves, cette deuxi\u00e8me ann\u00e9e \u00e0 l'\u00e9cole des sorciers ne s'annonce pas de tout repos ! Entre les cours de potions magiques, les matches de Quidditch et les combats de mauvais sorts, Harry et ses amis Ron et Hermione trouveront-ils le temps de percer le myst\u00e8re de la Chambre des Secrets ?",
    genre: ['Juvenile Fiction'],
    nbrPages: 368,
    picture:
      'http://books.google.com/books/content?id=migjtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    note: 2,
    etat: 1,
    boite: 2,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: "Harry Potter et le Prisonnier d'Azkaban",
    auteur: 'J.K. Rowling',
    editions: 'Pottermore Publishing',
    datePublication: '2015',
    ISBN: '9781781101056',
    resume:
      'Sirius Black, le dangereux criminel qui s\u2019est \u00e9chapp\u00e9 de la forteresse d\u2019Azkaban, recherche Harry Potter. C\u2019est donc sous bonne garde que l\u2019apprenti sorcier fait sa troisi\u00e8me rentr\u00e9e. Au programme : des cours de divination, la fabrication d\u2019une potion de Ratatinage, le dressage des hippogriffes... Mais Harry est-il vraiment \u00e0 l\u2019abri du danger qui le menace? Le troisi\u00e8me tome des aventures de Harry Potter vous emportera dans un tourbillon de surprises et d\u2019\u00e9motions. Frissons et humour garantis!',
    genre: ['Fiction'],
    nbrPages: 448,
    picture:
      'http://books.google.com/books/content?id=vWxokFDTpy4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    note: 1,
    etat: 3,
    boite: 7,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
  {
    titre: 'Harry Potter et la Coupe de Feu',
    auteur: 'J.K. Rowling',
    editions: 'Pottermore Publishing',
    datePublication: '2015',
    ISBN: '9781781101063',
    resume:
      'Harry Potter a quatorze ans et entre en quatri\u00e8me ann\u00e9e au coll\u00e8ge de Poudlard. Une grande nouvelle attend Harry, Ron et Hermione \u00e0 leur arriv\u00e9e : la tenue d\u2019un tournoi de magie exceptionnel entre les plus c\u00e9l\u00e8bres \u00e9coles de sorcellerie. D\u00e9j\u00e0 les d\u00e9l\u00e9gations \u00e9trang\u00e8res font leur entr\u00e9e. Harry se r\u00e9jouit... Trop vite. Il va se trouver plong\u00e9 au coeur des \u00e9v\u00e9nements les plus dramatiques qu\u2019il ait jamais eu \u00e0 affronter. Dans ce quatri\u00e8me tome bouleversant, dr\u00f4le, fascinant, qui r\u00e9v\u00e8le la richesse des enjeux en cours, Harry Potter doitfaire face et relever d\u2019immenses d\u00e9fis.',
    genre: ['Fiction'],
    nbrPages: 779,
    picture:
      'http://books.google.com/books/content?id=ox9BiuVKM1cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    note: 5,
    etat: 2,
    boite: 7,
    toBorrow: false,
    toDelete: false,
    outOfStock: false
  },
];

export default booksDataBase;

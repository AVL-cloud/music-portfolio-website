// Auto-generated from Scrivener "Passion À Six Cordes"
// 102 sections across 14 chapters in 3 parts

export interface SeedSection {
  title: string
  content: string
  order: number
}

export interface SeedChapter {
  title: string
  description: string
  part: string
  order: number
  sections: SeedSection[]
}

export interface SeedCourse {
  title: string
  description: string
  chapters: SeedChapter[]
}

export const PASSION_SIX_CORDES: SeedCourse = {
  title: 'Passion À Six Cordes',
  description: 'Introduction complète à la guitare et fondements de théorie musicale. De l\'anatomie de l\'instrument aux techniques avancées de jazz, en passant par le home studio.',
  chapters: [
    {
      title: "Fondamentaux",
      description: "Les bases absolues : anatomie, tenue, jeu et accordage.",
      part: "Guitare",
      order: 1,
      sections: [
        {
          title: "Anatomie de la guitare",
          content: `<p><strong>Contexte</strong></p>
<p>Il est important d’apprendre très tôt l’<strong>anatomie</strong> de la guitare, c’est-à-dire la nomenclature et la position des pièces qui forment cet instrument.</p>
<p><strong>Anatomie</strong></p>
<p>Voici une ébauche de guitare acoustique et les noms des parties auxquelles on se réfère fréquemment :</p>
<p>Image originale par <a href="https://pixabay.com/fr/users/alles-2597842/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1473400">Alexander Lesnitsky</a></p>
<p>Annotations par moi-même</p>`,
          order: 1,
        },
        {
          title: "Tenue de la guitare",
          content: `<p><strong>Contexte</strong></p>
<p>La <strong>tenue </strong>de la guitare est la manière dont vous allez tenir votre instrument. Une bonne tenue permet de :</p>
<p>- obtenir un confort de jeu optimal;</p>
<p>- éviter un passage chez le médecin.</p>
<p>Il est nécessaire dès le début de son apprentissage d’étudier la tenue de la guitare pour éviter de s’habituer à de mauvaises postures qui freineraient votre progression et présenteraient des risques d’ordre médical.</p>
<p><strong>Positions</strong></p>
<p>Position <strong>classique</strong><strong> </strong>:</p>
<p>- Jambe gauche surélevée à l’aide d’un repose-pied ou d’une caisse sous le pied gauche;</p>
<p>- Éclisse gauche encastrée sur la cuisse gauche;</p>
<p>- Haut de la table contre la poitrine;</p>
<p>- Manche orienté entre la verticale et votre gauche, la tête de la guitare à hauteur de la votre.</p>
<p>Il s’agit d’un position très stable car la guitare tient d’elle-même entre vos 2 cuisses et sur votre poitrine. Le poignet n’a pas besoin d’être particulièrement arqué pour jouer, ce qui vous évite de le fatiguer - voire de l’abîmer - et vous avez accès à l’ensemble du manche. Cette position est idéale pour la musique classique, baroque, romantique, …</p>
<p>Position <strong>détendue</strong> :</p>
<p>- Pieds au sol, jambes à hauteur égale;</p>
<p>- Éclisse gauche encastrée sur la cuisse droite;</p>
<p>- Manche environ à l’horizontale.</p>
<p>Cette position plus moderne est moins stable : la guitare posée uniquement sur une jambe est susceptible de basculer, en particulier si son corps n’est pas équilibré. Il est donc nécessaire de la maintenir en position et non pas se pencher avec la guitare au gré de la gravité.</p>
<p><strong>Avertissements</strong></p>
<p>N’orientez pas la guitare vers vous pour mieux voir les accords que vous réalisez ou les cordes que vous grattez, et ne vous penchez pas dessus non plus : dans les 2 cas, vous allez avoir des douleurs au poignet ou à la colonne vertébrale suite à une mauvaise posture.</p>
<p>En position détendue, vous pouvez placer vos jambes assez librement à condition de ne pas gêner l’accès au manche au bras gauche.</p>
<p><strong>Remarques</strong></p>
<p>Ce qui est décrit s’applique aux droitiers, il suffit pour les gaucher d’en appliquer la symétrique.</p>`,
          order: 2,
        },
        {
          title: "Jeu au m\u00e9diator (vs aux doigts)",
          content: `<p><strong>Définition</strong></p>
<p>Les petites pièces vaguement triangulaires que vous avez déjà pu voir dans les mains de guitaristes s’appellent des <strong>médiators</strong>. On parle également de <strong>plectre</strong> ou <strong>pick</strong>. Ceux-ci servent à gratter les cordes de la guitare d’une manière plus précise qu’aux doigts et d’obtenir un son plus net.</p>
<p><strong>Précisions techniques</strong></p>
<p>On gratte les cordes à l’aide de la pointe du médiator. La partie opposée à la pointe est donc coincée entre la dernière phalange du pouce et celle de l’index de la main rythmique (main droite si vous êtes droitier). Le reste de la main peut être ouvert, si vous gardez le restant de vos doigts dépliés, ou fermé, si vous les rétractez comme pour former un poing.</p>
<p>Le mouvement du médiator doit être parallèle aux plan des cordes : la main à la même hauteur par rapport aux cordes pour qu’elles soient toutes grattées identiquement. En effet, l’angle du médiator aux cordes et la proximité de votre main aux cordes a une incidence directe sur votre son.</p>`,
          order: 3,
        },
        {
          title: "Jeu aux doigts (vs au m\u00e9diator)",
          content: `<p><strong>Définition</strong></p>
<p>Sans médiator, on parle d’un jeu <strong>aux doigts</strong>, ou <strong>à la main</strong>. Les attaques des cordes sont moins précises, un peu plus sourdes, et il est difficile d’en sortir un son aussi puissant, mais il est privilégié pour un jeu en arpège par exemple.</p>
<p><strong>Précisions techniques</strong></p>
<p>Il existe une multitude de manières pour jouer sans pick.</p>
<p>En rythmique :</p>
<p>- gratter les cordes en baladant le pouce - et le pouce uniquement - de bas en haut ;</p>
<p>- coller le pouce à l’index et vous servir de cette jointure comme d’un médiator, auquel cas vous pouvez ouvrir ou fermer votre main en choisissant ou non de replier vos autres doigts ;</p>
<p>- utiliser l’index, majeur et annulaire pour gratter vers le bas, et remonter à l’aide du pouce;</p>
<p>- etc.</p>
<p>En arpège :</p>
<p>Cf section sur le jeu en arpège.</p>
<p><strong>Remarques</strong></p>
<p>Le jeu au doigt est souvent le plus adapté à la technique de l'arpège.</p>`,
          order: 4,
        },
        {
          title: "Jeu en rythmique (vs en arp\u00e8ge)",
          content: `<p><strong>Définition</strong></p>
<p>On parle usuellement d’un jeu <strong>rythmique</strong> pour des riffs ou accords grattés/plaqués.</p>
<p><strong>Exemple</strong></p>
<p>Voici quelques mesures de jeu en rythmique :</p>
<p>rythmique</p>
<p><strong>Précisions techniques</strong></p>
<p>- Le symbole de talon signifie que l’attaque se fait vers le bas (des graves aux aiguës);</p>
<p>- Le symbole de pointe signifie que l’attaque se fait vers le haut (des aiguës aux graves).</p>
<p><strong>Remarques</strong></p>
<p>Ce jeu est fréquemment nuancé par l’usage de techniques comme le palm mute, les coups percussifs, les feintes et altérations, etc.</p>`,
          order: 5,
        },
        {
          title: "Jeu en arp\u00e8ge (vs en rythmique)",
          content: `<p><strong>Définition</strong></p>
<p>Un jeu en <strong>arpège</strong> se réfère à une manière de jouer les différentes notes d’un accord les unes à la suite des autres selon un motif défini. Cette technique est pensée pour être jouée aux doigts, mais on peut jouer des arpèges au médiator également (ex. : ”The house of the rising sun”, The Animals).</p>
<p><strong>Exemple</strong></p>
<p>Voici quelques mesures de jeu en arpège :</p>
<p>arpege</p>
<p>Début du morceau “Je l’aime à mourir”, Francis Cabrel.</p>
<p><strong>Précisions techniques</strong></p>
<p>- Lorsqu’on joue en arpège, on travaille usuellement aux doigts et non pas au médiator. On désigne alors les différents doigts par leurs initiales respectives : P pour le pouce, I pour l’index, M pour le majeur et A pour l’annulaire;</p>
<p>- Par convention,  le pouce joues les cordes basses <strong>E A D</strong> (cordes 4,5,6). Chaque doigt est ensuite assigné à une corde : l’index à la corde <strong>G </strong>(corde 3),<strong> </strong>le majeur à la corde <strong>B</strong> (corde 2) et l’annulaire à la corde <strong>e </strong>(corde 1). Toutefois, cette règle n’est pas gravée dans le marbre. Il arrive ainsi qu’on joue les basses des accords au pouce sur les 2 cordes <strong>E</strong> et <strong>A</strong> et assigne les 3 doigts I M A respectivement aux cordes <strong>D G</strong> et<strong> B</strong> (ex. : ”Dust in the wind”, Kansas);</p>
<p>- On n’utilise jamais l’auriculaire.</p>
<p><strong>Remarques</strong></p>
<p>On désigne un arpège par son motif, c’est-à-dire l’ordre dans lequel on joue les doigts. On parlera ainsi d’arpège en PIMA, PAMI, PIMAMI, etc pour désigner l’ordre dans lequel les doigts viennent tirer les cordes.</p>
<p>Si plusieurs cordes basses appartiennent à l’accord, on joue usuellement la plus grave qui se trouve souvent en être la fondamentale. On peut autrement opter pour un arpège avec variation de basse en ne jouant pas la même basse d’une répétition du motif à la suivante sur un même accord. C’est le cas de l’arpège de “Je l’aime à mourir” dont le début est utilisé en exemple ci-avant. C’est un arpège en PAMI (Pouce - Annulaire - Majeur - Index) avec variation de basse.</p>`,
          order: 6,
        },
        {
          title: "Accordage standard (en Mi)",
          content: `<p><strong>Définition</strong></p>
<p>Une guitare standard possède 6 cordes. Elles sont numérotées de 1 à 6 de la plus aiguë à la plus grave.</p>
<p>Une corde sur laquelle on ne pose pas de doigt est une <strong>corde à vide</strong>. On parle de jouer une corde à vide si on la gratte ainsi à la main droite.</p>
<p>L’<strong>accordage en Mi</strong> d’une guitare consiste à ce que les cordes à vide forment la suite de note <strong>E A D G B e</strong> de la plus grave à la plus aiguë. Il s’agit de l’accordage standard dune guitare.</p>
<p><strong>Accordage</strong></p>
<p>Comment accorder ainsi une guitare ? Que vous aillez l’oreille absolue ou un accordeur, la technique est la même. Pour chaque corde :</p>
<p>- jouer sur la corde à vide et laisser résonner la note;</p>
<p>- pendant qu’elle résonne, tourner la mécanique correspondante - vous devriez entendre la note changer au fur et à mesure que vous tournez la mécanique;</p>
<p>- si la note est trop grave (curseur de l’accordeur vers la gauche), tourner la mécanique dans le sens trigonométrique (anti-horaire);</p>
<p>- si la note est trop aiguë (curseur de l’accordeur vers la droite), tourner la mécanique dans le sens horaire;</p>
<p>- si le curseur est situé pratiquement mais non exactement à la verticale et que vous ne parvenez pas à ajuster la note, tourner franchement la mécanique dans sens ou dans l’autre pour vous éloigner de cette position et répéter le protocole.</p>
<p>Voici l’accordage standard en Mi :</p>
<p>accordageStandardMi</p>
<p>Accordage standard en Mi.</p>
<p><strong>Précisions techniques</strong></p>
<p>En accordage standard, un espace de 5 demi-tons (intervalle de quarte juste) sépare deux cordes consécutives SAUF les cordes N°<strong>3</strong> et N°<strong>2</strong> (cordes de <strong>G </strong>et <strong>B</strong>)<strong> </strong>entre lesquelles il n’y a que 4 demi-tons (intervalle de tierce majeure). On dit donc que deux cordes consécutives sont accordées en quartes, sauf les cordes Sol et Si (2 et 3), accordées en tierce.</p>
<p>Si la notion d’intervalle vous est encore inconnue, ne vous focalisez pas là-dessus. Retenez toutefois qu’il est nécessaire de prendre en compte cette nuance lorsqu’on souhaite transposer des mélodies ou des accords sur la largeur du manche.</p>
<p><strong>Remarques</strong></p>
<p>On peut également accorder une guitare en Ré (par exemple) en baissant chaque corde d’un ton par rapport à l’accordage en Mi, Ré étant situé 1 ton en dessous de Mi. Les cordes à vide formeront alors la suite D G C F A d.</p>
<p>Accorder un instrument est assez intuitif car notre oreille est habituée à la musique, donc connait les hauteurs de notes justes.</p>`,
          order: 7,
        },
        {
          title: "Accordage drop (en R\u00e9)",
          content: `<p><strong>Définition</strong></p>
<p>Un <strong>accordage drop</strong> consiste à descendre une ou plusieurs corde(s) de la guitare par rapport à un accordage standard pour obtenir plus de graves sur la guitare.</p>
<p><strong>Accordage</strong></p>
<p>Un <strong>accordage drop D</strong> se forme à partir d’un accordage standard en<strong> </strong>Mi en baissant la corde la plus grave d’un ton pour la passer de <strong>E</strong> à <strong> D</strong>. Vous pourriez imaginer des Drop C, Drop B, etc, mais ils sont moins courants.</p>
<p>Voici la position du Drop D :</p>
<p>accordageDropRe</p>
<p>On peut également s’accorder en <strong>double Drop D </strong>de la manière suivante :</p>
<p>accordageDoubleDropRe</p>
<p>En double drop <strong>D</strong>, des <strong>Ré</strong> se substituent aux notes de <strong>Mi</strong> de l’accordage standard.</p>
<p><strong>Remarques</strong></p>
<p>Dans le métal où on cherche un jeu très lourd et puissant, on rencontre souvent des accordages Drop.</p>`,
          order: 8,
        },
        {
          title: "Accordage ouvert (en Sol)",
          content: `<p><strong>Définition</strong></p>
<p>L’<strong>accordage ouvert </strong>est un type d’accordage où jouer l’ensemble des cordes à vide forme un accord de triade, comportant les 3 notes suivantes : tonique, tierce et quinte (cf chapitre sur les accords). Il se différencie ainsi d’un accordage standard où les cordes à vide forment un accord <strong>m7add11</strong> (mineur 7 add 11) à 5 notes distinctes, lequel est difficilement utilisable.</p>
<p><strong>Accordage</strong></p>
<p>Voici un accordage ouvert en Sol, dit <strong>open G</strong>.</p>
<p>Celui-ci peut également être réalisé en La, Si, …</p>
<p>accordageOuvertSol</p>
<p>On retrouve de la corde la plus grave à la plus aiguë : 5te - T - 5te - T - 3ce - 5te</p>
<p>Notez bien que chaque corde à vide est une note de l’accord de <strong>Sol</strong>. Ainsi, les cordes 1 à 5 forment la position fondamentale de l’accord de <strong>G</strong>, et on forme l’accord <strong>G\\D</strong> (accord de <strong>Sol</strong> renversé sur sa quinte, la note de <strong>Ré</strong>) si on y ajoute la corde 6.</p>
<p><strong>Remarques</strong></p>
<p>L’utilité d’un accordage ouvert est la simplicité qu’il donne à la réalisation d’un accord. D’un simple barré, vous obtenez une base d’accord tonique - tierce - quinte que vous pouvez ensuite enrichir ou modifier à l’aide de vos doigts restants.</p>`,
          order: 9,
        },
      ],
    },
    {
      title: "Mat\u00e9riel",
      description: "Guitares, cordes, micros, amplis et p\u00e9dales d'effets.",
      part: "Guitare",
      order: 2,
      sections: [
        {
          title: "Guitares",
          content: `<p><strong>Définition(s)</strong></p>
<p>Une <strong>guitare acoustique </strong>est une guitare possédant une caisse de résonance dans laquelle sont naturellement amplifiées les fréquences générées par la vibration des cordes de l’instrument.</p>
<p>Une <strong>guitare électrique</strong> est une guitare ne possédant pas de caisse de résonance mais sur laquelle sont implantés un ou plusieurs micro(s). On la joue donc branchée à un amplificateur pour produire un son suffisamment puissant pour être apprécié.</p>
<p>Une <strong>guitare électro-acoustique </strong>est une guitare possédant à la fois une caisse de résonance et un système de micro(s), ce qui fait qu’elle peut être jouée telle quelle aussi bien que branchée à un amplificateur ou une carte son à des fins d’enregistrement par exemple.</p>
<p><strong>Déclinaison(s)</strong></p>
<p>Il existe trois principales familles de guitares, évoquées ci-dessous.</p>
<p>- La <strong>guitare classique</strong> est un instrument à vocation purement acoustique bien qu’on la trouve parfois équipée de micro(s). Son son est naturellement amplifié par une caisse de résonance. Elle possède au moins et en général 6 cordes, en Nylon, les plus graves recouvertes d’une couche de métal.</p>
<p>- La <strong>guitare folk</strong> a également une vocation acoustique bien qu’on la retrouve plus fréquemment équipée de micro(s) que son homologue classique. Elle possède également un plus grand corps et ses 6 cordes ou plus étant en métal, sa sonorité est moins sèche que celle de sa cousine classique.</p>
<p>- Souvent à corps plein, la <strong>guitare électrique</strong> a une vocation purement électrique. Elle est équipée de micro(s) qui transforment les vibrations de ses cordes en un signal électrique transporté par câble jack vers les éventuelles pédales d’effets et l’amplificateur. L’univers des possibles est donc infini en terme de son.</p>
<p><strong>Remarque(s)</strong></p>
<p>Les guitares classiques et folks peuvent être acoustiques ou électro-acoustiques.</p>
<p>Les guitares électriques pour leur part sont évidemment toutes électriques.</p>
<p><strong>Annexe(s)</strong></p>
<p>Ci-dessous, de gauche à droite : une guitare acoustique classique, une électro-acoustique folk ainsi que deux électriques;</p>`,
          order: 1,
        },
        {
          title: "Cordes",
          content: `<p><strong>Définition(s)</strong></p>
<p>Les <strong>cordes</strong> déterminent une grande partie de la teinte du son de votre guitare. C’est leur vibration qui génère le son lorsque vous les jouez.</p>
<p>Le <strong>tirant</strong> d’un jeu de cordes est souvent exprimé sous la forme X/Y. Il s’agit du rapport des diamètres en pouce de la corde la plus fine/aiguë sur la corde la plus large/grave. Par exemple, 10/46 indique que la première corde de votre guitare a un diamètre de 0.010 pouces contre 0.046 pour la dernière.</p>
<p>La fréquence produite par une corde vibrante étant proportionnelle à son épaisseur, le <strong>tirant</strong> correspond donc également au rapport de fréquences de la corde la plus aiguë sur la corde la plus grave.</p>
<p>La <strong>tension</strong> d’une corde définit la force qu’il faudra pour la jouer. Le plus une corde est tendue au niveau de sa mécanique et le plus elle est épaisse, le plus sa tension sera importante.</p>
<p><strong>Déclinaison(s)</strong></p>
<p>On choisit en général un set de cordes par leur tirant :</p>
<p>- Un <strong>tirant faible </strong>est synonyme de cordes fragiles, qui peuvent casser rapidement, notamment si vous avez un jeu agressif;</p>
<p>- Un <strong>tirant medium </strong>représente des cordes moins sensibles. A précision égale, votre son sera donc plus propre que sur un tirant faible, mais demandera plus de force au niveau des doigts;</p>
<p>- Un <strong>tirant fort</strong> provoque une tension élevée, et jouer sur un tel set risque d’abîmer vos articulations si vous manquez d’expérience. Ils sont à privilégier pour des types de jeux spéciaux.</p>
<p>En général, les cordes des guitares classiques sont en Nylon, et celles des folks et électriques en métal.</p>`,
          order: 2,
        },
        {
          title: "Mediator",
          content: `<p><strong>Définition(s)</strong></p>
<p>Un <strong>médiator</strong>, encore appelé plectre ou pick, est une pièce plus ou moins triangulaire dont on se sert pour gratter les cordes de la guitare.</p>
<p><strong>Déclinaison(s)</strong></p>
<p><strong>Gabarits</strong></p>
<p>Il existe des plectres de différentes épaisseurs, qui vont en général de 0.30mm à 1.3mm. Cela est en général inscrit dessus, la valeur étant en millimètres sauf contre-indication. Notez qu’avant de jouer avec un médiator épais, il est recommandé d’avoir acquis de la précision pour éviter d’abîmer les cordes et de bruiter le son. À l’inverse, un médiator fin s’apparente à une feuille de papier et vous aurez aussi bien fait de souffler sur vos cordes pour les faire résonner. Il est recommandé pour les débutants de jouer avec des plectres d’environ 0.80mm qui resteront par la suite un bon compromis.</p>
<p>Un médiator est considéré comme fin sous les 0.65mm, de 0.70mm à 0.95mm et épais au dessus d’1mm. Un code couleur est souvent adopté par les fabriquants de médiator; d’une manière générale, les plus clairs sont les plus fins et vous retrouvez ainsi une large gamme d’épaisseur du blanc au noir en passant par le vert le jaune l’orange le rouge le bleu le violet et plus si affinité.</p>
<p><strong>Matériaux</strong></p>
<p>Les plectres sont couramment fabriqués en nylon, ou en plastique. Toutefois, il est possible d’en imaginer issus d’une grande variété de matériaux.</p>
<p>Il existe ainsi des plectres en bois, en os (style manouche) ou encore en métal - ces derniers étant déconseillés du fait de leur tendance à rapidement abîmer les cordes. Ces matières de picks moins courantes se réservent à des usages spécifiques.</p>`,
          order: 3,
        },
        {
          title: "Micros",
          content: `<p><strong>Définition(s)</strong></p>
<p>Les <strong>micros</strong> ou <strong>pick-up</strong><strong> </strong>de guitares sont des capteurs permettant de convertir la vibration des cordes de l’instrument en un signal électrique ensuite véhiculé dans des câbles jacks et transformés par pédales et amplificateurs.</p>
<p>On retrouve généralement sur une guitare électrique des <strong>micros magnétiques</strong> constitués d’une ou plusieurs barrette(s) comportant chacune un aimant au niveau de chaque corde et entourés d’une bobine.</p>
<p>Pour des guitares dont les cordes ne sont pas en métal, on a recours à des <strong>micros piézoélectriques</strong>, dont la déformation mécanique due à la vibration des cordes génère un signal électrique. Un tel micro se fixe au niveau de la rosace sur une guitare acoustique, et sont placés dans la caisse des guitares électro-acoustiques à la construction.</p>
<p>Un <strong>micro passif</strong> est un micro qui fonctionne sans alimentation et dont le signal n’est pas amplifié. Son son est donc naturel et chaud, ainsi que soumis au bruit ambiant.</p>
<p>Au contraire, un <strong>micro actif</strong> est alimenté et va de pair avec un préamplificateur, ce qui permet de récupérer un son plus puissant et précis en sortie. Les micros <strong>S</strong> et <strong>H</strong> évoqués ci-après sont passifs, comme le son les micros de la grande majorité des guitares.</p>
<p><strong>Déclinaison(s)</strong></p>
<p>Les micros dits “<strong>S</strong>” pour “<strong>Single Coil</strong>” sont ceux que vous retrouverez en majorité sur les Fender. Ils se constituent comme l’indique leur nom d’une unique bobine enroulée autour des 6 pôles magnétiques alignés en dessous de chaque corde et ont un son agressif riche en fréquences aiguës.</p>
<p>Micro passif Single Coil</p>
<p>Les micros “<strong>Humbuckers</strong>”, ou <strong>H</strong>, sont pour leur part constitués de 2 bobines enroulées en sens inverse l’une de l’autre autour de 2 x 6 pôles magnétiques. Le son capté est donc moins vulnérable au bruit. Il est plus chaud, plus rond pour ainsi dire, et comporte une dose raisonnable de fréquences mediums et basses par rapport au cas d’un micro S. Contrairement à ce qu’en montre leur apparence, ils ne sont pas une simple association de 2 micros S. Ils sont plus courants sur les Gibson et sont souvent utilisés pour jouer du Jazz et des styles de musiques peu agressifs qui se veulent exempts de son parasite.</p>
<p>Micro passif Humbucker</p>
<p>Il existe de nombreux autres micros, moins courants toutefois.</p>
<p><strong>Remarque(s)</strong></p>
<p>Certaines guitares utilisent ces 2 types de micros, notamment les Superstrats.</p>`,
          order: 4,
        },
        {
          title: "S\u00e9lecteur et boutons",
          content: `<p><strong>Définition(s)</strong></p>
<p>Le <strong>sélecteur</strong> est le levier permettant de choisir le ou les micros par lesquels récupérer le son de la guitare, dans le cas où celle-ci en possède plusieurs.</p>
<p>Les <strong>boutons</strong> présents sur une guitare, aussi appelés potards, permettent d’agir sur le son issu du/des micros sélectionné(s).</p>
<p><strong>Déclinaison(s)</strong></p>
<p>Un <strong>sélecteur de micro</strong> possède une position par micro, et d’éventuelles positions intermédiaires qui correspondent à un mix des 2 micros correspondant. La direction dans laquelle pointe le levier indique quel est le micro sélectionné. Par exemple, le sélecteur qui pointe le bas de la guitare correspond au micro chevalet. Il existe trois emplacements possibles pour micros : manche, milieu et sillet (neck, middle, bridge). Plus un micro est proche du manche, plus son son est chaud, rond. A l’inverse, un micro proche du sillet aura un son plus aiguë et agressif.</p>
<p>Un <strong>bouton</strong> <strong>volume </strong>est en fait un potentiomètre. En fait, la plupart des guitares étant passives, le signal de leur micro ne peut pas être amplifié directement. Lorsque le bouton volume est au max, cela signifie donc que le son des micros passe librement, et c’est si vous réduisez le volume que vous atténuez ce signal.</p>
<p>Un bouton <strong>tone </strong>est relié à un ou plusieurs micro(s) de la guitare. Il s’agit d’un filtre passe-bas, c’est-à-dire qu’il atténue les fréquences hautes du/des micro(s) correspondant. C’est donc placés au maximum qu’ils restituent un son des plus fidèles au naturel. En baissant le réglage d’un bouton tone, on réduit les aiguës du micro correspondant et on obtient donc un son plus rond, plus chaud.</p>
<p>Si vous avez une guitare possédant des micros <strong>humbucker</strong>, il est parfois possible de le tirer vers l’extérieur pour n’utiliser qu’un des bobinages du micro, ce qui en fait un micro <strong>single coil</strong>.</p>
<p><strong>Application(s)</strong></p>
<p>Imageons ces propos sur les deux exemples classiques de guitares électriques : la Fender Strat et la Gibson Les Paul.</p>
<p><strong>Fender Stratocaster</strong></p>
<p>Cette guitare possède 3 micros : manche, milieu, sillet.</p>
<p>Le sélecteur est à 5 positions, de haut en bas : manche // manche + milieu // milieu // milieu + sillet // sillet.</p>
<p>Le bouton tone haut est lié au micro manche; le bouton tone bas est lié au micro milieu. On ne peut pas filtrer le son du micro chevalet.</p>
<p>Le bouton volume unique agit sur le signal du ou des deux micro(s) sélectionnés.</p>
<p><strong>Gibson Les Paul</strong></p>
<p>Cette guitare possède 2 micros : manche, sillet.</p>
<p>Le sélecteur est à 3 positions, de haut en bas : manche // manche + sillet // sillet.</p>
<p>Le bouton tone haut est lié au micro manche; le bouton tone bas est lié au micro sillet.</p>
<p>Le bouton volume haut agit sur le signal du micro manche; le bouton volume bas agit sur le micro sillet. Il est donc possible d’équilibrer très finement le volume de chaque micro en position intermédiaire manche + sillet.</p>
<p><strong>Remarque(s)</strong></p>
<p>Par défaut, on laisse tous les potards de la guitare à leur <strong>maximum</strong> : cela correspond au son <strong>naturel</strong> de la guitare, puisque abaisser les réglages des boutons revient à appliquer des filtres au signal sortant.</p>`,
          order: 5,
        },
        {
          title: "Amplificateurs",
          content: `<p><strong>Définition(s)</strong></p>
<p>Un <strong>amplificateur </strong>pour guitare, ou ampli, est un couple amplificateur + haut-parleur contenu dans un boîtier destiné à recevoir le signal de sortie d’une guitare, ou d’une pédale reliée à une guitare. Ses entrées et sorties sont usuellement Jack, car il s’agit de la connectique adaptée aux guitares.</p>
<p>Un <strong>pré-amplificateur</strong>, ou pré-ampli, est un amplificateur destiné à capter un signal faible au plus proche de sa source pour l’amplifier une première fois avant que le bruit ne le rende inexploitable, un signal plus faible étant d’autant plus soumis au bruit. Il peut également servir d’agent de traitement de signal, c’est-à-dire comporter des filtres ou autres systèmes dans le but d’agir sur le caractère du son.</p>
<p>Le signal est ensuite acheminé vers l’<strong>amplificateur de puissance</strong> qui augmente le volume sonore du signal.</p>
<p><strong>Déclinaison(s)</strong></p>
<p>Les Amplis</p>
<p>Les <strong>amplificateurs à transistors</strong> génèrent un son fidèle à ce que la guitare leur envoie, c’est-à-dire qu’il conserve l’équilibre basses/aiguës du signal reçu en entrée. Ils sont “froids” au sens précis et peu bruités. De plus, leur prix les rend tout à fait abordables à tout guitariste.</p>
<p>Les lampes des <strong>amplificateurs à lampe(s)</strong> saturent le son, id est génèrent des harmoniques paires supplémentaires dans le son. Le son de sortie est donc plus rond, plus chaud et moins agressif car les fréquences aiguës sont atténuées. Leur délai de traitement d’un signal est beaucoup plus rapide que celui de leur homonyme à transistors. Ils sont toutefois bien plus chers en règle générale.</p>
<p>Les <strong>amplificateurs hybrides</strong> font le compromis des deux technologies précédemment évoquées, et en conséquence se situent dans une gamme de prix intermédiaire. Ils sont constitués d’un pré-ampli à lampe(s) suivi d’un amplificateur de puissance à transistor. Le rôle du pré-ampli est alors de donner sa teinte chaude au son, dont le volume sonore est ensuite augmenté par l’amplificateur de puissance. Le caractère d’un tel ampli est donc intermédiaire à celui de ses deux parents.</p>
<p>Les Boutons</p>
<p>Le <strong>bouton</strong> <strong>master</strong> permet de régler le volume sonore en sortie de l’ampli.</p>
<p>Le <strong>bouton</strong> <strong>gain</strong> permet de saturer le son en sortie de l’ampli, c’est à dire conjointement en augmenter le volume et le bruiter - d’une manière non linéaire.</p>
<p>Un <strong>bouton volume</strong> sert à augmenter le volume sonore d’un canal (= un entrée) précis de l’amplificateur, pour équilibrer un mix par exemple.</p>
<p>Les boutons <strong>bass</strong>,<strong> middle </strong>et<strong> trebble </strong>sont des filtres servant à couper respectivement les fréquences basses, médiums ou aiguës. Par défaut, les potards sont placés au maximum, les baisser réduit le volume de fréquences correspondantes dans le mix. Notez que les basses (bass) représentent le punch du son, les médiums (middle) sa chaleur et rondeur et les aiguës (trebble) sa la précision son agressivité.</p>`,
          order: 6,
        },
        {
          title: "P\u00e9dales d'effets",
          content: `<p><strong>Définition(s)</strong></p>
<p>Une <strong>pédale d’effet</strong> est un circuit électronique contrôlé au pied et permettant d’appliquer un traitement au son. Un tel système, équipée d’une entrée et d’une sortie jack, se place sur la chaine du son entre la guitare et l’amplificateur. Il est possible de brancher plusieurs pédales en séries. Une pédale nécessite un bloc d’alimentation pour fonctionner.</p>
<p>Des <strong>pédales</strong> <strong>multi-effets </strong>regroupent dans un même système la possibilité d’appliquer différents effets au son de l’instrument branché. Autrement, une pédale d’effet est spécifique à un effet, mais on les regroupe fréquemment sur des <strong>pedalboard</strong> pour avoir tous les effets souhaités à disposition d’une simple action du pied.</p>
<p><strong>Déclinaison(s)</strong></p>
<p><strong>Distorsion</strong> (Fuzz, Overdrive, …) : ajout de fréquences supplémentaires dans le spectre du son, compression des pics d’intensité. Résulte en un son “distordu” qui sonne certes lourd et dissonant mais est apprécié pour sa puissance et son expressivité.</p>
<p><strong>Flanger </strong>: le signal est superposé à un double légèrement retardé.</p>
<p><strong>Whammy</strong> : pédale permettant de recréer l’effet d’une barre de vibrato ou d’un bend. Permet également de créer des harmonies (double la note jouée d’une seconde note se situant à un intervalle réglable de la première).</p>
<p><strong>Wah </strong>: filtre les fréquences du signal pour en mettre en avant d’abord les graves, puis les médiums, puis les aiguës. Les notes sonnent alors comme une ligne vocale qui ferait “Waah-wah” du fait de la variation du spectre, d’où le nom de la pédale.</p>
<p><strong>Reverb</strong>, <strong>delay</strong>, etc : il existe de nombreux effets possédant tous leur utilisation propre et méritent d’être détaillés. Je vous invite à vous renseigner dessus.</p>`,
          order: 7,
        },
      ],
    },
    {
      title: "Accords",
      description: "Ouverts, barr\u00e9s, triades, powerchords et enrichissements.",
      part: "Guitare",
      order: 3,
      sections: [
        {
          title: "Pr\u00e9ambule \u2014 Doigt\u00e9s",
          content: `<p><strong>Définition</strong></p>
<p>Un <strong>doigté</strong> est un placement de doigts adopté pour jouer un accord ou une gamme. Dans toute situation, on souhaite trouver le doigté offrant le plus de fluidité, c’est-à-dire permettant d’être formé et dissous le plus rapidement possible mais également permettant d’enchaîner de la manière la plus efficace des accords et des positions de gammes.</p>
<p>La notion de fluidité découlant du confort de jeu, deux guitaristes - ou un même guitariste à deux instants différents - sont tout à fait susceptibles d’adopter différents doigtés pour une même suite d’accords ou mélodie.</p>
<p><strong>Notation</strong></p>
<p>On se réfère aux doigts de la main gauche à l’aide de numéros.</p>
<p>1e doigt, doigt N°1 : Index</p>
<p>2è doigt, doigt N°2 : Majeur</p>
<p>3è doigt, doigt N°3 : Annulaire</p>
<p>4è doigt, doigt N°4 : Auriculaire</p>
<p>Numérotation des doigts de la main gauche.</p>
<p><strong>Avertissements</strong></p>
<p>- Pour un gaucher, ce sont les doigts de la main droite qui forment les accords et sont ainsi numérotés.</p>
<p>- Le Pouce n’a pas de numéro correspondant car il est rarement utilisé. Ceci dit, les Bluesmen s’en servent souvent pour poser une note sur la 6ème corde et on le note parfois “P”.</p>
<p>- Dans les sections suivantes, les doigts sont indiqués par les numéros en bleu pâle tandis que les intervalles sont écrits en blanc.</p>
<p><strong>Remarques</strong></p>
<p>Le <strong>doigté</strong> à un instant donné dépend :</p>
<p>du contexte, c’est-à-dire de ce que vous avez joué avant et de ce que allez jouer après.</p>
<p>Par exemple, il peut être plus simple d’enchaîner deux accords si on fait le choix en posant le premier d’adopter un doigté qui ne nous semble pas naturel mais permettra une transition rapide vers le second. En particulier, on cherche le doigté qui offre des notes pivot d’un accord à l’autre. Autre exemple pour une gamme : si on joue une note au <strong>1</strong>er doigt et que la suivante se situe deux cases plus loin, on joue celle-ci <strong>3</strong>ème doigt. Toutefois, si vous devez ensuite aller chercher une note encore 2 cases plus loin, vous ferez l’écart entre les 2 premières notes aux doigts <strong>1 </strong>et <strong>2</strong> pour que le <strong>4</strong>ème doigt puisse aller chercher la dernière note.</p>
<p>du confort que vous avez sur chaque doigt.</p>
<p>Par exemple, une personne qui déteste se servir de son <strong>4</strong>ème doigt ou manque de force dessus favorisera un écart avec son <strong>3</strong>ème doigt pour aller chercher une note même lointaine.</p>`,
          order: 1,
        },
        {
          title: "Accords ouverts",
          content: `<p><strong>Définition</strong></p>
<p>Voici les <strong>accords ouverts</strong> à la guitare. Leur appellation vient du fait qu’ils comprennent des cordes à vide. Vous les connaissez probablement déjà.</p>
<p>Former leurs positions présentent peu de difficulté à la main gauche. Par ailleurs, différents doigtés sont possibles pour jouer un même accord.</p>
<p><strong>Positions</strong></p>
<p>Passez votre souris sur un schéma pour passer de l’affichage des intervalles à celui du doigté standard.</p>
<p><strong>Intervalles</strong></p>
<p><strong>Doigtés</strong></p>
<p><strong>Audios</strong></p>
<p><strong>Mi</strong></p>
<p><strong>MiMin</strong></p>
<p><strong>La</strong></p>
<p><strong>LaMin</strong></p>
<p><strong>Sol</strong></p>
<p><strong>Do</strong></p>
<p><strong>Re</strong></p>
<p><strong>ReMin</strong></p>
<p><strong>Notion de note pivot</strong></p>
<p>Lorsque vous passez d’un accord à un autre, une <strong>note pivot</strong> est une note dont le doigté est identique entre ces 2 accords. Plutôt que de lever toute la main du manche pour dissoudre le <strong>1</strong>er accord et former le <strong>2</strong>nd, il est donc possible pour faciliter la transition de garder le doigt correspondant appuyé sur le manche. Notez qu’il peut y avoir plusieurs notes pivot d’un accord à un autre.</p>
<p>Par exemple, le 3ème doigt se situe à la même position sur les accords de <strong>Sol</strong> et <strong>Ré</strong>, il peut donc être utilisé comme pivot pour passer de l’un à l’autre : la note de <strong>Ré</strong> (case <strong>3</strong>  corde de <strong>Si</strong>) jouée par l’annulaire est une note pivot.</p>`,
          order: 2,
        },
        {
          title: "Alternatives pour Fa",
          content: `<p><strong>Contexte</strong></p>
<p>Il existe des alternatives aux accords barrés de <strong>Fa</strong>, qui complète les accords ouverts de <strong>Do Maj</strong>, <strong>Ré min</strong>, <strong>Mi</strong> <strong>min</strong>, <strong>Sol Maj </strong>et <strong>La min</strong> dans la tonalité de <strong>Do Majeur</strong>*. Vous pourrez ainsi pleinement exploiter cette tonalité même si vous ne maîtrisez pas encore les accords barrés.</p>
<p>Ces positions sont évidemment transposables le long du manche pour faire l’alternative à d’autres accords barrés.</p>
<p><strong>Positions</strong></p>
<p>Voici certaines positions alternatives à la position barrée de <strong>Fa</strong>. Passez votre souris sur une position pour en faire apparaître l’identique enrichie d’un “mini-barré”.</p>
<p><strong>Remarques</strong></p>
<p>- Ces positions simplifiées ne vous dispensent pas de l’apprentissage des positions barrées qui sont nécessaires à votre formation;</p>
<p>- Certaines de ces positions font appel à des “mini-barrés”. Ceux-ci ne représentent pas une grand difficulté technique;</p>
<p>- Certaines positions regroupant moins de notes qu’un accord barré, il peut être souhaitable des les adopter pour alléger l’accord, même si vous savez le jouer en barré.</p>
<p>*En réalité, nous n’avons pas évoqué l’accord de <strong>Si°</strong> (lire : “Si diminué”) pour compléter l’ensemble des 7 accords de la tonalité de <strong>Do Maj</strong>. La raison est sa constitution particulière qui fait qu’il n’est que rarement utilisé. Reportez vous aux cours de Théorie Musicale pour découvrir ce sujet.</p>`,
          order: 3,
        },
        {
          title: "Powerchords",
          content: `<p><strong>Définition</strong></p>
<p>Les <strong>Powerchords </strong>- “accords de puissance” - sont des accords qu’on pourrait caractériser d’épais pour la raison qu’ils sont constitués de l’empilement d’une Tonique avec une Quinte. On les forme usuellement sur les cordes de <strong>Mi</strong> et <strong>La</strong> ou <strong>La</strong> et <strong>Ré</strong>, mais la position peut être formée sur tout groupe de 2 cordes consécutives (attention toutefois à l’accordage en tierce de<strong> Si</strong> par rapport à <strong>Sol</strong>).</p>
<p>On les note <strong>X5</strong>, “5” se référant à l’intervalle de Quinte.</p>
<p><strong>Positions</strong></p>
<p>En partant de la <strong>6</strong>ème comme de la <strong>5</strong>ème corde :</p>
<p>Il est possible de rajouter l’Octave pour épaissir encore ces accords :</p>
<p><strong>Doigté</strong></p>
<p><strong>1</strong>er doigt : Tonique;</p>
<p><strong>3</strong>ème doigt: Quinte;</p>
<p><strong>4</strong>ème doigt : Octave.</p>
<p><strong>Remarque(s)</strong></p>
<p>Ces accords sont très utilisés dans le Métal, Rock ou encore le Grunge.</p>`,
          order: 4,
        },
        {
          title: "Powerchords Add9",
          content: `<p><strong>Définition</strong></p>
<p>Les <strong>Powerchords Add9 </strong>sont des Powerchords enrichies non pas d’une Octave mais d’une Neuvième (par défaut Majeure, pour rappel), c’est à dire une Seconde (même remarque) passé à l’Octave. On saute donc deux cases depuis l’Octave pour la retrouver.</p>
<p><strong>Positions</strong></p>
<p><strong>Doigté</strong></p>
<p>1er doigt : Tonique;</p>
<p>2ème doigt : Quinte;</p>
<p>4ème doigt : Neuvième.</p>
<p>Il est important d’utiliser le doigté <strong>1 2</strong> <strong>4</strong> et non pas <strong>1 3 4 </strong>car s’il n’est pas tellement plus compliqué de réaliser l’écart de la Tonique à la Quinte entre les doigts <strong>1</strong> et <strong>2 </strong>qu’entre les doigts <strong>1</strong> et <strong>3</strong>, il est surtout beaucoup plus confortable de réaliser l’écart de la Quinte à la Neuvième entre les doigts <strong>2</strong> et <strong>4</strong> qu’entre les doigts <strong>3</strong> et <strong>4</strong>, qui sont fortement liés l’un à l’autre.</p>
<p><strong>Remarque(s)</strong></p>
<p>- Ces positions requièrent une certaine souplesse de la main gauche. Il est utile de faire du stretching (cf Postambule 2) régulièrement pour parvenir à former ces intervalles qui sont non seulement musicalement mais également physiquement importants;</p>
<p>- L’ajout d’une Neuvième permet d’enrichir et d’adoucir l’accord tout en conservant son épaisseur.</p>`,
          order: 5,
        },
        {
          title: "Accords barr\u00e9s",
          content: `<p><strong>Définition</strong></p>
<p>Les <strong>accords barrés</strong> requièrent davantage de temps à être maîtrisés que leurs homologues ouverts. En effet, ils nécessitent que votre index barre le manche en appliquant une pression suffisante aux cordes pour qu’elles résonnent et non pas ne soient étouffées. Cela requiert de l’entraînement et surtout du temps pour développer la force et la rigidité du <strong>1</strong>er doigt.</p>
<p>Il n’y a que peu de positions à retenir. En fait vous les connaissez déjà car il s’agit des positions des accords ouverts de <strong>Mi</strong> et de <strong>La</strong> que l’on décale sur le manche. A défaut de pouvoir déplacer le sillet de tête, on déplace donc l’index.</p>
<p><strong>Positions</strong></p>
<p>Pour trouver rapidement un accord sur le manche, il est important de connaître vos notes sur les cordes de <strong>Mi</strong> et de <strong>La</strong>. Cela viendra avec l’expérience, donc pas besoin de les apprendre par coeur ou de coller des étiquettes sur votre manche.</p>
<p>Passez votre souris sur un schéma pour passer de l’affichage des intervalles à celui du doigté standard.</p>
<p><strong>Intervalles</strong></p>
<p><strong>Doigtés</strong></p>
<p>Notez que vous pouvez réalisez un accord  barré majeur depuis la <strong>5</strong>ème corde en réalisant un second barré à l’aide du <strong>3</strong>ème doigt de la manière suivante :</p>
<p><strong>Exemples</strong></p>
<p>Voici les accords barrés de Fa Majeur, Fa mineur, Si Majeur et Si mineur.</p>
<p>Il est important de rapidement maîtriser l’accord barré de <strong>Fa </strong>car il vous permet de compléter votre deck d’accords “de base” en complément des accords ouverts que vous connaissez déjà.</p>
<p>Fa</p>
<p>FaMin</p>
<p>Si</p>
<p>siMin</p>
<p>En Ocre, le numéro de la case sur le manche.</p>`,
          order: 6,
        },
        {
          title: "Triades et renversements",
          content: `<p><strong>Définition</strong></p>
<p>L’accord “de base” à 3 notes se constitue d’une tonique - qui le définit, d’une tierce - qui le colore, d’une quinte - qui l’épaissit. On peut donc fabriquer des positions à 3 cordes à 1 note par corde. Ce sont les accords de <strong>Triades</strong>. On a l’habitude de les jouer sur les 3 premières cordes de la guitare, les plus aiguës.</p>
<p><strong>Positions</strong></p>
<p>Majeures :</p>
<p>De gauche à droite, la position fondamentale, le 1er renversement et le 2nd renversement.</p>
<p>Mineures :</p>
<p>De gauche à droite, la position fondamentale, le 1er renversement et le 2nd renversement.</p>
<p><strong>Doigtés</strong></p>
<p>Il existe des doigtés plus ou moins standards pour jouer des positions. Déterminez ceux avec lesquels vous êtes le plus confortable, mais rappelez vous que le doigté à adopter pour un même accord varie selon le contexte (= accords précédents et accords suivants).</p>
<p>Notez qu’il est souvent souhaitable de réaliser un barré sur <strong>G B e</strong> sur la plus basse des cases jouée à l’aide de votre index. Cela peut servir de base à l’ensemble des triades et vous aider à vous déplacer sur le manche sans former chaque nouvelle position “from scratch”.</p>
<p><strong>Notion de Renversement</strong></p>
<p>Un accord est composée d’une suite ordonnée d’intervalles. Dans le cadre de nos triades standards, il s’agit de : Tonique - Tierce - Quinte. Voyez cette suite comme un cycle : tonique -> tierce -> quinte -> tonique -> …</p>
<p>On parle de la <strong>position fondamentale</strong> d’un accord lorsque la Tonique est la note la plus basse de l’accord, donc située sur la corde la plus grave; de <strong>Sol</strong>. Elle se suit de la Tierce et de la Quinte sur les cordes de <strong>Si</strong> et <strong>mi</strong>.</p>
<p>Si j’avance mes doigts sur le manche, je retrouve les mêmes notes mais cette fois en partant de la Tierce sur la corde “basse” (toujours <strong>Sol</strong>), suivie de la Quinte et de la Tonique. On dit que je renverse mon accord sur la Tierce. On parle de <strong>1er renversement</strong>, ou de <strong>renversement sur la Tierce</strong>.</p>
<p>De même, je retrouve encore un peu plus loin toujours les mêmes notes mais en partant de la Quinte, alors suivie de la Tonique et de la Tierce sur les cordes <strong>2</strong> et <strong>1</strong> : je joue le<strong> 2nd renversement</strong> de l’accord, ou <strong>renversement sur la quinte</strong>.</p>
<p>Si je jouais l’accord sur 4 cordes avec une septième mineure, il y aurait un 3ème renversement, ou renversement sur la 7ème.</p>
<p>Exemple sur la triade de <strong>Bm</strong> :</p>
<p><strong>Notation</strong></p>
<p>La notation d’un renversement se fait selon la nomenclature : <strong>Accord/Basse</strong>, la basse étant la note sur laquelle l’accord est renversé. Ainsi, la tierce mineur de <strong>B</strong> étant <strong>D</strong>, le renversement de <strong>Bm</strong> sur sa tierce sera noté <strong>Bm/D</strong>, lire “Si mineur basse Ré”. De même, le renversement de <strong>Bm</strong> sur sa quinte est <strong>Bm/Fa</strong>#, ou “Si mineur basse Fa#”.</p>
<p><strong>Remarque(s)</strong></p>
<p>- Un accord peut être renversé sur toute note qu’il contient. Un accord se composant d’une triade enrichie d’une <strong>7</strong>ème posséderait ainsi un <strong>3</strong>ème renversement sur sa Septième;</p>
<p>- L’ordre des renversements dépend de l’ordre des notes dans l’accord sur le manche. Ainsi, pour un accord <strong>T</strong>-<strong>5</strong>-<strong>T</strong>-<strong>3</strong>, le renversement sur la quinte sera le premier renversement et non pas le second, car la quinte vient avant la tierce;</p>
<p>- La notion de renversement s’étend à tous types d’accords sur le manche.</p>`,
          order: 7,
        },
        {
          title: "Triades DGB",
          content: `<p><strong>Définition</strong></p>
<p>Dans l’optique de jouer des accords à 3 notes sur 3 cordes adjacentes à 1 note par corde, on considère également les <strong>Triades DGB</strong>. Il s’agit d’accords de triade (tonique tierce quinte) joués sur les cordes <strong>D</strong>,<strong> G </strong>et <strong>B</strong>.</p>
<p><strong>Positions</strong></p>
<p>Majeures :</p>
<p>Mineures :</p>
<p><strong>Doigtés</strong></p>
<p>Cf Section précédente.</p>
<p><strong>Remarque(s)</strong></p>
<p>On peut encore jouer des triades sur les cordes <strong>A D G </strong>ou <strong>A E D</strong>. Cela dit, on réserve usuellement ces cordes graves à d’autres usages que le jeu en triade.</p>`,
          order: 8,
        },
        {
          title: "Triades solo",
          content: `<p><strong>Définition</strong></p>
<p>Les <strong>Triades solos</strong>, fortes utiles comme leur nom l’indique pour réaliser des plans de solos, sont des triades dont les 3 notes sont situées sur les 2 cordes de <strong>Si </strong>et de <strong>mi</strong>.</p>
<p><strong>Positions</strong></p>
<p>Majeures :</p>
<p>De gauche à droite: la position fondamentale, le 1er renversement et le 2nd renversement.</p>
<p>Mineures :</p>
<p>De gauche à droite: la position fondamentale, le 1er renversement et le 2nd renversement.</p>
<p><strong>Construction</strong></p>
<p>Il est important que vous compreniez comment reconstruire ces triades à partir des positions standards sur <strong>G B e </strong>que vous connaissez déjà. Pour cela, notez qu’on retrouve sur la corde de <strong>mi</strong> l’octave d’une note connue sur la corde de <strong>Sol</strong> en sautant 3 cases (car il y a déjà 9 demi-tons de <strong>Sol</strong> à <strong>mi</strong>).</p>
<p>Bien entendu, le schéma ci-dessous fonctionne à l’identique pour chaque renversement des triades majeures comme mineures.</p>`,
          order: 9,
        },
        {
          title: "Accords 79 et 9\u00e8me",
          content: `<p><strong>Définition</strong></p>
<p>Les <strong>Accords 79</strong> et <strong>9ème</strong> sont des accords enrichis d’une <strong>septième</strong> et d’une <strong>neuvième </strong>par rapport aux accords “de base” à 3 notes, et ce éventuellement au détriment de la quinte. On s’en sert notamment dans les registres Jazz et Funk où l’on cherche un plus large éventail de sonorités que ce qu’offrent les accords Tonique-Tierce-Quinte.</p>
<p>On parle d’accord <strong>9ème</strong> si celui-ci comporte tous les intervalles “impairs” de la tonique à la 9ème (id est : T, 3ce, 5te, 7e, 9e). Il s’agit autrement d’un accord <strong>9(no5)</strong>,<strong> </strong>ou accord <strong>79 </strong>(retenez 79 = 9no.5), s’il ne possède pas de quinte.</p>
<p>La nomenclature peut porter à confusion, mais les accords sont simples à former.</p>
<p><strong>Positions</strong></p>
<p>Voici les positions des accords 9no.5 (lire “no fifth”) :</p>
<p>Mi9(no5)</p>
<p>MiMin9(no5)</p>
<p>La neuvième peut aussi être montée en  neuvième dièse (<strong>9#</strong>) depuis un accord <strong>79</strong> pour donner un accord <strong>79</strong>#, dont la sonorité très caractéristique est typique du Jazz. En voici également les positions.</p>
<p>mi79#(no5)</p>
<p>MiMin79#(no5)</p>
<p>Et voici les positions des accords de <strong>9ème </strong>:</p>
<p>mi9</p>
<p>MiMin9</p>
<p>On peut également substituer  une <strong>sixte</strong> à la quinte pour adoucir l’accord.</p>
<p>Mi79add6(no5)</p>
<p>miMin79add6(no5)</p>
<p><strong>Doigtés</strong></p>
<p>Les doigtés de ces accords sont assez naturels :</p>
<p>Accord 79(no5)/79#(no5)</p>
<p>Accord 9ème</p>
<p>Accord 79add6(no5)</p>
<p>1er doigt : tierce</p>
<p>2nd doigt : tonique</p>
<p>3ème doigt : 7ème</p>
<p>4ème doigt : 9ème</p>
<p>1er doigt : tierce</p>
<p>2nd doigt : tonique</p>
<p>3ème doigt : 7ème,</p>
<p>9ème & 5te</p>
<p>1er doigt : tierce</p>
<p>2nd doigt : tonique</p>
<p>3ème doigt : 7ème & 9ème (barré)</p>
<p>4ème doigt : 6te</p>`,
          order: 10,
        },
        {
          title: "Postambule 1 \u2014 enrichissements",
          content: `<p><strong>Définition</strong></p>
<p>Un <strong>accord</strong> <strong>enrichi</strong> est un accord comportant des sonorités autres que les 3 sons “de base” Tonique-Tierce-Quinte.</p>
<p><strong>Enrichissements courants</strong></p>
<p>Accord “de base” à trois notes</p>
<p>Accord<strong> Sus2</strong></p>
<p>Accord <strong>Sus4</strong></p>
<p>Accord de <strong>7ème</strong></p>
<p>Accord de <strong>9ème</strong></p>
<p>Accord<strong> Add9</strong></p>
<p>Tonique</p>
<p>Tierce Maj/min</p>
<p>Quinte juste</p>
<p>Tonique</p>
<p>Seconde Maj</p>
<p>Quinte juste</p>
<p>Tonique</p>
<p>Quarte juste</p>
<p>Quinte juste</p>
<p>Tonique</p>
<p>Tierce Maj/min</p>
<p>Quinte juste</p>
<p>Septième min/Maj</p>
<p>Tonique</p>
<p>Tierce Maj/min</p>
<p>Quinte juste</p>
<p>Septième Maj/min</p>
<p>Neuvième Maj/min</p>
<p>Tonique</p>
<p>Tierce Maj/min</p>
<p>Quinte juste</p>
<p>Neuvième Maj/min</p>
<p>Pour rappel, l’appellation “(de) <strong>7</strong>ème”, “(de) <strong>9</strong>ème”, …, “(de) <strong>2N+1</strong>ème” signifie que l’accord regroupe tous les intervalles “impairs” de la tonique à la septième (respectivement la neuvième, …, 2n+1ème).</p>
<p><strong>Enrichir des accords</strong></p>
<p>Les enrichissements suivants ne sont pas toujours possible selon la forme de l’accord.</p>
<p>Les accords <strong>Sus2</strong>, <strong>Sus4</strong></p>
<p>Pour rappel, les intervalles de Seconde Majeure, Tierce mineure, Tierce Majeure et Quarte Juste se suivent. Ainsi on forme un Accord…</p>
<p><strong>Sus2</strong> : en descendant la Tierce d’une case si elle est mineure et de deux si elle est Majeure;</p>
<p><strong>Sus4</strong> : en montant la Tierce d’une case si elle est Majeure et de deux si elle est mineure.</p>
<p>Ces accords ne comportant pas de tierce, ils n’ont pas de connotation joyeuse ni mélancolique mais plutôt interrogative.</p>
<p>Les accords de <strong>7ème</strong></p>
<p>Les intervalles suivants s’enchaînent : Septième mineure, Septième Majeure, Octave (= Tonique). Ainsi pour ajouter une septième à un accord, on une tonique d’une ou deux cases sur le manche selon si vous la voulez Majeure ou mineure. Usuellement, on choisira la Septième diatonique qui dépend de la gamme et de l’accord que vous utilisez.</p>
<p>Les accords de <strong>9ème</strong></p>
<p>En règle générale, reportez vous aux accords de 9ème fabriqués en tant que tel, car il est souvent compliqué à partir d’autres accords de rajouter artificiellement une Septième et Neuvième.</p>
<p>Les accords <strong>Add9</strong></p>
<p>Il s’agit ici d’ajouter une Neuvième à un accord Tonique - Tierce - Quinte. Pour cela, cherchez simplement une tonique sur votre accord et montez là de 2 cases si votre doigté le permet.</p>
<p><strong>Remarque(s)</strong></p>
<p>La Fondamentale est la note la plus basse d’un accord, ou note située sur la corde la plus grave de la position jouée. Celle-ci correspond usuellement à la Tonique, parfois à la Tierce ou la Quinte, mais jamais sur des intervalles plus exotiques. En effet, cette note supporte toute la structure de l’accord.</p>
<p>Prenez donc garde à ne pas former vos Septièmes et Neuvièmes depuis une Tonique Fondamentale : un accord comporte souvent une Octave, que vous pouvez elle baisser ou monter pour retrouver des intervalles que vous souhaitez ajouter.</p>`,
          order: 11,
        },
        {
          title: "Postambule 2 \u2014 Stretching",
          content: `<p><strong>Définition(s)</strong></p>
<p>Le <strong>stretching</strong>, ou “étirement” en anglais, consiste pour un guitariste à réaliser des exercices techniques au but de délier ses doigts. Il s’agit donc de travailler la souplesse de la main et l’indépendance de chaque doigt vis à vis des autres.</p>
<p>A terme, cela vous permettra de jouer des accords aux doigtés d’autant plus complexes et de gagner en aisance sur les accords que vous saviez déjà former. Cela vous aidera également lorsqu’il vous faudra vous déplacer sur des gammes. Faire du stretching est donc fortement bénéfique à son jeu.</p>
<p><strong>Exercice(s)</strong></p>
<p>Voici des exemples d’exercices dont vous pouvez vous inspirer pour travaillez l’aisance de votre main gauche sur tout le manche :</p>
<p>Stretching gp</p>
<p>Stretching pdf</p>`,
          order: 12,
        },
      ],
    },
    {
      title: "Effets de jeu",
      description: "Hammer-on, bend, slide, vibrato, tapping et harmoniques.",
      part: "Guitare",
      order: 4,
      sections: [
        {
          title: "Le Hammer-on",
          content: `<p><strong>Définition</strong></p>
<p>La technique du <strong>hammer-on</strong> consiste lorsque l’on joue une note à venir frapper - sur la même corde - une seconde note plus aiguë.</p>
<p>On utilise le terme “hammer” car c’est à la manière d’un marteau qu’un doigt libre de la main gauche vient faire résonner la seconde note.</p>
<p><strong>Notation</strong></p>
<p>La notation d’un hammer on se fait sur une tablature par le symbole “<strong>H</strong>”.</p>
<p>Par exemple, “<strong>5H6</strong>” indique que vous devez jouer la 5ème case de la corde - disons avec l’index - puis frapper cette dernière à la 6ème case à l’aide d’un doigt libre à la position correspondante - ça serait le majeur.</p>
<p><strong>Précisions techniques</strong></p>
<p>- Un hammer-on demande force et précision pour ne pas simplement de la corde. Entraînez vous donc d’abord sur des notes proches pour travailler la force de frappe, puis travaillez sur des écarts plus conséquents pour apprendre à concilier l’articulation des doigts avec la puissance nécessaire.</p>
<p>- Prenez garde à l’importance de la rythmique lors de l’utilisation d’un hammer-on : laissez résonner les notes impliquées sur le temps qui leur est imparti;</p>
<p>- Par confort de jeu et pour pouvoir appliquer une puissance suffisante, on consacre généralement 1 doigt par case lorsque l’on fait des hammer-on. Ainsi, si je joue la case <strong>9 </strong>à l’aide de mon <strong>1</strong>er doigt, j’aurai la possibilité des réaliser des hammer-on sur les <strong>10</strong>ème, <strong>11</strong>ème et <strong>12</strong>ème cases en utilisant mes <strong>2</strong>ème, <strong>3</strong>ème et <strong>4</strong>ème doigts. Notez qu’avec le temps et les exercices de stretching, vous serez confortables avec des écarts plus importants et pourrez atteindre des cases plus lointaines.</p>
<p><strong>Avertissements</strong></p>
<p>Il est rare mais possible de réaliser des hammer-on d’accords entiers. Par exemple :</p>
<p><strong>e </strong>—0—h—0—</p>
<p><strong>B </strong>—0—h—1—</p>
<p><strong>G </strong>—0—h—2—</p>
<p><strong>D </strong>—0—h—2—</p>
<p><strong>A </strong>——————</p>
<p><strong>E </strong>——————</p>
<p>On introduit ici sur les cordes <strong>1</strong> à <strong>4</strong> de la guitare un accord de <strong>Am</strong> depuis un accord de <strong>Em7</strong>. Notez que j’ai écrit “<strong>0h0</strong>” sur la corde de <strong>mi </strong>pour mettre en valeur fait que le hammer-on est réalisé sur l’accord entier.</p>
<p><strong>Utilisations</strong></p>
<p>Encore une fois, vous pouvez :</p>
<p>- Construire ou enrichir des plans de solo à l’aide de cet effet;</p>
<p>- Rendre votre jeu plus fluide, voire plus rapide en jouant plus de notes que vous n’en grattez.</p>`,
          order: 1,
        },
        {
          title: "Le Pull-of",
          content: `<p><strong>Définition</strong></p>
<p>Le<strong> </strong><strong>pull-off</strong> peut être défini comme l’opposé du hammer-on. Il consiste sur une corde à retirer un doigt d’une case pour faire résonner une case inférieure sur laquelle se situe un autre doigt. Pour que celui fonctionne, il est nécessaire de gratter la corde à l’aide du doigt se retirant.</p>
<p><strong>Notation</strong></p>
<p>La notation se fait encore une fois selon la première lettre du nom de l’effet, soit “<strong>P</strong>”.</p>
<p>On lira pas exemple “<strong>6P5</strong>” ou “<strong>10P6</strong>”.</p>
<p><strong>Précisions techniques</strong></p>
<p>Veillez lors d’un pull-off à ne pas simplement retirer le doigt de la corde mais bien à vous en servir pour tirer cette dernière (pull, “tirer” en anglais) pour en relancer la vibration et en permettre la résonance sur la note d’arrivée. Autrement, vous pourriez simplement muter la corde en retirant le <strong>1</strong>er doigt.</p>
<p><strong>Avertissements</strong></p>
<p>On peut pull-off des accords mais ce n’est pas courant.</p>
<p><strong>Utilisations</strong></p>
<p>Enrichir son jeu et notamment ses solos à l’aide de cet effet, en particulier en l’alliant à son effet complémentaire : le hammer-on.</p>`,
          order: 2,
        },
        {
          title: "Le Slide",
          content: `<p><strong>Définition</strong></p>
<p>Le <strong>slide</strong> est une technique de jeu consistant comme son nom l’indique à glisser son doigt d’une case vers une autre.</p>
<p>Il existe des slides</p>
<p>- “descendants”, d’une première case vers une seconde case plus basse sur le manche;</p>
<p>- “ascendants”, d’une case vers une case plus haute sur le manche.</p>
<p>Pour rappel, on entend par haut “aiguë”; donc proche du sillet, et par bas “grave”; donc proche du chevalet.</p>
<p>L’idée est de passer d’une note à une autre de manière “continue”, en utilisant un unique doigt et sans avoir à le lever.</p>
<p><strong>Notation</strong></p>
<p>La notation d’un slide sur une  tablature se fait</p>
<p>- par le symbole “<strong>/</strong>” pour un slide ascendant. Par exemple, “<strong>5/6</strong>” est un slide de la 5ème vers la 6ème corde;</p>
<p>- par le symbole  “<strong>\\</strong>” pour un slide descendant. Par exemple, “<strong>6\\5</strong>” est un slide de la 6ème vers la 5ème corde.</p>
<p><strong>Précisions techniques</strong></p>
<p>- Maintenez la pression du doigt sur le manche lorsque vous réalisez un slide; la corde est autrement étouffée, sa vibration stoppe et le son meurt.</p>
<p>- Visez la case d’arrivée. Ayez la en tête avant de débuter le slide, visualisez la sur le manche et ne suivez pas le mouvement de votre doigt du regard mais fixez la note sur laquelle celui-ci doit s’arrêter;</p>
<p>- Prenez garde à laisser les 2 notes indiquées résonner sur les temps qui leur sont impartis.</p>
<p><strong>Avertissements</strong></p>
<p>Vous pouvez être amenés à rencontrer des slides non précédés ou non suivis de note.</p>
<p>Par exemple, “<strong>/10</strong>” indique que vous devez slider sur la <strong>10</strong>ème case de la corde depuis une case inférieure sans faire entendre la note de départ. Pour le jouer, il vous faut donc débuter le slide aussitôt que vous grattez la corde pour n’entendre qu’une montée vers la case visée. Notez que vous pouvez démarrer celui-ci sur n’importe quelle case entre la <strong>1</strong>ère et la <strong>9</strong>ème selon l’amplitude et l’intensité que vous souhaitez donner à la montée.</p>
<p>De même, vous pourriez rencontrer les notations suivantes : “<strong>\\10</strong>”, “<strong>10/</strong>” et “<strong>10\\</strong>”.</p>
<p><strong>Utilisations</strong></p>
<p>Pour l’insérer dans votre jeu, vous pouvez…</p>
<p>- Fonder des plans entier sur cet effet, notamment en jouant des aller-retours entre 2 notes;</p>
<p>- Introduire des plans à l’aide de “grands” slides des graves vers les aiguës et vice versa;</p>
<p>- Slider des accords entiers, à conditions qu’ils soient relativement légers et que le contexte s’y prête. En jazz par exemple, on slide parfois un accord d’1/2 ton pour l’introduire.</p>`,
          order: 3,
        },
        {
          title: "Le Bend",
          content: `<p><strong>Définition</strong></p>
<p>Bender une corde signifie la “courber”, ou encore la “fléchir”. Un <strong>bend</strong> consiste ainsi à tirer/pousser une corde pour en augmenter la longueur résonante et faire sonner une note plus haute que celle correspondant à la case sur laquelle le doigt est posée. Cette technique de jeu, compliqué à maîtriser, est cependant essentielle à un jeu de guitariste soliste.</p>
<p><strong>Notation</strong></p>
<p>La notation du bend se fait par une flèche courbe ascendante indiquant le nombre de tons dont vous devez bender la corde (full = 1 ton), ou par un “<strong>b” </strong>de part et d’autre duquel on indique la note de départ et celle visée.</p>
<p>Vous pouvez également bender une corde avant de la jouer, on parle de <strong>prebend</strong>, qu’on notera avec une flèche ascendante droite, ou “<strong>pb</strong>”.</p>
<p>Si vous relâchez une corde après l’avoir bendée, cela s’appelle un <strong>release </strong>(release bend) et on le note à l’aide d’une flèche courbe descendante ou d’un “<strong>r</strong>”.</p>
<p><strong>Précisions techniques</strong></p>
<p>- Par confort de jeu, on ramène en règle générale les cordes vers l’intérieur du manche, c’est-à-dire qu’on tire les cordes graves et pousse les cordes aiguës. En particulier, vous ne pouvez pas faire le choix de tirer la corde de <strong>e</strong>, pas plus que celui de pousser la corde de <strong>E</strong>, car vous arriveriez hors du manche et produiriez un son métallique désagréable.</p>
<p>- Contrairement au vibrato, le bend demande une forte précision quant à la note d’arrivée. Vous serez en général amenés à bender une corde précisément d’1 ton ou d’1/2 ton, ce qui demande de la pratique. Seule l’expérience vous permettra d’atteindre cette justesse.</p>
<p><strong>Avertissements</strong></p>
<p>- Vous rencontrerez parfois dans des plans de solos ou des accompagnements blues des micro-bends d’1/4 de ton. Ils ne s’achèvent donc pas sur une note juste, mais apportent un peu de nuance au jeu. Attention à ne pas les marquer trop fortement).</p>
<p>- Il est courant de remplacer des bends par des slides aux notes de départ et d’arrivée évidemment identiques. Cela résout la question de la précision puisqu’un slide ne peut qu’aboutir sur une note juste.</p>
<p><strong>Utilisations</strong></p>
<p>Just as usual…</p>
<p>- Débuter des plans de solo;</p>
<p>- Enrichir des plans de solo;</p>
<p>- Apporter des nuances, du mouvement à son jeu;</p>`,
          order: 4,
        },
        {
          title: "Le Vibrato",
          content: `<p><strong>Définition</strong></p>
<p>Véritable signature du guitariste, le <strong>Vibrato</strong><strong> </strong>est souvent utilisé par les guitaristes solistes pour conserver une tension en fin de phrasé. Il consiste à moduler la résonance de la corde, d’où le terme de vibrato (”vibrer”, vous l’aurez compris).</p>
<p>L’effet s’assimile à une rapide succession de légers bends (dont nous allons parler bientôt). Il est compliqué à maîtriser mais indispensable à un guitariste.</p>
<p>Sa réalisation consiste, une fois une note jouée, à faire osciller la corde selon la largeur du manche à l’aide du doigt de la main gauche concerné, ce qui en change la longueur résonante. La note jouée oscille alors sur une faible largeur fréquentielle entre la fréquence de la note initialement jouée et une fréquence un plus élevée - car on allonge la longueur résonante de la corde lorsqu’on la tire ou pousse.</p>
<p><strong>Notation</strong></p>
<p>On note un vibrato en apposant le symbole “<strong>~</strong>” au dessus de la note jouée. On peut également le noté à la droite de la note concernée. Par exemple : “<strong>5~</strong>”.</p>
<p><strong>Précisions techniques</strong></p>
<p>Entraînez vous à créer une oscillation périodique. Il est dur au début de bouger son doigt à une vitesse constante.</p>
<p><strong>Avertissements</strong></p>
<p>Veillez à ne pas abuser de cet effet. Les guitaristes débutants ont tendance à réaliser un vibrato sur chaque note dont la durée est suffisamment longue pour cela, ce qui rend l’ensemble du jeu flou plutôt que de le nuancer. La parcimonie est donc de mise</p>
<p><strong>Utilisations</strong></p>
<p>Ses utilisations sont intéressantes :</p>
<p>- Achever un plan de solo ou une ligne mélodique;</p>
<p>- Rajouter du sustain à une note pour la faire résonner plus longtemps, notamment à la suite d’un autre effet tel que le slide qui a tendance à épuiser le souffle d’une note;</p>
<p>- Transmettre une émotion particulière, en jouant sur le sentiment apporté par la vibration.</p>`,
          order: 5,
        },
        {
          title: "Le Tapping",
          content: `<p><strong>Définition</strong></p>
<p>Le <strong>tapping</strong> (dit “tapping à 8 doigts”) est une technique consistant à poser et retirer du manche les doigts de ses 2 mains à la manière de hammer-on et pull-of  afin de jouer et enchaîner des notes sans gratter les cordes de la guitare.</p>
<p>Les effets appris à la main gauche sont utilisables à la main droite également : slide, hammer-on, pull-of, vibrato, etc; tout se déroule en fait comme si on avait une grande main composée de 8 doigts et non plus deux mains à 4 doigts chacune.</p>
<p><strong>Notation</strong></p>
<p>On note “<strong>T</strong>” au dessus d’une note attaquée à la main droite, ensuite relâchée pour faire résonner la suivante.</p>
<p><strong>Précisions techniques</strong></p>
<p>- Pour réaliser des passages en tapping, il faut monter le volume de l’ampli pour compenser le manque de puissance d’une attaque en marteau par rapport à une attaque en pince (on tape les cordes au lieu de les gratter);</p>
<p>- Par conséquent, il est bon de muter les cordes au niveau de la tête à l’aide de chouchous pour éviter la résonance des cordes à vide, potentiellement subséquente à un manque de précision;</p>
<p>- Il est nécessaire pour un confort de jeu optimal de jouer les mains perpendiculairement au manche, ce qui permet d’attribuer à chaque case son doigt correspondant. Si vous préférez n’utiliser qu’un des doigts de la main droite (typiquement l’index ou le majeur), orientez alors celle-ci le long du manche;</p>
<p>- Si vous réalisez un phrasé en tapping entre deux passages au médiator, vous pouvez utiliser uniquement le majeur à la main droite et garder le médiator entre le pouce et l’index.</p>
<p><strong>Avertissements</strong></p>
<p>Cette technique produit certes un effet des plus enrichissant et vous ouvre la porte à de nouvelles articulations, mais elle se trouve particulièrement dure à maîtriser.</p>
<p><strong>Utilisations</strong></p>
<p>- Articuler son jeu différemment ;</p>
<p>- Jouer des triades sur une seule corde avec fluidité (application à des plans de solo).</p>`,
          order: 6,
        },
        {
          title: "Les Harmoniques",
          content: `<p><strong>Définition</strong></p>
<p>Une technique très reconnaissable et commune à la plupart des instruments à cordes est le jeu d’<strong>harmoniques</strong>. Pour expliquer ce qu’est un harmonique, faisons un peu de physique acoustique : une note de musique se compose d’une fréquence fondamentale - qui sert de référence pour la note (ex. : le <strong>La</strong> 440 Hz des diapasons) - ainsi que d’une multitudes de fréquences multiples de la fondamentale - appelées les harmoniques.</p>
<p>Ce qu’on appelle jouer un harmonique est donc le fait de jouer une note et d’en étouffer la fondamentale pour n’en laisser résonner que les harmoniques. Pour en réaliser, il faut frôler la corde à la main gauche, la pincer à la main droite et, une fois les harmoniques produites, retirer le doigt de la main gauche alors posé sur la corde pour la laisser résonner.</p>
<p><strong>Notation</strong></p>
<p>On note pour les harmoniques …</p>
<p>- Naturels : <strong>< </strong>et<strong> > </strong>de part et d’autre de chaque note concernée;</p>
<p>- Artificiels : <strong>AH</strong> (Artificial Harmonic) au dessus des notes concernées;</p>
<p>- Pincés : <strong>PH</strong> (Pinched Harmonic) au dessus des notes concernées.</p>
<p><strong>Précisions techniques</strong></p>
<p>Les <strong>harmoniques naturels</strong> consistent à gratter une corde à vide à la main droite tout en apposant un doigt de la main gauche à un endroit bien précis de la corde. Ceux-ci se trouvent en divisant la corde par 2, 3, … Par exemple, déposer un doigt au niveau de la <strong>12</strong>ème frette revient à diviser par 2 la longueur de résonance de la corde, qui générera une note 1 octave plus haut que la corde à vide. De même, diviser la longueur résonante de la corde par 3 en la frôlant au niveau de la <strong>7</strong>ème frette à la main gauche fera sonner une note 2 octaves au-dessus de la corde à vide lorsque grattée à la main droite, etc.</p>
<p>Emplacements sur le manche - tous ne correspondent pas exactement à une frette : frette <strong>~3</strong>, frette <strong>~4</strong>, frette<strong> 5</strong>, frette <strong>7</strong>, frette<strong> ~9</strong>, frette <strong>12</strong>, frette <strong>19</strong>, frette <strong>24</strong>, …</p>
<p>Les <strong>harmoniques artificiels simples</strong> sont construits sur le même principe physique mais ne recourt plus aux cordes à vide : c’est la main gauche qui fixe la note en se posant comme à son habitude sur une case du manche. Le travail de frôler <strong>ET</strong> de jouer la corde incombe donc à la main droite. Bien sûr, les emplacements où frôler la corde ne sont plus les mêmes puisque la main gauche en a déjà réduit la longueur résonante, il faut donc vous adapter. Par exemple, si vous jouez un <strong>fa</strong> (corde de <strong>mi</strong> case <strong>1</strong>) - et en considérant qu’une frette en bas de manche est à peu près 2 fois plus large qu’une frette en milieu/haut de manche - il ne vous faut plus frôler la corde au niveau de la <strong>12</strong>ème mais de la <strong>12</strong>+<strong>1</strong>=<strong>13</strong>ème frette. Il s’agit donc simplement de décaler l’harmonique naturel sur le manche.</p>
<p>A la main droite, on doit alors gratter la corde à l’aide du pouce tout en frôlant la corde à hauteur nécessaire avec l’index.</p>
<p>Les <strong>harmoniques artificiels pincés</strong> sont probablement les plus courants car ils ne nécessitent pas de jouer à une hauteur particulière sur le manche. On les joue la main gauche sur une case et la main droite serrant le médiator entre l’index et le pouce de manière à ce qu’il vienne mute la corde au même moment où le médiator la joue. Le médiator ne doit que très peu dépasser de la main.</p>
<p><strong>Avertissements</strong></p>
<p>Il s’agit d’une technique à la fois dure à maîtriser et à insérer dans votre jeu…</p>
<p><strong>Utilisations</strong></p>
<p>- Produire des sons plus aiguës ;</p>
<p>- Ajouter des nuances à son jeu.</p>`,
          order: 7,
        },
        {
          title: "Les Appogiatures",
          content: `<p><strong>Définition</strong></p>
<p>Une <strong>Appogiature</strong> est un ornement consistant à rajouter une brève note avant une note importante de la mélodie pour mieux introduire cette dernière et la mettre en valeur. La définition retenue par Wikipédia est la suivante : “une appogiature est un ornement consistant à retard la note suivante, la note principale, sur laquelle on veut insister”.</p>
<p><strong>Notation</strong></p>
<p>Sur une tablature ou partition, on note une appogiature comme une petite note, éventuellement barrée si elle se situe avant le temps (cf précisions techniques). Exemple :</p>
<p><strong>Précisions techniques</strong></p>
<p>Une appogiature peut se réaliser :</p>
<p>- Avant le temps, auquel cas il faut anticiper la reprise et jouer la note ajoutée sur la fin du temps précédant la note importante;</p>
<p>- Sur le temps, auquel cas on joue la note ajoutée sur le début du temps attribué à la note importante, qu’on jouera par conséquent avec un léger retard.</p>
<p><strong>Avertissements</strong></p>
<p>- Une appogiature est une sorte de “note bonus” : elle n’appartient pas la mélodie; c’est pourquoi on peut se passer de la jouer. Ceci dit, elles enrichissent cette dernière et il est dommage de s’en priver lorsqu’on peut y faire appel… Avec parcimonie, bien entendu.</p>
<p>- Le plus souvent, une appogiature lie la note ajoutée à la note importante par un effet : slide, hammer-on, …</p>
<p><strong>Utilisations</strong></p>
<p>- Mettre un valeur les notes importantes de la mélodie ;</p>
<p>- Enrichir cette dernière de notes qui lui sont éventuellement étrangères.</p>`,
          order: 8,
        },
        {
          title: "Les Cocottes",
          content: `<p><strong>Définition</strong></p>
<p>Une <strong>cocotte</strong> est, en guitare, une ligne mélodique simple à rythmique riche. Elle s’insère de façon très efficace dans un mix pour le vivifier. Il s’agit d’une technique principalement funk, reggae, voire rock mais qu’on retrouve également dans certains morceaux blues et jazz.</p>
<p><strong>Exemple</strong></p>
<p>Voici un exemple de cocotte :</p>
<p>Passez votre curseur sur l'image pour voir apparaître</p>
<p>la division rythmique en doubles croches.</p>
<p><strong>Exercices</strong></p>
<p>Pour travailler la main droite :</p>
<p>Cocottes gpx</p>
<p>Cocottes pdf</p>
<p><strong>Précisions techniques</strong></p>
<p>- La rythmique d’une cocotte est en générale soutenue et parfois complexe : elle représente un travail de rapidité et de précision sur la main droite;</p>
<p>- Sa mélodie ne se base généralement que sur quelques notes.</p>
<p><strong>Avertissements</strong></p>
<p>- Une cocotte suggère une division rythmique en doubles croches ;</p>
<p>- Il est courant de rajouter à la ligne mélodique des ghost notes pour conserver une allure rythmique soutenue.</p>
<p><strong>Utilisations</strong></p>
<p>- Rendre un mix plus dynamique sans l’alourdir ;</p>
<p>- Compléter des éléments tels qu’une guitare rythmique ou une batterie.</p>`,
          order: 9,
        },
        {
          title: "Les Coups percussifs",
          content: `<p><strong>Définition</strong></p>
<p>Un <strong>coup percussif</strong> consiste à gratter les cordes de la guitare tout en les mutant pour produire non pas des notes mais un son à caractère percussif. Il s’agit d’un élément rythmique.</p>
<p><strong>Notation</strong></p>
<p>On note par des croix “<strong>X</strong>” les notes concernées, alors appelées ghost notes.</p>
<p><strong>Précisions techniques</strong></p>
<p>Selon le contexte, on peut choisir de muter les cordes de la main droite où de la main gauche ;</p>
<p>- A la main gauche : relâcher la pression de l’accord et incliner les doigts pour muter les potentielles cordes à vide. Éventuellement : utiliser le pouce pour mute les cordes basses ;</p>
<p>- A la main droite : déposer la paume de la main sur les cordes au niveau du sillet en même temps que le médiator (/la main) vient les gratter.</p>
<p><strong>Avertissements</strong></p>
<p>Il est fréquent, lorsque le guitariste n’est pas accompagné d’un batteur, d’utiliser des coups percussifs pour imiter le battement d’une caisse claire. Ils sont alors notamment joués sur les temps faibles (<strong>2</strong>nd et <strong>4</strong>ème temps) de chaque mesure.</p>
<p><strong>Utilisations</strong></p>
<p>- Rajouter de la dynamique à votre jeu;</p>
<p>- Compenser l’absence de batterie.</p>`,
          order: 10,
        },
        {
          title: "Le Palm mute",
          content: `<p><strong>Définition</strong></p>
<p>Le <strong>Palm mute</strong> consiste à jouer en posant le poignet droit au niveau du sillet de la guitare, de manière à ce que la main étouffe légèrement les cordes à leur base pour n’en laisser résonner que les fréquences basses</p>
<p><strong>Notation</strong></p>
<p>On note “<strong>P.M.</strong>” au dessus des notes concernées</p>
<p><strong>Précisions techniques</strong></p>
<p>Placez votre main à la bonne hauteur au niveau du sillet pour obtenir un son suffisamment sourd sans complètement muter les cordes.</p>
<p><strong>Avertissements</strong></p>
<p>Cette technique est indispensable pour jouer du Métal et même du Rock, où elle est utilisée dans de nombreux riffs. La difficulté est alors d’alterner rapidement entre un jeu en palm mute et un jeu standard.</p>
<p><strong>Utilisations</strong></p>
<p>Obtenir un son plus grave et plus puissant.</p>`,
          order: 11,
        },
      ],
    },
    {
      title: "Gammes et Modes",
      description: "Pentatonique, modes de la gamme majeure et improvisation.",
      part: "Guitare",
      order: 5,
      sections: [
        {
          title: "Pr\u00e9ambule - Rappel sur les intervalles",
          content: `<p><strong>Définition(s)</strong></p>
<p>On trouve sur internet la définition suivante : <strong>“gamme</strong> : suite […] de notes comprises dans une octave, suivant des intervalles déterminés”.</p>
<p>On peut appliquer la même définition aux <strong>modes </strong>dont nous verrons plus tard les subtilités.</p>
<p>Un <strong>intervalle</strong> est l’écart (en <strong>demi-tons</strong>) d’une note à une autre. Dans une gamme, on repère une note par l'intervalle entre celle-ci et la Tonique.</p>
<p><strong>Intervalles</strong></p>
<p>Pour parler de gammes, il faut être au point sur les intervalles. Voici donc sous forme de tableau les intervalles de l’Unisson à l’Octave :</p>
<p><strong>Écart à la Tonique (/demi-tons)</strong></p>
<p><strong>Intervalle</strong></p>
<p><strong>Notation</strong></p>
<p><strong>0</strong></p>
<p>Unisson (Tonique)</p>
<p><strong>T</strong></p>
<p><strong>1</strong></p>
<p>Seconde mineure</p>
<p><strong>m2</strong></p>
<p><strong>2</strong></p>
<p>Seconde Majeure</p>
<p><strong>2</strong></p>
<p><strong>3</strong></p>
<p>Tierce mineure</p>
<p><strong>m3</strong></p>
<p><strong>4</strong></p>
<p>Tierce Majeure</p>
<p><strong>3</strong></p>
<p><strong>5</strong></p>
<p>Quarte juste</p>
<p><strong>4</strong></p>
<p><strong>6</strong></p>
<p>Quarte Augmentée/Quinte diminuée</p>
<p><strong>4#</strong>/<strong>b5</strong></p>
<p><strong>7</strong></p>
<p>Quinte juste</p>
<p><strong>5</strong></p>
<p><strong>8</strong></p>
<p>Quinte Augmentée/Sixte mineure</p>
<p><strong>5#</strong>/<strong>m6</strong></p>
<p><strong>9</strong></p>
<p>Sixte Majeure</p>
<p><strong>6</strong></p>
<p><strong>10</strong></p>
<p>Septième mineure</p>
<p><strong>7</strong></p>
<p><strong>11</strong></p>
<p>Septième Majeure</p>
<p><strong>M7</strong></p>
<p><strong>12</strong></p>
<p>Octave (Tonique)</p>
<p><strong>T</strong></p>
<p><strong>Avertissement(s)</strong></p>
<p>Dans une gamme à 7 notes, on nomme les notes et les intervalles de manière à ne retrouver le même radical qu’une fois par octave. C’est-à-dire qu’on préférera la notation <strong>T - m2 - m3 - 4 - b5 -m6 - 7</strong>  à la notation <strong>T - m2 - m3 - 4 - b5 -5# - 7</strong> qui fait apparaître deux fois la <strong>quinte</strong> (une fois diminuée et une fois augmenté). De même, on ne notera pas <strong>C Db Eb F Gb G# B</strong> mais <strong>C Db Eb F Gb Ab B </strong>pour ne pas faire apparaitre deux fois la note de <strong>Sol</strong> (une fois bémol, une fois dièse).</p>`,
          order: 1,
        },
        {
          title: "Relatives Majeuremineure",
          content: `<p><strong>Définition</strong></p>
<p>Une tonalité mineure est la <strong>relative mineure </strong>de la tonalité Majeure comportant les mêmes notes. À l’inverse, une gamme Majeure est la <strong>relative Majeure</strong> de la gamme mineure comportant les mêmes notes.</p>
<p>Deux gammes mineures et Majeures relatives l’une de l’autre étant construites sur les mêmes notes, elles se distinguent par l’identification de leur Tonique.</p>
<p><strong>Tonalités relatives</strong></p>
<p>Pour faire simple, si je désigne par <strong>TM</strong> la Tonique d’une Tonalité Majeure et par <strong>Tm</strong> la Tonique d’une Tonalité mineure, on a :</p>
<p><strong>TM </strong>- <strong>1.5</strong>tons = <strong>Tm</strong>(Exemple : <strong>Do </strong>- <strong>1.5</strong> tons = <strong>La</strong>, donc <strong>La mineur </strong>est la relative mineure de <strong>Do Majeur</strong>)</p>
<p><strong>Tm</strong> + <strong>1.5</strong>tons = <strong>TM</strong>(Exemple : <strong>Do</strong> + 1.5 tons = <strong>Mi b</strong>, donc <strong>Mi b Majeur </strong>est la relative Majeure de <strong>Do mineur</strong>)</p>
<p><strong>Armure</strong></p>
<p>7b</p>
<p>6b</p>
<p>5b</p>
<p>4b</p>
<p>3b</p>
<p>2b</p>
<p>1b</p>
<p>1#</p>
<p>2#</p>
<p>3#</p>
<p>4#</p>
<p>5#</p>
<p>6#</p>
<p>7#</p>
<p>Tonalité Majeure</p>
<p><strong>Do</strong>b Maj</p>
<p><strong>Sol</strong>b Maj</p>
<p><strong>Ré</strong>b Maj</p>
<p><strong>La</strong>b Maj</p>
<p><strong>Mi</strong>b Maj</p>
<p><strong>Si</strong>b Maj</p>
<p><strong>Fa</strong> Maj</p>
<p><strong>Do</strong> Maj</p>
<p><strong>Sol</strong> Maj</p>
<p><strong>Ré</strong> Maj</p>
<p><strong>La</strong> Maj</p>
<p><strong>Mi</strong> Maj</p>
<p><strong>Si </strong>Maj</p>
<p><strong>Fa# </strong>Maj</p>
<p><strong>Do</strong># Maj</p>
<p>Tonalité mineure</p>
<p><strong>La</strong>b min</p>
<p><strong>Mi</strong>b min</p>
<p><strong>Si</strong>b min</p>
<p><strong>Fa</strong> min</p>
<p><strong>Do</strong> min</p>
<p><strong>Sol</strong> min</p>
<p><strong>Ré</strong> min</p>
<p><strong>La</strong> min</p>
<p><strong>Mi </strong>min</p>
<p><strong>Si</strong> min</p>
<p><strong>Fa</strong># min</p>
<p><strong>Do</strong># min</p>
<p><strong>Sol</strong># min</p>
<p><strong>Ré</strong># min</p>
<p><strong>La</strong># min</p>
<p>Notez que sur le manche de votre guitare, passer d’une Tonalité à se relative mineure/Majeure revient à descendre/monter la Tonique de 3 cases.</p>
<p><strong>Application aux Pentatoniques</strong></p>
<p>(Cette application s’étend à tout type de gamme)</p>
<p>Cela étant dit, vous comprenez maintenant pourquoi les positions mineures et Majeures de la gamme pentatonique sont identiques mais décalées de <strong>1.5 tons</strong> les Majeures des mineures. De ce fait, la position <strong>1</strong> de la penta Majeure est identique à la position <strong>2</strong> de la penta mineure, la position <strong>2 Maj </strong>identique à la position <strong>3 min</strong>, la <strong>3 Maj</strong> à la <strong>4 min</strong>, etc. Deux gammes relatives mineure et Majeure ne se différencient réellement donc que par la note Tonique autour de laquelle on prendra soin de construire son jeu. Ainsi, jouer la <strong>position</strong> <strong>1</strong> de la penta <strong>mineure</strong> de <strong>La </strong>autour de la note de <strong>Do</strong> revient à jouer la <strong>position 5</strong> de la <strong>penta</strong> de <strong>Do Maj</strong> - de même pour toutes les autres positions : tout est une question de perspective !</p>
<p>Si vous devez improviser sur un accompagnement en Tonalité Majeure, il vous donc suffit à vous ramener aux positions de la pentatonique mineure relative à cette Tonalité Majeure tout en conservant comme Tonique la Tonique de la Tonalité Majeure.</p>`,
          order: 2,
        },
        {
          title: "Pentatonique - 1\u00e8re position mineure",
          content: `<p><strong>Définition(s)</strong></p>
<p>La gamme <strong>pentatonique mineure</strong> est la gamme de référence des guitaristes. Elle est extraite de la gamme <strong>mineure naturelle</strong> à laquelle on a soustrait la seconde et la sixte, ce qui fait d’elle une gamme à 5 notes, comme l’indique son nom. Il s’agit des intervalles suivant :</p>
<p>- La tonique, <strong>T</strong></p>
<p>- La tierce mineure,<strong> -3</strong></p>
<p>- La quarte juste, <strong>4</strong></p>
<p>- La quinte juste, <strong>5</strong></p>
<p>- La septième mineure, <strong>7</strong></p>
<p><strong>Position</strong></p>
<p>Première position de la gamme pentatonique mineure :</p>
<p>PentaMinLaPos1Ascendant</p>
<p>PentaMinLaPos1Descendant</p>
<p><strong>Remarque(s)</strong></p>
<p>Cette gamme est utilisée par les Bluesmen mais également dans le Rock, notamment pour construire des solos (Stairway to Heaven : Pentatonique mineure de <strong>La</strong>, Nothing else Matters : Pentatonique mineure de <strong>Mi</strong>, etc). On peut également l’utiliser comme repère, et retrouver à partir de ses positions les positions d’autres gammes ou de modes.</p>`,
          order: 3,
        },
        {
          title: "Pentatonique - Autres positions mineures",
          content: `<p><strong>Contexte</strong></p>
<p>Une fois que vous connaissez votre <strong>1</strong>ère position et les intervalles composant la pentatonique mineure, étendez celle-ci à l’ensemble du manche. Cette gamme comportant 5 notes, elle regroupe <strong>5 positions </strong>: à partir de la Tonique, Tierce, Quarte, Quinte et Septième.</p>
<p><strong>Positions</strong></p>
<p>Cliquez sur le schéma pour faire apparaître chaque position de la pentatonique mineure :</p>
<p><strong>Remarque(s)</strong></p>
<p>N’apprenez pas chaque position de chaque gamme que vous rencontrez : contentez vous de visualiser les emplacements des Toniques et de retenir les intervalles composant la gamme. Cela suffit pour en reconstruire les positions au fur et à mesure que vous jouez.</p>
<p>A ce sujet, notez que les cordes de votre instrument sont accordées en quarte. Une fois que vous avez repéré une tonique sur votre manche, il vous suffit donc de passer 2 cordes et 2 cases dans un sens ou dans l’autre pour retrouver votre tonique une octave plus haut ou plus bas. Exception : la corde de <strong>Si</strong> est accordée en Tierce par rapport à celle de <strong>Sol</strong>, donc si passez (au-)dessus, sautez une case supplémentaire pour retrouvez une Tonique. Attention également au fait que le manche “boucle” sur les cordes de <strong>Mi</strong> et <strong>mi</strong>.</p>
<p>Remarquez également qu’il existe dans la pentatonique un “carré” composé des notes suivantes : <strong>-7</strong>, <strong>T</strong>,<strong> -3</strong>,<strong> 4</strong>. Sur ces 4 notes et à l’aide de quelques effets de jeu, vous pouvez aisément fonder des plans entiers de solo. En considérant qu’un bend depuis la quarte vous ramène à la quinte, vous avez en fait dans cette même zone les 5 notes de la gamme !</p>
<p>Encore une fois, il est crucial d’être capable de rapidement retrouver les emplacements de la Tonique sur le manche pour en déduire la position de ces carrés.</p>`,
          order: 4,
        },
        {
          title: "Pentatonique - Positions Majeures",
          content: `<p><strong>Définition</strong></p>
<p>La<strong> </strong>gamme<strong> pentatonique Majeure</strong> est issue de la gamme Majeure à laquelle on a retiré les quarte juste et la septième Majeure. Ses 5 notes sont les suivantes :</p>
<p>- La tonique, <strong>T</strong></p>
<p>- La seconde Majeure, <strong>2</strong></p>
<p>- La tierce Majeure,<strong> 3</strong></p>
<p>- La quinte juste, <strong>5</strong></p>
<p>- La sixième Majeure, <strong>6</strong></p>
<p><strong>Position(s)</strong></p>
<p>Voici la première position de la gamme <strong>pentatonique Majeure </strong>:</p>
<p>PentaMajLaPos1Ascendant</p>
<p>PentaMajLaPos1Descendant</p>
<p>Et en voici l’ensemble :</p>
<p><strong>Remarque(s)</strong></p>
<p>On remarque que les positions de la pentatonique Majeure et leur enchaînement sont identiques à celles de la pentatonique mineure à un décalage de <strong>1.5 tons </strong>près sur le manche ! Cela est lié à la notion de relative Majeure/mineure (cf section suivante).</p>`,
          order: 5,
        },
        {
          title: "Modes - D\u00e9finition et construction",
          content: `<p><strong>Définition(s)</strong></p>
<p>Un <strong>mode</strong> est une suite de notes séparées les unes des autres par des intervalles issus d’une gamme et comportant une note caractéristique, dite <strong>Tonique</strong>.</p>
<p><strong>Construction</strong></p>
<p>Prenons la <strong>gamme</strong> <strong>majeure</strong>, disons en Tonalité de <strong>Do </strong>pour fixer les idées. Celle-ci regroupe les notes suivantes : Do Ré Mi Fa Sol La Si Do. Réécrivons cette gamme jusqu’à boucler en la démarrant à chaque fois depuis la note suivante :</p>
<p><strong>Do</strong></p>
<p><strong>Ré</strong></p>
<p><strong>Mi</strong></p>
<p><strong>Fa</strong></p>
<p><strong>Sol</strong></p>
<p><strong>La</strong></p>
<p><strong>Si</strong></p>
<p><strong>Do</strong></p>
<p><strong>Ré</strong></p>
<p><strong>Mi</strong></p>
<p><strong>Fa</strong></p>
<p><strong>Sol</strong></p>
<p><strong>La</strong></p>
<p><strong>Si</strong></p>
<p><strong>Do</strong></p>
<p><strong>Ré</strong></p>
<p><strong>Mi</strong></p>
<p><strong>Fa</strong></p>
<p><strong>Sol</strong></p>
<p><strong>La</strong></p>
<p><strong>Si</strong></p>
<p><strong>Do</strong></p>
<p><strong>Ré</strong></p>
<p><strong>Mi</strong></p>
<p><strong>Fa</strong></p>
<p><strong>Sol</strong></p>
<p><strong>La</strong></p>
<p><strong>Si</strong></p>
<p><strong>Do</strong></p>
<p><strong>Ré</strong></p>
<p><strong>Mi</strong></p>
<p><strong>Fa</strong></p>
<p><strong>Sol</strong></p>
<p><strong>La</strong></p>
<p><strong>Si</strong></p>
<p><strong>Do</strong></p>
<p><strong>Ré</strong></p>
<p><strong>Mi</strong></p>
<p><strong>Fa</strong></p>
<p><strong>Sol</strong></p>
<p><strong>La</strong></p>
<p><strong>Si</strong></p>
<p><strong>Do</strong></p>
<p><strong>Ré</strong></p>
<p><strong>Mi</strong></p>
<p><strong>Fa</strong></p>
<p><strong>Sol</strong></p>
<p><strong>La</strong></p>
<p><strong>Si</strong></p>
<p><strong>Do</strong></p>
<p><strong>Ré</strong></p>
<p><strong>Mi</strong></p>
<p><strong>Fa</strong></p>
<p><strong>Sol</strong></p>
<p><strong>La</strong></p>
<p><strong>Si</strong></p>
<p><strong>Do</strong></p>
<p><strong>Ré</strong></p>
<p><strong>Mi</strong></p>
<p><strong>Fa</strong></p>
<p><strong>Sol</strong></p>
<p><strong>La</strong></p>
<p><strong>Si</strong></p>
<p><strong>Do</strong></p>
<p>Traduisons ces suites de notes en intervalles pour nous absoudre de la tonalité :</p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p><strong>1</strong></p>
<p>Je relève les séquences d’intervalles et obtiens le tableau ci-dessous, regroupant les modes de la gamme Majeure :</p>
<p><strong>Numéro</strong>*</p>
<p><strong>Nom</strong></p>
<p><strong>Alias</strong></p>
<p><strong>Séquence d’intervalles </strong>(/tons)</p>
<p><strong>I</strong></p>
<p>Mode<strong> Ionien</strong></p>
<p>Mode de Do</p>
<p>1 - 1 - 1/2 - 1 - 1 - 1 - 1/2</p>
<p><strong>II</strong></p>
<p>Mode<strong> Dorien</strong></p>
<p>Mode de Ré</p>
<p>1 - 1/2 - 1 - 1 - 1 - 1/2 - 1</p>
<p><strong>III</strong></p>
<p>Mode<strong> Phrygien</strong></p>
<p>Mode de Mi</p>
<p>1/2 - 1 - 1 - 1 - 1/2 - 1 - 1</p>
<p><strong>IV</strong></p>
<p>Mode<strong> Lydien</strong></p>
<p>Mode de Fa</p>
<p>1 - 1 - 1 - 1/2 - 1 - 1 - 1/2</p>
<p><strong>V</strong></p>
<p>Mode<strong> Mixolydien</strong></p>
<p>Mode de Sol</p>
<p>1 - 1 - 1/2 - 1 - 1 - 1/2 - 1</p>
<p><strong>VI</strong></p>
<p>Mode<strong> Éolien</strong></p>
<p>Mode de La</p>
<p>1 - 1/2 - 1 - 1 - 1/2 - 1 - 1</p>
<p><strong>VII</strong></p>
<p>Mode<strong> Locrien</strong></p>
<p>Mode de Si</p>
<p>1/2 - 1 - 1 - 1/2 - 1 - 1 - 1</p>
<p>* Degré de la Gamme Majeure dont est issu le mode. Il s’agit également d’un numéro de référence. On parle par exemple du 4ème mode de la gamme Majeure pour parler du mode Lydien.</p>`,
          order: 6,
        },
        {
          title: "Modes - Modes de la gamme Majeure",
          content: `<p>1 - Mode ionien : (majeur)</p>
<p><strong>Premier mode</strong> de la gamme Majeure et premier mode Majeur.</p>
<p>Correspond à la gamme Majeure telle que vous la connaissez. Vous pouvez également la voir comme la pentatonique Majeure enrichie de la <strong>quarte juste</strong> et de la <strong>septième majeure</strong>, en vert fluo sur le schéma.</p>
<p>Voici les intervalles qu’il comprend en toutes lettres et en notation réduite avec l’exemple des notes en <strong>Do</strong>, ainsi qu’un audio d’ascendant/descendant de la première position du mode en Do :</p>
<p>Tonique - Seconde - Tierce Majeure - Quarte - Sixte - Septième Majeure - Tonique</p>
<p><strong>T - 2 - 3 - 4 - 6 - M7 - T</strong></p>
<p>C - D - E - F - G - A - B - C</p>
<p>DoIonienPos1AscDesc</p>
<p>2 - Mode dorien : (mineur)</p>
<p><strong>Deuxième mode</strong> de la gamme Majeure et premier mode mineur.</p>
<p>Correspond à la gamme pentatonique mineure enrichie de la <strong>seconde Majeure</strong> et de la <strong>sixte Majeure</strong>, en bleu clair sur le schéma.</p>
<p>Voici les intervalles qu’il comprend en toutes lettres et en notation réduite avec l’exemple des notes en <strong>Do</strong>, ainsi qu’un audio d’ascendant/descendant de la première position du mode en Do :</p>
<p>Tonique - Seconde - Tierce mineure - Quarte - Quinte - Sixte - Septième mineure - Tonique</p>
<p><strong>T - 2 - m3 - 4 - 5 - 6 - 7 - T</strong></p>
<p>C - D - Eb - F - G - A -Bb - C</p>
<p>doDorienPos1AscDesc</p>
<p>3 - Mode phrygien : (mineur)</p>
<p><strong>Troisième mode </strong>de la gamme Majeure et deuxième mode mineur.</p>
<p>Correspond à la gamme pentatonique mineure enrichie de la <strong>seconde mineure</strong> et de la <strong>sixte mineure</strong>, en magenta sur le schéma.</p>
<p>Voici les intervalles qu’il comprend en toutes lettres et en notation réduite avec l’exemple des notes en <strong>Do</strong>, ainsi qu’un audio d’ascendant/descendant de la première position du mode en Do :</p>
<p>Tonique - Seconde mineure - Tierce mineure - Quarte - Quinte - Sixte bémol - Septième mineure - Tonique</p>
<p><strong>T - m2 - m3 - 4 - 5 - m6 - 7 - T</strong></p>
<p>C - Db - Eb - F - G - Ab - Bb - C</p>
<p>doPhrygienPos1AscDesc</p>
<p>4 - Mode lydien : (majeur)</p>
<p><strong>Quatrième mode</strong> de la gamme Majeure et deuxième mode Majeur.</p>
<p>Correspond à la gamme pentatonique Majeure enrichie de la <strong>quarte augmentée</strong> et de la <strong>septième majeure</strong>, en jaune sur le schéma.</p>
<p>Voici les intervalles qu’il comprend en toutes lettres et en notation réduite avec l’exemple des notes en <strong>Do</strong>, ainsi qu’un audio d’ascendant/descendant de la première position du mode en Do :</p>
<p>Tonique - Seconde - Tierce - Quarte augmentée - Quinte - Sixte - Septième majeure - Tonique</p>
<p><strong>T - 2 - 3 - 4# - 5 - 6 - M7 - T</strong></p>
<p>C - D - E - F# - G - A - B - C</p>
<p>doLydienPos1AscDesc</p>
<p>5 - Mode mixolydien : (majeur)</p>
<p><strong>Cinquième mode </strong>de la gamme Majeure et 3ème mode Majeur.</p>
<p>Correspond à la gamme pentatonique majeure enrichie de la <strong>quarte juste</strong> et de la <strong>septième mineure</strong>, en bleu foncé sur le schéma.</p>
<p>Voici les intervalles qu’il comprend en toutes lettres et en notation réduite avec l’exemple des notes en <strong>Do</strong>, ainsi qu’un audio d’ascendant/descendant de la première position du mode en Do :</p>
<p>Tonique - Seconde - Tierce - Quarte - Quinte - Sixte - Septième mineure - Tonique</p>
<p><strong>T - 2 - 3 - 4 - 5 - 6 - 7 - T</strong></p>
<p>C - D - E - F - G - A - Bb - C</p>
<p>doMixolydienPos1AscDesc</p>
<p>6 - Mode éolien : (mineur)</p>
<p><strong>Sixième mode </strong>de la gamme Majeure et troisième mode mineur.</p>
<p>Correspond à la gamme mineure telle que vous la connaissez. Vous pouvez également la voir comme gamme pentatonique mineure enrichie de la <strong>seconde majeure </strong>et de la <strong>sixte mineure</strong>, en violet sur le schéma.</p>
<p>Voici les intervalles qu’il comprend en toutes lettres et en notation réduite avec l’exemple des notes en <strong>Do</strong>, ainsi qu’un audio d’ascendant/descendant de la première position du mode en Do :</p>
<p>Tonique - Seconde - Tierce mineure - Quarte - Quinte - Sixte mineure - Septième mineure - Tonique</p>
<p><strong>T - 2 - m3 - 4 - 5 - m6 - 7 - T </strong></p>
<p>C - D - Eb - F - G - Ab - Bb - C</p>
<p>doEolienPos1AscDesc</p>
<p>7 - Mode locrien : (diminué)</p>
<p><strong>Septième mode</strong> de la gamme Majeure, et son unique mode diminué.</p>
<p>Comportant une tierce mineure, on pourrait le rapprocher de la pentatonique mineure à laquelle on aurait rajouté la <strong>seconde mineure</strong> et <strong>sixte mineure</strong>, et dont on aurait altéré la quinte en <strong>quinte diminuée</strong>, en turquoise sur le schéma.</p>
<p>Voici les intervalles qu’il comprend en toutes lettres et en notation réduite avec l’exemple des notes en <strong>Do</strong>, ainsi qu’un audio d’ascendant/descendant de la première position du mode en Do :</p>
<p>Tonique - Seconde mineure - Tierce mineure - Quarte - Quinte diminuée - Sixte mineure - Septième mineure - Tonique</p>
<p><strong>T - m2 - m3 - 4 - b5 - m6 - 7 - T</strong></p>
<p>C - Db - Eb - F - Gb - Ab - Bb - C</p>
<p>LaLocrienBourdon</p>
<p>Ce dernier mode de la gamme majeure est très peu utilisé. Sa sonorité se démarque fortement de tous les autres modes par l’absence de quinte juste.</p>`,
          order: 7,
        },
        {
          title: "Modes - Jouer un mode",
          content: `<p><strong>Différencier les modes</strong></p>
<p>Prenons l’exemple du Mode Éolien, obtenu par l’enchaînement des intervalles de la gamme majeure de <strong>Do</strong> depuis la note de <strong>La </strong>- raison pour laquelle on le désigne communément comme “mode de La”. Par définition, les notes du <strong>mode de</strong> <strong>La Éolien</strong> et de la<strong> gamme Majeure de</strong> <strong>Do </strong>- ou encore <strong>mode de Do Ionien </strong>- sont donc identiques.</p>
<p>Mode Éolien : en prenant La comme Tonique, on retrouve les notes du mode de Do Ionien (gamme de Do Majeur)</p>
<p>Qu’est-ce qui différencie donc <strong>Do Ionien</strong> de <strong>La Éolien</strong> ?  <strong>Do Ionien</strong> de <strong>Si Locrien</strong> ? Ou encore <strong>Ré Ionien</strong> de <strong>La Mixolydien</strong> de <strong>Si Éolien</strong> ? Chaque gamme heptatonique donnant naissance à 7 modes, je vous épargne les variantes de la question.</p>
<p>La problématique est la suivante : comment différencier une multitude de modes constitués des mêmes notes ?</p>
<p>La réponse est : en marquant la <strong>Tonique</strong> ! En effet, c’est l’intervalle entre chaque note et la note Tonique du mode qui fait que l’oreille la perçoit teintée d’une manière ou d’une autre. Ainsi, un même ensemble de notes n’est pas perçu de la même <strong>couleur</strong> par l’oreille selon sa Tonique, d’où l’importance de la mettre en évidence.</p>
<p>En fait, vous avez appris cela dès lors que vous avez étudié qu’on différencie les tonalités de <strong>La mineur</strong> et de <strong>Do Majeur</strong>, qui comportent pourtant les mêmes notes, par leur Tonique.</p>
<p><strong>Jouer un mode</strong></p>
<p>Il existe donc deux méthodes pour faire transcender la note Tonique d’un mode dans son jeu :</p>
<p>- Faire résonner la note souhaitée : on parle de <strong>bourdon : LaLocrienBourdon</strong></p>
<p>- Répéter la note : on parle de <strong>pédale</strong>, ou de note pédale : LaLocrienPedale</p>
<p>Typiquement, si vous jouez un mode à l’aide d’un bourdon, vous allez faire résonner la note caractéristique du mode dans les fréquences graves. Sur une guitare, il peut s’agir de la corde de <strong>Mi</strong> ou de celle de <strong>La</strong>. En effet, une note grave résonne plus qu’une note aiguë.</p>
<p>Un jeu en pédale suggère pour sa part que vous jouiez votre note caractéristique à des fréquences voisines de celles du reste des notes que vous utilisez : pas besoin donc de descendre ni de monter de 2 octaves sur le manche pour allez la chercher. Sur une guitare, il est pratique d'utiliser une corde à vide comme pédale (ex. : ”Thunderstruck”, AC/DC).</p>
<p><strong>Exemples</strong></p>
<p>Modes gpx</p>
<p>Modes pdf</p>
<p><strong>Quand jouer un mode ?</strong></p>
<p>On retrouve la musique modale…</p>
<p>- Dans le Jazz ;</p>
<p>- Souvent dans le Métal, le funk voire le rap ;</p>
<p>- Parfois dans le Rock, la Pop ;</p>
<p>- Éventuellement dans des genres plus anciens ou lointains que ceux que nous connaissons : celtique, indien, …</p>`,
          order: 8,
        },
        {
          title: "Postambule - Travailler une gamme",
          content: `<p><strong>Définitions(s)</strong></p>
<p>Une <strong>position</strong><strong> </strong><strong>de gamme</strong> est un doigté parcourant la gamme en partant d’une de ses notes. La première position part de la Tonique de la gamme, la 2ème de la 2ème note de la gamme, etc.</p>
<p>On forme usuellement les positions de gammes à <strong>2 notes par corde</strong> s’il s’agit de gammes pentatoniques et à <strong>3 notes par corde</strong> pour des gammes “classiques” - à 7 notes. Dans la suite de cette section, les pratiques décrites sont valables pour les positions à 2 comme à 3 notes par corde.</p>
<p>Travailler une gamme, c’est en <strong>intégrer </strong>les positions et leurs doigtés dans sa mémoire musculaire, en vue d’être capable d’improviser dessus.</p>
<p>Pour cela, il ne suffit pas de regarder les notes composent la gamme, lancer un backing track et “roulez jeunesse”. Il faut d’abord intégrer chaque position de la gamme, puis apprendre à passer d’une position à sa voisine, et enfin les travailler toutes ensembles.</p>
<p><strong>1 - </strong><strong>Position par position</strong></p>
<p>Les exercices suivants sont pensés pour être appliqués à une position de gamme et permettent d’en <strong>intégrer</strong> <strong>le</strong> <strong>doigté</strong>. Les exemples concernent la première position pentatonique mineure en La à 2 notes par corde, mais sont applicables à toute position (à 2 comme à 3 notes par corde) de toute gamme.</p>
<p>Ascendant/Descendant</p>
<p>Comme l’indique le nom, il s’agit de monter la position de gamme note par note et corde par corde, puis de la redescendre en la parcourant dans le sens inverse.</p>
<p>PentaMinLaPos1AscDesc</p>
<p>Exemple sur la 1ère position de la pentatonique mineure en La.</p>
<p>Saut de corde</p>
<p>Il s’agit toujours de monter et descendre la position note par note, mais plus tout à fait corde par corde.</p>
<p>Après avoir joué les notes d’une corde, jouez celles non pas de la corde suivante mais de celle d’après, pour ensuite jouer la corde que vous aviez sauté. Répétez le processus.</p>
<p>PentaMinLaPos1SautCorde</p>
<p>Exemple sur la 1ère position de la pentatonique mineure en La.</p>
<p>Gamme brisée</p>
<p>Il s’agit toujours de monter et descendre la position note par note et corde par corde, mais pour chaque note que vous jouez, jouer également les 2 ou 3 - au choix - notes qui suivent sur la position.</p>
<p>Ainsi, si vous jouez sur une gamme comportant tonique, seconde, tierce, etc, qu’on notera 1, 2, 3, etc indépendamment de la couleur de chaque note (caractère majeur, mineur, diminué, …), cela revient à jouer la suite <strong>1</strong> 2 3 <strong>2</strong><strong> </strong>3 4 <strong>3</strong><strong> </strong>4 5 …, ou encore : <strong>1</strong> 2 3 4 <strong>2</strong><strong> </strong>3 4 5 <strong>3</strong> 4 5 6 …</p>
<p>PentaMinLaPos1Brisee3</p>
<p>Exemple de gamme brisée ascendante par 3 notes sur la 1ère position de la pentatonique mineure de La.</p>
<p><strong>2 - </strong><strong>De position à position</strong></p>
<p>Il s’agit d’apprendre à passer d’une position à une autre pour développer son jeu <strong>en longueur</strong> et non plus simplement en largeur pour le manche.</p>
<p>Une manière simple de changer de position est de réaliser un slide depuis une note de la gamme vers la suivante. Lors du slide, c’est <strong>toute votre main</strong> qui se déplace et se retrouve en face de la position qui suit (cf les doigtés indiqués sur la partition ci-après).</p>
<p>Notez que ces slides peuvent se faire non seulement d’une position à celle qui la précède ou la suit directement mais également à toute position plus haut ou plus bas sur le manche. Ceci dit, travaillez au début entre des positions voisines, voici un exercice typique de montée/descente sur l’exemple de la pentatonique mineure de La :</p>
<p>PentaMinLaPosEnPos</p>
<p>Comme vous pouvez le voir sur la portée, passer de position en position permet de couvrir une vaste gamme fréquentielle.</p>
<p><strong>3 - </strong><strong>Improviser</strong></p>
<p>Vous y êtes : votre mémoire musculaire a intégré les doigtés des différentes positions de la gamme et vous êtes désormais capables de passer de l’une à une autre de manière fluide.</p>
<p>Il ne vous reste plus qu’à lancer un backing track et <strong>improviser</strong> sur la gamme correspondante. Le sens musical qui vous permettra de savoir quelle note jouer à quelle moment viendra avec l’<strong>expérience</strong> (et un peu de théorie musicale de temps en temps).</p>
<p><strong>Annexe(s)</strong></p>
<p><strong>TravaillerGammes </strong>gp</p>
<p><strong>TravaillerGammes </strong>pdf</p>`,
          order: 9,
        },
      ],
    },
    {
      title: "Improvisation",
      description: "Phras\u00e9, utilisation des gammes et accompagnement.",
      part: "Guitare",
      order: 6,
      sections: [
        {
          title: "Notion de phrase",
          content: `<p>“Un bon solo est comme un livre. Il débutera par une phrase, il fera ensuite des paragraphes, et alors il aura une grande fin”</p>
<p>Steve Vai.</p>
<p>Un solo se compose en effet de phrasés qui s’assimilent aux phrases en littérature. Il s’agit de combinaisons de certaines notes jouée sur un certain rythme à l’aide de certains effets. Il est en particulier important de faire attention aux notes qui les achèvent. En effet, pour reprendre l’analogie avec la littérature, une tonique fait office de point tandis qu’une tierce est comme un point d’interrogation. Et qui dit points et points d’interrogations dits questions/réponses, ce sur quoi vont se baser les solos !</p>
<p>En jouant sur cette notion, appelons <strong>A</strong> un phrasé ponctué d’une tierce, qui fait donc office de question, et <strong>B </strong>un phrasé “réponse” conclu par une tonique.</p>
<p>Quand vous posez une question, il vous arrive de la formuler de différentes manières pour être sûr que l’auditeur en comprenne le sens. De même, vous pouvez décliner votre phrasé <strong>A</strong> en par exemple 3 phrasés semblables - mais différents - <strong>A1 A2 A3</strong>. Vous pouvez par exemple changer légèrement le chemin pris par vos doigts pour arriver de la note de départ à celle d’arrivée tout en prenant garde à ce que la similarité reste apparente.</p>
<p>Vous avez déjà une première partie de solo avec l’enchaînement des parties<strong> A1 A2 A3 B</strong>.</p>
<p>Vous pouvez aussi  jouer sur l’accentuation des phrasés. Exemple : lorsque vous parlez à votre grand-mère sourde, vous devez répéter les questions 3 fois d’affilée et finissez par vous énerver et lui crier la question. Enchaînez alors dans votre solo 3 fois le même phrasé mais en le jouant de plus en plus fort pour faire passer ce sentiment d’”énervement” apparent.</p>
<p>Une fois ceci fait, vous pouvez répéter l’opération à différents endroits du manches, notamment sur d’autres positions de la gamme jouée pour établir tout un dialogue. Au début du solo, faites des phrasés simples; au fur et à mesure que celui-ci se construit, vous allez développer vos phrasés en termes techniques et mélodiques : jouez plus de notes, réalisez plus d’effets, et voilà que votre dialogue se construit d’une manière si étoffée que ses répliques sont devenues des paragraphes, comme Steve Vai l’avait prédit.</p>`,
          order: 1,
        },
        {
          title: "Utilisation des gammes",
          content: `<p>La grande majorité des solos se construisent sur les différentes positions d’une même gamme. La gamme de référence est la pentatonique mineure, de laquelle découle la pentatonique majeure en décalant les positions et qui donne naissance aux modes. Lors de la construction d’un solo, il est nécessaire de tourner autour de la tonique du morceau, qui si n’est pas forcément la même que celle de la gamme même si elle se trouvera toujours dessus (cf Relatives Maj/min).</p>
<p>Pour construire un solo, il est donc important que vous connaissiez <strong>a minima</strong> les premières positions de la gamme pentatonique mineure et que vous sachiez vous déplacer avec aisances sur ces dernières.</p>`,
          order: 2,
        },
        {
          title: "Articulation des phrases",
          content: `<p>Comme évoqué précédemment, un phrasé musical s’apparente à une phrase textuelle. On peut se référer à cette analogie pour établir les règles de construction d’un solo :</p>
<p>- Un mot est rarement redondant à travers des phrases successives; de même, variez vos notes et effets de jeu pour donner naissances à différents plans. Ceux-ci peuvent être similaires et exprimer la même idée, passer le même sentiment, mais sans être identiques;</p>
<p>- Exception à la règle précédente : la répétition peut être une figure de style en littérature. De même on peut s’en servir pour créer un suspense avant le passage d’une phase du solo à la suivante par exemple, comme l’auteur qui doit nous entraîner au paragraphe suivant à chaque fois qu’on en finit un et qui pour ça fait monter l’intensité à la fin de celui-ci;</p>
<p>- Une suite de phrasés, comme de phrases, doit avoir un sens : ce sont les mêmes émotions qui doivent se dégager d’un phrasé à l’autre, ce qui implique une cohérence dans le style d’écriture du solo;</p>
<p>- Cela peut sembler évident mais en écriture littéraire comme musicale, un même livre recours à un même genre : on n’y enchaîne pas deux phrases issues de deux registres différents (exemple : écrire à la suite des phrasés typés blues et d’autres jazz).</p>
<p>A partir de là, laissez libre cours à vos doigts.</p>`,
          order: 3,
        },
        {
          title: "Accompagner son solo",
          content: `<p>Un bon solo se superpose à un bon backing track, et d’une manière générale à un bon accompagnement. Pour cela, vous pouvez utiliser une pédale de loop vous permettant de construire plusieurs étages d’une boucle avant d’improviser par-dessus.</p>
<p>Ce matériel très abordable (premières pédales dans les 70€ même s’il est toujours bon de mettre plus pour avoir un équipement de meilleure qualité) permet d’enregistrer votre jeu puis de le faire répéter en boucle à un ampli. Vous pouvez construire plusieurs étages d’une boucle pour rapidement arriver à une structure complète avec pour seules ressources votre guitare, un ampli et cette pédale.</p>
<p>L’idée d’un solo étant de laisser une majorité de la place à votre improvisation, vous pouvez construire de légères percussions et gratter doucement les accords de votre grille pour soutenir la structure. S’il est nécessaire d’occuper un peu plus d’espace harmonique, n’hésitez pas à rajouter une boucle supplémentaire pour réaliser des “cocottes”, phrases musicales courtes et simples pour meubler. Avec cette technologie et cette méthode, vous n’avez pas besoin d’autres musiciens ni même d’autres instruments pour vous accompagner.</p>`,
          order: 4,
        },
      ],
    },
    {
      title: "Blues",
      description: "Structure, gamme blues, sonorit\u00e9 et variations.",
      part: "Guitare",
      order: 7,
      sections: [
        {
          title: "D\u00e9finition et structure du Blues",
          content: `<p>Définition</p>
<p>Le <strong>Blues</strong> est un genre musical populaire du début des années 1870. Il a émergé au Sud des US ou il utilise la guitare, au piano, à l’harmonica, à la basse et aux percussions. On le rapproche parfois du Jazz ou de la Country, plus anciens, dont il serait dérivé.</p>
<p>Le mot “blues” se réfère à une sorte de sentiment du type “spleen”, id est la mélancolie. Il s’agit donc d’une musique émotionnelle, voire spirituelle.</p>
<p>Construction</p>
<p>Le Blues, c’est également une grille de 12 mesures : (ci-dessous en degrés)</p>
<p><strong>I</strong></p>
<p><strong>I</strong></p>
<p><strong>I</strong></p>
<p><strong>I</strong></p>
<p><strong>IV</strong></p>
<p><strong>IV</strong></p>
<p><strong>I</strong></p>
<p><strong>I</strong></p>
<p><strong>V</strong></p>
<p><strong>V</strong></p>
<p><strong>I</strong></p>
<p><strong>I</strong></p>
<p>Par exemple, un Blues en <strong>E</strong> :</p>
<p><strong>E7</strong></p>
<p><strong>E7</strong></p>
<p><strong>E7</strong></p>
<p><strong>E7</strong></p>
<p><strong>A7</strong></p>
<p><strong>A7</strong></p>
<p><strong>E7</strong></p>
<p><strong>E7</strong></p>
<p><strong>B7</strong></p>
<p><strong>B7</strong></p>
<p><strong>E7</strong></p>
<p><strong>E7</strong></p>
<p>Évidemment, ces grilles s’adaptent aux envies des compositeurs et cachent de nombreuses techniques de jeu propres au genre, ainsi qu’une multitude de façon d’être jouées.</p>
<p>Interprétation</p>
<p>Le Blues s’accompagne souvent d’un texte, qui suite la grille et que la grille suit. Tout ce qui se passe dans le chant se passe d’une manière analogue dans l’instrumentale qui l’accompagne.</p>
<p>4 premières mesures  <=> 1ère phrase : constat simple</p>
<p>4 mesures suivantes   <=> répétition de la 1ère phrase</p>
<p>4 dernières mesures   <=> résolution, explication</p>
<p>On a alors exécute ce qui s’appelle un “tour”.</p>
<p>Un Blues est une succession de tours.</p>`,
          order: 1,
        },
        {
          title: "La gamme Blues",
          content: `<p>Gamme penta + quarte augmentée (4#)</p>`,
          order: 2,
        },
        {
          title: "La Sonorit\u00e9 Blues",
          content: `<p>Qu’est-ce qui fait la sonorité du Blues ?</p>
<p>- Le Palm Mute</p>
<p>Cette technique de jeu consistant à muter les cordes à l’aide de sa paume (d’où le terme palm mute) en même temps qu’elles sont jouées créé un son plus sourd, riche en graves, et est très utilisé dans l’accompagnement Blues.</p>
<p>- La cadence Ternaire</p>
<p>Vous entendez souvent une cadence ternaire dans un Blues et quelques triolets parcimonieusement répartis dans un accompagnement ou un solo Blues.</p>
<p>- Les notes ‘hors’ gamme</p>
<p>On parle dans le Blues mais également dans le Jazz de “note Blues” lorsque l’on joue une note légèrement hors tonalité. Par exemple, un bend d’1/4 de ton ou l’utilisation de quintes diminuées peut suffire à donner un air Blues à un jeu standard, en lui apportant ces légères altérations artistiques.</p>`,
          order: 3,
        },
        {
          title: "Variation de la grille Blues",
          content: `<p>Une variation souvent rencontrée de la grille blues est la suivante :</p>
<p><strong>I</strong></p>
<p><strong>IV</strong></p>
<p><strong>I</strong></p>
<p><strong>I</strong></p>
<p><strong>IV</strong></p>
<p><strong>IV</strong></p>
<p><strong>I</strong></p>
<p><strong>I</strong></p>
<p><strong>V</strong></p>
<p><strong>IV</strong></p>
<p><strong>I</strong></p>
<p><strong>V</strong></p>
<p>Soit, en <strong>E</strong> :</p>
<p><strong>E7</strong></p>
<p><strong>A7</strong></p>
<p><strong>E7</strong></p>
<p><strong>E7</strong></p>
<p><strong>A7</strong></p>
<p><strong>A7</strong></p>
<p><strong>E7</strong></p>
<p><strong>E7</strong></p>
<p><strong>B7</strong></p>
<p><strong>A7</strong></p>
<p><strong>E7</strong></p>
<p><strong>B7</strong></p>
<p>Remarquez qu’on fait parfois des mix de cette grille avec celle “de base”.</p>`,
          order: 4,
        },
      ],
    },
    {
      title: "Jazz",
      description: "Accords jazz, enrichissements, substitutions et walking bass.",
      part: "Guitare",
      order: 8,
      sections: [
        {
          title: "Gamme majeure",
          content: `<p>Il sera important lorsque vous souhaiterez improviser de connaître votre gamme majeure (que vous connaissez également comme mode ionien) sur tout le manche, à savoir ses 7 positions (= à partir de chacune de ses 7 notes) à 3 notes par cordes. C’est comme cela qu’on apprend en général ses gammes. Elles sont à travailler dans un premier temps en montées/descentes, puis en gammes brisées, puis avec des ornements mélodiques, etc; vous connaissez la chanson.</p>
<p>En voilà donc la position fondamentale qui fait partie du bagage “de base” du jazzman :</p>
<p><strong>Position Fondamentale</strong> (1)</p>
<p>Et les positions suivantes :</p>
<p><strong>Position 2</strong></p>
<p><strong>Position 3</strong></p>
<p><strong>Position 4</strong></p>
<p><strong>Position 5</strong></p>
<p><strong>Position 6</strong></p>
<p><strong>Position 7</strong></p>`,
          order: 1,
        },
        {
          title: "Enrichissements autoris\u00e9s",
          content: `<p>Conformément à certaines bonnes pratiques que nous avons déjà pu évoquer, voici les enrichissements possibles selon le degré de l’accord que vous jouez. Bien sûr, vous pouvez faire des exceptions à certaines règles si votre oreille considère que celles-ci sont cohérentes avec votre registre de jeu. Vous pouvez également vous rapporter à la section Accords et Suites -> Les Accords -> Pour aller plus loin: enrichissements d’accords.</p>
<p>Si vous considérez le cas d’une <strong>tonalité temporaire</strong>, alors il vous faut transposer la règle sur les mesures concernées.</p>
<p>Rappel sur les règles :</p>
<p>On évite l’intervalle de 9ème mineure :</p>
<p>entre la Tonique et la Neuvième mineure</p>
<p>entre la Tierce et la Onzième</p>
<p>-> nécessité si l’accord est majeur de ne pas jouer de 11ème ou de l’augmenter (11#) si l’harmonisation de la gamme le permet</p>
<p>entre la Quinte et la Treizième</p>
<p>-> nécessité de supprimer la quinte si on joue une b13</p>
<p><strong>Sauf sur l’accord de 7ème !</strong></p>
<p>(on utilise ci-dessus les conventions d’écriture : la Tierce est considérée majeure et la Quinte juste, de même que la Onzième et la Treizième)</p>
<p>On éviter de faire apparaître le triton tonal :</p>
<p><strong>Sauf pour l’accord de dominante !</strong> (5ème degré)</p>
<p>Les notes ajoutées doivent appartenir à la gamme de référence (ici, gamme de <strong>Do Maj </strong>: Do Ré Mi Fa Sol La Si)</p>
<p><strong>Degré</strong></p>
<p><strong>9</strong></p>
<p><strong>11</strong></p>
<p><strong>13</strong></p>
<p><strong>I M7</strong></p>
<p><strong>11 : E/F</strong></p>
<p><strong>11# : </strong><strong>ht</strong></p>
<p><strong>II- 7</strong></p>
<p><strong>III- 7</strong></p>
<p><strong>b9 : E/F</strong></p>
<p><strong>9 : </strong><strong>ht</strong></p>
<p><strong>b13(no5)</strong></p>
<p><strong>IV M7</strong></p>
<p><strong>11#</strong></p>
<p><strong> V 7</strong></p>
<p><strong>11 : B/C</strong></p>
<p><strong>11# : </strong><strong>ht</strong></p>
<p><strong>VI- 7</strong></p>
<p><strong>b13(no5)</strong></p>
<p><strong>VII- 7(b5)</strong></p>
<p><strong>b9 : B/C</strong></p>
<p><strong>9 : </strong><strong>ht</strong></p>
<p><strong>b13</strong></p>
<p>En Vert, les enrichissements acceptés;</p>
<p>En Orange, les enrichissements à éviter car faisant apparaître le triton tonal;</p>
<p>En Rouge, les enrichissements interdits car faisant apparaître un intervalle de 9ème mineure (les notes entre lesquelles se trouve cet intervalle sont indiqués) ou car n’appartenant pas à l’harmonisation de la gamme majeure (notation <strong>ht </strong>pour “hors tonalité).</p>
<p>Notez qu’on peut éventuellement prendre la liberté d’adopter des enrichissements n’appartenant pas à l’harmonisation de la gamme majeure, par exemple on pourrait choisir de jouer une 9ème majeure sur le IIIème degré si cela est pertinent, même si ce n’est pas la neuvième diatonique (qui serait le <strong>Fa</strong>).</p>`,
          order: 2,
        },
        {
          title: "Point sur les enrichissements",
          content: `<p><strong>Qu’est-ce qu’enrichir un accord ?</strong></p>
<p>Un enrichissement d’accord consiste à lui ajouter une note de manière à créer un intervalle intéressant entre celle-ci et la tonique. À la guitare, cela devra parfois se faire au détriment d’autres notes car les nombres de cordes et de doigts sur le manche sont tous deux limités. Vous chercherez à ajouter à un accord les intervalles de 9ème, 11ème et 13ème selon les cas.</p>
<p><strong>Quand enrichir des accords ?</strong></p>
<p>Typiquement ? Lorsque vous jouez des grilles Jazz. En général, ces dernières comporteront au mieux les 7èmes indiquées sur les accords, mais rarement plus, excepté pour certaines beat bands dont les partitions sont très rigoureuses pour telle ou telle raison.</p>
<p><strong>Pourquoi enrichir des accords ?</strong></p>
<p>Pour en changer la sonorité sans en altérer la fonction, qui dépend du degré auquel correspond l’accord. Dans les exemples, on se placera toujours en tonalité de C Maj.</p>
<p><strong>Point sur les intervalles “de base”</strong></p>
<p>Lors de l’enrichissement d’un accord, sa tonique est un repère. Celle-ci est jouée par une basse ou par soi-même sur les cordes graves de la guitare.</p>
<p>On évitera également de supprimer la tierce : celle-ci donnant le caractère majeur/mineur de l’accord, l’enlever rend l’accord plus neutre, plus “flou”. Si vous souhaitez le faire, n’en abusez toutefois pas.</p>
<p>La quinte passe souvent à la trappe. Cela à pour effet de rendre l’accord plus léger.</p>
<p><strong>Point sur les intervalles à éviter</strong></p>
<p>On évite d’une manière générale, excepté sur l’accord de 7ème, un intervalle de 9ème mineure dans un accord, car celui-ci est dissonant. Par exemple, entre une tierce Majeure et une onzième : jouez un CM7 Add11 si vous n’en êtes pas convaincu. Vous entendez ce désagréable frottement ?</p>
<p>Autrement, on retrouve entre la tierce Majeure et la septième mineure de l’accord de Ier degré le triton tonal. Celui-ci étant caractéristique de l’accord de dominante, il ne doit pas se retrouver dans d’autres accords. En effet, l’oreille s’en servant pour reconnaître la tonalité, elle serait troublée de le retrouver au sein de deux degrés distincts.</p>`,
          order: 3,
        },
        {
          title: "Accords avec des cordes \u00e0 vide",
          content: `<p>Les accords se servant de cordes à vide permettent un enrichissement “naturel” et tout à fait propre à la guitare. Ils donnent une sonorité Jazz/Pop au jeu. Comme les accords ouverts, qui eux aussi utilisent des cordes à vide, leurs positions ne sont pas transposables ni renversables.</p>`,
          order: 4,
        },
        {
          title: "Redoublements",
          content: `<p>Pour enrichir des accords et les faire sonner Jazz ou Pop, il va falloir être au point sur les <strong>Redoublements</strong> : il s’agit des intervalles “de base” passés à l’octave comme on peut le voir dans le tableau ci-dessous.</p>
<p><strong> </strong></p>
<p><strong>Intervalles</strong></p>
<p><strong> Redoublements</strong></p>
<p><strong>Écart à la Tonique (/tons)</strong></p>
<p><strong>Nom</strong></p>
<p><strong>Notation</strong></p>
<p><strong>Nom</strong></p>
<p><strong>Notation</strong></p>
<p><strong>0</strong></p>
<p>Unisson/Tonique</p>
<p><strong>T</strong></p>
<p>Octave/Tonique</p>
<p><strong>T</strong></p>
<p><strong>1/2</strong></p>
<p>Seconde mineure</p>
<p><strong>m2</strong></p>
<p>Neuvième bémol</p>
<p><strong>b9</strong></p>
<p><strong>1</strong></p>
<p>Seconde Majeure</p>
<p><strong>2</strong></p>
<p>Neuvième Majeure</p>
<p><strong>9</strong></p>
<p><strong>1</strong><strong>1/2</strong></p>
<p>Tierce mineure</p>
<p><strong>m3</strong></p>
<p>Dixième bémol</p>
<p><strong>b10</strong></p>
<p><strong>2</strong></p>
<p>Tierce Majeure</p>
<p><strong>3</strong></p>
<p>Dixième</p>
<p><strong>10</strong></p>
<p><strong>2</strong><strong>1/2</strong></p>
<p>Quarte juste</p>
<p><strong>4</strong></p>
<p>Onzième juste</p>
<p><strong>11</strong></p>
<p><strong>3</strong></p>
<p>Quinte diminuée</p>
<p><strong>b5</strong></p>
<p>Onzième augmentée</p>
<p><strong>11#</strong></p>
<p><strong>3</strong><strong>1/2</strong></p>
<p>Quinte juste</p>
<p><strong>5</strong></p>
<p>Douzième</p>
<p><strong>12</strong></p>
<p><strong>4</strong></p>
<p>Quinte augmentée</p>
<p><strong>5#</strong></p>
<p>Treizième bémol</p>
<p><strong>b13</strong></p>
<p><strong>4</strong><strong>1/2</strong></p>
<p>Sixte</p>
<p><strong>6</strong></p>
<p>Treizième Majeure</p>
<p><strong>13</strong></p>
<p><strong>5</strong></p>
<p>Septième mineure</p>
<p><strong>7</strong></p>
<p>Quatorzième bémol</p>
<p>b14</p>
<p><strong>5</strong><strong>1/2</strong></p>
<p>Septième Majeure</p>
<p><strong>M7</strong></p>
<p>Quatorzième</p>
<p>14</p>
<p>Les notations sont assez souples et pas toujours parfaitement claires entre les diminuée, mineure, juste, majeur, augmentée, les b,m,-,#, les notations éludées qui demandent à s’appuyer sur les conventions, les écritures différant de chacun à chacun, etc, mais je ferai en sorte de lever l’ambiguïté lorsqu’il y en aura.</p>
<p>Par convention : (donc sauf contre-indication)</p>
<p>une Seconde est Majeure;</p>
<p>une Tierce est Majeure;</p>
<p>une Quinte est juste;</p>
<p>une Septième est mineure.</p>
<p>À l’octave :</p>
<p>une Neuvième est Majeure;</p>
<p>une Onzième est juste;</p>
<p>une Treizième est Majeure.</p>
<p>Après l’octave, on parle de redoublements : l’écart avec la tonique est donc à augmenter de 6 tons par rapport aux intervalles non redoublés. Ils sont utiles lors de la nomenclature d’accords enrichis, en particulier si vous faites du Jazz ou de la Pop.</p>
<p>Correspondances utiles :</p>
<p>Tonique - Octave</p>
<p>Seconde - Neuvième</p>
<p>Quarte - Onzième</p>
<p>Sixte - Treizième</p>`,
          order: 5,
        },
        {
          title: "Substitutions d'accords",
          content: `<p>Contenu à venir.</p>`,
          order: 6,
        },
        {
          title: "Les guides tones pour Accompagner un Piano",
          content: `<p>Si vous jouez avec un pianiste, il vous sera nécessaire de lui laisser de l’espace : c’est lui qui choisira et jouera les enrichissements des accords et vous devrez vous faire discret. Pour cela, il est conseillé de jouer doucement, de baisser le volume de votre guitare, et d’utiliser les guide tones.</p>
<p>Les <strong>Guides Tones</strong> consistent à jouer uniquement la tierce et la septième(ou la sixte) de l’accord. Ces positions allégées permettent d’éviter tout conflit piano/guitare. On privilégie alors l’usage des cordes de <strong>D </strong>et <strong>G</strong>.</p>
<p>Voici quelques empreintes qui peuvent être tirées d’accords typiquement Jazz :</p>
<p>Conservez uniquement les 2 notes qui n’ont pas été mises en transparence pour composer des voicings discrets.</p>`,
          order: 7,
        },
        {
          title: "Les broderies",
          content: `<p>Une broderie est en Jazz un type d’ornementation mélodique, ce qui signifie vous l’aurez compris un embellissement de la ligne que vous jouez.</p>
<p><strong>Qu’est-ce qu’une broderie ? </strong></p>
<p>Un accord possède 3 notes dites réelles : sa tonique, sa tierce et sa quinte; les 9 autres notes chromatiques (ou 4 autres notes diatoniques) n’appartiennent pas à l’accord.</p>
<p>Toutefois, ces autres notes peuvent êtres utilisées pour enrichir la mélodie en se plaçant entre les notes réelles de chaque accord servant de fil rouge.</p>
<p>Ainsi, approcher la note réelle d’un accord par une note située en dessous sur le manche est une broderie inférieure; celles-ci sont le plus souvent chromatiques, c’est-à-dire que la note rajoutée (”brodée” à la mélodie) se situe 1/2 ton en dessous de la note réelle.</p>
<p>À l’inverse, une broderie supérieure est lorsque vous approcher une note réelle par la note se situant au dessus dans la gamme chromatique ou diatonique; notez toutefois que les broderies supérieures sont 95% du temps diatoniques.</p>
<p><strong>Exemple</strong></p>
<p>Prenons une tonalité de Do et son accord de Do, dont les notes réelles sont : <strong>C</strong>, <strong>E</strong>, <strong>G</strong> (tonique, tierce, quinte).</p>
<p>Dans un premier temps, je peux jouer simplement les notes de l’accord une à une, pour constituer un fil rouge mélodique, ce qui donne <strong>C - E - G</strong> tout simplement.</p>
<p>Je souhaite maintenant enrichir cette mélodie : je vais approcher chaque note par une broderie inférieure (chromatique par défaut), ce qui donne : <strong>C - </strong>D#<strong> E - </strong>F# <strong>G</strong>.</p>
<p>Je peux également rajouter une broderie supérieure (diatonique cette fois) tout en gardant la broderie inférieure, ce qui amène à  : <strong>C - </strong>F D#<strong> E - </strong>A F# <strong>G</strong>.</p>
<p>On “encadre” les notes réelles par des broderies supérieures puis inférieures. L’exemple développé est un parcours linéaire des notes d’un accord de Do brodées au supérieur et à l’inférieur et ne swing donc pas comme Miles Davies, mais je vous encourage à commencer par des cas de figure simples avant d’aller chercher des combinaisons plus farfelues sur votre manche.</p>
<p><strong>Et ensuite ?</strong></p>
<p>Après avoir disposé et arrangé vos broderies et ornements comme bon vous semble, votre mélodie manque toujours de rythme : il va vous falloir en rajouter !</p>`,
          order: 8,
        },
        {
          title: "La Walking Bass",
          content: `<p>Dans le Jazz, on ponctue souvent les contre-temps. Ce sont dessus que la guitare, le piano/clavier, peuvent jouer des accords. Il reste donc les temps pour insérer une ligne de basse : il s’agit de la <strong>Walking Bass</strong>.</p>
<p>Ce rôle est historiquement dévolu à la contrebasse dans les groupes de Jazz; celle-ci joue les fondamentales des accords sur le 1er temps et des notes de passage vers l’accord suivant sur les temps suivants : on joue ainsi sur tous les temps de l’accord une note différente.</p>
<p>Si on évoque ici la Walking Bass, c’est bien évidemment parce que la <strong>Walk </strong>peut se jouer à la guitare également. En effet, on se sert des cordes graves de celle-ci pour jouer une ligne mélodique cohérente, formée de notes issues de nos gammes. Veillez toujours à ce que 2 notes successives de la Walk soient toujours proches en hauteur et en largeur sur le manche; cela garantit qu’elles soient également proches en fréquences.</p>
<p>Exemple</p>
<p>Les fichiers ci-dessous vous présentent différentes façons de passer de <strong>A</strong> à <strong>D </strong>à l’aide d’une Walk sur les cordes de <strong>Mi</strong>,<strong> La </strong>et<strong> Ré</strong>.</p>
<p>Walking Bass - Exemple guitar pro</p>
<p>Walking Bass - Exemple pdf</p>
<p>Notez la multitude de combinaisons possibles !</p>
<p>Temps</p>
<p><strong>1</strong></p>
<p><strong>2</strong></p>
<p><strong>3</strong></p>
<p><strong>4</strong></p>
<p><strong>1</strong></p>
<p>Note</p>
<p><strong>A</strong></p>
<p><strong>B</strong></p>
<p><strong>C</strong></p>
<p><strong>C</strong>#</p>
<p><strong>D</strong></p>
<p>Note</p>
<p><strong>A</strong></p>
<p><strong>B</strong></p>
<p><strong>C</strong></p>
<p><strong>E</strong>b</p>
<p><strong>D</strong></p>
<p>Note</p>
<p><strong>A</strong></p>
<p><strong>C</strong></p>
<p><strong>E</strong></p>
<p><strong>E</strong>b</p>
<p><strong>D</strong></p>
<p>Note</p>
<p><strong>A</strong></p>
<p><strong>C</strong></p>
<p><strong>E</strong></p>
<p><strong>C</strong>#</p>
<p><strong>D</strong></p>
<p>Note</p>
<p><strong>A</strong></p>
<p><strong>G</strong></p>
<p><strong>F</strong>#</p>
<p><strong>E</strong></p>
<p><strong>D</strong></p>`,
          order: 9,
        },
      ],
    },
    {
      title: "Solf\u00e8ge",
      description: "Lire la musique : notes, rythmes, partition et nuances.",
      part: "Th\u00e9orie",
      order: 9,
      sections: [
        {
          title: "Introduction \u00e0 la musique",
          content: `<p><strong>Définitions</strong></p>
<p>La <strong>musique occidentale</strong> fait appel à 7 notes : <strong>Do Ré Mi Fa Sol La Si</strong>, selon cet enchaînement. Attention, il s’agit d’une boucle : l’ordre <strong>La Si Do Ré Mi</strong> <strong>Fa Sol</strong> par exemple est donc correct également. Ces notes se retrouvent sur les touches blanches du piano.</p>
<p>En altérant ces notes, on peut encore en trouver 5 autres : <strong>Do</strong><strong>♯</strong><strong>/Ré</strong><strong>♭</strong>, <strong>Ré</strong><strong>♯</strong><strong>/Mi</strong><strong>♭</strong>, <strong>Fa</strong><strong>♯</strong><strong>/Sol</strong><strong>♭</strong>, <strong>Sol</strong><strong>♯</strong><strong>/La</strong><strong>♭</strong>,<strong>La</strong><strong>♯</strong><strong>/Si</strong><strong>♭</strong>. Ces notes ci se retrouvent sur les touches noires du piano. Par exemple, Do♯/Ré♭ est la note noire se trouvant après la note blanche de Do et avant la note blanche de Ré.</p>
<p>On utilise donc au total <strong>12 notes</strong> dans la musique occidentale. Celles-ci se succèdent de la manière suivante :</p>
<p>Les 12 notes de la musique occidentale sur un clavier de piano.</p>
<p>Cette succession de 12 notes se répète le long du clavier, plus graves à gauche et plus aiguës à droite.</p>
<p>On appelle ce cycle la <strong>gamme chromatique </strong> : Do Do#/Réb Ré Ré#/Mib Mi Fa Fa#/Solb Sol Sol#/Lab La La#/Sib Si.</p>`,
          order: 1,
        },
        {
          title: "Hauteur des notes",
          content: `<p><strong>Notion de portée</strong></p>
<p>La <strong>portée</strong> est sur une partition l’ensemble des <strong>5 lignes</strong> horizontales et<strong> 4 interlignes</strong> les séparant sur lequel viennent se placer les notes de musique.</p>
<p>Un <strong>système</strong> est la juxtaposition verticale de plusieurs portées sur une partition.</p>
<p>Les 7 notes Do Ré Mi Fa Sol La Si s’y succèdent <strong>de bas en haut</strong> de manière cyclique.</p>
<p>Sur chaque ligne et sur chaque interligne se trouve une note.</p>
<p>Portée</p>
<p><strong>Notion de clef</strong></p>
<p>La <strong>clef</strong>, donné dans l’<strong>armure</strong> de l’oeuvre, permet d’obtenir une note de référence de laquelle on déduit la hauteur des autres notes.</p>
<p>Il existe 3 cefs principales : la<strong> clef de sol</strong>, la <strong>clef d’ut</strong> et la <strong>clef de fa</strong>. Notez qu’Ut est un autre nom pour la note de Do.</p>
<p>C’est la <strong>calligraphie</strong> de chaque clef sur la portée qui permet d’obtenir une note de référence, correspondant au nom de la clef.</p>
<p><strong>Clef de sol</strong></p>
<p>La plus courant des clefs, sa calligraphie indique la position du <strong>Sol 4</strong> (pointillés rouges) mais également du <strong>Do 4</strong> (pointillés grisés).</p>
<p>On l’utilise pour retranscrire les <strong>mélodies</strong> ainsi que les <strong>voix medium</strong> et <strong>aiguës</strong>. C’est donc la clef du violon, de la guitare, de la main droite du piano ou de la harpe, etc.</p>
<p>Le sol tracé est le <strong>Sol 4</strong></p>
<p>C<strong>lef de fa</strong></p>
<p>Seconde clef la plus utilisée et presque aussi courante que celle de sol, sa calligraphie indique la position du <strong>Fa 3</strong>.</p>
<p>Elle sert à écrire les parties des <strong>voix</strong> <strong>et</strong> <strong>instruments graves</strong> : violoncelle, basse, main gauche du piano ou de la harpe, vocales basses…</p>
<p>Le fa tracé est le <strong>Fa 3</strong>.</p>
<p><strong>Clef d’ut</strong> ou <strong>clef de do</strong></p>
<p>Moins courante, sa calligraphie indique la position du <strong>Do 4</strong>.</p>
<p>Le do tracé est le <strong>Do 4</strong></p>
<p><strong>Notion d’altération</strong></p>
<p>Nous avons vu comment écrire les 7 notes Do Ré Mi Fa Sol La Si sur une partition. Il s’agit des notes correspondant aux touches blanches du piano.</p>
<p>Comment y noter les autres notes, celles qu’on retrouve sur les touches noires du clavier ?</p>
<p>Une <strong>altération</strong> est une indication sur la hauteur d’une note. Il en existe 3 :</p>
<p>- Le <strong>dièse #</strong>, qui indique que la note à jouer est la note située directement après (1/2 ton* plus haut) la note indiquée dans la gamme chromatique ;</p>
<p>- Le <strong>bémol b</strong>, qui indique que la note à jouer est la note située directement avant (1/2 ton* plus bas) la note indiquée dans la gamme chromatique ;</p>
<p>- Le <strong>bécarre </strong><strong>♮</strong>, qui indique que la note à jouer est exactement celle indiquée sur la portée. On l’utilise pour “annuler” une autre altération (# ou b) précédemment placée sur la portée.</p>
<p><strong>Placement des altérations</strong></p>
<p>Le <strong>placement des altérations</strong> peut se faire à différents endroits sur la portée, sur une ligne ou interligne :</p>
<p>-<strong> Avant une note</strong>, auquel cas l’altération vaut jusqu’à la fin de la mesure. Si par exemple je joue La Sol La La et place un dièse devant le premier La de la mesure, les trois La seront joués en dièse, c’est-à-dire qu’on jouera des La# à la place des La. Si je veux jouer mon second La comme un La et non pas comme un La#, il me faudra placer un bécarre devant celui-ci.</p>
<p>C’est la dernière altération placée dans une mesure qui est prise en compte jusqu’en fin de mesure.</p>
<p>- <strong>Dans l’armure</strong>, en début de partition ou lors d’un changement d’armure. Par exemple, un dièse dans l’armure sur l’interligne correspondant à la note de Fa indique que tous les Fa suivant doivent être montés en Fa#.</p>
<p>Attention, même si l’altération ne se trouve dans l’armure que sur <strong>une</strong> ligne ou interligne, elle vaut également pour les autres lignes et interlignes ou se retrouve la même note.</p>
<p>Sur l’exemple ci-dessous, on constante un dièse dans l’armure, sur la ligne correspondant à Fa.</p>
<p>1ère mesure : on remarque que même si l’altération n’est présente que sur la ligne à hauteur du Fa5, les Fa4 aussi sont affectés par cette altération !</p>
<p>2nde mesure : si je souhaite jouer un Fa<strong>♮</strong> et non plus un Fa#, j’ai recours au bécarre. Si dans la même mesure je souhaite à nouveau jouer un Fa#, je dois ré-indiquer le dièse sur la ligne correspondante (autrement les Fa resteront des Fa<strong>♮</strong>), et celui-là vaudra jusqu’en fin de mesure.</p>
<p><strong>Remarque(s)</strong></p>
<p>- Dans une clef donné, si le nombre de lignes et d’interlignes ne permet pas d’atteindre une note car celle-ci est trop basse ou trop haute par rapport à la nombre de référence, on trace des traits supplémentaires pour la situer :</p>
<p>- Vous pouvez visualiser sur un clavier de piano la position des notes de référence de chaque clef :</p>
<p><strong>Conclusion et ouverture</strong></p>
<p>Vous êtes maintenant capables de lire et d’écrire chacune des 12 notes de la gamme chromatique sur une partition selon les <strong>clefs</strong> utilisées et à l’aide des <strong>altérations</strong>.</p>
<p>Dans la prochaine partie, nous verrons comment indiquer sur une partition la <strong>durée</strong> sur laquelle doit être jouée une note qu’on a écrite.</p>
<p>*La notion de <strong>ton</strong> pour évaluer la hauteur des notes sera abordée plus tard.</p>`,
          order: 2,
        },
        {
          title: "Valeur des notes",
          content: `<p><strong>Notion de valeur</strong></p>
<p>La <strong>valeur</strong> d’une note est la durée sur laquelle celle-ci est jouée. On la mesure en l’unité relative de <strong>temps</strong>, la valeur absolue du temps étant fixée par le <strong>tempo</strong> (cf ci-après).</p>
<p>Il existe un symbole différent selon la durée sur laquelle est jouée une note. Ainsi, on retrouve :</p>
<p><strong>Durée</strong> (/temps)</p>
<p><strong>4</strong></p>
<p><strong>2</strong></p>
<p><strong>1</strong></p>
<p><strong>1/2</strong></p>
<p><strong>1/4</strong></p>
<p><strong>Note</strong></p>
<p>ronde</p>
<p>blanche</p>
<p>noire</p>
<p>croche</p>
<p>double croche</p>
<p><strong>Silence</strong></p>
<p>pause</p>
<p>demi-pause</p>
<p>soupir</p>
<p>demi-soupir</p>
<p>quart de soupir</p>
<p><strong>Notion de note pointée</strong></p>
<p>Un <strong>point</strong> situé à droite d’une note ou d’un silence signifie que sa durée est multipliée par 1.5. Ainsi, puisqu’une noire vaut 1 temps, une noire pointée vaut 1.5 temps. De même, un soupir vaut 1 temps et 1.5 s’il est pointée. Une blanche valant 2 temps en vaudra 3 si elle est pointée. Etc.</p>
<p><strong>Notion de liaison</strong></p>
<p>Une <strong>liaison de tenue</strong>, aussi appelée liaison de prolongation ou juste liaison, est une courbe reliant 2 notes de même hauteur sur la partition. Celle-ci signifie que seule la première note indiquée est jouée, mais est tenue sur la durée des 2 notes.</p>
<p><strong>Exemple</strong> :</p>
<p>Mesure 1</p>
<p>On joue un La sur le 1er temps. Comme il lié à un second La au deuxième temps, on va le tenir pendant 2 temps, la durée des 2 noires indiquées. Tout se passe donc comme si on jouait un La en blanche : La est joué sur le 1er temps et résonne jusqu’à la fin du 2ème temps.</p>
<p>Mesure 2</p>
<p>Cette seconde partie de l’exemple sert à mettre en exergue l’utilité de la liaison de tenue.</p>
<p>Ici, on souhaite jouer un La sur les temps 1 et 2 de la mesure et un Si sur le temps 2 uniquement. Sans liaison de tenue, on serait obligé de noter le La en blanche et on ne pourrait alors pas placer le Si sur le temps 2 mais seulement sur le temps 1 (en même temps que la blanche) où à partir du temps 3 (après la blanche).  La liaison permet donc ici de jouer une nouvelle note en informant le lecteur que la précédente doit continuer de résonner alors même qu’on joue une seconde note.</p>
<p><strong>Notion de tempo</strong></p>
<p>Le <strong>tempo</strong> est une information sur la valeur de l’unité de <strong>temps</strong>.</p>
<p>Il s’écrit en tête de partition, et se lit en <strong>bpm</strong> ou beat per minute, c’est-à-dire pulsation par minute.</p>
<p>Par exemple, l’information <strong>♩</strong> = 120 en tête de partition signifie qu’il y a dans une minute 120 pulsations correspondant à la valeur de la noire, c’est-à-dire qu’il y a 120 temps par minute ! Un temps vaut donc 1/120e de minute, soit 1/2 seconde.</p>
<p>Autre exemple : la notation<strong> ♪ </strong>= 80 signifie qu’il y a 80 croches par minute, soit 80 demi-temps par minute. Il y a donc 40 temps par minute ! Un temps vaut donc 1/40e de minute, soit 1.5s.</p>
<p>Notation correspondant à un tempo de 120 bpm la noire</p>
<p>Signature rythmique de 4-4 (cf ci-après)</p>
<p>Si le tempo change au cours de l’oeuvre, sa nouvelle valeur se retrouvera à la mesure à partir de laquelle prend effet le changement.</p>
<p><strong>Notion de signature rythmique</strong></p>
<p>La <strong>signature rythmique</strong> est l’information sur la durée de la mesure qu’on trouve en armure. Il s’agit d’un ensemble de <strong>2 chiffre</strong>s :</p>
<p>- le <strong>chiffre haut</strong> indique combien de temps comporte la mesure ;</p>
<p>- le <strong>chiffre bas</strong> indique quelle note vaut un temps.</p>
<p><strong>Correspondances</strong> pour le chiffre du bas :</p>
<p>- <strong>1 : ronde</strong> (référence);</p>
<p>- <strong>2 : blanche</strong>. 1 blanche = 1/<strong>2</strong> ronde, c’est pourquoi on note 2 pour la blanche ;</p>
<p>- <strong>4 : noire</strong>. 1 noire = 1/<strong>4</strong> ronde, c’est pourquoi on note 4 pour la noire ;</p>
<p>- <strong>8 : croche</strong>. 1 croche = 1/<strong>8</strong> ronde, c’est pourquoi on note 8 pour la croche ;</p>
<p>- etc.</p>
<p><strong>Exemples</strong> :</p>
<p>- La signature rythmique <strong>4-4</strong> classique indique que la mesure comporte 4 temps et que la noire vaut 1 temps → <strong>1 mesure = 4 noires </strong>;</p>
<p>- La signature rythmique <strong>12-8</strong> indique que la mesure comporte 12 temps, le temps correspondant à une croche → <strong>1 mesure = 12 croches</strong>.</p>
<p><strong>Remarque(s)</strong></p>
<p>Selon leur valeur, les notes peuvent être liées par leurs <strong>hampes</strong>. En particulier, Il est d’usage de lier les notes de manière à former des temps. On lie ainsi fréquemment les croches par 2 et les double-croches par 4, mais cela n’affecte pas leur valeur individuelle ni la manière de les jouer.</p>
<p>2 croches liées suivies de</p>
<p>4 double-croches liées</p>
<p><strong>Conclusion et ouverture</strong></p>
<p>Nous avons achevé d’étudier comment quantifier les notes sur une partition : d’une part par leur <strong>hauteur</strong>, d’autre par par leur <strong>durée</strong>. Toutefois, ces seules informations ne permettent qu’un jeu mécanique, c’est pourquoi nous allons prochainement nous pencher sur les <strong>nuances</strong>, ou comment rajouter de la dynamique à une interprétation musicale.</p>`,
          order: 3,
        },
        {
          title: "Anatomie d'une partition",
          content: `<p><strong>Définitions</strong></p>
<p>Une <strong>partition</strong> est la transcription écrite d’une oeuvre musicale à l’aide de différents symboles indiquant entre autre la <strong>hauteur</strong>, <strong>valeur</strong> et <strong>intensité</strong> des notes à jouer, notions que nous allons évoquer dans les sections qui suivent.</p>
<p>Le <strong>solfège</strong> pourrait d’ailleurs être défini comme l’aptitude à lire une partition, qui est un ensemble de notations musicales.</p>
<p><strong>Anatomie</strong></p>
<p>Voici comment se structure une partition. Reportez vous à cette image lors de votre lecture des parties suivantes si vous rencontrez des difficultés à visualiser les notions évoquées.</p>`,
          order: 4,
        },
        {
          title: "Nuances et phras\u00e9",
          content: `<p><strong>Notion de nuance</strong></p>
<p>Une <strong>nuance </strong>est une variation de dynamique dans l’interprétation d’une oeuvre. Leurs symboles correspondent à des abréviations issues de l’italien.</p>
<p>Il existe 2 types de nuances : sur l’<strong>intensité générale</strong> et sur la <strong>variation d’intensité</strong>. Les premières indiquent un niveau d’intensité fixe mais précisé pour une ou un ensemble de notes, les secondes une variation d’intensité s’étalant sur un ensemble de notes.</p>
<p><strong>Nuances sur l’intensité générale :</strong></p>
<p><strong>Terme entier </strong>(italien)</p>
<p><strong>Symbole/abréviation</strong></p>
<p><strong>Intensité générale</strong></p>
<p>pianississimo</p>
<p><strong>ppp</strong></p>
<p>Très très faible</p>
<p>pianissimo</p>
<p><strong>pp</strong></p>
<p>Très faible</p>
<p>piano</p>
<p><strong>p</strong></p>
<p>Faible</p>
<p>mezzo piano</p>
<p><strong>mp</strong></p>
<p>Légèrement faible</p>
<p>mezzo forte</p>
<p><strong>mf</strong></p>
<p>Légèrement fort</p>
<p>forte</p>
<p><strong>f</strong></p>
<p>Fort</p>
<p>fortissimo</p>
<p><strong>ff</strong></p>
<p>Très fort</p>
<p>fortississimo</p>
<p><strong>fff</strong></p>
<p>Très très fort</p>
<p><strong>Nuances sur la variation d’intensité :</strong></p>
<p><strong>Terme entier </strong>(italien)</p>
<p><strong>Symbole/abréviation</strong></p>
<p><strong>Variation d’intensité</strong></p>
<p>crescendo</p>
<p>cresc.</p>
<p>Augmentation progressive de l’intensité sonore</p>
<p>decrescendo</p>
<p>descresc.</p>
<p>Diminution progressive de l’intensité sonore</p>
<p><strong>Notion de phrasé</strong></p>
<p>Le <strong>phrasé</strong> est la manière dont on exécute une phrase musicale. Il existe deux types de phrasé :</p>
<p>- Le <strong>legato </strong>est caractérisé par une liaison d’expression indiquant que les notes concernées doivent être liées les unes aux autres ;</p>
<p>- Le <strong>staccato</strong> est caractérisé par des points placés au-dessus/en dessous des notes concernées (en fonction de l’orientation de leur hampe). Il indique que les notes doivent être jouées de manière détachées.</p>
<p>LegatoStaccato</p>
<p>Même mélodie jouée d’abord en legato, puis en staccato</p>
<p><strong>Conclusion et ouverture</strong></p>
<p>Vous possédez maintenant les connaissances nécessaires pour lire ou écrire une partition de manière complète : hauteur, durée et intensité de chaque note, variations d’intensité au cours de l’oeuvre, phrasés, … Il vous est maintenant souhaitable d’interpréter vos premières oeuvres pour vous exercer, et d’acquérir des connaissances plus profondes en théorie musicale.</p>`,
          order: 5,
        },
      ],
    },
    {
      title: "Th\u00e9orie Musicale",
      description: "Intervalles, gammes, accords, tonalit\u00e9s et harmonie fonctionnelle.",
      part: "Th\u00e9orie",
      order: 10,
      sections: [
        {
          title: "Intervalles",
          content: `<p><strong>Définitions</strong></p>
<p>Une <strong>octave</strong> est un ensemble de 12 notes séparées d’1/2 ton les unes des autres. Ce terme peut également désigner le redoublement d’une note 12 demi-tons plus haut.</p>
<p>Un <strong>intervalle</strong> caractérise la distance entre deux notes. L’unité d’un intervalle est le demi-ton.</p>
<p>Il y a donc 12<strong> intervalles</strong> dans une <strong>octave</strong>.</p>
<p><strong>Notation(s) </strong></p>
<p>On nomme les intervalles selon le contexte, voici leurs appellations les plus courantes :</p>
<p><strong>Intervalle</strong> (/demi-tons)</p>
<p><strong>Nom</strong></p>
<p><strong>1</strong></p>
<p>Seconde mineure</p>
<p><strong>2</strong></p>
<p>Seconde Majeure</p>
<p><strong>3</strong></p>
<p>Tierce mineure</p>
<p><strong>4</strong></p>
<p>Tierce Majeure/ Quarte diminuée</p>
<p><strong>5</strong></p>
<p>Quarte Juste</p>
<p><strong>6</strong></p>
<p>Quarte Augmentée/Quinte diminuée</p>
<p><strong>7</strong></p>
<p>Quinte Juste</p>
<p><strong>8</strong></p>
<p>Quinte Augmentée/Sixte mineure</p>
<p><strong>9</strong></p>
<p>Sixte Majeure</p>
<p><strong>10</strong></p>
<p>Septième mineure</p>
<p><strong>11</strong></p>
<p>Septième Majeure</p>
<p><strong>12</strong></p>
<p>Octave</p>
<p>Un tableau plus complet serait le suivant :</p>
<p><strong>Nom</strong></p>
<p><strong>Nature</strong></p>
<p><strong>Intervalle </strong>(/demi-tons)</p>
<p><strong>Note correspondante </strong>par rapport à Do</p>
<p><strong>Prime</strong></p>
<p><strong>Juste</strong></p>
<p>0</p>
<p>Do</p>
<p><strong>Seconde</strong></p>
<p>Diminuée</p>
<p>Mineure</p>
<p><strong>Majeure</strong></p>
<p>Augmentée</p>
<p>0</p>
<p>1</p>
<p><strong>2</strong></p>
<p>3</p>
<p>Ré bb</p>
<p>Ré b</p>
<p><strong>Ré</strong></p>
<p>Ré #</p>
<p><strong>Tierce</strong></p>
<p>Diminuée</p>
<p>Mineure</p>
<p><strong>Majeure</strong></p>
<p>Augmentée</p>
<p>2</p>
<p>3</p>
<p><strong>4</strong></p>
<p>5</p>
<p>Mi bb</p>
<p>Mi b</p>
<p><strong>Mi</strong></p>
<p>Mi #</p>
<p><strong>Quarte</strong></p>
<p>Diminuée</p>
<p><strong>Juste</strong></p>
<p>Augmentée</p>
<p>4</p>
<p><strong>5</strong></p>
<p>6</p>
<p>Fa b</p>
<p><strong>Fa</strong></p>
<p>Fa #</p>
<p><strong>Quinte</strong></p>
<p>Diminuée</p>
<p><strong>Juste</strong></p>
<p>Augmentée</p>
<p>6</p>
<p><strong>7</strong></p>
<p>8</p>
<p>Sol b</p>
<p><strong>Sol</strong></p>
<p>Sol #</p>
<p><strong>Sixte</strong></p>
<p>Diminuée</p>
<p>Mineure</p>
<p><strong>Majeure</strong></p>
<p>Augmentée</p>
<p>7</p>
<p>8</p>
<p><strong>9</strong></p>
<p>10</p>
<p>La bb</p>
<p>La b</p>
<p><strong>La</strong></p>
<p>La #</p>
<p><strong>Septième</strong></p>
<p>Diminuée</p>
<p><strong>Mineure</strong></p>
<p>Majeure</p>
<p>Augmentée</p>
<p>9</p>
<p><strong>10</strong></p>
<p>11</p>
<p>12</p>
<p>Si b</p>
<p><strong>Si</strong></p>
<p>Si #</p>
<p>Si ##</p>
<p><strong>Octave</strong></p>
<p>Diminuée</p>
<p><strong>Juste</strong></p>
<p>Augmentée</p>
<p>11</p>
<p><strong>12</strong></p>
<p>13</p>
<p>Do b</p>
<p><strong>Do</strong></p>
<p>Do #</p>
<p><strong>Avertissement(s)</strong></p>
<p>- Notez bien : bémol = -1/2 ton; dièse = +1/2 ton ;</p>
<p>- En gras, la nature par défaut de l’intervalle si on n’en précise que le nom ;</p>
<p>- On pourrait aller plus loin encore en introduisant les intervalles sous-diminué et suraugmenté (respectivement 1/2 ton plus bas que l’intervalle diminués et 1/2 ton plus haut que l’intervalle augmenté).</p>
<p><strong>Exemple(s)</strong></p>
<p>De Do à Mi, il y a <strong>4</strong><strong> 1/2 </strong>tons : il s’agit d’un intervalle de Tierce Majeure</p>
<p>De Fa# à Si, il y a <strong>5</strong><strong> 1/2 </strong>tons : il s’agit d’un intervalle de Quarte Juste</p>
<p>Etc.</p>
<p><strong>Remarque(s)</strong></p>
<p>Par défaut :</p>
<p>- Une seconde est Majeure ;</p>
<p>- Une tierce est Majeure ;</p>
<p>- Une quarte est Juste ;</p>
<p>- Une quinte est Juste ;</p>
<p>- Une sixte est Majeure ;</p>
<p>- Une septième est mineure.</p>
<p>Ainsi, évoquer une tierce sans en préciser la nature mineure ou Majeure sous-entend qu’elle est Majeure.</p>`,
          order: 1,
        },
        {
          title: "Gamme Majeure \u2014 Construction",
          content: `<p><strong>Définitions</strong></p>
<p>Une <strong>gamme</strong> est un groupe de 7 notes (Rq1) se répétant à chaque octave. Tout comme les accords, une gamme se construit sur une note <strong>Tonique</strong> à partir de laquelle on repère les autres notes à l’aide de la notion d’intervalles. Une gamme se définit par la position des 6 notes autres que la Tonique par rapport à celle-ci.</p>
<p>La gamme “de base” est la gamme Majeure. On peut construire une gamme Majeure sur chacune des <strong>12 notes </strong>(Rq2) connues de la musique Occidentale.</p>
<p><strong>Intervalles</strong></p>
<p>Vous connaissez depuis tout petit la <strong>gamme Majeure</strong> de <strong>Do </strong>(Rq3): Do Ré Mi Fa Sol La Si Do. Ses notes sont séparées les unes des autres par les intervalles suivants :</p>
<p>1 - 1 - <strong>1/2</strong> - 1 - 1 - 1 - <strong>1/2</strong></p>
<p>(en tons)</p>
<p>Il s’agit de la séquence de la gamme Majeure. Cette séquence est la même quelle que soit la note Tonique sur laquelle vous reconstruisez la gamme.</p>
<p><strong>Exemple(s)</strong></p>
<p>Construisons la gamme Majeure de <strong>La </strong>b :</p>
<p>Tonique : <strong>La </strong>b</p>
<p>+1 ton : <strong>Si </strong>b</p>
<p>+1 ton : <strong>Do</strong></p>
<p>+1/2 ton : <strong>Ré </strong>b</p>
<p>+1 ton : <strong>Mi </strong>b</p>
<p>+1 ton : <strong>Fa</strong></p>
<p>+1 ton : <strong>Sol</strong></p>
<p>+1/2 ton : <strong>La </strong>b</p>
<p><strong>Remarque(s)</strong></p>
<p>sauf exceptions, à savoir : gammes chromatique, pentatoniques, octotoniques, et cetera.</p>
<p>Do, Do#/Réb, Ré, Ré#/Mib, Mi, Fa, Fa#/Solb, Sol, Sol#/Lab, La, La#/Sib, Si, Do, qui constituent la <strong>gamme chromatique</strong>.</p>
<p>Parler de gamme de Do Majeur ou gamme Majeure de Do est équivalent, de même pour tous les types de gammes et modes et indépendamment de la Tonique (mode de La Lydien = mode Lydien en La, gamme mineure de Si = gamme de Si mineur, …)</p>`,
          order: 2,
        },
        {
          title: "Gamme Majeure \u2014 Harmonisation",
          content: `<p><strong>Définitions</strong></p>
<p>On appelle <strong>degrés</strong> les 7 accords de <strong>triades</strong> pouvant être construits sur chacune des 7 notes d’une gamme. Le premier degré se construit sur la première note de la gamme, le second degré sur la seconde, etc.</p>
<p>On note les degrés en chiffre romain : degré I, degré II, degré III, …</p>
<p><strong>Construction</strong></p>
<p>Pour construire chacun de ces accords, on suit les étapes suivantes :</p>
<p>- on prend comme Tonique une note de la gamme ;</p>
<p>- on saute une note dans la gamme et on ajoute la suivante à l’accord ;</p>
<p>- on saute encore une note dans la gamme et on ajoute la suivante à l’accord.</p>
<p>En fait, vous pouvez parcourir votre gamme à partir de la Tonique de l’accord et compter : 1 2 3 etc en même temps que vous énumérez les notes. Les notes correspondant aux numéros 1,3 et 5 sont la tonique, tierce et quinte de l’accord. Vous n’aurez pas besoin d’aller jusqu’à plus de 5 pour former des triades puisqu’on s’arrête à l’intervalle de quinte pour former l’accord.</p>
<p><strong>Application</strong></p>
<p>Prenons la gamme de <strong>Do Majeur</strong> : Do Ré Mi Fa Sol La Si Do.</p>
<p>1er degré : accord de Do</p>
<p>Ce premier degré se construit sur la première note de la gamme : <strong>Do </strong>! Il s’agit de la tonique et première note de l’accord. A partir de Do, on saute une note de la gamme - Ré - et on ajoute la suivante - <strong>Mi</strong> - à l’accord. A partir de Mi, on saute à nouveau une note de la gamme - Fa - pour ajouter la suivante à l’accord : <strong>Sol</strong> !</p>
<p>L’accord est donc constitué des notes de <strong>Do Mi Sol</strong>. Il s’agit d’un accord Majeur. Le <strong>1er degré </strong>de la tonalité de Do Majeur est donc l’accord de <strong>Do Majeur</strong>.</p>
<p>2ème degré : accord de Ré</p>
<p>Comptons : Ré (1) - Mi (2) - Fa (3) - Sol (4) - La (5) - Si (6) - Do (7)</p>
<p>L’accord de Ré est donc l’accord se composant des notes <strong>Ré Fa La</strong>, il est mineur. <strong>2ème degré</strong> de la gamme de Do Majeur : <strong>Ré mineur</strong></p>
<p>3ème degré : accord de Mi</p>
<p>Mi (1) - Fa (2) - Sol (3) - La (4) - Si (5) - …</p>
<p>L’accord de Mi est composé de <strong>Mi Sol Si</strong> : il s’agit d’un accord mineur. <strong>3ème degré</strong> : <strong>Mi mineur</strong>.</p>
<p>4ème degré : accord de Fa</p>
<p>Fa (1) - Sol (2) - La (3) - Si (4) - Do (5)</p>
<p>L’accord de Fa est composé de <strong>Fa La Do</strong> : il s’agit d’un accord Majeur. <strong>4ème degré</strong> : <strong>Fa Majeur</strong>.</p>
<p>5ème degré : accord de Sol</p>
<p>Sol (1) - La (2) - Si (3) - Do (4) - Ré (5)</p>
<p>L’accord de Sol est composé de <strong>Sol Si Ré</strong> : il s’agit d’un accord Majeur. <strong>5ème degré </strong>: <strong>Sol Majeur</strong>.</p>
<p>6ème degré : accord de La</p>
<p>La (1) - Si (2) - Do (3) - Ré (4) - Mi (5)</p>
<p>L’accord de La est composé de <strong>La Do Mi</strong> : il s’agit d’un accord mineur. <strong>6ème degré</strong> : <strong>La mineur</strong>.</p>
<p>7ème degré : accord de Si</p>
<p>Si (1) - Do (2) - Ré (3) - Mi (4) - Fa (5)</p>
<p>L’accord de Si est composé de <strong>Si Ré Fa</strong> : il s’agit d’un accord diminué. <strong>7ème degré </strong>: <strong>Si diminué</strong>.</p>
<p><strong>Bilan</strong></p>
<p>Ci-dessous, l’harmonisation de la gamme de<strong> Do Majeur </strong>en degrés.</p>
<p>Degré <strong>I</strong> : accord de <strong>Do</strong> <strong>Majeur</strong></p>
<p>Degré <strong>II</strong> : accord de <strong>Ré</strong> <strong>mineur</strong></p>
<p>Degré <strong>III</strong> : accord de <strong>Mi</strong> <strong>mineur</strong></p>
<p>Degré <strong>IV</strong> : accord de <strong>Fa</strong> <strong>Majeur</strong></p>
<p>Degré <strong>V</strong> : accord de <strong>Sol</strong> <strong>Majeur</strong></p>
<p>Degré <strong>VI</strong> : accord de <strong>La</strong> <strong>mineur</strong></p>
<p>Degré <strong>VII</strong> : accord de <strong>Si</strong> <strong>diminué</strong></p>
<p>Les natures de chaque degré établies pour la gamme de <strong>Do Majeur</strong> sont identiques pour toutes les <strong>gammes Majeures</strong>, indépendamment de leur tonique.</p>
<p><strong>Généralisation</strong></p>
<p>On utilise le chiffrage romain et la notion de degrés pour ne pas rester bloquer dans une tonalité lorsqu’on établit des règles en théorie musicale. En effet, une règle établie dans une tonalité donnée peut se transposer à toute autre tonalité de même nature indépendamment de sa tonique.</p>
<p>De l'harmonisation de la gamme de Do Majeur, on peut ainsi déduire pour l’ensemble des tonalités Majeures :</p>
<p><strong>1</strong>e degré : <strong>Majeur</strong></p>
<p><strong>2</strong>e degré : <strong>mineur</strong></p>
<p><strong>3</strong>e degré : <strong>mineur</strong></p>
<p><strong>4</strong>e degré : <strong>Majeur</strong></p>
<p><strong>5</strong>e degré : <strong>Majeur</strong></p>
<p><strong>6</strong>e degré : <strong>mineur</strong></p>
<p><strong>7</strong>e degré : <strong>diminué</strong></p>
<p><strong>Exemple(s)</strong></p>
<p>En tonalité de <strong>Mi Majeur</strong>, les différents degrés sont  :</p>
<p>Degré <strong>I</strong> : accord de <strong>Mi Majeur</strong></p>
<p>Degré <strong>II</strong> : accord de <strong>Fa#</strong> <strong>mineur</strong></p>
<p>Degré <strong>III</strong> : accord de <strong>Sol#</strong> <strong>mineur</strong></p>
<p>Degré <strong>IV</strong> : accord de <strong>La</strong> <strong>Majeur</strong></p>
<p>Degré <strong>V</strong> : accord de <strong>Si</strong> <strong>Majeur</strong></p>
<p>Degré <strong>VI</strong> : accord de <strong>Do#</strong> <strong>mineur</strong></p>
<p>Degré <strong>VII</strong> : accord de <strong>Ré# diminué</strong></p>
<p>Disons maintenant que je joue en tonalité de <strong>Do Majeur</strong> les accords suivants : <strong>Do Majeur</strong>, <strong>Fa Majeur</strong>, <strong>Sol Majeur</strong> et <strong>Do Majeur</strong>. Il s’agit des degrés <strong>1</strong>, <strong>4</strong>, <strong>5</strong> et <strong>1</strong> de la gamme de <strong>Do Majeur.</strong> On dit donc qu’on joue la <strong>séquence I VI V I</strong>. Je peux jouer cette même progression dans la tonalité de <strong>Mi Majeur</strong>. Pour cela, je dois jouer les accords <strong>Mi Majeur</strong>, <strong>Si Majeur</strong>, <strong>La Majeur</strong>, <strong>Mi Majeur</strong>. Les accords sont différents mais leur progression est la même !</p>`,
          order: 3,
        },
        {
          title: "Accord \u2014 Construction",
          content: `<p><strong>Définitions</strong></p>
<p>L’accord de base se constitue de 3 notes, on parle d’un<strong> </strong>accord de triade ou tout simplement d’une <strong>triade</strong>. Les notes qui le constituent sont :</p>
<p>- une note dite <strong>tonique</strong> sur laquelle on construit l’accord ;</p>
<p>- une première <strong>tierce</strong>, celle de la première note ;</p>
<p>- une seconde <strong>tierce</strong>, celle de la seconde note.</p>
<p>On dit qu’une triade est un empilement de 2 tierces.</p>
<p><strong>Combinaisons</strong></p>
<p>On peut ainsi créer différents types d’accord :</p>
<p>Accord</p>
<p>1ère tierce</p>
<p>2nde tierce</p>
<p>Majeur</p>
<p>Majeure</p>
<p>mineure</p>
<p>mineur</p>
<p>mineure</p>
<p>Majeure</p>
<p>diminué</p>
<p>mineure</p>
<p>mineure</p>
<p>Augmenté</p>
<p>Majeure</p>
<p>Majeure</p>
<p><strong>Convention</strong></p>
<p>On repère usuellement les notes d’un accord par leur intervalle à la Tonique. Ainsi, on peut également écrire qu’une triade est composée :</p>
<p>- d’une <strong>tonique</strong>;</p>
<p>- de la <strong>tierce</strong> de cette tonique;</p>
<p>- de la <strong>quinte</strong> de cette tonique (la tierce de la tierce).</p>
<p>On peut donc réécrire les différents types d’accords de la manière suivante :</p>
<p>Accord</p>
<p>tierce</p>
<p>quinte</p>
<p>Majeur</p>
<p>(Joie)</p>
<p>Majeure</p>
<p>(Joie)</p>
<p>Juste</p>
<p>(Solennité)</p>
<p>mineur</p>
<p>(mélancolie)</p>
<p>mineure</p>
<p>(mélancolie)</p>
<p>Juste</p>
<p>(Solennité)</p>
<p>diminué</p>
<p>(dramatisme)</p>
<p>mineure</p>
<p>(tristesse)</p>
<p>diminuée</p>
<p>(lugubrité)</p>
<p>Augmenté</p>
<p>(Mystère)</p>
<p>Majeure</p>
<p>(Joie)</p>
<p>Augmentée</p>
<p>(Énigmatisme)</p>
<p>On associe des émotions aux intervalles musicaux. En conséquence, on dit des accords qu'ils possèdent une "couleur", résultante de l'ensemble des émotions que les intervalles y apparaissant transmettent.</p>
<p>Voir les éléments entre parenthèses dans le tableau ci-dessus.</p>`,
          order: 4,
        },
        {
          title: "Accord \u2014 Renversement",
          content: `<p><strong>Définitions</strong></p>
<p>La <strong>basse </strong>d’un accord est la note la plus basse de l’accord jouée. Au piano, il s’agit de la note de l’accord située le plus à gauche sur le clavier.</p>
<p>La <strong>fondamentale</strong> d’un accord est la note sur laquelle il est construit. Vous la connaissez comme étant la Tonique.</p>
<p>Un <strong>accord</strong> à l’état <strong>fondamental</strong> est un accord dont la fondamentale est également la basse, c’est-à-dire qu’on joue l’accord en partant de sa Tonique pour y empiler les intervalles qui le composent.</p>
<p>Un <strong>renversement</strong> est le fait de construire un accord sur une basse qui n’est pas sa fondamentale.</p>
<p><strong>Notation(s)</strong></p>
<p>On note un accord renversé de la manière suivante : <strong>Accord\\Basse</strong>, la basse étant une note autre que la Tonique puisqu’on parle d’un renversement. Sur une triade par exemple, il peut s’agir de la tierce ou de la quinte.</p>
<p>Il existe autant de renversements d’un accord que de notes qu’il contient. On parle du 1er renversement si la basse est le 1er intervalle qui suit la Tonique dans l’accord, de 2nd renversement si la basse est le 2nd intervalle suivant la Tonique, etc. Pour une triade par exemple, on parlera de :</p>
<p>-<strong> 1er renversement</strong>, sur la <strong>tierce</strong>;</p>
<p>-<strong> 2nd renversement</strong>, sur la <strong>quinte</strong>.</p>
<p>Un accord comportant une septième pourrait encore avoir un <strong>3ème renversement</strong>, sur la <strong>septième</strong>.</p>
<p><strong>Exemple(s)</strong></p>
<p>Pour l’accord de Do Majeur :</p>
<p>- Etat <strong>fondamental</strong>, sur la <strong>tonique</strong> : <strong>Do</strong> Mi Sol ;</p>
<p>- <strong>1er</strong> renversement, sur la <strong>tierce</strong> : <strong>Mi</strong> Sol Do ;</p>
<p>- <strong>2nd</strong> renversement, sur la <strong>quinte</strong> : <strong>Sol</strong> Do Mi.</p>`,
          order: 5,
        },
        {
          title: "Tonalit\u00e9s \u2014 Construction",
          content: `<p><strong>Définitions</strong></p>
<p>Une <strong>tonalité</strong> est une gamme de 7 notes caractérisée par sa tonique et dont le mode est Majeur ou mineur. Il existe 12 toniques possibles à une gamme, ce qui fait donc 24 tonalités possibles. Toutefois, chaque <strong>tonalité Majeure</strong> est relative* à une <strong>tonalité mineure</strong>, ce qui fait qu’il n’y a en fait que 12 tonalités faisant appel à des ensembles de notes (/d’accords) différents.</p>
<p><strong>Tonalités</strong></p>
<p>Voici les 12 Tonalités Majeures, et leurs 12 relatives mineures :</p>
<p><strong>Degré </strong><strong>→</strong></p>
<p><strong>Tonalité </strong><strong>↓</strong></p>
<p><strong>I </strong>Maj</p>
<p><strong>II</strong> min</p>
<p><strong>III</strong> min</p>
<p><strong>IV</strong> Maj</p>
<p><strong>V </strong>Maj</p>
<p><strong>VI </strong>min</p>
<p><strong>VII</strong> dim</p>
<p><strong>C</strong></p>
<p><strong>C</strong></p>
<p>Dm</p>
<p>Em</p>
<p>F</p>
<p>G</p>
<p><strong>Am</strong></p>
<p>B°</p>
<p><strong>Am</strong></p>
<p><strong>Db</strong></p>
<p><strong>Db</strong></p>
<p>Ebm</p>
<p>F</p>
<p>Gb</p>
<p>Ab</p>
<p><strong>Bbm</strong></p>
<p>C°</p>
<p><strong>Bbm</strong></p>
<p><strong> D</strong></p>
<p><strong>D</strong></p>
<p>Em</p>
<p>F#m</p>
<p>G</p>
<p>A</p>
<p><strong>Bm</strong></p>
<p>C#°</p>
<p><strong>Bm</strong></p>
<p><strong>Eb</strong></p>
<p><strong>Eb</strong></p>
<p>Fm</p>
<p>Gm</p>
<p>Ab</p>
<p>Bb</p>
<p><strong>Cm</strong></p>
<p>Db</p>
<p><strong>Cm</strong></p>
<p><strong>E</strong></p>
<p><strong>E</strong></p>
<p>F#m</p>
<p>G#m</p>
<p>A</p>
<p>B</p>
<p><strong>C#m</strong></p>
<p>D°</p>
<p><strong>C#m</strong></p>
<p><strong> F</strong></p>
<p><strong>F</strong></p>
<p>Gm</p>
<p>Am</p>
<p>Bb</p>
<p>C</p>
<p><strong>Dm</strong></p>
<p>Eb°</p>
<p><strong>Dm</strong></p>
<p><strong> F#</strong></p>
<p><strong>F#</strong></p>
<p>G#m</p>
<p>A#m</p>
<p>B</p>
<p>C#</p>
<p><strong>D#</strong></p>
<p>E°</p>
<p><strong>D#m</strong></p>
<p><strong>G</strong></p>
<p><strong>G</strong></p>
<p>Am</p>
<p>Bm</p>
<p>C</p>
<p>D</p>
<p><strong>Em</strong></p>
<p>F°</p>
<p><strong>Em</strong></p>
<p><strong>Ab</strong></p>
<p><strong>Ab</strong></p>
<p>Bbm</p>
<p>Cm</p>
<p>Db</p>
<p>Eb</p>
<p><strong>Fm</strong></p>
<p>G°</p>
<p><strong>Fm</strong></p>
<p><strong>A</strong></p>
<p><strong>A</strong></p>
<p>Bm</p>
<p>C#m</p>
<p>D</p>
<p>E</p>
<p><strong>F#m</strong></p>
<p>G#°</p>
<p><strong>F#m</strong></p>
<p><strong>Bb</strong></p>
<p><strong>Bb</strong></p>
<p>Cm</p>
<p>Dm</p>
<p>Eb</p>
<p>F</p>
<p><strong>Gm</strong></p>
<p>A°</p>
<p><strong>Gm</strong></p>
<p><strong>B</strong></p>
<p><strong>B</strong></p>
<p>C#m</p>
<p>D#m</p>
<p>E</p>
<p>F#</p>
<p><strong>G#</strong></p>
<p>A#°</p>
<p><strong>G#m</strong></p>
<p><strong>III </strong>Maj</p>
<p><strong>IV </strong>min</p>
<p><strong>V</strong> min</p>
<p><strong>VI </strong>Maj</p>
<p><strong>VII</strong> Maj</p>
<p><strong>I </strong>min</p>
<p><strong>II</strong> dim</p>
<p><strong>↑</strong><strong> Tonalité</strong></p>
<p><strong>←</strong><strong> Degré</strong></p>
<p><strong>Construction</strong></p>
<p>De même que la tonalité de <strong>Do Majeur</strong>, harmonisée dans la section précédente, chaque tonalité Majeure se construit sur les degrés suivants :</p>
<p>Tonalité : <strong>I</strong>(/VIm)</p>
<p><strong>I</strong></p>
<p>line-through;</p>
<p><strong>II</strong>m</p>
<p>line-through;</p>
<p><strong>III</strong>m</p>
<p><strong>IV</strong></p>
<p>line-through;</p>
<p><strong>V</strong></p>
<p>line-through;</p>
<p><strong>VI</strong>m</p>
<p>line-through;</p>
<p><strong>VII</strong>°</p>
<p>(2 cases sont séparées d’1/2 ton)</p>
<p>Le dernier degré de chaque tonalité Majeur est particulier : il s’agit d’ un accord diminué (notation : X°), cela qui signifie que sa quinte est diminuée (b5) et non pas Juste. Ces accords sont très peu utilisés, sauf dans des registres Jazz ou Pop; nous aurons donc l’occasion d’en reparler plus tard.</p>
<p><strong>Remarque(s)</strong></p>
<p>(sur la notion de relative mineure/Majeure)</p>
<p>La relative mineure d’une <strong>tonalité Majeure</strong> est la <strong>tonalité mineure</strong> se construisant sur le <strong>VIe degré</strong> de la<strong> </strong>tonalité Majeure.</p>
<p>La relative Majeure d’une <strong>tonalité mineure</strong> est la <strong>tonalité Majeure</strong> dont le <strong>Ie degré</strong> est le <strong>IIIe degré</strong> de la<strong> </strong>tonalité mineure.</p>
<p>Ainsi, sur le <strong>VIe</strong> degré de chaque<strong> tonalité Majeure</strong> débute sa <strong>tonalité mineure</strong> relative. L’ordre des degrés et la nature de chacun sont conservés d’une tonalité à sa relative, mais leur compte est décalé selon si on la perçoit comme Majeure ou mineure.</p>
<p>Deux tonalités Majeure et mineure relatives l’une de l’autre sont donc fondées sur les mêmes accords. Leur différence réside dans le fait que ces accords n’ont pas la même fonction dans chacune des tonalités. En effet, les différents degrés d’une tonalité ont différentes fonctions, comme vous le verrez dans la section suivante.</p>
<p><strong>Exemple(s)</strong></p>
<p>La Tonalité de <strong>C</strong> est construite de la manière suivante :</p>
<p>- Degré <strong>I</strong> : <strong>C</strong></p>
<p>- Degré <strong>II</strong> :<strong> Dm</strong></p>
<p>- Degré <strong>III</strong> : <strong>Em</strong></p>
<p>- Degré <strong>IV</strong> : <strong>F</strong></p>
<p>- Degré <strong>V</strong> : <strong>G</strong></p>
<p>- Degré <strong>VI</strong> : <strong>Am</strong></p>
<p>- Degré <strong>VII</strong> : <strong>B°</strong></p>
<p>Le <strong>VI</strong>e degré de la tonalité de <strong>C</strong> est <strong>Am</strong>.</p>
<p>La tonalité de <strong>Am</strong> comporte donc les mêmes degrés que la tonalité de <strong>C</strong>, mais en partant de <strong>Am</strong>.</p>
<p>La Tonalité de <strong>Am </strong> est donc construite de la manière suivante :</p>
<p>- Degré <strong>I</strong> : <strong>Am</strong></p>
<p>- Degré <strong>II</strong> : <strong>B°</strong></p>
<p>- Degré <strong>III</strong> : <strong>C</strong></p>
<p>- Degré <strong>IV</strong> : <strong>Dm</strong></p>
<p>- Degré <strong>V</strong> : <strong>Em</strong></p>
<p>- Degré <strong>VI</strong> : <strong>F</strong></p>
<p>- Degré <strong>VII</strong> : <strong>G</strong></p>
<p>(la nature de chaque degré de la tonalité de <strong>Am</strong> peut être généralisée à toutes les tonalités mineures)</p>`,
          order: 6,
        },
        {
          title: "Tonalit\u00e9s \u2014 Identification",
          content: `<p><strong>Définitions</strong></p>
<p>Une <strong>altération</strong> est une indication sur la hauteur d’une note. Il en existe trois types : <strong>bémol</strong> (b),<strong>dièse</strong> (#),<strong>bécarre</strong> (♮).</p>
<p>La <strong>clef</strong> (ou <strong>clé</strong>) est le signe placé en début de portée indiquant la hauteur des notes sur l’ensemble des lignes.</p>
<p>L’<strong>armure </strong>d’un morceau ou d’une section est le nombre et la nature d’<strong>altérations </strong>réunies à la <strong>clé</strong>.</p>
<p><strong>Identification</strong></p>
<p>Par analyse de l’armure</p>
<p>On identifie les tonalités par leur armure sur une partition :</p>
<p><strong>Armure</strong></p>
<p><strong>Tonalité Majeure </strong></p>
<p><strong>Tonalité mineure </strong></p>
<p>bbbbbbb</p>
<p>Cb</p>
<p>Abm</p>
<p>bbbbbb</p>
<p>Gb</p>
<p>Ebm</p>
<p>bbbbb</p>
<p>Db</p>
<p>Bbm</p>
<p>bbbb</p>
<p>Ab</p>
<p>Fm</p>
<p>bbb</p>
<p>Eb</p>
<p>Cm</p>
<p>bb</p>
<p>Bb</p>
<p>Gm</p>
<p>b</p>
<p>F</p>
<p>Dm</p>
<p>C</p>
<p>Am</p>
<p>#</p>
<p>G</p>
<p>Em</p>
<p>##</p>
<p>D</p>
<p>Bm</p>
<p>###</p>
<p>A</p>
<p>F#m</p>
<p>####</p>
<p>E</p>
<p>C#m</p>
<p>#####</p>
<p>B</p>
<p>G#m</p>
<p>######</p>
<p>F#</p>
<p>D#m</p>
<p>#######</p>
<p>C#</p>
<p>A#m</p>
<p>Par analyse des degrés</p>
<p>Vous pouvez également identifier une tonalité en analysant ses degrés :</p>
<p><strong>Tonalité Majeure</strong></p>
<p><strong>I</strong></p>
<p>line-through;</p>
<p><strong>II</strong>m</p>
<p>line-through;</p>
<p><strong>III</strong>m</p>
<p><strong>IV</strong></p>
<p>line-through;</p>
<p><strong>V</strong></p>
<p>line-through;</p>
<p><strong>VI</strong>m</p>
<p>line-through;</p>
<p><strong>VII</strong>°</p>
<p><strong>Tonalité mineure</strong></p>
<p><strong>I</strong>m</p>
<p>line-through;</p>
<p><strong>II°</strong></p>
<p><strong>III</strong></p>
<p>line-through;</p>
<p><strong>IV</strong>m</p>
<p>line-through;</p>
<p><strong>V</strong>m</p>
<p><strong>VI</strong></p>
<p><strong>line-through;</strong></p>
<p><strong>VII</strong></p>
<p>line-through;</p>
<p>(deux cases consécutives sont séparées d’un demi-ton)</p>`,
          order: 7,
        },
        {
          title: "Interlude \u2014 Notations anglophones",
          content: `<p><strong>Notes</strong></p>
<p>Dans le monde <strong>anglophone</strong>, les notes ne sont pas désignées par des noms mais par des lettres majuscules, de <strong>A</strong> à <strong>G</strong>. Ainsi, les correspondances suivantes sont établies :</p>
<p><strong>A</strong> : La</p>
<p><strong>B</strong> : Si</p>
<p><strong>C</strong> : Do</p>
<p><strong>D</strong> : Ré</p>
<p><strong>E</strong> : Mi</p>
<p><strong>F</strong> : Fa</p>
<p><strong>G</strong> : Sol</p>
<p>Ensuite, on appose les mêmes signes pour désigner un accord dièse ou bémol. Par exemple : <strong>G</strong># correspond à <strong>Sol</strong>#.  On lit en anglais “sharp” pour “dièse” et “flat” pour “bémol”. Ainsi, “<strong>C</strong>-sharp” est la note de Do dièse.</p>
<p><strong>Accords</strong></p>
<p>On note un accord par la lettre correspondant à sa <strong>Tonique</strong> suivie d’une indication sur sa <strong>couleur</strong>. Par exemple : <strong>Cm</strong> est un accord de Do mineur. Attention, un accord est considéré comme Majeur <strong>par défaut</strong>, c’est à dire que si on n’en précise pas la nature alors il est Majeur. Ainsi :</p>
<p><strong>C° </strong>: Do diminué</p>
<p><strong>Cm </strong>: Do mineur</p>
<p><strong>C  </strong>: Do Majeur</p>
<p><strong>C+</strong> : Do Augmenté</p>
<p>Comme en notation française, on rajoute les éventuels mentions de dièses et bémols dans le nom de l’accord entre sa tonique et sa nature. Par exemple : <strong>C#m</strong> : Do# mineur.</p>`,
          order: 8,
        },
        {
          title: "Harmonie fonctionnelle",
          content: `<p><strong>Définitions</strong></p>
<p>L’<strong>Harmonie fonctionnelle</strong> consiste à étiqueter les degrés d’une tonalité selon leur rôle au sein de celle-ci. En fait, chaque accord d’une tonalité possède sa <strong>fonction</strong>.</p>
<p>Par le mot <strong>fonction</strong>, on entend le “sentiment” que transmet l’accord.</p>
<p><strong>Fonctions</strong></p>
<p>Il existe 3 fonctions possibles pour un accord :</p>
<p>- <strong>Tonique</strong> : degrés I, III, VI</p>
<p>- <strong>Sous-dominante</strong> : degrés II, IV</p>
<p>- <strong>Dominante</strong> : degrés V, VII</p>
<p>Deux accords de même fonction sont synonymes au sens où on peut les échanger tout en conservant la même progression émotionnelle dans la séquence.</p>
<p><strong>Progressions</strong></p>
<p>Une progression, c’est-à-dire une séquence de degrés, suit généralement le mouvement suivant :</p>
<p>Etat initial → Montée en tension → <strong>Tension</strong> → <strong>Résolution</strong></p>
<p>En pratique, cela correspond à une suite d’accords aux fonctions suivantes :</p>
<p>Tonique → Sous-dominante → Dominante → Tonique</p>
<p>La notion de <strong>tension-résolution </strong>est primordiale à maîtriser pour écrire des séquences qui évoluent comme on le souhaite. La difficulté est la même que dans un film à suspens : d’un état initial, introduire une tension et manager jusqu’à un point critique pour finalement la faire redescendre. Et du début à la fin du film comme d’un morceau, de nombreux mouvements de tensions-résolutions peuvent être agencés de différentes manières.</p>
<p><strong>Exemples</strong></p>
<p>En Do Majeur, on a :</p>
<p>- Accords toniques : <strong>C</strong>, <strong>Em</strong>, <strong>Am</strong></p>
<p>- Accords de sous-dominante :<strong> Dm</strong>, <strong>F</strong></p>
<p>- Accords de dominante : <strong>G</strong>, <strong>B°</strong></p>
<p>Étudions la progression d’accord suivante : <strong>C Dm G C</strong>.</p>
<p>- On part de <strong>C</strong>, accord <strong>Tonique </strong>: l’état harmonique est <strong>résolu</strong> ;</p>
<p>- On monte sur <strong>Dm</strong>, accord <strong>sous-dominant</strong> : une <strong>tension</strong> apparaît dans la progression ;</p>
<p>- Arrivés sur <strong>G</strong>, accord de <strong>dominante</strong>, la tension est <strong>maximale</strong> : l’état harmonique est instable et la progression demande à être résolue;</p>
<p>- Retour sur <strong>C</strong>, accord <strong>tonique</strong>, la tension est <strong>résolue</strong>. La progression peut s’arrêter là-dessus.</p>
<p>On parle de <strong>cadence I II V I</strong>, conformément aux degrés utilisés. Notez que la charge émotionnelle transmise est identique si je substitue par exemple le degré <strong>VI</strong> au degré <strong>I</strong>,<strong> </strong>ou tout degré à un autre degré de la même famille fonctionnelle.</p>
<p>Par exemple, la cadence <strong>I II V I </strong>est analogue en terme de progression à la cadence <strong>I II V VI</strong>, qui serait en Do Majeur : <strong>C Dm G Am</strong>.</p>`,
          order: 9,
        },
      ],
    },
    {
      title: "Composition",
      description: "\u00c9crire une chanson : rythmique, m\u00e9lodie, harmonie et orchestration.",
      part: "Home Studio",
      order: 11,
      sections: [
        {
          title: "Pr\u00e9ambule",
          content: `<p><strong>Définitions</strong></p>
<p>Le <strong>relief</strong> d’une musique émerge de la juxtaposition de 3 dimensions : la mélodique, l’harmonique et la rythmique. La mélodie s’inscrit dans une harmonie matérialisée par l’accompagnement, le tout reposant sur le groove des instruments rythmiques.</p>
<p>La <strong>forme</strong> d’une musique en désigne la structure. Il s’agit de la manière dont elle se divise en <strong>sections</strong>.</p>
<p><strong>Relief & Équilibre</strong></p>
<p><strong>Dimension</strong></p>
<p><strong>Fréquences</strong></p>
<p><strong>Analogie photographie</strong></p>
<p><strong>Analogie Littérature</strong></p>
<p>Mélodique</p>
<p>→ Mélodie</p>
<p>Aiguës</p>
<p>1er plan</p>
<p>Fil conducteur :</p>
<p>d’où à où</p>
<p>Harmonique</p>
<p>→ Accompagnement</p>
<p>Médiums</p>
<p>Plan intermédiaire</p>
<p>Contexte :</p>
<p>quoi, pourquoi…</p>
<p>Rythmique</p>
<p>→ Groove</p>
<p>Graves</p>
<p>Arrière plan</p>
<p>Cadre :</p>
<p>où, quand, …</p>
<p>Pour un <strong>relief</strong> suffisant, une musique doit faire preuve d’<strong>équilibre</strong> entre la mélodie, l’accompagnement et le groove. Les plages de fréquences graves, médiums et aiguës doivent chacune être représentées de manière équitable.</p>
<p>Une instrumentale balancée vers les basses est lourde et empêche de percevoir les nuances de l’accompagnement et de la mélodie;</p>
<p>Une instrumentale trop riche en médiums est plate : elle manque de la profondeur des basses et de l’agressivité des aiguës;</p>
<p>Une instrumentale balancée vers les aiguës est agressive donc fatiguante à l’oreille et manque de subtilité.</p>
<p><strong>Structure</strong></p>
<p>Selon son style musical, un morceau peut adopter différentes formes déjà établies :</p>
<p>Pop : Intro Couplet Refrain Couplet Refrain Pont Couplet Refrain Outro;</p>
<p>Rock : Intro Couplet Refrain Couplet Refrain Solo Refrain Outro;</p>
<p>Soundtrack : Intro Thème 1 Thème 2 Outro;</p>
<p>…</p>
<p>Chaque section possède une fonction narrative propre qu’il est important de respecter pour aboutir à une musique structurée, qui se tient et non pas qui s’éparpille. Voici pour les sections usuelles :</p>
<p><strong>Introduction</strong> : à dynamique faible, a pour rôle de captiver l’oreille de l’auditeur en quelques secondes en le faisant rentrer dans l’univers du morceau.</p>
<p><strong>Couplet</strong> : à dynamique faible/moyenne, il s’agit de narrer l’histoire à travers cette section.</p>
<p><strong>Pré-refrain :</strong> à dynamique moyenne, il réalise la transition du couplet au refrain et matérialise la montée en énergie de l’un à l’autre.</p>
<p><strong>Refrain : </strong>à dynamique moyenne/forte, il reprend le coeur du récit plusieurs fois dans la chanson pour rappeler le message de l’oeuvre.</p>
<p><strong>Pont :</strong> à dynamique faible, le pont se situe usuellement en fin de morceau. Il permet de créer une rupture qui captive à nouveau l’auditeur avant d’enchaîner à nouveau sur un couplet ou refrain.</p>
<p><strong>Solo :</strong> à dynamique usuellement forte, il met en avant un instrument en lui offrant l’espace nécessaire à sortir du mix.</p>
<p><strong>Outro :</strong> à dynamique faible, l’outro permet d’achever la chanson d’une manière non abrupte en y amenant la conclusion souhaitée. Il s’agit d’une phase descendante en terme de dynamique comme de volume.</p>
<p><strong>Méthodologie</strong></p>
<p>Je conseille de toujours commencer par composer le ou les éléments stars de votre morceau, qu’il s’agisse d’un unique instrument, d’une section ou de tout un plan musical : commencez par composer ce qui doit briller !</p>`,
          order: 1,
        },
        {
          title: "Rythmique",
          content: `<p><strong>Définitions</strong></p>
<p>La<strong> Rythmique</strong> matérialise le mouvement d’un morceau. Il s’agit des fondations de la structure musicale.</p>
<p>Le <strong>Groove</strong> qui transcende la rythmique d’un morceau caractérise l’intensité et la manière desquelles celui-ci nous fait “bouger la tête”.</p>
<p><strong>Principes</strong></p>
<p>Le groove se caractérise de la manière suivante :</p>
<p>Fréquences</p>
<p>Basses, pour donner de la profondeur</p>
<p>Instruments</p>
<p>Instruments <strong>percussifs</strong> : Batterie, tambours, …</p>
<p>Instruments <strong>monophoniques</strong> - ou à telle vocation - basse fréquence : basse, contrebasse, violoncelle, cor, etc jouant les lignes dites “de basse”</p>
<p>Forme</p>
<p>Le groove se constitue usuellement (mais pas toujours) :</p>
<p>D’une piste percussive → dynamique</p>
<p>D’une ligne de basse → mouvement</p>
<p>On retrouve parfois des percussions additionnelles et lignes de basse supplémentaires.</p>
<p><strong>Méthodologie</strong></p>
<p>Concernant la partie percussive, usuellement à la batterie :</p>
<p>Marquez les temps forts et temps faibles de la mesure en y plaçant respectivement la grosse caisse et la caisse claire ou les éléments percussifs qui les remplacent dans votre drumkit;</p>
<p>Ajoutez les cymbales;</p>
<p>Reprenez la boucle de batterie que vous venez de créer, et créez en des variants en ajoutant des coups ici et là pour éviter de tomber dans la monotonie;</p>
<p>Une fois le reste du morceau composé, mettez en forme les transitions, drops, et cetera.</p>
<p>Concernant la ligne de basse :</p>
<p>Définissez un mouvement d’arrière-plan, assez régulier si possible. Il s’agit d’un travail rythmique, sur la valeur des notes. Dans un premier temps, vous pouvez n’utiliser que les toniques des accords pour expérimenter différents rythmes;</p>
<p>Définissez la hauteur de chaque note;</p>
<p>Créez des variations.</p>`,
          order: 2,
        },
        {
          title: "M\u00e9lodique",
          content: `<p><strong>Définitions</strong></p>
<p>Une <strong>mélodie</strong> est un ensemble de notes jouées successivement formant une ligne musicale simple. Il s’agit du chant de l’instrument ou de la voix, le fil conducteur de la musique, son premier plan.</p>
<p>Lorsqu’un morceau possède une mélodie primaire et une mélodie secondaire, on parle respectivement de <strong>chant</strong> et de <strong>contre-chant</strong> (ou contre-mélodie). Il y a alors <strong>polyphonie</strong>.</p>
<p><strong>Principes</strong></p>
<p>Une mélodie se caractérise de la manière suivante :</p>
<p>Fréquences</p>
<p>Aiguës, pour sortir du mix</p>
<p>Instruments</p>
<p>Instruments <strong>monophoniques</strong> : violon, flute, …</p>
<p>Instruments polyphoniques utilisés de manière monophonique (voire diphonique) : guitare lead, main droite au piano, à la harpe…</p>
<p>Restrictions</p>
<p>Pour efficacement pénétrer et demeurer dans l’oreille de l’auditeur, la mélodie :</p>
<p>S’étend sur 2 octaves au plus</p>
<p>Dure quelques secondes</p>
<p>Se constitue de peu de notes</p>
<p><strong>Méthodologie</strong></p>
<p>Écriture la base mélodique</p>
<p>Si vous l’avez déjà écrite, jouez la progression d’accord en boucle selon une rythmique ou un arpège simple pour la faire assimiler à votre oreille;</p>
<p>Construisez un air qui vous plaise en fredonnant ou en sifflant. Des “nah nah nah” sont suffisant pour déterminer la hauteur de chaque note;</p>
<p>Si cela vous aide, chantez “en yaourt” (= ce qui vous passe par la tête, même si ça ne veut rien dire) le temps de trouver la mélodie. Même si vous ne souhaitez pas inclure de paroles dans votre morceau une fois achevé, cela peut être plus simple pour vous de chantonner des paroles que des onomatopées;</p>
<p>Ajoutez du rythme : En fredonnant, vous avez probablement créé un rythme monotone à base de noires et de croches. Il est temps de dynamiser la mélodie en faisant appel à des subdivisions des temps plus petites, en lui ajoutant des appoggiatures et autres effets de jeu,  des silences, etc.</p>
<p>Enrichissement de la mélodie</p>
<p>Écrivez votre mélodie au propre sur votre logiciel de composition;</p>
<p>Analysez - si vous avez déjà écrit l’accompagnement - les notes de la mélodie en les mettant en perspective avec les notes des accords joués au même moment. Cela permet de se forger un avis objectif sur votre mélodie. En effet, à force de jouer à notre oreille une même musique en boucle, celle-ci s’y habitue et perd sa capacité à détecter une dissonance. Il est alors nécessaire de recourir à la théorie musicale pour éviter d’écrire des aberrations;</p>
<p>Si vous souhaitez une mélodie plus chargée, ajoutez-y des notes secondaires. Si vous ne souhaitez pas pour autant la dénaturer, choisissez des notes appartenant à l’accord joué par le backing track à ce moment-là;</p>
<p>Si l'instrument dédié à la mélodie n'est pas strictement monophonique, permettez vous de jouer plusieurs notes à la fois : doublez la mélodie à l’octave, ajoutez une voix, …. Si votre instrument est monophonique, vous pouvez faire le choix de créer une seconde piste mélodique pour compléter la première;</p>
<p>Ajoutez des effets de jeu (appoggiatures, bend, …) éventuellement propres à l’instrument choisi (ex. : vibrato, harmonique, etc pour un instrument à corde);</p>
<p>Répétez le processus pour créer une multitude de versions de la même mélodie proches de l’originale. Cela vous permettra d’éviter la redondance tout en respectant le fil conducteur du morceau ; l’auditeur ne sera ni ennuyé ni largué.</p>
<p><strong>Remarque(s)</strong></p>
<p>La mélodie peut être reprise dans le morceau par les instruments à vocation harmonique ou rythmique, auquel cas elle peut descendre dans les fréquences mediums voire basses (cf Up is Down | Pirates of the Carribean - Hans Zimmer);</p>
<p>Si vous avez composé la progression harmonique avant d’écrire la mélodie, gardez en tête que cette dernière doit être cohérente avec les accords qui la soutiennent, c’est-à-dire que les notes qui la composent doivent appartenir aux accords joués par l’accompagnement au même moment ou en constituer des enrichissements agréables à l’oreille;</p>
<p>Organisez vos sessions de composition de manière à reposer vos oreilles fréquemment, cela vous permettra de les garder aiguisées : aptes à détecter des dissonances et, à l’inverse, à repérer les idées à creuser.</p>`,
          order: 3,
        },
        {
          title: "Harmonique",
          content: `<p><strong>Définitions</strong></p>
<p>Une <strong>harmonie</strong> est un ensemble de notes jouées simultanément. La progression harmonique constitue le contexte de l’histoire racontée par votre musique.</p>
<p>L’harmonie transcende l’<strong>accompagnement</strong>, qui se construit sur une ou plusieurs tonalités au long du morceau.</p>
<p><strong>Principes</strong></p>
<p>L’accompagnement se caractérise de la manière suivante :</p>
<p>Fréquences</p>
<p>Mediums</p>
<p>Instruments</p>
<p>Instruments <strong>polyphoniques</strong> : guitare, piano, harpe, …</p>
<p>Instruments monophoniques jouant des lignes complémentaires : alto, saxophone, etc soulignant une note importante dans l’harmonie ou enrichissant un accord</p>
<p>Forme</p>
<p>L’accompagnement peut prendre la forme :</p>
<p>D’accords plaqués/grattés/…</p>
<p>D’arpèges</p>
<p>De riffs</p>
<p><strong>Méthodologie</strong></p>
<p>Écrire la progression d’accords</p>
<p>Si vous avez déjà écrit la mélodie :</p>
<p>Si vous l’avez déjà écrite, jouez la mélodie en boucle pour la faire assimiler à votre oreille;</p>
<p>Prenez un instrument polyphonique (réel ou virtuel) et tâtonnez jusqu’à trouver des accords, au sein de la tonalité que vous utilisez, pouvant se marier à la mélodie;</p>
<p>A un même moment, il peut exister plusieurs accords fonctionnant pour accompagner la mélodie. Écoutez donc chaque progression d’accord possible, désormais sans la mélodie, pour déterminer celles qui vous plaisent le plus. Vous avez à ce stade élaboré différentes progressions d’accords.</p>
<p>La progression d’accord porte une progression sentimentale. Selon l’histoire que vous souhaitez raconter,  assemblez les différentes progressions d’accords précédemment élaborées pour créer les sections du morceau.</p>
<p>Si vous n’avez pas encore écrit la mélodie, contentez vous d’écrire les progressions d’accord qui portent le sentiment que vous recherchez, et assemblez les pour créer les sections du morceau.</p>
<p>Mettre en forme l’accompagnement</p>
<p>Écrivez vos accords au propre sur votre logiciel de composition. Activez la piste mélodique si vous l’avez déjà écrite;</p>
<p>Ensuite, pour chaque instrument de l’accompagnement et pour chaque section du morceau :</p>
<p>Déterminez la nature des accords joués : powerchords, triade, tétrade, etc;</p>
<p>Déterminez la forme sous laquelle les jouer : plaqué/gratté, posé, arpégé, etc;</p>
<p>Expérimentez : altérez les accords, changez le rythme, <strong>sortez des schémas</strong> : c’est en tâtonnant qu’on découvre des accompagnements originaux;</p>
<p>Ajoutez des pistes pour accompagner les mouvements harmoniques et enrichir le son de textures supplémentaires : un alto qui reprend les toniques pour mettre en valeur la montée/descente de la progression et apporter la texture des cordes frottées, un saxophone enrichissant les accords de l’accompagnement de leur 9ème sur un passage typé jazz et apportant le souffle des instruments à vent, etc;</p>
<p>Répétez le processus pour créer différents accompagnements : changez un arpège, remplacez un accord par un autre de la même famille harmonique, substituez deux instruments, faites varier la dynamique, le volume des pistes, …</p>
<p><strong>Remarques</strong></p>
<p>Si vous avez composé la mélodie avant d’écrire la progression harmonique, gardez en tête que cette dernière doit soutenir la mélodie, c’est-à-dire que les accords qui la composent doivent comporter les notes jouées par la mélodie au même moment ou en être enrichis de manière agréable à l’oreille;</p>
<p>La forme d’un accompagnement est intrinsèquement liée à la nature de l’instrument qui le joue. Le même accompagnement sonne différemment, donc plus ou moins bien, sur différents instruments;</p>
<p>Organisez vos sessions de composition de manière à reposer vos oreilles fréquemment, cela vous permettra de les garder aiguisées : aptes à détecter des dissonances et, à l’inverse, à repérer les idées à creuser.</p>`,
          order: 4,
        },
        {
          title: "Ecrire une guitare rythmiqued'accompagnement",
          content: `<p>Des <strong>guitares rythmiques</strong> <strong>et/ou</strong> <strong>d’accompagnement</strong> ont pour vocation de générer une base sonore autour de laquelle vont se construire les différents instruments.</p>
<p><strong>Fonction d’une guitare rythmique</strong></p>
<p>Une guitare rythmique ou d’accompagnement doit s’inscrire dans le <strong>background </strong><strong>sonore</strong> du morceau…</p>
<p>… C’est-à-dire au même plan musical que celui où l’on place généralement la basse. Pour cela, on privilégie l’utilisation des basses/basses-moyennes fréquences. On réserve en effet la gamme fréquentielle moyenne/moyenne-aiguë aux mélodies de guitare, piano, et cetera, et la gamme aiguë aux solos; qu’ils soient joués à la guitare, au violon, …</p>
<p><strong>Comment l’écrire ?</strong></p>
<p>En règle générale, une guitare rythmique <strong>joue</strong> <strong>tout du long</strong>…</p>
<p>… J’ai tendance à faire jouer mes guitares rythmiques et/ou d’accompagnement sur l’intégralité du morceau, car cela permet de rajouter une couche instrumentale supplémentaire à mes compositions. Lorsque cela est recherché, une telle piste rend le master plus épais. De plus, on peut alors s’en servir pour modifier l’ambiance du morceau sans faire appel aux instruments “de premier plan” que peut être une guitare lead, ce qui permet une transition plus discrète entre deux sections d’un même morceau. Cela est idéal dans une chanson à tension constante pour faire saisir à l’oreille de l’auditeur le passage d’un couplet à un refrain par exemple.</p>
<p>Une piste de guitare rythmique/d’accompagnement peut se constituer…</p>
<p>… De <strong>riffs</strong>. Cela permet d’épaissir le morceau sans le dénaturer tout en fournissant un repère facilement reconnaissable à l’oreille de l’auditeur puisqu’il s’agit le plus souvent de patterns musicaux simples sur lesquels peuvent s’appuyer les instruments de premier plan. Cela est très bien illustré par la guitare rythmique drive de Enter Sandman (Metallica) où différents riffs se construisent et se déconstruisent tout en fournissant une épaisseur considérable au morceau (ce qui est tout à fait souhaitable lorsqu’on joue du métal).</p>
<p>… D’<strong>accords grattés</strong>. Avec une rythmique possédant suffisamment de variations pour ne pas faire de la guitare rythmique une piste sans intérêt. Cela permet non seulement de marquer la tonalité du morceau, mais aussi potentiellement chaque accord que vous jouez. Ainsi, le fait de jouer ou non des accords en fond change complètement la manière dont l’oreille percoit les notes que peut jouer une guitare lead par dessus (d’où l’importance d’ailleurs d’un bon backing track pour un solo compréhensible; si le solo est une histoire, le backing track en est le contexte).</p>
<p>… D’<strong>accords arpégés</strong>. Cela rend d’autant plus simple la création d’un accompagnement léger mais constant puisque vous répartissez selon le schéma qui vous sied le mieux les notes de chaque accord. Je conseillerai d’ailleurs de ne pas changer trop souvent de schéma d’arpège pour ne pas attirer l’attention de l’oreille sur cette piste d’accompagnement. Ceci dit, si vous créez une piste d’accompagnement très riche, vous pouvez vous permettre de vous passer de piste lead ou de l’alléger fortement, comme l’illustre Dust in the Wind (Kansas).</p>`,
          order: 5,
        },
        {
          title: "Ecrire une basse",
          content: `<p><strong>Fonction d’une basse</strong></p>
<p>Une basse à vocation à remplir l’espace fréquentiel bas correspondant aux sons graves.</p>
<p>Un tel instrument génère une base sonore dont le jeu n’a pas vocation à être mélodique mais à donner du corps à la composition.</p>
<p><strong>Comment l’écrire ? </strong></p>
<p>Une ligne de basse est donc plus orientée rythmiquement que mélodiquement.</p>
<p>Elle peut se constituer  :</p>
<p>- De <strong>riffs</strong>, pour ajouter de la dynamique : Enter Sandman (Metallica), Californication (RHCP), …</p>
<p>-> De tels riffs sont destinés à “envoyer du lourd”, ils doivent être rapides et utiliser des notes tels que les toniques et quintes des accords du morceau; pas question en</p>
<p>- De <strong>montées/descentes</strong> sur des gammes ou improvisées, pour apporter du mouvement au morceau : Hysteria (Muse)</p>
<p>- De <strong>répétitions</strong> des toniques des accords du morceau sur une rythmique plus ou moins simple, si vous cherchez simplement à épaissir le tout sans vous creuser la tête : les lignes</p>
<p>Tout dépend de l’espace que vous souhaitez laisser à votre basse, de si vous souhaitez qu’elle pénètre l’oreille de l’auditeur ou plutôt reste discrète, de l’ambiance, de la profondeur et de la dynamique que vous voulez obtenir.</p>
<p>La ligne de basse est rarement la piste sur laquelle vous passerez le plus de temps dans une composition car celle ci n’a souvent qu’un rôle de fond dans une musique, mais sa présence n’en reste pas moins importante et vous réaliserez en prêtant l’oreille qu’on peut apporter beaucoup à un morceau en travaillant cet instrument. Ainsi, de nombreux morceaux des Red Hot Chili Peppers sont très connues pour leurs lignes de basse (et Flea est un bassiste rendu célèbre par ces dernières).</p>`,
          order: 6,
        },
        {
          title: "Ecrire des percussions",
          content: `<p>Il est essentiel dans une musique d’avoir un élément rythmique. Cela est très important dans un groupe pour jouer en rythme et apporte du corps à une chanson, tout en fournissant des repères à l’oreille des auditeurs. On utilise souvent des percussions pour répondre à ce besoin.</p>
<p>Il existe différents éléments percussifs :</p>
<p>Kick - grosse caisse</p>
<p>Snare - caisse claire</p>
<p>Tom - Tom</p>
<p>Clap - Clap</p>
<p>Hihat open - cymbale charleston ouverte</p>
<p>Hihat closed - cymbale charleston fermée</p>
<p>Crash - cymbale “crash”</p>
<p>Ride - cymbale “ride”</p>
<p>Shaker - éléments de type maracas</p>
<p><strong>Utilisation des éléments percussifs</strong></p>
<p>On utilise :</p>
<p>Sur les temps : kick, tom, snare, clap</p>
<p>Temps forts : kick, tom</p>
<p>Temps faibles : snare</p>
<p>Sur les temps et contretemps : hi-hats</p>
<p>Pour conclure une phrase et relâcher la tension : ride, crash</p>
<p>Pour rendre le son moins sec : shake</p>
<p><strong>Patterns courants</strong></p>
<p>Pattern House/Funk typique</p>
<p>Kick sur chaque temps (Four on the floor)</p>
<p>Snare sur les temps pairs</p>
<p>Hihat sur les contretemps</p>
<p>Pattern Rock typique</p>
<p>Kick sur les temps impairs</p>
<p>Snare sur les temps pairs</p>
<p>Hihat sur chaque temps et contretemps</p>
<p>Pattern Metal typique</p>
<p>Kick sur chaque double croche</p>
<p>Snare sur tous les temps pairs</p>
<p>Hihat sur chaque temps et contretemps</p>`,
          order: 7,
        },
        {
          title: "Ecrire des cordes frott\u00e9es",
          content: `<p><strong>Fonction des cordes frottées</strong></p>
<p>Contrairement aux instruments à cordes pincées, grattées ou frappées, un instrument à cordes frottées comme un instrument à vent a la possibilité de générer un son continu.</p>
<p>Ils peuvent donc être utilisés dans l’optique de créer une ambiance, rajouter une couche instrumentale fine à un mix</p>
<p><strong>Comment en écrire ?</strong></p>
<p>Tout dépend de l’instrument que vous souhaitez intégrer :</p>
<p>- Contrebasse : cet instrument se situant dans la gamme fréquentielle la plus basse du spectre, réservez le au jeu de lignes de basses rythmiquement simples. Typiquement : jouer la tonique de vos accords. Ne la superposez pas à un autre instrument jouant dans une gamme fréquentielle proche (basse, violoncelle, main gauche au piano, …) car cela rendrait le bas du spectre fréquentiel inintelligible, flou, bourdonnant, …</p>
<p>- Violoncelle : cet instrument est plus flexible qu’une contrebasse, car sa gamme fréquentielle se situe entre les basses et les médiums. Il peut être utilisé de manière analogue à une basse, quoique j’éviterai de m’en servir pour jouer des riffs dont l’intérêt est souvent l’intensité générée par l’attaque de la note - plus dure à obtenir sur un violoncelle.</p>
<p>Joué pour ajouter de la profondeur, vous pouvez également vous servir de la dimension “ambiante” de l’instrument pour utiliser des notes auxquelles vous n’auriez autrement pas eu retour. Par exemple, jouer les 7èmes des accords.</p>
<p>- Alto/Violon : ils occupent les fréquences médiums-hautes. Ils auront donc plus de facilité à percer le mix et à se faire entendre que leurs homologues plus corpulents. On peut donc les utiliser comme instrument lead.</p>
<p>Encore une fois, vous pouvez profiter de ce coté ambiant pour rendre votre mix plus sentimental en rajoutant discrètement des 4tes ou 7èmes à tout vos accords à l’aide de l’un de ces instruments monophoniques.</p>
<p>Ils peuvent d’ailleurs servir à “surligner” des notes en les doublant, éventuellement à l’octave. Je pense aussi à utiliser au violon (/à l’alto) les guide tones (3ce, 7ème/6xte) de l’accord que peuvent être en train de jouer un piano ou une guitare à ce moment là pour enrichir ce dernier.</p>`,
          order: 8,
        },
      ],
    },
    {
      title: "Mixage",
      description: "EQ, compresseur, reverb, delay et assemblage d'un mix.",
      part: "Home Studio",
      order: 12,
      sections: [
        {
          title: "Pr\u00e9ambule",
          content: `<p><strong>Contexte</strong></p>
<p>Une fois la composition achevée, il est temps de <strong>mixer </strong>ensemble les différentes pistes élaborées. A l’issue du mixage, les <strong>équilibres</strong> suivants doivent être respectés :</p>
<p><strong>Équilibre en fréquences </strong>: toute la gamme fréquentielle audible (rq1) doit être représentée ;</p>
<p><strong>Équilibre en volume</strong> : chaque instrument, effet, échantillon audio doit être audible et apporter sa pierre à l’édifice sans prendre le pas sur les autres ;</p>
<p><strong>Équilibre panoramique</strong> : Les oreilles gauche et droite (rq1) reçoivent des informations identiques ou complémentaires, cohérentes et en quantité équitable.</p>
<p><strong>Sur l’équilibre</strong></p>
<p>L’oreille humaine perçoit les sons de 20 Hz à 20 kHz, intervalle que l’on découpe usuellement en 3 plages : grave, médium et aiguë. Pour comporter un <strong>relief</strong> sonore suffisant, un morceau doit représenter ces 3 gammes de <strong>fréquences</strong> de manière perceptible, c’est-à-dire avec un niveau sonore du même ordre de grandeur, et cela de chaque coté (gauche-droite) si on fait des choix de <strong>panoramique</strong>.</p>
<p>De plus, un instrument dédié à un rôle précis - ex. : l’accompagnement - ne doit pas sortir de la gamme fréquentielle qui lui est attribuée - ex. : les médiums -. Autrement, son son risque de se superposer à celui d’un autre instrument et créer un <strong>frottement</strong> désagréable à l’oreille.</p>
<p>Niveau sonore (dB) - Fréquence (Hz)</p>
<p>Les basses sont dédiées au groove.</p>
<p>Une instrumentale trop riche en basse est lourde et empêche de percevoir les nuances de l’accompagnement et de la mélodie.</p>
<p>Les médiums sont dédiées à l’accompagnement.</p>
<p>Une instrumentale trop riche en médiums est plate, elle manque de la profondeur des basses et de l’agressivité des aiguës.</p>
<p>Les aiguës sont dédiées à la mélodie.</p>
<p>Une instrumentale trop riche en aiguës est agressive donc fatiguante à l’oreille car manque de subtilité.</p>
<p><strong>Méthodologie</strong></p>
<p>Pour mixer, on suit l’ordre suivant :</p>
<p>Travail des pistes individuelles : une fois les pistes générées/enregistrées, on les retouche et on les prépare à être assemblées. On les teint de la couleur du morceau à l’aide d’effets ;</p>
<p>Assemblage des pistes en groupes : selon le rôle des pistes (lead, accompagnement, groove ou autre), on les regroupe pour créer les différents blocs du morceau ;</p>
<p>Travail sur les groupes : Au sein de chaque groupe, on règle le volume et la panoramique des différentes pistes les unes par rapport aux autres. On applique des effets aux groupes pour souder les différentes pistes dans une ambiance commune, un mouvement commun ;</p>
<p>Assemblage des groupes : on équilibre les différents groupes les uns par rapport aux autres pour obtenir une ébauche du mix final ;</p>
<p>Travail sur le mix : on peauffine le mix en ajoutant des mouvements et transitions à l’aide de samples et d’automations. Le morceau n’est plus un ensemble de pistes et sections séparés, mais se comporte comme un tout cohérent mû par une dynamique globale.</p>
<p><strong>Remarques</strong></p>
<p>Il faut mixer avec un casque stéréo/des enceintes de monitoring pour entendre fidèlement toutes les plages fréquentielles du son, en particulier les basses, et distinguer la panoramique.</p>`,
          order: 1,
        },
        {
          title: "Pr\u00e9paration",
          content: `<p><strong>Contexte</strong></p>
<p>Pour<strong> préparer</strong> le mixage, on commence par retravailler chaque piste de manière individuelle. Il s’agit de faire du sur-mesure à la fonction qui doit être remplie par la piste.</p>
<p><strong>Méthodologie</strong></p>
<p>D’abord, les réglages fréquentiels :</p>
<p>Placez la piste à -18 dB (rq1) pour éviter la saturation du master lorsque vous écouterez les pistes ensemble plus tard.</p>
<p>Jouez la piste en solo ;</p>
<p>Visualisez son spectre sonore à l’aide d’un plugin (rq1) ;</p>
<p>Si le spectre du signal s’étend trop bas/haut :</p>
<p>Retournez au stade de la composition et corrigez cet écart : changez le renversement d’un accord, octaviez la ligne de basse ou la ligne mélodique, substituez-y une note pour une autre, …</p>
<p>OU</p>
<p>Ajoutez un Equalizer (rq2) pour restreindre le spectre de l’instrument aux fréquences recherchées. Par exemple : ajoutez un filtre passe-bas ( = coupe-haut) sur un accompagnement qui titille les aiguës.</p>
<p>Ensuite, l’application des effets (rq3). On choisit et applique un effet à une piste pour :</p>
<p>Changer le timbre de l’instrument ou de l’échantillon audio de la piste ;</p>
<p>Teinter chaque piste de l’ambiance globale visée pour le morceau ;</p>
<p>Retoucher le son généré ou enregistré lors de la composition et de l’enregistrement (rq4).</p>
<p><strong>Exemple</strong></p>
<p>Mix Ableton de “From Dusk Onwards” - Antoine Vlieghe</p>
<p>Sur l’exemple ci-dessus, j’ai appliqué les effets de <strong>Delay</strong> et <strong>Reverb</strong> à la piste de main droite d’une harpe pour lui donner plus de profondeur, de résonnance, et atténuer le claquement de ses cordes que je trouvais trop agressif.</p>
<p>Je me sers ici de ces effets comme d’un “flou artistique” qui adoucit le timbre naturel de l’instrument et de recréé la réverbération d’une pièce close résonante, ce qui génère l’ambiance du morceau.</p>
<p>Les autres plugins présents sur la piste ne sont pas des effets à proprement parler mais des outils de mixage (rq1).</p>
<p><strong>Remarque(s)</strong></p>
<p>J’utilise le plugin natif d’Ableton “Utility” pour régler le niveau sonore et la panoramique. J’utilise le plugin gratuit et simple d’utilisation “Voxengo span” pour visualiser le spectre audio et jauger la panoramique ;</p>
<p>Appliquer un Equalizer à une piste ne permettra des retouches que mineures. Mal jaugé, il peut  dénaturer le son de la piste. Si une piste n’est pas satisfaisante, mieux vaut donc revenir à la composition de celle-ci que de compter sur la phase de mixage pour la corriger ;</p>
<p>Ne surchargez pas vos pistes d’effets que vous ne maitrisez pas. Pour un débutant, EQ, Compressor, Reverb et Delay devraient suffire à mixer.</p>
<p>Écho à la remarque 2 : on ne rattrape pas une composition désastreuse ou un enregistrement de mauvaise qualité en appliquant es filtres et des effets lors de la phase de mixage.</p>`,
          order: 2,
        },
        {
          title: "Assemblage",
          content: `<p><strong>Contexte</strong></p>
<p>Chaque piste étant désormais dans la gamme de fréquence à laquelle elle est destinée et teintée à convenance, il est temps de passer à la phase d’<strong>assemblage</strong> des piste : c’est un premier mélange grossier des différents éléments musicaux.</p>
<p><strong>Méthodologie</strong></p>
<p>Regroupez les pistes par groupes selon leur rôle et leur gamme fréquentielle, qui vont souvent de pair (rq1).</p>
<p>Il s’agit désormais de régler le volume et la panoramique des différentes pistes au sein de leur groupe . Il s’agit de faire ce qu’on appellerait sur scène les balances du son.</p>
<p>Pour chaque groupe de pistes et pour chaque section du morceau :</p>
<p>Placez le groupe d’instruments en solo. Chaque piste individuelle a été normalisée à -18 dB auparavant ;</p>
<p>Réglez une première fois les volumes de chaque piste en remontant ceux qui sont trop faibles. Si Chaque instrument doit être audible, les réglages fins se font à la sensibilité de l’artiste ;</p>
<p>Réglez la panoramique des pistes du groupe selon le placement spatial que vous souhaitez donner aux instruments virtuels/virtualisés.</p>
<p>L’idée est de créer une dimension spatiale au son tout en évitant de surcharger le mix d’une information redondante à gauche et à droite.</p>
<p>Réglez à nouveau le volume de chaque piste de manière à ce que chacune des 2 oreilles reçoive une intensité sonore d’un même ordre de grandeur.</p>
<p>De nouveau, il est temps d’appliquer des effets (rq2). Un effet appliqué à un groupe agit sur le mix des différentes pistes le constituant, ce qui est différent d’appliquer l’effet à chaque piste de manière individuelle.</p>
<p>On applique donc un effet sur un groupe pour</p>
<p>Instaurer une ambiance propre au groupe ;</p>
<p>Apporter au groupe une dynamique, une teinte cohérente ;</p>
<p>→ Bref, achever le passage d’un ensemble de pistes individuelles qui s’ignorent les unes les autres à un mix dont les différents éléments vont ensemble.</p>
<p>Il est finalement temps d’assembler les blocs :</p>
<p>Activez les groupes un par un en ajustant à chaque fois le volume du groupe activé par rapport à ceux déjà activés.</p>
<p>Votre bus master comporte alors un premier mix de votre morceau. Le plus gros du travail est fait.</p>
<p><strong>Exemple</strong></p>
<p>Mix Ableton de “In The Mist” - Antoine Vlieghe</p>
<p>Ici par exemple, j’ai appliqué aux groupes des instruments mélodiques - un synthé au son de flûte et un violon - un Equalizer (EQ) et un effet de Delay.</p>
<p>L’<strong>Equalizer</strong> permet de supprimer les quelques basses qui pourraient encombrer le son de ces instruments à vocation mélodique que je souhaite faire ressortir du mix en s’inscrivant dans les hautes fréquences. Le <strong>Delay </strong>- analogue à un echo - permet de créer une ambiance caverneuse (floue, lourde) sur le groupe des instruments Lead.</p>
<p><strong>Remarques</strong></p>
<p>Le découpage type est le suivant : basses/groove, médiums/accompagnement, hautes/mélodie. Parfois cependant, il n’est pas pertinent de regrouper les pistes par groupes. Autrement, vous utiliserez des découpages plus fins lorsque vous serez habitués à mixer.</p>
<p>Ne surchargez pas vos pistes d’effets si vous ne les maitrisez pas, vous allez simplement dénaturer votre son. Pour un débutant, EQ, Compressor, Reverb et Delay devraient suffire à mixer.</p>`,
          order: 3,
        },
        {
          title: "Effet \u2014 Equalizer",
          content: `<p><strong>Définition</strong></p>
<p>L’<strong>Egaliseur </strong>(communément, <strong>EQ </strong>pour Equalizer)<strong> </strong>est un des outils les plus connus des tables de mixage. Il s’agit d’un filtre permettant de régler l’intensité d’une piste audio dans chaque domaine fréquentiel qu’elle aborde.</p>
<p>Il existe des <strong>EQ</strong> de 3 à 8 points selon la précision dont vous avez besoin; 3 points (low, mid, high) étant suffisant à un bon mixage, 8 vous permettant des réglages particulièrement fins.</p>
<p><strong>Utilisation(s)</strong></p>
<p>L’utilisation principale de l’<strong>EQ</strong> est de distinguer les gammes fréquentielles des différents instruments du mix pour éviter qu’elles ne se recoupent, provoquant des flous audios.</p>
<p>Cela a pour effet collatéral - mais qui peut aussi être un but en soi ! - de changer le timbre de l’instrument sur la piste duquel on applique le filtre.</p>
<p><strong>Exemple </strong>(“From Dusk Onwards” - Antoine Vlieghe)</p>
<p>Sur l’exemple suivant, un piano accompagne une mélodie à la harpe. Le piano rythmique doit être à l’arrière plan musical, dans la gamme fréquentielle basse-médium. Pour cela, je boost ses fréquences basses et moyennes, et coupe les aiguës de quelques décibels. A l’inverse, je coupe les basses de la mélodie à la harpe et monte ses moyennes et hautes fréquences pour atteindre un son plus aiguë et cristallin.</p>
<p>Mix Ableton de “From Dusk Onwards” - Antoine Vlieghe</p>
<p>(à gauche, le piano - à droite, la harpe)</p>
<p>Les equalizers sont plus forts dans les audios qui suivent sur les exemples visuels ci-dessus pour que vous entendiez bien la différence; les réglages doivent évidemment se faire beaucoup plus finement sur un vrai mixage :</p>
<p>- Sans Equalizers : eqOff</p>
<p>- Avec Equalizers : eqOn</p>`,
          order: 4,
        },
        {
          title: "Effet \u2014 Compressor",
          content: `<p><strong>Définition</strong></p>
<p>Un <strong>Compresseur</strong> (compressor en anglais) est un outil d’uniformisation des niveaux sonores sur une même piste ou un groupe de piste. Pour faire simple, il s’agit de booster les sons faibles et de réduire les sons forts.</p>
<p><strong>Utilisation(s)</strong></p>
<p>Un <strong>compresseur</strong> a pour usage primaire d’homogénéiser le volume sonore d’une ou d’un ensemble de pistes, comme l’indique son nom. Cela signifie que l’écart entre les pics de plus haute et de plus faible intensité sera réduit. Cela peut servir diverses fins.</p>
<p>Appliqué sur un groupe d’instrument, un <strong>compresseur</strong> permet par exemple que les instruments se laissent davantage d’espace les uns les autres puisque pour conserver un volume homogène, le volume des uns est réduit lorsque le volume des autres en est à un pic : cela permet que les pistes ne se comportent plus de façon individuelles mais comme un ensemble cohérent dont la dynamique parait plus naturelle.</p>
<p><strong>Paramètres</strong></p>
<p>Un compresseur prend les paramètres suivants :</p>
<p>- un <strong>seuil</strong>, niveau sonore à partir duquel il est actif</p>
<p>- un <strong>ratio</strong> , le ratio de réduction du niveau sonore au-dessus du seuil</p>
<p>- le <strong>knee</strong>, intervalle autour du seuil où le ratio de compression passe continûment de 1 à la valeur définie</p>
<p>- le <strong>dry/wet</strong> : pourcentage du signal traité.</p>
<p>Le ratio peut être défini de 1 (diagonale) - où la compression est nulle - à l’infini (horizontale) - où la compression est forte, on parle de limiting.</p>
<p>On parle de knee - “genou” en anglais - car ce paramètre représente la courbure de la droite représentant le ratio de compression en fonction du volume sonore. Le plus le knee est grand, le moins le saut en compression autour de la valeur seuil est notable.</p>
<p><strong>Fonctionnalités</strong></p>
<p>Un signal sonore compressé voit son volume global baisser. Cela peut se visualiser à l’aide de la jauge “GR”<strong> </strong>(gain reduction). La jauge “Out” permet alors de mesurer le volume en sortie.</p>
<p>Le paramètre Makeup permet d’appliquer un gain au signal en sortie du compresseur pour ‘compenser’ cette la perte en décibels qui lui a été appliquée comme effet collatéral à la compression</p>
<p>.</p>
<p><strong>Vues</strong></p>
<p>Il existe différentes manières de visualiser une compression et ses paramètres. Celle que je trouve la plus intuitive est la vue en graphe, mais il existe également une vue en jauges et une vue en spectre que voici :</p>
<p>De gauche à droite : vue en graphe, en jauges et en spectre d’un compresseur</p>
<p><strong>Exemples </strong>(“From Dusk Onwards” - Antoine Vlieghe)</p>
<p>Sur une mélodie à la harpe :</p>
<p>- Sans compression : compressorOff</p>
<p>- Avec compression : compressorOn</p>
<p>Sur une mélodie à la harpe accompagnée au piano :</p>
<p>- Sans compression : compressorOffGroup</p>
<p>- Avec compression : compressorOnGroup</p>
<p>La compression est appliquée au groupe harpe + piano :  lorsqu’un instrument joue plus doucement, l’autre joue plus fort pour “compenser”.</p>`,
          order: 5,
        },
        {
          title: "Effet \u2014 Reverb",
          content: `<p><strong>Définition</strong></p>
<p>La <strong>Reverb</strong> est la réverbération du son. Au naturel, celle-ci se fait sur les surfaces qui nous entourent. Nos oreilles sont habituées à entendre les sons produits accompagnés de leur réverbération naturelle, qui en fait ressortir les harmoniques et créée une impression d’espace.</p>
<p>On nomme les différents types de <strong>reverb</strong> selon la réverbération naturelle qu’ils reproduisent : church, cathedral, chamber, room, hall, live/scène, etc.</p>
<p><strong>Utilisation</strong></p>
<p>On l’utilise en Home Studio pour empêcher un son d’être sec, trop limé, et créer une <strong>ambiance</strong> sonore.</p>
<p><strong>Remarque</strong></p>
<p>On préfère parfois s’enregistrer dans un environnement ou la réverbération est naturellement forte que s’enregistrer entouré de mousse pour ensuite appliquer un effet de reverb, les reverbs analogiques n’imitant pas à la perfection les reverbs acoustiques.</p>
<p><strong>Paramètres</strong></p>
<p>- Decay Time, la durée des réverbérations</p>
<p>- Predelay, le temps entre l’émission d’un signal et sa première réverbération</p>
<p>- Dry/Wet, rapport entre les parties traitée et non traitée par le <strong>reverb</strong><strong> </strong>du signal initial</p>
<p><strong>Exemple </strong>(“From Dusk Onwards” - Antoine Vlieghe)</p>
<p>Sur une mélodie à la harpe.</p>
<p>Sans reverb : reverbOff</p>
<p>Avec reverb : reverbOn</p>`,
          order: 6,
        },
        {
          title: "Effet \u2014 Delay",
          content: `<p><strong>Définition</strong></p>
<p>Le <strong>délai </strong>(”delay” en anglais) est une répétition - à l’exact ou déformée - du signal à intervalle de temps régulier. Il n’est donc pas voué à créer une ambiance comme une reverb, où la multitude de répétitions-superpositions d’un même signal rend ce dernier beaucoup plus “flou” tout en créant un “espace” sonore très riche.</p>
<p>Il s’agit donc d’un effet cousin mais bien différent de la reverb. Il peut s’appliquer dans des situations similaires mais pour un rendu différent. En fait, tandis que le reverb modélise des multitudes de réverbérations sur les murs d’un espace clos fictif (monument, pièce), le <strong>delay</strong> agit comme un écho de montagne.</p>
<p><strong>Utilisation(s)</strong></p>
<p>Apporter une dimension supplémentaire au son sans le flouter.</p>
<p><strong>Paramètres</strong></p>
<p>- Sync : quantification-synchronisation temporelle de l’écho gauche par rapport au droit</p>
<p>- Time : réglage manuel du temps d’écho gauche et droit</p>
<p>- Feedback : pourcentage du volume sonore préservé d’une répétition à la suivante</p>
<p>-  Dry/Wet : …</p>
<p>- et cetera : paramètres de filtre pour définir la déformation du signal après répétition; pensez-y comme à la forme de la montagne qui génère l’écho</p>
<p>Delay dans Ableton</p>
<p><strong>Exemple </strong>(“From Dusk Onwards” - Antoine Vlieghe)</p>
<p>Sur une mélodie à la harpe.</p>
<p>Sans delay : delayOff</p>
<p>Avec delay : reverbOn</p>`,
          order: 7,
        },
        {
          title: "Outil \u2014 Piste retour",
          content: `<p><strong>Contexte</strong></p>
<p>Lorsque vous souhaitez appliquer plusieurs fois le même effet à différentes pistes et ce sans le copier coller une multitude de fois pour tout de même finir avec un rendu hétéroclite, il vous faut utiliser les envois/retours. On parle de <strong>piste retour</strong> pour désigner une piste en entrée de laquelle on <strong>envoie</strong> la sortie de différentes autres pistes.</p>
<p>Cette piste de retour peut porter un compresseur, une reverb, ou tout effet audio que vous souhaitez.</p>
<p><strong>Vue Session</strong></p>
<p>Par défaut, vous avez 2 pistes de retour sur Ableton. Celles-ci concernent la reverb et le delay. Vous pouvez toutefois en supprimer comme en ajouter en déposant dessus un autre plug’in. Ci-dessous, j’ai une piste retour en <strong>compression</strong>.</p>
<p>Mix Ableton de “From Dusk Onwards” - Antoine Vlieghe</p>
<p>Pour appliquer l’effet de la piste retour aux pistes que vous souhaitez, il vous suffit maintenant de régler à l’aide des boutons sur le coté de chaque piste la part qui sera envoyées sur la piste retour pour y être traitées. Ces boutons se règlent de <strong>inf</strong> à <strong>0</strong>, ce qui signifie que vous pouvez y soumettre le signal d’une part allant de <strong>-oo dB</strong> (0%, rien) à <strong>0 dB </strong>(100%, tout).</p>
<p><strong>Vue Arrangements</strong></p>
<p>Dans la vue arrangements d’Ableton, le principe est le même mais le réglage se fait depuis les jauges ‘A’ et ‘B’ sous les pistes MIDI et Audio. On peut voir sur la droite à quels effets correspondent ces pistes retours A et B.</p>
<p>Mix Ableton de “From Dusk Onwards” - Antoine Vlieghe</p>
<p>Encore une fois, ces jauges représentent un traitement du signal allant de 0% à 100%, id est de 0 à 1. Cela est synonyme d’un gain allant de 10log(0) = -oo dB à 10log(1) = 0 dB, donc il s’agit bien du même réglage qu’en vue session.</p>`,
          order: 8,
        },
        {
          title: "Dynamiser le mix",
          content: `<p><strong>Contexte</strong></p>
<p>Le mix est désormais découpé en groupes cohérents en eux et entre eux. Il est temps de le <strong>dynamiser </strong>: lui donner du mouvement, de la vie.</p>
<p>Cela permet que le morceau se comporte comme un ensemble musical évoluant avec le temps de manière cohérente et non pas comme un patchwork audio grossier.</p>
<p><strong>Sur les automations</strong></p>
<p>Une <strong>automation</strong> est un réglage dynamique, c’est-à-dire en fonction du temps, des paramètres d’une piste ou d’un groupe ou d’un effet. En particulier, elle est utile pour changer les réglages d’une piste d’une section à une autre dans le morceau.</p>
<p>L’automation permet par exemple d’induire un mouvement spatial en jouant sur le déplacement gauche-droite des instruments, de créer des fade-in/fade-out pour introduire/retirer des instruments de la scène d’une section à l’autre du morceau, etc.</p>
<p>Sur Ableton, celle-ci se présente comme une ligne rouge réglable au curseur et au click droit et qu’on appelle via un click droit sur le paramètre qu’on souhaite régler.</p>
<p>Mix Ableton de “In The Mist” - Antoine Vlieghe</p>
<p><strong>Sur les transitions</strong></p>
<p>Outre ces histoires d’automation, il existe différentes méthodes pour amorcer et conduire une transition d’une section à la suivante si celle-ci manque de fluidité à l’issue des étapes précédentes :</p>
<p>Clip percussif inversé</p>
<p>il s’agit de prendre l’échantillon audio d’un élément percussif (kick, snare, hi-hat, clap, snap, …) et de l’inverser pour obtenir un audio dont la montée est douce et la chute brusque (l’ordre attack decay sustain release étant inversé).</p>
<p>Je rapproche cette pratique de l’application d’un fondu au blanc en montage vidéo : durant un courant instant - celui de la transition - cet échantillon occupe l’espace sonore tandis que s’enchaînent deux séquences différentes du clip musical.</p>
<p>Mix Ableton de “Silver In The Cloud” - Antoine Vlieghe</p>
<p>Clip harmonique inversé</p>
<p>de la même manière, on peut inverser l’échantillon audio d’un accord plaqué au synthé/piano, à la guitare, et cetera, pour produire un effet semblable à celui du clip percussif inversé mais cette fois teinté harmoniquement.</p>
<p>Ainsi, pour amorcer un refrain commençant par un accord de La mineur, on peut placer sur la fin du couplet un accord de La mineur inversé (en bleu ci-dessous) pour amorcer la transition couplet-refrain.</p>
<p>Mix Ableton de “Silver In The Cloud” - Antoine Vlieghe</p>
<p><strong>Sur les samples</strong></p>
<p>D’une manière plus large, les samples (rq1) - qu’il s’agisse d’échantillons musicaux ou de bruits d’ambiance - apportent un niveau de détail supplémentaire à la musique.</p>
<p>Il peut s’agir du son d’une cloche que vous faites teinter ici et là pour remplacer un élément de  batterie, du son du vent qui souffle et recréé l’ambiance d’une tempête, ou encore de la pluie qui tombe et ajoute une note de tristesse, une once de lourdeur à la musique.</p>
<p>In the Mist</p>
<p>“In The Mist” - Antoine Vlieghe</p>
<p>C’est le cas du morceau “In The Mist” que j’ai composé et au début duquel vous pouvez clairement distinguer le son de la pluie tombante, qui s’adoucit lorsque rentrent les autres instruments mais demeure présent à l’arrière-plan, comme vous l’entendrez si vous y prêtez attention.</p>
<p><strong>Remarques</strong></p>
<p>De l’anglais “échantillon”, un <strong>sample</strong> désigne un clip audio de courte durée, éventuellement extrait d’un audio plus long. Ainsi, un sample peut être un extrait de chanson, un bruit de batterie, le son d’un robinet qui fuit, une partie de l’enregistrement d’une averse, etc.</p>`,
          order: 9,
        },
      ],
    },
    {
      title: "Mastering",
      description: "Finaliser et pr\u00e9parer votre morceau pour la distribution.",
      part: "Home Studio",
      order: 13,
      sections: [
        {
          title: "Morceau unique",
          content: `<p><strong>Contexte</strong></p>
<p>Le <strong>Mastering</strong> est l’étape finale de la production audio visant à harmoniser l’ensemble des éléments musicaux du projet.</p>
<p>On le réalise à partir du mixage achevé.</p>
<p><strong>Principes</strong></p>
<p>Lors de la création d’un morceau, le principe de la phase de <strong>mastering</strong> est de :</p>
<p>- Nettoyer : éliminer les bruits parasites et défauts;</p>
<p>- Équilibrer : peaufiner l’équilibrage en fréquence;</p>
<p>- Façonner : mettre en forme le commencement et la fin de l’oeuvre;</p>
<p>- Optimiser : parfaire la dynamique, obtenir le volume optimale à chaque instant;</p>
<p>- Normaliser : normaliser le volume du morceau, pour un confort d’écoute optimal sur un site de streaming.</p>
<p><strong>Pistes et Exemples</strong></p>
<p>Nettoyer</p>
<p>- Application de filtres (Equalizer) pour couper les basses et hautes fréquences, hors de la gamme audible mais dont le traitement par le logiciel peut entraîner des effets indésirables;</p>
<p>- Application d’effets sur le bus master (reverb, delay) pour lisser le tout.</p>
<p>Équilibrer</p>
<p>- Application de filtres (Equalizer) pour éviter la surcharge du master en basse/médium/high à un moment donné.</p>
<p>Façonner</p>
<p>- Paramétrage des automations du bus master pour créer des fade-in/fade-out : en volume (inaudible → audible), en réverbération (flou → net), etc.</p>
<p>Optimiser</p>
<p>- Réglage du volume du master en fonction de la section du morceau;</p>
<p>- Application d’un compresseur (compressor) léger pour assurer que les différentes pistes et groupes de pistes se comportent comme un ensemble.</p>
<p>Normaliser (Rq1)</p>
<p>- Tout en conservant la dynamique du morceau (variation de volume en fonction du temps), le volume du morceau au moment où il est le plus haut devrait être de <strong>0dB</strong>. Cela permet à l’auditeur de ne pas avoir à régler le volume entre chaque morceau sur un site de streaming, leur plafond étant fixé.</p>
<p><strong>Remarques</strong></p>
<p>La phase de normalisation du volume des morceaux est primordiale pour mettre une oeuvre sur le marché. Il s’agit de se conformer aux standards des sites de streaming.</p>`,
          order: 1,
        },
        {
          title: "Ensemble de morceaux",
          content: `<p><strong>Contexte</strong></p>
<p><strong>Masteriser</strong> une oeuvre musicale consiste également, si celle-ci n’est pas un morceau unique (single) mais un ensemble de morceaux (EP, album), à harmoniser l’enchaînement des différents morceaux.</p>
<p><strong>Principes</strong></p>
<p>- Principe d’unité (Rq1) : chaque morceau étant partie d’une même oeuvre, ils s’inscrivent dans un même et unique univers;</p>
<p>- Principe architectural (Rq1) : l’enchaînement des différents morceaux construit une ambiance qui entraîne l’auditeur dans l’univers créé;</p>
<p>- Principe de continuité (Rq2) : l’enchaînement des morceaux se fait d’une manière fluide, presque imperceptible.</p>
<p><strong>Pistes et Exemples</strong></p>
<p>Une fois chaque morceau du projet masterisé indépendamment des autres (voir section précédente), il faut prendre du recul pour masteriser l’ensemble des morceaux en tant que tel.</p>
<p>Principe d’unité : construire l’univers</p>
<p>Les différents morceaux du projet doivent avoir des dénominateurs communs : même style musical, même thème, mêmes instruments, mêmes effets audios, etc, tout en veillant à ce que différents morceaux ne soient pas identiques.</p>
<p>Si ce n’est pas le cas, il vous faut retourner en arrière</p>
<p>Principe architectural : construire l’ambiance</p>
<p>De même que chaque morceau comporte un début, une histoire et une fin, leur enchaînement doit avoir un commencement, un déroulement et un aboutissement. Les émotions transmises par chaque morceau doivent s’enchaîner pour former une progression sentimentale cohérente, construire puis éventuellement déconstruire une même ambiance.</p>
<p>Par exemple, construire une tension au long des premiers morceaux de l’oeuvre puis la résoudre dans les suivants. Ou bien - si tel est le choix de l’artiste - construire cette tension tout au long d’un album et l’achever au paroxysme de cette dernière.</p>
<p>Principe de continuité : enchaîner les morceaux</p>
<p>Si l’ambiance d’un EP ou album peut et devrait évoluer de son début à sa fin pour ne pas être statique et redondant, ce changement doit être imperceptible d’un morceau à l’autre. Tout changement doit se faire de manière continue.</p>
<p>Par exemple, il est nécessaire pour passer d’un morceau calme, lent, à un morceau rythmé et puissant, de construire entre les deux une montée en dynamique à partir d’un enchaînement d’autres morceaux.</p>
<p><strong>Remarques</strong></p>
<p>La construction d’un univers et la capacité de l’auditeur à le pénétrer est primordiale pour que celui-ci s’implique dans l’oeuvre, d’où l’importance que celui-ci soit unique et bien défini;</p>
<p>Cette règle soufre de ses exceptions : la discontinuité peut être un choix artistique si elle est maîtrisée.</p>`,
          order: 2,
        },
      ],
    },
    {
      title: "Publication",
      description: "Distribuer, prot\u00e9ger et promouvoir votre musique.",
      part: "Home Studio",
      order: 14,
      sections: [
        {
          title: "Protection juridique",
          content: `<p><strong>Contexte</strong></p>
<p>Un artiste possède sur ses oeuvres un ensemble de droits regroupés sous le nom de <strong>droit d’auteur</strong>. Pour faire valoir celui-ci en cas de litige, il est nécessaire d’avoir déposé son oeuvre devant une institution juridique compétente au préalable.</p>
<p>Protéger son oeuvre dissuade de reproduction illicite et usage détourné ou non autorisé et rend illégitime toute revendication de la propriété intellectuelle par un tiers, d’où l’importance de protéger son oeuvre <strong>avant</strong> sa publication.</p>
<p><strong>Solutions</strong></p>
<p>Pour disposer juridiquement de son droit d’auteur, vous pouvez déposez vos oeuvres des manières citées ci-après.</p>
<p>- En ligne : (Rq1)</p>
<p>Copyright France (Rq2);</p>
<p>Fidealis;</p>
<p>Etc.</p>
<p>- Physiquement :</p>
<p>Chez un huissier de justice;</p>
<p>Dans un cabinet d’avocat;</p>
<p>Auprès de toute institution de justice compétente en affaire de droits d’auteurs.</p>
<p><strong>Remarques</strong></p>
<p>/!\\ Prenez garde à la fiabilité du gorupe auprès duquel vous déposez une oeuvre, en particulier s’il s’agit d’une solution en ligne. Certaines méthodes de protection n’ont aucune légitimité dans un tribunal.</p>
<p>Il s’agit de la solution que j’utilise.</p>`,
          order: 1,
        },
        {
          title: "Publication",
          content: `<p><strong>Contexte</strong></p>
<p>L’oeuvre protégée, vous pouvez maintenant la <strong>publier</strong> !</p>
<p><strong>Solutions</strong></p>
<p>Vous pouvez uploader votre musique…</p>
<p>- Directement sur les plateformes de streaming :</p>
<p>Spotify</p>
<p>SoundCloud</p>
<p>Deezer</p>
<p>Youtube</p>
<p>Google play</p>
<p>Amazon</p>
<p>Etc</p>
<p>- En passant par des plateformes de distribution :</p>
<p>Distrokid (Rq1)</p>
<p>Wiseband</p>
<p>Tunecore</p>
<p>Etc</p>
<p>- En se rapprochant de producteurs.</p>
<p><strong>Remarques</strong></p>
<p>J’utilise Distrokid pour distribuer ma musique (lien promotionnel dans l’onglet “Discographie”).</p>`,
          order: 2,
        },
        {
          title: "Diffusion",
          content: `<p><strong>Contexte</strong></p>
<p>L’oeuvre protégée puis publiée, voilà venu le temps de la <strong>diffuser</strong> ! Votre objectif est maintenant que le plus de personnes écoutent le projet auquel vous avez accordé tant de soin.</p>
<p><strong>Solutions</strong></p>
<p>Où diffuser :</p>
<p>Parmi ses proches : commencez par partager vos créations dans le cadre familial et amical. Celui-ci vous offrira des retours précis et constructifs;</p>
<p>Parmi ses semblables : sur vos réseaux sociaux, faites votre propre promotion en partageant la sortie de votre dernière oeuvre;</p>
<p>Parmi le public : sur son site internet comme celui-ci, en se faisant sponsoriser, etc. Rendre l’oeuvre accessible à tous vous permettra d’acquérir des données sur l’écoute de votre musique, vous permettant de savoir ce qui plaît ou non, ce qui est à améliorer, …</p>
<p>Quand diffuser :</p>
<p>Peu de temps avant la sortie de l’oeuvre si vous avez une base de fans susceptible de réagir à la nouvelle;</p>
<p>A la sortie de l’oeuvre;</p>
<p>Dans les jours suivant la sortie de l’oeuvre pour tester la réaction à chaud du public;</p>
<p>Aux anniversaires de l’oeuvre;</p>
<p>A chaque nouvelle performance de l’oeuvre (un morceau qui passe la barre des X écoutes, X ventes de l’album sur telle plateforme, etc).</p>`,
          order: 3,
        },
        {
          title: "Storytelling",
          content: `<p><strong>Contexte</strong></p>
<p>Pour que le public accroche à l’oeuvre une fois celle-ci publiée, il est nécessaire de réaliser une phase de <strong>storytelling</strong> (Rq1) : il s’agit de bâtir une histoire autour de son oeuvre.</p>
<p>Ce travail a été réalisé sur le plan auditif tout au long de la conception de l’album. Reste à y allier le textuel et le visuel par l’élaboration de la <strong>tracklist</strong> et de la <strong>pochette</strong>, permettant à l’auteur de transmettre un message sur des plans supplémentaires au plan auditif.</p>
<p><strong>Storytelling textuel</strong></p>
<p>Il s’agit de nommer définitivement l’album et chacun de ses morceaux. Voici quelques conseils :</p>
<p><strong>Nommer un morceau</strong></p>
<p>Le titre d’un morceau peut être une phrase ou une gimmick répétée au long d’un refrain, ou une formule marquante dans le morceau qui en résume le thème;</p>
<p>Le titre d’un morceau peut ne pas être issu directement des paroles de celui-ci (en particulier s’il s’agit d’un morceau instrumental) mais plutôt constituer un intitulé des émotions que celui-ci devrait transmettre, en annoncer le thème;</p>
<p>Le titre d’un morceau peut être très percutant ou au contraire un sous-entendu, un idiome ou une parodie d’idiome, la reprise exacte ou détournée d’un proverbe, un jeu de mot, etc.</p>
<p><strong>Construire la tracklist</strong></p>
<p>Le titre de chaque morceau peut lui être donné de sorte que leur enchaînement selon la tracklist ait du sens, retranscrive le cheminement de l’album, mais cela est contraignant et se fait peu. Usuellement, chaque morceau est nommé d’après son contenu et non pas de manière à ce que la tracklist passe un message précis.</p>
<p><strong>Nommer l’album</strong></p>
<p>Le titre de l’album doit en laisser transparaître le thème ou l’annoncer pour que l’auditeur sache à quoi s’attendre et prépare son immersion dans l’oeuvre.</p>
<p><strong>Storytelling visuel</strong></p>
<p><strong>Créer une pochette </strong>(Rq2)</p>
<p>Il s’agit d’élaborer pour la pochette de l’album un visuel en accordance avec l’ambiance musicale et le thème de l’album. Pour que l’auditeur puisse pleinement se plonger dans le monde de l’album, il est important que l’artwork réalisé reprenne de manière visuelle les éléments évoqués à travers les morceaux.</p>
<p>Une pochette d’album peut être de tout style visuel : photo, bd, cartoon, peinture, abstrait, concret, …</p>
<p><strong>Créer un clip </strong>(Rq2)</p>
<p>Pour faire d’une musique une histoire à part entière, vous pouvez l’associer à un clip vidéo. De même que la pochette, il peut être de tout style graphique.</p>
<p>Créer un clip de la durée d’une musique est un lourd travail qui nécessite autant de compétences audiovisuelles que créer le morceau ne vous en a demandées de musicales. Il faut veiller à ce que les images correspondent à la musique à chaque instant du clip pour ne pas créer de décrochage entre le visuel et l’audio. Pour ne pas reléguer la musique au 2nd plan, il est bon d’entrecouper les scènes du clip de scènes de vous/votre groupe en train de jouer la musique, ou d’inclure le vous inclure directement dans les scènes du clip. Cette pratique est courante.</p>
<p>Une alternative au clip vidéo complet est la réalisation de visualizer : il s’agit de créer une séquence d’images de quelques secondes (10 à 20) répétée en boucle tout au long de la musique. Attention alors à ce que ce “mini-clip” soit assez générique pour respecter la contrainte qu’à tout moment l’image et le son aillent ensemble. En effet, répéter une séquence en boucle ne permet pas, contrairement à la réalisation d’un clip complet, de choisir scène précise pour chaque instant du morceau, d’où la nécessité que les scènes du visualizer soient assez vagues pour se marier avec chaque partie du morceau.</p>
<p><strong>Remarques</strong></p>
<p>Le travail de storytelling se construit de lui-même au fur et à mesure que vous réalisez votre album. A ce stade, il ne devrait plus que vous en rester la mise au propre;</p>
<p>Les travaux sur le plan visuel appartenant à un tout autre plan que le plan musical, vous ne serez pas en mesure de le réaliser à moins d’être un artiste graphique en plus d’être musicien. Pour ma part, je fais réaliser mes travaux graphiques par des freelancers sur Fiverr.</p>`,
          order: 4,
        },
      ],
    },
  ],
}

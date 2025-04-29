// Database degli enigmi (array di oggetti)
const riddleDatabase = [
    {
        riddle: "Ho mille volti, eppure nessuno. Parlo tutte le lingue ma non ho bocca. Tutti mi cercano, pochi mi vedono davvero. Chi sono?",
        answer: "La Verità."
    },
    {
        riddle: "A volte bianco, a volte nero, a volte utile, a volte vero.Nasce in mente, muore parlando. Che cos’è?",
        answer: "Il Pensiero"
    },
    {
        riddle: "Quando era giovane, era ignorato. Crescendo, ha cambiato il destino dei Re. Un battito può uccidere, un silenzio può salvare. È l’arma preferita di chi incanta.",
        answer: "La Parola."
    },
    {
        riddle: "Cammino senza luce, tesso senza fili, servo la Regina dove la giustizia non regna. Temuta da molti, bramata dai pochi. Chi sono?",
        answer: "La Menzogna."
    },
    {
        riddle: "Proteggo, ma posso punire. Giuro, ma posso tradire. Brillo, ma posso oscurare. Cos’è che un paladino non può perdere?",
        answer: "L’Onore."
    },
    {
        riddle: "Ride senza suono, giace senza riposo. Colleziona anime, ma non le ama. Acererak lo ha costruito",
        answer: "Il Soulmonger."
    },
    {
        riddle: "L'inizio dell'eternità. La fine di ogni fine. L'inizio di un'epoca. E la fine di ogni paese",
        answer: "lettera 'E'."
    },
    {
        riddle: "Con un occhio ho visto mondi cadere. Con una mano ho scritto la fine degli dèi, Chi sono?",
        answer: "Vecna."
    },
    {
        riddle: "Cinque teste, cinque fiamme, più fame di un esercito, più potere di un dio. Dormo nei sogni dei folli, Chi sono?",
        answer: "Tiamat."
    },
    {
        riddle: "Mi porti in mente quando lanci, sono dentro i tuoi tomi e nei tuoi canti. Senza di me, un mago non può iniziare. Cosa sono?",
        answer: "Un incantesimo."
    },
    {
        riddle: "Senza di me il guerriero è nudo.",
        answer: "L’armatura."
    },
    {
        riddle: "A me preghi, e io rispondo. Non parlo, ma ti illumino. A volte benedico, a volte punisco. Chi sono?",
        answer: "Una divinità."
    },
    {
        riddle: "Sono piccolo e veloce, ma non sottovalutarmi. Rubacchio spesso, combatto di rado. Una moneta qui, una bugia là. Chi sono?",
        answer: "Un ladro halfling."
    },
    {
        riddle: "Conquista la tigre, conquista il dragone e conquista il gigante infuriato. Conquista uomini e re. Tutti cadono vinti ai suoi piè.",
        answer: "Il Sonno."
    },
    {
        riddle: "Solo chi conosce il ciclo eterno potrà aprire il varco. Il Sole sorge prima della Stella, la Luna segue la Cometa, ma la Stella mai precede la Luna",
        answer: "I giocatori devono inserire le chiavi nelle serrature nell’ordine corretto basandosi sulle indicazioni: Il Sole prima della Stella, La Luna dopo la Cometa, La Stella mai prima della Luna. Ordine corretto: Sole → Cometa → Luna → Stella"
    },
    {
        riddle: "Cinque fratelli in eterno legame, Terra abbraccia Acqua, Fuoco sfida Aria, Etere li osserva senza fine",
        answer: "I giocatori devono attivare i simboli in coppie o sequenze che rappresentano le relazioni: ad esempio Terra e Acqua insieme, poi Fuoco e Aria, infine Etere per sbloccare la porta."
    },
    {
        riddle: "cinque cristalli di colore diverso: rosso, blu, verde, giallo e viola. Una scritta recita:, Il rosso non può stare accanto al blu, il verde è tra il giallo e il viola,il giallo non è né primo né ultimo.",
        answer: "Rosso e blu non sono vicini, Verde è in mezzo a giallo e viola, Giallo è in posizione 2, 3 o 4 (ma non 1 o 5). soluzione possibile: Rosso-Giallo-Verde-Viola-Blu."
    },
    {
        riddle: "un altare con quattro spade incrociate, ciascuna con un’incisione: 'Onore'-'Libertà'-'Coraggio'-'Ombra'.Una voce riecheggia: 'Drizzt Do’Urden giurò fedeltà a tre di questi valori, ma non al quarto. Solo chi conosce il vero spirito del ranger potrà scegliere le spade giuste'.",
        answer: "scegliere le tre spade che rappresentano i valori di Drizzt: Onore, Libertà e Coraggio. L’Ombra è il valore che Drizzt non abbraccia."
    },
    {
        riddle: "Un paladino deve scegliere tra quattro coppe, ognuna rappresenta un allineamento: Legale Buono, Neutrale Buono, Caotico Buono, Neutrale Puro. Un’iscrizione dice:'Solo la coppa che riflette la giustizia vera potrà purificare il sangue del giuramento.' ",
        answer: "I giocatori devono scegliere la coppa del Legale Buono, che incarna la vera giustizia e disciplina del paladino."
    },
    {
        riddle: "Non mangio né bevo, Ma plasmo e creo. Vivo nel cuore della montagna, Eppure servo il cuore dell’uomo. Cosa sono?",
        answer: "Il fuoco della forgia oppure la fucina."
    },
    {
        riddle: "Ti invito a entrare, ma non voglio che tu esca. La mia bocca è d’ingresso, la mia coda è trappola. Cosa sono?",
        answer: "Il dungeon stesso."
    },
    {
        riddle: "Cammino senza respiro, vedo senza occhi, obbedisco senza volontà. Chi sono?",
        answer: "Uno scheletro animato"
    },
    {
        riddle: "Dormo su oro, ma non compro. Parlo tutte le lingue, ma non ascolto. Vivo più del tempo. Chi sono?",
        answer: "un Drago."
    },
    {
        riddle: "Non cammino, ma attraverso terre e mari. Non parlo, ma guido chi ascolta. Chi sono?”",
        answer: "La mappa."
    },
    {
        riddle: "",
        answer: ""
    },
];


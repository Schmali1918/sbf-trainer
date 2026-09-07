// ============================================
// Fragenkatalog Basis (Fragen 1-72)
// Antwort a ist immer die richtige Antwort
// ============================================

const fragenBasis = [
  // Frage 1
  {
    id: "basis_1",
    nummer: 1,
    frage: "Was ist zu tun, wenn vor Antritt der Fahrt nicht feststeht, wer Schiffsführer ist?",
    bild: null,
    antworten: [
      "Der verantwortliche Schiffsführer muss bestimmt werden.",
      "Der verantwortliche Schiffsführer muss gewählt werden.",
      "Ein Inhaber eines Sportbootführerscheins muss die Fahrzeugführung übernehmen.",
      "Ein Inhaber eines Sportbootführerscheins muss die Verantwortung übernehmen."
    ]
  },
  // Frage 2
  {
    id: "basis_2",
    nummer: 2,
    frage: "In welchen Fällen darf weder ein Sportboot geführt noch dessen Kurs oder Geschwindigkeit selbstständig bestimmt werden?",
    bild: null,
    antworten: [
      "Wenn man infolge körperlicher oder geistiger Mängel oder infolge des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung behindert ist oder wenn eine Blutalkoholkonzentration von 0,5 ‰ oder mehr im Körper vorhanden ist.",
      "Wenn man infolge körperlicher oder geistiger Mängel oder infolge des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung behindert ist oder wenn eine Blutalkoholkonzentration von 0,8 ‰ oder mehr im Körper vorhanden ist.",
      "Wenn man infolge körperlicher oder geistiger Mängel oder infolge des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung behindert ist oder wenn eine Blutalkoholkonzentration von 1,0 ‰ oder mehr im Körper vorhanden ist.",
      "Wenn man infolge körperlicher oder geistiger Mängel oder infolge des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung behindert ist oder wenn eine Blutalkoholkonzentration von 0,3 ‰ oder mehr im Körper vorhanden ist."
    ]
  },
  // Frage 3
  {
    id: "basis_3",
    nummer: 3,
    frage: "Wann ist ein Fahrzeug in Fahrt?",
    bild: null,
    antworten: [
      "Wenn es weder vor Anker liegt noch an Land festgemacht ist noch auf Grund sitzt.",
      "Wenn es weder vor Anker liegt noch an Land festgemacht ist noch Fahrt über Grund macht.",
      "Wenn es weder auf Grund sitzt noch vor Anker liegt noch manövrierbehindert oder manövrierunfähig ist.",
      "Wenn es weder an Land festgemacht ist noch vor Anker liegt noch Fahrt durchs Wasser macht."
    ]
  },
  // Frage 4 - Schallsignal (kurzer Ton)
  {
    id: "basis_4",
    nummer: 4,
    frage: "Wie lang ist die Dauer eines kurzen Tons (·)?",
    bild: null,
    antworten: [
      "Etwa 1 Sekunde.",
      "Etwa 2 Sekunden.",
      "Weniger als 1 Sekunde.",
      "Weniger als 4 Sekunden."
    ]
  },
  // Frage 5 - Schallsignal (langer Ton)
  {
    id: "basis_5",
    nummer: 5,
    frage: "Wie lang ist die Dauer eines langen Tons (–)?",
    bild: null,
    antworten: [
      "Etwa 4 - 6 Sekunden.",
      "Etwa 2 - 6 Sekunden.",
      "Etwa 1 - 2 Sekunden.",
      "Etwa 6 - 8 Sekunden."
    ]
  },
  // Frage 6
  {
    id: "basis_6",
    nummer: 6,
    frage: "Wann gilt ein Fahrzeug unter Segel als Maschinenfahrzeug?",
    bild: null,
    antworten: [
      "Wenn es gleichzeitig mit Maschinenkraft fährt.",
      "Wenn es mit einer Antriebsmaschine ausgerüstet ist.",
      "Wenn es durch das Segeln keine Fahrt durchs Wasser macht.",
      "Wenn es durch das Segeln keine Fahrt über Grund macht."
    ]
  },
  // Frage 7
  {
    id: "basis_7",
    nummer: 7,
    frage: "Welches Signal führt ein Fahrzeug unter Segel, das als Maschinenfahrzeug gilt, zusätzlich am Tage?",
    bild: null,
    antworten: [
      "Einen schwarzen Kegel, Spitze unten.",
      "Einen schwarzen Kegel, Spitze oben.",
      "Einen schwarzen Rhombus.",
      "Zwei schwarze Bälle senkrecht übereinander."
    ]
  },
  // Frage 8
  {
    id: "basis_8",
    nummer: 8,
    frage: "Welche Seite wird als Luvseite bezeichnet?",
    bild: null,
    antworten: [
      "Die dem Wind zugekehrte Seite.",
      "Die dem Wind abgewandte Seite.",
      "Die Seite in Fahrtrichtung rechts.",
      "Die Seite in Fahrtrichtung links."
    ]
  },
  // Frage 9
  {
    id: "basis_9",
    nummer: 9,
    frage: "Welche Seite wird als Leeseite bezeichnet?",
    bild: null,
    antworten: [
      "Die dem Wind abgewandte Seite.",
      "Die dem Wind zugekehrte Seite.",
      "Die Seite in Fahrtrichtung rechts.",
      "Die Seite in Fahrtrichtung links."
    ]
  },
  // Frage 10
  {
    id: "basis_10",
    nummer: 10,
    frage: "Wann müssen die Lichter von Fahrzeugen geführt oder gezeigt werden?",
    bild: null,
    antworten: [
      "Von Sonnenuntergang bis Sonnenaufgang und bei verminderter Sicht.",
      "Von Sonnenaufgang bis Sonnenuntergang und bei verminderter Sicht.",
      "Von abends 18:00 Uhr bis morgens 06:00 Uhr und bei verminderter Sicht.",
      "Bei Dunkelheit, schlechtem Wetter und verminderter Sicht."
    ]
  },
  // Frage 11
  {
    id: "basis_11",
    nummer: 11,
    frage: "Wozu dient die Lichterführung?",
    bild: null,
    antworten: [
      "Sie zeigt Fahrtrichtung und Lage eines Fahrzeugs an.",
      "Sie zeigt Kurs und Geschwindigkeit eines Fahrzeugs an.",
      "Sie zeigt Fahrtrichtung und Position eines Fahrzeugs an.",
      "Sie zeigt Fahrtrichtung und Kurs eines Fahrzeugs an."
    ]
  },
  // Frage 12
  {
    id: "basis_12",
    nummer: 12,
    frage: "Was für eine Laterne kann ein Segelfahrzeug von weniger als 20 m Länge anstelle der Seitenlichter und des Hecklichtes führen?",
    bild: null,
    antworten: [
      "Eine Dreifarbenlaterne an oder nahe der Mastspitze.",
      "Eine Zweifarbenlaterne an gut sichtbarer Stelle.",
      "Eine Dreifarbenlaterne an gut sichtbarer Stelle.",
      "Eine Zweifarbenlaterne an oder nahe der Mastspitze."
    ]
  },
  // Frage 13
  {
    id: "basis_13",
    nummer: 13,
    frage: "Welche Lichter muss ein Fahrzeug unter Segel, das gleichzeitig mit Maschinenkraft fährt, führen?",
    bild: null,
    antworten: [
      "Die für ein Maschinenfahrzeug vorgeschriebenen Lichter.",
      "Die für ein Segelfahrzeug vorgeschriebenen Lichter.",
      "Zwei rote Rundumlichter senkrecht übereinander.",
      "Seitenlichter rot und grün und ein rotes Rundumlicht."
    ]
  },
  // Frage 14
  {
    id: "basis_14",
    nummer: 14,
    frage: "Wie weichen zwei Motorboote aus, die sich auf entgegengesetzten Kursen nähern?",
    bild: null,
    antworten: [
      "Jedes Fahrzeug muss seinen Kurs nach Steuerbord ändern.",
      "Jedes Fahrzeug muss seinen Kurs nach Backbord ändern.",
      "Es muss das luwärtige Fahrzeug dem leewärtigen Fahrzeug ausweichen.",
      "Es muss das leewärtige Fahrzeug dem luwärtigen Fahrzeug ausweichen."
    ]
  },
  // Frage 15
  {
    id: "basis_15",
    nummer: 15,
    frage: "Zwei Motorboote nähern sich auf kreuzenden Kursen. Es besteht die Gefahr eines Zusammenstoßes. Wer ist ausweichpflichtig?",
    bild: null,
    antworten: [
      "Dasjenige Fahrzeug muss ausweichen, welches das Andere an seiner Steuerbordseite hat.",
      "Dasjenige Fahrzeug muss ausweichen, welches das Andere an seiner Backbordseite hat.",
      "Es muss das luwärtige Fahrzeug dem leewärtigen Fahrzeug ausweichen.",
      "Es muss das leewärtige Fahrzeug dem luwärtigen Fahrzeug ausweichen."
    ]
  },
  // Frage 16 - Schallsignal
  {
    id: "basis_16",
    nummer: 16,
    frage: "Welche Bedeutung hat folgendes Schallsignal? · · · · · · · · ·",
    bild: null,
    antworten: [
      "Bleib-weg-Signal, Gefahrenbereich sofort verlassen.",
      "Allgemeines Gefahr- und Warnsignal.",
      "Ankerlieger über 100 m Länge.",
      "Manövrierbehinderter Schleppverband über 200 m Länge."
    ]
  },
  // Frage 17 - Tafelzeichen
  {
    id: "basis_17",
    nummer: 17,
    frage: "Welche Bedeutung hat folgendes Tafelzeichen?",
    bild: 17,
    antworten: [
      "Überholverbot.",
      "Begegnungsverbot.",
      "Überholverbot für Fahrzeuge unter 20 m Länge.",
      "Begegnungsverbot für Fahrzeuge über 20 m Länge."
    ]
  },
  // Frage 18 - Tafelzeichen
  {
    id: "basis_18",
    nummer: 18,
    frage: "Welche Bedeutung hat folgendes Tafelzeichen?",
    bild: 18,
    antworten: [
      "Begegnungsverbot an einer Engstelle.",
      "Begegnungsverbot für Fahrzeuge über 12 m Länge.",
      "Überholverbot; mit Gegenverkehr muss gerechnet werden.",
      "Überholverbot für alle Fahrzeuge."
    ]
  },
  // Frage 19 - Tafelzeichen
  {
    id: "basis_19",
    nummer: 19,
    frage: "Welche Bedeutung hat folgendes Tafelzeichen?",
    bild: 19,
    antworten: [
      "Sog und Wellenschlag vermeiden.",
      "Gefährderer Strandbereich, Überspülungsgefahr; Mindestpassierabstand 100 m.",
      "Wasserstraße, die jederzeit sicher befahren werden kann; keine Gefahr durch Seegang.",
      "Wasserstraße, die nicht jederzeit sicher befahren werden kann; Gefahr durch Seegang."
    ]
  },
  // Frage 20 - Tafelzeichen
  {
    id: "basis_20",
    nummer: 20,
    frage: "Welche Bedeutung hat folgendes Tafelzeichen?",
    bild: 20,
    antworten: [
      "Mindestabstand in Metern, der in der nachfolgenden Strecke vom Aufstellungsort der Tafel an eingehalten werden muss.",
      "Maximalgeschwindigkeit in km/h, die auf der in Fahrtrichtung rechten Fahrwasserseite nicht überschritten werden darf.",
      "Maximalabstand in Metern, der in der nachfolgenden Strecke vom Aufstellungsort der Tafel an eingehalten werden muss.",
      "Verengung des Fahrwassers auf 40 m."
    ]
  },
  // Frage 21 - Tafelzeichen
  {
    id: "basis_21",
    nummer: 21,
    frage: "Welche Bedeutung hat folgendes Tafelzeichen?",
    bild: 21,
    antworten: [
      "Haltegebot vor beweglichen Brücken, Sperrwerken und Schleusen.",
      "Dauernde Sperrung einer Teilstrecke der Wasserstraße.",
      "Gebot zur Abgabe eines langen Signaltons.",
      "Weiterfahrt für Sportfahrzeuge verboten."
    ]
  },
  // Frage 22 - Tafelzeichen
  {
    id: "basis_22",
    nummer: 22,
    frage: "Welche Bedeutung hat folgendes Tafelzeichen?",
    bild: 22,
    antworten: [
      "Ankern verboten für alle Fahrzeuge.",
      "Ankern verboten für Kleinfahrzeuge unter 12 m Länge.",
      "Ankern verboten für Kleinfahrzeuge ab 12 m Länge.",
      "Ankern und Festmachen verboten."
    ]
  },
  // Frage 23 - Tafelzeichen
  {
    id: "basis_23",
    nummer: 23,
    frage: "Welche Bedeutung haben folgende Tafelzeichen?",
    bild: 23,
    antworten: [
      "Festmache- und Liegeverbot.",
      "Festmache- und Liegeverbot für Sportboote.",
      "Festmache- und Liegeverbot für Sportboote über 12 m Länge.",
      "Festmache- und Liegeverbot für gewerbliche Schiffe."
    ]
  },
  // Frage 24 - Schallsignal
  {
    id: "basis_24",
    nummer: 24,
    frage: "Welche Bedeutung hat folgendes Schallsignal? –",
    bild: null,
    antworten: [
      "Abgabe eines langen Tons.",
      "Abgabe eines kurzen Tons.",
      "Abgabe von zwei langen Tönen.",
      "Abgabe eines kurzen und eines langen Tons."
    ]
  },
  // Frage 25 - Tafelzeichen
  {
    id: "basis_25",
    nummer: 25,
    frage: "Welche Bedeutung haben folgende Tafelzeichen?",
    bild: 25,
    antworten: [
      "Wasserflächen, auf denen mit Wasserski oder Wassermotorrädern gefahren werden darf.",
      "Genehmigungspflichtige Übungsstrecke für das Fahren mit Wasserski oder Wassermotorrädern.",
      "Fahren mit Wasserski oder Wassermotorrädern erlaubt. Wasserskiläufer und Wassermotorräder haben Vorfahrt.",
      "Genehmigungsfreie Übungsstrecke für das Fahren mit Wasserski oder Wassermotorrädern."
    ]
  },
  // Frage 26 - Tafelzeichen
  {
    id: "basis_26",
    nummer: 26,
    frage: "Welche Bedeutung hat folgendes Tafelzeichen?",
    bild: 26,
    antworten: [
      "Ende einer Gebots- oder Verbotsstrecke.",
      "Streckenabschnitt für eine nicht frei fahrende Fähre.",
      "Queren des Fahrwassers ist gestattet.",
      "Wechseln der Fahrwasserseite ist gestattet."
    ]
  },
  // Frage 27 - Tafelzeichen
  {
    id: "basis_27",
    nummer: 27,
    frage: "Welche Bedeutung hat folgendes Tafelzeichen?",
    bild: 27,
    antworten: [
      "Verbot der Durchfahrt und Sperrung der Schifffahrt.",
      "Verbot der Durchfahrt und Sperrung für Kleinfahrzeuge.",
      "Verbot der Durchfahrt, jedoch für Kleinfahrzeuge ohne laufende Antriebsmaschine befahrbar.",
      "Verbot der Durchfahrt, jedoch für Kleinfahrzeuge ohne Antriebsmaschine befahrbar."
    ]
  },
  // Frage 28
  {
    id: "basis_28",
    nummer: 28,
    frage: "Welche Bedeutung haben folgende Schifffahrtszeichen?",
    bild: 28,
    antworten: [
      "Anlage dauerhaft gesperrt.",
      "Brücke, Sperrwerk oder Schleuse geschlossen.",
      "Stoppsignal für alle Fahrzeuge.",
      "Außergewöhnliche Schifffahrtsbehinderung."
    ]
  },
  // Frage 29
  {
    id: "basis_29",
    nummer: 29,
    frage: "Welche Bedeutung haben folgende Schifffahrtszeichen?",
    bild: 29,
    antworten: [
      "Anlage dauerhaft gesperrt.",
      "Brücke, Sperrwerk oder Schleuse geschlossen.",
      "Stoppsignal für alle Fahrzeuge.",
      "Außergewöhnliche Schifffahrtsbehinderung."
    ]
  },
  // Frage 30
  {
    id: "basis_30",
    nummer: 30,
    frage: "Was bedeuten diese Lichter vor einer Schleuse?",
    bild: 30,
    antworten: [
      "Einfahrt frei, Gegenverkehr gesperrt.",
      "Einfahrt frei, Schleusentor öffnet.",
      "Schleuse in Betrieb, auf Einfahrtsignal gemäß Reihenfolge warten.",
      "Schleuse in Betrieb, auf Ausfahrtsignal gemäß Reihenfolge warten."
    ]
  },
  // Frage 31
  {
    id: "basis_31",
    nummer: 31,
    frage: "Welches Merkblatt enthält Hinweise für das Verhalten zum Schutz seltener Tiere und Pflanzen sowie zur Reinhaltung der Gewässer?",
    bild: null,
    antworten: [
      "Die 10 goldenen Regeln für Wassersportler.",
      "Die 15 goldenen Regeln für Wassersportler.",
      "Die 10 Grundregeln für Wassersportler.",
      "Die 15 Verhaltensregeln für Wassersportler."
    ]
  },
  // Frage 32
  {
    id: "basis_32",
    nummer: 32,
    frage: "Wie kann mitgeholfen werden, die Lebensmöglichkeiten der Pflanzen- und Tierwelt in Gewässern und Feuchtgebieten zu bewahren und zu fördern?",
    bild: null,
    antworten: [
      "Durch umweltbewusstes Verhalten und Beachtung der 'Zehn goldenen Regeln für das Verhalten von Wassersportlern in der Natur'.",
      "Durch umweltbewusstes Verhalten und Beachtung der 'Zehn Grundregeln für den Wassersport'.",
      "Durch umsichtiges Verhalten und Beachtung der Verkehrsvorschriften.",
      "Durch vorausschauendes Fahren und Ausweichen entsprechend der Verkehrsvorschriften."
    ]
  },
  // Frage 33
  {
    id: "basis_33",
    nummer: 33,
    frage: "Warum sollte man sich von Schilf- und Röhrichtzonen sowie von dicht bewachsenen Uferzonen möglichst weit fernhalten?",
    bild: null,
    antworten: [
      "Weil diese Zonen vielfach Rast- und Brutplätze besonders schutzwürdiger Vögel oder Fischlaichplätze sind.",
      "Weil in diesen Zonen die Gefahr von Grundberührungen besteht.",
      "Weil durch die Pflanzen der Propeller blockiert werden könnte.",
      "Weil in diesen Zonen badende Personen schwer zu erkennen sind."
    ]
  },
  // Frage 34
  {
    id: "basis_34",
    nummer: 34,
    frage: "Warum soll ein kleines Fahrzeug nicht dicht an ein großes in Fahrt befindliches Fahrzeug heranfahren?",
    bild: null,
    antworten: [
      "Es kann durch dessen Bug- oder Heckwelle kentern oder durch den Sog mit dem Fahrzeug kollidieren.",
      "Dichtes Heranfahren ist ein Verstoß gegen die Grundregeln für das Verhalten im Verkehr.",
      "Da es dem großen in Fahrt befindlichen Fahrzeug sonst nicht ausweichen kann.",
      "Es kann durch dessen Bug- oder Heckwelle Seeschlag erleiden."
    ]
  },
  // Frage 35
  {
    id: "basis_35",
    nummer: 35,
    frage: "Warum soll man möglichst gegen Strom und Wind anlegen?",
    bild: null,
    antworten: [
      "Weil sich das Fahrzeug dabei sicherer manövrieren lässt.",
      "Weil dadurch Sog und Wellenschlag vermieden wird.",
      "Weil dadurch Einflüsse von Wellen und Wassertiefe ausgeglichen werden.",
      "Weil dies die Steuerwirkung der Schraube erhöht."
    ]
  },
  // Frage 36
  {
    id: "basis_36",
    nummer: 36,
    frage: "Wie verhält man sich beim Begegnen mit anderen Fahrzeugen in einem engen Fahrwasser?",
    bild: null,
    antworten: [
      "Geschwindigkeit herabsetzen und ausreichenden Passierabstand halten.",
      "Geschwindigkeit erhöhen, um das Begegnungsmanöver zügig durchzuführen.",
      "Das gegen den Strom fahrende Fahrzeug ist ausweichpflichtig.",
      "Das mit dem Strom fahrende Fahrzeug hat aufzustoppen."
    ]
  },
  // Frage 37
  {
    id: "basis_37",
    nummer: 37,
    frage: "Welche Gefahren können entstehen, wenn ein kleines von einem größeren Fahrzeug überholt wird?",
    bild: null,
    antworten: [
      "Das kleinere Fahrzeug kann durch Stau, Sog oder Schwell aus dem Kurs laufen und kollidieren oder querschlagen, in flachen Gewässern auf Grund laufen.",
      "Das größere Fahrzeug kann durch Stau, Sog oder Schwell aus dem Kurs laufen und kollidieren oder querschlagen, in flachen Gewässern auf Grund laufen.",
      "Das kleinere Fahrzeug kann durch Stau, Sog oder Schwell aus dem Kurs laufen und kollidieren oder kentern, in flachen Gewässern extrem versetzt werden.",
      "Das größere Fahrzeug kann durch Wellenbildung aus dem Kurs laufen und kollidieren oder querschlagen, in flachen Gewässern auf Grund laufen."
    ]
  },
  // Frage 38
  {
    id: "basis_38",
    nummer: 38,
    frage: "Wo finden Sie Informationen über umweltfreundliche Farben, Lacke und Antifouling-Beschichtungen für Ihr Boot?",
    bild: null,
    antworten: [
      "Beim Umweltbundesamt.",
      "Beim Bundesministerium für Digitales und Verkehr.",
      "In der Sportbootführerscheinverordnung.",
      "In der Sportbootvermietungsverordnung."
    ]
  },
  // Frage 39
  {
    id: "basis_39",
    nummer: 39,
    frage: "Woran kann man erkennen, ob der Anker hält?",
    bild: null,
    antworten: [
      "Wenn beim Handauflegen auf die Ankerkette oder -leine kein Rucken zu verspüren ist und sich die Ankerpeilung nicht ändert.",
      "Wenn Ankerkette oder -leine nicht vibrieren und sich der anliegende Magnetkompasskurs nicht verändert.",
      "Wenn beim Handauflegen auf die Ankerkette oder -leine kein Rucken zu verspüren ist und das Fahrzeug nicht schwojt.",
      "Wenn beim Handauflegen auf die Ankerkette oder -leine kein Rucken zu verspüren ist und sich die Ankerpeilung ändert."
    ]
  },
  // Frage 40
  {
    id: "basis_40",
    nummer: 40,
    frage: "Welches ist der günstigste Anlaufwinkel beim Anlegen?",
    bild: null,
    antworten: [
      "Ein möglichst spitzer Winkel.",
      "Ein Winkel von 90° bis 100°.",
      "Ein möglichst stumpfer Winkel.",
      "Ein Winkel von 60° bis 70°."
    ]
  },
  // Frage 41
  {
    id: "basis_41",
    nummer: 41,
    frage: "Wie verhält sich im Allgemeinen das Schiff im Rückwärtsgang bei einem rechtsdrehenden Propeller?",
    bild: null,
    antworten: [
      "Das Heck dreht nach Backbord.",
      "Das Heck dreht nach Steuerbord.",
      "Der Kurs des Schiffes ändert sich nicht.",
      "Der Bug dreht nach Backbord."
    ]
  },
  // Frage 42
  {
    id: "basis_42",
    nummer: 42,
    frage: "Was bewirkt der Quickstopp?",
    bild: null,
    antworten: [
      "Unterbrechung von Zündkontakt bzw. Kraftstoffzufuhr.",
      "Automatisches Anlassen des Motors.",
      "Kurze Unterbrechung des Motorlaufs.",
      "Automatische Schubumkehr."
    ]
  },
  // Frage 43
  {
    id: "basis_43",
    nummer: 43,
    frage: "Was ist zu unternehmen, wenn Treibstoff oder Öl in die Bilge gelangt?",
    bild: null,
    antworten: [
      "Mit Lappen aufnehmen und umweltgerecht entsorgen.",
      "Räume lüften und abwarten.",
      "Gleichmäßig verteilen.",
      "Mit entsprechendem Mittel neutralisieren."
    ]
  },
  // Frage 44
  {
    id: "basis_44",
    nummer: 44,
    frage: "Was ist unter einem rechtsdrehenden Propeller zu verstehen?",
    bild: null,
    antworten: [
      "Von achtern gesehen in Vorausfahrt Drehung des Propellers im Uhrzeigersinn.",
      "Von vorne gesehen in Vorausfahrt Drehung des Propellers im Uhrzeigersinn.",
      "Von achtern gesehen in Vorausfahrt Drehung des Propellers gegen den Uhrzeigersinn.",
      "Von vorne gesehen in Rückwärtsfahrt Drehung des Propellers gegen den Uhrzeigersinn."
    ]
  },
  // Frage 45
  {
    id: "basis_45",
    nummer: 45,
    frage: "Was ist unter einem linksdrehenden Propeller zu verstehen?",
    bild: null,
    antworten: [
      "Von achtern gesehen in Vorausfahrt Drehung des Propellers gegen den Uhrzeigersinn.",
      "Von vorne gesehen in Vorausfahrt Drehung des Propellers gegen den Uhrzeigersinn.",
      "Von achtern gesehen in Vorausfahrt Drehung des Propellers im Uhrzeigersinn.",
      "Von vorne gesehen in Rückwärtsfahrt Drehung des Propellers im Uhrzeigersinn."
    ]
  },
  // Frage 46
  {
    id: "basis_46",
    nummer: 46,
    frage: "Was ist unter der indirekten Ruderwirkung (Radeffekt) des Propellers zu verstehen?",
    bild: null,
    antworten: [
      "Das seitliche Versetzen des Hecks.",
      "Das Versetzen nach vorne.",
      "Das Versetzen nach hinten.",
      "Das seitliche Versetzen des Bugs."
    ]
  },
  // Frage 47
  {
    id: "basis_47",
    nummer: 47,
    frage: "Weshalb ist die Kenntnis der Propellerdrehrichtung von Bedeutung?",
    bild: null,
    antworten: [
      "Sie hilft beim Manövrieren.",
      "Sie hilft beim Kurshalten.",
      "Sie hilft beim Überholen.",
      "Sie hilft beim Begegnen."
    ]
  },
  // Frage 48
  {
    id: "basis_48",
    nummer: 48,
    frage: "Welche Anlegesite ist mit rechtsdrehendem Propeller empfehlenswert und warum?",
    bild: null,
    antworten: [
      "Die Backbordseite - der Radeffekt zieht das Fahrzeug an die Pier.",
      "Die Steuerbordseite - der Radeffekt zieht das Fahrzeug an die Pier.",
      "Die Steuerbord- oder Backbordseite je nach Ruderlage.",
      "Es gibt keine empfehlenswerte Anlegesite."
    ]
  },
  // Frage 49
  {
    id: "basis_49",
    nummer: 49,
    frage: "Was muss beim Tanken beachtet werden?",
    bild: null,
    antworten: [
      "Motor abstellen, keine elektrischen Schalter betätigen, Vorbereitung gegen das Überlaufen von Kraftstoff treffen, kein offenes Feuer.",
      "Motor in Leerlaufstellung, keine elektrischen Schalter betätigen, Vorbereitung gegen das Überlaufen von Kraftstoff treffen, kein offenes Feuer.",
      "Fenster schließen, keine elektrischen Schalter betätigen, Vorbereitung gegen das Überlaufen von Kraftstoff treffen, kein offenes Feuer.",
      "Motor abstellen, Feuerlöscher bereithalten, Vorbereitung gegen das Überlaufen von Kraftstoff treffen, kein offenes Feuer."
    ]
  },
  // Frage 50
  {
    id: "basis_50",
    nummer: 50,
    frage: "Wodurch wird bei einem Fahrzeug mit Außenbordmotor und ohne Ruderanlage die Ruderwirkung erzielt?",
    bild: null,
    antworten: [
      "Durch Schraubenstrom und Richtung des Propellers.",
      "Durch Schraubenstrom und Anstellwinkel des Propellers.",
      "Durch den Schraubenwiderstand und Anstellwinkel des Propellers.",
      "Durch den Schraubenwiderstand und Richtung des Propellers."
    ]
  },
  // Frage 51
  {
    id: "basis_51",
    nummer: 51,
    frage: "Weshalb setzt bei einem Fahrzeug mit Einbaumaschine und starrer Welle bei Aufnahme der Rückwärtsfahrt die Ruderwirkung erst relativ spät ein?",
    bild: null,
    antworten: [
      "Weil sie erst mit Anströmung des Ruderblattes einsetzt.",
      "Weil sich durch den Radefekt ein Unterdruck am Propeller entwickelt.",
      "Durch den Abstand von Propeller und Ruderblatt.",
      "Weil sich durch den Radefekt ein Unterdruck am Ruder entwickelt."
    ]
  },
  // Frage 52
  {
    id: "basis_52",
    nummer: 52,
    frage: "Während der Fahrt sollte die Maschinenanlage ständig überwacht werden. Worauf muss besonders geachtet werden?",
    bild: null,
    antworten: [
      "Motortemperatur, Öldruck, Ladekontrolle.",
      "Kühlwasseraustritt, Drehzahlmesser, Keilriemenspannung.",
      "Schraubendrehzahl, Getriebeöltemperatur, Öldruck.",
      "Druck der Einspritzpumpe, Impellerpumpe, Ölpumpe."
    ]
  },
  // Frage 53
  {
    id: "basis_53",
    nummer: 53,
    frage: "Die Temperatur der Antriebsmaschine überschreitet die zulässigen Grenzwerte. Was könnte die mögliche Ursache sein?",
    bild: null,
    antworten: [
      "Defektes Thermostat, defekte Impellerpumpe, geschlossenes Seeventil, zu niedriger Kühlwasserstand.",
      "Zu viel Motoröl, defekte Impellerpumpe, geschlossenes Seeventil, zu niedriger Kühlwasserstand.",
      "Defektes Thermostat, defekte Impellerpumpe, geschlossenes Seeventil, zu hohe Batteriespannung.",
      "Defektes Thermostat, defekte Kupplung, geschlossenes Seeventil, zu niedriger Kühlwasserstand."
    ]
  },
  // Frage 54
  {
    id: "basis_54",
    nummer: 54,
    frage: "Die Ladekontrolllampe erlischt nach dem Starten nicht. Was könnte die mögliche Ursache sein?",
    bild: null,
    antworten: [
      "Lichtmaschine bzw. Regler der Lichtmaschine defekt.",
      "Zu hohe Motordrehzahl.",
      "Keilriemen gerissen und hoher Stromverbrauch.",
      "Anlasser ist nach dem Starten ausgefallen."
    ]
  },
  // Frage 55
  {
    id: "basis_55",
    nummer: 55,
    frage: "Die Ölkontrollleuchte leuchtet nach dem Starten weiter. Was könnte die mögliche Ursache sein?",
    bild: null,
    antworten: [
      "Druckschalter bzw. Öldruckpumpe defekt.",
      "Zu viel Motoröl im Motor.",
      "FI-Schalter defekt.",
      "Zu hohe Motordrehzahl."
    ]
  },
  // Frage 56
  {
    id: "basis_56",
    nummer: 56,
    frage: "Der Motor ist gestartet worden. Was kann die Ursache sein, wenn nach dem Einkuppeln der Antriebswelle der Motor stehenbleibt?",
    bild: null,
    antworten: [
      "Blockierter Propeller.",
      "Blockierte Kraftstoffzufuhr.",
      "Verschmutzter Ölfilter.",
      "Verschmutzter Luftfilter."
    ]
  },
  // Frage 57
  {
    id: "basis_57",
    nummer: 57,
    frage: "Ein Außenborder mit gefülltem Tank bleibt während der Fahrt stehen. Was könnten die Ursachen sein?",
    bild: null,
    antworten: [
      "Belüftungsschraube geschlossen; verstopfte Kraftstoffleitung.",
      "Ansaugdüsen zu groß bzw. zu klein.",
      "Tankdeckel ist offen.",
      "Schraube an der Welle lose."
    ]
  },
  // Frage 58
  {
    id: "basis_58",
    nummer: 58,
    frage: "Welche Veröffentlichungen enthalten wichtige Regeln und Tipps für Wassersportler, Empfehlungen zur Ausrüstung von Sportbooten sowie Hinweise zu umweltgerechtem Verhalten auf dem Wasser?",
    bild: null,
    antworten: [
      "Nautische Publikationen wie 'Sicherheit auf dem Wasser' und 'Sicher auf See'.",
      "Verordnung über die Sicherung der Seefahrt und nautische Publikationen wie 'Sicher auf See'.",
      "Nautische Publikation wie 'Sicherheit auf dem Wasser' und Internationales Signalbuch.",
      "Internationales Signalbuch und Verordnung über die Sicherung der Seefahrt."
    ]
  },
  // Frage 59
  {
    id: "basis_59",
    nummer: 59,
    frage: "Unter welchen Voraussetzungen darf ein Sportboot mit Elektromotor ohne Fahrerlaubnis geführt werden?",
    bild: null,
    antworten: [
      "Die Antriebsleistung beträgt höchstens 7,5 Kilowatt Betriebsart S1 (Dauerbetrieb).",
      "Es darf immer ohne Fahrerlaubnis geführt werden, unabhängig von der Antriebsleistung.",
      "Bis zu einer Antriebsleistung von 11,03 Kilowatt Betriebsart S1 (Dauerbetrieb).",
      "Es darf nie ohne Fahrerlaubnis geführt werden, unabhängig von der Antriebsleistung."
    ]
  },
  // Frage 60
  {
    id: "basis_60",
    nummer: 60,
    frage: "Welche Vorkehrungen sind für das längere Verlassen des Fahrzeugs zu treffen?",
    bild: null,
    antworten: [
      "Alle Seeventile schließen und den Hauptschalter des Bordnetzes ausschalten.",
      "Kraftstoff- und Wassertank auffüllen und das Bordnetz aufladen.",
      "Tagestank schließen und Kraftstofffilter entwässern.",
      "Fahrzeug seefest hinterlassen und den Hafenmeister verständigen."
    ]
  },
  // Frage 61
  {
    id: "basis_61",
    nummer: 61,
    frage: "Wie ist ein enges Gewässer zu befahren, wenn man sich am Ufer festgemachten Fahrzeugen nähert?",
    bild: null,
    antworten: [
      "Verringerung der Geschwindigkeit, um schädlichen Sog und Wellenschlag zu vermeiden.",
      "Beibehaltung der Geschwindigkeit, um durch Gleitfahrt schädlichen Sog und Wellenschlag auszuschließen.",
      "Verringerung der Geschwindigkeit und nötigenfalls vom Rechtsfahrgebot abweichen.",
      "Auf Höhe der festgemachten Fahrzeuge aufstoppen und überprüfen, dass kein Dritter behindert oder geschädigt wird."
    ]
  },
  // Frage 62
  {
    id: "basis_62",
    nummer: 62,
    frage: "Wo sollen die Gasbehälter einer Flüssiggasanlage gelagert werden?",
    bild: null,
    antworten: [
      "Möglichst an Deck, geschützt vor Sonneneinstrahlung, sonst in einem besonders abgeschlossenen Raum für Gasbehälter, der in Bodenhöhe eine Öffnung nach außenbords hat.",
      "Möglichst unten im Schiff, geschützt vor Sonneneinstrahlung, sonst in einem besonders abgeschlossenen Raum für Gasbehälter, der in Bodenhöhe eine Öffnung nach außenbords hat.",
      "Möglichst auf dem Vorschiff, geschützt vor Sonneneinstrahlung, sonst in einem besonders abgeschlossenen Raum für Gasbehälter, der in Bodenhöhe eine Öffnung nach außenbords hat.",
      "Möglichst an Deck, geschützt vor Sonneneinstrahlung, sonst in einem besonders abgeschlossenen Raum für Gasbehälter, der oben belüftet ist."
    ]
  },
  // Frage 63
  {
    id: "basis_63",
    nummer: 63,
    frage: "Warum sind die Flüssiggase Propan und Butan an Bord besonders gefährlich?",
    bild: null,
    antworten: [
      "Beide Gase sind schwerer als Luft und bilden mit Luft ein explosives Gemisch.",
      "Beide Gase sind leichter als Luft und bilden mit Luft ein explosives Gemisch.",
      "Beide Gase sind schwerer als Wasser und bilden mit Wasser ein explosives Gemisch.",
      "Beide Gase sind schwerer als Luft und bilden mit Wasser ein explosives Gemisch."
    ]
  },
  // Frage 64
  {
    id: "basis_64",
    nummer: 64,
    frage: "Was ist zu tun, wenn Flüssiggas in das Innere des Bootes gelangt?",
    bild: null,
    antworten: [
      "Gaszuführung absperren und für Lüftung sorgen. Außerdem keine elektrischen Schalter betätigen und keinen Funk und keine Mobiltelefone benutzen.",
      "Gasleitung entleeren und für Lüftung sorgen. Außerdem keine elektrischen Schalter betätigen und keine Telefone benutzen.",
      "Gaszuführung absperren und für Lüftung sorgen. Außerdem keine elektrischen Schalter betätigen und per Telefon Hilfe holen.",
      "Gasleitung entleeren und die Gasfreiheit mit dem Feuerzeug prüfen sowie über Funk oder Mobiltelefon Hilfe anfordern."
    ]
  },
  // Frage 65
  {
    id: "basis_65",
    nummer: 65,
    frage: "Was ist vor Inbetriebnahme einer Flüssiggasanlage zu prüfen?",
    bild: null,
    antworten: [
      "Die Anlage muss abgenommen sein, Leitungen und Anschlüsse müssen dicht sein. Haupthahn und andere Absperrventile sind zu öffnen.",
      "Die Anlage muss abgenommen sein, die Inbetriebnahme darf nur durch eine besonders geprüfte Person erfolgen.",
      "Die Anlage muss abgenommen sein und jährlich überprüft werden. Die Inbetriebnahme darf nur durch eine besonders geprüfte Person erfolgen.",
      "Die Abnahme der Anlage darf nicht länger als drei Jahre zurückliegen. Haupthahn und andere Absperrventile sind zu öffnen."
    ]
  },
  // Frage 66
  {
    id: "basis_66",
    nummer: 66,
    frage: "Was ist zu beachten, wenn eine Flüssiggasanlage außer Betrieb gesetzt wird?",
    bild: null,
    antworten: [
      "Haupthahn und Absperrventile sind zu schließen.",
      "Die Anlage ist gasfrei zu machen.",
      "Gasflasche fachgerecht entsorgen.",
      "Der Flüssiggasbehälter ist vollständig zu entleeren."
    ]
  },
  // Frage 67
  {
    id: "basis_67",
    nummer: 67,
    frage: "Wie oft muss man aufblasbare Rettungsmittel warten lassen?",
    bild: null,
    antworten: [
      "Entsprechend der Herstellerangabe, mindestens alle 2 Jahre.",
      "Jährlich und nach jedem Einsatz oder Übungsgebrauch.",
      "Entsprechend der Herstellerangabe, mindestens alle 3 Jahre.",
      "Jährlich, jeweils vor Beginn der Wassersportsaison."
    ]
  },
  // Frage 68
  {
    id: "basis_68",
    nummer: 68,
    frage: "Welcher Feuerlöscher ist für Sportboote zweckmäßig und wie oft muss man einen Feuerlöscher überprüfen lassen?",
    bild: null,
    antworten: [
      "ABC-Pulver- und Schaumlöscher, mindestens alle 2 Jahre.",
      "Feuerlöscher mit Löschschaum, mindestens einmal pro Jahr.",
      "CO₂-Feuerlöscher, mindestens alle 2 Jahre.",
      "ABC-Pulverlöscher, mindestens einmal pro Jahr."
    ]
  },
  // Frage 69
  {
    id: "basis_69",
    nummer: 69,
    frage: "Welche Maßnahmen muss man ergreifen, um einen Brand mit dem Feuerlöscher wirksam zu bekämpfen?",
    bild: null,
    antworten: [
      "Luftzufuhr verhindern, Feuerlöscher erst am Brandherd einsetzen und das Feuer möglichst von unten bekämpfen.",
      "Rauchabzug sicherstellen und Feuerlöscher rechtzeitig einsetzen, dabei den Löschstrahl möglichst in die lodernden Flammen halten.",
      "Luftzufuhr verhindern und den Feuerlöscher mit sparsamen Löschstrahlstößen einsetzen, dabei das Feuer möglichst von oben bekämpfen.",
      "Handhabungshinweise durchlesen und den Feuerlöscher sofort einsetzen, dabei das Feuer möglichst von unten bekämpfen."
    ]
  },
  // Frage 70
  {
    id: "basis_70",
    nummer: 70,
    frage: "Wie hat man sich nach einem Zusammenstoß zu verhalten?",
    bild: null,
    antworten: [
      "Hilfe leisten und so lange am Unfallort bleiben, bis ein weiterer Beistand nicht mehr erforderlich ist; alle erforderlichen Daten austauschen.",
      "Hilfe leisten und den Unfallort sofort verlassen, um weitere Gefahren zu vermeiden; alle erforderlichen Daten austauschen.",
      "Den Unfallort sofort verlassen, um weitere Gefahren zu vermeiden; keine Daten austauschen, da dies die Bergung verzögert.",
      "Hilfe leisten und so lange am Unfallort bleiben, bis ein weiterer Beistand nicht mehr erforderlich ist; keine Daten austauschen, da dies die Bergung verzögert."
    ]
  },
  // Frage 71
  {
    id: "basis_71",
    nummer: 71,
    frage: "Welche Faktoren sind hauptsächlich für das Wettergeschehen, also für Wind und Niederschläge, ausschlaggebend?",
    bild: null,
    antworten: [
      "Luftdruckänderung, Luftfeuchtigkeit und Temperatur.",
      "Luftdruckänderung, Sonneneinstrahlung und Höhenlage.",
      "Luftdruckänderung, Luftfeuchtigkeit und Jahreszeit.",
      "Luftdruckänderung, Tageszeit und Temperatur."
    ]
  },
  // Frage 72
  {
    id: "basis_72",
    nummer: 72,
    frage: "In welcher Situation dürfen Notsignale gegeben werden?",
    bild: null,
    antworten: [
      "Wenn Gefahr für Leib oder Leben von Personen besteht und daher Hilfe benötigt wird.",
      "Wenn Gefahr für Leib oder Leben von Personen besteht oder das Schiff nicht mehr sicher manövriert werden kann.",
      "Wenn Gefahr für Leib oder Leben von Personen oder erhebliche Sachwerte besteht und daher Hilfe benötigt wird.",
      "Wenn Gefahr für Leib oder Leben von Personen, erhebliche Sachwerte oder die maritime Umwelt besteht."
    ]
  }
];

// Export für Browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fragenBasis;
}
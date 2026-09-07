// ============================================
// Fragenkatalog See (Fragen 73-285)
// Antwort a ist immer die richtige Antwort
// Navigationsaufgaben 286-300 wurden ausgelassen
// ============================================

const fragenSee = [
  // Frage 73
  {
    id: "see_73",
    nummer: 73,
    frage: "Wo gelten die Kollisionsverhütungsregeln (KVR)?",
    bild: null,
    antworten: [
      "Auf der Hohen See und auf den mit dieser zusammenhängenden, von Seeschiffen befahrbaren Gewässern.",
      "Auf der Hohen See und den deutschen Seeschifffahrtsstraßen, die von Seeschiffen befahren werden.",
      "Auf den Seeschifffahrtsstraßen und den küstennahen deutschen Seegewässern, die von Seeschiffen befahren werden.",
      "Auf der Hohen See und den von Seeschiffen befahrbaren Randmeeren, mit Ausnahme der Verkehrstrennungsgebiete."
    ]
  },
  // Frage 74
  {
    id: "see_74",
    nummer: 74,
    frage: "Was gilt, wenn eine Bestimmung der Seeschifffahrtsstraßen-Ordnung (SeeSchStrO) mit den Kollisionsverhütungsregeln (KVR) im Widerspruch steht?",
    bild: null,
    antworten: [
      "Die Vorschrift der Seeschifffahrtsstraßen-Ordnung.",
      "Die Vorschrift der Kollisionsverhütungsregeln (KVR).",
      "Die Grundregeln für das Verhalten im Verkehr.",
      "Die Vorschrift der Schifffahrtsordnung Emsmündung."
    ]
  },
  // Frage 75
  {
    id: "see_75",
    nummer: 75,
    frage: "Welche Sportboote sind von der Fahrerlaubnispflicht auf den Seeschifffahrtsstraßen ausgenommen?",
    bild: null,
    antworten: [
      "Sportboote ohne Antriebsmaschine oder solche mit einer größten, nicht überschreitbaren Nutzleistung von 11,03 Kilowatt (15 PS) bei Verwendung eines Verbrennungsmotors bzw. 7,5 Kilowatt bei Verwendung eines Elektromotors Betriebsart SI (Dauerbetrieb) oder weniger.",
      "Sportboote unter Segel mit einer Rumpflänge unter 20 m und solche deren Antriebsmaschine nicht benutzt wird.",
      "Sportboote mit Antriebsmaschine mit einer größeren Nutzleistung als 11,03 Kilowatt (15 PS) bei Verwendung eines Verbrennungsmotors bzw. 7,5 Kilowatt bei Verwendung eines Elektromotors Betriebsart S1 (Dauerbetrieb).",
      "Alle Sportboote ohne Antriebsmaschine, unabhängig von deren Nutzleistung."
    ]
  },
  // Frage 76
  {
    id: "see_76",
    nummer: 76,
    frage: "Wer ist für die Befolgung der Verkehrsvorschriften verantwortlich?",
    bild: null,
    antworten: [
      "Der Fahrzeugführer oder sein Stellvertreter.",
      "Der Fahrzeugführer und sein Stellvertreter.",
      "Der Fahrzeugführer und jeder sonst Verantwortliche.",
      "Der Fahrzeugführer oder jeder sonst Verantwortliche."
    ]
  },
  // Frage 77
  {
    id: "see_77",
    nummer: 77,
    frage: "Was bedeutet 'seemännische Sorgfaltspflicht'?",
    bild: null,
    antworten: [
      "Die Verpflichtung zur Beachtung von Vorsichtsmaßregeln über die Verkehrsvorschriften hinaus, die Seemannsbrauch oder besondere Umstände des Falles erfordern.",
      "Die Verpflichtung zur Beachtung der Seeschifffahrtsstraßen-Ordnung (SeeSchStrO), der Kollisionsverhütungsregeln (KVR), der Grundregeln für das Verhalten im Verkehr und der Ausweichregeln mit dem Manöver des letzten Augenblicks.",
      "Die Verpflichtung zur Beachtung der Vorsichtsmaßregeln und Sicherheitsregeln der Verkehrsvorschriften und der Grundregeln für das Verhalten im Verkehr.",
      "Die Verpflichtung zur Beachtung von Vorsichtsmaßregeln der Kollisionsverhütungsregeln (KVR), der Grundregeln für das Verhalten im Verkehr und der Ausweichregeln mit dem Manöver des letzten Augenblicks."
    ]
  },
  // Frage 78
  {
    id: "see_78",
    nummer: 78,
    frage: "Welche Sicherheitsmaßnahmen hat der Fahrzeugführer im Rahmen seiner seemännischen Sorgfaltspflicht vor Fahrtantritt zum Schutze und für die Sicherheit der Personen an Bord zu treffen?",
    bild: null,
    antworten: [
      "Der Fahrzeugführer hat die Besatzungsmitglieder und Gäste über die Sicherheitsvorkehrungen an Bord zu unterrichten, in die Handhabung der Rettungs- und Feuerlöschmittel einzuweisen und auf geeignete Maßnahmen gegen das Überbordfallen hinzuweisen, zudem darauf, dass ständig angelegte Rettungswesten die Überlebenschancen im Wasser erhöhen.",
      "Der Fahrzeugführer muss die Besatzungsmitglieder und Gäste anweisen, dass sie sich über die Sicherheitsvorkehrungen an Bord informieren, sich die Gebrauchsanweisungen der Rettungs- und Feuerlöschmittel ansehen und auf geeignete Maßnahmen gegen das Überbordfallen achten, zudem darauf, dass ständig angelegte Rettungswesten die Überlebenschancen im Wasser erhöhen.",
      "Der Fahrzeugführer hat die verantwortlichen Besatzungsmitglieder über die Sicherheitsvorkehrungen an Bord zu unterrichten, in die Handhabung der Rettungs- und Feuerlöschmittel einzuweisen und auf geeignete Maßnahmen gegen das Überbordfallen hinzuweisen, zudem darauf, dass ständig angelegte Rettungswesten die Überlebenschancen im Wasser erhöhen.",
      "Der Fahrzeugführer hat die Gäste an Bord über die Sicherheitsvorkehrungen an Bord zu unterrichten, in die Handhabung der Rettungs- und Feuerlöschmittel einzuweisen und auf geeignete Maßnahmen gegen das Überbordfallen hinzuweisen, zudem darauf, dass ständig angelegte Rettungswesten die Überlebenschancen im Wasser erhöhen."
    ]
  },
  // Frage 79
  {
    id: "see_79",
    nummer: 79,
    frage: "Was bedeutet das 'Manöver des letzten Augenblicks'?",
    bild: null,
    antworten: [
      "Ausweichmanöver des Kurshalters.",
      "Ausweichmanöver des Ausweichpflichtigen.",
      "Ausweichmanöver des Kurshalters und des Ausweichpflichtigen.",
      "Ausweichmanöver des Kurshalters oder des Ausweichpflichtigen."
    ]
  },
  // Frage 80
  {
    id: "see_80",
    nummer: 80,
    frage: "Wann ist das 'Manöver des letzten Augenblicks' durchzuführen?",
    bild: null,
    antworten: [
      "Es muss durchgeführt werden, wenn ein Zusammenstoß durch Manöver des Ausweichpflichtigen allein nicht mehr vermieden werden kann.",
      "Es muss durchgeführt werden, wenn ein Zusammenstoß durch Manöver des Kurshalters allein nicht mehr vermieden werden kann.",
      "Es muss im letzten Augenblick von jedem durchgeführt werden, wenn ein Zusammenstoß sonst nicht mehr vermieden werden kann.",
      "Es muss kurz vor der Kollision durchgeführt werden, wenn sonst ein Zusammenstoß durch Manöver des Kurshalters allein nicht mehr vermieden werden kann."
    ]
  },
  // Frage 81
  {
    id: "see_81",
    nummer: 81,
    frage: "Wann gilt ein Fahrzeug als überholendes Fahrzeug?",
    bild: null,
    antworten: [
      "Wenn es sich einem anderen Fahrzeug aus einer Richtung von mehr als 22,5° achterlicher als querab (Bereich des Hecklichtes) nähert.",
      "Wenn es sich einem anderen Fahrzeug aus einer Richtung von mehr als 112,5° achterlicher als querab (Bereich der Seitenlichter) nähert.",
      "Wenn es sich einem anderen Fahrzeug gegenüber in einer Richtung von mehr als 22,5° achterlicher als querab (Bereich des Hecklichtes) befindet.",
      "Wenn es an einem anderen Fahrzeug aus einer achterlichen Richtung von mehr als 22,5° querab kommend (Bereich des Topplichtes) vorbeifährt."
    ]
  },
  // Frage 82
  {
    id: "see_82",
    nummer: 82,
    frage: "Wann ist ein Fahrzeug manövrierunfähig?",
    bild: null,
    antworten: [
      "Wenn es wegen außergewöhnlicher Umstände, z. B. Ausfall der Ruder- oder Maschinenanlage, nicht so wie vorgeschrieben manövrieren und daher einem anderen Fahrzeug nicht ausweichen kann.",
      "Wenn es wegen der Art seines Einsatzes behindert ist und deshalb nicht so wie vorgeschrieben manövrieren und daher einem anderen Fahrzeug nicht ausweichen kann.",
      "Wenn es wegen seines Tiefgangs im Verhältnis zu der vorhandenen Tiefe und Breite des befahrbaren Gewässers erheblich behindert ist, von seinem zu verfolgenden Kurs abzuweichen.",
      "Wenn es mit Netzen, Leinen, Schleppnetzen oder anderen Fanggeräten fischt, welche die Manövrierfähigkeit einschränken."
    ]
  },
  // Frage 83
  {
    id: "see_83",
    nummer: 83,
    frage: "Wann ist ein Fahrzeug manövrierbehindert?",
    bild: null,
    antworten: [
      "Wenn es wegen der Art seines Einsatzes behindert ist und deshalb nicht so wie vorgeschrieben manövrieren und daher einem anderen Fahrzeug nicht ausweichen kann.",
      "Wenn es wegen außergewöhnlicher Umstände, z. B. Ausfall der Ruder- oder Maschinenanlage, nicht so wie vorgeschrieben manövrieren und daher einem anderen Fahrzeug nicht ausweichen kann.",
      "Wenn es wegen seines Tiefgangs im Verhältnis zu der vorhandenen Tiefe und Breite des befahrbaren Gewässers erheblich behindert ist, von seinem zu verfolgenden Kurs abzuweichen.",
      "Wenn es mit Netzen, Leinen, Schleppnetzen oder anderen Fanggeräten fischt, welche die Manövrierfähigkeit einschränken."
    ]
  },
  // Frage 84
  {
    id: "see_84",
    nummer: 84,
    frage: "Welche besonderen Maßnahmen sind bei verminderter Sicht zu treffen?",
    bild: null,
    antworten: [
      "Es muss mit sicherer, den verminderten Sichtverhältnissen angepasster Geschwindigkeit gefahren werden, es müssen Schallsignale gegeben werden, es müssen Positionslichter eingeschaltet werden und es muss gehörig Ausguck gegangen werden.",
      "Es muss mit sicherer, den verminderten Sichtverhältnissen angepasster Geschwindigkeit gefahren werden, es müssen Schallsignale gegeben werden, das Radargerät muss eingeschaltet werden und es muss Ausguck gegangen werden.",
      "Es muss mit sicherer, den verminderten Sichtverhältnissen angepasster Geschwindigkeit gefahren werden, es müssen Schallsignale gegeben werden, es müssen Positionslichter eingeschaltet werden und es muss der Radarreflektor eingesetzt werden.",
      "Es muss mit verminderter Geschwindigkeit gefahren werden, es müssen Schallsignale gegeben werden, es müssen Positionslichter eingeschaltet werden und es muss das AIS (Automatic Identifikation System) eingeschaltet werden."
    ]
  },
  // Frage 85
  {
    id: "see_85",
    nummer: 85,
    frage: "Welche Vorschriften regeln die Ausrüstung, Anordnung und Anbringung der Positionslaternen, Sichtzeichen und Schallsignalanlagen auf Fahrzeugen?",
    bild: null,
    antworten: [
      "Die Kollisionsverhütungsregeln (KVR), die Seeschifffahrtsstraßen-Ordnung (SeeSchStrO) und die Schifffahrtsordnung Emsmündung (EmsSchO).",
      "Die Kollisionsverhütungsregeln (KVR), die Seeschifffahrtsstraßen-Ordnung (SeeSchStrO) und die Sportbootführerscheinverordnung.",
      "Die Kollisionsverhütungsregeln (KVR), die Seeschifffahrtsstraßen-Ordnung (SeeSchStrO) und die Schiffssicherheitsverordnung.",
      "Die Kollisionsverhütungsregeln (KVR), die Seeschifffahrtsstraßen-Ordnung (SeeSchStrO) und die Verordnung zur Sicherung der Seefahrt."
    ]
  },
  // Frage 86
  {
    id: "see_86",
    nummer: 86,
    frage: "Welche Positionslaternen und Schallsignalanlagen dürfen auf Sportbooten unter deutscher Flagge verwendet werden?",
    bild: null,
    antworten: [
      "Solche, deren Baumuster vom Bundesamt für Seeschifffahrt und Hydrographie (BSH) zur Verwendung zugelassen sind oder eine als gleichwertig anerkannte Zulassung eines EU-Staates besitzen.",
      "Solche, die die vorgeschriebene Mindesttragweite von drei Seemeilen, die Größe und Farbgebung bzw. Lautstärke erreichen und mit einer Bescheinigung einer Klassifikationsgesellschaft versehen sind.",
      "Solche, die gemäß der Kollisionsverhütungsregeln (KVR), der Seeschifffahrtsstraßen-Ordnung (SeeSchStrO) und der Schifffahrtsordnung Emsmündung (EmsSchO) vorgeschrieben sind und ein CE-Zeichen haben.",
      "Solche, die vom Technischen Überwachungsverein (TÜV) geprüft und mit dem Zeichen für geprüfte Sicherheit (GS) versehen sind."
    ]
  },
  // Frage 87
  {
    id: "see_87",
    nummer: 87,
    frage: "Was sind 'Verkehrstrennungsgebiete'?",
    bild: null,
    antworten: [
      "Es sind bekannt gemachte Schifffahrtswege, die durch Trennlinien oder Trennzonen in Einbahnwege geteilt sind.",
      "Es sind bekannt gemachte Fahrwasser, die durch Trennlinien oder Trennzonen in Einbahnwege geteilt sind.",
      "Es sind bekannt gemachte Seeschifffahrtsstraßen, die durch Trennlinien oder Trennzonen in Einbahnwege geteilt sind.",
      "Es sind bekannt gemachte Bundeswasserstraßen, die durch Trennlinien oder Trennzonen in Einbahnwege geteilt sind."
    ]
  },
  // Frage 88
  {
    id: "see_88",
    nummer: 88,
    frage: "Wie sind Verkehrstrennungsgebiete zu befahren?",
    bild: null,
    antworten: [
      "Sie dürfen jeweils nur in der allgemeinen Verkehrsrichtung rechts der Trennlinie oder Trennzone befahren werden.",
      "Sie dürfen jeweils nur in Fahrtrichtung links der Trennlinie oder Trennzone befahren werden.",
      "Sie dürfen innerhalb der äußeren Trennlinien nur in einer Fahrtrichtung befahren werden.",
      "Sie dürfen nur vom Anfang bis zum Ende und jeweils nur in Fahrtrichtung rechts der Trennzone befahren werden."
    ]
  },
  // Frage 89
  {
    id: "see_89",
    nummer: 89,
    frage: "Was bedeutet 'in Sicht befindlich'?",
    bild: null,
    antworten: [
      "Wenn jedes Fahrzeug vom anderen optisch wahrgenommen werden kann.",
      "Wenn jeder Fahrzeugführer vom anderen optisch wahrgenommen werden kann.",
      "Wenn beide Fahrzeuge optisch wahrgenommen werden können.",
      "Wenn jedes Fahrzeug auch bei unsichtigem Wetter optisch wahrgenommen werden kann."
    ]
  },
  // Frage 90
  {
    id: "see_90",
    nummer: 90,
    frage: "Was bedeutet sichere Geschwindigkeit?",
    bild: null,
    antworten: [
      "Die Geschwindigkeit muss der Verkehrslage, den Sicht- und Witterungsverhältnissen angepasst sein und es muss jederzeit aufgestoppt werden können.",
      "Die Geschwindigkeit muss der Verkehrslage, den Sicht- und Witterungsverhältnissen angepasst sein und der Verkehr darf nicht behindert werden.",
      "Die Geschwindigkeit muss der Verkehrslage, den Sicht- und Witterungsverhältnissen und dem Treibstoffverbrauch angepasst sein.",
      "Die Geschwindigkeit muss der Verkehrslage, dem Verkehrsaufkommen, den Seegangs- und Windverhältnissen angepasst sein, so dass kein Sog und Wellenschlag entsteht."
    ]
  },
  // Frage 91
  {
    id: "see_91",
    nummer: 91,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 91,
    antworten: [
      "Maschinenfahrzeug in Fahrt von weniger als 50 m Länge.",
      "Maschinenfahrzeug in Fahrt von 50 und mehr Meter Länge.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt.",
      "Ein manövrierbehindertes Fahrzeug mit Fahrt durchs Wasser von 50 und mehr Meter Länge."
    ]
  },
  // Frage 92
  {
    id: "see_92",
    nummer: 92,
    frage: "Welches Fahrzeug muss diese Lichter führen?",
    bild: 92,
    antworten: [
      "Maschinenfahrzeug in Fahrt von 50 und mehr Meter Länge.",
      "Maschinenfahrzeug in Fahrt von weniger als 50 m Länge.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt.",
      "Ein manövrierbehindertes Fahrzeug mit Fahrt durchs Wasser von 50 und mehr Meter Länge."
    ]
  },
  // Frage 93
  {
    id: "see_93",
    nummer: 93,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 93,
    antworten: [
      "Manövrierbehinderter Schleppverband in Fahrt von 200 m Länge oder weniger.",
      "Manövrierbehinderter Schleppverband in Fahrt von mehr als 200 m Länge.",
      "Manövrierbehinderter Schleppverband in Fahrt von 200 m Länge oder weniger, ohne Fahrt durchs Wasser.",
      "Ein manövrierbehindertes Fahrzeug mit Fahrt durchs Wasser von 50 und mehr Meter Länge."
    ]
  },
  // Frage 94
  {
    id: "see_94",
    nummer: 94,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 94,
    antworten: [
      "Manövrierbehinderter Schleppverband in Fahrt von mehr als 200 m Länge.",
      "Manövrierbehinderter Schleppverband in Fahrt von 200 m Länge oder weniger.",
      "Manövrierbehinderter Schleppverband in Fahrt von mehr als 200 m Länge, ohne Fahrt durch das Wasser.",
      "Ein manövrierbehindertes Fahrzeug, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert."
    ]
  },
  // Frage 95
  {
    id: "see_95",
    nummer: 95,
    frage: "Welche Lichter führen geschleppte Fahrzeuge?",
    bild: null,
    antworten: [
      "Seitenlichter rot und grün und ein weißes Hecklicht.",
      "Seitenlichter rot und grün und ein weißes Rundumlicht.",
      "Seitenlichter rot und grün und zwei rote Rundumlichter senkrecht übereinander.",
      "Seitenlichter rot und grün und ein rotes Rundumlicht senkrecht über einem weißen Rundumlicht."
    ]
  },
  // Frage 96
  {
    id: "see_96",
    nummer: 96,
    frage: "Was bedeutet es, wenn jedes Fahrzeug eines Schleppverbandes einen schwarzen Rhombus führt?",
    bild: null,
    antworten: [
      "Schleppverband von mehr als 200 m Länge.",
      "Schleppverband von mehr als 100 m Länge.",
      "Schleppverband von mehr als 50 m Länge.",
      "Schleppverband von weniger als 50 m Länge."
    ]
  },
  // Frage 97
  {
    id: "see_97",
    nummer: 97,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 97,
    antworten: [
      "Ein manövrierunfähiges Fahrzeug in Fahrt.",
      "Ein manövrierbehindertes Fahrzeug in Fahrt.",
      "Ein tiefgangbehindertes Fahrzeug in Fahrt.",
      "Ein Grundsitzer von 50 und mehr Meter Länge."
    ]
  },
  // Frage 98
  {
    id: "see_98",
    nummer: 98,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 98,
    antworten: [
      "Ein manövrierunfähiges Fahrzeug mit Fahrt durch das Wasser.",
      "Ein manövrierbehindertes Fahrzeug mit Fahrt durch das Wasser von 50 und mehr Meter Länge.",
      "Ein manövrierbehindertes Fahrzeug mit Fahrt durch das Wasser.",
      "Ein fischender Trawler (Fischereifahrzeug) mit Fahrt durch das Wasser von 50 und mehr Meter Länge."
    ]
  },
  // Frage 99
  {
    id: "see_99",
    nummer: 99,
    frage: "Welches Fahrzeug führt diese Signalkörper?",
    bild: 99,
    antworten: [
      "Ein manövrierunfähiges Fahrzeug in Fahrt.",
      "Ein manövrierbehindertes Fahrzeug in Fahrt.",
      "Ein fischendes Fahrzeug in Fahrt.",
      "Ein Grundsitzer von weniger als 50 m Länge."
    ]
  },
  // Frage 100
  {
    id: "see_100",
    nummer: 100,
    frage: "Welche Lichter führen manövrierunfähige Fahrzeuge von 12 und mehr Meter Länge in Fahrt, ohne Fahrt durch das Wasser?",
    bild: null,
    antworten: [
      "Zwei rote Rundumlichter senkrecht übereinander.",
      "Zwei rote Rundumlichter senkrecht übereinander und zusätzlich die Seitenlichter und das Hecklicht.",
      "Drei rote Rundumlichter senkrecht übereinander.",
      "Drei rote Rundumlichter senkrecht übereinander und zusätzlich die Seitenlichter und das Hecklicht."
    ]
  },
  // Frage 101
  {
    id: "see_101",
    nummer: 101,
    frage: "Welche Lichter führen manövrierunfähige Fahrzeuge von 12 und mehr Meter Länge in Fahrt mit Fahrt durch das Wasser?",
    bild: null,
    antworten: [
      "Zwei rote Rundumlichter senkrecht übereinander und zusätzlich die Seitenlichter und das Hecklicht.",
      "Zwei rote Rundumlichter senkrecht übereinander.",
      "Drei rote Rundumlichter senkrecht übereinander.",
      "Drei rote Rundumlichter senkrecht übereinander und zusätzlich die Seitenlichter und das Hecklicht."
    ]
  },
  // Frage 102
  {
    id: "see_102",
    nummer: 102,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 102,
    antworten: [
      "Ein manövrierbehindertes Fahrzeug mit Fahrt durch das Wasser von 50 und mehr Meter Länge.",
      "Ein manövrierunfähiges Fahrzeug mit Fahrt durch das Wasser von 50 und mehr Meter Länge.",
      "Ein manövrierbehindertes Fahrzeug ohne Fahrt durch das Wasser von 50 und mehr Meter Länge.",
      "Ein fischender Trawler (Fischereifahrzeug) mit Fahrt durch das Wasser von 50 und mehr Meter Länge."
    ]
  },
  // Frage 103
  {
    id: "see_103",
    nummer: 103,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 103,
    antworten: [
      "Ein manövrierbehindertes Fahrzeug in Fahrt.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt.",
      "Ein fischendes Fahrzeug in Fahrt.",
      "Ein Grundsitzer von weniger als 50 m Länge."
    ]
  },
  // Frage 104
  {
    id: "see_104",
    nummer: 104,
    frage: "Welches Fahrzeug führt diese Signalkörper?",
    bild: 104,
    antworten: [
      "Ein manövrierbehindertes Fahrzeug.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt.",
      "Ein fischendes Fahrzeug in Fahrt.",
      "Ein Grundsitzer von weniger als 50 m Länge."
    ]
  },
  // Frage 105
  {
    id: "see_105",
    nummer: 105,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 105,
    antworten: [
      "Ein Grundsitzer.",
      "Ein manövrierunfähiges Fahrzeug.",
      "Ein manövrierbehindertes Fahrzeug.",
      "Ein fischendes Fahrzeug."
    ]
  },
  // Frage 106
  {
    id: "see_106",
    nummer: 106,
    frage: "Welches Fahrzeug führt diese Signalkörper?",
    bild: 106,
    antworten: [
      "Ein Grundsitzer.",
      "Ein manövrierunfähiges Fahrzeug.",
      "Ein manövrierbehindertes Fahrzeug.",
      "Ein fischendes Fahrzeug."
    ]
  },
  // Frage 107
  {
    id: "see_107",
    nummer: 107,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 107,
    antworten: [
      "Ein Grundsitzer von 50 und mehr Meter Länge.",
      "Ein manövrierbehindertes Fahrzeug.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt.",
      "Ein Grundsitzer von weniger als 50 m Länge."
    ]
  },
  // Frage 108
  {
    id: "see_108",
    nummer: 108,
    frage: "Welches Fahrzeug muss diese Lichter führen?",
    bild: 108,
    antworten: [
      "Ein tiefgangbehindertes Fahrzeug von 50 und mehr Meter Länge in Fahrt.",
      "Ein manövrierbehindertes Fahrzeug.",
      "Ein manövrierunfähiges Fahrzeug.",
      "Ein Grundsitzer von weniger als 50 m Länge."
    ]
  },
  // Frage 109
  {
    id: "see_109",
    nummer: 109,
    frage: "Welches Fahrzeug führt diese Signalkörper?",
    bild: 109,
    antworten: [
      "Ein tiefgangbehindertes Fahrzeug in Fahrt.",
      "Ein manövrierbehindertes Fahrzeug in Fahrt.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt.",
      "Ein Grundsitzer von weniger als 50 Meter Länge."
    ]
  },
  // Frage 110
  {
    id: "see_110",
    nummer: 110,
    frage: "Welches Fahrzeug muss diese Lichter führen?",
    bild: 110,
    antworten: [
      "Ein fischender Trawler (Fischereifahrzeug) mit Fahrt durch das Wasser von 50 und mehr Meter Länge.",
      "Ein fischendes Fahrzeug in Fahrt, das nicht trawlt, z. B. Treibnetzfischer.",
      "Ein Behördenfahrzeug im Einsatz.",
      "Ein manövrierbehindertes Fahrzeug in Fahrt."
    ]
  },
  // Frage 111
  {
    id: "see_111",
    nummer: 111,
    frage: "Welches Fahrzeug führt diese Lichter?",
    bild: 111,
    antworten: [
      "Ein fischendes Fahrzeug in Fahrt oder vor Anker, das nicht trawlt, z. B. Treibnetzfischer.",
      "Ein Lotsenfahrzeug im Einsatz.",
      "Ein manövrierbehindertes Fahrzeug in Fahrt.",
      "Ein fischender Trawler (Fischereifahrzeug) mit Fahrt durchs Wasser von 50 und mehr Meter Länge."
    ]
  },
  // Frage 112
  {
    id: "see_112",
    nummer: 112,
    frage: "Welches Fahrzeug führt diese Signalkörper?",
    bild: 112,
    antworten: [
      "Ein fischendes Fahrzeug in Fahrt oder vor Anker.",
      "Ein manövrierbehindertes Fahrzeug.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt.",
      "Ein Grundsitzer von weniger als 50 m Länge."
    ]
  },
  // Frage 113
  {
    id: "see_113",
    nummer: 113,
    frage: "Welche Fahrzeuge führen nur Seitenlichter rot und grün und ein weißes Hecklicht?",
    bild: null,
    antworten: [
      "Segelfahrzeuge, Ruderboote und geschleppte Fahrzeuge.",
      "Segelfahrzeuge, Ruderboote und Maschinenfahrzeuge in Fahrt von weniger als 50 m Länge.",
      "Segelfahrzeuge, fischende Fahrzeuge und geschleppte Fahrzeuge.",
      "Segelfahrzeuge, Grundsitzer und geschleppte Fahrzeuge."
    ]
  },
  // Frage 114
  {
    id: "see_114",
    nummer: 114,
    frage: "Was für ein Licht muss ein Ankerlieger von weniger als 50 m Länge führen?",
    bild: null,
    antworten: [
      "Ein weißes Rundumlicht an gut sichtbarer Stelle.",
      "Ein rotes Rundumlicht an gut sichtbarer Stelle.",
      "Zwei weiße Rundumlichter an gut sichtbarer Stelle.",
      "Zwei rote Rundumlichter an gut sichtbarer Stelle."
    ]
  },
  // Frage 115
  {
    id: "see_115",
    nummer: 115,
    frage: "Welches Fahrzeug muss diese Lichter führen?",
    bild: 115,
    antworten: [
      "Ein vor Anker liegendes Fahrzeug von 100 und mehr Meter Länge.",
      "Ein fischender Trawler (Fischereifahrzeug) mit Fahrt durchs Wasser von 50 und mehr Meter Länge.",
      "Ein manövrierbehindertes Fahrzeug, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert.",
      "Ein Grundsitzer von 200 und mehr Meter Länge."
    ]
  },
  // Frage 116
  {
    id: "see_116",
    nummer: 116,
    frage: "Sie hören bei verminderter Sicht mindestens alle zwei Minuten einen langen Ton mit der Pfeife (–). Welches Fahrzeug gibt dieses Signal?",
    bild: null,
    antworten: [
      "Ein Maschinenfahrzeug, das Fahrt durchs Wasser macht.",
      "Ein geschlepptes Fahrzeug oder das letzte bemannte Fahrzeug eines Schleppverbandes in Fahrt.",
      "Ein Fahrzeug mit gefährlicher Ladung vor Anker von weniger als 100 m Länge.",
      "Ein vor Anker liegendes Fahrzeug von 100 und mehr Meter Länge."
    ]
  },
  // Frage 117
  {
    id: "see_117",
    nummer: 117,
    frage: "Sie hören bei verminderter Sicht mindestens alle zwei Minuten zwei aufeinander folgende lange Töne mit der Pfeife (– –). Welches Fahrzeug gibt dieses Signal?",
    bild: null,
    antworten: [
      "Ein Maschinenfahrzeug in Fahrt, das seine Maschine gestoppt hat und keine Fahrt durchs Wasser macht.",
      "Ein geschlepptes Fahrzeug oder das letzte bemannte Fahrzeug eines Schleppverbandes in Fahrt.",
      "Ein Fahrzeug mit gefährlicher Ladung vor Anker von weniger als 100 m Länge.",
      "Ein vor Anker liegendes Fahrzeug von 100 und mehr Meter Länge."
    ]
  },
  // Frage 118
  {
    id: "see_118",
    nummer: 118,
    frage: "Welche Fahrzeuge geben bei verminderter Sicht mindestens alle zwei Minuten drei aufeinander folgende Töne mit der Pfeife, und zwar lang, kurz, kurz (– · ·)?",
    bild: null,
    antworten: [
      "Ein manövrierunfähiges Fahrzeug in Fahrt, ein manövrierbehindertes Fahrzeug in Fahrt oder vor Anker, ein tiefgangbehindertes Fahrzeug in Fahrt, ein Segelfahrzeug in Fahrt, ein schleppendes oder schiebendes Fahrzeug in Fahrt, ein fischendes Fahrzeug in Fahrt oder vor Anker.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt, ein manövrierbehindertes Fahrzeug in Fahrt oder vor Anker, ein tiefgangbehindertes Fahrzeug in Fahrt, ein Maschinenfahrzeug in Fahrt, das Fahrt durchs Wasser macht, ein schleppendes oder schiebendes Fahrzeug in Fahrt, ein fischendes Fahrzeug in Fahrt oder vor Anker.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt, ein manövrierbehindertes Fahrzeug in Fahrt oder vor Anker, ein tiefgangbehindertes Fahrzeug in Fahrt, ein Segelfahrzeug in Fahrt, ein schleppendes oder schiebendes Fahrzeug in Fahrt, ein fischendes Fahrzeug in Fahrt oder vor Anker, ein Maschinenfahrzeug in Fahrt, das seine Maschine gestoppt hat und keine Fahrt durchs Wasser macht.",
      "Ein manövrierunfähiges Fahrzeug in Fahrt, ein manövrierbehindertes Fahrzeug in Fahrt oder vor Anker, ein tiefgangbehindertes Fahrzeug in Fahrt, ein Segelfahrzeug in Fahrt, ein schleppendes oder schiebendes Fahrzeug in Fahrt, ein geschlepptes Fahrzeug oder das letzte bemannte Fahrzeug eines Schleppverbandes in Fahrt, ein fischendes Fahrzeug in Fahrt oder vor Anker."
    ]
  },
  // Frage 119
  {
    id: "see_119",
    nummer: 119,
    frage: "Welches Fahrzeug gibt bei verminderter Sicht - im Anschluss an das Signal: lang, kurz, kurz (– · ·) - vier aufeinander folgende Töne mit der Pfeife, und zwar: lang, kurz, kurz, kurz (– · · ·)?",
    bild: null,
    antworten: [
      "Ein geschlepptes Fahrzeug oder das letzte bemannte Fahrzeug eines Schleppverbandes in Fahrt.",
      "Ein Maschinenfahrzeug in Fahrt, das seine Maschine gestoppt hat und keine Fahrt durchs Wasser macht.",
      "Ein Fahrzeug mit gefährlicher Ladung vor Anker von weniger als 100 m Länge.",
      "Ein manövrierunfähiges Fahrzeug von weniger als 100 m Länge."
    ]
  },
  // Frage 120
  {
    id: "see_120",
    nummer: 120,
    frage: "Was für ein Schallsignal muss ein Segelfahrzeug in Fahrt von 12 und mehr Meter Länge bei verminderter Sicht geben?",
    bild: null,
    antworten: [
      "Mindestens alle zwei Minuten drei aufeinander folgende Töne mit der Pfeife, und zwar lang, kurz, kurz (– · ·).",
      "Mindestens alle zwei Minuten drei aufeinander folgende Töne mit der Pfeife, und zwar lang, lang, kurz (– – ·).",
      "Mindestens alle zwei Minuten ein kräftiges Schallsignal, das mit den vorgeschriebenen nicht verwechselt werden kann.",
      "Mit der Pfeife kurz, lang, kurz (· – ·)."
    ]
  },
  // Frage 121
  {
    id: "see_121",
    nummer: 121,
    frage: "Welches Schallsignal muss ein Fahrzeug in Fahrt von weniger als 12 m Länge bei verminderter Sicht geben, wenn es die sonst vorgeschriebenen Schallsignale nicht geben kann?",
    bild: null,
    antworten: [
      "Mindestens alle zwei Minuten ein kräftiges Schallsignal, das mit den vorgeschriebenen nicht verwechselt werden kann.",
      "Mindestens alle zwei Minuten drei aufeinander folgende Töne mit der Pfeife, und zwar lang, kurz, kurz (– · ·).",
      "Mindestens alle zwei Minuten drei aufeinander folgende Töne mit der Pfeife, und zwar lang, lang, kurz (– – ·).",
      "Mit der Pfeife kurz, lang, kurz (· – ·)."
    ]
  },
  // Frage 122
  {
    id: "see_122",
    nummer: 122,
    frage: "Welches Fahrzeug gibt bei verminderter Sicht mindestens jede Minute etwa 5 Sekunden lang rasches Läuten der Glocke?",
    bild: null,
    antworten: [
      "Ein Fahrzeug vor Anker von weniger als 100 m Länge.",
      "Ein Fahrzeug vor Anker von 100 und mehr Meter Länge.",
      "Ein geschlepptes Fahrzeug oder das letzte bemannte Fahrzeug eines Schleppverbandes in Fahrt.",
      "Ein Maschinenfahrzeug in Fahrt, das seine Maschine gestoppt hat und keine Fahrt durchs Wasser macht."
    ]
  },
  // Frage 123
  {
    id: "see_123",
    nummer: 123,
    frage: "Welches Fahrzeug gibt bei verminderter Sicht mindestens jede Minute etwa 5 Sekunden lang rasches Läuten der Glocke und unmittelbar danach ungefähr 5 Sekunden lang rasch den Gong schlagen?",
    bild: null,
    antworten: [
      "Ein Fahrzeug vor Anker von 100 und mehr Meter Länge.",
      "Ein Fahrzeug vor Anker von weniger als 100 m Länge.",
      "Ein geschlepptes Fahrzeug oder das letzte bemannte Fahrzeug eines Schleppverbandes in Fahrt.",
      "Ein Maschinenfahrzeug in Fahrt, das seine Maschine gestoppt hat und keine Fahrt durchs Wasser macht."
    ]
  },
  // Frage 124
  {
    id: "see_124",
    nummer: 124,
    frage: "Welches zusätzliche Schallsignal darf jeder Ankerlieger bei verminderter Sicht geben, um einem sich nähernden Fahrzeug seinen Standort anzuzeigen?",
    bild: null,
    antworten: [
      "Mit der Pfeife kurz, lang, kurz (· – ·).",
      "Mindestens alle zwei Minuten ein kräftiges Schallsignal, das mit den vorgeschriebenen nicht verwechselt werden kann.",
      "Mindestens alle zwei Minuten drei aufeinander folgende Töne mit der Pfeife, und zwar lang, kurz, kurz (– · ·).",
      "Mindestens alle zwei Minuten drei aufeinander folgende Töne mit der Pfeife, und zwar lang, lang, kurz (– – ·)."
    ]
  },
  // Frage 125
  {
    id: "see_125",
    nummer: 125,
    frage: "Woran kann man feststellen, ob die Möglichkeit der Gefahr eines Zusammenstoßes besteht?",
    bild: null,
    antworten: [
      "Wenn sich der Abstand zum anderen Fahrzeug verringert und sich die Peilung nicht oder nicht merklich ändert.",
      "Wenn sich der Abstand zum anderen Fahrzeug verringert und sich der Kurs nicht oder nicht merklich ändert.",
      "Wenn sich der Abstand zum anderen Fahrzeug verringert und sich die Kompasspeilung ändert.",
      "Wenn sich der Abstand zum anderen Fahrzeug verringert und sich der Kurs ändert."
    ]
  },
  // Frage 126
  {
    id: "see_126",
    nummer: 126,
    frage: "Zwei in Sicht befindliche Segelfahrzeuge nähern sich im freien Seeraum oder außerhalb des Fahrwassers so, dass die Möglichkeit der Gefahr eines Zusammenstoßes besteht. Welches Fahrzeug muss dem anderen ausweichen, wenn sie den Wind von derselben Seite haben?",
    bild: null,
    antworten: [
      "Das luwärtige Fahrzeug dem leewärtigen Fahrzeug.",
      "Das leewärtige Fahrzeug dem luwärtigen Fahrzeug.",
      "Dasjenige Fahrzeug, das den Wind von Backbord hat.",
      "Dasjenige Fahrzeug, das den Wind von Steuerbord hat."
    ]
  },
  // Frage 127
  {
    id: "see_127",
    nummer: 127,
    frage: "Wie müssen sich zwei in Sicht befindliche Maschinenfahrzeuge verhalten, die sich einander auf entgegengesetzten oder fast entgegengesetzten Kursen nähern, um die Möglichkeit der Gefahr eines Zusammenstoßes zu vermeiden?",
    bild: null,
    antworten: [
      "Jedes Fahrzeug muss seinen Kurs nach Steuerbord ändern.",
      "Jedes Fahrzeug muss seinen Kurs nach Backbord ändern.",
      "Es muss das luwärtige Fahrzeug dem leewärtigen Fahrzeug ausweichen.",
      "Es muss das leewärtige Fahrzeug dem luwärtigen Fahrzeug ausweichen."
    ]
  },
  // Frage 128
  {
    id: "see_128",
    nummer: 128,
    frage: "Wie hat sich ein Maschinenfahrzeug im freien Seeraum oder außerhalb des Fahrwassers gegenüber einem in Sicht befindlichen Segelfahrzeug zu verhalten, wenn die Möglichkeit der Gefahr eines Zusammenstoßes besteht?",
    bild: null,
    antworten: [
      "Das Maschinenfahrzeug muss ausweichen.",
      "Das Maschinenfahrzeug muss Kurs und Geschwindigkeit beibehalten.",
      "Das Maschinenfahrzeug muss seine Fahrt verringern.",
      "Das Maschinenfahrzeug muss vorsichtig manövrieren bis die Gefahr vorüber ist."
    ]
  },
  // Frage 129
  {
    id: "see_129",
    nummer: 129,
    frage: "Wie hat sich ein Maschinenfahrzeug im freien Seeraum oder außerhalb des Fahrwassers gegenüber einem in Sicht befindlichen manövrierunfähigen Fahrzeug zu verhalten, wenn die Möglichkeit der Gefahr eines Zusammenstoßes besteht?",
    bild: null,
    antworten: [
      "Das Maschinenfahrzeug muss ausweichen.",
      "Das Maschinenfahrzeug muss Kurs und Geschwindigkeit beibehalten.",
      "Das Maschinenfahrzeug muss seinen Kurs nach Steuerbord ändern.",
      "Das Maschinenfahrzeug muss seine Fahrt verringern."
    ]
  },
  // Frage 130
  {
    id: "see_130",
    nummer: 130,
    frage: "Wie hat sich ein Maschinenfahrzeug im freien Seeraum oder außerhalb des Fahrwassers gegenüber einem in Sicht befindlichen manövrierbehinderten Fahrzeug zu verhalten, wenn die Möglichkeit der Gefahr eines Zusammenstoßes besteht?",
    bild: null,
    antworten: [
      "Das Maschinenfahrzeug muss ausweichen.",
      "Das Maschinenfahrzeug muss Kurs und Geschwindigkeit beibehalten.",
      "Das Maschinenfahrzeug muss seinen Kurs nach Steuerbord ändern.",
      "Das Maschinenfahrzeug muss seine Fahrt verringern."
    ]
  },
  // Frage 131
  {
    id: "see_131",
    nummer: 131,
    frage: "Wie hat sich ein Maschinenfahrzeug im freien Seeraum oder außerhalb des Fahrwassers gegenüber einem in Sicht befindlichen fischenden Fahrzeug zu verhalten, wenn die Möglichkeit der Gefahr eines Zusammenstoßes besteht?",
    bild: null,
    antworten: [
      "Das Maschinenfahrzeug muss ausweichen.",
      "Das Maschinenfahrzeug muss Kurs und Geschwindigkeit beibehalten.",
      "Das Maschinenfahrzeug muss den großtmöglichen Abstand einhalten.",
      "Das Maschinenfahrzeug muss vorsichtig manövrieren, bis die Gefahr vorüber ist."
    ]
  },
  // Frage 132
  {
    id: "see_132",
    nummer: 132,
    frage: "Wie hat sich ein Segelfahrzeug im freien Seeraum oder außerhalb des Fahrwassers gegenüber einem in Sicht befindlichen fischenden Fahrzeug zu verhalten, wenn die Möglichkeit der Gefahr eines Zusammenstoßes besteht?",
    bild: null,
    antworten: [
      "Das Segelfahrzeug muss ausweichen.",
      "Das Segelfahrzeug muss seinen Kurs nach Steuerbord ändern.",
      "Das Segelfahrzeug darf die sichere Durchfahrt nicht behindern.",
      "Das Segelfahrzeug muss Kurs und Geschwindigkeit zunächst beibehalten."
    ]
  },
  // Frage 133
  {
    id: "see_133",
    nummer: 133,
    frage: "Wie muss man sich gegenüber diesem Fahrzeug verhalten?",
    bild: 133,
    antworten: [
      "Die sichere Durchfahrt des Fahrzeugs darf nicht behindert werden.",
      "Das Fahrzeug muss an Steuerbord passiert werden.",
      "Sog und Wellenschlag vermeiden.",
      "Kurs und Geschwindigkeit beibehalten."
    ]
  },
  // Frage 134
  {
    id: "see_134",
    nummer: 134,
    frage: "Wie muss man sich gegenüber diesem Fahrzeug verhalten?",
    bild: 134,
    antworten: [
      "Die sichere Durchfahrt des Fahrzeugs darf nicht behindert werden.",
      "Das Fahrzeug muss an Steuerbord passiert werden.",
      "Sog und Wellenschlag vermeiden.",
      "Kurs und Geschwindigkeit beibehalten."
    ]
  },
  // Frage 135
  {
    id: "see_135",
    nummer: 135,
    frage: "Wie verhält sich der Kurshaltepflichtige vor Einleitung des Manövers des letzten Augenblicks gegenüber einem ausweichpflichtigen Fahrzeug?",
    bild: null,
    antworten: [
      "Kurs und Geschwindigkeit zunächst beibehalten und dem Ausweichpflichtigen besondere Aufmerksamkeit widmen.",
      "Kurs oder Geschwindigkeit anpassen und dem Ausweichpflichtigen besondere Aufmerksamkeit widmen.",
      "Kurs nach Steuerbord ändern. Geschwindigkeit verringern und dem Ausweichpflichtigen besondere Aufmerksamkeit widmen.",
      "Kurs nach Steuerbord ändern, Geschwindigkeit zunächst beibehalten und dem Ausweichpflichtigen besondere Aufmerksamkeit widmen."
    ]
  },
  // Frage 136
  {
    id: "see_136",
    nummer: 136,
    frage: "Wie muss sich ein Ausweichpflichtiger gegenüber einem Kurshalter verhalten?",
    bild: null,
    antworten: [
      "Das Ausweichmanöver muss frühzeitig, durchgreifend und klar erkennbar durchgeführt werden.",
      "Der Kurs muss bei Annäherung an den Kurshalter Schritt für Schritt so angepasst werden, dass das Heck des Anderen sicher umfahren wird.",
      "Das Manöver des letzten Augenblicks ist durchzuführen. Es muss so ausgewichen werden, wie es zur Vermeidung eines Zusammenstoßes am dienlichsten ist.",
      "Die Fahrt ist auf das für die Steuerfähigkeit erforderliche Mindestmaß zu reduzieren; im Zweifelsfall muss ganz aufgestoppt werden."
    ]
  },
  // Frage 137
  {
    id: "see_137",
    nummer: 137,
    frage: "Wie hat sich ein überholendes Fahrzeug zu verhalten?",
    bild: null,
    antworten: [
      "Es hat dem zu überholenden Fahrzeug auszuweichen.",
      "Es muss den großtmöglichen Abstand zum überholten Fahrzeug einhalten und Sog und Wellenschlag vermeiden.",
      "Es darf die sichere Durchfahrt des zu überholenden Fahrzeugs nicht behindern.",
      "Es muss vor dem Überholen ein Schallsignal abgeben, um die Zustimmung des zu überholenden Fahrzeugs einzuholen."
    ]
  },
  // Frage 138
  {
    id: "see_138",
    nummer: 138,
    frage: "Wie hat man sich zu verhalten, wenn man bei verminderter Sicht anscheinend vorlicher als querab das Schallsignal eines anderen Fahrzeugs hört?",
    bild: null,
    antworten: [
      "Es ist ebenfalls ein Schallsignal abzugeben und die Fahrt soweit zu verlangsamen, dass die Steuerfähigkeit noch erhalten bleibt. Erforderlichenfalls ist ganz aufzustoppen. In jedem Fall ist vorsichtig zu manövrieren, bis die Gefahr eines Zusammenstoßes vorüber ist.",
      "Es ist ebenfalls ein Schallsignal abzugeben und frühzeitig, durchgreifend und klar erkennbar auszuweichen.",
      "Es sind mindestens fünf kurze Töne mit der Pfeife abzugeben und das Manöver des letzten Augenblicks durchzuführen. Dabei ist so zu manövrieren, wie es zur Vermeidung eines Zusammenstoßes am dienlichsten ist.",
      "Es ist ebenfalls ein Schallsignal abzugeben. Kurs und Geschwindigkeit sind so lange beizubehalten, bis das andere Fahrzeug in Sicht kommt. Dann ist die Ausweichsituation nach KVR zu prüfen und man muss sich entsprechend verhalten."
    ]
  },
  // Frage 139
  {
    id: "see_139",
    nummer: 139,
    frage: "Wie verhält man sich als Kurshalter, wenn man feststellt, dass ein anderes Fahrzeug seiner Ausweichpflicht nicht nachkommt und die Gefahr einer unmittelbaren Kollision bevorsteht?",
    bild: null,
    antworten: [
      "Man gibt mindestens fünf kurze Töne mit der Pfeife ab und führt das 'Manöver des letzten Augenblicks' durch. Dabei ist so zu manövrieren, wie es zur Vermeidung eines Zusammenstoßes am dienlichsten ist.",
      "Man gibt ein Schallsignal (vier kurze Töne) ab und verlangsamt die Fahrt soweit, dass die Steuerfähigkeit noch erhalten bleibt. Erforderlichenfalls ist ganz aufzustoppen. In jedem Fall ist vorsichtig zu manövrieren, bis die Gefahr eines Zusammenstoßes vorüber ist.",
      "Man gibt mindestens fünf kurze Töne mit der Pfeife ab und reduziert die Geschwindigkeit, um Sog und Wellenschlag zu vermeiden.",
      "Man behält Kurs und Geschwindigkeit zunächst bei und widmet dem Ausweichpflichtigen besondere Aufmerksamkeit."
    ]
  },
  // Frage 140
  {
    id: "see_140",
    nummer: 140,
    frage: "Welche Bedeutung hat folgendes Schallsignal? (mindestens · · · · ·)",
    bild: null,
    antworten: [
      "Ein ausweichpflichtiges Fahrzeug wird auf seine Ausweichpflicht aufmerksam gemacht.",
      "Allgemeines Gefahren- und Warnsignal.",
      "Bleib-Weg-Signal, Explosionsgefahr durch gefährliche Güter. Sofort den Gefahrenbereich verlassen. Feuer und Zündfunken vermeiden.",
      "Seeschifffahrtsstraße gesperrt. Weiterfahrt verboten, sofort aufstoppen."
    ]
  },
  // Frage 141
  {
    id: "see_141",
    nummer: 141,
    frage: "Welche Bedeutung hat folgendes Schallsignal? (· – ·)",
    bild: null,
    antworten: [
      "Ein Ankerlieger macht ein sich näherndes Fahrzeug auf eine gefährliche Annäherung aufmerksam.",
      "Die Maschine des Fahrzeugs läuft rückwärts.",
      "Schutzbedürftige Anlage: Geschwindigkeit reduzieren, Sog und Wellenschlag vermeiden.",
      "Maschinenfahrzeug, das seine Maschinen gestoppt hat und keine Fahrt durchs Wasser macht."
    ]
  },
  // Frage 142
  {
    id: "see_142",
    nummer: 142,
    frage: "Was ist bei der Benutzung eines Verkehrstrennungsgebietes zu beachten?",
    bild: null,
    antworten: [
      "Auf dem entsprechenden Einbahnweg in der allgemeinen Verkehrsrichtung fahren, soweit wie möglich von der Trennzone/ Trennlinie klar halten, in der Regel an den Enden des Einbahnweges ein- oder auslaufen, seitliches Ein- oder Auslaufen in möglichst kleinem Winkel zur allgemeinen Verkehrsrichtung.",
      "Auf dem entsprechenden Einbahnweg in Verkehrsrichtung links von der Trennzone fahren, so nah wie möglich an der Trennzone/Trennlinie fahren, in der Regel an den Enden des Einbahnweges ein- oder auslaufen, seitliches Ein- oder Auslaufen in möglichst rechtem Winkel zur allgemeinen Verkehrsrichtung.",
      "Die Benutzung von Verkehrstrennungsgebieten ist für Segelfahrzeuge sowie für Maschinenfahrzeuge unter 20 m Länge nicht gestattet. Diese Fahrzeuge haben sich soweit wie möglich von Verkehrstrennungsgebieten klar zu halten und müssen durch ihren Kurs klar zu erkennen geben, dass sie ein Verkehrstrennungsgebiet nicht benutzen.",
      "Auf den entsprechenden Einbahnwegen in der allgemeinen Verkehrsrichtung fahrende Fahrzeuge müssen sich soweit wie möglich von der Trennzone/Trennlinie klar halten und haben Vorfahrt gegenüber allen Fahrzeugen, die in ein Verkehrstrennungsgebiet einlaufen oder ein solches queren."
    ]
  },
  // Frage 143
  {
    id: "see_143",
    nummer: 143,
    frage: "Was ist hinsichtlich des Querens eines Verkehrstrennungsgebietes zu beachten?",
    bild: null,
    antworten: [
      "Das Queren ist möglichst zu vermeiden. Falls gequert werden muss, hat dies möglichst mit der Kielrichtung im rechten Winkel zur allgemeinen Verkehrsrichtung zu erfolgen. Die Kielrichtung des querenden Fahrzeugs muss auch dann einen rechten Winkel zur allgemeinen Verkehrsrichtung bilden, wenn das Fahrzeug durch Wind oder Strom versetzt wird.",
      "Das Queren ist möglichst zu vermeiden. Falls gequert werden muss, hat dies möglichst mit einem rechtweisenden Kurs zur allgemeinen Verkehrsrichtung zu erfolgen. Der rechtweisende Kurs des querenden Fahrzeugs muss auch dann einen rechten Winkel zur allgemeinen Verkehrsrichtung bilden, wenn das Fahrzeug durch Wind oder Strom versetzt wird.",
      "Das Queren von Verkehrstrennungsgebieten ist für Segelfahrzeuge sowie für Maschinenfahrzeuge unter 20 m Länge verboten. Diese Fahrzeuge haben sich soweit wie möglich von den Enden der Verkehrstrennungsgebiete klar zu halten und müssen durch ihren Kurs zu erkennen geben, dass sie ein Verkehrstrennungsgebiet nicht queren.",
      "Das Queren ist möglichst zu vermeiden. Falls gequert werden muss, hat dies mit der Kielrichtung in einem möglichst spitzen Winkel zur allgemeinen Verkehrsrichtung zu erfolgen. Die Kielrichtung des querenden Fahrzeugs muss auch dann einen möglichst spitzen Winkel zur allgemeinen Verkehrsrichtung bilden, wenn das Fahrzeug durch Wind oder Strom versetzt wird."
    ]
  },
  // Frage 144
  {
    id: "see_144",
    nummer: 144,
    frage: "In welcher Vorschrift findet man die Regeln zum Befahren von Verkehrstrennungsgebieten?",
    bild: null,
    antworten: [
      "In den Kollisionsverhütungsregeln.",
      "In der Seeschifffahrtsstraßen-Ordnung.",
      "In den Kollisionsverhütungsregeln und der Seeschifffahrtsstraßen-Ordnung.",
      "In der Schifffahrtsordnung Emsmündung."
    ]
  },
  // Frage 145
  {
    id: "see_145",
    nummer: 145,
    frage: "Wie hat sich ein Maschinenfahrzeug bei Kollisionsgefahr in einem Einbahnweg eines Verkehrstrennungsgebietes gegenüber einem Maschinenfahrzeug zu verhalten, das den Einbahnweg von Steuerbord kommend quert?",
    bild: null,
    antworten: [
      "Es muss dem anderen Fahrzeug ausweichen.",
      "Es darf die sichere Durchfahrt des Maschinenfahrzeugs nicht behindern.",
      "Dem querenden Fahrzeug hat es besondere Aufmerksamkeit zu widmen.",
      "Es muss das Manöver des letzten Augenblicks durchführen."
    ]
  },
  // Frage 146
  {
    id: "see_146",
    nummer: 146,
    frage: "Wie hat sich ein Segelfahrzeug beim Queren eines Verkehrstrennungsgebietes gegenüber einem Maschinenfahrzeug zu verhalten, das auf einem Einbahnweg in der allgemeinen Verkehrsrichtung fährt?",
    bild: null,
    antworten: [
      "Es darf die sichere Durchfahrt des Maschinenfahrzeugs nicht behindern.",
      "Es unterliegt der Kurshaltepflicht. Kurs und Geschwindigkeit sind beizubehalten.",
      "Es muss warten. Alle dem Einbahnweg folgenden Fahrzeuge haben Vorfahrt.",
      "Es hat Vorfahrt. Alle dem Einbahnweg folgenden Fahrzeuge müssen warten."
    ]
  },
  // Frage 147
  {
    id: "see_147",
    nummer: 147,
    frage: "Wie haben sich Fahrzeuge von weniger als 20 m Länge oder Segelfahrzeuge in Verkehrstrennungsgebieten zu verhalten?",
    bild: null,
    antworten: [
      "Sie dürfen die sichere Durchfahrt eines dem Einbahnweg folgenden Maschinenfahrzeugs nicht behindern.",
      "Sie gelten als Kleinfahrzeuge und dürfen Verkehrstrennungsgebiete nicht befahren.",
      "Sie gelten als Kleinfahrzeuge und dürfen Verkehrstrennungsgebiete nur am Tage und bei guter Sicht befahren.",
      "Sie dürfen die Trennzone befahren, damit der durchgehende Verkehr nicht behindert wird."
    ]
  },
  // Frage 148
  {
    id: "see_148",
    nummer: 148,
    frage: "Was ist das für ein Fahrzeug und was ist zu beachten?",
    bild: 148,
    antworten: [
      "Ein manövrierbehindertes Fahrzeug, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert. Es ist an der Seite zu passieren, an der zwei schwarze Rhomben senkrecht übereinander angeordnet sind.",
      "Ein manövrierbehindertes Fahrzeug, das die Schifffahrt behindert. Es ist an der Seite zu passieren, an der zwei schwarze Bälle senkrecht übereinander angeordnet sind.",
      "Ein manövrierbehindertes Fahrzeug, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert. Es ist an der Seite zu passieren, die in meiner Fahrtrichtung rechts liegt.",
      "Ein manövrierbehindertes Fahrzeug, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert. Es darf an keiner Seite passiert werden."
    ]
  },
  // Frage 149
  {
    id: "see_149",
    nummer: 149,
    frage: "Was ist das für ein Fahrzeug und was ist zu beachten?",
    bild: 149,
    antworten: [
      "Ein manövrierbehindertes Fahrzeug mit Fahrt durchs Wasser, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt nicht behindert. Es ist an der Seite zu passieren, die in Fahrtrichtung rechts liegt.",
      "Ein manövrierbehindertes Fahrzeug mit Fahrt durchs Wasser, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert. Es ist an der Seite zu passieren, die in Fahrtrichtung links liegt.",
      "Ein manövrierunfähiges Fahrzeug mit Fahrt durchs Wasser, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert. Es ist an der Seite zu passieren, die in Fahrtrichtung rechts liegt.",
      "Ein manövrierbehindertes Fahrzeug mit Fahrt durchs Wasser, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert. Es darf an beiden Seiten passiert werden."
    ]
  },
  // Frage 150
  {
    id: "see_150",
    nummer: 150,
    frage: "Was ist das für ein Fahrzeug und was ist zu beachten?",
    bild: 150,
    antworten: [
      "Ein manövrierbehindertes Fahrzeug ohne Fahrt durchs Wasser, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert. Es ist an der Seite zu passieren, an der zwei grüne Rundumlichter senkrecht übereinander angeordnet sind.",
      "Ein manövrierbehindertes Fahrzeug ohne Fahrt durchs Wasser, das die Schifffahrt behindert. Es ist an der Seite zu passieren, an der zwei rote Rundumlichter senkrecht übereinander angeordnet sind.",
      "Ein manövrierbehindertes Fahrzeug ohne Fahrt durchs Wasser, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert. Es darf an der Seite passiert werden, die in Fahrtrichtung rechts liegt.",
      "Ein manövrierbehindertes Fahrzeug ohne Fahrt durchs Wasser, das baggert oder Unterwasserarbeiten ausführt und dabei die Schifffahrt behindert. Es darf an keiner Seite passiert werden."
    ]
  },
  // Frage 151
  {
    id: "see_151",
    nummer: 151,
    frage: "Was ist das für ein Fahrzeug und was ist zu beachten?",
    bild: 151,
    antworten: [
      "Fahrzeug mit gefährlichen Gütern, Abstand halten, Rauchen und offenes Feuer verboten.",
      "Fahrzeug des öffentlichen Dienstes. Es darf von den Verkehrsregeln abweichen.",
      "Fahrzeug in Seenot. Hilfe leisten bzw. weitere Hilfe anfordern.",
      "Fahrzeug mit Taucher im Einsatz. Großen Abstand halten."
    ]
  },
  // Frage 152
  {
    id: "see_152",
    nummer: 152,
    frage: "Wo ist festgelegt, welche Wasserflächen Seeschifffahrtsstraßen sind?",
    bild: null,
    antworten: [
      "Seeschifffahrtsstraßen-Ordnung und Schifffahrtsordnung Emsmündung.",
      "Seeschifffahrtsstraßen-Ordnung und Kollisionsverhütungsregeln.",
      "Kollisionsverhütungsregeln und Schifffahrtsordnung Emsmündung.",
      "Kollisionsverhütungsregeln und Seeaufgabengesetz."
    ]
  },
  // Frage 153
  {
    id: "see_153",
    nummer: 153,
    frage: "Welche örtlichen Sondervorschriften zusätzlich zur Seeschifffahrtsstraßen-Ordnung (SeeSchStrO) und zur Schifffahrtsordnung Emsmündung (EmsSchO) gibt es und was ist darin geregelt?",
    bild: null,
    antworten: [
      "Die Bekanntmachungen der Generaldirektion Wasserstraßen und Schifffahrt (GDWS), die besondere örtliche Regelungen enthalten und Hinweise für die einzelnen Seeschifffahrtsstraßen geben.",
      "Die Nachrichten für Seefahrer (NfS), herausgegeben vom Bundesamt für Seeschifffahrt und Hydrographie, sowie die Bekanntmachungen für Seefahrer (BfS) der örtlich zuständigen Wasserstraßen- und Schifffahrtsämter, die auf alle Veränderungen hinsichtlich Betonnung, Befeuerung, Wracks und Untiefen sowie auf die Schifffahrt betreffende Maßnahmen und Ereignisse hinweisen.",
      "Die Bekanntmachung der Generaldirektion Wasserstraßen und Schifffahrt (GDWS) sowie die nautische Veröffentlichung 'Sicherheit auf dem Wasser', herausgegeben durch das Bundesministerium für Digitales und Verkehr (BMDV), mit wichtigen Regeln und Tipps für Wassersportler.",
      "Die Nachrichten für Seefahrer (NfS) und die Bekanntmachungen für Seefahrer (BfS), die besondere örtliche Regelungen enthalten und Hinweise für die einzelnen Seeschifffahrtsstraßen geben."
    ]
  },
  // Frage 154
  {
    id: "see_154",
    nummer: 154,
    frage: "Was ist das für ein Fahrzeug und was ist zu beachten?",
    bild: 154,
    antworten: [
      "Fahrzeug des öffentlichen Dienstes im Einsatz. Es darf von den Verkehrsvorschriften abweichen.",
      "Fahrzeug der Bundesmarine im Einsatz. Es hat Munition oder andere Gefahrgüter an Bord.",
      "Lotsenfahrzeug mit Sonderrechten im Einsatz. Es darf vom Rechtsfahrgebot abweichen.",
      "Tiefgangbehindertes Fahrzeug. Es darf nicht behindert werden."
    ]
  },
  // Frage 155
  {
    id: "see_155",
    nummer: 155,
    frage: "Wer gibt das Sichtzeichen 'Leuchtkugeln mit weißen Sternen' und was ist zu beachten?",
    bild: null,
    antworten: [
      "Fahrzeug der Bundeswehr, der Bundespolizei oder Maschinenfahrzeug, das Schießscheiben schleppt bei Übungen. Man hält sich frei.",
      "Fahrzeug, das mit Netzen, Leinen, Schleppnetzen oder anderen Fanggeräten fischt und auf sich aufmerksam macht. Ausreichenden Abstand halten.",
      "Fahrzeug in Seenot, das auf sich aufmerksam macht. Hilfe leisten, ggf. weitere Hilfe anfordern.",
      "Maschinenfahrzeug über 50 m Länge bei der Anforderung eines Lotsen. Man behält Kurs und Geschwindigkeit bei."
    ]
  },
  // Frage 156
  {
    id: "see_156",
    nummer: 156,
    frage: "Was sind Fahrwasser im Sinne der Seeschifffahrtsstraßen-Ordnung (SeeSchStrO) und der Schifffahrtsordnung Emsmündung (EmsSchO)?",
    bild: null,
    antworten: [
      "Es sind Wasserflächen, die durchgehend durch Fahrwasserseitenbezeichnung begrenzt oder gekennzeichnet sind, binnenwärts der Flussmündungen auch nicht gekennzeichnete Wasserflächen, die für die durchgehende Schifffahrt bestimmt sind.",
      "Es sind Wasserflächen, die für Seeschiffe zugelassen sind; binnenwärts der Flussmündungen sind auch Binnenschiffe und Sportboote zugelassen.",
      "Es sind Wasserflächen, die durchgehend durch Fahrwasserseitenbezeichnung begrenzt oder gekennzeichnet sind und auf denen das Wasserskifahren sowie das Fahren mit Wassermotorrädern erlaubt ist, sofern die durchgehende Schifffahrt nicht behindert wird.",
      "Es sind Wasserflächen, die durchgehend durch Fahrwasserseitenbezeichnung begrenzt oder gekennzeichnet sind und auf denen die Sportbootführerscheinverordnung Gültigkeit hat."
    ]
  },
  // Frage 157
  {
    id: "see_157",
    nummer: 157,
    frage: "Welches ist - außer in Wattgebieten - die Steuerbordseite eines Fahrwassers?",
    bild: null,
    antworten: [
      "Es ist die Seite, die ein von See kommendes Schiff an seiner Steuerbordseite hat.",
      "Es ist die Seite, die ein von See kommendes Schiff an seiner Backbordseite hat.",
      "Es ist die Seite, die von See kommend mit roten Tonnen bezeichnet ist.",
      "Es ist die Seite, auf der die Tonnen mit fortlaufenden geraden Zahlen gekennzeichnet sind."
    ]
  },
  // Frage 158
  {
    id: "see_158",
    nummer: 158,
    frage: "Welche verkehrsrechtliche Verpflichtung hat ein Fahrzeugführer nach § 3 der Seeschifffahrtsstraßen-Ordnung (SeeSchStrO), dessen Fahrzeug mit einer UKW-Funkanlage ausgerüstet ist?",
    bild: null,
    antworten: [
      "Er ist verpflichtet, die von der Verkehrszentrale gegebenen Verkehrsinformationen und -unterstützungen abzuhören und zu berücksichtigen.",
      "Er ist verpflichtet, bei der Nutzung einer UKW-Funkanlage im Besitz des entsprechenden Funkzeugnisses zu sein.",
      "Er ist verpflichtet, bei verminderter Sicht regelmäßig seinen Schiffsnamen und seine Position der Verkehrszentrale mitzuteilen.",
      "Er ist verpflichtet, die Funkanlage während der Fahrt in Betrieb zu halten und alle sein Fahrzeug betreffenden Mitteilungen im Schiffslogbuch festzuhalten."
    ]
  },
  // Frage 159
  {
    id: "see_159",
    nummer: 159,
    frage: "Welches Licht muss ein Fahrzeug unter Segel von weniger als 12 m Länge oder ein Fahrzeug unter Ruder auf der Seeschifffahrtsstraße führen, wenn es die nach den Kollisionsverhütungsregeln (KVR) vorgeschriebenen Lichter nicht führen kann?",
    bild: null,
    antworten: [
      "Ein weißes Rundumlicht.",
      "Ein rotes Rundumlicht.",
      "Ein weißes Topplicht.",
      "Eine Dreifarbenlaterne."
    ]
  },
  // Frage 160
  {
    id: "see_160",
    nummer: 160,
    frage: "Wann darf ein Maschinenfahrzeug von weniger als 7 m Länge auf Seeschifffahrtsstraßen nicht fahren, wenn es die nach den Kollisionsverhütungsregeln (KVR) vorgeschriebenen Lichter nicht führen kann?",
    bild: null,
    antworten: [
      "Es darf in der Zeit, in der die Lichterführung vorgeschrieben ist, nicht fahren, es sei denn, dass ein Notstand vorliegt.",
      "Es darf in der Zeit zwischen Sonnenaufgang und Sonnenuntergang nicht fahren.",
      "Es darf in der Zeit, in der die Lichterführung vorgeschrieben ist, nur dann fahren, wenn ein betriebsbedingtes Signalhorn an Bord vorhanden ist.",
      "Es darf in der Zeit, in der die Lichterführung vorgeschrieben ist, nur dann fahren, wenn eine Handlampe bereit liegt."
    ]
  },
  // Frage 161
  {
    id: "see_161",
    nummer: 161,
    frage: "Welches Schallsignal ist beim Einlaufen in Fahrwasser und Häfen zu geben, wenn die Verkehrslage es erfordert?",
    bild: null,
    antworten: [
      "Ein langer Ton.",
      "Ein kurzer Ton.",
      "Ein kurzer und ein langer Ton.",
      "Ein langer und ein kurzer Ton."
    ]
  },
  // Frage 162
  {
    id: "see_162",
    nummer: 162,
    frage: "Welche Bedeutung hat folgendes Schallsignal? (– · · · · – · · · ·)",
    bild: null,
    antworten: [
      "Allgemeines 'Gefahr- und Warnsignal'.",
      "Sperrung der Seeschifffahrtsstraße.",
      "Sofort anhalten (Fahrzeug des öffentlichen Dienstes).",
      "Brücke/Schleuse kann vorübergehend nicht geöffnet werden."
    ]
  },
  // Frage 163
  {
    id: "see_163",
    nummer: 163,
    frage: "Wie lautet das 'allgemeine Gefahr- und Warnsignal'?",
    bild: null,
    antworten: [
      "Zwei Gruppen von je einem langen und vier kurzen Tönen.",
      "Zwei Gruppen von je drei langen Tönen.",
      "Zwei Gruppen von je vier kurzen Tönen.",
      "Zwei Gruppen von je einem kurzen und vier langen Tönen."
    ]
  },
  // Frage 164
  {
    id: "see_164",
    nummer: 164,
    frage: "Wann ist das 'allgemeine Gefahr- und Warnsignal' zu geben?",
    bild: null,
    antworten: [
      "Wenn ein Fahrzeug ein anderes Fahrzeug gefährdet oder durch dieses selbst gefährdet wird.",
      "Wenn ein Fahrzeug ein anderes Fahrzeug im Fahrwasser an Steuerbord überholen will.",
      "Bei Nebel oder verminderter Sicht, um auf die eigene Position aufmerksam zu machen.",
      "Bei Annäherung an ein Fahrzeug mit gefährlicher Ladung."
    ]
  },
  // Frage 165
  {
    id: "see_165",
    nummer: 165,
    frage: "Wie haben sich Fahrzeuge zu verhalten, die in ein Fahrwasser einlaufen, ein Fahrwasser queren, im Fahrwasser drehen oder ihre Anker- und Liegeplätze verlassen?",
    bild: null,
    antworten: [
      "Sie haben die Vorfahrt der dem Fahrwasserverlauf folgenden Fahrzeuge zu beachten.",
      "Sie haben die Vorfahrt vor den Fahrzeugen im Fahrwasser.",
      "Sie haben einen kurzen Ton als Achtungssignal abzugeben.",
      "Sie haben ihr Manöver so durchzuführen, dass andere Fahrzeuge nicht behindert werden."
    ]
  },
  // Frage 166
  {
    id: "see_166",
    nummer: 166,
    frage: "Wie haben Segelfahrzeuge im Fahrwasser, die nicht deutlich der Richtung eines Fahrwassers folgen, untereinander auszuweichen?",
    bild: null,
    antworten: [
      "Sie haben untereinander nach den Regeln der KVR auszuweichen, wenn sie dadurch vorfahrtberechtigte Fahrzeuge nicht gefährden oder behindern.",
      "Sie haben untereinander nach den Regeln der Seeschifffahrtsstraßen-Ordnung auszuweichen, wenn sie dadurch vorfahrtberechtigte Fahrzeuge nicht gefährden oder behindern.",
      "Sie haben untereinander nach den Regeln der Schifffahrtsordnung Emsmündung auszuweichen, wenn sie dadurch vorfahrtberechtigte Fahrzeuge nicht gefährden oder behindern.",
      "Sie haben untereinander nach den Regeln der Binnenschifffahrtsstraßen-Ordnung auszuweichen, wenn sie dadurch vorfahrtberechtigte Fahrzeuge nicht gefährden oder behindern."
    ]
  },
  // Frage 167
  {
    id: "see_167",
    nummer: 167,
    frage: "Welche Ausweichregeln gelten außerhalb des Fahrwassers?",
    bild: null,
    antworten: [
      "Die Regeln der KVR.",
      "Die Regeln der Seeschifffahrtsstraßen-Ordnung.",
      "Die Regeln der Schifffahrtsordnung Emsmündung.",
      "Die Regeln der Binnenschifffahrtsstraßen-Ordnung."
    ]
  },
  // Frage 168
  {
    id: "see_168",
    nummer: 168,
    frage: "Wo ist das Überholen verboten?",
    bild: null,
    antworten: [
      "An Engstellen, unübersichtlichen Krümmungen, in Schleusenbereichen, innerhalb durch Überholverbotszeichen gekennzeichneter Strecken, in der Nähe nicht frei fahrender Fähren in Fahrt.",
      "An Engstellen, unübersichtlichen Krümmungen, in Schleusenbereichen, innerhalb durch Überholverbotszeichen gekennzeichneter Strecken, in der Nähe nicht frei fahrender Fähren in Fahrt und außerhalb des Fahrwassers.",
      "An Engstellen, unübersichtlichen Krümmungen, in Schleusenbereichen, innerhalb durch Überholverbotszeichen gekennzeichneter Strecken, in der Nähe nicht frei fahrender Fähren in Fahrt, und in Verkehrstrennungsgebieten.",
      "An Engstellen, unübersichtlichen Krümmungen, innerhalb durch Überholverbotszeichen gekennzeichneter Strecken und in Nationalparks und besonders ausgewiesenen Naturschutzgebieten."
    ]
  },
  // Frage 169
  {
    id: "see_169",
    nummer: 169,
    frage: "Wo darf Wasserski gelaufen, Wassermotorrad gefahren oder mit einem Segelsurfbrett gefahren werden?",
    bild: null,
    antworten: [
      "Außerhalb des Fahrwassers, wenn es nicht von der Generaldirektion Wasserstraßen und Schifffahrt (GDWS) durch Bekanntmachung verboten ist. Im Fahrwasser auf Abschnitten, die durch die GDWS bekanntgemacht oder durch blaue Tafeln mit dem weißen Symbol eines Wasserskiläufers, eines Wassermotorrades oder eines Segelsurfers bezeichnet sind.",
      "Außerhalb der Seeschifffahrtsstraße, wenn es nicht von der Generaldirektion Wasserstraßen und Schifffahrt (GDWS) durch Bekanntmachung verboten ist. Innerhalb der Seeschifffahrtsstraße auf Abschnitten, die durch die GDWS bekanntgemacht oder durch blaue Tafeln mit dem weißen Symbol eines Wasserskiläufers, eines Wassermotorrades oder eines Segelsurfers bezeichnet sind.",
      "Auf der hohen See und auf den mit dieser zusammenhängenden, von Seeschiffen befahrbaren Gewässern, sofern dabei ein Abstand von mindestens 100 m zum Ufer eingehalten wird.",
      "Im Fahrwasser, wenn es nicht von der Generaldirektion Wasserstraßen und Schifffahrt (GDWS) durch Bekanntmachung verboten ist. Außerhalb des Fahrwassers auf Abschnitten, die durch die GDWS bekanntgemacht oder durch blaue Tafeln mit dem weißen Symbol eines Wasserskiläufers, eines Wassermotorrades oder eines Segelsurfers bezeichnet sind."
    ]
  },
  // Frage 170
  {
    id: "see_170",
    nummer: 170,
    frage: "Wie haben sich Führer von Zugbooten der Wasserskiläufer bzw. Wassermotorradfahrer und Segelsurfer bei der Annäherung an andere Fahrzeuge zu verhalten?",
    bild: null,
    antworten: [
      "Sie haben auszuweichen.",
      "Sie haben bei Annäherung an andere Fahrzeuge aufzustoppen und Sog und Wellenschlag zu vermeiden.",
      "Sie haben Vorfahrt und müssen vor dem Bug des anderen Fahrzeugs kreuzen.",
      "Sie müssen Kurs und Geschwindigkeit beibehalten."
    ]
  },
  // Frage 171
  {
    id: "see_171",
    nummer: 171,
    frage: "Wo ist das Ankern verboten?",
    bild: null,
    antworten: [
      "Im Fahrwasser, an Engstellen und in unübersichtlichen Krümmungen; im Umkreis von 300 m von schwimmenden Geräten, Wracks und sonstigen Schifffahrtshindernissen, Kabeltonnen und sonstigen Stellen für militärische und zivile Zwecke; vor Hafeneinfahrten, Schleusen, Anlegestellen und Sielen sowie in den Zufahrten des Nord-Ostsee-Kanals; innerhalb von Fähr- und Brückenstrecken; 300 m vor und hinter Ankerverbotszeichen.",
      "Im Fahrwasser, auf Seeschifffahrtsstraßen, an Engstellen und in unübersichtlichen Krümmungen; im Umkreis von 300 m von schwimmenden Geräten, Wracks und sonstigen Schifffahrtshindernissen, Kabeltonnen und sonstigen Stellen für militärische und zivile Zwecke; vor Hafeneinfahrten, Schleusen, Anlegestellen und Sielen sowie in den Zufahrten des Nord-Ostsee-Kanals; innerhalb von Fähr- und Brückenstrecken; 300 m vor und hinter Ankerverbotszeichen.",
      "Im Fahrwasser, an Engstellen und in unübersichtlichen Krümmungen; im Umkreis von 300 m von schwimmenden Geräten, Kabeltonnen und sonstigen Stellen für militärische und zivile Zwecke; vor Hafeneinfahrten, Schleusen, Anlegestellen und Sielen sowie in den Zufahrten des Nord-Ostsee-Kanals und in Vogelschutz- und Naturschutzgebieten sowie generell innerhalb von Nationalparks.",
      "Im Fahrwasser, wenn es durch die Generaldirektion Wasserstraßen und Schifffahrt (GDWS) bekanntgemacht worden ist. Außerhalb des Fahrwassers auf Abschnitten, die durch die GDWS bekanntgemacht oder durch entsprechende Sichtzeichen bezeichnet sind."
    ]
  },
  // Frage 172
  {
    id: "see_172",
    nummer: 172,
    frage: "Was ist zu unternehmen, um die Schifffahrt zu warnen, wenn das eigene Fahrzeug gesunken ist und ein Schifffahrtshindernis darstellt?",
    bild: null,
    antworten: [
      "Man informiert die Schifffahrtspolizeibehörde und gibt nach Möglichkeit die Position an.",
      "Man informiert die Deutsche Gesellschaft zur Rettung Schiffbrüchiger, damit das Hindernis gekennzeichnet werden kann.",
      "Man gibt ein Seenotsignal ab.",
      "Man informiert das Bundesamt für Seeschifffahrt und Hydrographie und gibt nach Möglichkeit die Position an."
    ]
  },
  // Frage 173
  {
    id: "see_173",
    nummer: 173,
    frage: "Bei welchem Signal dürfen Sportfahrzeuge in die Schleusen des Nord-Ostsee-Kanals einfahren?",
    bild: null,
    antworten: [
      "Wenn ein weißes unterbrochenes Licht gezeigt wird.",
      "Wenn ein weißes Funkellicht gezeigt wird.",
      "Wenn zwei grüne Lichter nebeneinander gezeigt werden.",
      "Wenn ein grünes Gleichtaktlicht gezeigt wird."
    ]
  },
  // Frage 174
  {
    id: "see_174",
    nummer: 174,
    frage: "Wo findet man Regeln für das Durchfahren des Nord-Ostsee-Kanals (NOK)?",
    bild: null,
    antworten: [
      "Ergänzende Vorschriften für den NOK in der Seeschifffahrtsstraßen-Ordnung sowie in den Bekanntmachungen der Generaldirektion Wasserstraßen und Schifffahrt (GDWS).",
      "Ergänzende Vorschriften für den NOK in der Seeschifffahrtsstraßen-Ordnung sowie in den Kollisionsverhütungsregeln.",
      "Ergänzende Vorschriften für den NOK in der Seeschifffahrtsstraßen-Ordnung sowie in der Sportbootführerscheinverordnung.",
      "Ergänzende Vorschriften für den NOK in der Seeschifffahrtsstraßen-Ordnung sowie im Seeaufgabengesetz."
    ]
  },
  // Frage 175
  {
    id: "see_175",
    nummer: 175,
    frage: "Was bedeuten im Nord-Ostsee-Kanal an einem Weichensignalmast drei unterbrochene rote Lichter übereinander und was ist zu beachten?",
    bild: null,
    antworten: [
      "Ausfahren für alle Fahrzeuge verboten; Aufhebung des Signals abwarten.",
      "Schutzbedürftige Anlage: Geschwindigkeit reduzieren, Sog und Wellenschlag vermeiden.",
      "Dauernde Sperrung der Seeschifffahrtsstraße; Weiterfahrt verboten.",
      "Dauernde Sperrung einer Teilstrecke der Seeschifffahrtsstraße; Weiterfahrt in der Teilstrecke verboten."
    ]
  },
  // Frage 176
  {
    id: "see_176",
    nummer: 176,
    frage: "Welche Bedeutung hat folgendes Tafelzeichen?",
    bild: 176,
    antworten: [
      "Die Geschwindigkeit durch das Wasser in km/h, auf dem Nord-Ostsee-Kanal (NOK) über Grund in km/h, die nicht überschritten werden darf.",
      "Mindestabstand in Metern, der in der nachfolgenden Strecke vom Aufstellungsort der Tafel an eingehalten werden muss.",
      "Die Geschwindigkeit durch das Wasser in sm/h (Knoten) auf dem Nord-Ostsee-Kanal (NOK) über Grund in sm/h, die nicht überschritten werden darf.",
      "Mindestabstand zu anderen Fahrzeugen in Metern, der im bekanntgemachten Streckenabschnitt nicht unterschritten werden darf."
    ]
  },
  // Frage 177
  {
    id: "see_177",
    nummer: 177,
    frage: "Welche Bedeutung haben folgende Sichtzeichen?",
    bild: 177,
    antworten: [
      "Schutzbedürftige Anlage.",
      "Dauernde Sperrung einer Teilstrecke der Seeschifffahrtsstraße.",
      "Zeitweilige Sperrung der Seeschifffahrtsstraße.",
      "Außergewöhnliche Schifffahrtsbehinderung."
    ]
  },
  // Frage 178
  {
    id: "see_178",
    nummer: 178,
    frage: "Welche Bedeutung hat folgendes Schallsignal und was ist zu beachten? (· · · ·)",
    bild: null,
    antworten: [
      "Brücke, Sperrwerk, Schleuse kann vorübergehend nicht geöffnet werden: Fahrt unterbrechen, Freigabe abwarten.",
      "Ein Ausweichpflichtiger wird vom Vorfahrtberechtigten auf seine Ausweichpflicht hingewiesen; sofort Ausweichmanöver einleiten.",
      "Bleib-weg-Signal, Gefahr durch gefährliche Ladung: sofort den Gefahrenbereich verlassen. Offenes Feuer vermeiden (Explosionsgefahr).",
      "Brücke, Sperrwerk, Schleuse wird zur Öffnung vorbereitet: Fahrt fortsetzen."
    ]
  },
  // Frage 179
  {
    id: "see_179",
    nummer: 179,
    frage: "Welche Bedeutung hat folgendes Sichtzeichen?",
    bild: 179,
    antworten: [
      "Geschwindigkeit von 8 km/h Fahrt durch das Wasser, die innerhalb eines Bereichs von 500 m von der jeweiligen Uferlinie wegen Badebetriebs nicht überschritten werden darf.",
      "Kennzeichnung besonderer Gebiete und Stellen, z. B. Warngebiete: die Bedeutung kann der Seekarte entnommen und aus der Beschriftung des Schifffahrtszeichens erkannt werden.",
      "Geschwindigkeit von 8 sm/h Fahrt durch das Wasser, die innerhalb eines Mindestabstandes von 500 m von der jeweiligen Uferlinie wegen Badebetriebs nicht überschritten werden darf.",
      "Buhnenbauwerk, Gefahr durch Sog und Wellenschlag. Insbesondere auf Badebetrieb und Schwimmer achten."
    ]
  },
  // Frage 180
  {
    id: "see_180",
    nummer: 180,
    frage: "Welche Bedeutung hat folgendes Schifffahrtszeichen?",
    bild: 180,
    antworten: [
      "Kennzeichnung von Wattfahrwässern.",
      "Höchstgeschwindigkeit von 4,3 Knoten Fahrt durch das Wasser, die innerhalb von 500 m von der jeweiligen Uferlinie wegen Badebetriebs nicht überschritten werden darf.",
      "Einzelgefahrenstelle, erkennbar an ihrer Farbgebung, die an allen Seiten mit einer maximalen Geschwindigkeit von 4,3 Knoten passiert werden kann.",
      "Kennzeichnung besonderer Gebiete und Stellen, z. B. Warngebiet."
    ]
  },
  // Frage 181
  {
    id: "see_181",
    nummer: 181,
    frage: "Welche Höchstgeschwindigkeit darf vor Stellen mit erkennbarem Badebetrieb - außerhalb des Fahrwassers - in einem Abstand von 500 m und weniger vom Ufer nicht überschritten werden?",
    bild: null,
    antworten: [
      "4,3 Knoten.",
      "3,4 Knoten.",
      "4,8 Knoten.",
      "3,8 Knoten."
    ]
  },
  // Frage 182
  {
    id: "see_182",
    nummer: 182,
    frage: "Welche Bedeutung hat folgendes Schifffahrtszeichen?",
    bild: 182,
    antworten: [
      "Kennzeichnung von besonderen Gebieten und Stellen.",
      "Kennzeichnung von Sperrgebieten.",
      "Kennzeichnung von Schießgebieten.",
      "Kennzeichnung von Badegebieten."
    ]
  },
  // Frage 183
  {
    id: "see_183",
    nummer: 183,
    frage: "Woran ist ein militärisches Warngebiet zu erkennen, das wegen Schießübungen für die Schifffahrt gesperrt ist?",
    bild: null,
    antworten: [
      "An bestimmten Tag- und Nachtsignalen, die nach der Sperr- und Warngebietsverordnung der Generaldirektion Wasserstraßen und Schifffahrt (GDWS) für militärische Sperr- und Warngebiete an entsprechenden Signalstellen und auf Sicherungsfahrzeugen gezeigt werden.",
      "An bestimmten Tag- und Nachtsignalen, die nach der Rheinpolizeiverordnung der Generaldirektion Wasserstraßen und Schifffahrt (GDWS) für militärische Sperr- und Warngebiete an entsprechenden Signalstellen am Ufer und auf Sicherungsfahrzeugen gezeigt werden.",
      "An bestimmten Tag- und Nachtsignalen, die nach der zuständigen Polizeiverordnung des Wasserwirtschaftsamtes für Übungs-, Sperr- und Warngebiete an entsprechenden Signalstellen am Ufer und auf Sicherungsfahrzeugen gezeigt werden.",
      "An bestimmten Tag- und Nachtsignalen, die nach der Schifffahrtsordnung der Generaldirektion Wasserstraßen und Schifffahrt (GDWS) für militärische Sperr- und Warngebiete an entsprechenden Signalstellen am Ufer und auf Sicherungsfahrzeugen gezeigt werden."
    ]
  },
  // Frage 184
  {
    id: "see_184",
    nummer: 184,
    frage: "Welche Bedeutung haben folgende Schifffahrtszeichen?",
    bild: 184,
    antworten: [
      "Sperrgebiet.",
      "Sperrgebiet und Badezone.",
      "Sperrgebiet wegen Aquakulturen und Muschelzuchtanlagen.",
      "Schießgebiet."
    ]
  },
  // Frage 185
  {
    id: "see_185",
    nummer: 185,
    frage: "Welche Bedeutung hat folgendes Flaggensignal?",
    bild: 185,
    antworten: [
      "Allgemeines Gefahr- und Warnsignal.",
      "Aufforderung zum Aufstoppen.",
      "Schutzbedürftiges Fahrzeug.",
      "Fahrzeug in Seenot."
    ]
  },
  // Frage 186
  {
    id: "see_186",
    nummer: 186,
    frage: "Welche Bedeutung hat folgendes Schallsignal? (· – · ·)",
    bild: null,
    antworten: [
      "Polizeifahrzeug fordert zum Anhalten auf.",
      "Ankerlieger macht auf gefährliche Annäherung aufmerksam.",
      "Letzter bemannter Anhang eines Schleppverbandes.",
      "Manövrierbehindertes Fahrzeug blockiert das Fahrwasser."
    ]
  },
  // Frage 187
  {
    id: "see_187",
    nummer: 187,
    frage: "Welche Bedeutung haben folgende Sichtzeichen?",
    bild: 187,
    antworten: [
      "Dauernde Sperrung der Seeschifffahrtsstraße. Weiterfahrt verboten.",
      "Schutzbedürftige Anlage. Sog und Wellenschlag vermeiden.",
      "Außergewöhnliche Schifffahrtsbehinderung. Vorsichtig passieren.",
      "Ende einer Gebots- oder Verbotsstrecke. Freie Weiterfahrt."
    ]
  },
  // Frage 188 - fehlt im PDF
  // Frage 189
  {
    id: "see_189",
    nummer: 189,
    frage: "Welche Bedeutung haben folgende Sichtzeichen?",
    bild: 189,
    antworten: [
      "Außergewöhnliche Schifffahrtsbehinderung.",
      "Dauernde Sperrung der Seeschifffahrtsstraße.",
      "Schutzbedürftige Anlage.",
      "Zeitweilige Sperrung der Seeschifffahrtsstraße."
    ]
  },
  // Frage 190
  {
    id: "see_190",
    nummer: 190,
    frage: "Welche Bedeutung hat folgende Tonne?",
    bild: 190,
    antworten: [
      "Kennzeichnung der Mitte von Schifffahrtswegen.",
      "Kennzeichnung von Einzelgefahrenstellen.",
      "Kennzeichnung der Steuerbordseite des Fahrwassers.",
      "Kennzeichnung der Backbordseite des Fahrwassers."
    ]
  },
  // Frage 191
  {
    id: "see_191",
    nummer: 191,
    frage: "Welche Bedeutung hat folgendes Schifffahrtszeichen?",
    bild: 191,
    antworten: [
      "Die Steuerbordseite des Fahrwassers.",
      "Die Backbordseite des Fahrwassers.",
      "Die Mitte eines Schifffahrtsweges.",
      "Die Kennzeichnung von Hindernissen."
    ]
  },
  // Frage 192
  {
    id: "see_192",
    nummer: 192,
    frage: "Welche Bedeutung hat folgendes Schifffahrtszeichen?",
    bild: 192,
    antworten: [
      "Die Backbordseite des Fahrwassers.",
      "Die Steuerbordseite des Fahrwassers.",
      "Die Mitte eines Wattfahrwassers.",
      "Die Kennzeichnung eines Hindernisses im Wattfahrwasser."
    ]
  },
  // Frage 193
  {
    id: "see_193",
    nummer: 193,
    frage: "Welche Bedeutung hat folgende(s) Tonne/Schifffahrtszeichen?",
    bild: 193,
    antworten: [
      "Die Steuerbordseite des Fahrwassers.",
      "Die Backbordseite des Fahrwassers.",
      "Die Mitte eines Schifffahrtsweges.",
      "Die Kennzeichnung von Hindernissen."
    ]
  },
  // Frage 194
  {
    id: "see_194",
    nummer: 194,
    frage: "Welche Bedeutung hat folgende(s) Tonne/Schifffahrtszeichen?",
    bild: 194,
    antworten: [
      "Die Backbordseite des Fahrwassers.",
      "Die Steuerbordseite des Fahrwassers.",
      "Die Mitte eines Wattfahrwassers.",
      "Die Kennzeichnung eines Hindernisses im Wattfahrwasser."
    ]
  },
  // Frage 195
  {
    id: "see_195",
    nummer: 195,
    frage: "Welche Bedeutung hat folgende Tonne?",
    bild: 195,
    antworten: [
      "Steuerbordseite des durchgehenden Fahrwassers, Backbordseite des abzweigenden oder einmündenden Fahrwassers.",
      "Backbordseite des durchgehenden Fahrwassers/Steuerbordseite des abzweigenden oder einmündenden Fahrwassers.",
      "Steuerbordseite des durchgehenden Fahrwassers.",
      "Backbordseite des durchgehenden Fahrwassers."
    ]
  },
  // Frage 196
  {
    id: "see_196",
    nummer: 196,
    frage: "Welche Bedeutung hat folgende Tonne?",
    bild: 196,
    antworten: [
      "Backbordseite des durchgehenden Fahrwassers, Steuerbordseite des abzweigenden oder einmündenden Fahrwassers.",
      "Steuerbordseite des durchgehenden Fahrwassers, Backbordseite des abzweigenden oder einmündenden Fahrwassers.",
      "Steuerbordseite des durchgehenden Fahrwassers.",
      "Backbordseite des durchgehenden Fahrwassers."
    ]
  },
  // Frage 197
  {
    id: "see_197",
    nummer: 197,
    frage: "Welche Bedeutung hat folgende Kennung: 'Oc (2) R. Whis.'?",
    bild: null,
    antworten: [
      "Unterbrochen (2) rot, Heultonne.",
      "Blitz (2) rot, Glockentonne.",
      "Blink (2) rot, Glockentonne.",
      "Leitfeuer rot, zwei Warnsektoren."
    ]
  },
  // Frage 198
  {
    id: "see_198",
    nummer: 198,
    frage: "Welche Kennung und Farbe haben die Feuer der Leuchttonnen an der Steuerbordseite des Fahrwassers?",
    bild: null,
    antworten: [
      "Grünes Blitzfeuer, Funkelfeuer oder unterbrochenes Feuer in Gruppen.",
      "Grünes Blitzfeuer, Funkelfeuer oder Festfeuer.",
      "Grünes Blitzfeuer, Funkelfeuer oder schnelles Funkelfeuer.",
      "Grünes Blitzfeuer, Funkelfeuer oder Blinkfeuer."
    ]
  },
  // Frage 199
  {
    id: "see_199",
    nummer: 199,
    frage: "Welche Kennung und Farbe haben die Feuer der Leuchttonnen an der Backbordseite des Fahrwassers?",
    bild: null,
    antworten: [
      "Rotes Blitzfeuer, Funkelfeuer oder unterbrochenes Feuer in Gruppen.",
      "Rotes Blitzfeuer, Funkelfeuer oder Festfeuer.",
      "Rotes Blitzfeuer, Funkelfeuer oder schnelles Funkelfeuer.",
      "Rotes Blitzfeuer, Funkelfeuer oder Blinkfeuer."
    ]
  },
  // Frage 200
  {
    id: "see_200",
    nummer: 200,
    frage: "Welche Bedeutung hat folgendes Schifffahrtszeichen?",
    bild: 200,
    antworten: [
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Nordquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Südquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Westquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Ostquadrant."
    ]
  },
  // Frage 201
  {
    id: "see_201",
    nummer: 201,
    frage: "Welche Bedeutung hat folgendes Schifffahrtszeichen?",
    bild: 201,
    antworten: [
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Ostquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Nordquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Westquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Südquadrant."
    ]
  },
  // Frage 202
  {
    id: "see_202",
    nummer: 202,
    frage: "Welche Bedeutung hat folgendes Schifffahrtszeichen?",
    bild: 202,
    antworten: [
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Südquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Nordquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Westquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Ostquadrant."
    ]
  },
  // Frage 203
  {
    id: "see_203",
    nummer: 203,
    frage: "Welche Bedeutung hat folgendes Schifffahrtszeichen?",
    bild: 203,
    antworten: [
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Westquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Ostquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Nordquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Südquadrant."
    ]
  },
  // Frage 204
  {
    id: "see_204",
    nummer: 204,
    frage: "Welche Bedeutung hat das Feuer einer Leuchttonne mit folgender Kennung?",
    bild: 204,
    antworten: [
      "Kennzeichnung einer allgemeinen Gefahrenstelle, die nördlich zu passieren ist.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, die südlich zu passieren ist.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, die östlich zu passieren ist.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, die westlich zu passieren ist."
    ]
  },
  // Frage 205
  {
    id: "see_205",
    nummer: 205,
    frage: "Welche Bedeutung hat das Feuer einer Leuchttonne mit folgender Kennung?",
    bild: 205,
    antworten: [
      "Kennzeichnung einer allgemeinen Gefahrenstelle, die östlich zu passieren ist.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, die nördlich zu passieren ist.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, die südlich zu passieren ist.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, die westlich zu passieren ist."
    ]
  },
  // Frage 206
  {
    id: "see_206",
    nummer: 206,
    frage: "Welche Bedeutung hat das Feuer einer Leuchttonne mit folgender Kennung?",
    bild: 206,
    antworten: [
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Südquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Westquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Ostquadrant.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Nordquadrant."
    ]
  },
  // Frage 207
  {
    id: "see_207",
    nummer: 207,
    frage: "Welche Bedeutung hat das Feuer einer Leuchttonne mit folgender Kennung?",
    bild: 207,
    antworten: [
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Westquadrant. Sie ist westlich zu passieren.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Südquadrant. Sie ist südlich zu passieren.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Ostquadrant. Sie ist östlich zu passieren.",
      "Kennzeichnung einer allgemeinen Gefahrenstelle, Nordquadrant. Sie ist nördlich zu passieren."
    ]
  },
  // Frage 208
  {
    id: "see_208",
    nummer: 208,
    frage: "Was kennzeichnet eines der folgenden Schifffahrtszeichen und welches Verhalten wird gefordert?",
    bild: 208,
    antworten: [
      "Eine Einzelgefahrenstelle, die an allen Seiten passiert werden kann.",
      "Den nördlichen Quadranten einer allgemeinen Gefahrenstelle, die nördlich passiert werden muss.",
      "Den südlichen Quadranten einer allgemeinen Gefahrenstelle, die südlich passiert werden muss.",
      "Den westlichen Quadranten einer allgemeinen Gefahrenstelle, die westlich passiert werden muss."
    ]
  },
  // Frage 209
  {
    id: "see_209",
    nummer: 209,
    frage: "Welche Bedeutung hat das Feuer einer Leuchttonne mit folgender Kennung: Fl. (2)?",
    bild: null,
    antworten: [
      "Eine Einzelgefahrenstelle, die an allen Seiten passiert werden kann.",
      "Nördlicher Quadrant einer allgemeinen Gefahrenstelle, die nördlich passiert werden muss.",
      "Südlicher Quadrant einer allgemeinen Gefahrenstelle, die südlich passiert werden muss.",
      "Westlicher Quadrant einer allgemeinen Gefahrenstelle, die westlich passiert werden muss."
    ]
  },
  // Frage 210
  {
    id: "see_210",
    nummer: 210,
    frage: "Was versteht man unter einem Leitfeuer?",
    bild: null,
    antworten: [
      "Sektorenfeuer, das ein Fahrwasser bezeichnet.",
      "Sektorenfeuer, das auf eine Kursänderung im Fahrwasser hinweist.",
      "Ober- und Unterfeuer, die in Deckung zu bringen sind.",
      "Ober- und Unterfeuer mit unterschiedlichen Farbsektoren."
    ]
  },
  // Frage 211
  {
    id: "see_211",
    nummer: 211,
    frage: "Wie navigiert man mittels eines Leitfeuers?",
    bild: null,
    antworten: [
      "In Fahrtrichtung an der rechten Seite des weißen Leitsektors halten.",
      "In Fahrtrichtung an der linken Seite des weißen Leitsektors halten.",
      "In Fahrtrichtung in der Mitte des weißen Leitsektors halten.",
      "In Fahrtrichtung Ober- und Unterfeuer in Deckung halten."
    ]
  },
  // Frage 212
  {
    id: "see_212",
    nummer: 212,
    frage: "Was versteht man unter einem Richtfeuer?",
    bild: null,
    antworten: [
      "Ober- und Unterfeuer, die in Deckung zu bringen sind.",
      "Sektorenfeuer, das ein Fahrwasser bezeichnet.",
      "Sektorenfeuer, das auf eine Kursänderung im Fahrwasser hinweist.",
      "Ober- und Unterfeuer mit unterschiedlichen Farbsektoren."
    ]
  },
  // Frage 213
  {
    id: "see_213",
    nummer: 213,
    frage: "Was versteht man unter einem Quermarkenfeuer?",
    bild: null,
    antworten: [
      "Sektorenfeuer, das auf eine Kursänderung im Fahrwasser hinweist.",
      "Sektorenfeuer, das ein Fahrwasser bezeichnet.",
      "Ober- und Unterfeuer, die in Deckung zu bringen sind.",
      "Ober- und Unterfeuer mit unterschiedlichen Farbsektoren."
    ]
  },
  // Frage 214
  {
    id: "see_214",
    nummer: 214,
    frage: "Wie navigiert man mittels eines Quermarkenfeuers?",
    bild: null,
    antworten: [
      "Beim Übergang vom Ankündigungssektor in den Kursänderungssektor die Kursänderung vornehmen.",
      "Beim Erreichen des Ankündigungsektors die Kursänderung vornehmen.",
      "Beim Erreichen des Kursänderungssektors die Kursänderung vornehmen.",
      "Beim Erreichen des Ankündigungsektors Ober- und Unterfeuer in Deckung halten."
    ]
  },
  // Frage 215
  {
    id: "see_215",
    nummer: 215,
    frage: "Was versteht man unter einem unterbrochenen Feuer?",
    bild: null,
    antworten: [
      "Die Lichterscheinung ist stets länger als die Verdunkelung.",
      "Die Lichterscheinung ist stets kürzer als die Verdunkelung.",
      "Die Lichterscheinung ist stets gleich lang wie die Verdunkelung.",
      "Die Lichterscheinung ist stets kürzer als 2 Sekunden."
    ]
  },
  // Frage 216
  {
    id: "see_216",
    nummer: 216,
    frage: "Wo findet man die Grenzen der Naturschutzgebiete auf See?",
    bild: null,
    antworten: [
      "In Seekarten und Sportschifffahrtskarten des Bundesamtes für Seeschifffahrt und Hydrographie.",
      "Im Bundesnaturschutzgesetz.",
      "In der Seeschifffahrtsstraßen-Ordnung.",
      "In den Kollisionsverhütungsregeln."
    ]
  },
  // Frage 217
  {
    id: "see_217",
    nummer: 217,
    frage: "Wo findet man auszugsweise Hinweise zu Befahrensmöglichkeiten der Naturschutzgebiete in Küstengewässern?",
    bild: null,
    antworten: [
      "In Seekarten und Sportschifffahrtskarten des Bundesamtes für Seeschifffahrt und Hydrographie.",
      "Im Bundesnaturschutzgesetz.",
      "In der Seeschifffahrtsstraßen-Ordnung.",
      "In den Kollisionsverhütungsregeln."
    ]
  },
  // Frage 218
  {
    id: "see_218",
    nummer: 218,
    frage: "Weshalb sollte das Anlaufen von Seehundbänken im Bereich der Watten vermieden werden?",
    bild: null,
    antworten: [
      "Die Tiere sollen nicht gestört oder vertrieben werden.",
      "Im Bereich von Seehundbänken ist mit Untiefen zu rechnen.",
      "Tiefenangaben zu Seehundbänken sind im Kartenwerk nicht verzeichnet.",
      "Seehundbänke sind gesperrte Wasserflächen."
    ]
  },
  // Frage 219
  {
    id: "see_219",
    nummer: 219,
    frage: "Welcher Abstand sollte gemäß den '10 Goldenen Regeln' für das Verhalten von Wassersportlern mindestens zu Liegeplätzen von Seehunden und zu Vogelsammlungen eingehalten werden?",
    bild: null,
    antworten: [
      "300 m bis 500 m.",
      "150 m bis 200 m.",
      "100 m bis 300 m.",
      "200 m bis 300 m."
    ]
  },
  // Frage 220
  {
    id: "see_220",
    nummer: 220,
    frage: "Was versteht man unter einem Blinkfeuer?",
    bild: null,
    antworten: [
      "Lichterscheinung kürzer als Verdunkelung, Blink mindestens 2 s lang.",
      "Lichterscheinung kürzer als Verdunkelung, Blink weniger als 2 s lang.",
      "Lichterscheinung länger als Verdunkelung, Blink mindestens 2 s lang.",
      "Lichterscheinung länger als Verdunkelung, Blink weniger als 2 s lang."
    ]
  },
  // Frage 221
  {
    id: "see_221",
    nummer: 221,
    frage: "Was versteht man unter einem Blitzfeuer?",
    bild: null,
    antworten: [
      "Lichterscheinung kürzer als Verdunkelung, Blitz weniger als 2 s lang.",
      "Lichterscheinung kürzer als Verdunkelung, Blitz länger als 2 s lang.",
      "Lichterscheinung länger als Verdunkelung, Blitz mindestens 2 s lang.",
      "Lichterscheinung länger als Verdunkelung, Blitz weniger als 2 s lang."
    ]
  },
  // Frage 222
  {
    id: "see_222",
    nummer: 222,
    frage: "Was versteht man unter einem Funkelfeuer?",
    bild: null,
    antworten: [
      "50 bis 60 aufeinanderfolgende Lichterscheinungen pro Minute.",
      "100 bis 120 aufeinanderfolgende Lichterscheinungen pro Minute.",
      "130 bis 150 aufeinanderfolgende Lichterscheinungen pro Minute.",
      "30 bis 40 aufeinanderfolgende Lichterscheinungen pro Minute."
    ]
  },
  // Frage 223
  {
    id: "see_223",
    nummer: 223,
    frage: "Was versteht man unter einem Gleichtaktfeuer?",
    bild: null,
    antworten: [
      "Lichterscheinung und Verdunkelung von gleicher Länge.",
      "Lichterscheinung kürzer als Verdunkelung.",
      "Lichterscheinung länger als Verdunkelung.",
      "Lichterscheinung zweifach länger als Verdunkelung."
    ]
  },
  // Frage 224
  {
    id: "see_224",
    nummer: 224,
    frage: "Was versteht man unter der Wiederkehr eines Leuchtfeuers?",
    bild: null,
    antworten: [
      "Zeitraum vom Einsetzen der Taktierung bis zum Einsetzen der nächsten gleichen Taktierung.",
      "Zeitraum vom Ende der Taktierung bis zum Einsetzen der nächsten gleichen Taktierung.",
      "Zeitraum vom Einsetzen der Taktierung bis zum Ende der nächsten gleichen Taktierung.",
      "Zeitraum vom Einsetzen der Taktierung bis zum Ende der Taktierung."
    ]
  },
  // Frage 225
  {
    id: "see_225",
    nummer: 225,
    frage: "Wie hat man sich beim Befahren von Naturschutzgebieten und Nationalparken zu verhalten?",
    bild: null,
    antworten: [
      "Befahrensregelungen beachten.",
      "Befahrensregelungen beachten und sich bei der Nationalparkverwaltung anmelden.",
      "Befahrensregelungen beachten sowie Wasserschutzpolizei und Wasserstraßen- und Schifffahrtsamt informieren.",
      "Befahrensregelungen sowie Festlegungen der Ordnungsämter beachten."
    ]
  },
  // Frage 226
  {
    id: "see_226",
    nummer: 226,
    frage: "Welche Sondervorschriften enthalten die örtlichen Befahrensregelungen in den Naturschutzgebieten und Nationalparks?",
    bild: null,
    antworten: [
      "Befahrensverbote, Befahrensbeschränkungen, Geschwindigkeitsbeschränkungen, besondere Regelungen für das Wasserskilaufen, das Fahren mit Wassermotorrädern und das Segelsurfen.",
      "Befahrensverbote, Schifffahrtssperrungen, Geschwindigkeitsbeschränkungen, besondere Regelungen für das Befahren von Windparks.",
      "Befahrensverbote, Befahrensbeschränkungen, Mindestgeschwindigkeiten, besondere Regelungen für das Befahren von Verkehrstrennungsgebieten.",
      "Befahrensverbote, meteorologische Beschränkungen, besondere Regelungen für das Befahren der Tiefwasserzonen."
    ]
  },
  // Frage 227
  {
    id: "see_227",
    nummer: 227,
    frage: "Welche Verkehre können in einer ausgewiesenen Erlaubniszone zugelassen werden?",
    bild: null,
    antworten: [
      "Bestimmte Wassersportgeräte.",
      "Bestimmte Fischereifahrzeuge.",
      "Bestimmte Bodeneffekt- und Luftkissenfahrzeuge.",
      "Bestimmte Arbeitsgeräte für die Erkundung fossiler Brennstoffe."
    ]
  },
  // Frage 228
  {
    id: "see_228",
    nummer: 228,
    frage: "Was verstehen Sie gemäß Nordsee-Befahrens-Verordnung (NordSBeV) unter Schnellfahrkorridore?",
    bild: null,
    antworten: [
      "Ausgewiesene Wasserflächen für den gewerblichen Verkehr.",
      "Ausgewiesene Wasserflächen für bestimmte Sportbootverkehre.",
      "Wasserflächen zum Starten und Landen von Wasserflugzeugen.",
      "Wasserflächen, von denen Taucher 500 m Abstand halten müssen."
    ]
  },
  // Frage 229
  {
    id: "see_229",
    nummer: 229,
    frage: "Wie hoch, soweit die Nordsee-Befahrens-Verordnung (NordSBeV) nicht ausdrücklich etwas anderes bestimmt, ist die maximale Geschwindigkeit, die ein Maschinenfahrzeug in Nationalparken im Bereich der Nordsee fahren darf?",
    bild: null,
    antworten: [
      "12 Knoten über Grund.",
      "12 Knoten Fahrt durchs Wasser.",
      "10 Knoten Fahrt über Grund.",
      "10 Knoten Fahrt durchs Wasser."
    ]
  },
  // Frage 230
  {
    id: "see_230",
    nummer: 230,
    frage: "Welche Verpflichtung hat man als Bootsführer, um einen Beitrag zur Reinhaltung der Gewässer zu leisten?",
    bild: null,
    antworten: [
      "Sämtliche Abfälle einschließlich Öle und Betriebsstoffe an Bord in geeigneten Behältern sammeln und an Land vorschriftsmäßig entsorgen.",
      "Abfälle und Öle nur auf offener See entsorgen.",
      "Nur Bioabfälle und restentleerte Behälter auf See entsorgen.",
      "Abwässer in Ufer- und Strandnähe sowie in Häfen einleiten."
    ]
  },
  // Frage 231
  {
    id: "see_231",
    nummer: 231,
    frage: "Welche amtlichen nautischen Veröffentlichungen geben Aufschluss über das Fahrtgebiet?",
    bild: null,
    antworten: [
      "Seekarten, Leuchtfeuerverzeichnis, Seehandbücher, Gezeitentafeln oder -kalender, Funkdienst für die Klein- und Sportschifffahrt, Nachrichten für Seefahrer (NfS), Bekanntmachungen für Seefahrer (BfS).",
      "Seekarten, Verordnung über die Sicherung der Seefahrt, Seehandbücher, Gezeitentafeln oder -kalender, Funkdienst für die Klein- und Sportschifffahrt, Nachrichten für Seefahrer (NfS).",
      "Seeschifffahrtsstraßen-Ordnung, Leuchtfeuerverzeichnis, Seehandbücher, Verordnung über die Sicherung der Seefahrt, Gezeitentafeln oder -kalender, Bekanntmachungen der Generaldirektion Wasserstraßen und Schifffahrt (GDWS).",
      "Schifffahrtspolizeiliche Anordnungen, Gezeitentafeln oder Funkdienst für die Klein- und Sportschifffahrt, Nachrichten für Seefahrer (NfS), Bekanntmachungen für Seefahrer (BfS)."
    ]
  },
  // Frage 232
  {
    id: "see_232",
    nummer: 232,
    frage: "Welche Angaben enthalten die Nachrichten für Seefahrer (NfS) und die Bekanntmachungen für Seefahrer (BfS)?",
    bild: null,
    antworten: [
      "Sie enthalten alle Veränderungen hinsichtlich Betonnung, Befeuerung, Wracks, Untiefen sowie andere die Schifffahrt betreffende Maßnahmen und Ereignisse.",
      "Sie enthalten alle Veränderungen hinsichtlich Betonnung, Befeuerung, Wracks, Untiefen sowie andere Änderungen der Seeschifffahrtsstraßen-Ordnung.",
      "Sie enthalten alle Veränderungen hinsichtlich Betonnung, Befeuerung, Wracks sowie die aktuellen Wasserstände.",
      "Sie enthalten alle Veränderungen hinsichtlich Betonnung, Befeuerung, Wracks, Untiefen sowie andere die Schifffahrt betreffende meteorologische Hinweise."
    ]
  },
  // Frage 233
  {
    id: "see_233",
    nummer: 233,
    frage: "Welchen Effekt können Wind und gegenläufiger Tidenstrom im Bereich von Seegaten haben?",
    bild: null,
    antworten: [
      "Steile und aufbäumende Seen (Brecher).",
      "Der Tidenstrom wird durch den Wind verstärkt.",
      "Keinen.",
      "Der Tidenstrom glättet die Windsee."
    ]
  },
  // Frage 234
  {
    id: "see_234",
    nummer: 234,
    frage: "Wo findet man Angaben über Küsten-, Häfen- und Naturverhältnisse?",
    bild: null,
    antworten: [
      "In den See- und Hafenhandbüchern.",
      "In den Bekanntmachungen und Nachrichten für Seefahrer.",
      "Im Nautischen Revierfunkdienst.",
      "In den Seekarten."
    ]
  },
  // Frage 235
  {
    id: "see_235",
    nummer: 235,
    frage: "Wovon sollte man sich vor Gebrauch einer Seekarte überzeugen?",
    bild: null,
    antworten: [
      "Dass die Karte auf den neuesten Stand berichtigt ist.",
      "Dass die Nummerierung mit dem Katalog übereinstimmt.",
      "Dass die Seekarte auf mittleres Tidehochwasser bezogen ist.",
      "Dass die obere Kante in Nordrichtung weist."
    ]
  },
  // Frage 236
  {
    id: "see_236",
    nummer: 236,
    frage: "In welchen Maßeinheiten werden in deutschen Seekarten die Tiefen angegeben?",
    bild: null,
    antworten: [
      "In Meter und Dezimeter.",
      "In Meter und Zentimeter.",
      "In Fuß und Inch.",
      "In Dezimeter und Zentimeter."
    ]
  },
  // Frage 237
  {
    id: "see_237",
    nummer: 237,
    frage: "Wo findet man Bedeutungen und Erläuterungen zu Zeichen, Abkürzungen und Begriffen in deutschen Seekarten?",
    bild: null,
    antworten: [
      "In der INT1/Karte 1.",
      "In den Seehandbüchern.",
      "In den Leuchtfeuerverzeichnissen.",
      "In allen Seekarten unten links."
    ]
  },
  // Frage 238
  {
    id: "see_238",
    nummer: 238,
    frage: "Wo findet man die für die Navigation wichtigen Beschreibungen der Schifffahrtszeichen, Angaben über deren Befeuerung und Angaben über Signalstellen?",
    bild: null,
    antworten: [
      "Leuchtfeuerverzeichnis, Seehandbuch, Seekarten.",
      "Leuchtfeuerverzeichnis, Seehandbuch, Handbuch für Brücke und Kartenhaus.",
      "Leuchtfeuerverzeichnis, Seehandbuch, Kollisionsverhütungsregeln.",
      "Leuchtfeuerverzeichnis, Seehandbuch, Gezeitenatlas."
    ]
  },
  // Frage 239
  {
    id: "see_239",
    nummer: 239,
    frage: "Wo entnimmt man in der Seekarte die Seemeilen?",
    bild: null,
    antworten: [
      "Am rechten oder linken Kartenrand in Höhe des Standortes.",
      "Am oberen oder unteren Kartenrand in Höhe des Standortes.",
      "An der in der Seekarte abgebildeten Kompassrose.",
      "Aus der in der Seekarte abgebildeten Entfernungstabelle."
    ]
  },
  // Frage 240
  {
    id: "see_240",
    nummer: 240,
    frage: "Was versteht man unter einer Seemeile und wie lang ist eine Seemeile (in Metern)?",
    bild: null,
    antworten: [
      "Die Länge einer Bogenminute auf einem größten Kreis der Erdkugel, 1.852 m.",
      "Die Länge einer Bogenminute auf einem Breitenparallel, 1.652 m.",
      "Die Länge einer Bogenminute auf dem Nullmeridian, 18,52 km.",
      "Sie entspricht der in einer Stunde zurückgelegten Distanz in Meter, 16,52 km."
    ]
  },
  // Frage 241
  {
    id: "see_241",
    nummer: 241,
    frage: "Was versteht man unter dem Geschwindigkeitsbegriff 'Knoten'?",
    bild: null,
    antworten: [
      "Das sind die in einer Stunde zurückgelegten Seemeilen.",
      "Das sind die in einer Stunde zurückgelegten Kilometer.",
      "Das sind die an einem Tag zurückgelegten Seemeilen.",
      "Das sind die von Mittag bis Mittag zurückgelegten Seemeilen."
    ]
  },
  // Frage 242
  {
    id: "see_242",
    nummer: 242,
    frage: "Woraus entnimmt man die Magnetkompassablenkung?",
    bild: null,
    antworten: [
      "Aus der für das betreffende Schiff aufgestellten Deviationstabelle.",
      "Aus dem Nautischen Handbuch für Kompassfehlweisung.",
      "Aus dem Betriebshandbuch des Kompassherstellers.",
      "Aus der Kompassrose der aktuellen Seekarte."
    ]
  },
  // Frage 243
  {
    id: "see_243",
    nummer: 243,
    frage: "Was versteht man in der terrestrischen Navigation unter einer Peilung?",
    bild: null,
    antworten: [
      "Das Feststellen der Richtung eines bekannten feststehenden Objektes durch Winkelmessung.",
      "Das Feststellen der Abweichung des Steuerkompasses vom Peilkompass.",
      "Das Feststellen des Koppelortes durch Winkelmessung.",
      "Das Feststellen der Entfernung zu einem bekannten feststehenden Objekt."
    ]
  },
  // Frage 244
  {
    id: "see_244",
    nummer: 244,
    frage: "Wie erhält man eine Standlinie?",
    bild: null,
    antworten: [
      "Durch die Peilung eines bekannten feststehenden Objektes und Eintragung der rechtweisenden Peilung in die Seekarte.",
      "Durch Eintragen des rechtweisenden Kurses in die Seekarte.",
      "Durch mehrmaliges Peilen eines anderen Fahrzeugs.",
      "Durch Eintragung der Peilung in die Seekarte ohne Berücksichtigung der Fehlweisung."
    ]
  },
  // Frage 245
  {
    id: "see_245",
    nummer: 245,
    frage: "Was versteht man unter Stromversetzung?",
    bild: null,
    antworten: [
      "Die Versetzung des Schiffes über Grund in Richtung und Distanz.",
      "Die Versetzung des Schiffes vom Magnetkompasskurs.",
      "Die Versetzung des Schiffes durch das Wasser in Richtung und Distanz.",
      "Die Richtung und Stärke der Meeresströmung."
    ]
  },
  // Frage 246
  {
    id: "see_246",
    nummer: 246,
    frage: "Was versteht man unter Windversetzung?",
    bild: null,
    antworten: [
      "Die Versetzung des Schiffes über Grund in Richtung und Distanz.",
      "Die Versetzung des Schiffes vom Magnetkompasskurs.",
      "Die Versetzung des Schiffes durch das Wasser in Richtung und Distanz.",
      "Die Richtung und Stärke des Windes und der Windsee."
    ]
  },
  // Frage 247
  {
    id: "see_247",
    nummer: 247,
    frage: "Was versteht man unter einem Koppelort?",
    bild: null,
    antworten: [
      "Schiffsort, der unter Berücksichtigung der gesteuerten Kurse und zurückgelegten Distanzen und aller vorhersehbaren Einflüsse rechnerisch und zeichnerisch ermittelt wird.",
      "Schiffsort, der ermittelt wird durch Peilung zweier feststehender und bekannter Objekte, die in einem möglichst rechten Winkel (90 Grad) zueinander stehen.",
      "Schiffsort, der durch Eintragung der rechtweisenden Peilungen zweier feststehender und bekannter Objekte als Standlinien in die Seekarte ermittelt wird; ihr Schnittpunkt ist der Standort.",
      "Schiffsort, der unter Berücksichtigung der gesteuerten Kurse und zurückgelegten Distanzen infolge mehrerer Peilungen ermittelt wird."
    ]
  },
  // Frage 248
  {
    id: "see_248",
    nummer: 248,
    frage: "Was ist bei der Aufstellung eines Magnetkompasses an Bord zu beachten?",
    bild: null,
    antworten: [
      "Der Steuerstrich muss parallel zur Kiellinie verlaufen. Der Kompass muss gut ablesbar sein und darf nicht in der Nähe von Eisenteilen aufgestellt werden.",
      "Der Kompass muss parallel zur Kiellinie verlaufen. Der Kompass muss gut ablesbar sein und darf nicht in der Nähe von Eisenteilen aufgestellt werden.",
      "Der Steuerstrich muss parallel zur Kiellinie verlaufen. Der Kompass muss gut ablesbare Zahlen aufweisen und darf nicht in der Nähe von Eisenteilen aufgestellt werden.",
      "Der Kompass muss parallel zur Kiellinie verlaufen. Der Kompass muss gut ablesbare Zahlen aufweisen und darf nicht in der Nähe von Eisenteilen aufgestellt werden."
    ]
  },
  // Frage 249
  {
    id: "see_249",
    nummer: 249,
    frage: "Was versteht man unter Ebbe?",
    bild: null,
    antworten: [
      "Das Fallen des Wassers vom Hochwasser zum folgenden Niedrigwasser.",
      "Den Zeitraum vom Hochwasser zum folgenden Niedrigwasser.",
      "Der niedrigste Wasserstand einer Tide.",
      "Die Differenz zwischen Hoch- und Niedrigwasser."
    ]
  },
  // Frage 250
  {
    id: "see_250",
    nummer: 250,
    frage: "Was versteht man unter Flut?",
    bild: null,
    antworten: [
      "Das Steigen des Wassers vom Niedrigwasser zum folgenden Hochwasser.",
      "Den Zeitraum vom Niedrigwasser zum folgenden Hochwasser.",
      "Der höchste Wasserstand einer Tide.",
      "Die Differenz zwischen Hoch- und Niedrigwasser."
    ]
  },
  // Frage 251
  {
    id: "see_251",
    nummer: 251,
    frage: "Was versteht man unter einer Tide?",
    bild: null,
    antworten: [
      "Der Zeitraum zwischen einem Niedrigwasser und dem nächstfolgenden Niedrigwasser.",
      "Der Zeitraum zwischen einem Hochwasser und dem nächstfolgenden Niedrigwasser.",
      "Der Zeitraum zwischen einem Hochwasser und dem nächstfolgenden Hochwasser.",
      "Der Zeitraum zwischen einem Niedrigwasser und dem nächstfolgenden Hochwasser."
    ]
  },
  // Frage 252
  {
    id: "see_252",
    nummer: 252,
    frage: "Was versteht man unter einem Niedrigwasser?",
    bild: null,
    antworten: [
      "Eintritt des niedrigsten Wasserstands beim Übergang vom Fallen zum Steigen.",
      "Fallen des Wassers nach Eintritt des höchsten Wasserstands.",
      "Eintritt des höchsten Wasserstands beim Übergang vom Steigen zum Fallen.",
      "Steigen des Wassers nach Eintritt des niedrigsten Wasserstands."
    ]
  },
  // Frage 253
  {
    id: "see_253",
    nummer: 253,
    frage: "Was versteht man unter einem Hochwasser?",
    bild: null,
    antworten: [
      "Eintritt des höchsten Wasserstands beim Übergang vom Steigen zum Fallen.",
      "Steigen des Wassers nach Eintritt des niedrigsten Wasserstands.",
      "Eintritt des niedrigsten Wasserstands beim Übergang vom Fallen zum Steigen.",
      "Fallen des Wassers nach Eintritt des höchsten Wasserstands."
    ]
  },
  // Frage 254
  {
    id: "see_254",
    nummer: 254,
    frage: "Was versteht man unter 'Tidenhub'?",
    bild: null,
    antworten: [
      "Unterschied zwischen den Höhen des Hoch- und des Niedrigwassers.",
      "Unterschied zwischen den Höhen zweier aufeinanderfolgender Hochwasser.",
      "Der Zeitraum zwischen einem Niedrigwasser und dem nächstfolgenden Hochwasser.",
      "Der Zeitraum zwischen einem Niedrigwasser und dem nächstfolgenden Niedrigwasser."
    ]
  },
  // Frage 255
  {
    id: "see_255",
    nummer: 255,
    frage: "Wo sind für einen bestimmten Ort die Angaben über Hoch- und Niedrigwasserzeiten und den Tidenhub zu finden?",
    bild: null,
    antworten: [
      "In den Gezeitentafeln oder dem Gezeitenkalender des Bundesamtes für Seeschifffahrt und Hydrographie.",
      "In der Flutvorhersage des Bundesamtes für Seeschifffahrt und Hydrographie.",
      "Im Gezeitenatlas des Bundesamtes für Seeschifffahrt und Hydrographie.",
      "Im Mondphasenkalender der Bundesanstalt für Gewässerkunde."
    ]
  },
  // Frage 256
  {
    id: "see_256",
    nummer: 256,
    frage: "Wie lang sollte eine Schleppleine bei starkem Seegang sein?",
    bild: null,
    antworten: [
      "Mindestens zwei- oder dreifache Wellenlänge.",
      "Mindestens zwei- oder dreifache Wellenhöhe.",
      "Mindestens zwei- oder dreifache Schiffslänge.",
      "Mindestens zwei- oder dreifache Wassertiefe."
    ]
  },
  // Frage 257
  {
    id: "see_257",
    nummer: 257,
    frage: "Was ist zu beachten, wenn ein Sportboot geschleppt werden soll?",
    bild: null,
    antworten: [
      "Die Schleppleine ist den Seegangsverhältnissen anzupassen. Die Schleppgeschwindigkeit darf nicht größer sein als die Geschwindigkeit, die der Anhang frei fahrend bei Verdrängerfahrt erreichen kann. Ein ruckartiges Steifkommen der Schleppleine ist zu vermeiden.",
      "Die Schleppleine ist den Seegangsverhältnissen anzupassen. Die Schleppgeschwindigkeit darf nicht größer sein als die Geschwindigkeit, die das schleppende Fahrzeug frei fahrend bei Verdrängerfahrt erreichen kann. Ein ruckartiges Steifkommen der Schleppleine ist zu vermeiden.",
      "Die Schleppleine ist den Wetterverhältnissen anzupassen. Die Schleppgeschwindigkeit darf nicht größer sein als die Geschwindigkeit, die der Anhang frei fahrend bei Gleitfahrt erreichen kann. Ein ruckartiges Steifkommen der Schleppleine ist zu vermeiden.",
      "Die Schleppleine ist den Wetterverhältnissen anzupassen. Die Schleppgeschwindigkeit darf nicht größer sein als die Geschwindigkeit, die das schleppende Fahrzeug frei fahrend bei Gleitfahrt erreichen kann. Ein ruckartiges Steifkommen der Schleppleine ist zu vermeiden."
    ]
  },
  // Frage 258
  {
    id: "see_258",
    nummer: 258,
    frage: "Womit kann ein steuerunfähiges Sportboot mit dem Bug in den Wind gehalten werden?",
    bild: null,
    antworten: [
      "Mit dem Treibanker oder anderen geeigneten schwimmfähigen Gegenständen.",
      "Durch wiederholtes kurzes Ein- und Auskuppeln der Antriebsmaschine.",
      "Mit achteraus ausgebrachtem Treibanker oder ähnlichen schwimmfähigen Gegenständen.",
      "Mit vorn und achtern ausgebrachten Treibankern oder anderen geeigneten schwimmfähigen Gegenständen."
    ]
  },
  // Frage 259
  {
    id: "see_259",
    nummer: 259,
    frage: "Warum sollte bei starkem Seegang die Fahrt vermindert werden?",
    bild: null,
    antworten: [
      "Um Schäden durch Seeschlag zu vermeiden.",
      "Um das Austauchen der Schraube zu vermeiden und Kraftstoff zu sparen.",
      "Um die Schlinger- und Rollbewegungen zu minimieren.",
      "Um Schiffs- und Wellenlänge nicht in Resonanz zu bringen."
    ]
  },
  // Frage 260
  {
    id: "see_260",
    nummer: 260,
    frage: "Was bedeutet folgendes Zeichen?",
    bild: 260,
    antworten: [
      "Wind aus Richtung Nordwest: Stärke: Bft. 3; wolkenlos.",
      "Wind in Richtung Nordwest: Stärke: Bft. 3; wolkenlos.",
      "Strom aus Richtung Nordwest: Stärke: 3 Knoten; Tidegebiet.",
      "Strom in Richtung Nordwest: Stärke: 3 Knoten; Tidegebiet."
    ]
  },
  // Frage 261
  {
    id: "see_261",
    nummer: 261,
    frage: "Welche Angaben liefert die Beaufort-Skala?",
    bild: null,
    antworten: [
      "Windstärken von 0 bis 12 und die Auswirkungen auf die See.",
      "Windstärken von 0 bis 12 und die Auswirkungen auf die Küste.",
      "Den Tidenhub an der Küste bei Vollmond und bei Neumond.",
      "Die Wellenhöhe und die Windgeschwindigkeit bei Sturmstärke."
    ]
  },
  // Frage 262
  {
    id: "see_262",
    nummer: 262,
    frage: "Wie werden Orte gleichen Luftdrucks in der Wetterkarte dargestellt und in welcher Maßeinheit wird der Luftdruck angegeben?",
    bild: null,
    antworten: [
      "Durch Isobaren und in Hektopascal.",
      "Durch Isobaren und in Millipascal.",
      "Durch Isothermen und in Hektopascal.",
      "Durch Isothermen und in Millipascal."
    ]
  },
  // Frage 263
  {
    id: "see_263",
    nummer: 263,
    frage: "Womit muss bei rasch fallendem Luftdruck gerechnet werden?",
    bild: null,
    antworten: [
      "Mit Starkwind oder Sturm.",
      "Mit Schwachwind oder Windstille.",
      "Mit einer Wetterbesserung.",
      "Mit einer Wetterverschlechterung."
    ]
  },
  // Frage 264
  {
    id: "see_264",
    nummer: 264,
    frage: "Was bedeuten die in der Wetterkarte abgebildeten Isobaren?",
    bild: null,
    antworten: [
      "Orte gleichen Luftdrucks.",
      "Orte gleicher Windstärke.",
      "Orte gleicher Wolkenbildung.",
      "Orte gleicher Luftfeuchtigkeit."
    ]
  },
  // Frage 265
  {
    id: "see_265",
    nummer: 265,
    frage: "Was zeigt die folgende Abbildung?",
    bild: 265,
    antworten: [
      "Abbildung eines Hochdruckgebietes auf der Nordhalbkugel, Isobaren mit Angabe des Luftdrucks in hPa.",
      "Abbildung eines Hochdruckgebietes auf der Südhalbkugel, Isobaren mit Angabe des Luftdrucks in hPa.",
      "Abbildung eines Hochdruckgebietes auf der Nordhalbkugel, Isobaren mit Angabe des Luftdrucks in hPa, Zugrichtung Nordwest.",
      "Abbildung eines Hochdruckgebietes auf der Südhalbkugel, Isobaren mit Angabe des Luftdrucks in hPa, Zugrichtung Südwest."
    ]
  },
  // Frage 266
  {
    id: "see_266",
    nummer: 266,
    frage: "Was zeigt die folgende Abbildung?",
    bild: 266,
    antworten: [
      "Abbildung eines Tiefdruckgebietes auf der Nordhalbkugel mit Warm- und Kaltfront, Isobaren mit Angabe des Luftdrucks in hPa, warme und kalte Luftströmung.",
      "Abbildung eines Tiefdruckgebietes auf der Südhalbkugel mit Kalt- und Warmfront, Isobaren mit Angabe des Luftdrucks in hPa, kalte und warme Luftströmung.",
      "Abbildung eines Tiefdruckgebietes auf der Nordhalbkugel mit Kaltfront vor der Warmfront, Angabe des Luftdrucks in hPa, Warmfront südlich, Kaltfront nördlich des Zentrums.",
      "Abbildung eines Tiefdruckgebietes auf der Südhalbkugel mit Warmfront vor der Kaltfront, Angabe des Luftdrucks in hPa, Darstellung des Kalt- und Warmluftstroms."
    ]
  },
  // Frage 267
  {
    id: "see_267",
    nummer: 267,
    frage: "Für welche Windstärken wird eine Starkwindwarnung herausgegeben?",
    bild: null,
    antworten: [
      "Windstärke 6 und 7 der Beaufortskala.",
      "Windstärke 5 und 6 der Beaufortskala.",
      "Windstärke 4 bis 5 der Beaufortskala.",
      "Windstärke 7 bis 8 der Beaufortskala."
    ]
  },
  // Frage 268
  {
    id: "see_268",
    nummer: 268,
    frage: "Für welche Windstärken wird eine Sturmwarnung herausgegeben?",
    bild: null,
    antworten: [
      "Windstärke 8 und mehr der Beaufortskala.",
      "Windstärke 6 und mehr der Beaufortskala.",
      "Windstärke 9 und mehr der Beaufortskala.",
      "Windstärke 7 und mehr der Beaufortskala."
    ]
  },
  // Frage 269
  {
    id: "see_269",
    nummer: 269,
    frage: "Was ist in amtlichen Wetterberichten unter 'frischem Wind' zu verstehen?",
    bild: null,
    antworten: [
      "Windstärke 5 der Beaufortskala.",
      "Windstärke 4 der Beaufortskala.",
      "Windstärke 6 der Beaufortskala.",
      "Windstärke 7 der Beaufortskala."
    ]
  },
  // Frage 270
  {
    id: "see_270",
    nummer: 270,
    frage: "Was ist in amtlichen Wetterberichten unter 'schwerem Sturm', 'orkanartigem Sturm' und 'Orkan' zu verstehen?",
    bild: null,
    antworten: [
      "Windstärken 10, 11 und 12 der Beaufortskala.",
      "Windstärken 9, 10 und 11 der Beaufortskala.",
      "Windstärken 11, 12 und 13 der Beaufortskala.",
      "Windstärken 8, 9 und 10 der Beaufortskala."
    ]
  },
  // Frage 271
  {
    id: "see_271",
    nummer: 271,
    frage: "Wie hat man seine Fahrweise im Fahrwasser bei verminderter Sicht aufgrund seemännischer Sorgfaltspflicht einzurichten, wenn das Fahrzeug nicht über die technische Ausrüstung, insbesondere zur Ortung anderer Fahrzeuge, verfügt?",
    bild: null,
    antworten: [
      "Das Fahrwasser verlassen und wenn möglich, Flachwassergebiet aufsuchen und ankern. Wenn dies nicht möglich ist, im Fahrwasser äußerst rechts halten.",
      "Unverzüglich die Fahrt einstellen und ankern, wenn dies nicht möglich ist, vorsichtig weiterfahren und möglichst im Kielwasser eines vorausfahrenden Fahrzeugs halten.",
      "Umsichtig, aber zügig weiterfahren, um den übrigen Verkehr nicht zu behindern. Beim Hören fremder Nebelsignale aufstoppen und abwarten, dabei fortlaufend die Wassertiefe loten.",
      "Im Fahrwasser äußerst rechts halten und den nächstgelegenen Hafen oder Liegeplatz anlaufen. Im Zweifel andere Fahrzeuge nach Position und richtigem Kurs fragen."
    ]
  },
  // Frage 272
  {
    id: "see_272",
    nummer: 272,
    frage: "Wozu dient primär das Automatische Identifikationssystem (AIS)?",
    bild: null,
    antworten: [
      "Der Kollisionsverhütung.",
      "Dem Empfang von Wetterdaten.",
      "Der Positionsbestimmung.",
      "Dem Senden nautischer Warnnachrichten."
    ]
  },
  // Frage 273 - fehlt im PDF
  // Frage 274
  {
    id: "see_274",
    nummer: 274,
    frage: "Welche Sicherheitsmaßnahmen sind an Bord aufgrund der seemännischen Sorgfaltspflicht neben den in den Kollisionsverhütungsregeln vorgeschriebenen Verhaltensmaßregeln bei verminderter Sicht zu treffen?",
    bild: null,
    antworten: [
      "Insbesondere alle Navigationsanlagen sorgfältig gebrauchen, die Sichtbarkeit des eigenen Fahrzeugs erhöhen (z. B. Radarreflektor, AIS) und in einem Revier mit Landradarberatung die Radarberatung über UKW-Sprechfunk mithören.",
      "Insbesondere alle technischen Anlagen, z. B. Radar, AIS, Echolot, Selbststeueranlage einschalten und in einem Revier mit Landradarberatung die Radarberatung über UKW-Sprechfunk anfordern.",
      "Insbesondere alle Navigationsanlagen sorgfältig gebrauchen, die Sichtbarkeit des eigenen Fahrzeugs erhöhen (z. B. Radarreflektor, AIS) und die Verkehrszentrale ständig über Kurs und Geschwindigkeit informieren.",
      "Insbesondere alle technischen Anlagen, z. B. Radar, Echolot, AIS, Selbststeueranlage, einschalten und die Verkehrszentrale ständig über Kurs und Geschwindigkeit informieren."
    ]
  },
  // Frage 275
  {
    id: "see_275",
    nummer: 275,
    frage: "Welche Sicherheitsmaßnahmen sind auf See vor Eintritt von schwerem Wetter (Starkwind, Sturm) zu treffen?",
    bild: null,
    antworten: [
      "Verschlusszustand herbeiführen, lose Gegenstände festzurren, Rettungsweste anlegen und andere Rettungsmittel bereithalten; wenn erforderlich und möglich Schutzhafen anlaufen.",
      "Verschlusszustand herbeiführen, lose Gegenstände festzurren, Rettungsweste und andere Rettungsmittel bereithalten, Seenotsignalmittel zum Einsatz vorbereiten.",
      "Türen schließen, lose Gegenstände festzurren, Rettungsweste und andere Rettungsmittel bereithalten, Radar, Ruder und UKW besetzen.",
      "Türen schließen, lose Gegenstände festzurren, Rettungsweste und andere Rettungsmittel bereithalten, Seenotsignalmittel zum Einsatz vorbereiten."
    ]
  },
  // Frage 276
  {
    id: "see_276",
    nummer: 276,
    frage: "Mit welchen Hilfsmitteln kann eine im Wasser treibende Person schnell und sicher an Bord genommen werden?",
    bild: null,
    antworten: [
      "Leinenverbindung, Rettungsschlaube, Bergenetz, Talje, Badeleiter, Großbaum.",
      "Leinenverbindung, Badeleiter, Treibanker, Rettungsschlaube, Bergenetz, Talje.",
      "Leinenverbindung, Großbaum, Ankerkette, Talje, Badeleiter, Rettungsschlaube.",
      "Leinenverbindung, Badeleiter, Rettungsboje, Bergenetz, Großbaum, Talje."
    ]
  },
  // Frage 277
  {
    id: "see_277",
    nummer: 277,
    frage: "Was ist zu tun, wenn das Fahrzeug gekentert ist?",
    bild: null,
    antworten: [
      "Möglichst am Fahrzeug bleiben und die Besatzung zusammenhalten; unnötigen Kräfteverschleiß vermeiden und Aufmerksamkeit zur Hilfeleistung erregen.",
      "Möglichst am Fahrzeug bleiben und Seenotsignale geben. Die Besatzung zusammenhalten und unnötigen Kräfteverschleiß vermeiden.",
      "Möglichst am Fahrzeug bleiben und Unfallstelle kennzeichnen; unnötigen Kräfteverschleiß vermeiden und Aufmerksamkeit zur Hilfeleistung erregen.",
      "Möglichst am Fahrzeug bleiben und die Besatzung zusammenhalten; Wertgegenstände und Seetagebuch bergen."
    ]
  },
  // Frage 278
  {
    id: "see_278",
    nummer: 278,
    frage: "Wie verhindert man das Überbordfallen von Personen bei starkem Seegang?",
    bild: null,
    antworten: [
      "Sicherheitsleinen bzw. -gurte spannen, Sicherheitsgurt anlegen und an den dafür vorgesehenen Stellen einpicken.",
      "Sicherheitsleinen bzw. -gurte spannen, Besatzung an Deck sammeln. Rettungswesten anlegen.",
      "Sicherheitsleinen bzw. -gurte aufschießen, Sicherheitsgurt anlegen und in die Reling einpicken.",
      "Besatzung in der Plicht versammeln, Rettungswesten anlegen, Sicherheitsleinen bzw. -gurte spannen."
    ]
  },
  // Frage 279
  {
    id: "see_279",
    nummer: 279,
    frage: "Welche Notsignale können gegeben werden?",
    bild: null,
    antworten: [
      "Leuchtrakete mit rotem Leuchtstern oder rot brennende Handfackel, anhaltendes Ertönen eines Nebelsignalgerätes, dreimaliges Geben per Licht oder Ton, dreimal das Wort MAYDAY über Sprechfunk, seitliches Heben und Senken der Arme, Flaggensignal NC, EPIRB, DSC, Radartransponder.",
      "Leuchtrakete mit rotem Leuchtstern oder rot brennende Handfackel, anhaltendes Ertönen eines Nebelsignalgerätes, dreimaliges Geben per Licht oder Ton, Seewasserfärber, seitliches Heben und Senken der Arme, Ball über oder unter Flaggensignal NC, EPIRB, DSC, Radartransponder.",
      "Leuchtrakete mit orangem Leuchtstern oder orange brennende Handfackel, rotes Rauchsignal, anhaltendes Ertönen eines Nebelsignalgerätes, dreimaliges Geben per Licht oder Ton, dreimal das Wort MAYDAY über Sprechfunk, seitliches Heben und Senken der Arme, Flaggensignal NC, EPIRB, DSC, Radartransponder.",
      "Leuchtrakete mit rotem Leuchtstern oder rot brennende Handfackel, anhaltendes Ertönen eines Nebelsignalgerätes, dreimaliges Geben per Licht oder Ton, dreimal das Wort MAYDAY über Sprechfunk, seitliches Heben und Senken der Arme, Flaggensignal NC, EPIRB, DSC, Radartransponder."
    ]
  },
  // Frage 280
  {
    id: "see_280",
    nummer: 280,
    frage: "Was bedeutet das Flaggensignal 'NC' auf einem Fahrzeug?",
    bild: null,
    antworten: [
      "Fahrzeug in Seenot.",
      "Fahrzeug des öffentlichen Dienstes.",
      "Fahrzeug mit gefährlichen Gütern.",
      "Fahrzeug verlässt Liegeplatz."
    ]
  },
  // Frage 281
  {
    id: "see_281",
    nummer: 281,
    frage: "Was bedeutet anhaltendes Ertönen eines Nebelsignalgerätes von einem Fahrzeug?",
    bild: null,
    antworten: [
      "Fahrzeug in Seenot.",
      "Fahrzeug mit gefährlichen Gütern.",
      "Bleib-weg-Signal.",
      "Achtungssignal."
    ]
  },
  // Frage 282
  {
    id: "see_282",
    nummer: 282,
    frage: "Was bedeutet das folgende durch Licht oder Schallsignal gegebene Morsesignal? (· · · — — — · · ·)",
    bild: null,
    antworten: [
      "Seenotsignal.",
      "Nebelsignal.",
      "Bleib-weg-Signal.",
      "Überholsignal."
    ]
  },
  // Frage 283
  {
    id: "see_283",
    nummer: 283,
    frage: "Was bedeutet eine Leuchtrakete mit einem roten Stern?",
    bild: null,
    antworten: [
      "Seenotfall.",
      "Aufforderung zum Aufstoppen.",
      "Allgemeines Gefahrensignal.",
      "Schutzbedürftiges Fahrzeug."
    ]
  },
  // Frage 284
  {
    id: "see_284",
    nummer: 284,
    frage: "Was bedeutet folgendes Flaggensignal?",
    bild: 284,
    antworten: [
      "Fahrzeug in Seenot.",
      "Fahrzeug des öffentlichen Dienstes.",
      "Fahrzeug mit gefährlichen Gütern.",
      "Fahrzeug verlässt Liegeplatz."
    ]
  },
  // Frage 285
  {
    id: "see_285",
    nummer: 285,
    frage: "Was bedeutet auf einem Schiff eines der folgenden Signale?",
    bild: 285,
    antworten: [
      "Fahrzeug in Seenot.",
      "Fahrzeug ist manövrierbehindert.",
      "Fahrzeug mit gefährlichen Gütern.",
      "Fahrzeug vor Anker mit mehr als 100 m Länge."
    ]
  }
];

// Export für Browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fragenSee;
}
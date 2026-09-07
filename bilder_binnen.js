// ============================================
// Fragenkatalog Binnen (Fragen 73-253)
// Antwort a ist immer die richtige Antwort
// ============================================

const fragenBinnen = [
  // Frage 73
  {
    id: "binnen_73",
    nummer: 73,
    frage: "Für welche Sportboote ist der Sportbootführerschein mit dem Geltungsbereich Binnenschifffahrtsstraßen vorgeschrieben?",
    bild: null,
    antworten: [
      "Für Sportboote von mehr als 11,03 kW (15 PS) Nutzleistung bei Verwendung eines Verbrennungsmotors bzw. 7,5 kW bei Verwendung eines Elektromotors Betriebsart S1 (Dauerbetrieb) und weniger als 20 m Länge.",
      "Für Sportboote von weniger als 11,03 kW (15 PS) Nutzleistung bei Verwendung eines Verbrennungsmotors bzw. 7,5 kW bei Verwendung eines Elektromotors Betriebsart S1 (Dauerbetrieb) und mehr als 20 m Länge.",
      "Für Sportboote von mehr als 11,03 kW (15 PS) Nutzleistung bei Verwendung eines Verbrennungsmotors bzw. 7,5 kW bei Verwendung eines Elektromotors Betriebsart S1 (Dauerbetrieb) und mehr als 20 m Länge.",
      "Für Sportboote von weniger als 11,03 kW (15 PS) Nutzleistung bei Verwendung eines Verbrennungsmotors bzw. 7,5 kW bei Verwendung eines Elektromotors Betriebsart S1 (Dauerbetrieb) und weniger als 20 m Länge."
    ]
  },
  // Frage 74
  {
    id: "binnen_74",
    nummer: 74,
    frage: "Auf welchen Gewässern gilt der Sportbootführerschein mit dem Geltungsbereich Binnenschifffahrtsstraßen?",
    bild: null,
    antworten: [
      "Auf den Bundeswasserstraßen im Binnenbereich.",
      "Auf allen Landesgewässern.",
      "Auf den Bundeswasserstraßen und allen Landesgewässern.",
      "Auf allen Seewasserstraßen."
    ]
  },
  // Frage 75
  {
    id: "binnen_75",
    nummer: 75,
    frage: "Aus welchen Gründen muss der Sportbootführerschein mit dem Geltungsbereich Binnenschifffahrtsstraßen entzogen werden?",
    bild: null,
    antworten: [
      "Bei fehlender Tauglichkeit oder fehlender Zuverlässigkeit.",
      "Bei zweifelhafter Tauglichkeit wegen Alkoholmissbrauch.",
      "Bei zweifelhafter Zuverlässigkeit aus Altersgründen.",
      "Bei fehlender Zuverlässigkeit nach einer begangenen Ordnungswidrigkeit."
    ]
  },
  // Frage 76
  {
    id: "binnen_76",
    nummer: 76,
    frage: "Was beinhaltet die allgemeine Sorgfaltspflicht?",
    bild: null,
    antworten: [
      "Vermeidung der Gefährdung von Menschenleben, von Beschädigungen an Fahrzeugen, Anlagen oder Ufern, Behinderung der Schifffahrt und Beeinträchtigung der Umwelt.",
      "Gefährdung von Menschenleben, Beschädigungen an Fahrzeugen, Anlagen oder Ufern und Beeinträchtigung der Umwelt.",
      "Es ist alles zu tun, was zur Vermeidung der Gefährdung von Menschenleben, Behinderung der Schifffahrt und Beeinträchtigung der Umwelt nötig ist.",
      "Es ist alles zu tun, was zur Vermeidung von Beschädigungen an Fahrzeugen, Anlagen oder Ufern, Behinderung der Schifffahrt und Beeinträchtigung der Umwelt nötig ist."
    ]
  },
  // Frage 77
  {
    id: "binnen_77",
    nummer: 77,
    frage: "Unter welchen Umständen darf von den geltenden Bestimmungen über das Verhalten im Verkehr auf den Binnenschifffahrtsstraßen abgewichen werden?",
    bild: null,
    antworten: [
      "Bei unmittelbar drohender Gefahr für sich oder andere.",
      "Bei unmittelbar bevorstehender Begegnung.",
      "Bei unmittelbar bevorstehendem Überholvorgang.",
      "Bei mittelbar drohender Gefahr für sich oder andere."
    ]
  },
  // Frage 78
  {
    id: "binnen_78",
    nummer: 78,
    frage: "Welche Anforderungen neben der körperlichen und geistigen Tauglichkeit und fachlichen Eignung muss der Führer eines Sportbootes auf Binnenschifffahrtsstraßen erfüllen, wenn die größte Nutzleistung der Antriebsmaschine 11,03 kW bei Verbrennungsmotoren bzw. 7,5 kW bei Elektromotoren Betriebsart S1 (Dauerbetrieb) oder weniger beträgt?",
    bild: null,
    antworten: [
      "Mindestalter 16 Jahre.",
      "Nachweis der Zuverlässigkeit.",
      "Mindestalter 14 Jahre.",
      "Besitz eines Sportbootführerscheins mit dem Geltungsbereich Binnenschifffahrtsstraßen für Sportboote mit Antriebsmaschine oder eines gleichgestellten Befähigungszeugnisses."
    ]
  },
  // Frage 79
  {
    id: "binnen_79",
    nummer: 79,
    frage: "Welche Anforderungen neben der körperlichen und geistigen Tauglichkeit und fachlichen Eignung muss der Führer eines Sportbootes auf dem Rhein erfüllen, wenn die Nutzleistung der Antriebsmaschine mehr als 11,03 kW bei Verbrennungsmotoren bzw. 7,5 kW bei Elektromotoren Betriebsart S1 (Dauerbetrieb) beträgt?",
    bild: null,
    antworten: [
      "Besitz eines Sportbootführerscheins mit dem Geltungsbereich Binnenschifffahrtsstraßen für Sportboote mit Antriebsmaschine oder eines gleichgestellten Befähigungszeugnisses.",
      "Nachweis der Zuverlässigkeit.",
      "Mindestalter 16 Jahre.",
      "Mindestalter 14 Jahre."
    ]
  },
  // Frage 80
  {
    id: "binnen_80",
    nummer: 80,
    frage: "Welche Anforderungen werden an die Person gestellt, mit der der Schiffsführer das Ruder eines Sportbootes mit Antriebsmaschine auf Binnenschifffahrtsstraßen besetzen will?",
    bild: null,
    antworten: [
      "Sie muss mindestens 16 Jahre alt und körperlich, geistig und fachlich geeignet sein.",
      "Sie muss mindestens 18 Jahre alt und körperlich, geistig und fachlich geeignet sein.",
      "Sie muss mindestens 16 Jahre alt und Inhaber des Sportbootführerscheins mit dem Geltungsbereich Binnenschifffahrtsstraßen für Sportboote mit Antriebsmaschine sein.",
      "Sie muss mindestens 14 Jahre alt und körperlich, geistig und fachlich geeignet sein."
    ]
  },
  // Frage 81
  {
    id: "binnen_81",
    nummer: 81,
    frage: "Wo erhält man Auskünfte über Verkehrsbeschränkungen und aktuelle Informationen über Binnenschifffahrtsstraßen?",
    bild: null,
    antworten: [
      "Bei der Wasserstraßen- und Schifffahrtsverwaltung, im Internet unter www.elwis.de und bei der Wasserschutzpolizei.",
      "Bei einem Wasserwirtschaftsamt und bei der Wasserschutzpolizei.",
      "In der Binnenschifffahrtsstraßen-Ordnung Teil II.",
      "In der Binnenschiffsuntersuchungsordnung."
    ]
  },
  // Frage 82
  {
    id: "binnen_82",
    nummer: 82,
    frage: "Wozu muss der Rudergänger eines Sportbootes zur sicheren Steuerung in der Lage sein?",
    bild: null,
    antworten: [
      "Alle Informationen und Weisungen zu empfangen und zu geben, alle Schallzeichen wahrzunehmen und nach allen Seiten genügend freie Sicht zu haben.",
      "Alle Informationen und Weisungen zu empfangen und zu geben.",
      "Alle Schallzeichen wahrnehmen zu können und nach allen Seiten genügend freie Sicht zu haben.",
      "Alle Informationen und Weisungen zu empfangen und zu geben und nach allen Seiten genügend freie Sicht zu haben."
    ]
  },
  // Frage 83
  {
    id: "binnen_83",
    nummer: 83,
    frage: "Bis zu welcher Schiffslänge berechtigt der Sportbootführerschein mit dem Geltungsbereich Binnenschifffahrtsstraßen zum Führen eines Sportbootes auf Binnenschifffahrtsstraßen?",
    bild: null,
    antworten: [
      "Bis zu einer Länge von weniger als 20 m (ohne Ruder und Bugspriet).",
      "Bis zu einer Länge von weniger als 25 m (mit Ruder und Bugspriet).",
      "Bis zu einer Länge von weniger als 25 m (ohne Ruder und Bugspriet).",
      "Bis zu einer Länge von weniger als 15 m (mit Ruder und Bugspriet)."
    ]
  },
  // Frage 84
  {
    id: "binnen_84",
    nummer: 84,
    frage: "Wo findet man die allgemeinen Verkehrsregeln für die Binnenschifffahrtsstraßen und den Rhein?",
    bild: null,
    antworten: [
      "Binnenschifffahrtsstraßen-Ordnung, Rheinschifffahrtspolizeiverordnung.",
      "Binnenschiffsuntersuchungsordnung, Rheinschifffahrtspolizeiverordnung.",
      "Moselschifffahrtspolizeiverordnung, Donauschifffahrtspolizeiverordnung.",
      "Wassermotorräderverordnung, Wasserskiverordnung."
    ]
  },
  // Frage 85
  {
    id: "binnen_85",
    nummer: 85,
    frage: "Wo findet man die allgemeinen Verkehrsregeln für die Mosel und die Donau?",
    bild: null,
    antworten: [
      "Moselschifffahrtspolizeiverordnung, Donauschifffahrtspolizeiverordnung.",
      "Donauschifffahrtspolizeiverordnung, Binnenschifffahrtsstraßen-Ordnung.",
      "Moselschifffahrtspolizeiverordnung, Binnenschiffsuntersuchungsordnung.",
      "Wassermotorräderverordnung, Wasserskiverordnung."
    ]
  },
  // Frage 86
  {
    id: "binnen_86",
    nummer: 86,
    frage: "Wo findet man Regeln für den Verkehr von Wassermotorrädern und für das Wasserskilaufen?",
    bild: null,
    antworten: [
      "Wassermotorräderverordnung, Wasserskiverordnung.",
      "Moselschifffahrtspolizeiverordnung, Donauschifffahrtspolizeiverordnung.",
      "Binnenschifffahrtsstraßen-Ordnung, Rheinschifffahrtspolizeiverordnung.",
      "Moselschifffahrtspolizeiverordnung, Binnenschiffsuntersuchungsordnung."
    ]
  },
  // Frage 87
  {
    id: "binnen_87",
    nummer: 87,
    frage: "Welche Maßnahmen sind zu treffen, wenn das Fahrzeug innerhalb des Fahrwassers bzw. der Fahrrinne Grundberührung hat?",
    bild: null,
    antworten: [
      "Die Wasserstraßen- und Schifffahrtsverwaltung oder die Wasserschutzpolizei ist mit genauer Angabe der Hindernisstelle zu benachrichtigen.",
      "Die Wasserschutzpolizei oder die Wasserstraßen- und Schifffahrtsverwaltung ist mit genauer Angabe der Schiffsdaten zu informieren.",
      "Das Fahrzeug verbleibt vor Ort bis die Wasserschutzpolizei eintrifft.",
      "Ein Baggerunternehmen ist zu verständigen, damit das Hindernis beseitigt wird."
    ]
  },
  // Frage 88
  {
    id: "binnen_88",
    nummer: 88,
    frage: "Was versteht man unter 'Fahrwasser'?",
    bild: null,
    antworten: [
      "Den Teil der Wasserstraße, der den örtlichen Umständen nach vom durchgehenden Schiffsverkehr benutzt wird.",
      "Es ist der Teil der Wasserstraße, der durch die Ufer begrenzt ist.",
      "Den Teil der Wasserstraße, in dem für den durchgehenden Schiffsverkehr bestimmte Breiten und Tiefen vorgehalten bzw. angestrebt werden.",
      "Es ist der Teil der Wasserstraße, deren Tiefe bei 2,50 m und mehr beginnt."
    ]
  },
  // Frage 89
  {
    id: "binnen_89",
    nummer: 89,
    frage: "Was versteht man unter 'Fahrrinne'?",
    bild: null,
    antworten: [
      "Es ist der Teil der Wasserstraße, in dem für den durchgehenden Schiffsverkehr bestimmte Breiten und Tiefen vorgehalten bzw. angestrebt werden.",
      "Den Teil der Wasserstraße, der den örtlichen Umständen nach vom durchgehenden Schiffsverkehr benutzt wird.",
      "Es ist der Teil der Wasserstraße, deren Breite mindestens 150 m und deren Tiefe mindestens 3,00 m beträgt.",
      "Es ist der Teil der Wasserstraße, deren Breite mindestens 88 m und deren Tiefe mindestens 2,50 m beträgt."
    ]
  },
  // Frage 90
  {
    id: "binnen_90",
    nummer: 90,
    frage: "Wie wird die Schifffahrt vom Erreichen bestimmter Wasserstände und Hochwassermarken informiert?",
    bild: null,
    antworten: [
      "Durch Nautischen Informationsfunk, Information im Rundfunk, im Fernsehen und im Internet.",
      "Durch Aushang bei Hafenämtern und Schleusen.",
      "Durch Aushang bei Wasserschutzpolizei-Stationen.",
      "Durch Bekanntgaben der Hochwasserschutzzentrale."
    ]
  },
  // Frage 91
  {
    id: "binnen_91",
    nummer: 91,
    frage: "Wo kann der Sportbootfahrer vor Ort das Erreichen bestimmter Wasserstände und Hochwassermarken feststellen?",
    bild: null,
    antworten: [
      "An den Pegeln und ausgewiesenen Hochwassermarken.",
      "An den Aushängen bei Hafenämtern und Schleusen.",
      "An den Aushängen bei Wasserschutzpolizei-Stationen.",
      "An den Pegeln und den Einsenkungsmarken der Fahrzeuge."
    ]
  },
  // Frage 92
  {
    id: "binnen_92",
    nummer: 92,
    frage: "Welche Auswirkungen kann das Erreichen der Hochwassermarke I für die Sportschifffahrt haben?",
    bild: null,
    antworten: [
      "Geschwindigkeitsbeschränkung und Fahrverbot für Fahrzeuge ohne Sprechfunk.",
      "Einstellung der Schifffahrt.",
      "Überholverbot.",
      "Verbot der Schifffahrt bei Nacht."
    ]
  },
  // Frage 93
  {
    id: "binnen_93",
    nummer: 93,
    frage: "Welche Auswirkungen hat das Erreichen der Hochwassermarke II für die Sportschifffahrt?",
    bild: null,
    antworten: [
      "Einstellung der Schifffahrt.",
      "Geschwindigkeitsbeschränkung und Fahrverbot für Fahrzeuge ohne Sprechfunk.",
      "Überholverbot und Fahrverbot für Fahrzeuge ohne Sprechfunk.",
      "Verbot der Schifffahrt bei Nacht und unsichtigem Wetter."
    ]
  },
  // Frage 94
  {
    id: "binnen_94",
    nummer: 94,
    frage: "In welche Richtung werden bei Flüssen die Uferseiten als rechtes bzw. linkes Ufer bezeichnet?",
    bild: null,
    antworten: [
      "Von der Quelle bis zur Mündung.",
      "Von der Mündung bis zur Quelle.",
      "Bei der Bergfahrt liegt die rechte Uferseite rechts.",
      "Bei der Talfahrt liegt die rechte Uferseite links."
    ]
  },
  // Frage 95
  {
    id: "binnen_95",
    nummer: 95,
    frage: "Was bedeutet 'zu Berg' oder 'Bergfahrt' auf Flüssen?",
    bild: null,
    antworten: [
      "Die Fahrt in Richtung Quelle.",
      "Die Fahrt über Grund.",
      "Die Fahrt mit der Strömung.",
      "Die Fahrt in Richtung Mündung."
    ]
  },
  // Frage 96
  {
    id: "binnen_96",
    nummer: 96,
    frage: "Was bedeutet 'zu Berg' oder 'Bergfahrt' auf Kanälen?",
    bild: null,
    antworten: [
      "Die Fahrt, die in Teil II der Binnenschifffahrtsstraßen-Ordnung als Fahrt 'zu Berg' oder 'Bergfahrt' festgelegt ist.",
      "Die Fahrt, die in Teil I der Binnenschifffahrtsstraßen-Ordnung als Fahrt 'zu Berg' oder 'Bergfahrt' festgelegt ist.",
      "Die Fahrt in Richtung Quelle.",
      "Die Fahrt gegen die Strömung."
    ]
  },
  // Frage 97
  {
    id: "binnen_97",
    nummer: 97,
    frage: "Welche Zeichen begrenzen die Fahrrinne zum rechten Ufer?",
    bild: null,
    antworten: [
      "Rote Stumpftonnen oder Schwimmstangen.",
      "Grüne Spitztonnen oder Schwimmstangen.",
      "Rote Spierentonnen oder Schwimmstangen.",
      "Grüne Spierentonnen oder Schwimmstangen."
    ]
  },
  // Frage 98
  {
    id: "binnen_98",
    nummer: 98,
    frage: "Welche Zeichen begrenzen die Fahrrinne zum linken Ufer?",
    bild: null,
    antworten: [
      "Grüne Spitztonnen oder Schwimmstangen.",
      "Rote Stumpftonnen oder Schwimmstangen.",
      "Rote Spierentonnen oder Schwimmstangen.",
      "Grüne Spierentonnen oder Schwimmstangen."
    ]
  },
  // Frage 99
  {
    id: "binnen_99",
    nummer: 99,
    frage: "Welche Fahrrinnenseite hat ein Bergfahrer an seiner Steuerbordseite und wie ist diese gekennzeichnet?",
    bild: null,
    antworten: [
      "Die linke Fahrrinnenseite, gekennzeichnet durch grüne Spitztonnen oder Schwimmstangen.",
      "Die rechte Fahrrinnenseite, gekennzeichnet durch rote Stumpftonnen oder Schwimmstangen.",
      "Die linke Fahrrinnenseite, gekennzeichnet durch rote Stumpftonnen oder Schwimmstangen.",
      "Die rechte Fahrrinnenseite, gekennzeichnet durch grüne Spitztonnen oder Schwimmstangen."
    ]
  },
  // Frage 100
  {
    id: "binnen_100",
    nummer: 100,
    frage: "Was bedeutet eine rot-grün gestreifte Tonne oder Schwimmstange und was ist zu beachten?",
    bild: null,
    antworten: [
      "Fahrrinnenspaltung. Vorbeifahrt an beiden Seiten möglich.",
      "Fahrrinnenspaltung. In Fahrtrichtung links halten.",
      "Fahrrinnenspaltung. Vorbeifahrt nur an Steuerbord möglich.",
      "Fahrrinnenspaltung. In Fahrtrichtung rechts halten."
    ]
  },
  // Frage 101
  {
    id: "binnen_101",
    nummer: 101,
    frage: "Mit welchen Zeichen werden Hindernisse wie zum Beispiel Buhnen und Kribben an der rechten Seite der Wasserstraße bezeichnet?",
    bild: null,
    antworten: [
      "Stangen mit Toppzeichen: roter Kegel, Spitze nach unten, oder rot-weiß gestreifte Schwimmstange mit rotem Zylinder.",
      "Stangen mit Toppzeichen: grüner Kegel, Spitze nach oben, oder grün-weiß gestreifte Schwimmstange mit grünem Kegel.",
      "Stangen mit Toppzeichen: roter Kegel, Spitze nach oben, oder rot-weiß gestreifte Schwimmstange mit rotem Zylinder.",
      "Stangen mit Toppzeichen: grüner Kegel, Spitze nach unten, oder grün-weiß gestreifte Schwimmstange mit grünem Kegel."
    ]
  },
  // Frage 102
  {
    id: "binnen_102",
    nummer: 102,
    frage: "Was kennzeichnet eine grün-weiß gestreifte Schwimmstange mit grünem Kegel, Spitze nach oben, oder eine grüne Tonne mit grün-weiß gestreiftem Aufsatz mit grünem Kegel, Spitze nach oben?",
    bild: null,
    antworten: [
      "Hindernis an der linken Seite der Wasserstraße.",
      "Fahrrinnenrand an der linken Seite der Wasserstraße.",
      "Hindernis an der rechten Seite der Wasserstraße.",
      "Fahrrinnenrand an der rechten Seite der Wasserstraße."
    ]
  },
  // Frage 103
  {
    id: "binnen_103",
    nummer: 103,
    frage: "Was ist in Kanälen verboten?",
    bild: null,
    antworten: [
      "Ankern.",
      "Wenden.",
      "Überholen.",
      "Begegnen."
    ]
  },
  // Frage 104
  {
    id: "binnen_104",
    nummer: 104,
    frage: "Was bedeuten auf einem stillliegenden Fahrzeug zwei weiße Lichter übereinander?",
    bild: null,
    antworten: [
      "Ein Ankerlieger, dessen Anker die Schifffahrt gefährden kann.",
      "Ein stillliegender Schubverband.",
      "Ein Ankerlieger, der zwei Anker ausgelegt hat.",
      "Ein Fahrzeug über 135 m."
    ]
  },
  // Frage 105
  {
    id: "binnen_105",
    nummer: 105,
    frage: "Welches Licht setzt ein stillliegendes Fahrzeug?",
    bild: null,
    antworten: [
      "Ein von allen Seiten sichtbares weißes Rundumlicht auf der Fahrwasserseite.",
      "Ein weißes Topplicht und ein weißes Hecklicht.",
      "Die Seitenlichter und ein sichtbares weißes Rundumlicht.",
      "Ein rotes Rundumlicht."
    ]
  },
  // Frage 106
  {
    id: "binnen_106",
    nummer: 106,
    frage: "Wie sind Anker am Tage bezeichnet, die die Schifffahrt behindern können?",
    bild: null,
    antworten: [
      "Mit einem gelben Döpper.",
      "Mit einem weißen Döpper.",
      "Mit einem grünen Döpper.",
      "Mit einem roten Döpper."
    ]
  },
  // Frage 107 - Tafelzeichen
  {
    id: "binnen_107",
    nummer: 107,
    frage: "Was bedeutet dieses Tafelzeichen?",
    bild: 107,
    antworten: [
      "Liegestelle für Fahrzeuge mit explosiven Stoffen, für Kleinfahrzeuge verboten.",
      "Liegestelle für Fahrzeuge mit brennbaren Stoffen, für Kleinfahrzeuge verboten.",
      "Liegestelle für Fahrzeuge mit gesundheitsgefährdeten Stoffen, für Kleinfahrzeuge verboten.",
      "Liegestelle für alle Fahrzeuge, für Kleinfahrzeuge verboten."
    ]
  },
  // Frage 108 - Tafelzeichen
  {
    id: "binnen_108",
    nummer: 108,
    frage: "Was bedeuten diese Tafelzeichen?",
    bild: 108,
    antworten: [
      "Liegestelle für Fahrzeuge ohne gefährliche Güter, auch für Kleinfahrzeuge.",
      "Liegestelle für Fahrzeuge ohne gefährliche Güter, nicht für Kleinfahrzeuge.",
      "Liegestelle für Fahrzeuge mit gefährlichen Gütern, auch für Kleinfahrzeuge.",
      "Liegestelle für Fahrzeuge mit gefährlichen Gütern, nicht für Kleinfahrzeuge."
    ]
  },
  // Frage 109
  {
    id: "binnen_109",
    nummer: 109,
    frage: "Wo besteht ohne besondere Bezeichnung der Stellen bzw. Strecken ein allgemeines Liegeverbot?",
    bild: null,
    antworten: [
      "Auf Schifffahrtskanälen und Schleusenkanälen.",
      "Auf Schifffahrtskanälen und vor Schleusenkanälen.",
      "Vor Brücken und Hochspannungsleitungen.",
      "Vor Brücken und nach Hochspannungsleitungen."
    ]
  },
  // Frage 110 - Tafelzeichen
  {
    id: "binnen_110",
    nummer: 110,
    frage: "Welche Bedeutung hat das nachstehende Tafelzeichen?",
    bild: 110,
    antworten: [
      "Empfohlene Durchfahrtsoffnung, Durchfahrt in beide Richtungen erlaubt.",
      "Empfohlene Durchfahrt, Durchfahrt in Gegenrichtung verboten.",
      "Die Durchfahrt ist nur durch diese Brückenöffnung und nur in eine Richtung gestattet.",
      "Die Durchfahrt ist nur durch diese Brückenöffnung und in beide Richtungen gestattet."
    ]
  },
  // Frage 111 - Tafelzeichen
  {
    id: "binnen_111",
    nummer: 111,
    frage: "Welche Bedeutung haben die nachstehenden Tafelzeichen?",
    bild: 111,
    antworten: [
      "Empfohlene Durchfahrt, Durchfahrt in Gegenrichtung verboten.",
      "Empfohlene Durchfahrtsoffnung, Durchfahrt in beide Richtungen erlaubt.",
      "Die Durchfahrt ist nur durch diese Brückenöffnung und in beide Richtungen gestattet.",
      "Die Durchfahrt ist nur durch diese Brückenöffnung und nur in eine Richtung gestattet."
    ]
  },
  // Frage 112 - Tafelzeichen
  {
    id: "binnen_112",
    nummer: 112,
    frage: "Was bedeuten diese Tafelzeichen an Brücken?",
    bild: 112,
    antworten: [
      "Empfohlene Durchfahrt mit Gegenverkehr.",
      "Empfohlene Durchfahrt ohne Gegenverkehr.",
      "Empfohlene Durchfahrt nur in eine Richtung.",
      "Durchfahrt nur neben der Tafel erlaubt."
    ]
  },
  // Frage 113 - Tafelzeichen
  {
    id: "binnen_113",
    nummer: 113,
    frage: "Was bedeuten diese Tafelzeichen an Brücken?",
    bild: 113,
    antworten: [
      "Durchfahrt nur zwischen den beiden Tafeln erlaubt.",
      "Durchfahrt nur außerhalb der beiden Tafeln erlaubt.",
      "Empfohlene Durchfahrt nur zwischen den beiden Tafeln.",
      "Empfohlene Durchfahrt mit Gegenverkehr."
    ]
  },
  // Frage 114 - Tafelzeichen
  {
    id: "binnen_114",
    nummer: 114,
    frage: "Was bedeuten diese Tafelzeichen an Brücken?",
    bild: 114,
    antworten: [
      "Empfohlene Durchfahrt nur zwischen den beiden Tafeln.",
      "Durchfahrt nur zwischen den beiden Tafeln erlaubt.",
      "Durchfahrt nur außerhalb der beiden Tafeln erlaubt.",
      "Empfohlene Durchfahrt mit Gegenverkehr."
    ]
  },
  // Frage 115 - Tafelzeichen
  {
    id: "binnen_115",
    nummer: 115,
    frage: "Was bedeuten diese Tafelzeichen an Brücken?",
    bild: 115,
    antworten: [
      "Empfohlene Durchfahrt mit Gegenverkehr.",
      "Empfohlene Durchfahrt ohne Gegenverkehr.",
      "Empfohlene Durchfahrt nur in eine Richtung.",
      "Durchfahrt nur neben der Tafel erlaubt."
    ]
  },
  // Frage 116 - Tafelzeichen
  {
    id: "binnen_116",
    nummer: 116,
    frage: "Was bedeutet dieses Tafelzeichen im Bereich eines Wehres?",
    bild: 116,
    antworten: [
      "Verbot der Durchfahrt und Sperrung der Schifffahrt.",
      "Gesperrte Wasserfläche, jedoch für Kleinfahrzeuge mit Antriebsmaschine befahrbar.",
      "Gesperrte Wasserfläche, jedoch für Kleinfahrzeuge ohne Antriebsmaschine befahrbar.",
      "Schutzbedürftige Anlage."
    ]
  },
  // Frage 117
  {
    id: "binnen_117",
    nummer: 117,
    frage: "Welche Bedeutung haben vor einer Schleuse ein rotes oder ein rotes und ein grünes Licht?",
    bild: null,
    antworten: [
      "Einfahrt verboten, Öffnen der Schleuse wird vorbereitet.",
      "Einfahrt verboten, Schließen der Schleuse wird vorbereitet.",
      "Ausfahrt verboten, Öffnen der Schleuse wird vorbereitet.",
      "Ausfahrt verboten, Schließen der Schleuse wird vorbereitet."
    ]
  },
  // Frage 118
  {
    id: "binnen_118",
    nummer: 118,
    frage: "In welcher Reihenfolge fahren Fahrzeuge, die nicht Kleinfahrzeuge sind, und Kleinfahrzeuge, die gemeinsam geschleust werden sollen, in die Schleuse ein?",
    bild: null,
    antworten: [
      "Kleinfahrzeuge fahren erst nach den Fahrzeugen, die nicht Kleinfahrzeuge sind und nach Aufforderung durch die Schleusenaufsicht in die Schleuse ein.",
      "Kleinfahrzeuge fahren vor den Fahrzeugen, die nicht Kleinfahrzeuge sind und vor Aufforderung durch die Schleusenaufsicht in die Schleuse ein.",
      "Kleinfahrzeuge fahren vor den Fahrzeugen, die nicht Kleinfahrzeuge sind und ohne Aufforderung durch die Schleusenaufsicht in die Schleuse ein.",
      "Kleinfahrzeuge fahren nach den Fahrzeugen, die nicht Kleinfahrzeuge sind und ohne Aufforderung durch die Schleusenaufsicht in die Schleuse ein."
    ]
  },
  // Frage 119
  {
    id: "binnen_119",
    nummer: 119,
    frage: "Mehrere Kleinfahrzeuge sollen gemeinsam vom Oberwasser in das Unterwasser geschleust werden. Worauf ist bei deren Einfahrt in die Schleuse und während des Schleusens besonders zu achten?",
    bild: null,
    antworten: [
      "Das letzte Kleinfahrzeug muss so weit einfahren, dass es beim Leeren der Schleuse nicht auf den Drempel aufsetzen kann. Die Festmacherleinen sind so zu bedienen, dass Stöße gegen Schleusenwände, Schleusentore, andere Fahrzeuge vermieden werden und ein sicheres Fieren der Leinen möglich ist.",
      "Das erste Kleinfahrzeug muss so weit einfahren, dass es beim Leeren der Schleuse nicht auf den Drempel aufsetzen kann. Die Festmacherleinen sind so zu bedienen, dass Stöße gegen Schleusenwände, Schleusentore, andere Fahrzeuge vermieden werden und ein sicheres Fieren der Leinen möglich ist.",
      "Das erste Kleinfahrzeug muss so weit einfahren, dass es beim Füllen der Schleuse nicht auf den Drempel aufsetzen kann. Die Festmacherleinen sind so zu bedienen, dass Stöße gegen Schleusenwände, Schleusentore, andere Fahrzeuge vermieden werden und ein sicheres Fieren der Leinen möglich ist.",
      "Das letzte Kleinfahrzeug muss so weit einfahren, dass es beim Füllen der Schleuse nicht auf den Drempel aufsetzen kann. Die Festmacherleinen sind so zu bedienen, dass Stöße gegen Schleusenwände, Schleusentore, andere Fahrzeuge vermieden werden und ein sicheres Fieren der Leinen möglich ist."
    ]
  },
  // Frage 120 - Lichter
  {
    id: "binnen_120",
    nummer: 120,
    frage: "Was bedeuten diese Lichter?",
    bild: 120,
    antworten: [
      "Fahrzeug mit Maschinenantrieb länger als 110 m.",
      "Schubverband kürzer als 110 m.",
      "Schubverband länger als 110 m.",
      "Fahrzeug ohne Maschinenantrieb länger als 110 m."
    ]
  },
  // Frage 121 - Sichtzeichen
  {
    id: "binnen_121",
    nummer: 121,
    frage: "Was bedeutet dieses Sichtzeichen?",
    bild: 121,
    antworten: [
      "Schleppfahrzeug an der Spitze eines Schleppverbandes.",
      "Fahrzeug, das vor Anker liegt.",
      "Fahrzeuge mit Vorrang an einer Schleuse.",
      "Schubverband."
    ]
  },
  // Frage 122 - Sichtzeichen
  {
    id: "binnen_122",
    nummer: 122,
    frage: "Was bedeutet dieses Sichtzeichen?",
    bild: 122,
    antworten: [
      "Fahrzeug eines Schleppverbandes.",
      "Fahrzeug, das vor Anker liegt.",
      "Fahrzeuge mit Vorrang an einer Schleuse.",
      "Schleppfahrzeug an der Spitze eines Schleppverbandes."
    ]
  },
  // Frage 123 - Lichter
  {
    id: "binnen_123",
    nummer: 123,
    frage: "Was bedeuten diese Lichter?",
    bild: 123,
    antworten: [
      "Schubverband in Fahrt von vorne.",
      "Schubverband in Fahrt von achtern.",
      "Schubverband vor Anker liegend.",
      "Schubverband unter 110 m Länge."
    ]
  },
  // Frage 124 - Lichter
  {
    id: "binnen_124",
    nummer: 124,
    frage: "Was bedeuten diese Lichter?",
    bild: 124,
    antworten: [
      "Frei fahrende Fähre.",
      "Nicht frei fahrende Fähre.",
      "Schubverband von achtern.",
      "Schubverband von Steuerbordseite."
    ]
  },
  // Frage 125 - Lichter
  {
    id: "binnen_125",
    nummer: 125,
    frage: "Was bedeuten diese Lichter?",
    bild: 125,
    antworten: [
      "Frei fahrende Fähre.",
      "Nicht frei fahrende Fähre.",
      "Schubverband von achtern.",
      "Schubverband von Steuerbordseite."
    ]
  },
  // Frage 126
  {
    id: "binnen_126",
    nummer: 126,
    frage: "Was bedeutet auf einem Fahrzeug ein blaues Licht?",
    bild: null,
    antworten: [
      "Fahrzeug hat brennbare Stoffe geladen. Abstand beim Stillliegen 10 m.",
      "Fahrzeug hat gesundheitsschädliche Stoffe geladen. Abstand beim Stillliegen 50 m.",
      "Fahrzeug hat explosive Stoffe geladen. Abstand beim Stillliegen 100 m.",
      "Fahrzeug der Überwachungsbehörden im Einsatz."
    ]
  },
  // Frage 127 - Sichtzeichen
  {
    id: "binnen_127",
    nummer: 127,
    frage: "Was bedeutet dieses Sichtzeichen?",
    bild: 127,
    antworten: [
      "Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m.",
      "Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m.",
      "Fahrzeug hat explosive Stoffe geladen. Abstand beim Stillliegen 100 m.",
      "Fahrzeug der Überwachungsbehörden im Einsatz."
    ]
  },
  // Frage 128
  {
    id: "binnen_128",
    nummer: 128,
    frage: "Was bedeuten auf einem Fahrzeug zwei blaue Lichter übereinander?",
    bild: null,
    antworten: [
      "Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m.",
      "Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m.",
      "Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m.",
      "Fahrzeug der Überwachungsbehörden im Einsatz."
    ]
  },
  // Frage 129 - Sichtzeichen
  {
    id: "binnen_129",
    nummer: 129,
    frage: "Was bedeutet dieses Sichtzeichen?",
    bild: 129,
    antworten: [
      "Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m.",
      "Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m.",
      "Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m.",
      "Fahrzeug der Überwachungsbehörden im Einsatz."
    ]
  },
  // Frage 130
  {
    id: "binnen_130",
    nummer: 130,
    frage: "Was bedeuten auf einem Fahrzeug drei blaue Lichter übereinander?",
    bild: null,
    antworten: [
      "Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m.",
      "Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m.",
      "Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m.",
      "Fahrzeug der Überwachungsbehörden im Einsatz."
    ]
  },
  // Frage 131 - Sichtzeichen
  {
    id: "binnen_131",
    nummer: 131,
    frage: "Was bedeutet dieses Sichtzeichen?",
    bild: 131,
    antworten: [
      "Fahrzeug hat explosive Stoffe geladen, Abstand beim Stillliegen 100 m.",
      "Fahrzeug hat gesundheitsschädliche Stoffe geladen, Abstand beim Stillliegen 50 m.",
      "Fahrzeug hat brennbare Stoffe geladen, Abstand beim Stillliegen 10 m.",
      "Fahrzeug der Überwachungsbehörden im Einsatz."
    ]
  },
  // Frage 132 - Tagezeichnung
  {
    id: "binnen_132",
    nummer: 132,
    frage: "Welches Fahrzeug führt die nachstehende Tagezeichnung?",
    bild: 132,
    antworten: [
      "Ein Fahrzeug, dem die zuständige Behörde einen Vorrang zur Durchfahrt durch Stellen an denen eine bestimmte Reihenfolge gilt eingeräumt hat.",
      "Fahrzeug unter 20 m Länge, für mehr als 12 Fahrgäste zugelassen.",
      "Geschlepptes Fahrzeug eines Schleppverbandes.",
      "Festgefahrenes Fahrzeug, das einseitig nicht passierbar ist."
    ]
  },
  // Frage 133
  {
    id: "binnen_133",
    nummer: 133,
    frage: "Ein Kleinfahrzeug unter Segel fährt nachts auf einer Binnenschifffahrtsstraße und führt ein weißes Rundumlicht im Topp. Wie wird zweckmäßigerweise die weiße Handlampe, die bei Annäherung anderer Fahrzeuge gezeigt werden muss, benutzt?",
    bild: null,
    antworten: [
      "Die eigenen Segel anleuchten.",
      "Das Wasser anleuchten.",
      "Das heranfahrende Fahrzeug anleuchten.",
      "Die Handlampe nach oben halten."
    ]
  },
  // Frage 134
  {
    id: "binnen_134",
    nummer: 134,
    frage: "Ein Kleinfahrzeug unter Segel fährt nachts auf einer Binnenschifffahrtsstraße und führt ein weißes Rundumlicht im Topp. Welche zusätzlichen Lichter müssen gesetzt werden, wenn der Motor angeworfen wird?",
    bild: null,
    antworten: [
      "Die Seitenlichter.",
      "Zwei weiße Lichter übereinander.",
      "Ein rotes und ein grünes Rundumlicht.",
      "Die Lichter eines Kleinfahrzeugs mit Maschinenantrieb."
    ]
  },
  // Frage 135
  {
    id: "binnen_135",
    nummer: 135,
    frage: "Welche Lichter muss ein Kleinfahrzeug unter Motor führen, wenn es ein anderes Kleinfahrzeug ohne Maschinenantrieb schleppt?",
    bild: null,
    antworten: [
      "Lichter eines Kleinfahrzeugs mit Maschinenantrieb.",
      "Zwei weiße Lichter übereinander.",
      "Weißes Rundumlicht.",
      "Lichter eines Kleinfahrzeugs mit Maschinenantrieb und ein zweites weißes Topplicht."
    ]
  },
  // Frage 136
  {
    id: "binnen_136",
    nummer: 136,
    frage: "Welche Lichter muss ein geschlepptes Kleinfahrzeug führen?",
    bild: null,
    antworten: [
      "Weißes Rundumlicht.",
      "Lichter eines Kleinfahrzeugs mit Maschinenantrieb.",
      "Zwei weiße Lichter übereinander.",
      "Weißes Funkellicht."
    ]
  },
  // Frage 137
  {
    id: "binnen_137",
    nummer: 137,
    frage: "Wann gilt ein Sportboot auf den Binnenschifffahrtsstraßen nicht mehr als Kleinfahrzeug?",
    bild: null,
    antworten: [
      "Wenn es 20 m oder länger ist.",
      "Wenn es 15 m oder länger ist.",
      "Wenn es 10 m oder länger ist.",
      "Wenn es 18 m oder länger ist."
    ]
  },
  // Frage 138
  {
    id: "binnen_138",
    nummer: 138,
    frage: "Welchen Sichtwinkel und welche Farben haben die vorgeschriebenen Lichter an Bord?",
    bild: null,
    antworten: [
      "Topplicht: weiß 225°, Hecklicht 135° weiß, Seitenlichter: Backbord rot und Steuerbord grün, jeweils 112,5°.",
      "Topplicht: weiß 135°, Hecklicht 225° weiß, Seitenlichter: Backbord rot und Steuerbord grün, jeweils 112,5°.",
      "Topplicht: weiß 225°, Hecklicht 112,5° weiß, Seitenlichter: Backbord rot und Steuerbord grün, jeweils 135°.",
      "Topplicht: weiß 225°, Hecklicht 135° weiß, Seitenlichter: Backbord grün und Steuerbord rot, jeweils 112,5°."
    ]
  },
  // Frage 139
  {
    id: "binnen_139",
    nummer: 139,
    frage: "Welches Licht muss ein Kleinfahrzeug ohne Maschinenantrieb mindestens führen?",
    bild: null,
    antworten: [
      "Ein von allen Seiten sichtbares weißes Licht.",
      "Dreifarbenlaterne im Topp.",
      "Seitenlichter.",
      "Topp- und Hecklicht."
    ]
  },
  // Frage 140
  {
    id: "binnen_140",
    nummer: 140,
    frage: "Wie muss sich ein Segelfahrzeug auf einer Binnenschifffahrtsstraße, welches sich auf Kollisionskurs mit einem Kleinfahrzeug mit Maschinenantrieb befindet, verhalten?",
    bild: null,
    antworten: [
      "Es hält Kurs und Geschwindigkeit bei.",
      "Es wechselt den Kurs nach Steuerbord und reduziert die Geschwindigkeit.",
      "Es hält Kurs und reduziert die Geschwindigkeit.",
      "Es wechselt den Kurs nach Steuerbord und hält die Geschwindigkeit."
    ]
  },
  // Frage 141
  {
    id: "binnen_141",
    nummer: 141,
    frage: "Wie muss sich ein Fahrzeug mit Topplicht und Seitenlichtern gegenüber einem Kleinfahrzeug mit Seitenlichtern, welches sich auf Kollisionskurs befindet, verhalten?",
    bild: null,
    antworten: [
      "Es hält Kurs und Geschwindigkeit bei.",
      "Es wechselt den Kurs nach Steuerbord und reduziert die Geschwindigkeit.",
      "Es hält Kurs und reduziert die Geschwindigkeit.",
      "Es muss ausweichen."
    ]
  },
  // Frage 142
  {
    id: "binnen_142",
    nummer: 142,
    frage: "Wie muss sich ein Kleinfahrzeug mit Maschinenantrieb gegenüber einem Segelsurfer, der auf Kollisionskurs liegt, verhalten?",
    bild: null,
    antworten: [
      "Es muss ausweichen.",
      "Es hält Kurs und Geschwindigkeit bei.",
      "Es hält Kurs und reduziert die Geschwindigkeit.",
      "Es muss nicht ausweichen."
    ]
  },
  // Frage 143
  {
    id: "binnen_143",
    nummer: 143,
    frage: "Wer ist ausweichpflichtig, wenn ein Segler mit Wind von Backbord einer Segelyacht mit Wind von Steuerbord und einem schwarzen Kegel auf Kollisionskurs begegnet?",
    bild: null,
    antworten: [
      "Die Segelyacht mit Wind von Steuerbord, weil sie als Kleinfahrzeug mit Maschinenantrieb gilt.",
      "Die Segelyacht mit Wind von Backbord, weil sie als Kleinfahrzeug unter Segel gilt.",
      "Die Segelyacht mit Wind von Steuerbord, weil sie als Kleinfahrzeug unter Segel gilt.",
      "Beide Segelyachten, weil eines als Kleinfahrzeug mit Maschinenantrieb gilt und das andere den Wind von Backbord hat."
    ]
  },
  // Frage 144
  {
    id: "binnen_144",
    nummer: 144,
    frage: "Wie lautet eine der drei Grundregeln der Binnenschifffahrtsstraßen-Ordnung, nach denen Kleinfahrzeuge unter Segel einander ausweichen?",
    bild: null,
    antworten: [
      "Wenn sie den Wind nicht von derselben Seite haben, muss das Segelfahrzeug mit Wind von Backbord dem Segelfahrzeug mit Wind von Steuerbord ausweichen.",
      "Wenn sie den Wind nicht von derselben Seite haben, muss das Segelfahrzeug mit Wind von Steuerbord dem Segelfahrzeug mit Wind von Backbord ausweichen.",
      "Wenn sie den Wind von derselben Seite haben, muss das leeseitige dem luvseitigen ausweichen.",
      "Wenn sie den Wind von derselben Seite haben, müssen beide Fahrzeuge ausweichen."
    ]
  },
  // Frage 145 - Lichter
  {
    id: "binnen_145",
    nummer: 145,
    frage: "Was bedeuten diese Lichter?",
    bild: 145,
    antworten: [
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet. Sog und Wellenschlag vermeiden.",
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet. Sog und Wellenschlag vermeiden.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet."
    ]
  },
  // Frage 146 - Sichtzeichen
  {
    id: "binnen_146",
    nummer: 146,
    frage: "Was bedeuten diese Sichtzeichen?",
    bild: 146,
    antworten: [
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet.",
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet."
    ]
  },
  // Frage 147 - Lichter
  {
    id: "binnen_147",
    nummer: 147,
    frage: "Was bedeuten diese Lichter?",
    bild: 147,
    antworten: [
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der rot-weißen Seite gestattet; rote Seite gesperrt. Sog und Wellenschlag vermeiden.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der rot-weißen Seite gestattet; rote Seite gesperrt. Vorbeifahrt mit unvermindeter Geschwindigkeit möglich.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der roten Seite gestattet; rot-weiße Seite gesperrt. Vorbeifahrt mit unvermindeter Geschwindigkeit möglich.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der roten Seite gestattet; rot-weiße Seite gesperrt. Sog und Wellenschlag vermeiden."
    ]
  },
  // Frage 148 - Sichtzeichen
  {
    id: "binnen_148",
    nummer: 148,
    frage: "Was bedeuten diese Sichtzeichen?",
    bild: 148,
    antworten: [
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der rot-weißen Seite gestattet; rote Seite gesperrt. Sog und Wellenschlag vermeiden.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der rot-weißen Seite gestattet; rote Seite gesperrt. Vorbeifahrt mit unvermindeter Geschwindigkeit möglich.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der roten Seite gestattet; rot-weiße Seite gesperrt. Vorbeifahrt mit unvermindeter Geschwindigkeit möglich.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der roten Seite gestattet; rot-weiße Seite gesperrt. Sog und Wellenschlag vermeiden."
    ]
  },
  // Frage 150 - Sichtzeichen (Frage 149 fehlt im PDF)
  {
    id: "binnen_150",
    nummer: 150,
    frage: "Was bedeuten diese Sichtzeichen?",
    bild: 150,
    antworten: [
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der grünen Seite gestattet; rote Seite gesperrt. Sog und Wellenschlag vermeiden.",
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der grünen Seite gestattet; rote Seite gesperrt.",
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der grünen Seite gestattet. Vorbeifahrt an der roten Seite mit unverminderter Geschwindigkeit möglich.",
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an der roten Seite gestattet; grüne Seite gesperrt."
    ]
  },
  // Frage 151 - Zeichen
  {
    id: "binnen_151",
    nummer: 151,
    frage: "Was bedeuten im Fahrwasser nachstehende Zeichen?",
    bild: 151,
    antworten: [
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet.",
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet."
    ]
  },
  // Frage 152 - Lichter
  {
    id: "binnen_152",
    nummer: 152,
    frage: "Was bedeuten diese Lichter?",
    bild: 152,
    antworten: [
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet.",
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet."
    ]
  },
  // Frage 153 - Sichtzeichen
  {
    id: "binnen_153",
    nummer: 153,
    frage: "Was bedeuten diese Sichtzeichen?",
    bild: 153,
    antworten: [
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet.",
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet."
    ]
  },
  // Frage 154 - Sichtzeichen
  {
    id: "binnen_154",
    nummer: 154,
    frage: "Was bedeuten diese Sichtzeichen?",
    bild: 154,
    antworten: [
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt an jeder Seite gestattet.",
      "Schwimmendes Gerät bei der Arbeit. Vorbeifahrt nicht gestattet.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an der Steuerbordseite gestattet. Sog und Wellenschlag vermeiden.",
      "Festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet."
    ]
  },
  // Frage 155 - Tag- und Nachtbezeichnung
  {
    id: "binnen_155",
    nummer: 155,
    frage: "Was bedeutet diese Tag- und Nachtbezeichnung?",
    bild: 155,
    antworten: [
      "Schutzbedürftiges Fahrzeug, Vorbeifahrt in möglichst weitem Abstand, Geschwindigkeit vermindern, Sog und Wellenschlag vermeiden.",
      "Ein festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt nicht gestattet.",
      "Ein festgefahrenes oder gesunkenes Fahrzeug. Vorbeifahrt an jeder Seite mit unverminderter Geschwindigkeit gestattet.",
      "Schwimmende Anlage / Schwimmkörper. Vorbeifahrt in möglichst weitem Abstand, Geschwindigkeit vermindern, Sog und Wellenschlag vermeiden."
    ]
  },
  // Frage 156 - Tafelzeichen
  {
    id: "binnen_156",
    nummer: 156,
    frage: "Was bedeutet dieses Tafelzeichen?",
    bild: 156,
    antworten: [
      "Gesperrte Wasserfläche, jedoch für Kleinfahrzeuge ohne Antriebsmaschine befahrbar.",
      "Gesperrte Wasserfläche, jedoch für Kleinfahrzeuge ohne laufende Antriebsmaschine befahrbar.",
      "Gesperrte Wasserfläche, für Kleinfahrzeuge nicht befahrbar.",
      "Gesperrte Wasserfläche, Verbot der Durchfahrt und Sperrung der Schifffahrt."
    ]
  },
  // Frage 157 - Tafelzeichen
  {
    id: "binnen_157",
    nummer: 157,
    frage: "Was bedeutet dieses Tafelzeichen?",
    bild: 157,
    antworten: [
      "Fahrverbot für Fahrzeuge mit Maschinenantrieb.",
      "Fahrverbot für Kleinfahrzeuge mit Maschinenantrieb.",
      "Fahrverbot für Fahrzeuge ohne Antriebsmaschine.",
      "Fahrverbot für Kleinfahrzeuge ohne laufende Antriebsmaschine."
    ]
  },
  // Frage 158
  {
    id: "binnen_158",
    nummer: 158,
    frage: "Wie ist eine geschützte Badezone gekennzeichnet?",
    bild: null,
    antworten: [
      "Durch gelbe Tonnen.",
      "Durch grüne Tonnen.",
      "Durch rote Tonnen.",
      "Durch rot-grün gestreifte Tonnen."
    ]
  },
  // Frage 159 - Schallsignal
  {
    id: "binnen_159",
    nummer: 159,
    frage: "Was bedeutet ein langer Ton (–)?",
    bild: null,
    antworten: [
      "Achtung!",
      "Maschine geht rückwärts.",
      "Fahrzeug ist manövrierunfähig.",
      "Überholen nicht möglich."
    ]
  },
  // Frage 160 - Schallsignal
  {
    id: "binnen_160",
    nummer: 160,
    frage: "Was bedeuten vier kurze Töne (· · · ·)?",
    bild: null,
    antworten: [
      "Fahrzeug ist manövrierunfähig.",
      "Maschine geht rückwärts.",
      "Achtung!",
      "Überholen nicht möglich."
    ]
  },
  // Frage 161 - Schallsignal
  {
    id: "binnen_161",
    nummer: 161,
    frage: "Was bedeuten fünf kurze Töne (· · · · ·)?",
    bild: null,
    antworten: [
      "Überholen nicht möglich.",
      "Maschine geht rückwärts.",
      "Fahrzeug ist manövrierunfähig.",
      "Achtung!"
    ]
  },
  // Frage 162 - Schallsignal
  {
    id: "binnen_162",
    nummer: 162,
    frage: "Was bedeutet dieses Schallsignal? (–)",
    bild: null,
    antworten: [
      "Wenden über Steuerbord.",
      "Kursänderung über Steuerbord.",
      "Kursänderung nach Backbord.",
      "Wenden über Backbord."
    ]
  },
  // Frage 163 - Schallsignal
  {
    id: "binnen_163",
    nummer: 163,
    frage: "Was bedeutet dieses Schallsignal? (—)",
    bild: null,
    antworten: [
      "Wenden über Backbord.",
      "Wenden über Steuerbord.",
      "Kursänderung nach Backbord.",
      "Kursänderung nach Steuerbord."
    ]
  },
  // Frage 164 - Schallsignal
  {
    id: "binnen_164",
    nummer: 164,
    frage: "Was bedeutet dieses Schallsignal? (—)",
    bild: null,
    antworten: [
      "Überholen an der Steuerbordseite des Vorausfahrenden.",
      "Überholen an der Backbordseite des Vorausfahrenden.",
      "Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Steuerbord.",
      "Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Backbord."
    ]
  },
  // Frage 165 - Schallsignal
  {
    id: "binnen_165",
    nummer: 165,
    frage: "Was bedeutet dieses Schallsignal? (—)",
    bild: null,
    antworten: [
      "Überholen an der Backbordseite des Vorausfahrenden.",
      "Überholen an der Steuerbordseite des Vorausfahrenden.",
      "Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Steuerbord.",
      "Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Backbord."
    ]
  },
  // Frage 166 - Schallsignal
  {
    id: "binnen_166",
    nummer: 166,
    frage: "Was bedeutet dieses Schallsignal? (—)",
    bild: null,
    antworten: [
      "Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Steuerbord.",
      "Überholen an der Backbordseite des Vorausfahrenden.",
      "Überholen an der Steuerbordseite des Vorausfahrenden.",
      "Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Backbord."
    ]
  },
  // Frage 167 - Schallsignal
  {
    id: "binnen_167",
    nummer: 167,
    frage: "Was bedeutet dieses Schallsignal? (—)",
    bild: null,
    antworten: [
      "Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Backbord.",
      "Überholen an der Backbordseite des Vorausfahrenden.",
      "Überholen an der Steuerbordseite des Vorausfahrenden.",
      "Hafen oder Nebenwasserstraße; Ein- oder Ausfahrt mit Kursänderung nach Steuerbord."
    ]
  },
  // Frage 168
  {
    id: "binnen_168",
    nummer: 168,
    frage: "Was ist eine Folge sehr kurzer Töne?",
    bild: null,
    antworten: [
      "Eine Folge von mindestens 6 Tönen, von je etwa einer viertel Sekunde Dauer und mit je einer viertel Sekunde Pause.",
      "Eine Folge von mindestens 4 Tönen von je etwa einer viertel Sekunde Dauer und mit je einer viertel Sekunde Pause.",
      "Eine Folge von mindestens 2 Tönen von je etwa einer viertel Sekunde Dauer und mit je einer viertel Sekunde Pause.",
      "Eine Folge von mindestens 8 Tönen von je etwa einer viertel Sekunde Dauer und mit je einer viertel Sekunde Pause."
    ]
  },
  // Frage 169
  {
    id: "binnen_169",
    nummer: 169,
    frage: "Was bedeutet eine Folge sehr kurzer Töne?",
    bild: null,
    antworten: [
      "Gefahr eines Zusammenstoßes.",
      "Achtung!",
      "Fahrzeug ist manövrierunfähig.",
      "Überholen nicht möglich."
    ]
  },
  // Frage 170
  {
    id: "binnen_170",
    nummer: 170,
    frage: "Welche Schallsignale bzw. Zeichen sind zu geben, wenn das Boot manövrierunfähig geworden ist?",
    bild: null,
    antworten: [
      "Vier kurze Töne. Bei Tag eine rote Flagge, bei Nacht ein rotes Licht im unteren Halbkreis schwenken.",
      "Fünf kurze Töne. Bei Tag eine rote Flagge, bei Nacht ein rotes Licht im oberen Halbkreis schwenken.",
      "Ein langer, vier kurze Töne. Bei Tag eine rote Flagge, bei Nacht ein rotes Licht setzen.",
      "Eine Gruppe von kurzen und langen Tönen im Intervall geben. Bei Nacht ein rotes Blinklicht einschalten."
    ]
  },
  // Frage 171
  {
    id: "binnen_171",
    nummer: 171,
    frage: "Ein Fahrzeug zeigt an der Steuerbordseite seines Ruderhauses eine blaue Tafel mit weißem Funkellicht. Welche Bedeutung hat dieses Zeichen?",
    bild: null,
    antworten: [
      "Fahrzeuge begegnen sich an Steuerbord. Dieses Zeichen gilt nicht für Kleinfahrzeuge, verpflichtet aber zu erhöhter Aufmerksamkeit.",
      "Fahrzeuge begegnen sich an Steuerbord. Dieses Zeichen gilt nur für Kleinfahrzeuge.",
      "Fahrzeuge begegnen sich an Steuerbord. Dieses Zeichen braucht gar nicht beachtet zu werden.",
      "Fahrzeuge begegnen sich an Steuerbord. Dieses Zeichen gilt auch für alle Kleinfahrzeuge."
    ]
  },
  // Frage 172
  {
    id: "binnen_172",
    nummer: 172,
    frage: "Ein Sportfahrzeug fährt hinter einem Fahrzeug, das nicht Kleinfahrzeug ist, in den Schleusenvorhafen ein. Aus der Schleusenkammer kommt ein Fahrzeug, das an Steuerbord eine blaue Tafel mit einem weißen Funkellicht zeigt. Was bedeutet dieses Zeichen?",
    bild: null,
    antworten: [
      "Das aus- und die einfahrenden Fahrzeuge passieren sich an der Steuerbordseite, das Kleinfahrzeug ist nur zu erhöhter Aufmerksamkeit verpflichtet.",
      "Das aus- und die einfahrenden Fahrzeuge passieren sich an der Backbordseite, das Kleinfahrzeug ist nur zu erhöhter Aufmerksamkeit verpflichtet.",
      "Das aus- und die einfahrenden Fahrzeuge passieren sich an der Steuerbordseite, das Kleinfahrzeug ist wartepflichtig.",
      "Das aus- und die einfahrenden Fahrzeuge passieren sich an der Backbordseite, das Kleinfahrzeug hat Vorrang."
    ]
  },
  // Frage 173
  {
    id: "binnen_173",
    nummer: 173,
    frage: "Wo kann man von bestehenden Höchstgeschwindigkeiten auf den Binnenschifffahrtsstraßen Kenntnis erhalten?",
    bild: null,
    antworten: [
      "In der Binnenschifffahrtsstraßen-Ordnung, bei der Wasserstraßen- und Schifffahrtsverwaltung und der Wasserschutzpolizei.",
      "In der Binnenschiffsuntersuchungsordnung, bei der Wasserstraßen- und Schifffahrtsverwaltung und der Wasserschutzpolizei.",
      "In der Sportbootführerscheinverordnung, bei der Wasserstraßen- und Schifffahrtsverwaltung und der Wasserschutzpolizei.",
      "In der Binnenschifferpatentverordnung, bei der Wasserstraßen- und Schifffahrtsverwaltung und der Wasserschutzpolizei."
    ]
  },
  // Frage 174
  {
    id: "binnen_174",
    nummer: 174,
    frage: "Wie ist ein Überholmanöver durchzuführen?",
    bild: null,
    antworten: [
      "Zügig überholen. Beteiligte Fahrzeuge nicht behindern. Verkehrslage und eventuelle Schallzeichen beachten. Ausreichend Abstand halten.",
      "Zügig überholen. Gegebenenfalls das Fahrzeug stark beschleunigen, um schnell passieren zu können.",
      "Zügig überholen; überholen nur auf der Steuerbordseite erlaubt, ausreichend Abstand halten.",
      "Zügig überholen. Dicht am Ufer entlang fahren, eventuelle Schallzeichen müssen von Kleinfahrzeugen beachtet werden."
    ]
  },
  // Frage 175
  {
    id: "binnen_175",
    nummer: 175,
    frage: "Wann besteht die Gefahr eines Zusammenstoßes?",
    bild: null,
    antworten: [
      "Wenn sich zwei Fahrzeuge bei gleichbleibender Peilung einander nähern.",
      "Wenn sich zwei Fahrzeuge einander nähern und sich der Kurs der Fahrzeuge nicht ändert.",
      "Wenn sich zwei Fahrzeuge einander nähern und sich der Kurs eines Fahrzeuges ändert.",
      "Wenn sich zwei Fahrzeuge einander nähern und beide Fahrzeuge ihren Kurs nach Steuerbord ändern."
    ]
  },
  // Frage 176
  {
    id: "binnen_176",
    nummer: 176,
    frage: "Wie müssen Ausweichmanöver durchgeführt werden?",
    bild: null,
    antworten: [
      "Rechtzeitig, klar erkennbar und entschlossen.",
      "Rechtzeitig, klar erkennbar und nach Steuerbord.",
      "Rechtzeitig, klar erkennbar und nach Backbord.",
      "Rechtzeitig, klar erkennbar und vorsichtig."
    ]
  },
  // Frage 177
  {
    id: "binnen_177",
    nummer: 177,
    frage: "Ein Kleinfahrzeug und ein Fahrzeug über 20 m Länge nähern sich auf kreuzenden Kursen. Es besteht die Gefahr eines Zusammenstoßes. Wer ist ausweichpflichtig?",
    bild: null,
    antworten: [
      "Ausweichpflichtig ist das Kleinfahrzeug.",
      "Ausweichpflichtig ist das Fahrzeug über 20 m Länge.",
      "Ausweichpflichtig ist das Fahrzeug, welches das andere an seiner Steuerbordseite sieht.",
      "Ausweichpflichtig ist das Fahrzeug, welches das andere an seiner Backbordseite sieht."
    ]
  },
  // Frage 178
  {
    id: "binnen_178",
    nummer: 178,
    frage: "Welche Fahrzeuge in Fahrt führen nachts nur ein weißes Rundumlicht?",
    bild: null,
    antworten: [
      "Geschleppte oder längsseits gekuppelte Kleinfahrzeuge.",
      "Kleinfahrzeuge mit Maschinenantrieb unter 20 m Länge.",
      "Kleinfahrzeuge mit Maschinenantrieb und geschleppte Fahrzeuge.",
      "Fahrzeuge die geschoben werden."
    ]
  },
  // Frage 179
  {
    id: "binnen_179",
    nummer: 179,
    frage: "Wie muss sich ein kreuzendes Kleinfahrzeug unter Segel am Wind in der Nähe eines Ufers gegenüber einem anderen Kleinfahrzeug verhalten?",
    bild: null,
    antworten: [
      "Es darf ein anderes Kleinfahrzeug, das sein steuerbordseitiges Ufer anhält, nicht zum Ausweichen zwingen.",
      "Es darf ein anderes Kleinfahrzeug, das sein steuerbordseitiges Ufer verlässt, nicht zum Ausweichen zwingen.",
      "Es darf ein anderes Kleinfahrzeug, das sein backbordseitiges Ufer verlässt, zum Ausweichen zwingen.",
      "Es darf ein anderes Kleinfahrzeug, das sein steuerbordseitiges Ufer anhält, zum Ausweichen zwingen."
    ]
  },
  // Frage 181 (Frage 180 fehlt im PDF)
  {
    id: "binnen_181",
    nummer: 181,
    frage: "Was hat der Schiffsführer eines Kleinfahrzeugs beim Begegnen mit Fahrzeugen, die nicht Kleinfahrzeuge sind, zu beachten?",
    bild: null,
    antworten: [
      "Kleinfahrzeuge sind gegenüber Fahrzeugen, die nicht Kleinfahrzeuge sind, ausweichpflichtig. Sie müssen für deren Kurs und zum Manövrieren notwendigen Raum lassen.",
      "Kleinfahrzeuge sind gegenüber anderen Fahrzeugen, die nicht Kleinfahrzeuge sind, nicht ausweichpflichtig.",
      "Kleinfahrzeuge sind gegenüber Fahrzeugen, die nicht Kleinfahrzeuge sind, bei der Begegnung gleichgestellt.",
      "Kleinfahrzeuge sind gegenüber Fahrzeugen, die nicht Kleinfahrzeuge sind, ausweichpflichtig. Sie brauchen aber keinen besonderen Raum zum Manövrieren frei zu geben."
    ]
  },
  // Frage 182
  {
    id: "binnen_182",
    nummer: 182,
    frage: "Von Backbord kommend kreuzt ein Fahrzeug unter Segel mit einem schwarzen Kegel, Spitze nach unten, den Kurs eines Fahrzeuges mit Maschinenantrieb. Wer ist ausweichpflichtig?",
    bild: null,
    antworten: [
      "Das Fahrzeug unter Segel mit einem schwarzen Kegel ist ausweichpflichtig.",
      "Das Fahrzeug ohne Segel ist ausweichpflichtig.",
      "Das Fahrzeug unter Segel mit einem schwarzen Kegel ist nicht ausweichpflichtig.",
      "Beide Fahrzeuge sind ausweichpflichtig."
    ]
  },
  // Frage 183 - Skizze
  {
    id: "binnen_183",
    nummer: 183,
    frage: "Zwei Kleinfahrzeuge unter Segel A und B liegen auf Kollisionskurs; A führt einen schwarzen Kegel. Wer ist ausweichpflichtig?",
    bild: 183,
    antworten: [
      "Fahrzeug A ist ausweichpflichtig.",
      "Fahrzeug B ist ausweichpflichtig.",
      "Ausweichpflichtig ist das Fahrzeug, welches das Andere an seiner Backbordseite sieht.",
      "Ausweichpflichtig ist das Fahrzeug, welches den Wind von Backbord hat."
    ]
  },
  // Frage 184
  {
    id: "binnen_184",
    nummer: 184,
    frage: "Ein Fahrzeug unter Segel kreuzt eine Binnenschifffahrtsstraße. In der Fahrwassermitte kommt ihm ein Kleinfahrzeug mit Maschinenantrieb zu Berg entgegen. Wer ist ausweichpflichtig?",
    bild: null,
    antworten: [
      "Fahrzeug mit Maschinenantrieb.",
      "Fahrzeug in der Talfahrt.",
      "Fahrzeug unter Segel.",
      "Beide sind ausweichpflichtig."
    ]
  },
  // Frage 185 - Skizze
  {
    id: "binnen_185",
    nummer: 185,
    frage: "Zwei Kleinfahrzeuge A und B unter Segel liegen auf Kollisionskurs (Skizze). Wer ist ausweichpflichtig?",
    bild: 185,
    antworten: [
      "A ist ausweichpflichtig. Segelfahrzeuge mit Wind von Backbord müssen Segelfahrzeugen mit Wind von Steuerbord ausweichen.",
      "B ist ausweichpflichtig. Segelfahrzeuge mit Wind von Backbord müssen Segelfahrzeugen mit Wind von Steuerbord ausweichen.",
      "A ist ausweichpflichtig. Segelfahrzeuge mit Wind von Steuerbord müssen Segelfahrzeugen mit Wind von Backbord ausweichen.",
      "B ist ausweichpflichtig. Segelfahrzeuge mit Wind von Steuerbord müssen Segelfahrzeugen mit Wind von Backbord ausweichen."
    ]
  },
  // Frage 186 - Skizze
  {
    id: "binnen_186",
    nummer: 186,
    frage: "Zwei Kleinfahrzeuge unter Segel liegen auf Kollisionskurs. Wer ist ausweichpflichtig?",
    bild: 186,
    antworten: [
      "B ist ausweichpflichtig. Das luvseitige Boot muss dem leeseitigen ausweichen.",
      "A ist ausweichpflichtig. Das luvseitige Boot muss dem leeseitigen ausweichen.",
      "B ist ausweichpflichtig. Das leeseitige Boot muss dem luvseitigen ausweichen.",
      "A ist ausweichpflichtig. Das leeseitige Boot muss dem luvseitigen ausweichen."
    ]
  },
  // Frage 187
  {
    id: "binnen_187",
    nummer: 187,
    frage: "Ein Kleinfahrzeug A segelt nachts auf Vorwindkurs stromab, Großsegel an Steuerbord. Backbord querab kommt ein grünes Seitenlicht eines Bootes B immer näher, das kein Topplicht führt. Wer ist ausweichpflichtig?",
    bild: null,
    antworten: [
      "Das Kleinfahrzeug A ist ausweichpflichtig. Ein Boot mit Wind von Backbord muss ausweichen, wenn es nicht klar ausmachen kann, ob das luvseitige Boot den Wind von Steuerbord hat.",
      "Das Kleinfahrzeug A ist ausweichpflichtig. Ein Boot mit Wind von Steuerbord muss ausweichen, wenn es nicht klar ausmachen kann, ob das luvseitige Boot den Wind von Backbord hat.",
      "Boot B ist ausweichpflichtig, weil es sich bei Fahrzeug A um ein Kleinfahrzeug unter Segel handelt, das den Wind von Backbord hat.",
      "Boot B ist ausweichpflichtig, weil es sich um ein Kleinfahrzeug handelt und Kleinfahrzeuge anderen Kleinfahrzeugen unter Segel ausweichen müssen."
    ]
  },
  // Frage 188 - Skizze
  {
    id: "binnen_188",
    nummer: 188,
    frage: "Der seitliche Abstand zwischen den Booten A, B und C verringert sich ständig. Welches Boot kann seinen Kurs beibehalten?",
    bild: 188,
    antworten: [
      "Boot A, weil leeseitig.",
      "Boot A, weil luvseitig.",
      "Boot B, weil leeseitig.",
      "Boot C, weil leeseitig."
    ]
  },
  // Frage 189 - Skizze
  {
    id: "binnen_189",
    nummer: 189,
    frage: "Wer ist wem gegenüber kurshaltepflichtig?",
    bild: 189,
    antworten: [
      "A gegenüber B und C, B gegenüber C.",
      "A gegenüber B und C, C gegenüber B.",
      "B gegenüber A und C, C gegenüber A.",
      "B gegenüber A und C, A gegenüber C."
    ]
  },
  // Frage 190
  {
    id: "binnen_190",
    nummer: 190,
    frage: "Was ist vorrangig zu beachten, wenn eine Jolle gekentert ist und sie nicht wieder aufgerichtet werden kann?",
    bild: null,
    antworten: [
      "Vollständigkeit der Crew überprüfen, gegebenenfalls Hilfe leisten. Am Boot festhalten oder gegebenenfalls aufs Boot legen, Hilfe abwarten.",
      "Sofort vorgeschriebene Notsignale geben, mit allen Mitteln versuchen, das Fahrzeug aus dem Fahrwasser zu bringen.",
      "Auf das gekenterte Boot steigen und sich ruhig verhalten, um Wärmeverlust zu minimieren. Sollte das nicht möglich sein, ans benachbarte Ufer schwimmen und Hilfe holen.",
      "Rettungswesten anlegen und mit geeigneten Mitteln Hilfe herbeiholen. Gegebenenfalls Segel bergen."
    ]
  },
  // Frage 191
  {
    id: "binnen_191",
    nummer: 191,
    frage: "Ein Segelboot gerät in das Feld einer Segelregatta, ohne selbst Teilnehmer zu sein. Welche Ausweichregeln sind zu beachten?",
    bild: null,
    antworten: [
      "Die der Binnenschifffahrtsstraßen-Ordnung.",
      "Die der Wettsegelbestimmungen.",
      "Gegenüber Regattateilnehmern die der Wettfahrtregeln, gegenüber anderen Fahrzeugen die der Binnenschifffahrtsstraßen-Ordnung.",
      "Fahrzeuge, die an einer Regatta teilnehmen, müssen unbeteiligten Fahrzeugen ausweichen."
    ]
  },
  // Frage 192 - Lichter
  {
    id: "binnen_192",
    nummer: 192,
    frage: "Ein Kleinfahrzeug unter Segel kreuzt nachts das Fahrwasser. An Backbord tauchen die nachstehenden Lichter eines Fahrzeugs auf, das in spitzem Winkel den Kurs des Kleinfahrzeugs unter Segel kreuzen will. Was bedeuten diese Lichter?",
    bild: 192,
    antworten: [
      "Kleinfahrzeug mit Maschinenantrieb.",
      "Frei fahrende Fähre.",
      "Schubverband von vorne.",
      "Geschlepptes Kleinfahrzeug."
    ]
  },
  // Frage 193 - Lichter
  {
    id: "binnen_193",
    nummer: 193,
    frage: "Ein Kleinfahrzeug unter Segel kreuzt nachts das Fahrwasser. An Backbord tauchen die nachstehenden Lichter eines Fahrzeugs auf, das in spitzem Winkel den Kurs des Kleinfahrzeugs unter Segel kreuzen will. Wer ist ausweichpflichtig?",
    bild: 193,
    antworten: [
      "Kleinfahrzeug mit Maschinenantrieb.",
      "Kleinfahrzeug unter Segel.",
      "Kleinfahrzeug, welches das Andere auf der Backbordseite hat.",
      "Beide sind ausweichpflichtig."
    ]
  },
  // Frage 194
  {
    id: "binnen_194",
    nummer: 194,
    frage: "Ein Kleinfahrzeug unter Segel und mit Maschinenantrieb kreuzt nachts stromauf. Ein Fahrzeug kommt entgegen, das nur ein weißes Licht führt. Was bedeutet dieses Licht?",
    bild: null,
    antworten: [
      "Kleinfahrzeug ohne Maschinenantrieb.",
      "Kleinfahrzeug mit Maschinenantrieb.",
      "Kleinfahrzeug unter Segel.",
      "Kleinfahrzeug unter Segel mit Maschinenantrieb."
    ]
  },
  // Frage 195
  {
    id: "binnen_195",
    nummer: 195,
    frage: "Ein Kleinfahrzeug unter Segel kreuzt nachts im Fahrwasser. Von achtern kommt ein Fahrzeug, das eine Zweifarbenlaterne und ein Topplicht führt. Was bedeuten diese Lichter?",
    bild: null,
    antworten: [
      "Kleinfahrzeug mit Maschinenantrieb.",
      "Kleinfahrzeug ohne Maschinenantrieb.",
      "Kleinfahrzeug unter Segel.",
      "Kleinfahrzeug unter Segel mit Maschinenantrieb."
    ]
  },
  // Frage 196 - Lichter
  {
    id: "binnen_196",
    nummer: 196,
    frage: "Was bedeuten nachts auf einer Binnenschifffahrtsstraße die nachstehenden Lichter?",
    bild: 196,
    antworten: [
      "Sperrung der Schifffahrt. Durchfahrt für Kleinfahrzeuge verboten.",
      "Keine Durchfahrt für Kleinfahrzeuge.",
      "Sperrung der Schifffahrt.",
      "Durchfahrt für Kleinfahrzeuge."
    ]
  },
  // Frage 197
  {
    id: "binnen_197",
    nummer: 197,
    frage: "Wo ist die Geschwindigkeit zu vermindern, um Sog und Wellenschlag zu vermeiden?",
    bild: null,
    antworten: [
      "Vor Hafeneinmündungen, an Lade-, Lösch- und Liegeplätzen, in der Nähe nicht frei fahrender Fähren, auf gekennzeichneten Strecken, in der Nähe schwimmender Geräte bei der Arbeit.",
      "Vor Einmündungen, an Lade-, Lösch- und Liegeplätzen, in der Nähe nicht frei fahrender Fähren, auf gekennzeichneten Strecken, in der Nähe schwimmender Geräte bei der Arbeit.",
      "Vor Hafeneinmündungen, an Lade-, Lösch- und Liegeplätzen, in der Nähe frei fahrender Fähren, auf gekennzeichneten Strecken, in der Nähe schwimmender Geräte bei der Arbeit.",
      "Vor Hafeneinmündungen, an Lade-, Lösch- und Liegeplätzen, in der Nähe nicht frei fahrender Fähren, auf gekennzeichneten Strecken, in der Nähe schwimmender Schifffahrtszeichen."
    ]
  },
  // Frage 198 - Tafelzeichen
  {
    id: "binnen_198",
    nummer: 198,
    frage: "Was bedeutet dieses Tafelzeichen?",
    bild: 198,
    antworten: [
      "Vorgeschriebene Fahrtrichtung.",
      "Fahrtrichtung nach links verboten.",
      "Vorgeschriebene Fahrtrichtung nur für Kleinfahrzeuge.",
      "Empfohlene Fahrtrichtung."
    ]
  },
  // Frage 199 - Tafelzeichen
  {
    id: "binnen_199",
    nummer: 199,
    frage: "Welche Bedeutung hat das nachstehende Tafelzeichen, wenn das rote Licht leuchtet?",
    bild: 199,
    antworten: [
      "Verbot der Einfahrt in einen Hafen oder eine Nebenwasserstraße.",
      "Verbot des Überholens auf dem Streckenabschnitt.",
      "Achtung Doppelschleuse, linke Kammer gesperrt.",
      "Achtung Ausfahrt aus Hafen oder Nebenfahrwasser."
    ]
  },
  // Frage 200 - Tafelzeichen
  {
    id: "binnen_200",
    nummer: 200,
    frage: "Was bedeutet dieses Tafelzeichen?",
    bild: 200,
    antworten: [
      "10 km/h Höchstgeschwindigkeit gegenüber dem Ufer.",
      "10 km/h Höchstgeschwindigkeit gegenüber der Strömung.",
      "10 km/h Höchstgeschwindigkeit für Kleinfahrzeuge.",
      "10 km/h für größere Fahrzeuge."
    ]
  },
  // Frage 201 - Tafelzeichen
  {
    id: "binnen_201",
    nummer: 201,
    frage: "Was bedeutet dieses Tafelzeichen?",
    bild: 201,
    antworten: [
      "Gebot: Besondere Vorsicht walten lassen.",
      "Gebot: Geradeaus zu fahren.",
      "Gebot: Achtungssignal geben.",
      "Gebot: Vor dem Schild anhalten."
    ]
  },
  // Frage 202 - Tafelzeichen
  {
    id: "binnen_202",
    nummer: 202,
    frage: "Was bedeutet dieses Tafelzeichen?",
    bild: 202,
    antworten: [
      "Wendeverbot.",
      "Verbotene Fahrtrichtung rechts oder links.",
      "Verbote in beiden angezeigten Richtungen zu fahren.",
      "Wendeverbot in der Mitte des Fahrwassers."
    ]
  },
  // Frage 203 - Tafelzeichen
  {
    id: "binnen_203",
    nummer: 203,
    frage: "Was bedeutet dieses Tafelzeichen?",
    bild: 203,
    antworten: [
      "Empfohlener Wendeplatz. Stillliegen für alle Fahrzeuge verboten.",
      "Empfohlener Wendeplatz. Stillliegen von Kleinfahrzeugen erlaubt.",
      "Vorgeschriebener Wendeplatz. Stillliegen für alle Fahrzeuge verboten.",
      "Vorgeschriebener Wendeplatz. Stillliegen von Kleinfahrzeugen erlaubt."
    ]
  },
  // Frage 204 - Tafelzeichen
  {
    id: "binnen_204",
    nummer: 204,
    frage: "Was bedeutet dieses Tafelzeichen?",
    bild: 204,
    antworten: [
      "Wehr.",
      "Hubbrücke.",
      "Schleuse.",
      "Sicherheitstor."
    ]
  },
  // Frage 205
  {
    id: "binnen_205",
    nummer: 205,
    frage: "Welche Sichtbeeinträchtigungen führen zu unsichtigem Wetter?",
    bild: null,
    antworten: [
      "Nebel, Schneefall, starker Regen.",
      "Dunkelheit, Nebel, Schneefall, starker Regen.",
      "Nacht, Schneefall, starker Regen.",
      "Dämmerung, Nebel, Schneefall, starker Regen."
    ]
  },
  // Frage 206
  {
    id: "binnen_206",
    nummer: 206,
    frage: "Wie muss ein Fahrzeug ausgerüstet sein, um bei unsichtigem Wetter zu fahren?",
    bild: null,
    antworten: [
      "Mit einer für die Binnenschifffahrt zugelassenen funktionsfähigen Radaranlage und einer Sprechfunkanlage für den Binnenschifffahrtsfunk.",
      "Mit einer für die Binnenschifffahrt zugelassenen funktionsfähigen Radaranlage und einer Sprechfunkanlage ohne ATIS.",
      "Mit einer für die Binnenschifffahrt zugelassenen funktionsfähigen Radaranlage und einer Sprechfunkanlage für den Seefunkdienst.",
      "Mit einer für die Binnenschifffahrt zugelassenen funktionsfähigen Radaranlage und einer Sprechfunkanlage für den Seefunkdienst sowie ATIS."
    ]
  },
  // Frage 207
  {
    id: "binnen_207",
    nummer: 207,
    frage: "Was ist zu beachten, wenn während der Fahrt unsichtiges Wetter eintritt?",
    bild: null,
    antworten: [
      "Auf bestimmten Wasserstraßen ist ohne Radar und Sprechfunk die Fahrt unverzüglich einzustellen.",
      "Auf allen Wasserstraßen ist ohne Radar und Sprechfunk die Fahrt unverzüglich einzustellen.",
      "Auf bestimmten Wasserstraßen ist ohne Radar und AIS die Fahrt unverzüglich einzustellen.",
      "Auf allen Wasserstraßen ist ohne Radar und ECDIS die Fahrt unverzüglich einzustellen."
    ]
  },
  // Frage 208
  {
    id: "binnen_208",
    nummer: 208,
    frage: "Welchen Vorteil bietet ein Radarreflektor auf einem Sportboot?",
    bild: null,
    antworten: [
      "Bessere Erkennbarkeit des Sportbootes auf Radarbildschirmen.",
      "Bessere Erkennbarkeit des Sportbootes bei Nacht.",
      "Bessere Erkennbarkeit des Sportbootes bei Taglicht.",
      "Bessere Erkennbarkeit des Sportbootes bei unsichtigem Wetter."
    ]
  },
  // Frage 209
  {
    id: "binnen_209",
    nummer: 209,
    frage: "Welche technische Einrichtung gegen einen Stromschlag muss in der Landstromversorgung unbedingt installiert sein?",
    bild: null,
    antworten: [
      "Ein Fehlerstromschutzschalter.",
      "Ein geringer Ladungsstrom ist ungefährlich.",
      "Ein Überspannungsschutz.",
      "Ein Schutzkleinspannungsschalter."
    ]
  },
  // Frage 210
  {
    id: "binnen_210",
    nummer: 210,
    frage: "Welches Schallsignal ist zu geben, wenn in einer Notsituation Hilfe gebraucht wird?",
    bild: null,
    antworten: [
      "Wiederholte lange Töne geben oder Gruppen von Glockenschlägen.",
      "Wiederholte kurze Töne geben, keine Glockenschläge.",
      "Einen langen Ton geben, vereinzelt Glockenschläge.",
      "Drei kurze Töne geben, keine Glockenschläge."
    ]
  },
  // Frage 211
  {
    id: "binnen_211",
    nummer: 211,
    frage: "Welche Bedeutung hat am Tag das Kreisen einer roten Flagge auf einem Wasserfahrzeug?",
    bild: null,
    antworten: [
      "Ein in Not befindliches Fahrzeug, das durch Sichtzeichen Hilfe herbeirufen will.",
      "Ein manövrierbehindertes Fahrzeug, das durch Sichtzeichen Hilfe herbeirufen will.",
      "Keine Bedeutung für den durchgehenden Schiffsverkehr.",
      "Schützenswertes Fahrzeug, Vermeidung von Sog und Wellenschlag."
    ]
  },
  // Frage 212
  {
    id: "binnen_212",
    nummer: 212,
    frage: "Welche Notsignale kann ein Segelsurfer auf Binnenschifffahrtsstraßen geben?",
    bild: null,
    antworten: [
      "Kreisförmiges Schwenken der Arme oder eines Gegenstandes.",
      "Kreisförmiges Schwenken einer grünen Flagge, die mit anderen Zeichen nicht verwechselt werden kann.",
      "Wiederholt lange Gruppen von Glockenschlägen.",
      "Kreisförmiges Schwenken der Arme ist zu vermeiden, das Surfsegel ist möglichst senkrecht zu stellen."
    ]
  },
  // Frage 213
  {
    id: "binnen_213",
    nummer: 213,
    frage: "Was ist mit Abfällen jeglicher Art zu tun, die an Bord anfallen?",
    bild: null,
    antworten: [
      "An Bord sammeln und an Land in den entsprechenden Abfallsammelbehältern umweltgerecht entsorgen.",
      "An Bord sammeln und bei einer Liegestelle an Land stellen.",
      "An Bord sammeln und nur in geschlossenen Behältern über Bord werfen.",
      "An Bord sammeln. Die Abgabe ist an jeder Schleuse möglich."
    ]
  },
  // Frage 214
  {
    id: "binnen_214",
    nummer: 214,
    frage: "Wem darf der Schiffsführer das Ruder eines motorisierten Sportbootes überlassen?",
    bild: null,
    antworten: [
      "Einer Person, die mindestens 16 Jahre alt, sowie körperlich und geistig geeignet ist.",
      "Einer Person, die mindestens 18 Jahre alt, sowie körperlich und geistig geeignet ist.",
      "Einer Person, die mindestens 14 Jahre alt, sowie körperlich und geistig geeignet ist.",
      "Einer Person jeden Alters, die körperlich und geistig geeignet ist."
    ]
  },
  // Frage 215
  {
    id: "binnen_215",
    nummer: 215,
    frage: "Wie müssen Abfälle entsorgt werden?",
    bild: null,
    antworten: [
      "Es dürfen keinerlei Abfälle ins Wasser gelangen, Fäkalien und Öle sind an Land zu entsorgen.",
      "Nur Abfälle, die die Umwelt nicht gefährden, dürfen 300 m vom Ufer ins Wasser eingeleitet werden.",
      "Auf Seen dürfen keine Abfälle ins Wasser gelangen, auf Binnenschifffahrtsstraßen gibt es Sonderregelungen.",
      "Alle Schiffe müssen mit Fäkalientanks ausgerüstet sein und geeignete Behältnisse für die getrennte Aufnahme von Abfällen an Bord haben."
    ]
  },
  // Frage 216
  {
    id: "binnen_216",
    nummer: 216,
    frage: "Was ist beim Neuanstrich des Unterwasserschiffs und bei der Entfernung des alten Anstrichs zu beachten?",
    bild: null,
    antworten: [
      "Der Arbeitsbereich ist großzügig abzudecken und der anfallende Abfall ist als Sondermüll zu behandeln und entsprechend zu entsorgen.",
      "Es dürfen nur Unterwasseranstriche verwendet werden, deren Umweltverträglichkeit an der EU-Kennzeichnung erkenntlich ist.",
      "Es sind bei Arbeiten mit Unterwasseranstrichen die Richtlinien der Schiffsuntersuchungskommission zu beachten.",
      "Unterwasserarbeiten dürfen nur von zertifizierten Fachbetrieben, nach den Bestimmungen des Umweltschutzes ausgeführt werden."
    ]
  },
  // Frage 217
  {
    id: "binnen_217",
    nummer: 217,
    frage: "Was ist bei Sturmwarnung vom Schiffsführer eines Sportbootes unter Segel auf einem größeren Gewässer zu veranlassen?",
    bild: null,
    antworten: [
      "Rettungsweste anlegen. Segel bergen, versuchen einen Hafen oder eine geschützte Bucht anzulaufen.",
      "Rettungsweste anlegen. Alle Segel setzen, versuchen, einen Hafen oder eine geschützte Bucht anzulaufen.",
      "Rettungsweste bereit halten. Segel bergen, versuchen, einen Hafen oder eine geschützte Bucht anzulaufen.",
      "Rettungsweste anlegen. Segel setzen, versuchen die Gewässermitte anzulaufen."
    ]
  },
  // Frage 218
  {
    id: "binnen_218",
    nummer: 218,
    frage: "Welche Fahrrinnenseite hat ein Talfahrer an seiner Backbordseite?",
    bild: null,
    antworten: [
      "Die linke Fahrrinnenseite, gekennzeichnet durch grüne Spitztonnen oder Schwimmstangen.",
      "Die rechte Fahrrinnenseite, gekennzeichnet durch rote Stumpftonnen oder Schwimmstangen.",
      "Die linke Fahrrinnenseite, gekennzeichnet durch rote Stumpftonnen oder Schwimmstangen.",
      "Die rechte Fahrrinnenseite, gekennzeichnet durch grüne Spitztonnen oder Schwimmstangen."
    ]
  },
  // Frage 219
  {
    id: "binnen_219",
    nummer: 219,
    frage: "Mit welcher Wetterentwicklung ist bei schnellem und stetig fallendem Luftdruck zu rechnen?",
    bild: null,
    antworten: [
      "Schlechtes Wetter, Starkwind oder Sturm.",
      "Besseres Wetter, steigende Temperatur.",
      "Schlechtes Wetter ist nicht zu erwarten.",
      "Besseres Wetter, Sonne."
    ]
  },
  // Frage 220
  {
    id: "binnen_220",
    nummer: 220,
    frage: "Welches Wetter ist zu erwarten, wenn der Luftdruck langsam aber stetig steigt?",
    bild: null,
    antworten: [
      "Besseres Wetter, Sonne.",
      "Besseres Wetter, steigende Temperatur.",
      "Schlechtes Wetter ist nicht zu erwarten.",
      "Schlechtes Wetter, Starkwind oder Sturm."
    ]
  },
  // Frage 221
  {
    id: "binnen_221",
    nummer: 221,
    frage: "Wo darf auf Binnenschifffahrtsstraßen Wasserski gelaufen werden?",
    bild: null,
    antworten: [
      "Nur in durch Tafelzeichen freigegebenen Bereichen.",
      "Außerhalb des Fahrwassers.",
      "Außerhalb der Fahrrinne.",
      "Überall, ohne die Schifffahrt zu gefährden."
    ]
  },
  // Frage 222
  {
    id: "binnen_222",
    nummer: 222,
    frage: "Zu welcher Tageszeit und bei welchen Sichtweiten darf auf den erlaubten Gewässerabschnitten Wasserski gelaufen werden?",
    bild: null,
    antworten: [
      "Sonnenaufgang bis -untergang, Sicht 1.000 m und mehr.",
      "Sonnenaufgang bis -untergang, Sicht 1.500 m und mehr.",
      "Sonnenaufgang bis -untergang, Sicht 500 m und mehr.",
      "Sonnenaufgang bis -untergang, Sicht 300 m und mehr."
    ]
  },
  // Frage 223
  {
    id: "binnen_223",
    nummer: 223,
    frage: "Wie muss sich der Wasserskiläufer bei der Vorbeifahrt an Fahrzeugen, Schwimmkörpern oder Badenden verhalten?",
    bild: null,
    antworten: [
      "Er muss im Kielwasser des Zugbootes bleiben.",
      "Er darf bis zu 10 m beiderseits außerhalb des Kielwassers fahren.",
      "Er darf bis zu 5 m beiderseits außerhalb des Kielwassers fahren.",
      "Er muss uferseitig des Kielwassers fahren."
    ]
  },
  // Frage 224
  {
    id: "binnen_224",
    nummer: 224,
    frage: "Unter welchen Voraussetzungen darf außerhalb der ausgewiesenen Strecken/Wasserflächen Wassermotorrad gefahren werden?",
    bild: null,
    antworten: [
      "Bei Touren- und Wanderfahrten mit klarem Geradeauskurs.",
      "Bei großen Sonderveranstaltungen außerhalb der Fahrrinne.",
      "Wenn kein anderer Verkehrsteilnehmer behindert wird.",
      "Ab Hochwassermarke I nur im Fahrwasser."
    ]
  },
  // Frage 225
  {
    id: "binnen_225",
    nummer: 225,
    frage: "Wie hat sich der Führer eines Wassermotorrades außerhalb der ausgewiesenen Strecken/Wasserflächen zu verhalten?",
    bild: null,
    antworten: [
      "Klaren Geradeauskurs fahren.",
      "Im Abstand von 10 m zum Ufer fahren.",
      "Im Abstand von 10 m außerhalb des Tonnenstrichs fahren.",
      "Am Rande der Fahrrinne fahren."
    ]
  },
  // Frage 226
  {
    id: "binnen_226",
    nummer: 226,
    frage: "Auf welchen Gewässern ist die Fahrerlaubnis für Sportboote unter Segeln erforderlich?",
    bild: null,
    antworten: [
      "Auf bestimmten Wasserstraßen in Berlin und Brandenburg.",
      "Auf allen Landesgewässern.",
      "Auf den Binnenschifffahrtsstraßen und allen Landesgewässern.",
      "Auf allen deutschen Wasserstraßen."
    ]
  },
  // Frage 227
  {
    id: "binnen_227",
    nummer: 227,
    frage: "Weshalb muss sich der Schiffsführer vor dem Befahren fremder Gewässer über die dort geltenden Vorschriften informieren?",
    bild: null,
    antworten: [
      "Um die jeweils geltenden Vorschriften einhalten zu können.",
      "Da diese auf Landesgewässern grundsätzlich inhaltlich abweichen.",
      "Da diese auf Bundesgewässern grundsätzlich inhaltlich abweichen.",
      "Weil die jeweils geltenden Vorschriften wichtige Informationen über die Brückendurchfahrtshöhen enthalten."
    ]
  },
  // Frage 228
  {
    id: "binnen_228",
    nummer: 228,
    frage: "Welcher Befähigungsnachweis berechtigt zum Führen eines Sportbootes bis zu einer Länge von 25 m auf dem Rhein?",
    bild: null,
    antworten: [
      "Das Sportpatent.",
      "Der Sportbootführerschein mit dem Geltungsbereich Binnenschifffahrtsstraßen.",
      "Das Sportschifferzeugnis.",
      "Der Sportbootführerschein mit dem Geltungsbereich Seeschifffahrtsstraßen."
    ]
  },
  // Frage 229
  {
    id: "binnen_229",
    nummer: 229,
    frage: "Welcher Befähigungsnachweis berechtigt zum Führen eines Sportbootes mit einer Länge von 20 m bis 25 m auf den Binnenschifffahrtsstraßen außerhalb des Rheins?",
    bild: null,
    antworten: [
      "Das Sportschifferzeugnis oder das Sportpatent.",
      "Der Sportbootführerschein mit dem Geltungsbereich Binnenschifffahrtsstraßen.",
      "Der Sportbootführerschein mit dem Geltungsbereich Seeschifffahrtsstraßen.",
      "Der Sportbootführerschein mit dem Geltungsbereich Binnenschifffahrtsstraßen zum Führen von Sportbooten mit Antriebsmaschine oder das Sportpatent."
    ]
  },
  // Frage 230
  {
    id: "binnen_230",
    nummer: 230,
    frage: "Wo sind umfangreiche Hinweise auf die Binnenschifffahrtsstraßen und deren Grenzen zu finden?",
    bild: null,
    antworten: [
      "Im Teil II der Binnenschifffahrtsstraßen-Ordnung.",
      "Im Teil I der Binnenschifffahrtsstraßen-Ordnung.",
      "In der Binnenschiffsuntersuchungsordnung.",
      "In der Kleinfahrzeugkennzeichenverordnung."
    ]
  },
  // Frage 231
  {
    id: "binnen_231",
    nummer: 231,
    frage: "Was ist bei der Ausübung des Wassersports auf Gewässern außerhalb der Bundeswasserstraßen (z. B. Landeswasserstraßen, kommunale und private Gewässer) zu beachten?",
    bild: null,
    antworten: [
      "Es ist gegebenenfalls die Genehmigung des Eigentümers einzuholen sowie die jeweilige Befahrensordnung zu beachten.",
      "Es ist immer die Genehmigung des Eigentümers einzuholen sowie die jeweilige Befahrensordnung zu beachten.",
      "Es ist immer die Genehmigung des Wasserstraßen- und Schifffahrtsamtes einzuholen sowie die jeweilige Befahrensordnung zu beachten.",
      "Es ist gegebenenfalls die Genehmigung des Eigentümers einzuholen sowie die Binnenschifffahrtsstraßen-Ordnung zu beachten."
    ]
  },
  // Frage 232
  {
    id: "binnen_232",
    nummer: 232,
    frage: "Welche Kennzeichnungsarten für Sportboote gibt es?",
    bild: null,
    antworten: [
      "Amtliche Kennzeichen und amtlich anerkannte Kennzeichen.",
      "Nur amtliche Kennzeichen.",
      "Nur amtlich anerkannte Kennzeichen.",
      "Kennzeichen gemäß Konformitätserklärung (CE-Zeichen)."
    ]
  },
  // Frage 233
  {
    id: "binnen_233",
    nummer: 233,
    frage: "Welche Stelle ist für die Zuteilung eines amtlichen Kennzeichens für Sportboote zuständig?",
    bild: null,
    antworten: [
      "Jedes Wasserstraßen- und Schifffahrtsamt.",
      "Der Deutsche Motoryachtverband.",
      "Der Deutsche Segler-Verband.",
      "Der Allgemeine Deutsche Automobilclub."
    ]
  },
  // Frage 234
  {
    id: "binnen_234",
    nummer: 234,
    frage: "Woraus bestehen die amtlich anerkannten Kennzeichen?",
    bild: null,
    antworten: [
      "Nummer des Internationalen Bootsscheins, gefolgt vom Kennbuchstaben für die ausstellende Organisation.",
      "Nummer des Binnenschiffsregisters, gefolgt vom Kennbuchstaben für die ausstellende Organisation.",
      "Nummer des Seeschiffsregisters, gefolgt vom Kennbuchstaben für die ausstellende Organisation.",
      "Die europäische Schiffsnummer, gefolgt vom Kennbuchstaben für die ausstellende Organisation."
    ]
  },
  // Frage 235
  {
    id: "binnen_235",
    nummer: 235,
    frage: "Welche Stellen sind für die Zuteilung eines amtlich anerkannten Kennzeichens für Sportboote zuständig?",
    bild: null,
    antworten: [
      "Der Deutsche Motoryachtverband, der Deutsche Segler-Verband, der Allgemeine Deutsche Automobilclub.",
      "Die Wasserstraßen- und Schifffahrtsämter.",
      "Die Wasserschutzpolizei.",
      "Amtsgerichte, bei denen ein Schiffsregister geführt wird."
    ]
  },
  // Frage 236
  {
    id: "binnen_236",
    nummer: 236,
    frage: "Wann muss ein Wassersportfahrzeug in das Binnenschiffsregister eingetragen werden?",
    bild: null,
    antworten: [
      "Ab 10 cbm Wasserverdrängung.",
      "Ab 15 cbm Wasserverdrängung.",
      "Ab 10 m Schiffslänge.",
      "Ab 15 m Schiffslänge."
    ]
  },
  // Frage 237
  {
    id: "binnen_237",
    nummer: 237,
    frage: "Wie hat sich ein Schiffsführer bei Hochwasser zu verhalten?",
    bild: null,
    antworten: [
      "Er muss die Geschwindigkeit anpassen und soweit wie möglich in der Fahrwassermitte bleiben, gegebenenfalls besondere Geschwindigkeitsbegrenzungen und Fahrtbeschränkungen beachten.",
      "Er muss die Geschwindigkeit anpassen und soweit wie möglich in seiner Fahrtrichtung rechts fahren, gegebenenfalls besondere Geschwindigkeitsbegrenzungen und Fahrtbeschränkungen beachten.",
      "Er muss die Geschwindigkeit anpassen und soweit wie möglich in seiner Fahrtrichtung links fahren, gegebenenfalls besondere Geschwindigkeitsbegrenzungen und Fahrtbeschränkungen beachten.",
      "Er muss die Geschwindigkeit anpassen und soweit wie möglich in der Fahrwassermitte bleiben, besondere Geschwindigkeitsbegrenzungen und Fahrtbeschränkungen sind nicht zu beachten."
    ]
  },
  // Frage 238
  {
    id: "binnen_238",
    nummer: 238,
    frage: "Wie hat sich ein Schiffsführer bei Erreichen der Hochwassermarke II zu verhalten?",
    bild: null,
    antworten: [
      "Er hat die Fahrt unverzüglich einzustellen.",
      "Er hat die Geschwindigkeit anzupassen.",
      "Er hat das Fahrverbot für Fahrzeuge ohne Sprechfunk zu beachten.",
      "Er hat das Verbot der Schifffahrt bei Nacht zu beachten."
    ]
  },
  // Frage 239
  {
    id: "binnen_239",
    nummer: 239,
    frage: "Ein Fahrzeug fährt zu Tal. Voraus liegt eine rote Tonne. Auf welcher Fahrrinnenseite befindet sich diese Tonne und an welcher Schiffsseite muss diese Tonne passiert werden?",
    bild: null,
    antworten: [
      "Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden.",
      "Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden.",
      "Sie befindet sich auf der linken Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden.",
      "Sie befindet sich auf der linken Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden."
    ]
  },
  // Frage 240
  {
    id: "binnen_240",
    nummer: 240,
    frage: "Ein Fahrzeug fährt zu Berg. Voraus liegt eine rote Tonne. Auf welcher Fahrrinnenseite befindet sich diese Tonne und an welcher Schiffsseite muss diese Tonne passiert werden?",
    bild: null,
    antworten: [
      "Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden.",
      "Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden.",
      "Sie befindet sich auf der linken Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden.",
      "Sie befindet sich auf der linken Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden."
    ]
  },
  // Frage 241
  {
    id: "binnen_241",
    nummer: 241,
    frage: "Ein Fahrzeug fährt zu Berg. Voraus liegt eine grüne Tonne. Auf welcher Fahrrinnenseite befindet sich diese Tonne und an welcher Schiffsseite muss diese Tonne passiert werden?",
    bild: null,
    antworten: [
      "Sie befindet sich auf der linken Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden.",
      "Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Steuerbordseite des Schiffes passiert werden.",
      "Sie befindet sich auf der linken Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden.",
      "Sie befindet sich auf der rechten Fahrrinnenseite und muss an der Backbordseite des Schiffes passiert werden."
    ]
  },
  // Frage 242
  {
    id: "binnen_242",
    nummer: 242,
    frage: "Welche Funktion haben gelbe Tonnen mit einem Radarreflektor vor Brückenpfeilern?",
    bild: null,
    antworten: [
      "Kenntlichmachung der Brückenpfeiler auf dem Radarschirm.",
      "Kenntlichmachung der Höhe der Brückenpfeiler.",
      "Kenntlichmachung einer gesperrten Brückendurchfahrt.",
      "Kenntlichmachung einer Untiefe im Brückenbereich."
    ]
  },
  // Frage 243 - Tafeln an Brücke
  {
    id: "binnen_243",
    nummer: 243,
    frage: "Welche Bedeutung haben diese Tafeln an der nachstehenden gekennzeichneten Brücke?",
    bild: 243,
    antworten: [
      "Empfohlene Durchfahrt mit Gegenverkehr und seitlicher Begrenzung der erlaubten Brückendurchfahrt.",
      "Empfohlene Durchfahrt ohne Gegenverkehr und seitlicher Begrenzung der erlaubten Brückendurchfahrt.",
      "Vorgeschriebene Durchfahrt mit Gegenverkehr und seitlicher Begrenzung der erlaubten Brückendurchfahrt.",
      "Empfohlene Durchfahrt mit Gegenverkehr ohne seitliche Begrenzung der erlaubten Brückendurchfahrt."
    ]
  },
  // Frage 244 - Tafelzeichen an Brückendurchfahrt
  {
    id: "binnen_244",
    nummer: 244,
    frage: "Was bedeutet dieses Tafelzeichen an einer Brückendurchfahrt?",
    bild: 244,
    antworten: [
      "Verbot der Durchfahrt und Sperrung der Schifffahrt.",
      "Gesperrte Durchfahrt, jedoch für Kleinfahrzeuge mit Antriebsmaschine befahrbar.",
      "Gesperrte Durchfahrt, jedoch für Kleinfahrzeuge ohne Antriebsmaschine befahrbar.",
      "Schutzbedürftige Anlage."
    ]
  },
  // Frage 245
  {
    id: "binnen_245",
    nummer: 245,
    frage: "Warum ist es bei der Schleusendurchfahrt verboten, Autoreifen als Fender zu benutzen?",
    bild: null,
    antworten: [
      "Autoreifen sind nicht schwimmfähig und können in den Schleusen zu erheblichen Störungen führen.",
      "Autoreifen erzeugen eine zu hohe Reibung.",
      "Autoreifen erzeugen schwarze Farbspuren am Boot und an der Schleusenmauer.",
      "Autoreifen sind schwimmfähig und können in der Schleuse zu erheblichen Störungen führen."
    ]
  },
  // Frage 246
  {
    id: "binnen_246",
    nummer: 246,
    frage: "Welche Lichter führt ein Schubverband?",
    bild: null,
    antworten: [
      "Drei weiße Topplichter in einem Dreieck angebracht, die Seitenlichter und drei weiße Hecklichter waagerecht nebeneinander.",
      "Drei weiße Topplichter senkrecht untereinander angebracht, die Seitenlichter und drei weiße Hecklichter waagerecht nebeneinander.",
      "Drei weiße Topplichter in einem Dreieck angebracht, die Seitenlichter und zwei weiße Hecklichter waagerecht nebeneinander.",
      "Drei weiße Topplichter waagerecht nebeneinander, die Seitenlichter und drei weiße Hecklichter waagerecht nebeneinander."
    ]
  },
  // Frage 247
  {
    id: "binnen_247",
    nummer: 247,
    frage: "Welches Fahrzeug führt am Bug einen roten Wimpel?",
    bild: null,
    antworten: [
      "Ein Fahrzeug mit Vorrang beim Schleusen.",
      "Ein Fahrzeug mit Vorrang beim Be- und Entladen.",
      "Ein Fahrzeug, das explosive Stoffe geladen hat.",
      "Ein Fahrzeug, das brennbare Stoffe geladen hat."
    ]
  },
  // Frage 248
  {
    id: "binnen_248",
    nummer: 248,
    frage: "Wann gilt ein Sportboot auf den Binnenschifffahrtsstraßen als Kleinfahrzeug?",
    bild: null,
    antworten: [
      "Wenn das Fahrzeug eine Länge von weniger als 20 m hat.",
      "Wenn das Fahrzeug eine Länge von 20 m hat.",
      "Wenn das Fahrzeug eine Länge von 25 m hat.",
      "Wenn das Fahrzeug eine Länge von mehr als 20 m hat."
    ]
  },
  // Frage 249
  {
    id: "binnen_249",
    nummer: 249,
    frage: "Welche Bedeutung hat die Bezeichnung eines Fahrzeuges mit einer rot-weißen Flagge und was ist zu beachten?",
    bild: null,
    antworten: [
      "Schutzbedürftiges Fahrzeug, Geschwindigkeit vermindern und Sog und Wellenschlag vermeiden.",
      "Schutzbedürftiges Fahrzeug, Geschwindigkeit beibehalten und Sog und Wellenschlag vermeiden.",
      "Schutzbedürftiges Fahrzeug, Geschwindigkeit vermindern.",
      "Schutzbedürftiges Fahrzeug, Sog und Wellenschlag vermeiden."
    ]
  },
  // Frage 250
  {
    id: "binnen_250",
    nummer: 250,
    frage: "Welches optische Zeichen kann am Tage anstelle von vier kurzen Tönen gegeben werden?",
    bild: null,
    antworten: [
      "Eine rote Flagge im unteren Halbkreis schwenken.",
      "Eine rote Flagge im oberen Halbkreis schwenken.",
      "Eine rote Flagge im Kreis schwenken.",
      "Eine rote Flagge zeigen."
    ]
  },
  // Frage 251
  {
    id: "binnen_251",
    nummer: 251,
    frage: "Welches optische Zeichen kann in der Nacht oder bei verminderter Sicht anstelle von vier kurzen Tönen gegeben werden?",
    bild: null,
    antworten: [
      "Ein rotes Licht im unteren Halbkreis schwenken.",
      "Ein rotes Licht im oberen Halbkreis schwenken.",
      "Ein rotes Licht im Kreis schwenken.",
      "Ein rotes Licht zeigen."
    ]
  },
  // Frage 252
  {
    id: "binnen_252",
    nummer: 252,
    frage: "Welcher Befähigungsnachweis ist zur Teilnahme am Binnenschifffahrtsfunk erforderlich?",
    bild: null,
    antworten: [
      "Das UKW-Sprechfunkzeugnis für den Binnenschifffahrtsfunk.",
      "Das CB-Sprechfunkzeugnis für den Binnenschifffahrtsfunk.",
      "Das Seefunkzeugnis für den Binnenschifffahrtsfunk.",
      "Das SRC-Sprechfunkzeugnis für den Binnenschifffahrtsfunk."
    ]
  },
  // Frage 253
  {
    id: "binnen_253",
    nummer: 253,
    frage: "Was bedeutet Radarfahrt?",
    bild: null,
    antworten: [
      "Eine Fahrt bei unsichtigem Wetter mit Radar.",
      "Eine Fahrt bei Nacht mit Radar.",
      "Eine Fahrt bei geringer Sicht mit Radar.",
      "Eine Fahrt bei Tag mit Radar."
    ]
  }
];

// Export für Browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fragenBinnen;
}
export const germanFaq: Record<string, { question: string; answer: string }> = {
  hardcore: {
    question: 'Soll ich mit Hardcore anfangen?',
    answer:
      'Für den Einstieg empfehlen wir den normalen Modus. Wenn du stirbst, behältst du dein Inventar, deine angelegte Ausrüstung und dein Gold. Hardcore steht dir von Anfang an offen. Wähle diesen Modus, wenn du diese Dinge nach jeder Niederlage neu erspielen möchtest. Sichere deinen Spielstand, bevor du einen bestehenden Helden auf Hardcore umstellst.',
  },
  'dungeon-paths': {
    question: 'Was bedeuten die vier Pfade im Dungeon?',
    answer:
      '„Ausgewogen“ bietet die übliche Mischung. Auf dem Pfad „Beute“ findest du mehr Schatztruhen und triffst auf weniger Gegner. „Zuflucht“ bringt mehr Schreine und noch weniger Gegner. Bei „Abstieg“ steigt die Chance, schnell die Tür zum nächsten Raum zu finden.',
  },
  'save-data': {
    question: 'Wie sichere ich meinen Spielstand oder übertrage ihn auf ein anderes Gerät?',
    answer:
      'Öffne im Menü „Daten exportieren/importieren“. Kopiere den vollständigen Export und bewahre ihn außerhalb des Spiels auf. Auf dem Zielgerät fügst du ihn im selben Menü in das Importfeld ein und bestätigst. Der Import ersetzt dort die Spielerdaten und setzt den laufenden Dungeon zurück. Spielstände lassen sich so nicht zusammenführen. Automatische Sicherungen bleiben auf dem ursprünglichen Gerät.',
  },
  'auto-mode': {
    question: 'Wie verhindere ich, dass der Auto-Modus meine Ausrüstung verkauft?',
    answer:
      'Öffne im Menü den „Auto-Modus“. Sobald er freigeschaltet ist, aktiviere „Auto-Button zeigen“. Stelle „Auto-Verkauf unter“ auf „Aus“ und „Auto-Verkauf unter Level“ auf 0. Beide Filter können unabhängig voneinander einen Verkauf auslösen. Übernimm die Einstellungen und starte oder stoppe den Modus mit dem Auto-Button. „Automatischer Angriff“ ist eine eigene Kampfeinstellung.',
  },
  gold: {
    question: 'Wofür lohnt es sich, Gold auszugeben?',
    answer:
      'Mit Gold bezahlst du Segen, Heilung an Schreinen, Händlerangebote und Aktionen in der Schmiede. Beim Stufenaufstieg sind die ersten beiden neuen Würfe gratis, weitere kosten Gold. Der Schmied auf Etage 13 verkauft auf Fluchstufe 1 bis 5 einen Schmiede-Token für 10.000 Gold, auf Fluchstufe 6 bis 15 zwei für 20.000 Gold. Lass dir eine Reserve für den aktuellen Lauf. Im normalen Modus behältst du ungenutztes Gold nach dem Tod.',
  },
  'item-tiers': {
    question: 'Was sagt das Tier eines Gegenstands aus?',
    answer:
      'Bei regulärer Beute richtet sich das Tier nach der Fluchstufe. Ein höheres Tier ermöglicht bessere Werte. Wie gut ein Gegenstand für dich ist, hängt auch von seinem Level, seiner Seltenheit, den ausgewürfelten Werten und der Veredelung ab. Vergleiche die tatsächlichen Boni, bevor du deine Ausrüstung austauschst.',
  },
  refining: {
    question: 'Wie veredle ich einen Gegenstand?',
    answer:
      'Öffne die Schmiede über das Amboss-Symbol, wähle „Veredeln“ und dann den Gegenstand. Prüfe die Vorschau und bestätige mit „Ausrüstung veredeln“. Du brauchst Gold und Veredelungssteine. Ist die Schmiede noch gesperrt, kostet die Aktion zusätzlich einen Schmiede-Token. Unter Level 100 ist bei +10 Schluss. Ausrüstung auf Level 100 kannst du mit Wächterkernen weiter veredeln.',
  },
  curse: {
    question: 'Was ist die höchste Fluchstufe und wie schalte ich sie frei?',
    answer:
      'Die höchste Fluchstufe ist 15. Mit jeder Stufe werden die Gegner stärker und reguläre Ausrüstungsfunde erreichen ein höheres Tier. Spiele jeweils auf deiner höchsten freigeschalteten Stufe. Für die Stufen 2 bis 10 musst du Etage 10 erreichen, für die Stufen 11 bis 15 den Dungeon-Monarchen besiegen. Ein Sieg über den Monarchen auf Fluchstufe 14 schaltet Stufe 15 frei. Für einen leichteren Lauf kannst du eine niedrigere Stufe wählen.',
  },
  luck: {
    question: 'Was bewirkt Glück?',
    answer:
      'Glück erhöht die Chance auf Ausrüstung, Begleiter und Wächterkerne. Bei einem gewöhnlichen Gegner ohne Zusatzmodifikator steigt die Chance auf Ausrüstung mit 50 Glück von 33,3 % auf 50 %. Der Charakterwert ist auf 140 begrenzt. Beim Finden von Begleitern erreicht der Bonus schon bei 48 Glück sein Maximum. Seltenheit, Tier und die Fundchance für Veredelungssteine bleiben gleich.',
  },
  companions: {
    question: 'Wie schalte ich Begleiter dauerhaft frei?',
    answer:
      'Der Wolfswelpe ist von Anfang an verfügbar. Weitere Begleiter kannst du finden, wenn du nach einem Kampf die Belohnung einsammelst. Welche auftauchen können, hängt vom Level des besiegten Gegners ab. Jeder Fund gibt Punkte in Höhe deiner Fluchstufe, höchstens 10. Für den Feenhelfer brauchst du 100 Punkte, für den Mini-Drachen 250, für die Schattenkatze 500 und für das Phönixküken 1.000. Freigeschaltete Begleiter stehen bei jedem neuen Lauf in ihrer Grundform auf Level 1 bereit.',
  },
  'loot-rarity': {
    question: 'Wie oft finde ich legendäre Ausrüstung oder ein Erbstück?',
    answer:
      'Bei regulär erzeugter Ausrüstung sind 2 % der Gegenstände legendär und 1,2 % Erbstücke. Pro besiegtem gewöhnlichem Gegner ohne Zusatzmodifikator ergibt das bei 0 Glück eine Chance von 0,4 % auf ein Erbstück. Glück erhöht die Chance, dass überhaupt Ausrüstung fällt. Die Fluchstufe bestimmt ihr Tier. Die regulären Seltenheitschancen bleiben gleich. Der Dungeon-Monarch hinterlässt bei einem Sieg garantiert ein Erbstück.',
  },
  'gear-rolls': {
    question: 'Warum haben zwei Gegenstände mit gleichem Tier und gleicher Seltenheit so unterschiedliche Werte?',
    answer:
      'Jeder Ausrüstungstyp hat eine Auswahl möglicher Attribute. Das Spiel lost die Attribute und ihre Werte aus, wobei mehrere Würfe dasselbe Attribut verstärken können. Tier und Level beeinflussen die Stärke, die Seltenheit bestimmt die Grundanzahl der Würfe. Auf Tier 11 bis 15 steigen die Mindestwerte der Würfe und die Obergrenzen für Prozentwerte.',
  },
  'stat-pools': {
    question: 'Warum kann mein Hammer Glück haben, aber keinen Lebensraub?',
    answer:
      'Welche Werte auftreten können, hängt vom Ausrüstungstyp ab. Hämmer können Glück erhalten, Lebensraub ist bei ihnen ausgeschlossen. Bei Schwertern, Äxten, Sensen, Dolchen und Flegeln ist es umgekehrt. Für gefundene Ausrüstung und neue Würfe in der Schmiede gilt dieselbe Auswahl.',
  },
  'guardian-cores': {
    question: 'Wo finde ich Wächterkerne und wie hoch ist die Chance?',
    answer:
      'Wächterkerne können ab Etage 20 bei Etagenwächtern fallen, ein Kern pro erfolgreichem Wurf. Bei 0 Glück steigt die Chance auf Fluchstufe 1 bis 9 von 2 % auf Etage 20 auf 5 % auf Etage 45. Auf Fluchstufe 15 steigt sie im selben Bereich von 20 % auf 50 %. Tiefere Etagen erhöhen sie nicht weiter. Glück kann die Chance mit bis zu 1,10 multiplizieren. Das ergibt maximal 55 %.',
  },
  'level-up-stats': {
    question: 'Erhöhen Boni beim Stufenaufstieg auch meine Ausrüstungswerte?',
    answer:
      'Boni auf Gesundheit, Angriff und Verteidigung wirken auf die Grundwerte aus Klasse und Punkteverteilung. Die Werte deiner Ausrüstung kommen anschließend hinzu. Bei kritischer Trefferchance und Lebensraub erhältst du stattdessen Prozentpunkte. Vergleiche die angezeigte Verbesserung und beachte die Obergrenze des jeweiligen Werts.',
  },
  'damage-defense': {
    question: 'Warum verursacht ein Treffer weniger Schaden, als mein Angriffswert anzeigt?',
    answer:
      'Für einen normalen Treffer beginnt die Berechnung mit Angriff × Angriff / (Angriff + Verteidigung des Ziels). Hat das Ziel so viel Verteidigung wie du Angriff, beträgt der Ausgangsschaden die Hälfte deines Angriffswerts. Danach kommen Zufallsschwankungen, kritische Treffer und weitere Boni hinzu. Weicht der Gegner aus, verursachst du keinen Schaden und erhältst keine Heilung durch Lebensraub.',
  },
  'paladin-healing': {
    question: 'Wie viel heilt „Göttlicher Segen“ beim Paladin?',
    answer:
      '„Göttlicher Segen“ heilt 80 % deiner maximalen Gesundheit, auf ganze Punkte gerundet und höchstens so viel, wie dir gerade fehlt. Im Kampf beträgt die Abklingzeit 10 Sekunden. Wenn im Auto-Modus die automatische Spezialfähigkeit aktiviert ist, wartet der Paladin, bis seine Gesundheit auf 40 % oder weniger fällt und sowohl Angriff als auch Fähigkeit bereit sind.',
  },
  'rogue-special-ability': {
    question: 'Wie verstärkt Blutung den „Blutschub“ des Schurken?',
    answer:
      '„Blutschub“ trifft einmal mit dem 1,1-Fachen deines Angriffswerts. Jeder Blutungsstapel auf dem Gegner erhöht diesen Ausgangsschaden um 5 %. Mit „Offene Wunden“ sind bis zu 13 Stapel möglich. Damit erreicht der Treffer vor Verteidigung und weiteren Modifikatoren das 1,815-Fache deines Angriffs.',
  },
  'monster-modifiers': {
    question: 'Was unterscheidet „Defensiv“ von „Gepanzert“ bei Monstern?',
    answer:
      '„Defensiv“ ist ein Gegnertyp mit höherer Grundgesundheit und Verteidigung. „Gepanzert“ ist ein zusätzlicher Modifikator. Er multipliziert die Verteidigung mit 1,6 und das Angriffstempo mit 0,85. Ein Monster kann beides gleichzeitig sein. Andere Modifikatoren ermöglichen etwa Regeneration, Lebensraub oder das Zurückwerfen von Schaden.',
  },
}

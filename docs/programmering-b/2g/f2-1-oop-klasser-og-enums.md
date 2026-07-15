# F2.1 – OOP: Klasser, indkapsling, enums

!!! info "Om forløbet"

    - **Timer:** 7 (E-semester)
    - **Studie+-forløb:** SP5 — Entity System: Objektorienteret programmering
    - **Bog:** *The C# Player's Guide*, Level 16-23

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - kapsle data i en klasse, vælge passende synlighed og skrive konstruktører der sætter felter ved oprettelse
    - tegne et klassediagram for dit eget program og læse et givet diagram
    - deklarere og bruge en enum til at repræsentere et fast sæt navngivne tilstande
    - tegne et use case-diagram og skrive en use case-beskrivelse for et system
    - oversætte en idé til en eksekverbar kravspecifikation

## Om forløbet

*Skriv motivation: dette er 1.g/2.g-overgangens første forløb — eleven refaktorerer sit eget 1.g-projekt (fx Meyer) til at bruge klasser i stedet for løse variabler/metoder. Fremhæv, at enums her lægges som et syntaktisk fundament, der først bruges til state machines i 3.g (SO6 + F3.3) — en bevidst tre-trins-progression.*

## Lektionsplan

*Skriv time-for-time-plan for forløbets 7 timer: use case/kravspec-workshop → klassedesign/klassediagram → indkapsling og properties → enums → refactoring af 1.g-projekt.*

## Teori

*Skriv teoriafsnit med C#-kodeeksempler for:*

- *klasser, felter, konstruktører*
- *indkapsling: `public`/`private`, properties (`get`/`set`), auto-properties*
- *klassediagrammer (UML, simpel notation): klasser, felter, metoder, synlighed*
- *enums: deklaration, navngivne værdier, brug i `switch`*
- *use case-diagrammer og -beskrivelser (aktører, use cases, pre-/post-betingelser)*
- *kravspecifikation: user stories, must-have/nice-to-have*

## Øvelser

Refaktorér et konsolprojekt til at bruge klasser i stedet for løse variabler og metoder.

### :green_circle: Refactor givet konsol-spil

*Udleveret, simpelt konsol-spil refaktoreres til klasser efter en fast opskrift.*

### :yellow_circle: Refactor Meyer

*Eleven refaktorerer sit eget Meyer-projekt fra F1.9 til at bruge klasser.*

### :red_circle: Helt nyt OOP-projekt

*Eleven designer og bygger et helt nyt, klassebaseret projekt fra bunden (eget domæne).*

## Leverance

OOP-refactor (udvalgt domæne, egne klasser) + klassediagram + devlog. Enums indgår som fundament for de state machines, der først implementeres i 3.g.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 16-23** dækker enums, tuples, klasser, indkapsling, properties, static, null-tjek og OOP-design i denne rækkefølge.
    - **Level 24 ("The Catacombs of the Class")** er bogens første store OOP-projekt (Tic-Tac-Toe) — kan bruges som alternativ eller supplement til Meyer-refactoren.

    Vi henviser til bogen for uddybning — gå selv på opdagelse i den frem for kun at læse vores egne noter her.

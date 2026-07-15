# F1.6 – Metoder

!!! info "Om forløbet"

    - **Timer:** 5 (F-semester)
    - **Studie+-forløb:** SP3 — Toolbox: Genbrugelige byggeklodser
    - **Bog:** *The C# Player's Guide*, Level 13. Appendiks C (Debugging)

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - opdele et program i metoder og undgå duplikeret kode
    - vælge parametre fornuftigt og kalde dine egne metoder
    - parametrisere en specifik løsning, så den bliver generelt anvendelig

## Om forløbet

*Skriv motivation ("hvorfor metoder?") med udgangspunkt i Stepwise Improvement og Use-Modify-Create: eleven får udleveret kode med duplikering og skal selv opdage, hvorfor metoder løser problemet (Computational Thinking: dekomposition, mønstergenkendelse).*

## Lektionsplan

*Skriv time-for-time-plan for forløbets 5 timer, herunder en dedikeret refactoring-økt hvor eleverne omskriver udleveret duplikeret kode til at bruge metoder.*

## Teori

*Skriv teoriafsnit med C#-kodeeksempler for:*

- *metode-deklaration, kald, `void` vs. returtype*
- *parametre og argumenter*
- *returværdier med `return`*
- *scope*
- *overloading (intro)*
- *value vs. reference (kort)*
- *parametrisering: fra konkret løsning til generel, genbrugelig metode (3.2)*
- *systematisk fejlfinding i metoder — brug af breakpoints/watch til at følge parametre og returværdier (4.2, App. C)*

## Øvelser

*Skriv en refactoring-øvelse: udleveret duplikeret kode → eleven udtrækker metoder. Foldbare løsningsforslag (`??? success`) tilføjes, når afsnittet skrives fuldt ud.*

### :green_circle: Øvelse 1 — Udtræk 2 metoder

*Udleveret program med duplikeret kode — udtræk de to mest oplagte metoder.*

### :yellow_circle: Øvelse 2 — Udtræk 4 metoder

*Samme udgangspunkt, men udtræk fire metoder — kræver at man selv opdager mere subtile mønstre.*

### :red_circle: Øvelse 3 — Eget bibliotek af terninge-metoder

*Byg et lille bibliotek af genbrugelige terninge-metoder (fx `RulEnTerning()`, `RulFlereTerninger(int antal)`) som stilladsering til F1.8/F1.9.*

## Leverance

Refactoring-aflevering med før/efter-devlog, der viser den duplikerede kode og den refaktorerede udgave med metoder.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 13** dækker metoder, parametre, returværdier og en introduktion til rekursion.
    - **Appendiks C ("Debugging Your Code")** er fortsat en god reference til systematisk fejlfinding.

    Vi henviser til bogen for uddybning — gå selv på opdagelse i den frem for kun at læse vores egne noter her.

# F2.11 – Filhåndtering: persistens af spildata

!!! info "Om forløbet"

    - **Timer:** 4 (F-semester)
    - **Studie+-forløb:** SP8 — Ship It: Unity-MVP med sortering som mekanik
    - **Bog:** *The C# Player's Guide*, Level 35, 39

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - persistere data til fil og indlæse det igen
    - håndtere exceptions ved fil-fejl

## Om forløbet

*Skriv motivation: udvider MVP-prototypen fra F2.10 med rigtig persistens (highscores eller spilstate overlever, når spillet lukkes og genstartes).*

## Lektionsplan

*Skriv time-for-time-plan for forløbets 4 timer: læse/skrive fil → CSV-format → exception-håndtering ved fil-fejl.*

## Teori

*Skriv teoriafsnit med C#-kodeeksempler for:*

- *`File.ReadAllLines`, `File.WriteAllText`*
- *`StreamReader`/`StreamWriter` (intro)*
- *CSV-parsing*
- *`try`/`catch`/`finally`, `throw` — håndtering af fil-relaterede exceptions*

## Øvelser

Udvid MVP-prototypen fra F2.10 med save/load af highscores eller spilstate.

### :green_circle: Læs/skriv én fil

*Gem og indlæs én simpel værdi (fx en enkelt highscore) til/fra en fil.*

### :yellow_circle: CSV-format

*Gem flere værdier struktureret i CSV-format (fx en liste af highscores med navn og score).*

### :red_circle: Exception-håndtering

*Tilføj robust fejlhåndtering, så programmet ikke crasher, hvis filen mangler eller er korrupt.*

## Leverance

MVP-prototypen fra F2.10 udvidet med save/load af highscores eller spilstate.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 35** ("Error Handling and Exceptions") dækker `try`/`catch`/`finally`.
    - **Level 39** ("Files") dækker `File`-klassen og filsystemet.

    Vi henviser til bogen for uddybning — gå selv på opdagelse i den frem for kun at læse vores egne noter her.

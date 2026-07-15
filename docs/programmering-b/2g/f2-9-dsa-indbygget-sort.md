# F2.9 – DSA: Indbygget Sort og IComparable

!!! info "Om forløbet"

    - **Timer:** 3 (F-semester)
    - **Studie+-forløb:** SP7 — Under motorhjelmen: Datastrukturer og algoritmer
    - **Bog:** *The C# Player's Guide*, Level 30, 32. Kilde: [w3schools.com/dsa](https://www.w3schools.com/dsa/)

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - bruge den indbyggede sortering på primitive typer og på egne klasser via `IComparable`
    - vælge mellem array, `List<T>` og `Dictionary<K,V>` ud fra problemets behov

## Om forløbet

*Skriv motivation: DSA-blokkens afsluttende forløb — efter selv at have implementeret BubbleSort og SelectionSort, lærer eleven at bruge sprogets EGEN indbyggede sortering, og hvorfor man som regel bør det. Direkte forberedelse til F2.10, hvor sortering skal indgå som gameplay-mekanik.*

## Lektionsplan

*Skriv time-for-time-plan for forløbets 3 timer: `List<T>.Sort()`/`Array.Sort()` på primitive typer → `IComparable` på egne klasser → diskussion af hvornår man selv skal skrive en sorteringsalgoritme.*

## Teori

*Skriv teoriafsnit med C#-kodeeksempler for:*

- *`List<T>.Sort()`, `Array.Sort()` på primitive typer*
- *sortering af egne klasser via `IComparable`*
- *kort om `List<T>` vs. array vs. `Dictionary<K,V>` — hvornår vælges hvad*

## Øvelser

Sortér en `List<HighScore>` efter forskellige kriterier.

### :green_circle: Sortér heltal

*Brug `List<int>.Sort()` på en liste af heltal.*

### :yellow_circle: Sortér egen klasse

*Implementér `IComparable` på en simpel `HighScore`-klasse og sortér en liste af den.*

### :red_circle: Sortér efter flere felter

*Udvid sorteringen, så den kan sortere efter flere felter (fx først score, dernæst navn alfabetisk ved uafgjort).*

## Leverance

Sortering af en `List<HighScore>` efter selvvalgte kriterier, med en kort forklaring af valget mellem indbygget sort og selvskreven algoritme.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 30** ("Generics") og **Level 32** ("Some Useful Types") dækker `List<T>`, `Dictionary<K,V>` og indbyggede typer.
    - [w3schools.com/dsa](https://www.w3schools.com/dsa/) har mere om sorteringsalgoritmer generelt.

    Vi henviser til bogen og w3schools.com/dsa for uddybning — gå selv på opdagelse der frem for kun at læse vores egne noter her.

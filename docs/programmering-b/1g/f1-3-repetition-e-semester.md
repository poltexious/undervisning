# F1.3 – Repetition og afslutning af E-semester

!!! info "Om forløbet"

    - **Timer:** 3 (E-semester)
    - **Studie+-forløb:** SP1 — Boot Camp: Din første kode
    - **Bog:** Repetition af *The C# Player's Guide*, Level 1-8

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - kombinere variabler, datatyper og konsol-I/O i et lille, sammenhængende program
    - forklare, hvad et boolsk udtryk er, og bruge det til at sammenligne to svar
    - sige noget om, hvad du selv synes gik godt og skabte problemer i E-semesteret

## Om forløbet

E-semesteret slutter her. I stedet for at lære nyt stof samler vi op på F1.1 og F1.2 ved at bygge noget sjovt — en lille konsol-quiz — og runder af med en kort forventningsafstemning til F-semesteret, hvor tempoet skruet lidt op.

## Lektionsplan

**Time 1 — Repetition**

- Genopfrisk: variabler, datatyper, `Console.ReadLine`/`Console.WriteLine`, strenginterpolation
- Kort quiz i plenum: forudsig output af små kodestykker

**Time 2 — Design af din egen quiz**

- Idéudvikling: hvilket emne skal din quiz handle om?
- Hvordan sammenligner man et svar med facit uden `if`/`else` (som vi først lærer i F1.4)?

**Time 3 — Byg quizzen og forventningsafstemning**

- Byg quizzen færdig
- Kort snak om, hvad der venter i F-semesteret (betingelser, løkker, metoder, Meyer-projektet)

## Teori

### Sammenligning uden if/else

Du kender allerede sammenligningsoperatorer som `==` fra F1.2 — de giver en `bool` (`true` eller `false`) tilbage. Det betyder, at du faktisk kan bygge en simpel quiz allerede nu, selvom du først lærer `if`/`else` i næste forløb:

```csharp
Console.Write("Hvad er hovedstaden i Danmark? ");
string svar = Console.ReadLine();

bool erRigtigt = svar == "København";
Console.WriteLine($"Rigtigt svar? {erRigtigt}");
```

Programmet udskriver `True` eller `False` — ikke helt så pænt som "Rigtigt!"/"Forkert!", men det er nøjagtigt det, du får løst i F1.4, når vi lærer `if`/`else`. Tænk over det, mens du bygger din quiz: hvad ville du hellere have stået der?

!!! tip "Motivation til F1.4"

    Denne begrænsning er bevidst: næste forløb handler om, hvordan du omsætter et boolsk udtryk som `svar == "København"` til at styre, hvad programmet faktisk *gør* — fx udskrive en anden tekst, springe noget over, eller tælle point op.

## Øvelser

Byg en lille konsol-quiz med mindst tre spørgsmål inden for et emne, du selv vælger (fx film, spil, historie eller sport).

### :green_circle: Øvelse 1 — Udvælg fra eksempel-quizzer

Tag udgangspunkt i en af de udleverede eksempel-quizzer, og tilpas spørgsmål og svar til dit eget emne.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("=== Minifilm-quiz ===");

    Console.Write("Hvem instruerede filmen 'Jaws'? ");
    string svar1 = Console.ReadLine();
    Console.WriteLine($"Rigtigt svar? {svar1 == "Steven Spielberg"}");

    Console.Write("Hvilket år udkom den første Star Wars-film? ");
    string svar2 = Console.ReadLine();
    Console.WriteLine($"Rigtigt svar? {svar2 == "1977"}");
    ```

### :yellow_circle: Øvelse 2 — Lav 5 spørgsmål

Design din egen quiz fra bunden med 5 spørgsmål om et emne, du selv vælger.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("=== Spil-quiz ===");

    Console.Write("Hvilket firma laver Unity-spilmotoren? ");
    string svar1 = Console.ReadLine();
    Console.WriteLine($"Rigtigt svar? {svar1 == "Unity Technologies"}");

    Console.Write("Hvad hedder programmeringssproget, vi bruger i faget? ");
    string svar2 = Console.ReadLine();
    Console.WriteLine($"Rigtigt svar? {svar2 == "C#"}");

    // ... yderligere 3 spørgsmål efter samme mønster
    ```

### :red_circle: Øvelse 3 — Score-system

Byg videre på Øvelse 2 med et score-system, der tæller, hvor mange svar der var rigtige. Det kræver et lille kig frem mod `if`, som vi først introducerer for alvor i F1.4 — men prøv, om du selv kan finde ud af det.

??? success "Løsningsforslag"

    ```csharp
    int score = 0;

    Console.Write("Hvilket firma laver Unity-spilmotoren? ");
    string svar1 = Console.ReadLine();
    if (svar1 == "Unity Technologies")
    {
        score = score + 1;
    }

    Console.Write("Hvad hedder programmeringssproget, vi bruger i faget? ");
    string svar2 = Console.ReadLine();
    if (svar2 == "C#")
    {
        score = score + 1;
    }

    Console.WriteLine($"Du fik {score} ud af 2 point.");
    ```

## Leverance

Konsol-quiz med mindst tre spørgsmål, som eleverne kan vise venner. Ingen video devlog i dette forløb — i stedet en kort mundtlig forventningsafstemning i plenum om F-semesteret.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - Genlæs ***The C# Player's Guide*, Level 1-8**, hvis du er i tvivl om noget fra F1.1 eller F1.2 — det er nøjagtigt det stof, dette forløb repeterer.

    Vi henviser til bogen for uddybning — gå selv på opdagelse i den frem for kun at læse vores egne noter her.

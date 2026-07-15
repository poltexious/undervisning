# F1.1 – Velkommen til C#: installation og første program

!!! info "Om forløbet"

    - **Timer:** 2 (E-semester)
    - **Studie+-forløb:** SP1 — Boot Camp: Din første kode
    - **Bog:** *The C# Player's Guide*, Level 1-4 (kernelæsning), Level 50 (valgfri baggrundslæsning om .NET)

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - oprette, kompilere og køre et C#-konsolprogram
    - læse simple fejlmeddelelser og foretage grundlæggende fejlretning
    - forklare, hvad en video devlog er, og hvorfor vi bruger dem i faget

## Lektionsplan

**Time 1 — Installation og opsætning**

- Installation af .NET SDK
- Installation af Visual Studio Code + C#-udvidelse
- Test af opsætning: `dotnet --version`

**Time 2 — Det første program og video devlogs**

- `dotnet new console` — hvad opretter kommandoen?
- `Console.WriteLine` og programmets opbygning
- Køre programmet med `dotnet run`
- Video devlogs: hvad er det, og hvorfor bruger vi dem i stedet for en skriftlig logbog?
- Øvelser + kort skærmoptagelse som første devlog

## Teori

### Værktøjerne: .NET SDK og VS Code

For at skrive og køre C#-programmer skal du bruge to ting:

- **.NET SDK** — selve værktøjet, der oversætter (*compiler*) og kører din kode.
- **Visual Studio Code** — teksteditoren, du skriver koden i, med en udvidelse (*extension*) der giver dig hjælp til C#.

Når begge dele er installeret, kan du oprette et nyt konsolprojekt fra en terminal:

```csharp
dotnet new console -o MitFoersteProgram
```

Dette opretter en mappe med to vigtige filer: `Program.cs` (selve koden) og `MitFoersteProgram.csproj` (projektfilen, som fortæller .NET hvordan projektet skal bygges).

### Dit første program

Åbn `Program.cs`. Som standard indeholder den allerede en enkelt linje:

```csharp
Console.WriteLine("Hello, World!");
```

`Console.WriteLine` skriver tekst til konsollen efterfulgt af et linjeskift. Prøv at ændre teksten og køre programmet igen:

```csharp
Console.WriteLine("Hej, verden!");
Console.WriteLine("Mit navn er Programmering B.");
```

For at køre programmet, brug terminalen inde i projektmappen:

```csharp
dotnet run
```

!!! tip "Hvorfor ser koden sådan ud?"

    Du undrer dig måske over, at der ikke står noget om en `class` eller en `Main`-metode, som du måske har set i eksempler andre steder. Det er fordi C# tillader denne forenklede skrivemåde (*top-level statements*), som er perfekt til at komme hurtigt i gang. Senere i faget, når vi arbejder med klasser (F2.1), lærer vi den fulde, klassebaserede opbygning — den samme, du kommer til at bruge i Unity.

### Når noget går galt

Fejlmeddelelser (*compiler errors*) kan virke uoverskuelige, når du er ny. De er faktisk din bedste ven: compileren fortæller dig nøjagtigt, hvad der er galt, og på hvilken linje. Prøv bevidst at lave en fejl for at se, hvordan det ser ud:

```csharp
Console.WriteLine("Denne linje mangler en anførselstegn)
```

Læg mærke til, at fejlen typisk peger på linjenummeret og beskriver problemet. At kunne læse en fejlmeddelelse roligt — i stedet for at gå i panik — er en færdighed, du bygger op hele året. Vi arbejder videre med systematisk fejlfinding i F1.5.

### Video devlogs: sådan dokumenterer vi arbejdet

I dette fag dokumenterer du dit arbejde med korte **video devlogs** i stedet for en skriftlig logbog: en skærmoptagelse af koden, hvor du undervejs fortæller, hvad du laver, og hvorfor. En devlog behøver ikke være poleret — det vigtige er, at den viser din proces, ikke kun det færdige resultat.

En god devlog fortæller kort:

- **Hvad byggede jeg?** — hvad var opgaven
- **Hvordan greb jeg det an?** — dine vigtigste valg undervejs
- **Hvad gik godt / var svært?** — også de tekniske problemer tæller

!!! tip "Hvorfor video frem for tekst?"

    Video devlogs træner dig i at tale om din egen kode — en færdighed, du bruger direkte til den mundtlige årsprøve i 2.g og den mundtlige eksamen i 3.g. De giver desuden et langt mere autentisk billede af din arbejdsproces end en skriftlig logbog.

## Øvelser

### :green_circle: Øvelse 1 — Følg tutorialen

Genskab "Hello, World!"-programmet fra teoriafsnittet, linje for linje. Kør det, og prøv derefter at ændre teksten til noget, du selv har valgt.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("Hello, World!");
    Console.WriteLine("Dette er mit første C#-program.");
    ```

### :yellow_circle: Øvelse 2 — Flere beregninger

Udvid programmet, så det også udskriver resultatet af et par simple beregninger (fx en adition og en multiplikation), skrevet direkte i koden.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("Hello, World!");
    Console.WriteLine(5 + 3);
    Console.WriteLine(4 * 6);
    Console.WriteLine("5 + 3 = " + (5 + 3));
    ```

### :red_circle: Øvelse 3 — Lav en lommeregner

Skriv en simpel "lommeregner", der udskriver resultatet af flere forskellige regnestykker (plus, minus, gange, division) skrevet direkte i koden — fx som en række `Console.WriteLine`-linjer, én pr. regnestykke.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("Lommeregner");
    Console.WriteLine("4 + 7 = " + (4 + 7));
    Console.WriteLine("10 - 3 = " + (10 - 3));
    Console.WriteLine("6 * 8 = " + (6 * 8));
    Console.WriteLine("20 / 4 = " + (20 / 4));
    ```

## Leverance

- **Hello World-program**, eventuelt udvidet med de ekstra beregninger fra øvelserne.
- **Kort skærmoptagelse** (1-2 min) som din første video devlog — den behøver ikke være perfekt, den skal bare vise, at du kan sætte en optagelse op og tale om din kode.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 1-4** dækker det samme stof som dette forløb — installation, første program og grundlæggende syntaks. God opsummering, hvis du vil læse det samme igen med andre ord.
    - **Level 50 (".NET")** er valgfri baggrundslæsning om, hvad .NET egentlig er, og dets historie.
    - [Microsoft Learn: "Get started with C#"](https://learn.microsoft.com/dotnet/csharp/tour-of-csharp/) er et godt supplement, hvis du vil se stoffet præsenteret et tredje sted.

    Vi henviser til bogen og disse kilder for uddybning — gå selv på opdagelse i dem frem for kun at læse vores egne noter her.

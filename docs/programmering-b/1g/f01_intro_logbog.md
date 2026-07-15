# F01 – Intro, værktøjer & logbog

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - installere og bruge de værktøjer, faget kræver (.NET SDK og VS Code)
    - oprette, køre og aflevere et konsolprogram i C#
    - forklare, hvad et logbogsindlæg er, og skrive dit første

## Om forløbet

**Varighed:** 3 timer.

Inden vi kan lære at programmere, skal vi have styr på værktøjerne og på, hvordan vi arbejder. I dette forløb sætter vi udviklingsmiljøet op, skriver det første program, og introducerer **logbogen** — den måde du løbende dokumenterer dit arbejde på gennem hele faget.

Logbogen er ikke bureaukrati for bureaukratiets skyld: den er din egen hukommelse. Når du om tre uger skal huske, hvorfor du valgte at løse en opgave på en bestemt måde, er det logbogen, der kan svare dig. Den bruges også som dokumentation ved evaluering og årsprøve.

## Lektionsplan

**Time 1 — Installation og opsætning**

- Installation af .NET SDK
- Installation af Visual Studio Code + C#-udvidelse
- Test af opsætning: `dotnet --version`

**Time 2 — Det første konsolprogram**

- `dotnet new console` — hvad opretter kommandoen?
- `Console.WriteLine` og programmets opbygning
- Køre programmet med `dotnet run`
- Eksperiment: skriv et Hello World i en `.txt`-fil og omdøb til `.cs` — hvorfor er et IDE nødvendigt?
- Fejlmeddelelser er ikke farlige — sådan læser du dem

**Time 3 — Arbejdsgang og logbog**

- Filstruktur i et C#-projekt (`Program.cs`, `.csproj`)
- God arbejdsgang: skriv lidt, kør ofte, gem løbende
- Logbogen som dokumentationsform: hvad skal med, og hvorfor
- Skriv dagens første logbogsindlæg

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

    Du undrer dig måske over, at der ikke står noget om en `class` eller en `Main`-metode, som du måske har set i eksempler andre steder. Det er fordi C# tillader denne forenklede skrivemåde (*top-level statements*), som er perfekt til at komme hurtigt i gang. Senere i faget (i F05) lærer vi den fulde, klassebaserede opbygning — den samme, som du kommer til at bruge i Unity.

### Prøv det uden hjælpemidler: hvorfor har vi brug for et IDE?

Du har nu oplevet, hvor let VS Code gør det at skrive og køre et program. Men hvad er en C#-fil *egentlig*? Prøv dette lille eksperiment for at finde ud af det:

1. Åbn en helt almindelig teksteditor — **ikke** VS Code (fx Notesblok på Windows eller TextEdit på Mac).
2. Skriv følgende, præcis som det står:

    ```csharp
    using System;

    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
    ```

3. Gem filen som `Program.txt`.
4. Omdøb bagefter filen til `Program.cs` (skift altså kun filendelsen — ikke indholdet).

Ligger `Program.cs` i en projektmappe med en tilhørende `.csproj`-fil, kan `dotnet run` faktisk køre den. Compileren er nemlig ligeglad med, hvilket program du skrev filen i — en C#-fil er i virkeligheden bare en tekstfil med det rigtige indhold og den rigtige filendelse.

!!! tip "Hvad betyder al den ekstra kode?"

    `using System;`, `public class Program` og `static void Main(string[] args)` er den fulde, klassebaserede opbygning af et C#-program — den samme, du senere skal bruge i Unity. Du behøver ikke forstå hvert ord endnu; det lærer du i F05. Læg for nu bare mærke til, hvor meget mere der skal skrives, end da VS Code (og `dotnet new console`) satte det op for dig med én linje kode.

Men læg også mærke til noget andet, mens du skriver i den almindelige teksteditor: ingen farver på nøgleordene, ingen forslag når du skriver `Console.`, og ingen advarsel hvis du glemmer en tuborgklamme `}` eller et semikolon `;`. Prøv bevidst at glemme et semikolon, og se om du selv kan opdage det uden hjælp.

Det er præcis den hjælp, et IDE som VS Code giver dig: syntaksfarvning, autocomplete og øjeblikkelig fejlmarkering. Jo større dine programmer bliver i løbet af året, jo mere afhænger du af den hjælp.

!!! tip "Ekstra udfordring: en online compiler"

    Hvis du er klar til en ekstra udfordring, eller bare gerne vil kode hurtigt uden at sætte et helt projekt op, kan du prøve en online compiler, fx [Programiz' C#-compiler](https://www.programiz.com/csharp-programming/online-compiler/). Den hjælper langt mindre end VS Code — ingen eller kun meget begrænset autocomplete — hvilket tvinger dig til selv at huske parenteser, semikolon og den korrekte struktur.

    Det gør den god til:

    - hurtigt at afprøve en lille kodesnak, uden at oprette et helt projekt
    - situationer hvor dit eget IDE af en eller anden grund ikke vil virke
    - senere i faget, især i DSA-forløbet (F04) om arrays og algoritmer, hvor det er en god øvelse selv at holde ekstra styr på detaljerne

    **Vigtigt:** en online compiler gemmer typisk ikke din kode, hvis du opdaterer (refresher) siden. Husk at kopiere koden over i en fil, når du er færdig, så den ikke går tabt.

### Fejlmeddelelser er en del af faget

Når du er ny, virker fejlmeddelelser (*compiler errors*) uoverskuelige. De er faktisk din bedste ven: compileren fortæller dig præcis, hvad der er galt, og på hvilken linje. Prøv bevidst at lave en fejl for at se, hvordan det ser ud:

```csharp
Console.WriteLine("Denne linje mangler en anførselstegn)
```

Læg mærke til, at fejlen typisk peger på linjenummeret og beskriver problemet. At kunne læse en fejlmeddelelse roligt — i stedet for at gå i panik — er en færdighed, du bygger op hele året.

### Logbogen

Logbogen er et kort, løbende notat du fører for hver undervisningsgang. Et logbogsindlæg behøver ikke være langt, men bør indeholde:

- **Dato og forløb** (fx "F01, time 2")
- **Hvad lavede jeg?** — kort beskrivelse af, hvad du arbejdede med
- **Hvad gik godt / skabte problemer?** — også de tekniske problemer tæller
- **Hvad lærte jeg?** — én eller to sætninger

!!! tip "Logbog og spiludvikling"

    I Unity-projekter senere i forløbet (2.g og 3.g) fungerer logbogen samtidig som en del af din projektdokumentation — professionelle spiludviklere fører ofte tilsvarende noter (*devlogs*) undervejs i et projekt.

## Øvelser

### :green_circle: Øvelse 1 — Hils på verden

Skriv et konsolprogram, der udskriver dit navn, din klasse og en kort sætning om, hvorfor du har valgt Programmering B.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("Navn: Jakob");
    Console.WriteLine("Klasse: 1.g");
    Console.WriteLine("Jeg valgte Programmering B, fordi jeg gerne vil lære at lave spil.");
    ```

### :yellow_circle: Øvelse 2 — Karakterark

Udskriv en simpel præsentation af en fiktiv spilkarakter med mindst fire linjer: navn, klasse (fx kriger/troldmand), livspoint og et angreb.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("=== Karakterark ===");
    Console.WriteLine("Navn: Aria");
    Console.WriteLine("Klasse: Kriger");
    Console.WriteLine("Livspoint: 100");
    Console.WriteLine("Angreb: Sværdhug");
    ```

### :red_circle: Øvelse 3 — Byg videre selv

Udvid dit program fra Øvelse 2, så det udskriver mindst to karakterer efter hinanden, adskilt af en tydelig streg (fx `"--------"`). Eksperimentér også bevidst med at lave en fejl (fx glem en anførselstegn) for at øve dig i at læse fejlmeddelelsen — ret den derefter.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("=== Karakterark ===");
    Console.WriteLine("Navn: Aria");
    Console.WriteLine("Klasse: Kriger");
    Console.WriteLine("Livspoint: 100");
    Console.WriteLine("Angreb: Sværdhug");

    Console.WriteLine("--------");

    Console.WriteLine("=== Karakterark ===");
    Console.WriteLine("Navn: Rendal");
    Console.WriteLine("Klasse: Troldmand");
    Console.WriteLine("Livspoint: 70");
    Console.WriteLine("Angreb: Ildkugle");
    ```

## Aflevering

Du afleverer to ting inden forløbets afslutning:

1. **Programmet** fra Øvelse 3 (eller en videreudvikling af det) som `.cs`-fil eller link til dit projekt.
2. **Logbogsindlæg** for hver af de tre timer i forløbet, skrevet efter skabelonen i afsnittet ovenfor.

!!! warning "Husk"

    Uden logbog kan forløbet ikke godkendes — selv hvis programmet virker. Logbogen er en del af din dokumentation for resten af året.

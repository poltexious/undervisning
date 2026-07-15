# F1.2 – Variabler og typer

!!! info "Om forløbet"

    - **Timer:** 3 (E-semester)
    - **Studie+-forløb:** SP1 — Boot Camp: Din første kode
    - **Bog:** *The C# Player's Guide*, Level 5-8

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - vælge en passende datatype til et givent problem
    - skrive korrekte udtryk og forudsige resultatet af en beregning
    - håndtere brugerinput sikkert med `TryParse` og formatere output læseligt

## Lektionsplan

**Time 1 — Variabler og datatyper**

- `int`, `double`, `bool`, `char`, `string`
- Deklaration, initialisering og tildeling
- Navngivning af variabler

**Time 2 — Udtryk og typekonvertering**

- Aritmetiske operatorer (`+ - * / %`)
- Sammenligning og logiske udtryk
- Typekonvertering mellem tal og tekst

**Time 3 — Konsol-input og -output**

- `Console.ReadLine()` og `int.Parse`
- Sikker indlæsning med `TryParse`
- Strenginterpolation med `$"..."`
- Øvelser + video devlog

## Teori

### Variabler og datatyper

En variabel er en navngivet plads i hukommelsen, der gemmer en værdi. I C# skal du angive variablens **type**, når du erklærer den:

```csharp
int liv = 100;
double skadeMultiplikator = 1.5;
bool erILive = true;
char karakterKlasse = 'K';
string navn = "Aria";
```

- `int` — heltal (uden decimaler)
- `double` — decimaltal
- `bool` — sand/falsk (`true`/`false`)
- `char` — ét enkelt tegn (bemærk enkelte anførselstegn: `'K'`, ikke `"K"`)
- `string` — tekst (flere tegn, dobbelte anførselstegn: `"Aria"`)

!!! tip "Spilperspektiv"

    Stort set alle tal, du ser i et spils UI — livspoint, mana, guld, XP — er variabler af typen `int` eller `double` bag kulisserne.

### Udtryk og typekonvertering

Et **udtryk** er noget, der regnes ud til en værdi — fx `5 + 3` eller `liv > 0`. C# har de samme regnearter, du kender fra matematik, samt `%` (modulo), som giver resten ved heltalsdivision:

```csharp
int a = 7;
int b = 2;

Console.WriteLine(a / b);  // 3 (heltalsdivision — decimalerne forsvinder)
Console.WriteLine(a % b);  // 1 (resten efter 7 / 2)
```

!!! warning "Heltalsdivision"

    Deler du to `int`-værdier, får du et heltal tilbage — decimalerne bliver kasseret, ikke afrundet. `7 / 2` giver `3`, ikke `3.5`. Skal du bevare decimalerne, skal mindst én af værdierne være en `double`.

Sammenligning giver altid en `bool`: `5 > 3` evaluerer til `true`. Logiske operatorer kombinerer flere betingelser: `&&` (og), `||` (eller), `!` (ikke) — vi bruger dem for alvor i F1.4.

Nogle gange skal en værdi konverteres fra én type til en anden:

```csharp
int helTal = 5;
double decimalTal = helTal;        // int → double sker automatisk
int tilbageIgen = (int)decimalTal; // double → int kræver eksplicit cast
```

### Konsol-input og -output

Du læser tekst fra brugeren med `Console.ReadLine()`. Den returnerer altid en `string`, så tal skal konverteres eksplicit:

```csharp
Console.Write("Indtast din alder: ");
string input = Console.ReadLine();
int alder = int.Parse(input);

Console.WriteLine($"Om 10 år er du {alder + 10} år.");
```

`$"..."` er **strenginterpolation** — sæt en variabel direkte ind i en tekststreng med `{}`.

Problemet med `int.Parse` er, at programmet crasher, hvis brugeren indtaster noget, der ikke er et tal. `TryParse` løser det: den *prøver* at konvertere og fortæller dig, om det lykkedes, i stedet for at smide en fejl:

```csharp
Console.Write("Indtast din alder: ");
string input = Console.ReadLine();

bool lykkedes = int.TryParse(input, out int alder);

if (lykkedes)
{
    Console.WriteLine($"Om 10 år er du {alder + 10} år.");
}
else
{
    Console.WriteLine("Det var ikke et gyldigt tal.");
}
```

`out int alder` betyder, at metoden selv opretter variablen `alder` og fylder den ud, hvis konverteringen lykkes.

## Øvelser

Byg videre på samme opgave: skriv et program, der spørger brugeren om navn og fødselsår, og som derefter regner et svar ud og udskriver det (fx alder, eller hvilket år brugeren fylder 100).

### :green_circle: Øvelse 1 — Udleveret skelet

Udfyld huller i et udleveret programskelet, så det spørger om navn og fødselsår og udskriver et beregnet svar.

??? success "Løsningsforslag"

    ```csharp
    Console.Write("Hvad hedder du? ");
    string navn = Console.ReadLine();

    Console.Write("Hvilket år er du født? ");
    int foedselsaar = int.Parse(Console.ReadLine());

    int alder = 2026 - foedselsaar;
    Console.WriteLine($"Hej {navn}, du er ca. {alder} år.");
    ```

### :yellow_circle: Øvelse 2 — Eget design

Byg dit eget program fra bunden med samme grundidé, men vælg selv, hvilke oplysninger du spørger om, og hvad du beregner (fx år til pension, eller hvor mange dage brugeren har levet).

??? success "Løsningsforslag"

    ```csharp
    Console.Write("Hvad hedder du? ");
    string navn = Console.ReadLine();

    Console.Write("Hvilket år er du født? ");
    int foedselsaar = int.Parse(Console.ReadLine());

    int alder = 2026 - foedselsaar;
    int aarTilPension = 67 - alder;

    Console.WriteLine($"Hej {navn}! Du har ca. {aarTilPension} år til pension.");
    ```

### :red_circle: Øvelse 3 — Med inputvalidering

Udvid dit program fra Øvelse 2, så det bruger `TryParse` til at validere fødselsåret. Hvis brugeren indtaster noget, der ikke er et tal, skal programmet give en pæn fejlbesked i stedet for at crashe.

??? success "Løsningsforslag"

    ```csharp
    Console.Write("Hvad hedder du? ");
    string navn = Console.ReadLine();

    Console.Write("Hvilket år er du født? ");
    string input = Console.ReadLine();

    if (int.TryParse(input, out int foedselsaar))
    {
        int alder = 2026 - foedselsaar;
        Console.WriteLine($"Hej {navn}! Du er ca. {alder} år.");
    }
    else
    {
        Console.WriteLine("Det var ikke et gyldigt årstal.");
    }
    ```

## Leverance

Mini-program der spørger brugeren om navn/alder (eller lignende) og returnerer et beregnet svar, plus en kort video devlog (1-2 min) hvor du viser og forklarer programmet.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 5-7** dækker variabelbegrebet og C#'s typesystem i dybden.
    - **Level 8 ("Console 2.0")** uddyber `Console`-klassen — vi vender tilbage til den del af kapitlet, der handler om strings, i F1.7.
    - [Microsoft Learn: "C# data types"](https://learn.microsoft.com/dotnet/csharp/fundamentals/types/) er et godt opslagsværk for datatyper.

    Vi henviser til bogen og disse kilder for uddybning — gå selv på opdagelse i dem frem for kun at læse vores egne noter her.

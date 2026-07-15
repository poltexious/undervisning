# F02 – Basics & kontrolstrukturer

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - erklære og bruge variabler af de grundlæggende datatyper (`int`, `double`, `bool`, `string`)
    - læse input fra brugeren og skrive formateret output
    - styre et programs forløb med `if`/`else` og `switch`
    - gentage kode med `while`, `do-while` og `for`
    - kombinere det ovenstående i et lille, sammenhængende program

## Om forløbet

**Varighed:** 7 timer.

Dette er faget grundmur: variabler og kontrolstrukturer er de byggesten, alt andet i faget bygger videre på — metoder (F03), lister og algoritmer (F04) og klasser (F05) er alle sammen "mere af det samme" oven på det, du lærer her.

Vi arbejder bevidst med spilrelaterede eksempler hele vejen igennem: livspoint, skadeberegning, gæt-et-tal og en simpel kampløkke. Det er ikke tilfældigt — det er præcis den slags logik, der ligger bag selv simple spilmekanikker i Unity.

## Lektionsplan

**Time 1 — Variabler og datatyper**

- `int`, `double`, `bool`, `string`
- Deklaration, initialisering og tildeling
- Navngivning af variabler

**Time 2 — Input, output og strenginterpolation**

- `Console.ReadLine()`
- Konvertering af tekst til tal (`int.Parse`, `double.Parse`)
- Strenginterpolation med `$"..."`

**Time 3 — Beslutninger: if/else**

- Boolske udtryk og sammenligningsoperatorer
- `if`, `else if`, `else`
- Logiske operatorer: `&&`, `||`, `!`

**Time 4 — Beslutninger: switch**

- `switch`-udtryk som alternativ til lange `if/else`-kæder
- Hvornår giver `switch` mere overblik end `if/else`?

**Time 5 — Løkker: while og do-while**

- `while`-løkken: gentag, mens en betingelse er sand
- `do-while`: gentag mindst én gang
- Undgå uendelige løkker

**Time 6 — Løkker: for og kampløkken**

- `for`-løkken og dens tre dele
- Kombination af løkke og betingelse: en simpel kampløkke

**Time 7 — Bunden opgave**

- Selvstændigt arbejde med den bundne opgave
- Aflevering og logbog

## Teori

### Variabler og datatyper

En variabel er en navngivet plads i hukommelsen, der gemmer en værdi. I C# skal du angive variablens **type**, når du erklærer den:

```csharp
int liv = 100;
double skadeMultiplikator = 1.5;
bool erILive = true;
string navn = "Aria";
```

- `int` — heltal (uden decimaler)
- `double` — decimaltal
- `bool` — sand/falsk (`true`/`false`)
- `string` — tekst

!!! tip "Spilperspektiv"

    Stort set alle tal, du ser i et spils UI — livspoint, mana, guld, XP — er variabler af typen `int` eller `double` bag kulisserne.

### Input og output

Du læser tekst fra brugeren med `Console.ReadLine()`. Den returnerer altid en `string`, så tal skal konverteres eksplicit:

```csharp
Console.Write("Indtast dine livspoint: ");
string input = Console.ReadLine();
int liv = int.Parse(input);

Console.WriteLine($"Du har {liv} livspoint.");
```

`$"..."` er **strenginterpolation** — sæt en variabel direkte ind i en tekststreng med `{}`.

### if/else — beslutninger

Et program skal ofte reagere forskelligt afhængigt af en tilstand. Det gør vi med `if`/`else`:

```csharp
int liv = 20;

if (liv <= 0)
{
    Console.WriteLine("Karakteren er død.");
}
else if (liv < 30)
{
    Console.WriteLine("Advarsel: lavt liv!");
}
else
{
    Console.WriteLine("Karakteren har det fint.");
}
```

Sammenligningsoperatorer: `==`, `!=`, `<`, `>`, `<=`, `>=`. Logiske operatorer kombinerer flere betingelser: `&&` (og), `||` (eller), `!` (ikke).

### switch — flervalgsbeslutninger

Når du har mange faste muligheder at vælge imellem, kan `switch` give bedre overblik end en lang `if/else`-kæde:

```csharp
string vaabenType = "sværd";

switch (vaabenType)
{
    case "sværd":
        Console.WriteLine("Skade: 10");
        break;
    case "bue":
        Console.WriteLine("Skade: 7");
        break;
    case "stav":
        Console.WriteLine("Skade: 12");
        break;
    default:
        Console.WriteLine("Ukendt våben.");
        break;
}
```

### Løkker: while og do-while

En `while`-løkke gentager kode, så længe en betingelse er sand:

```csharp
int liv = 100;

while (liv > 0)
{
    liv -= 10;
    Console.WriteLine($"Liv tilbage: {liv}");
}
```

`do-while` minder om `while`, men tjekker betingelsen **efter** første gennemløb — koden kører altså altid mindst én gang. Det er velegnet til fx menuer, hvor brugeren skal have mulighed for at prøve mindst én gang:

```csharp
string svar;
do
{
    Console.Write("Vil du fortsætte? (ja/nej): ");
    svar = Console.ReadLine();
} while (svar != "nej");
```

!!! warning "Uendelige løkker"

    Hvis betingelsen aldrig bliver falsk, kører løkken for evigt, og programmet "hænger". Tjek altid, at noget inde i løkken faktisk kan ændre betingelsen.

### for-løkken

`for`-løkken bruges typisk, når du på forhånd ved, hvor mange gange noget skal gentages:

```csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine($"Runde {i}");
}
```

De tre dele er: **start** (`int i = 1`), **betingelse** (`i <= 5`) og **opdatering** (`i++`).

### En simpel kampløkke

Nu kombinerer vi variabler, `if`/`else` og en løkke til en meget simpel kampsimulation:

```csharp
int spillerLiv = 30;
int fjendeLiv = 30;
int runde = 1;

while (spillerLiv > 0 && fjendeLiv > 0)
{
    fjendeLiv -= 5;
    spillerLiv -= 3;

    Console.WriteLine($"Runde {runde}: Spiller={spillerLiv}, Fjende={fjendeLiv}");
    runde++;
}

if (spillerLiv <= 0)
{
    Console.WriteLine("Du tabte kampen.");
}
else
{
    Console.WriteLine("Du vandt kampen!");
}
```

Dette er stadig en meget forenklet model — men princippet (gentag, opdatér tilstand, tjek betingelse) går igen i stort set alle kampsystemer, du senere vil møde i Unity.

## Øvelser

### Øvelse 1 — Livspoint-tracker (let)

Skriv et program, der erklærer en variabel `liv` med værdien 100, trækker 25 fra, og udskriver resultatet med strenginterpolation.

??? success "Løsningsforslag"

    ```csharp
    int liv = 100;
    liv -= 25;
    Console.WriteLine($"Liv tilbage: {liv}");
    ```

### Øvelse 2 — Skadeberegning (medium)

Bed brugeren om at indtaste en skade (heltal) og karakterens nuværende liv. Beregn det resterende liv, og udskriv "Karakteren er død" hvis liv er 0 eller derunder, ellers udskriv det resterende liv.

??? success "Løsningsforslag"

    ```csharp
    Console.Write("Indtast liv: ");
    int liv = int.Parse(Console.ReadLine());

    Console.Write("Indtast skade: ");
    int skade = int.Parse(Console.ReadLine());

    int resterendeLiv = liv - skade;

    if (resterendeLiv <= 0)
    {
        Console.WriteLine("Karakteren er død.");
    }
    else
    {
        Console.WriteLine($"Liv tilbage: {resterendeLiv}");
    }
    ```

### Øvelse 3 — Gæt et tal (medium/svær)

Programmet vælger tallet 42 (fastsat i koden). Brugeren gætter i en løkke, og programmet svarer "for højt", "for lavt" eller "korrekt!", indtil brugeren gætter rigtigt.

??? success "Løsningsforslag"

    ```csharp
    int hemmeligtTal = 42;
    int gaet = -1;

    while (gaet != hemmeligtTal)
    {
        Console.Write("Gæt et tal: ");
        gaet = int.Parse(Console.ReadLine());

        if (gaet < hemmeligtTal)
        {
            Console.WriteLine("For lavt!");
        }
        else if (gaet > hemmeligtTal)
        {
            Console.WriteLine("For højt!");
        }
        else
        {
            Console.WriteLine("Korrekt!");
        }
    }
    ```

### Øvelse 4 — Simpel kampløkke (svær)

Tag udgangspunkt i eksemplet fra teoriafsnittet. Udvid det, så skaden hver runde er tilfældig mellem 1 og 10 (brug `Random`), og så programmet til sidst udskriver, hvor mange runder kampen varede.

??? success "Løsningsforslag"

    ```csharp
    Random tilfaeldig = new Random();

    int spillerLiv = 30;
    int fjendeLiv = 30;
    int runde = 1;

    while (spillerLiv > 0 && fjendeLiv > 0)
    {
        int skadeTilFjende = tilfaeldig.Next(1, 11);
        int skadeTilSpiller = tilfaeldig.Next(1, 11);

        fjendeLiv -= skadeTilFjende;
        spillerLiv -= skadeTilSpiller;

        Console.WriteLine($"Runde {runde}: Spiller={spillerLiv}, Fjende={fjendeLiv}");
        runde++;
    }

    Console.WriteLine($"Kampen varede {runde - 1} runder.");

    if (spillerLiv <= 0)
    {
        Console.WriteLine("Du tabte kampen.");
    }
    else
    {
        Console.WriteLine("Du vandt kampen!");
    }
    ```

## Bunden opgave

Skriv et konsolprogram, **Duel**, der simulerer en kamp mellem spilleren og en fjende:

1. Spilleren indtaster sit navn og sine startlivspoint.
2. Fjenden har faste startlivspoint (fx 50) sat i koden.
3. Kampen foregår i en løkke, hvor der hver runde trækkes tilfældig skade fra begge parter.
4. Brug `if`/`else` til at afgøre, om kampen er slut.
5. Brug en `switch` til at give en kort, forskellig sluttekst afhængigt af, om spilleren vandt, tabte, eller kampen endte uafgjort (begge har 0 liv samme runde).

Opgaven skal bruge **mindst**: variabler, input/output, `if`/`else`, `switch` og en løkke.

!!! tip "Unity-perspektiv"

    Denne opgave er i virkeligheden en tekstbaseret udgave af det, der i Unity ville hedde et *turn-based combat system* — logikken er den samme, kun præsentationen (grafik i stedet for tekst) er anderledes.

## Aflevering

1. Kildekoden til **Duel**-programmet.
2. Logbogsindlæg for hver af de 7 timer i forløbet.
3. En kort skriftlig refleksion (3-5 linjer) i logbogen: hvilken kontrolstruktur var sværest at forstå, og hvorfor?

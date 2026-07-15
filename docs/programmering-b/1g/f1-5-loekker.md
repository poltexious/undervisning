# F1.5 – Løkker

!!! info "Om forløbet"

    - **Timer:** 5 (F-semester)
    - **Studie+-forløb:** SP2 — Game Logic: Valg og loops
    - **Bog:** *The C# Player's Guide*, Level 11. Appendiks C (Debugging)

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - vælge en passende løkketype og omskrive mellem `while` og `for`
    - identificere og undgå uendelige løkker
    - oversætte et problem til pseudokode, før du skriver koden
    - lokalisere en fejl systematisk ved hjælp af debuggeren i stedet for at gætte

## Lektionsplan

**Time 1 — while og do-while**

- `while`-løkken: gentag, mens en betingelse er sand
- `do-while`: gentag mindst én gang
- Undgå uendelige løkker

**Time 2 — for-løkken og break/continue**

- `for`-løkken og dens tre dele
- `break` og `continue`

**Time 3 — foreach og valg af løkketype**

- Kort introduktion til `foreach` (vi arbejder videre med den i F1.7, når vi kender arrays)
- Hvornår vælger man `while` frem for `for` — og omvendt?

**Time 4 — Pseudokode og systematisk fejlfinding**

- Pseudokode: bro mellem problem og kode
- Variabel-trace: simulér en løkke på papir
- Debugging med breakpoints og watch-vinduer i VS Code

**Time 5 — Øvelser og devlog**

- Talsystem-programmer: multiplikationstabeller, FizzBuzz, primtal
- Video devlog

## Teori

### while og do-while

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

De tre dele er: **start** (`int i = 1`), **betingelse** (`i <= 5`) og **opdatering** (`i++`). En klassisk brug er en multiplikationstabel:

```csharp
int tabel = 7;
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine($"{tabel} x {i} = {tabel * i}");
}
```

### break og continue

Nogle gange vil du forlade en løkke tidligt, eller springe resten af ét gennemløb over:

- `break` — stopper løkken helt med det samme
- `continue` — springer resten af det aktuelle gennemløb over og fortsætter med næste

```csharp
for (int i = 1; i <= 100; i++)
{
    if (i % 2 == 0)
    {
        continue; // spring lige tal over
    }

    if (i > 10)
    {
        break; // stop helt, når vi når over 10
    }

    Console.WriteLine(i); // udskriver kun de ulige tal 1-9
}
```

### foreach — et kort kig frem

`foreach` gennemløber hvert element i en samling, uden at du selv skal styre en tælle-variabel:

```csharp
int[] tal = { 3, 7, 12 };

foreach (int t in tal)
{
    Console.WriteLine(t);
}
```

Vi arbejder ikke med arrays i dybden før F1.7 — tag denne som en forsmag på, hvad `foreach` bruges til.

### Hvornår vælger man hvad?

- **`for`** — du ved (cirka), hvor mange gange løkken skal køre.
- **`while`** — du gentager, indtil noget bestemt sker, men ved ikke på forhånd hvor mange gange.
- **`do-while`** — som `while`, men koden skal altid køre mindst én gang.
- **`foreach`** — du vil bare igennem hvert element i en samling, uden selv at holde styr på et indeks.

De fleste `for`-løkker kan omskrives til `while`-løkker og omvendt — det er en god øvelse at prøve.

### Pseudokode

**Pseudokode** er en høj-niveau beskrivelse af en algoritme uden sprogspecifik syntaks — en bro mellem problemet og den færdige kode. Det er nyttigt at skrive pseudokode, *før* du koder, fordi det tvinger dig til at tænke logikken igennem uden at hænge dig i C#'s regler:

```text
Gentag for hvert tal fra 1 til 100:
    Hvis tallet kan deles med både 3 og 5:
        Skriv "FizzBuzz"
    Ellers hvis tallet kan deles med 3:
        Skriv "Fizz"
    Ellers hvis tallet kan deles med 5:
        Skriv "Buzz"
    Ellers:
        Skriv tallet selv
```

### Variabel-trace: simulér løkken på papir

Når en løkke ikke gør, hvad du forventer, er et af de bedste værktøjer at **simulere den på papir**: skriv løkkens variabler op i en tabel, og opdatér dem for hånd, runde for runde.

| Runde | `i` | `i <= 3`? |
|---|---|---|
| 1 | 1 | ja |
| 2 | 2 | ja |
| 3 | 3 | ja |
| 4 | 4 | nej — løkken stopper |

Denne teknik virker, uanset hvor kompliceret løkken bliver, og er ofte hurtigere end at gætte.

### Systematisk fejlfinding

Fejlmeddelelser (*compiler errors*) er ikke farlige — de fortæller dig nøjagtigt, hvad der er galt, og på hvilken linje. Men nogle fejl er værre: programmet kører, men gør ikke det, du forventede (*logiske fejl*). Her hjælper compileren dig ikke, og du skal selv undersøge, hvad der sker undervejs.

VS Code har en indbygget **debugger**, der lader dig køre programmet ét skridt ad gangen:

- **Breakpoint** — et punkt i koden, hvor programmet stopper, så du kan kigge på tilstanden.
- **Step over / step into** — kør én linje ad gangen, eller "gå ind i" et metodekald for at se, hvad der sker derinde.
- **Watch-vindue** — hold øje med bestemte variablers værdi, mens programmet kører.

En simplere teknik, som virker overalt, er at indsætte midlertidige `Console.WriteLine`-linjer, der udskriver en variabels værdi undervejs — kaldet *print-debugging*. Begge teknikker handler om det samme: **lokalisér fejlen systematisk i stedet for at gætte**.

## Øvelser

### :green_circle: Øvelse 1 — Print 1-100

Skriv et program, der udskriver tallene fra 1 til 100 ved hjælp af en `for`-løkke.

??? success "Løsningsforslag"

    ```csharp
    for (int i = 1; i <= 100; i++)
    {
        Console.WriteLine(i);
    }
    ```

### :yellow_circle: Øvelse 2 — FizzBuzz

Skriv FizzBuzz: for hvert tal fra 1 til 100 udskrives "Fizz", hvis tallet kan deles med 3, "Buzz" hvis det kan deles med 5, "FizzBuzz" hvis det kan deles med begge, og ellers tallet selv. Tag udgangspunkt i pseudokoden fra teoriafsnittet.

??? success "Løsningsforslag"

    ```csharp
    for (int i = 1; i <= 100; i++)
    {
        if (i % 3 == 0 && i % 5 == 0)
        {
            Console.WriteLine("FizzBuzz");
        }
        else if (i % 3 == 0)
        {
            Console.WriteLine("Fizz");
        }
        else if (i % 5 == 0)
        {
            Console.WriteLine("Buzz");
        }
        else
        {
            Console.WriteLine(i);
        }
    }
    ```

### :red_circle: Øvelse 3 — Primtalsfinder med break-optimering

Skriv et program, der finder alle primtal mellem 2 og 100. Et tal er et primtal, hvis det kun kan deles med 1 og sig selv. Brug `break` til at stoppe den indre løkke, så snart du har fundet en faktor — der er ingen grund til at blive ved med at lede.

??? success "Løsningsforslag"

    ```csharp
    for (int tal = 2; tal <= 100; tal++)
    {
        bool erPrimtal = true;

        for (int faktor = 2; faktor < tal; faktor++)
        {
            if (tal % faktor == 0)
            {
                erPrimtal = false;
                break; // ingen grund til at lede videre — vi har fundet en faktor
            }
        }

        if (erPrimtal)
        {
            Console.WriteLine(tal);
        }
    }
    ```

## Leverance

Talsystem-programmer (multiplikationstabel, FizzBuzz og/eller primtalsfinder afhængig af niveau) afleveret sammen med pseudokode for mindst én af løkkerne, plus en video devlog.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 11** dækker alle løkketyperne i dybden.
    - **Appendiks C ("Debugging Your Code")** er en god reference til print-debugging, breakpoints og stepping.

    Vi henviser til bogen for uddybning — gå selv på opdagelse i den frem for kun at læse vores egne noter her.

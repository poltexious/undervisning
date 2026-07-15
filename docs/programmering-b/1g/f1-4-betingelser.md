# F1.4 – Betingelser: if/else og switch

!!! info "Om forløbet"

    - **Timer:** 4 (F-semester)
    - **Studie+-forløb:** SP2 — Game Logic: Valg og loops
    - **Bog:** *The C# Player's Guide*, Level 9-10

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - modellere et beslutningstræ som C#-kode med `if`/`else if`/`else` og `switch`
    - kombinere betingelser med `&&`, `||` og `!`
    - undgå de mest almindelige fejl (`=` i stedet for `==`, hængende `else`)
    - tegne et flowdiagram for en simpel betingelseskonstruktion

## Lektionsplan

**Time 1 — if, else if, else**

- Boolske udtryk og sammenligningsoperatorer
- `if`, `else if`, `else`

**Time 2 — Sammensatte betingelser og typiske fejl**

- Logiske operatorer: `&&`, `||`, `!`
- Typiske fejl: `=` vs. `==`, hængende `else`

**Time 3 — switch og flowdiagrammer**

- `switch` som alternativ til lange `if`/`else`-kæder
- Flowdiagrammer: symboler og hvordan man tegner et beslutningsflow

**Time 4 — Byg beslutningstræet**

- Byg et lille eventyrspil med forgreninger
- Tegn flowdiagram for spillet + video devlog

## Teori

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

Sammenligningsoperatorer: `==`, `!=`, `<`, `>`, `<=`, `>=`.

### Sammensatte betingelser

Logiske operatorer kombinerer flere betingelser til én:

- `&&` (og) — sand kun hvis **begge** sider er sande
- `||` (eller) — sand hvis **mindst én** side er sand
- `!` (ikke) — vender en boolsk værdi om

```csharp
int liv = 15;
bool harNoegle = true;

if (liv > 0 && harNoegle)
{
    Console.WriteLine("Du kan åbne døren.");
}

if (liv <= 0 || !harNoegle)
{
    Console.WriteLine("Du kan ikke komme videre.");
}
```

!!! warning "To klassiske fejl"

    **`=` i stedet for `==`.** `if (liv = 0)` er ikke en sammenligning — det er en *tildeling*, som sætter `liv` til 0 og typisk giver en compiler-fejl i C# (fordi resultatet ikke er en `bool`). Brug altid `==` til sammenligning.

    **Hængende `else`.** Et `else` hører altid til det **nærmeste** `if` over sig — ikke nødvendigvis det, du troede. Brug krøllede parenteser `{ }` konsekvent, selv om enkeltlinjer, så det aldrig er tvivl om, hvad der hører sammen.

### switch — flervalgsbeslutninger

Når du har mange faste muligheder at vælge imellem, kan `switch` give bedre overblik end en lang `if`/`else`-kæde:

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

Hver `case` skal afsluttes med `break` (ellers "falder" den videre til næste `case`). `default` fanger alle værdier, der ikke matcher en af de andre.

### Flowdiagrammer

Et flowdiagram er en tegning af, hvordan et program bevæger sig gennem sine beslutninger. Vi bruger fire symboler:

| Symbol | Betydning |
|---|---|
| Oval | Start / slut |
| Rektangel | Proces (en handling, fx en beregning) |
| Diamant | Beslutning (et boolsk udtryk — to veje ud: ja/nej) |
| Parallelogram | Input / output |

Et flowdiagram for et simpelt `if`/`else` kan skitseres sådan:

```text
   ( Start )
       |
[ Læs liv fra bruger ]
       |
   < liv > 0 ? >
    /        \
  ja          nej
   |           |
[ "Du lever" ] [ "Du er død" ]
    \          /
      ( Slut )
```

!!! tip "Ét diagram, ét fokus"

    Vi tegner bevidst **flere små diagrammer** frem for ét stort, der prøver at vise hele programmet. Et fokuseret diagram for én beslutning er lettere at tegne, læse og rette end ét kæmpe diagram. Værktøj: [diagrams.net (drawio)](https://app.diagrams.net) — gratis og kører i browseren.

## Øvelser

Byg et lille tekstbaseret eventyrspil, hvor spilleren undervejs træffer valg, der påvirker historien — et **beslutningstræ**.

### :green_circle: Øvelse 1 — Udfyld huller

Tag udgangspunkt i et udleveret skelet-eventyr med tre valg, og udfyld de manglende betingelser og tekster.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("Du står foran en mørk skov. Går du ind? (ja/nej)");
    string valg1 = Console.ReadLine();

    if (valg1 == "ja")
    {
        Console.WriteLine("Du møder en trold! Kæmper du, eller løber du? (kæmp/løb)");
        string valg2 = Console.ReadLine();

        if (valg2 == "kæmp")
        {
            Console.WriteLine("Du besejrer trolden og finder en skat!");
        }
        else
        {
            Console.WriteLine("Du løber væk og er i sikkerhed, men uden skat.");
        }
    }
    else
    {
        Console.WriteLine("Du går hjem. Eventyret slutter her.");
    }
    ```

### :yellow_circle: Øvelse 2 — Eget beslutningstræ

Byg dit eget eventyr fra bunden med mindst tre forskellige valg, der fører til forskellige udfald.

??? success "Løsningsforslag"

    ```csharp
    Console.WriteLine("Du finder en gammel kiste. Åbner du den? (ja/nej)");
    string valg1 = Console.ReadLine();

    if (valg1 == "ja")
    {
        Console.WriteLine("Kisten er fælet! Har du et skjold? (ja/nej)");
        string valg2 = Console.ReadLine();

        if (valg2 == "ja")
        {
            Console.WriteLine("Skjoldet redder dig. Du finder guld i kisten!");
        }
        else
        {
            Console.WriteLine("Du bliver ramt af fælden. Eventyret slutter her.");
        }
    }
    else
    {
        Console.WriteLine("Du lader kisten være og fortsætter din rejse.");
    }
    ```

### :red_circle: Øvelse 3 — Med flere niveauer

Udvid dit eventyr fra Øvelse 2, så det har mindst to niveauer af indlejrede valg (et valg efter et valg efter et valg), og brug mindst én sammensat betingelse (`&&` eller `||`).

??? success "Løsningsforslag"

    ```csharp
    int guld = 50;
    Console.WriteLine("Du finder en gammel kiste. Åbner du den? (ja/nej)");
    string valg1 = Console.ReadLine();

    if (valg1 == "ja")
    {
        Console.WriteLine("Kisten er fælet! Har du et skjold, eller er du hurtig? (ja/nej for hver, adskilt af mellemrum)");
        string skjold = Console.ReadLine();
        string hurtig = Console.ReadLine();

        if (skjold == "ja" || hurtig == "ja")
        {
            Console.WriteLine("Du undgår fælden og finder guld i kisten!");
            guld = guld + 100;

            if (guld > 100)
            {
                Console.WriteLine("Du er nu rig nok til at forlade skoven som helt!");
            }
        }
        else
        {
            Console.WriteLine("Du bliver ramt af fælden. Eventyret slutter her.");
        }
    }
    else
    {
        Console.WriteLine("Du lader kisten være og fortsætter din rejse.");
    }
    ```

## Leverance

Beslutningstræ-program (fx eventyrspil med mindst 3 valg) afleveret sammen med et flowdiagram over spillets forgreninger, plus en kort video devlog (1-2 min).

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 9** dækker `if`/`else`/`else if` og logiske operatorer i dybden.
    - **Level 10** dækker `switch`-statements og en introduktion til pattern matching.
    - [diagrams.net (drawio)](https://app.diagrams.net) er værktøjet, vi bruger til flowdiagrammer resten af faget.

    Vi henviser til bogen og disse kilder for uddybning — gå selv på opdagelse i dem frem for kun at læse vores egne noter her.

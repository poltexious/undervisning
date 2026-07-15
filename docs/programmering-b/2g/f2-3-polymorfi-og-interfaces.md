# F2.3 – OOP: Polymorfi, komposition og interfaces

!!! info "Om forløbet"

    - **Timer:** 6 (E-semester)
    - **Studie+-forløb:** SP5 — Entity System: Objektorienteret programmering
    - **Bog:** *The C# Player's Guide*, Level 26-28

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - forklare polymorfi som "mange former", skrive en virtuel metode og override den
    - bruge polymorfi i en løkke (fx `foreach` over en liste af baseklasse-typen)
    - modellere et has-a-forhold og forklare hvorfor komposition ofte er mere fleksibel end arv
    - definere et interface, implementere det i flere klasser og bruge interface-typen til polymorfi
    - begrunde valget mellem interface og abstract klasse

## Om forløbet

*Skriv motivation: dette forløb afslutter 2.g's OOP-fundament. Fremhæv eksplicit: interfaces hører hjemme HER, i 2.g — de er flyttet fra den gamle placering i 3.g, fordi de er eksamenskritisk OOP-stof, der hører sammen med resten af OOP-fundamentet. Cognitive load-rækkefølge: virtual → override → interface, ét nyt nøgleord ad gangen.*

## Lektionsplan

*Skriv time-for-time-plan for forløbets 6 timer: polymorfi/virtual/override → komposition (has-a) → interfaces og abstrakte klasser → udvidelse af F2.2's fjende-hierarki med polymorf adfærd og et interface.*

## Teori

*Skriv teoriafsnit med C#-kodeeksempler for:*

- *`virtual` / `override` / `sealed`*
- *liste af baseklasse-type der holder afledte objekter, `foreach` over en heterogen samling*
- *komposition (has-a): klasser med felter af andre klasser, "foretræk komposition over arv"*
- *interfaces: deklaration, implementation i flere klasser, polymorfi via interface*
- *abstrakte klasser og metoder, forskellen mellem interface og abstract*

## Øvelser

Udvid fjende-hierarkiet fra F2.2 med en polymorf `Attack()`-metode og et interface (fx `IDamageable`).

### :green_circle: Override + implementér givet interface

*Override én given metode, og implementér et udleveret interface på en eksisterende klasse.*

### :yellow_circle: To metoder + eget interface

*Override to metoder, og design selv et interface, der giver mening for hierarkiet.*

### :red_circle: Mini-spil med polymorf adfærd

*Byg et lille mini-spil, hvor polymorf adfærd (en liste af baseklasse-typen, gennemløbet med `foreach`) er den centrale mekanik.*

## Leverance

Polymorf horde (liste af fjender med forskellig, overridet adfærd) + interface-implementering + devlog.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 26** dækker polymorfi, abstrakte metoder/klasser og `new`-metoder.
    - **Level 27 ("Interfaces")** er kernekapitlet for interfaces.
    - **Level 28 ("Structs")** er valgfri baggrundslæsning — structs sammenlignes kort med klasser.
    - **Level 31 ("The Fountain of Objects")** er bogens store OOP-projekt og en oplagt afslutning på hele OOP-blokken (F2.1-F2.3).

    Vi henviser til bogen for uddybning — gå selv på opdagelse i den frem for kun at læse vores egne noter her.

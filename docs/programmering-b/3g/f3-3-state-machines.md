# F3.3 – State machines: fra analyse til implementering

!!! info "Om forløbet"

    - **Timer:** 5 (E-semester)
    - **Studie+-forløb:** SP10 — Architecture Mode: Abstraktion og softwarearkitektur
    - **Bog:** *The C# Player's Guide*, Level 16 (enums, anvendt)

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - modellere et programs adfærd som en state machine
    - implementere en state machine i C#

## Om forløbet

*Skriv motivation: dette forløb lukker en bevidst tre-trins-progression, der er strukket over hele uddannelsen: enums læres i 2.g (F2.1) som syntaktisk fundament → state machine-diagrammer bruges som ANALYSEVÆRKTØJ i SO6 (F3.1, uden kode) → HER implementeres den samme tænkning endelig i kode. Gør denne progression eksplicit for eleverne.*

## Lektionsplan

*Skriv time-for-time-plan for forløbets 5 timer: genbesøg SO6's state machine-diagram for fjende-AI'en → design af enum-baseret tilstandsrepræsentation → implementering af Patrol → Chase → Attack-logik.*

## Teori

*Skriv teoriafsnit med C#-kodeeksempler for:*

- *enum-baserede state machines i C#*
- *tilstande og overgange (transitions)*
- *eksempel: fjende-AI med Patrol → Chase → Attack*
- *fra tilstandsdiagram (tegnet i SO6) til kode*

## Øvelser

Implementér en fjende-AI som en state machine, med udgangspunkt i et tilstandsdiagram.

### :green_circle: To states

*Implementér en simpel fjende-AI med to tilstande (fx Patrol og Chase).*

### :yellow_circle: Tre states

*Udvid til tre tilstande (Patrol → Chase → Attack).*

### :red_circle: Hierarkiske states

*Implementér en mere avanceret state machine med hierarkiske eller indlejrede tilstande.*

## Leverance

Implementeret fjende-AI med states, sammen med det tilhørende tilstandsdiagram og en devlog.

## Læs mere

!!! tip "Fra bogen og andre kilder"

    - ***The C# Player's Guide*, Level 16** ("Enumerations") er relevant at genlæse som syntaktisk fundament.
    - [Unity Learn: "AI for Beginners"](https://learn.unity.com/) har mere om state machines i spil-AI.

    Vi henviser til bogen og Unity Learn for uddybning — gå selv på opdagelse der frem for kun at læse vores egne noter her.

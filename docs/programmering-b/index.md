# Programmering B (HTX)

Velkommen til **Programmering B**.

Faget handler om at lære at tænke og arbejde systematisk med programmering, med fokus på både grundlæggende forståelse og praktisk anvendelse. Vi kommer til at arbejde i C#, hvor vi først arbejder i konsolmiljø og senere med større programmer og projekter i Unity med fokus på spiludvikling.

I Unity vil du opbygge og opsætte projekter, som gradvist udvikler sig til egentlige spil- eller programidéer. I den tidlige fase arbejder vi bevidst med forenklede prototyper (MVP’er – Minimal Viable Products), hvor objekter repræsenteres af såkaldte primitive shapes som kugler, kuber og planer. Det gør det muligt hurtigt at afprøve idéer og fokusere på funktionalitet, logik og struktur uden at blive bremset af grafik. For at skabe overblik og tydelighed tildeles objekterne ofte enkle, entydige materialer og farver.

??? tip "Perspektiver i 3.g"

    Hvis du ønsker at arbejde videre med mere færdigpolerede spil, længere udviklingsforløb og et større fokus på visuelt design, animation og helhedsoplevelse, giver det god mening at vælge **Teknikfaget DDU (Digital Design og Udvikling) i 3.g**.

    Her får du en væsentligt højere tidshorisont, som giver mulighed for at bygge mere komplette og gennemarbejdede spilprojekter oven på det fundament, der lægges i Programmering B.

Dette site samler:

- undervisningsmateriale
- forløbsoversigter
- opgaver
- udvalgte eksempler
- overblik til brug ved evaluering og årsprøve

Alt materiale er struktureret efter **årgang**.

---

## Hvad arbejder vi med i Programmering B?

Faget strækker sig over **186 timer** fordelt på tre år (1.g: 35 t, 2.g: 65 t, 3.g: 86 t). I løbet af faget vil du bl.a. arbejde med:

- grundlæggende programmeringsbegreber (variabler, kontrolstrukturer, metoder)
- strukturering af kode og problemløsning
- objektorienteret programmering (klasser, arv, polymorfi, interfaces)
- datastrukturer og algoritmisk tænkning (søgning, sortering, Big-O)
- rekursion, arkitektur og state machines
- udvikling af større programmer og projekter i både konsol og Unity

Der lægges vægt på, at du ikke kun kan skrive kode, men også kan:

- forklare hvad koden gør
- argumentere for valg af løsning
- læse og forstå eksisterende kode

---

## Struktur

Materialet er opdelt i tre årgange, der bygger direkte oven på hinanden. Hver årgang er igen delt op i fire **Studie+-forløb** (SP1-SP12 i alt) — større, sammenhængende temaer — som hver især dækker over flere mindre **underforløb** (F1.1, F1.2 osv.), én side pr. underforløb:

- **[1.g](1g/index.md)** — Konsol-C# uden OOP: fra første program (SP1) over kontrolstrukturer og loops (SP2) til metoder, strings og arrays (SP3), og et afsluttende terningespilsprojekt, Meyer (SP4).
- **[2.g](2g/index.md)** — Objektorienteret programmering for alvor, inkl. **interfaces** (SP5), introduktion til Unity (SP6), en afstikker til datastrukturer og algoritmer (SP7), og et Unity-MVP hvor sortering indgår som gameplay-mekanik (SP8). Afsluttes med mundtlig årsprøve.
- **[3.g](3g/index.md)** — Året starter med et tværfagligt analyseforløb (SP9, SO6 sammen med Kom/IT A), fortsætter med rekursion, state machines og softwarearkitektur (SP10), eksamensprojektet rykkes bevidst frem til januar/februar (SP11), og faget afsluttes **ikke** på eksamensprojektet, men med et dedikeret eksamensklargøringsforløb (SP12).

Brug menuen til venstre til at navigere: årgang → Studie+-forløb → underforløb.

---

## Studievaner, der virker i dette fag

Programmering B er ikke et fag, man skimmer sig igennem. Kode læses anderledes end en tekstbog — én overset linje, ét misforstået ord, og resten giver ikke mening. Det, der virker bedst:

- **Sid koncentreret, ikke i baggrunden.** Sæt dig et sted uden forstyrrelser og afsæt sammenhængende tid — programmering kræver, at du holder flere ting i hovedet ad gangen, hvilket ikke fungerer, hvis du samtidig skimmer telefonen.
- **Læs kode linje for linje, ikke diagonalt.** Når du møder et kodeeksempel, så læs det så du reelt forstår, hvad hver linje gør — ikke bare at det "ser rigtigt ud". Kør det selv, og ændr på det, indtil du er sikker.
- **Forstå, før du går videre.** Hvis en linje ikke giver mening, så stop og undersøg den, i stedet for at læse hen over den og håbe, det klarer sig. Fagets stof bygger tæt oven på sig selv — huller tidligt gør det svært at følge med senere.
- **Byg i små skridt.** Skriv lidt, kør det, se om det virker, byg videre. Undgå at skrive en hel opgave færdig, før du tester den første gang.
- **Brug fejlmeddelelser aktivt.** En fejlmeddelelse er information, ikke et nederlag — læs den roligt, og brug den til at finde problemet, i stedet for at gætte tilfældigt.
- **Tag øvelsernes sværhedsgrad alvorligt.** 🟢🟡🔴 er der af en grund — det grønne niveau bygger den forståelse, du har brug for, før det gule og røde giver mening.
- **Kunne forklare din egen kode.** Video devlogs betyder, at du løbende skal kunne sætte ord på, hvad du har lavet og hvorfor — det er samtidig den bedste test af, om du reelt har forstået det, eller bare fik det til at virke.

## Brug af AI som redskab

Generativ AI (ChatGPT, Copilot, Claude m.fl.) er en del af virkeligheden i dag — også i dette fag. Men der er stor forskel på at bruge AI *til* at lære og på at lade AI *overtage* din læring:

**Fornuftig brug** — AI som sparringspartner:

- forklare en fejlmeddelelse, du ikke selv kan tyde
- sparre om, hvorfor din kode ikke gør, hvad du forventede
- få et koncept forklaret på en anden måde, end vi gjorde i timen

**Underminerer din læring** — AI som genvej uden om den:

- at få AI til at skrive hele opgaven eller besvarelsen for dig
- at bruge AI til at "autorette" kode, du aldrig selv har forstået
- at aflevere kode, du ikke selv kan forklare i din video devlog

!!! tip "Tommelfingerregel"

    Hvis du ikke selv kan forklare, hvad en kodelinje gør og hvorfor den er der, har AI'en lært noget — ikke dig. Har AI hjulpet dig markant med en opgave, så nævn det, ligesom du ville kildehenvise til enhver anden kilde.

Kritisk og ansvarlig brug af generativ AI er eksplicit en del af læreplanens vejledning (2025) og behandles direkte som fagligt stof i forløb F3.5 i 3.g — men principperne herover gælder fra dag ét.

## Praktisk

!!! warning "OBS"

    Dette site opdateres **løbende** i takt med undervisningen.

    Det fungerer som **fælles reference** for elever og som overbliksmateriale i forbindelse med prøver og eksamener.

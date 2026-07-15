# F3.1 – SO6: Spilanalyse bag facaden

!!! info "Om forløbet"

    - **Timer:** 15 (E-semester, tværfagligt med Kom/IT A)
    - **Studie+-forløb:** SP9 — Crossover: Spilanalyse bag facaden (SO6)
    - **Bog:** Opslag efter behov — intet nyt kapitel er kernelæsning her

!!! warning "Dette er et ANALYSEforløb — I bygger ikke kode"

    SO6 adskiller sig fra alle andre forløb i faget: her **dekomponerer og analyserer** I et eksisterende spil, I **bygger det ikke**, og der afleveres **ingen kode**. Leverancen er en diagramsamling og en skriftlig analyse. Hold det klart adskilt fra Architecture Mode (F3.2-F3.7) bagefter, hvor I for alvor begynder at *bygge* igen.

!!! abstract "Læringsmål"

    Efter forløbet kan du:

    - aflæse en fjende-AI's adfærd i et eksisterende spil og repræsentere den som et state machine-diagram
    - redegøre for et spils arkitektur på forskellige abstraktionsniveauer
    - bruge flowdiagrammer, UML og use cases som analyseværktøjer, ikke kun som designværktøjer

## Om forløbet

*Skriv motivation: SO6 ligger bevidst lige efter sommerferien (før resten af 3.g's kernestof), som et tværfagligt analyseforløb med Kom/IT A. Fremhæv det fælles fokuspunkt: en fjende-AI analyseres via state machine-diagram OG flowchart for pathfinding — det er den samme dekomponeringsmetode (Computational Thinking), anvendt på "hvad agenten vil" (state machine) og "hvordan den kommer derhen" (pathfinding). Nævn at bevidst FRAVALG af forudpakkede analyseskabeloner ("predefined process") holder diagrammerne små og fokuserede. Forløbet fodrer SOP (studieretningsprojektet).*

## Lektionsplan

*Skriv time-for-time-plan for forløbets 15 timer: introduktion til analyseopgaven og fælles fokuspunkt → valg af selvvalgt spil → state machine-analyse af fjende-AI → flowchart for pathfinding → use case- og UML-analyse af spillets øvrige systemer → sammenskrivning af den samlede analyse.*

## Teori

*Skriv teoriafsnit (repetition/anvendelse, ikke ny syntaks) om:*

- *state machine-diagrammer brugt til at ANALYSERE eksisterende adfærd (ikke kun til at designe ny) — tilstande, overgange, triggere*
- *flowdiagrammer anvendt på en pathfinding-algoritmes flow (uden at implementere den)*
- *use case-diagrammer og -beskrivelser anvendt til at kortlægge et eksisterende systems funktioner*
- *hvordan man dekomponerer et komplekst system (et helt spil) i mindre, analyserbare dele*

## Øvelser

Analysér et selvvalgt spil, med en fjende-AI som fælles fokuspunkt for hele klassen.

### :green_circle: Givet spil + diagramskabeloner

*Analysér et udleveret, fælles spil ved hjælp af udleverede diagramskabeloner.*

### :yellow_circle: Eget spil, fælles fokuspunkt

*Vælg selv et spil at analysere, men behold det fælles fokuspunkt (fjende-AI'ens state machine + pathfinding).*

### :red_circle: Eget spil + dybere algoritme-analyse

*Vælg eget spil, og gå dybere ind i den bagvedliggende algoritmiske analyse (fx flere sammenkoblede state machines, eller en mere detaljeret pathfinding-analyse).*

## Leverance

Diagramsamling (state machine-diagram + flowchart for pathfinding, samt understøttende UML/use case-diagrammer) og en skriftlig analyse af en fjende-AI i det valgte spil. **Ingen kode afleveres.** Analysen fodrer det senere studieretningsprojekt (SOP).

## Læs mere

!!! tip "Kilder"

    - [redblobgames.com](https://www.redblobgames.com/) har fremragende visuelle forklaringer af pathfinding, som er nyttige til analysen af "hvordan agenten kommer derhen".
    - [sites.google.com/view/so6gametech](https://sites.google.com/view/so6gametech) er en ekstern reference for SO6-forløbet på Gametech-studieretningen.

    Vi henviser til disse kilder for uddybning — gå selv på opdagelse i dem frem for kun at læse vores egne noter her.
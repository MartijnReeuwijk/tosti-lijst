![Demo pic](https://github.com/MartijnReeuwijk/tosti-lijst/blob/master/readmeassets/hero.png)

# Tosti

Deze app is gemaakt voor elke browser and elke telefoon!
Deze app werkt zowel met als zonder javascript.


# Tabel of content

- [Tosti](#tosti)
- [Tabel of content](#tabel-of-content)
  * [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running](#running)
  * [Linting](#linting)
  * [Build With](#build-with)
- [Server logica](#server-logica)
- [EJS templating](#ejs-templating)
- [Progressive enhancement](#progressive-enhancement)
  * [Authors](#authors)
  * [License](#license)
  * [Acknowledgments and Thanks](#acknowledgments-and-thanks)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git@github.com:MartijnReeuwijk/tosti-lijst.git`
- `cd tosti-lijst`
- `npm install`

## Running

`node index.js`
localhost 3000.

## Linting

For linting i used CleanCss and Prettier
To run the Prettier use the code below

- `npm run clean`

## Build With

- [Prettier](https://prettier.io/docs/en/options.html) - Prettier.io - Linter
- [Node.js](https://nodejs.org/en/) - nodejs
- [Express](https://expressjs.com/) - Express

# Server logica

We hebben een client side app omgebouwed to een serverside app.
Het het idee er achter om te optimaliseren voor de langsamen 3G en de oude telefoons/computers.
Hier is de site om geschreven naar een serverside app samen met compression van G-zip.
Ook heeft de site een functionaliteit die werkt als je geen javascript gebruik. Ook kan een screen reader dit lezen voor mensen met vermindert zicht.

Ook doet de server al de logica van de website en wordt deze uitgelezen met een ``` bodyParser ```.
Hier door is er 0 javascript nodig in mijn website

# EJS templating

Als templating heb ik EJS gebruikt dit zorgt voor een serverside render zo dat mensen zonder JS de website kunnen bedienen, met de logica op de server.

```
res.render("pages/list", {
  title: "Tosti lijst",
  bread: data[0].options,
  topping:data[1].options,
});
```
Dit stukje code laad op de server zodat ouden of zwaken telefoons toch werken.

# Progressive enhancement
Om Progressive enchancement zo goed mogelijk toe te passen heb ik elke **CORE** functionaliteit in een HTML form.
Als je website laad zal deze altijd werken.
Als de user javascript aan heeft staan, komt er een extra functionaliteit over het formulier heen. Die het selecteren van het juisten elementen duidelijker maakt.


![enhancement](https://github.com/MartijnReeuwijk/tosti-lijst/blob/master/readmeassets/enhancement.png)

# Screen reader
Ik heb GoogleVOX gebruikt als screen reader, deze kon alles goed voorlezen.
Met gebruik van tags and names geeft hij de juiste namen terug aan de blinde gebruiker.

# Tabs
Er kan met tabs door de app worden genavigeert, zelf vindt ik de standaart volgorde van de HTML tab door een formulier niet logies, maar heb deze wel aangehouden.
Hij gaat door de vragen met Tab maar om de opties te selecteren moet je dit met de pijltjes toets doen.

## Authors

- **Martijn Reeuwijk** - [MartijnReeuwijk](https://github.com/MartijnReeuwijk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments and Thanks

NYC's crime department

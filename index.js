const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const request = require("request");
const compression = require("compression");
const minifyHTML = require("express-minify-html");
const bodyParser = require("body-parser");
const data = require("./data.json");

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  res.append("Cache-Control", "max-age=" + 365 * 24 * 60 * 60);
  next();
});

// app.use(
//   minifyHTML({
//     override: true,
//     exception_url: false,
//     htmlMinifier: {
//       removeComments: true,
//       collapseWhitespace: true,
//       collapseBooleanAttributes: true,
//       removeAttributeQuotes: true,
//       removeEmptyAttributes: true,
//       minifyJS: true
//     }
//   })
// );

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static("static"));

const tosties = [
  {
    name: "brood",
    part: "1",
    options: [
      {
        name: "wit",
        url:
          "https://bakkerijhannen.nl/new/wp-content/uploads/2017/03/wit-brood-700x465.jpg",
        value: "brood"
      },
      {
        name: "bruin",
        url: "https://www.brood.net/public/header/header-speltbrood.jpg",
        value: "brood"
      },
      {
        name: "volkoren",
        url:
          "http://www.eatrunlove.nl/wp-content/uploads/2017/02/Untitled-13-1170x782.jpg",
        value: "brood"
      },
      {
        name: "meergranen",
        url:
          "https://www.koopmans.com/assets/_processed_/1/6/csm_meergranenbrood_9bf7641552.jpg",
        value: "brood"
      },
      {
        name: "spelt",
        url:
          "https://www.plusonline.nl/sites/plusonline/files/styles/pol_carousel/public/istock_000041127210_large.jpg?itok=3e5NpZUd",
        value: "brood"
      },
      {
        name: "roggen",
        url:
          "https://sugarchallenge.nl/wp-content/uploads/sugarchallenge-recepten-roggebrood-1.jpg",
        value: "brood"
      }
    ]
  },
  {
    name: "zoet",
    part: "6",
    options: [
      {
        name: "Hagelslag",
        url:
          "https://st.depositphotos.com/2390973/4564/i/950/depositphotos_45647975-stockafbeelding-close-up-van-chocolade-hagelslag.jpg",
        value: "zoet"
      },
      {
        name: "Pindakaas",
        url:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hallelujah-op-24-januari-is-het-nationale-pindakaasdag-2018-img900-1538741647.jpg",
        value: "zoet"
      },
      {
        name: "Jam - Aardbij",
        url: "http://www.foody.nl/P78901/614x412/rabarber-aardbeien-jam.jpg",
        value: "zoet"
      },
      {
        name: "Jam - pruim",
        url:
          "https://media.margriet.nl/m/mayryqd6hy23_article_single.jpg/pruimenjam-maken.jpg",
        value: "zoet"
      },
      {
        name: "marmalade",
        url:
          "https://media.fromthegrapevine.com/assets/images/2014/12/shutterstock_113775799.jpg.839x0_q71_crop-scale.jpg",
        value: "zoet"
      }
    ]
  }
];

app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Tosti lijst"
  });
});
app.get("/fav", (req, res) => {
  res.render("pages/fav", {
    title: "Tosti lijst"
  });
});
// app.post('/bon', bon)
app.get("/sandwich", (req, res) => {
  res.render("pages/list", {
    title: "Tosti lijst",
    bread: tosties[0].options,
    topping: tosties[1].options
  });
});


app.post("/bon", bon);
// app.get("/mijnbon", (req, res) => {
//   res.render("pages/bon", {
//     title: "Uw boodschappen lijst",
//        brood: req.body.brood || "Wit",
//        zoet: req.body.zoet || "Hagelslag"
//        // ,
//        // image: image
//   });
// });
// function bon(req, res) {
//     const brood = req.body.brood || "Wit";
//     const zoet = req.body.zoet || "Hagelslag";
//     const image = [];
//  }

function bon(req, res) {
  // bad code probs
  const brood = req.body.brood || "Wit";
  const zoet = req.body.zoet || "Hagelslag";
  const image = [];

  for (let i = 0; i < tosties.length; i++) {
    for (let x = 0; x < tosties[i].options.length; x++) {
      if (tosties[i].options[x].name == brood || tosties[i].options[x].name == zoet) {
        image.push(tosties[i].options[x].url)
      }
    }
  }

    res.render("pages/bon.ejs", {
      title: "Uw boodschappen lijst",
      // tosties: tosties,
      brood: brood,
      zoet: zoet,
      image: image
    });

}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

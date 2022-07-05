import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    name: "Alaska (#84)",
    description: "Avokaado, lumekrab, kurk, lendkalamari, lõhe",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ebad32b002620.17633838.jpeg",
    rating: 1.77,
    price: 16.99,
  },
  {
    name: "Azuma (#85)",
    description: "Hiidkrevett, lumekrab, philadelphia",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ebad308aa71a6.30027541.jpeg",
    rating: 2.75,
    price: null,
  },
  {
    name: "Draakon (#141)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ebad2bd375de1.83109538.jpeg",
    rating: 3.98,
    price: 4.99,
  },
  {
    name: "Juurvilja maki (#89)",
    description:
      "Avokaado, philadelphia, kurk, merevetika, paprika, salat, tomat",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ebad29c296987.25477171.jpeg",
    rating: 4.32,
    price: 15.99,
  },
  {
    name: "Kalifornia (#80)",
    description: "Avokaado, lumekrabi, kurk",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ebad272b22d45.25798418.jpeg",
    rating: 3.91,
    price: 16.99,
  },
  {
    name: "Kawaii maki (#1909)",
    description: "Lõhe, kurk, philadelphia, lumekrabi, mozzarella, terav kaste",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3e498e34cf3.77264195.jpeg",
    rating: 2.96,
    price: 21.99,
  },
  {
    name: "Krõmpsuv kana maki (#127)",
    description: "Krõmpsuv kana, philadelphia, salat, tomat",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ebad250167e17.89436693.jpeg",
    rating: 3.69,
    price: 14.99,
  },
  {
    name: "Angerja maki (#58)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd17ed078271.18316990.jpeg",
    rating: 3.48,
    price: 19.99,
  },
  {
    name: "Avokaado maki (#51)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1982bfeb27.99274770.jpeg",
    rating: 2.11,
    price: 12.99,
  },
  {
    name: "Hoso lõhe maki (#52)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd19f5ae9719.72059292.jpeg",
    rating: 4.78,
    price: 7.99,
  },
  {
    name: "Kaheksajala maki (#60)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1a622c7125.15119738.jpeg",
    rating: 3.97,
    price: 18.99,
  },
  {
    name: "Kurgi maki (#50)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1aacb73ba6.71731948.jpeg",
    rating: 2.29,
    price: 2.99,
  },
  {
    name: "Sake kappa maki (#65)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1af6c6b699.90470894.jpeg",
    rating: 3.92,
    price: 18.99,
  },
  {
    name: "Tuunikala maki (#57)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1b411031a3.66949194.jpeg",
    rating: 3.7,
    price: 4.99,
  },
  {
    name: "Küpsetatud angerja gunkan (#35)",
    description: "Angerjas, masago kaste, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1b95ba4c34.22330780.jpeg",
    rating: 4.98,
    price: 2.99,
  },
  {
    name: "Küpsetatud hiidkreveti gunkan (#32)",
    description: "Hiidkrevett, masago kaste, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1c38b53d80.28157821.jpeg",
    rating: 1.74,
    price: 2.99,
  },
  {
    name: "Küpsetatud lõhe gunkan (#30)",
    description: "Lõhe, masago kaste, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1c8dc9c369.44740108.jpeg",
    rating: 2.33,
    price: 4.99,
  },
  {
    name: "Küpsetatud tuunikala gunkan (#31)",
    description: "Tuunikala, masago kaste, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1ec0ac9227.75425299.jpeg",
    rating: 4.09,
    price: 2.99,
  },
  {
    name: "Akuma (#1511)",
    description: "Lumekrabi, philadelphia, lendkalamari, võikala, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1f27dcdf62.36013668.jpeg",
    rating: 4.28,
    price: 18.99,
  },
  {
    name: "Jakoshi (#157)",
    description:
      "Lumekrabi, philadelphia, lõhe, mozzarella, lendkalamari, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1fcedff640.32403687.jpeg",
    rating: 3.56,
    price: 13.99,
  },
  {
    name: "Niko Maki (#158)",
    description:
      "Angerjas, kana, lumekrabi, philadelphia, lendkalamari, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd20e7f15d12.38161212.jpeg",
    rating: 3,
    price: 9.99,
  },
  {
    name: "Rioto (#164)",
    description: "Hiidkrevett, lumekrabi, philadelphia, tamago, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd228c01dc24.69325154.jpeg",
    rating: 1.27,
    price: 5.99,
  },
  {
    name: "Salamander (#153)",
    description:
      "Lumekrabi, philadelphia, kurk, lõhe, masago kaste, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd22e9aa1150.70479193.jpeg",
    rating: 4.74,
    price: 18.99,
  },
  {
    name: "Sansei (#162)",
    description: "Keshju, lõhe, shiitake seened, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd234c825c53.46500574.jpeg",
    rating: 1.09,
    price: 13.99,
  },
  {
    name: "Vegan küpsetatud maki (#1504)",
    description:
      "Porgand, tomat, salat, shiitake, vegan majonees, teriyaki kaste, seesam, peedi-India pähklikaste, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece58279f99b6.27253106.jpeg",
    rating: null,
    price: 4.99,
  },
  {
    name: "Yoshi (#150)",
    description: null,
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece58803e9918.03189624.jpeg",
    rating: 1.34,
    price: 17.99,
  },
  {
    name: "Yoshi Rakoshi (#1501)",
    description:
      "Lumekrabi, philadelphia, tempura hiidkrevett, wasabi lendkalamari, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece592698d786.22479154.jpeg",
    rating: 4.28,
    price: 17.99,
  },
  {
    name: "Aikoi (#156)",
    description:
      "Lumekrabi, lendkalamari, lõhe, mozzarella, terav kaste, unagi kaste",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece76e0c594c2.60936325.jpeg",
    rating: 3.31,
    price: 8.99,
  },
  {
    name: "Etna (#152)",
    description: "Lõhe, lumekrabi, terav kaste, avokaado, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece77388532f0.29599624.jpeg",
    rating: 4.65,
    price: null,
  },
  {
    name: "Kamisama (#155)",
    description:
      "Lumekrabi, philadelphia, lõhe, mozzarella, terav kaste, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece7790333859.97426918.jpeg",
    rating: 3.54,
    price: 17.99,
  },
  {
    name: "Angerja sushi (#4)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece59d2ec99c0.10331992.jpeg",
    rating: 1.91,
    price: 13.99,
  },
  {
    name: "Hiidkreveti sushi (#5)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece5a2be16dc1.55994858.jpeg",
    rating: 4.11,
    price: 4.99,
  },
  {
    name: "Lõhe sushi (#1)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece5a8ed9b3b6.22886586.jpeg",
    rating: 3.92,
    price: 9.99,
  },
  {
    name: "Merevetika sushi (#15)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece5acf96d1d8.29176661.jpeg",
    rating: 3.89,
    price: 5.99,
  },
  {
    name: "Tuunikala sushi (#2)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece5b16d82074.56979460.jpeg",
    rating: 1.76,
    price: 14.99,
  },
  {
    name: "Caesar hiidkreveti tempura (#2071)",
    description:
      "Caesari kaste, hiidkrevett, philadelphia, salat, tomat, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece62b80e1615.41978585.jpeg",
    rating: 3.96,
    price: 8.99,
  },
  {
    name: "Caesar kana tempura (#207)",
    description:
      "Caesari kaste, kana, philadelphia, salat, tomat, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece631ce00587.24133026.jpeg",
    rating: 2.58,
    price: 8.99,
  },
  {
    name: "MySushi tempura (#200)",
    description: "Angerjas, lumekrabi, philadelphia, lõhe, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece6539525bb7.82739005.jpeg",
    rating: 4.89,
    price: 17.99,
  },
  {
    name: "MySushi Rakoshi tempura (#2001)",
    description:
      "Angerjas, lumekrabi, philadelphia, lõhe, tempura hiidkrevett, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece6592a47a38.04580628.jpeg",
    rating: 3.12,
    price: 1.99,
  },
  {
    name: "Aikoi tempura (#212)",
    description: "Lumekrabi, mozzarella, terav kaste, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece674ccd3c24.30159724.jpeg",
    rating: 2.26,
    price: 13.99,
  },
  {
    name: "Hiidkreveti tempura (#201)",
    description: "Hiidkrevett, eesti juust, terav kaste, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece6e966df5b8.57696264.jpeg",
    rating: 1.83,
    price: 7.99,
  },
  {
    name: "Juurvilja tempura (#2003)",
    description: null,
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece6f0a54d736.61262942.jpeg",
    rating: 2.49,
    price: 17.99,
  },
  {
    name: "Kana tempura (#202)",
    description: "Eesti juust, kana, kurk, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece718dbc7bd7.47363563.jpeg",
    rating: 4.85,
    price: 12.99,
  },
  {
    name: "Kana porgandi tempura (#219)",
    description:
      "Kana, porgand, philadelphia, küüslaugu-ingverikaste, unagi kaste.",
    image: null,
    rating: null,
    price: 16.99,
  },
  {
    name: "Kokoro tempura (#203)",
    description: "Lumekrabi, philadelphia, tuunikala, unagi kaste.",
    image: null,
    rating: 3.25,
    price: 3.99,
  },
  {
    name: "Krabi ja lõhe maki tempura (#205)",
    description: null,
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece72fae33177.07867181.jpeg",
    rating: 3.51,
    price: 5.99,
  },
  {
    name: "Krõmpsuv kana tempura (#2017)",
    description: "Krõmpsuv kana, philadelphia, salat, tomat, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece734c194888.13726080.jpeg",
    rating: 3.41,
    price: 13.99,
  },
  {
    name: "Lõhe tempura (#204)",
    description: "Eesti juust, kurk, lõhe, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece73a994f982.32721585.jpeg",
    rating: 2.95,
    price: 13.99,
  },
  {
    name: "Lumekrabi tempura (#209)",
    description: "Lumekrabi, punane lendkalamari, mozzarella, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece74a3a9b465.36121065.jpeg",
    rating: 2.98,
    price: 9.99,
  },
  {
    name: "Lumekrabi hiidkreveti tempura (#2091)",
    description:
      "Hiidkrevett, punane lendkalamari, lumekrabi, philadelphia, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece751895d3c2.34060953.jpeg",
    rating: 2.75,
    price: 14.99,
  },
  {
    name: "Singi-juustu tempura (#213)",
    description: "Eesti juust, sink, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece75743ce684.41088669.jpeg",
    rating: 3.12,
    price: 15.99,
  },
  {
    name: "Tako tempura (#211)",
    description: "Eesti juust, terav kaste, kaheksajalg, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece75cc890154.38169958.jpeg",
    rating: 3.65,
    price: 6.99,
  },
  {
    name: "Terav tuna tempura (#2031)",
    description: "Eesti juust, tuunikala, terav kaste, kurk, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece762533ca08.46619185.jpeg",
    rating: 1.62,
    price: 15.99,
  },
  {
    name: "Vegan tempura (#2005)",
    description:
      "Tofu tilli ja peterselliga, kanpyo, pähklikaste, spinat, teriyaki kaste, seesam, unagi kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ece76724bf5c3.86446472.jpeg",
    rating: 4.74,
    price: 9.99,
  },
  {
    name: "Juustu naan (#806)",
    description: "Tanduuris küpsetatud leib juustu ja küüslauguga",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec2a483391406.73862410.jpeg",
    rating: 2.28,
    price: 4.99,
  },
  {
    name: "Kana Tikka salat (#863)",
    description:
      "India stiilis kanafilee ingveri-küüslaugu marinaadis. Serveeritakse piparmündikastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec39dcee3bdf1.53641317.jpeg",
    rating: 2.17,
    price: 3.99,
  },
  {
    name: "Kana Tikka Masala (#854)",
    description:
      "Tomatid, sibul, koriander, koor, india vürtsid, kanafilee, riis",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3a029786d85.18943935.jpeg",
    rating: 1.54,
    price: 5.99,
  },
  {
    name: "Krõbe meekana (#857)",
    description: "Krõbe kana meekastmes ananassi ja roheliste hernestega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3a07958a9f4.92306527.jpeg",
    rating: 4.58,
    price: 11.99,
  },
  {
    name: "Krõbe meepart (#858)",
    description: "Krõbe part meekastmes ananassi ja roheliste hernestega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3a149f0a727.93308122.jpeg",
    rating: 1.01,
    price: 12.99,
  },
  {
    name: "Praetud riis köögiviljadega (#861)",
    description: "Muna, rohelised herned, porgand, magushapu kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3a8434ced45.99850061.jpeg",
    rating: 3.23,
    price: 6.99,
  },
  {
    name: "Vürtsikas küüslaugukana (#851)",
    description: "Paprika, porru, sibul, küüslauk, terav kaste",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3aff20661f0.26645921.jpeg",
    rating: 3.98,
    price: 9.99,
  },
  {
    name: "Inda Kanakarri (#891)",
    description:
      "Inda vürtsid, sibul, koriander, ingver, tomat, koor, küüslauk, kana, riis",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3b04862e5d7.43572586.jpeg",
    rating: 4.98,
    price: 10.99,
  },
  {
    name: "Kevadrullid hiidkrevettidega (#720)",
    description:
      "Šampinjonid, soja, porgand, paprika, porru, kapsas, küüslauk, oavõrsed, hiidkrevetid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3b09fbb9cc5.94359100.jpeg",
    rating: 4.4,
    price: 17.99,
  },
  {
    name: "Kevadrullid kanaga (№721)",
    description:
      "Šampinjonid, soja, porgand, paprika, porru, kapsas, küüslauk, oavõrsed, Kanafilee vürtsikas punase karri-kookoskastmes.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3b20c3abac1.75893059.jpeg",
    rating: 4.85,
    price: 16.99,
  },
  {
    name: "Kevadrullid köögiviljadega (#722)",
    description:
      "Šampinjonid, soja, porgand, paprika, porru, kapsas, küüslauk, oavõrsed.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3b3b4c04b21.87767258.jpeg",
    rating: 3.3,
    price: 20.99,
  },
  {
    name: "Hiidkrevetid vürtsikas küüslaugu kastmes (#709)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3b636566246.66555639.jpeg",
    rating: 3.55,
    price: 15.99,
  },
  {
    name: "Praetud riis kana ja krevettidega (#862)",
    description:
      "Muna, porgand, rohelised herned, krevetid, kana, Raita kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3b84c982073.96820349.jpeg",
    rating: 1.71,
    price: 4.99,
  },
  {
    name: "Naan (#805)",
    description: "Tanduuris küpsetatud India leib.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3b8afe23a06.66975184.jpeg",
    rating: 1.3,
    price: 10.99,
  },
  {
    name: "Tandoori lõhe (#856)",
    description:
      "Tandooris valmistatud ingveri-küüslaugu marinaadis lõhe. Serveeritakse inda leiva, kartulite ja piparmündi kastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3b8faed54e6.21576555.jpeg",
    rating: 4.99,
    price: 8.99,
  },
  {
    name: "Singapuri riisinuudlid kanaga (#895)",
    description:
      "Nuudlid, muna, porgand, paprika, oavõrsed, bambusevõrsed, ingver, tšillipipar, india vürtsid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3ba47d3b948.66186249.jpeg",
    rating: 4.87,
    price: 13.99,
  },
  {
    name: "Singapuri riisinuudlid kana ja hiidkrevettidega (#896)",
    description:
      "Nuudlid, muna, porgand, paprika, oavõrsed, bambusevõrsed, ingver, tšillipipar, india vürtsid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3ba99290b88.80245635.jpeg",
    rating: 2.7,
    price: 5.99,
  },
  {
    name: "Magushapu kana (#853)",
    description:
      "Rohelised herned, ananass, sibul, magushapu kaste, kanafilee. Serveeritakse riisiga.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3bb498b2f37.15436839.jpeg",
    rating: 2.05,
    price: 21.99,
  },
  {
    name: "Tai punane kanakarri (#850)",
    description:
      "Kanafilee vürtsikas punase karri-kookoskastmes, värskete seente, bambusevõrsete ja sidruniviiludega. Serveeritakse riisiga.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3bb9d998025.39003812.jpeg",
    rating: 4.06,
    price: 14.99,
  },
  {
    name: "Tai riisinuudlid magushapus kastmes hiidkrevettidega (#873)",
    description:
      "Muna, ingver, porgand, paprika, oavõrsed, bambusevõrsed, porru, nuudlid, magushapu kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3bc5071c5e4.17011763.jpeg",
    rating: 1.54,
    price: 11.99,
  },
  {
    name: "Tai riisinuudlid magushapus kastmes kanafileega (#872)",
    description:
      "Muna, ingver, porgand, paprika, oavõrsed, bambusevõrsed, porru, nuudlid, magushapu kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3bca93db854.24425840.jpeg",
    rating: 4.65,
    price: 3.99,
  },
  {
    name: "Tandoori kalavalik (#902)",
    description:
      "Inda vürtsides võikala, hiidkrevetid ja lõhefilee. Serveeritakse naanide, kartulite ja piparmündikastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3bd10664ee5.54981265.jpeg",
    rating: 1.45,
    price: 9.99,
  },
  {
    name: "Tandori Lihavalik (#903)",
    description:
      "Inda vürtsides kanafilee, lamba- ja sealiha. Serveeritakse naanide, kartulite ja karrikastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3bdb55f84b3.18930492.jpeg",
    rating: 4.07,
    price: 9.99,
  },
  {
    name: "Tandoori kana (#855)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3be12c527d6.78851800.jpeg",
    rating: 2.37,
    price: 17.99,
  },
  {
    name: "Vürtsikas Tom Yum kanaga (#411)",
    description:
      "Šampinjonid, sidrunihein, roheline sibul, ingver, tšillipipar, laim, kanafilee.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3be87d5aeb7.46437638.jpeg",
    rating: 1.13,
    price: 16.99,
  },
  {
    name: "Vürtsikas Tom Yum hiidkrevettidega (#410)",
    description:
      "Šampinjonid, sidrunihein, roheline sibul, ingver, tšillipipar, laim, hiidkrevetid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3bede0d4e54.87045292.jpeg",
    rating: 4.24,
    price: 7.99,
  },
  {
    name: "Vürtsikas Tom Yum vegan (#418)",
    description:
      "Šampinjonid, porgand, sidrunihein, roheline sibul, ingver, tšillipipar, laim.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3bf40e3d442.72466708.jpeg",
    rating: 1.77,
    price: 11.99,
  },
  {
    name: "Veiseliha austrikastmes (#883)",
    description: "Austerservikud, sampinjonid, austrikaste, veiseliha, riis.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3bf974d79c5.46709615.jpeg",
    rating: 2.45,
    price: 5.99,
  },
  {
    name: "Juustupallid (#610)",
    description: "",
    image: 0,
    rating: 1.9,
    price: 3.99,
  },
  {
    name: "Krõbedad kalmaarid (#616)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3c051020f37.23015741.jpeg",
    rating: 1.83,
    price: 18.99,
  },
  {
    name: "Kanatiivad (#608)",
    description: "Krõbedad kanatiivad koduse kastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3c12b30c0e9.11523631.jpeg",
    rating: 2.17,
    price: 17.99,
  },
  {
    name: "Mozzarella pulgad (#609)",
    description: "Krõbedad mozzarella pulgad koduse kastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3c6484ed4a9.70189994.jpeg",
    rating: 2.78,
    price: 13.99,
  },
  {
    name: "BBQ-Searibi (#766)",
    description:
      "Mahlased BBQ searibid valmistatud Sous Vides, serveeritud ahjukartuliga.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3c71297d207.35168558.jpeg",
    rating: 1.43,
    price: 3.99,
  },
  {
    name: "Black Angus burger (#760)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3c7854355d9.75503131.jpeg",
    rating: 3.92,
    price: 16.99,
  },
  {
    name: "Caesari kanaburger (#7601)",
    description:
      "Maisihelvestes paneeritud kanapihv, cheddari juust, kimchi kurk, tomat, caesari kaste, värske salat.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3cb990ebdc7.92854463.jpeg",
    rating: 4.93,
    price: 9.99,
  },
  {
    name: "Grillitud tuunikala (#756)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3cce95afd99.93037812.jpeg",
    rating: 2.72,
    price: 15.99,
  },
  {
    name: "Frititud gyoza kanaga (#7571)",
    description:
      "Jaapani pelmeenid. Kaste Teie valikul: magushapu või seenekaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3cf54630d26.91320284.jpeg",
    rating: 2.08,
    price: 11.99,
  },
  {
    name: "Kaheksajalg (#751)",
    description:
      "Grillitud kaheksajalg vokitud köögiviljade ja teriyaki kastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3d081aa3953.47820883.jpeg",
    rating: 4.98,
    price: 5.99,
  },
  {
    name: "Metsik Šoti lõhefilee (#755)",
    description:
      "Looduslikult kasvatatud Šoti lõhefilee, grillitud köögiviljade ja tartari kastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3d2997fa826.74336622.jpeg",
    rating: 2.09,
    price: 12.99,
  },
  {
    name: "Part (#758)",
    description: "Roosaks küpsetatud pardifilee kirsikastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3d35bbda4e6.15818817.jpeg",
    rating: 4.63,
    price: 3.99,
  },
  {
    name: "Mereanni Ramen (#7591)",
    description:
      "Hõrk supp jaapani dashi puljongist. Käsitsi valmistatud nuudlid, tiigerkrevetid, lõhe, shiitake seened, nori, tšillipipar, vutimuna.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3d3b5ac2268.75432985.jpeg",
    rating: 1.87,
    price: 4.99,
  },
  {
    name: "Pardiliha Ramen (#7593)",
    description:
      "Hõrk supp dashi puljongist. Käsitsi valmistatud nuudlid, pardiliha, shiitake seened, nori, tšillipipar, vutimuna.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3d4166bfff4.78765333.jpeg",
    rating: 4.61,
    price: 11.99,
  },
  {
    name: "Veiseliha Ramen (#759)",
    description:
      "Hõrk supp jaapani dashi puljongist. Käsitsi valmistatud nuudlid, veiseliha, shiitake seened, nori, tšillipipar, vutimuna.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3d46a347911.20904894.jpeg",
    rating: 2.84,
    price: 3.99,
  },
  {
    name: "Rannakarbid veini-koorekastmes (#874)",
    description: "Koor, küüslauk, sibul, tšilli, maitserohelised.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3d4df518fd9.53919061.jpeg",
    rating: 2.58,
    price: 13.99,
  },
  {
    name: "Tursakotlett (#765)",
    description: "Tursakotlett kartulipüree, värske salat ja koduse kastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3d57057fce8.32210390.jpeg",
    rating: 4.72,
    price: 4.99,
  },
  {
    name: "Hautatud veisefilee (#764)",
    description: "Ürtidega hautatud veisefilee seene-trühvli õlikastmega.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3d7ea5d1197.44429135.jpeg",
    rating: 3.23,
    price: 3.99,
  },
  {
    name: "Avokaado salat hiidkrevettidega (#4073)",
    description:
      "Avokaado, praetud krevetid, tomatid. Serveeritakse majoneesi-salsa kastmega avokaado koorikus.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3dbe7a54e50.72031203.jpeg",
    rating: 2.37,
    price: 19.99,
  },
  {
    name: "Kerge burrata-tomati salat (#4074)",
    description: "Burrata juust, tomat, maasikas.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3dc32cadf66.81096108.jpeg",
    rating: 3.76,
    price: 7.99,
  },
  {
    name: "Caesari salat kanaga (#407)",
    description:
      "Rooma salat, caesari kaste, kirsstomatid, krutoonid, parmesan, kanafilee.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3dd028f8357.81158124.jpeg",
    rating: 3.45,
    price: 8.99,
  },
  {
    name: "Caesari salat hiidkrevettidega (#4071)",
    description:
      "Rooma salat, caesari kaste, kirsstomatid, krutoonid, parmesan, hiidkrevetid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3ddc826f2f7.83661818.jpeg",
    rating: 2.76,
    price: 14.99,
  },
  {
    name: "Caesari salat kaheksajalaga (#4072)",
    description:
      "Rooma salat, caesari kaste, kirsstomatid, krutoonid, parmesan, kaheksajalg",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3de2776c778.89138113.jpeg",
    rating: 3.26,
    price: 10.99,
  },
  {
    name: "Kreeka salat (#4075)",
    description: "Tomat, kurk, paprika, Feta juust, oliivid, punane sibul.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3de84f17d21.69183364.jpeg",
    rating: 4.12,
    price: 8.99,
  },
  {
    name: "Kalmaari salat (#406)",
    description: "",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3df42600359.84507499.jpeg",
    rating: 1.45,
    price: 14.99,
  },
  {
    name: "Merevetikasalat (#404)",
    description: "Merevetikas, keshju kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3df9d73e7b1.69945949.jpeg",
    rating: 2.74,
    price: 7.99,
  },
  {
    name: "Merevetikasalat shiitake seentega (#405)",
    description: "Merevetikas, shiitake seened, keshju kaste.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec3e0ea505b96.02005743.jpeg",
    rating: 4.02,
    price: 6.99,
  },
  {
    name: "Kimchi supp (#401)",
    description: "Lõhe, mereahven, merevetikas.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec508b9413c92.71404267.jpeg",
    rating: 3.32,
    price: 14.99,
  },
  {
    name: "Miso supp (#400)",
    description: "Lõhe, meriahven, merevetikas.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec5095c2b6ac8.88799937.jpeg",
    rating: 4.51,
    price: 10.99,
  },
  {
    name: "Rikkalik kalasupp Buiabes (#417)",
    description:
      "Kalapuljong, köögiviljad, tomatipasta, lõhe, valge kala, krevetid, rannakarbid, kalmaarid, maitserohelised.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec50cd13b0ce6.49344178.jpeg",
    rating: 2.54,
    price: 18.99,
  },
  {
    name: "Tom Kha kanaga (#403)",
    description:
      "Kanafilee, sampinjonid, austerservikud, kookospiim, ingver, koriander.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec514a3a525d6.32561227.jpeg",
    rating: 3.08,
    price: 7.99,
  },
  {
    name: "Tom Kha hiidkrevettidega (#4031)",
    description:
      "Hiidkrevetid, sampinjonid, austerservikud, kookospiim, ingver, koriander.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec514fef08865.54520221.jpeg",
    rating: 4.76,
    price: 11.99,
  },
  {
    name: "Vürtsikas Tom Yum kanaga (#411)",
    description:
      "Šampinjonid, sidrunihein, roheline sibul, ingver, tšillipipar, laim, kanafilee.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec52f97f2b749.35646167.jpeg",
    rating: 2.51,
    price: 21.99,
  },
  {
    name: "Vürtsikas Tom Yum hiidkrevettidega (#410)",
    description:
      "Šampinjonid, sidrunihein, roheline sibul, ingver, tšillipipar, laim, hiidkrevetid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec53059699738.31371627.jpeg",
    rating: 1.55,
    price: 17.99,
  },
  {
    name: "Vürtsikas Tom Yum vegan (#418)",
    description:
      "Šampinjonid, porgand, sidrunihein, roheline sibul, ingver, tšillipipar, laim.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec530bbced2c7.66680426.jpeg",
    rating: 1.32,
    price: 18.99,
  },
  {
    name: "Hiina munanuudlid austrikastmes kanaga (#560)",
    description:
      "Munanuudlid, austrikaste, krõbe praetud sibul, köögiviljad, kanafilee.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec53171588cc3.29102405.jpeg",
    rating: 1.48,
    price: 17.99,
  },
  {
    name: "Hiina munanuudlid austrikastmes hiidkrevettidega (#5602)",
    description:
      "Munanuudlid, austrikaste, krõbe praetud sibul, köögiviljad, hiidkrevetid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec53202904724.86219139.jpeg",
    rating: 3.22,
    price: 20.99,
  },
  {
    name: "Hiina munanuudlid austrikastmes veiselihaga (#5601)",
    description:
      "Munanuudlid, austrikaste, krõbe praetud sibul, köögiviljad, veiseliha.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec5324fb603c9.95076159.jpeg",
    rating: 1.69,
    price: 4.99,
  },
  {
    name: "Peened klaasjad riisinuudlid kanaga (#561)",
    description: "Riisinuudlid, krõbe praetud sibul, köögiviljad, kana.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec6840648dd12.30837468.jpeg",
    rating: 4.65,
    price: 18.99,
  },
  {
    name: "Peened klaasjad riisinuudlid hiidkrevettidega (#5612)",
    description:
      "Riisinuudlid, krõbe praetud sibul, köögiviljad, hiidkrevetid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec6847bb16f30.98021621.jpeg",
    rating: 1.1,
    price: 3.99,
  },
  {
    name: "Peened klaasjad riisinuudlid veiselihaga (#5611)",
    description: "Riisinuudlid, krõbe praetud sibul, köögiviljad, veiseliha.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ec684db0645d7.51980952.jpeg",
    rating: 2.84,
    price: 3.99,
  },
  {
    name: "Saigoni stiilis tempura köögiviljad kanaga (#563)",
    description:
      "Tempura köögiviljad, krõbe praetud sibul, magushapu kaste, kanafilee.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd0d75e5bef0.50778361.jpeg",
    rating: 3.23,
    price: 4.99,
  },
  {
    name: "Saigoni stiilis tempura köögiviljad veiseliha (#5632)",
    description:
      "Tempura köögiviljad, krõbe praetud sibul, magushapu kaste, hiidkrevetid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd0e65041418.85125012.jpeg",
    rating: 3.81,
    price: 5.99,
  },
  {
    name: "Saigoni stiilis tempura köögiviljad veiseliha (#5631)",
    description:
      "Tempura köögiviljad, krõbe praetud sibul, magushapu kaste, veiseliha.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd0eac8eb733.24891307.jpeg",
    rating: 3.73,
    price: 18.99,
  },
  {
    name: "Tatrajahunuudlid kanaga (#562)",
    description:
      "Tatrajahunuudlid, krõbe praetud sibul, köögiviljad, kanafilee.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1340c2f814.86506859.jpeg",
    rating: 4.19,
    price: 9.99,
  },
  {
    name: "Tatrajahunuudlid hiidkrevettidega (#5622)",
    description:
      "tatrajahunuudlid, krõbe praetud sibul, köögiviljad, hiidkrevetid.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd1624120df1.75463738.jpeg",
    rating: 3.11,
    price: 5.99,
  },
  {
    name: "Tatrajahunuudlid veiselihaga (#5621)",
    description:
      "Tatrajahunuudlid, krõbe praetud sibul, köögiviljad, veiseliha.",
    image:
      "https://storage.googleapis.com/staging-psl-assets/uploads/5ecd16a6f0a257.11404342.jpeg",
    rating: 1.85,
    price: 19.99,
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

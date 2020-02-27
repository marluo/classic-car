const INITIAL_STATE = [
  {
    title: "abarth",
    imgUrl: require("../../components/img/Logo/Abarth-logo.png"),
    id: 1,
    linkUrl: "/abarth"
  },
  {
    title: "ac",
    imgUrl: require("../../components/img/Logo/AC_logo.png"),
    id: 2,
    linkUrl: "/ac"
  },
  {
    title: "alfa romeo",
    imgUrl: require("../../components/img/Logo/Alfa_Romeo_logo.png"),
    id: 3,
    linkUrl: "/alfa-romeo"
  },
  {
    title: "allard",
    imgUrl: require("../../components/img/Logo/allard.png"),
    id: 4,
    linkUrl: "/allard"
  },
  {
    title: "alpine",
    imgUrl: require("../../components/img/Logo/Alpine.png"),
    id: 5,
    linkUrl: "/alpine"
  },
  {
    title: "alvis",
    imgUrl: require("../../components/img/Logo/Alvis_logo.png"),
    id: 6,
    linkUrl: "/alvis"
  },
  {
    title: "arms. sidderley",
    imgUrl: require("../../components/img/Logo/ASidderley.png"),
    id: 7,
    linkUrl: "/a-sidderley"
  },
  {
    title: "aston martin",
    imgUrl: require("../../components/img/Logo/aston.png"),
    id: 8,
    linkUrl: "/aston-martin"
  },
  {
    title: "audi",
    imgUrl: require("../../components/img/Logo/audi.png"),
    id: 9,
    linkUrl: "/audi"
  },
  {
    title: "austin healey",
    imgUrl: require("../../components/img/Logo/austin-healey.png"),
    id: 10,
    linkUrl: "/austin-healey"
  },
  {
    title: "bentley",
    imgUrl: require("../../components/img/Logo/Bentley_logo.png"),
    id: 11,
    linkUrl: "/bentley"
  },
  {
    title: "berkeley",
    imgUrl: require("../../components/img/Logo/Berkeley.png"),
    id: 12,
    linkUrl: "/berkeley"
  },
  {
    title: "bitter",
    imgUrl: require("../../components/img/Logo/bitter.png"),
    id: 13,
    linkUrl: "/bitter"
  },
  {
    title: "bizzarrini",
    imgUrl: require("../../components/img/Logo/bizzarrini.png"),
    id: 14,
    linkUrl: "/bizzarrini"
  },
  {
    title: "bmw",
    imgUrl: require("../../components/img/Logo/bmw.png"),
    id: 15,
    linkUrl: "/bmw"
  },
  {
    title: "borgward",
    imgUrl: require("../../components/img/Logo/Borgward-logo.png"),
    id: 16,
    linkUrl: "/borgward"
  },
  {
    title: "bristol",
    imgUrl: require("../../components/img/Logo/bristol.png"),
    id: 17,
    linkUrl: "/bristol"
  },
  {
    title: "chevrolet",
    imgUrl: require("../../components/img/Logo/chevrolet.png"),
    id: 18,
    linkUrl: "/chevrolet"
  },
  {
    title: "caterham",
    imgUrl: require("../../components/img/Logo/caterham.png"),
    id: 19,
    linkUrl: "/caterham"
  },
  {
    title: "chrysler",
    imgUrl: require("../../components/img/Logo/chrysler.png"),
    id: 20,
    linkUrl: "/chrysler"
  },
  {
    title: "citroen",
    imgUrl: require("../../components/img/Logo/citroen.png"),
    id: 21,
    linkUrl: "/citroen"
  },
  {
    title: "daf",
    imgUrl: require("../../components/img/Logo/daf.png"),
    id: 22,
    linkUrl: "/daf"
  },
  {
    title: "daimler",
    imgUrl: require("../../components/img/Logo/daimler.png"),
    id: 23,
    linkUrl: "/daimler"
  },
  {
    title: "datsun",
    imgUrl: require("../../components/img/Logo/datsun.png"),
    id: 24,
    linkUrl: "/datsun"
  },
  {
    title: "delorean",
    imgUrl: require("../../components/img/Logo/delorean.gif"),
    id: 25,
    linkUrl: "/delorean"
  },
  {
    title: "de tomaso",
    imgUrl: require("../../components/img/Logo/detomaso.png"),
    id: 26,
    linkUrl: "/detomaso"
  },
  {
    title: "facel vega",
    imgUrl: require("../../components/img/Logo/facelvega.png"),
    id: 27,
    linkUrl: "/facelvega"
  },
  {
    title: "ferrari",
    imgUrl: require("../../components/img/Logo/ferrari.png"),
    id: 28,
    linkUrl: "/ferrari"
  },
  {
    title: "fiat",
    imgUrl: require("../../components/img/Logo/fiat.png"),
    id: 29,
    linkUrl: "/fiat"
  },
  {
    title: "ford uk",
    imgUrl: require("../../components/img/Logo/ford.png"),
    id: 30,
    linkUrl: "/forduk"
  },
  {
    title: "ford usa",
    imgUrl: require("../../components/img/Logo/ford.png"),
    id: 31,
    linkUrl: "/fordusa"
  },
  {
    title: "frazer nash",
    imgUrl: require("../../components/img/Logo/frazernash.png"),
    id: 32,
    linkUrl: "/frazernash"
  },
  {
    title: "gilbern",
    imgUrl: require("../../components/img/Logo/Gilbern.png"),
    id: 33,
    linkUrl: "/gilbern"
  },
  {
    title: "ginetta",
    imgUrl: require("../../components/img/Logo/Ginetta.png"),
    id: 34,
    linkUrl: "/ginetta"
  },
  {
    title: "gordon",
    imgUrl: require("../../components/img/Logo/gordon-keeble.png"),
    id: 35,
    linkUrl: "/gordon"
  },
  {
    title: "healey",
    imgUrl: require("../../components/img/Logo/healey.png"),
    id: 36,
    linkUrl: "/healey"
  },
  {
    title: "hillman",
    imgUrl: require("../../components/img/Logo/hillman.png"),
    id: 37,
    linkUrl: "/hillman"
  },
  {
    title: "honda",
    imgUrl: require("../../components/img/Logo/honda.png"),
    id: 38,
    linkUrl: "/honda"
  },
  {
    title: "humber",
    imgUrl: require("../../components/img/Logo/humber.png"),
    id: 39,
    linkUrl: "/humber"
  },
  {
    title: "innocenti",
    imgUrl: require("../../components/img/Logo/Innocenti.png"),
    id: 40,
    linkUrl: "/innocenti"
  },
  {
    title: "iso",
    imgUrl: require("../../components/img/Logo/iso.png"),
    id: 41,
    linkUrl: "/iso"
  },
  {
    title: "isuzu",
    imgUrl: require("../../components/img/Logo/isuzu.png"),
    id: 42,
    linkUrl: "/isuzu"
  },
  {
    title: "jaguar",
    imgUrl: require("../../components/img/Logo/jaguar.png"),
    id: 43,
    linkUrl: "/jaguar"
  },
  {
    title: "jensen",
    imgUrl: require("../../components/img/Logo/jensen.png"),
    id: 44,
    linkUrl: "/jensen"
  },
  {
    title: "jowett",
    imgUrl: require("../../components/img/Logo/jowett.png"),
    id: 45,
    linkUrl: "/jowett"
  },
  {
    title: "lagonda",
    imgUrl: require("../../components/img/Logo/lagonda.png"),
    id: 46,
    linkUrl: "/lagonda"
  },
  {
    title: "lamborghini",
    imgUrl: require("../../components/img/Logo/lambo.png"),
    id: 47,
    linkUrl: "/lamborghini"
  },
  {
    title: "lancia",
    imgUrl: require("../../components/img/Logo/lancia.png"),
    id: 48,
    linkUrl: "/lancia"
  },
  {
    title: "land rover",
    imgUrl: require("../../components/img/Logo/Landrover.png"),
    id: 49,
    linkUrl: "/land-rover"
  },
  {
    title: "lea francis",
    imgUrl: require("../../components/img/Logo/lea-francis.png"),
    id: 50,
    linkUrl: "/leafrancis"
  },
  {
    title: "lotus",
    imgUrl: require("../../components/img/Logo/lotus.png"),
    id: 51,
    linkUrl: "/lotus"
  },
  {
    title: "marcos",
    imgUrl: require("../../components/img/Logo/Marcos.png"),
    id: 52,
    linkUrl: "/marcos"
  },
  {
    title: "maserati",
    imgUrl: require("../../components/img/Logo/maserati.png"),
    id: 53,
    linkUrl: "/maserati"
  },
  {
    title: "matra",
    imgUrl: require("../../components/img/Logo/matra.png"),
    id: 54,
    linkUrl: "/matra"
  },
  {
    title: "mazda",
    imgUrl: require("../../components/img/Logo/mazda.png"),
    id: 55,
    linkUrl: "/mazda"
  },
  {
    title: "mclaren",
    imgUrl: require("../../components/img/Logo/mclaren.png"),
    id: 56,
    linkUrl: "/mclaren"
  },
  {
    title: "mercedes-benz",
    imgUrl: require("../../components/img/Logo/mercedes.png"),
    id: 57,
    linkUrl: "/mercedes-benz"
  },
  {
    title: "mg",
    imgUrl: require("../../components/img/Logo/mg.png"),
    id: 58,
    linkUrl: "/mg"
  },
  {
    title: "mini",
    imgUrl: require("../../components/img/Logo/mini.png"),
    id: 59,
    linkUrl: "/mini"
  },
  {
    title: "mitsubishi",
    imgUrl: require("../../components/img/Logo/mitsubishi.png"),
    id: 60,
    linkUrl: "/mitsubishi"
  },
  {
    title: "monteverdi",
    imgUrl: require("../../components/img/Logo/monteverdi.png"),
    id: 61,
    linkUrl: "/monteverdi"
  },
  {
    title: "morgan",
    imgUrl: require("../../components/img/Logo/morgan.png"),
    id: 62,
    linkUrl: "/morgan"
  },
  {
    title: "morris",
    imgUrl: require("../../components/img/Logo/morris.png"),
    id: 63,
    linkUrl: "/morris"
  },
  {
    title: "nsu",
    imgUrl: require("../../components/img/Logo/nsu.png"),
    id: 64,
    linkUrl: "/nsu"
  },
  {
    title: "opel",
    imgUrl: require("../../components/img/Logo/opel.png"),
    id: 65,
    linkUrl: "/opel"
  },
  {
    title: "pagani",
    imgUrl: require("../../components/img/Logo/pagani.png"),
    id: 66,
    linkUrl: "/pagani"
  },
  {
    title: "panhard",
    imgUrl: require("../../components/img/Logo/panhard.png"),
    id: 67,
    linkUrl: "/panhard"
  },
  {
    title: "panther",
    imgUrl: require("../../components/img/Logo/panther.png"),
    id: 68,
    linkUrl: "/panther"
  },
  {
    title: "peugeot",
    imgUrl: require("../../components/img/Logo/peugeot.png"),
    id: 69,
    linkUrl: "/peugeot"
  },
  {
    title: "plymouth",
    imgUrl: require("../../components/img/Logo/plymouth.png"),
    id: 70,
    linkUrl: "/plymouth"
  },
  {
    title: "pontiac",
    imgUrl: require("../../components/img/Logo/pontiac.png"),
    id: 71,
    linkUrl: "/pontiac"
  },
  {
    title: "porsche",
    imgUrl: require("../../components/img/Logo/porsche.png"),
    id: 72,
    linkUrl: "/porsche"
  },
  {
    title: "reliant",
    imgUrl: require("../../components/img/Logo/reliant.png"),
    id: 73,
    linkUrl: "/reliant"
  },
  {
    title: "renault",
    imgUrl: require("../../components/img/Logo/renault.png"),
    id: 74,
    linkUrl: "/renault"
  },
  {
    title: "riley",
    imgUrl: require("../../components/img/Logo/riley.png"),
    id: 75,
    linkUrl: "/riley"
  },
  {
    title: "rochdale",
    imgUrl: require("../../components/img/Logo/rochdale.png"),
    id: 76,
    linkUrl: "/rochdale"
  },
  {
    title: "rolls royce",
    imgUrl: require("../../components/img/Logo/rollsroyce.png"),
    id: 77,
    linkUrl: "/rolls-royce"
  },
  {
    title: "rover",
    imgUrl: require("../../components/img/Logo/rover.png"),
    id: 78,
    linkUrl: "/rover"
  },
  {
    title: "saab",
    imgUrl: require("../../components/img/Logo/saab.png"),
    id: 79,
    linkUrl: "/saab"
  },
  {
    title: "seat",
    imgUrl: require("../../components/img/Logo/seat.png"),
    id: 80,
    linkUrl: "/seat"
  },
  {
    title: "shelby",
    imgUrl: require("../../components/img/Logo/shelby.png"),
    id: 81,
    linkUrl: "/shelby"
  },
  {
    title: "simca",
    imgUrl: require("../../components/img/Logo/simca.png"),
    id: 82,
    linkUrl: "/simca"
  },
  {
    title: "singer",
    imgUrl: require("../../components/img/Logo/singer.png"),
    id: 83,
    linkUrl: "/singer"
  },
  {
    title: "skoda",
    imgUrl: require("../../components/img/Logo/skoda.png"),
    id: 84,
    linkUrl: "/skoda"
  },
  {
    title: "standard",
    imgUrl: require("../../components/img/Logo/standard.png"),
    id: 85,
    linkUrl: "/standard"
  },
  {
    title: "subaru",
    imgUrl: require("../../components/img/Logo/subaru.png"),
    id: 86,
    linkUrl: "/subaru"
  },
  {
    title: "sunbeam",
    imgUrl: require("../../components/img/Logo/Sunbeam.png"),
    id: 87,
    linkUrl: "/sunbeam"
  },
  {
    title: "suzuki",
    imgUrl: require("../../components/img/Logo/suzuki.png"),
    id: 88,
    linkUrl: "/suzuki"
  },
  {
    title: "swallow",
    imgUrl: require("../../components/img/Logo/swallow.png"),
    id: 89,
    linkUrl: "/swallow"
  },
  {
    title: "talbot",
    imgUrl: require("../../components/img/Logo/talbot.png"),
    id: 90,
    linkUrl: "/talbot"
  },
  {
    title: "toyota",
    imgUrl: require("../../components/img/Logo/toyota.png"),
    id: 91,
    linkUrl: "/toyota"
  },
  {
    title: "trident",
    imgUrl: require("../../components/img/Logo/trident.png"),
    id: 92,
    linkUrl: "/trident"
  },
  {
    title: "triumph",
    imgUrl: require("../../components/img/Logo/triumph.png"),
    id: 93,
    linkUrl: "/triumph"
  },
  {
    title: "turner",
    imgUrl: require("../../components/img/Logo/turner.png"),
    id: 94,
    linkUrl: "/turner"
  },
  {
    title: "tvr",
    imgUrl: require("../../components/img/Logo/tvr.png"),
    id: 95,
    linkUrl: "/tvr"
  },
  {
    title: "vanden plas",
    imgUrl: require("../../components/img/Logo/vandenplas.png"),
    id: 96,
    linkUrl: "/vandenplas"
  },
  {
    title: "vauxhall",
    imgUrl: require("../../components/img/Logo/vauxhall.png"),
    id: 97,
    linkUrl: "/vauxhall"
  },
  {
    title: "volkswagen",
    imgUrl: require("../../components/img/Logo/vw.png"),
    id: 98,
    linkUrl: "/volkswagen"
  },
  {
    title: "volvo",
    imgUrl: require("../../components/img/Logo/volvo.png"),
    id: 99,
    linkUrl: "/volvo"
  },
  {
    title: "wolseley",
    imgUrl: require("../../components/img/Logo/wolseley.png"),
    id: 100,
    linkUrl: "/wolseley"
  }
];

const directoryMakerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryMakerReducer;

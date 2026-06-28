import type { Stop } from "../components/StopList";

export const STOPS: Stop[] = [
  // ---- Wizarding World ----
  {
    id: "kings-cross",
    name: "King's Cross Station",
    area: "Camden · Platform 9¾",
    cat: "magic",
    lat: 51.5320,
    lng: -0.1235,
    glyph: "train",
    blurb: "This working mainline station moonlights as the magical platform from the books and films — half a luggage trolley is bricked permanently into the wall as a photo spot, with a Harry Potter shop right beside it.",
    tip: "Free to visit. Go right at opening (~8am) — the trolley-photo queue gets long by midday."
  },
  {
    id: "leadenhall-market",
    name: "Leadenhall Market",
    area: "The City · Diagon Alley",
    cat: "magic",
    lat: 51.5132,
    lng: -0.0831,
    glyph: "marketArch",
    blurb: "A dazzling Victorian covered market, all wrought iron and glass dating to 1881, whose cobbled lane was filmed as the entrance to Diagon Alley.",
    tip: "A real working market — go around lunchtime for food stalls, and look up at the ornate roof."
  },
  {
    id: "australia-house",
    name: "Australia House",
    area: "Strand · Gringotts Bank",
    cat: "magic",
    lat: 51.5118,
    lng: -0.1145,
    glyph: "bankFacade",
    blurb: "The marble entrance hall of this still-functioning Australian government building was filmed as the interior of Gringotts Wizarding Bank.",
    tip: "It's a working office, so you can't go inside — admire the grand Strand-facing facade from the pavement instead."
  },
  {
    id: "millennium-bridge",
    name: "Millennium Bridge",
    area: "Thames · Death Eater attack",
    cat: "magic",
    lat: 51.5095,
    lng: -0.0985,
    glyph: "bridgeCables",
    blurb: "This sleek steel footbridge across the Thames is the one Death Eaters dramatically destroy in the opening of Half-Blood Prince.",
    tip: "Free and always open — go at golden hour for a skyline shot, St Paul's on one side, Tate Modern on the other."
  },
  {
    id: "minalima",
    name: "House of MinaLima",
    area: "Soho · Greek Street",
    cat: "magic",
    lat: 51.5142,
    lng: -0.1329,
    glyph: "openBook",
    blurb: "A small free gallery and shop in Soho run by the actual graphic designers behind every printed prop and piece of signage in all eight Harry Potter films.",
    tip: "No ticket needed — the most 'real' Harry Potter experience inside London itself. Budget 30–45 minutes."
  },
  {
    id: "goodwins-court",
    name: "Goodwin's Court",
    area: "Covent Garden · Diagon Alley inspo",
    cat: "magic",
    lat: 51.5117,
    lng: -0.1267,
    glyph: "lantern",
    blurb: "A narrow, gas-lamp-lit Georgian alley near Covent Garden, long rumoured to have inspired the crooked shopfronts of Diagon Alley.",
    tip: "Easy to miss — it's two minutes from busy Covent Garden but almost always empty."
  },
  {
    id: "warner-bros-studio",
    name: "Warner Bros. Studio Tour",
    area: "Leavesden, Watford · day trip",
    cat: "magic",
    lat: 51.6925,
    lng: -0.4163,
    glyph: "clapper",
    blurb: "The real film studio where all eight movies were shot, now a walk-through tour with the original Great Hall, Diagon Alley set, costumes, and props.",
    tip: "About 25 minutes from central London by train + shuttle. Book weeks ahead online and set aside a half-day."
  },

  // ---- Page & Screen ----
  {
    id: "sherlock-holmes",
    name: "221B Baker Street",
    area: "Marylebone · Sherlock Holmes Museum",
    cat: "lit",
    lat: 51.5237,
    lng: -0.1586,
    glyph: "magnifier",
    blurb: "A Victorian townhouse address that never officially existed until the city renumbered Baker Street for it — now a small museum kitted out exactly as Conan Doyle described Holmes and Watson's lodgings.",
    tip: "Small and almost always queued — go right at opening and budget about 30 minutes inside."
  },
  {
    id: "paddington-bear",
    name: "Paddington Bear Statue",
    area: "Paddington Station · Platform 1",
    cat: "lit",
    lat: 51.5158,
    lng: -0.1750,
    glyph: "bear",
    blurb: "A small bronze statue of the marmalade-loving bear from \"darkest Peru,\" tucked near Platform 1 of the very station where his books and films begin.",
    tip: "Easy to miss in the commuter rush — it's right by the café area, worth a five-minute detour if you're passing through."
  },
  {
    id: "abbey-road",
    name: "Abbey Road Crossing",
    area: "St John's Wood · Beatles' Abbey Road Studios",
    cat: "lit",
    lat: 51.5320,
    lng: -0.1778,
    glyph: "zebra",
    blurb: "The ordinary zebra crossing outside Abbey Road Studios, immortalised on the cover of the Beatles' 1969 album of the same name.",
    tip: "It's a real, busy road — watch for traffic if you stop to recreate the cover shot. There's a live webcam online if you want a preview first."
  },

  // ---- London Icons ----
  {
    id: "tower-of-london",
    name: "Tower of London",
    area: "Tower Hill",
    cat: "classic",
    lat: 51.5081,
    lng: -0.0759,
    glyph: "turret",
    blurb: "A nearly 1,000-year-old royal fortress on the Thames, home to the Crown Jewels and the famously theatrical Yeoman Warders, or 'Beefeaters.'",
    tip: "Free Beefeater tours are included with entry — some of the best guided tours in the city, don't skip one."
  },
  {
    id: "tower-bridge",
    name: "Tower Bridge",
    area: "Thames, beside the Tower",
    cat: "classic",
    lat: 51.5055,
    lng: -0.0754,
    glyph: "twinTowers",
    blurb: "The Victorian bascule bridge beside the Tower of London — often mixed up with the much plainer 'London Bridge' just upstream.",
    tip: "Pay the small upgrade for the glass-floor walkway 42m above the road, and check the bridge-lift schedule online."
  },
  {
    id: "westminster-abbey",
    name: "Westminster Abbey",
    area: "Westminster",
    cat: "classic",
    lat: 51.4994,
    lng: -0.1273,
    glyph: "roseWindow",
    blurb: "The Gothic church where British monarchs have been crowned since 1066, and final resting place of poets, scientists, and statesmen alike.",
    tip: "Poets' Corner alone — Chaucer, Dickens, Austen, Hawking — makes the ticket worth it."
  },
  {
    id: "big-ben",
    name: "Big Ben & Parliament",
    area: "Westminster, on the Thames",
    cat: "classic",
    lat: 51.5007,
    lng: -0.1246,
    glyph: "clockTower",
    blurb: "The clock tower, officially the Elizabeth Tower, standing over the Houses of Parliament right on the riverbank.",
    tip: "You can't go inside without booking far ahead, but the view from Westminster Bridge after dark is a classic for a reason."
  },
  {
    id: "buckingham-palace",
    name: "Buckingham Palace",
    area: "St James's",
    cat: "classic",
    lat: 51.5014,
    lng: -0.1419,
    glyph: "crown",
    blurb: "The monarch's official London residence, fronted by the huge forecourt where the Changing of the Guard happens.",
    tip: "Check the published schedule before going — the ceremony doesn't run daily, but it's free when it does."
  },
  {
    id: "british-museum",
    name: "British Museum",
    area: "Bloomsbury",
    cat: "classic",
    lat: 51.5194,
    lng: -0.1270,
    glyph: "urn",
    blurb: "One of the world's great museums, completely free to enter, home to the Rosetta Stone, Egyptian mummies, and the Parthenon sculptures.",
    tip: "It's enormous — pick 2–3 galleries rather than trying to see everything in one visit."
  },
  {
    id: "london-eye",
    name: "London Eye",
    area: "South Bank",
    cat: "classic",
    lat: 51.5033,
    lng: -0.1196,
    glyph: "ferrisWheel",
    blurb: "A 135m observation wheel on the South Bank with sweeping views over the Thames and the whole city skyline.",
    tip: "Book a sunset slot online in advance for the best light and a shorter queue."
  },
  {
    id: "st-pauls",
    name: "St Paul's Cathedral",
    area: "The City",
    cat: "classic",
    lat: 51.5138,
    lng: -0.0984,
    glyph: "dome",
    blurb: "Christopher Wren's domed masterpiece, rebuilt after the Great Fire of London and a survivor of the Blitz.",
    tip: "Climb the 528 steps to the Golden Gallery for one of the best views in the city — try the Whispering Gallery on the way up."
  },

  // ---- Hidden Gems ----
  {
    id: "gods-own-junkyard",
    name: "God's Own Junkyard",
    area: "Walthamstow",
    cat: "gem",
    lat: 51.5868,
    lng: -0.0166,
    glyph: "bolt",
    blurb: "A vast Walthamstow warehouse packed wall-to-wall with vintage and new neon signs rescued from old cinemas, shops, and film sets.",
    tip: "Far enough out that it barely sees tourist crowds — there's a small café inside too."
  },
  {
    id: "sky-garden",
    name: "Sky Garden",
    area: "The City · 20 Fenchurch St",
    cat: "gem",
    lat: 51.5113,
    lng: -0.0832,
    glyph: "fern",
    blurb: "A free public garden at the top of 'the Walkie-Talkie' tower, with greenery and 360° views over the City.",
    tip: "Free, but you must book a timed slot online ahead of time — the secret alternative to paid viewpoints."
  },
  {
    id: "little-venice",
    name: "Little Venice",
    area: "Paddington / Maida Vale",
    cat: "gem",
    lat: 51.5226,
    lng: -0.1826,
    glyph: "boat",
    blurb: "A quiet, picturesque junction of canals in west London, lined with houseboats and waterside cafés.",
    tip: "Walk the towpath toward Camden, or rent a canal boat for a slower-paced side of the city."
  },
  {
    id: "neals-yard",
    name: "Neal's Yard",
    area: "Covent Garden",
    cat: "gem",
    lat: 51.5142,
    lng: -0.1265,
    glyph: "arcs",
    blurb: "A tiny, hidden, rainbow-painted courtyard tucked just off the streets near Covent Garden.",
    tip: "Blink and you'll miss the entrance — one of the most colourful corners in central London."
  },
  {
    id: "columbia-road",
    name: "Columbia Road Flower Market",
    area: "East London · Sundays only",
    cat: "gem",
    lat: 51.5302,
    lng: -0.0726,
    glyph: "tulip",
    blurb: "A Sunday-only East London street market where the whole road turns into a riot of flowers, plants, and market-seller banter.",
    tip: "Opens around 8am — go early for the best selection, then linger in the indie shops nearby."
  },
  {
    id: "soane-museum",
    name: "Sir John Soane's Museum",
    area: "Holborn",
    cat: "gem",
    lat: 51.5168,
    lng: -0.1166,
    glyph: "frame",
    blurb: "The eccentric former home of architect Sir John Soane, preserved exactly as he left it in 1837 and crammed with antiquities and curiosities.",
    tip: "Free entry and deliberately under-visited — like wandering through a Victorian curiosity cabinet."
  },
  {
    id: "highgate-cemetery",
    name: "Highgate Cemetery",
    area: "North London",
    cat: "gem",
    lat: 51.5673,
    lng: -0.1456,
    glyph: "cross",
    blurb: "An atmospheric Victorian hillside cemetery in north London, final resting place of Karl Marx and George Eliot among many others.",
    tip: "The older West Cemetery needs a booked guided tour — pair it with a walk on nearby Hampstead Heath."
  },
  {
    id: "notting-hill",
    name: "Notting Hill & Portobello Road",
    area: "West London",
    cat: "gem",
    lat: 51.5152,
    lng: -0.2057,
    glyph: "terrace",
    blurb: "Pastel-coloured townhouses and the famous Saturday antiques market made internationally known by the 1999 film of the same name.",
    tip: "Go Saturday for the full market, or any other day for quiet, colourful street photography."
  }
];

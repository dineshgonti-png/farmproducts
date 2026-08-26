/* ============================================================
   FarmProducts — catalogue
   Source: product list from Abhinav Reddy, 25 Aug 2026.
     · 10 turmeric (pasupu) varieties — "Black turmeric" was listed
       twice in the original message and is kept once here.
     · 6 other crops: sesame, popcorn, sweet corn, toor dal,
       jowar, bajra.

   ⚠ TO CONFIRM BEFORE THIS GOES TO CUSTOMERS:
     · price      — every figure below is a placeholder
     · unit       — pack sizes are assumed
     · curcumin   — indicative variety averages, not batch assays
     · origin     — where we actually source each variety
   ============================================================ */

window.FP_CATEGORIES = [
  { id:"turmeric", name:"Turmeric",  telugu:"Pasupu",     icon:"🫚", note:"10 varieties",        bg:"#fdeecb" },
  { id:"corn",     name:"Corn",      telugu:"Mokkajonna", icon:"🌽", note:"Sweet corn & popcorn", bg:"#f4f3d5" },
  { id:"millets",  name:"Millets",   telugu:"Chirudhanyalu", icon:"🌾", note:"Jowar & bajra",    bg:"#f7f0dd" },
  { id:"pulses",   name:"Pulses",    telugu:"Pappulu",    icon:"🫘", note:"Toor dal",            bg:"#f6e9d8" },
  { id:"oilseeds", name:"Oilseeds",  telugu:"Nune ginjalu", icon:"🌻", note:"Sesame",            bg:"#f7f2df" }
];

window.FP_PRODUCTS = [
  /* ---------- PASUPU · TURMERIC (10 varieties) ---------- */
  { id:1, name:"Lakadong", telugu:"", cat:"turmeric", origin:"Jaintia Hills, Meghalaya",
    unit:"1 kg", price:640, spec:"~7% curcumin", icon:"🫚", bg:"#fbe2b6", tags:["high-curcumin"],
    note:"The variety most people mean when they say high-curcumin turmeric. Deep ochre colour, slow-dried whole." },

  { id:2, name:"Rajendra Sonia", telugu:"", cat:"turmeric", origin:"Bihar",
    unit:"1 kg", price:580, spec:"~8% curcumin", icon:"🫚", bg:"#fdeecb", tags:["high-curcumin"],
    note:"A Rajendra Agricultural University release, grown for curcumin rather than bulk. Short, dense fingers." },

  { id:3, name:"Pragati", telugu:"", cat:"turmeric", origin:"Telangana",
    unit:"1 kg", price:520, spec:"~6.9% curcumin", icon:"🫚", bg:"#fdf1d1", tags:["high-curcumin"],
    note:"Balances curcumin with yield, which is why it has spread fast across the Telangana belt." },

  { id:4, name:"BSR-2", telugu:"", cat:"turmeric", origin:"Erode belt, Tamil Nadu",
    unit:"1 kg", price:420, spec:"Bold fingers", icon:"🫚", bg:"#fbe7c3", tags:["seed"],
    note:"A Bhavanisagar release. Bold, even fingers and a reliable cropper — a workhorse variety." },

  { id:5, name:"Rajapuri", telugu:"", cat:"turmeric", origin:"Sangli, Maharashtra",
    unit:"1 kg", price:460, spec:"Large rhizomes", icon:"🫚", bg:"#f8e9cf", tags:[],
    note:"Prized for the size of its mother rhizomes. Milder colour, sought after by traders who sell by appearance." },

  { id:6, name:"Salem", telugu:"", cat:"turmeric", origin:"Salem, Tamil Nadu",
    unit:"1 kg", price:400, spec:"Bright colour", icon:"🫚", bg:"#fdeaca", tags:[],
    note:"The market standard for decades. Bright yellow, boiled and polished the traditional way." },

  { id:7, name:"NDH", telugu:"", cat:"turmeric", origin:"Maharashtra",
    unit:"1 kg", price:440, spec:"High yielding", icon:"🫚", bg:"#fdeecb", tags:["seed"],
    note:"A selected high-yielding line, grown mainly by farmers buying seed rhizome for the next season." },

  { id:8, name:"Armoor Local", telugu:"", cat:"turmeric", origin:"Armoor, Nizamabad, Telangana",
    unit:"1 kg", price:380, spec:"Local landrace", icon:"🫚", bg:"#f7ecd6", tags:["local"],
    note:"The landrace of the Armoor belt — India's turmeric heartland. Grown here long before the released varieties arrived." },

  { id:9, name:"Black Turmeric", telugu:"Nalla Pasupu", cat:"turmeric", origin:"Central India",
    unit:"250 g", price:850, spec:"Curcuma caesia", icon:"⚫", bg:"#ece5da", tags:["rare"],
    note:"Bluish-black flesh and a sharp camphor smell. Rare, slow to bulk up, and mostly bought for traditional and ritual use." },

  { id:10, name:"Mango Ginger", telugu:"Mamidi Allam", cat:"turmeric", origin:"Telangana",
    unit:"500 g", price:260, spec:"Curcuma amada", icon:"🥭", bg:"#f3ecd3", tags:["rare"],
    note:"A Curcuma that smells like raw mango. Goes into pickle and chutney rather than the masala dabba." },

  /* ---------- MOKKAJONNA · CORN ---------- */
  { id:11, name:"Sweet Corn", telugu:"Tiyya Mokkajonna", cat:"corn", origin:"Telangana",
    unit:"4 cobs", price:150, spec:"Table variety", icon:"🌽", bg:"#f4f3d5", tags:[],
    note:"Cut with husks on and moved quickly — the sugars start turning to starch the moment the cob leaves the plant." },

  { id:12, name:"Popcorn Maize", telugu:"", cat:"corn", origin:"Telangana",
    unit:"1 kg", price:180, spec:"Popping grade", icon:"🍿", bg:"#f3f4e4", tags:[],
    note:"Hard-shelled popping maize, dried down to the moisture level that actually pops rather than splits." },

  /* ---------- CHIRUDHANYALU · MILLETS ---------- */
  { id:13, name:"Jowar", telugu:"Jonnalu", cat:"millets", origin:"Telangana",
    unit:"5 kg", price:340, spec:"Sorghum, whole grain", icon:"🌾", bg:"#f7f0dd", tags:[],
    note:"Whole sorghum grain, cleaned and graded. For jonna rotte, and for milling into flour at home." },

  { id:14, name:"Bajra", telugu:"Sajjalu", cat:"millets", origin:"Telangana",
    unit:"5 kg", price:360, spec:"Pearl millet, whole grain", icon:"🌾", bg:"#f5eddb", tags:[],
    note:"Pearl millet — the winter grain. Denser and warmer-eating than jowar, with a nuttier finish." },

  /* ---------- PAPPULU · PULSES ---------- */
  { id:15, name:"Toor Dal", telugu:"Kandi Pappu", cat:"pulses", origin:"Telangana",
    unit:"1 kg", price:190, spec:"Unpolished", icon:"🫘", bg:"#f6e9d8", tags:[],
    note:"Split pigeon pea, unpolished — no oil or water polish, so it looks duller and cooks softer." },

  /* ---------- NUNE GINJALU · OILSEEDS ---------- */
  { id:16, name:"Sesame Seeds", telugu:"Nuvvulu", cat:"oilseeds", origin:"Telangana",
    unit:"500 g", price:170, spec:"Cleaned, sortex", icon:"🌻", bg:"#f7f2df", tags:[],
    note:"Cleaned white sesame for laddu, podi and cold-pressing. Sortex-graded to keep grit and stones out." }
];

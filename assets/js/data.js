/* FarmProducts — catalogue data (shared by home + shop)
   Two product lines: organic TURMERIC and organic CORN */
window.FP_CATEGORIES = [
  { id:"turmeric-root",  name:"Turmeric Root",    icon:"🫚", note:"Fresh & dried fingers", bg:"#fdeecb" },
  { id:"turmeric-powder",name:"Turmeric Powder",  icon:"🟡", note:"Stone-ground, high curcumin", bg:"#fdf1d1" },
  { id:"turmeric-wellness",name:"Turmeric Wellness",icon:"🍵",note:"Latte, capsules, pickle", bg:"#f7ecd6" },
  { id:"corn-fresh",     name:"Fresh Corn",       icon:"🌽", note:"Cobs, baby corn, kernels", bg:"#f4f3d5" },
  { id:"corn-flour",     name:"Corn Flour & Meal",icon:"🌾", note:"Makki atta, polenta, grits", bg:"#f7f0dd" },
  { id:"popcorn",        name:"Popcorn & Snacks", icon:"🍿", note:"Kernels & roasted corn", bg:"#f3f4e4" }
];

/* price in INR — farm attribution and curcumin %, the trust cues
   organic marketplaces lean on */
window.FP_PRODUCTS = [
  /* ---------- TURMERIC: root ---------- */
  { id:1,  name:"Fresh Turmeric Root",          cat:"turmeric-root",   farm:"Erode Spice Farms",   unit:"500 g",  price:120, was:150, rating:4.7, reviews:184, icon:"🫚", bg:"#fdeaca", tags:["sale","seasonal"],
    note:"Just-dug rhizomes, earthy and juicy — grate into dals, milk or pickles." },
  { id:2,  name:"Lakadong Turmeric Fingers",    cat:"turmeric-root",   farm:"Jaintia Hills Co-op", unit:"250 g",  price:340, was:null,rating:4.9, reviews:412, icon:"🫚", bg:"#fbe2b6", tags:["bestseller"],
    note:"Meghalaya's famous Lakadong — 7.2% curcumin, sun-dried whole." },
  { id:3,  name:"Wild Kasturi Turmeric",        cat:"turmeric-root",   farm:"Nilgiri Wildcrafters",unit:"200 g",  price:265, was:null,rating:4.6, reviews:97,  icon:"🌿", bg:"#f3ecd3", tags:["new"],
    note:"Aromatic Curcuma aromatica — for face packs and ubtan, not for cooking." },
  { id:4,  name:"Salem Turmeric Fingers",       cat:"turmeric-root",   farm:"Erode Spice Farms",   unit:"1 kg",   price:520, was:600, rating:4.5, reviews:126, icon:"🫚", bg:"#fdeecb", tags:["sale"],
    note:"Classic Salem variety, boiled and polished the traditional way." },
  { id:5,  name:"Black Turmeric (Kali Haldi)",  cat:"turmeric-root",   farm:"Bastar Tribal Farms", unit:"100 g",  price:480, was:null,rating:4.4, reviews:53,  icon:"⚫", bg:"#ece5da", tags:["new"],
    note:"Rare Curcuma caesia grown by tribal collectives in Bastar." },

  /* ---------- TURMERIC: powder ---------- */
  { id:6,  name:"Lakadong Turmeric Powder",     cat:"turmeric-powder", farm:"Jaintia Hills Co-op", unit:"250 g",  price:295, was:340, rating:4.9, reviews:628, icon:"🟡", bg:"#fdf1d1", tags:["sale","bestseller"],
    note:"Stone-ground in small batches. Deep ochre colour, 7%+ curcumin." },
  { id:7,  name:"Everyday Haldi Powder",        cat:"turmeric-powder", farm:"Erode Spice Farms",   unit:"500 g",  price:210, was:null,rating:4.6, reviews:341, icon:"🟡", bg:"#fdf3da", tags:["bestseller"],
    note:"Your daily cooking turmeric — nothing added, nothing polished off." },
  { id:8,  name:"High-Curcumin Turmeric",       cat:"turmeric-powder", farm:"Sangli Curcumin Co.", unit:"200 g",  price:380, was:null,rating:4.7, reviews:158, icon:"🟠", bg:"#fbe7c3", tags:[],
    note:"Lab-tested at 8.1% curcumin. Batch report on every pack." },
  { id:9,  name:"Turmeric & Black Pepper Mix",  cat:"turmeric-powder", farm:"Sangli Curcumin Co.", unit:"150 g",  price:245, was:280, rating:4.5, reviews:112, icon:"🌶️", bg:"#f8e9cf", tags:["sale"],
    note:"Piperine blend — the pairing that helps curcumin absorb." },
  { id:10, name:"Kasturi Turmeric Powder",      cat:"turmeric-powder", farm:"Nilgiri Wildcrafters",unit:"100 g",  price:190, was:null,rating:4.4, reviews:76,  icon:"🌼", bg:"#f5f0dc", tags:[],
    note:"Cosmetic-grade, non-staining. For ubtan, masks and bath soaks." },

  /* ---------- TURMERIC: wellness ---------- */
  { id:11, name:"Golden Milk Latte Mix",        cat:"turmeric-wellness",farm:"FarmProducts Kitchen",unit:"250 g", price:420, was:490, rating:4.8, reviews:389, icon:"🍵", bg:"#f7ecd6", tags:["sale","bestseller"],
    note:"Turmeric, cardamom, ceylon cinnamon and jaggery. Just add hot milk." },
  { id:13, name:"Curcumin Capsules",            cat:"turmeric-wellness",farm:"Sangli Curcumin Co.", unit:"60 caps",price:690, was:790, rating:4.6, reviews:203, icon:"💊", bg:"#f6ead2", tags:["sale"],
    note:"500 mg extract with piperine. Vegetarian pullulan shells." },
  { id:14, name:"Turmeric Pickle (Haldi Achar)",cat:"turmeric-wellness",farm:"FarmProducts Kitchen",unit:"300 g",  price:280, was:null,rating:4.5, reviews:131, icon:"🫙", bg:"#fbe9c9", tags:[],
    note:"Fresh root, lime, mustard and rock salt. Winter batch only." },

  /* ---------- CORN: fresh ---------- */
  { id:16, name:"Sweet Corn Cobs",              cat:"corn-fresh",      farm:"Malwa Corn Growers",  unit:"4 cobs", price:160, was:190, rating:4.7, reviews:296, icon:"🌽", bg:"#f4f3d5", tags:["sale","bestseller"],
    note:"Picked at dawn, husks on — sugars stay sweet for 48 hours." },
  { id:17, name:"Tender Baby Corn",             cat:"corn-fresh",      farm:"Green Acre Farm",     unit:"250 g",  price:95,  was:null,rating:4.5, reviews:142, icon:"🌽", bg:"#f0f2cf", tags:[],
    note:"Hand-picked at finger size. Crisp enough to eat raw." },
  { id:18, name:"Fresh Corn Kernels",           cat:"corn-fresh",      farm:"Malwa Corn Growers",  unit:"500 g",  price:130, was:null,rating:4.4, reviews:87,  icon:"🥣", bg:"#f6f4d9", tags:[],
    note:"Cut and vacuum-packed same day. No blanching, no preservatives." },
  { id:19, name:"Heirloom Blue Corn Cobs",      cat:"corn-fresh",      farm:"Deccan Heritage Seeds",unit:"3 cobs", price:240, was:null,rating:4.6, reviews:64,  icon:"🟣", bg:"#e9e6f0", tags:["new","seasonal"],
    note:"Rare open-pollinated blue variety, nutty and deeply coloured." },
  { id:20, name:"Sweet Corn Family Pack",       cat:"corn-fresh",      farm:"Malwa Corn Growers",  unit:"10 cobs",price:360, was:420, rating:4.6, reviews:118, icon:"🌽", bg:"#f4f3d5", tags:["sale"],
    note:"Bulk cobs for the week — works out to ₹36 a cob." },

  /* ---------- CORN: flour & meal ---------- */
  { id:21, name:"Makki Atta (Corn Flour)",      cat:"corn-flour",      farm:"Malwa Corn Growers",  unit:"1 kg",   price:145, was:170, rating:4.7, reviews:264, icon:"🌾", bg:"#f7f0dd", tags:["sale","bestseller"],
    note:"Stone-milled whole corn. The one for makki di roti." },
  { id:22, name:"Coarse Cornmeal / Polenta",    cat:"corn-flour",      farm:"Deccan Heritage Seeds",unit:"800 g", price:210, was:null,rating:4.5, reviews:96,  icon:"🥣", bg:"#f5eed6", tags:[],
    note:"Slow-milled coarse grind for polenta, upma and cornbread." },
  { id:23, name:"Blue Corn Flour",              cat:"corn-flour",      farm:"Deccan Heritage Seeds",unit:"500 g", price:290, was:null,rating:4.6, reviews:58,  icon:"🟣", bg:"#ebe8f1", tags:["new"],
    note:"Anthocyanin-rich heirloom flour for tortillas and pancakes." },
  { id:24, name:"Corn Grits (Samp)",            cat:"corn-flour",      farm:"Malwa Corn Growers",  unit:"1 kg",   price:165, was:195, rating:4.3, reviews:71,  icon:"🥄", bg:"#f6f1dc", tags:["sale"],
    note:"Cracked corn for porridge and slow-simmered breakfasts." },
  { id:25, name:"Corn Starch, Unbleached",      cat:"corn-flour",      farm:"Malwa Corn Growers",  unit:"400 g",  price:120, was:null,rating:4.2, reviews:49,  icon:"🥛", bg:"#f7f5e6", tags:[],
    note:"Chemical-free extraction. Thickens without the chalky aftertaste." },

  /* ---------- POPCORN & SNACKS ---------- */
  { id:26, name:"Butterfly Popcorn Kernels",    cat:"popcorn",         farm:"Malwa Corn Growers",  unit:"1 kg",   price:230, was:270, rating:4.8, reviews:372, icon:"🍿", bg:"#f3f4e4", tags:["sale","bestseller"],
    note:"98% pop rate. Big-winged flakes that hold butter and salt." },
  { id:27, name:"Mushroom Popcorn Kernels",     cat:"popcorn",         farm:"Deccan Heritage Seeds",unit:"800 g", price:245, was:null,rating:4.6, reviews:118, icon:"🍿", bg:"#f1f2e0", tags:[],
    note:"Round, sturdy pops — the shape caramel coatings need." },
  { id:28, name:"Turmeric-Salted Popcorn",      cat:"popcorn",         farm:"FarmProducts Kitchen",unit:"150 g",  price:180, was:null,rating:4.7, reviews:206, icon:"🟡", bg:"#fdf2d8", tags:["new","bestseller"],
    note:"Our two crops in one bag — air-popped, dusted with Lakadong." },
  { id:29, name:"Roasted Corn Nuts",            cat:"popcorn",         farm:"FarmProducts Kitchen",unit:"200 g",  price:160, was:190, rating:4.4, reviews:94,  icon:"🥜", bg:"#f4eeda", tags:["sale"],
    note:"Slow-roasted whole kernels with rock salt. Nothing fried." },
  { id:30, name:"Corn Silk Herbal Tea",         cat:"popcorn",         farm:"Malwa Corn Growers",  unit:"100 g",  price:340, was:null,rating:4.3, reviews:47,  icon:"🍵", bg:"#f2f3df", tags:["new"],
    note:"Shade-dried silk from our own cobs — a gentle, grassy infusion." }
];

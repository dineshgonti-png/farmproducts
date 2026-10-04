/* ============================================================
   FarmProducts , artwork
   Flat SVG illustrations replacing the emoji that stood in
   earlier. Product art is drawn on a 64x64 box; UI icons are
   24x24 and stroke in currentColor so they take the colour of
   whatever they sit in.
   ============================================================ */

window.FP_ART = {

  /* ---------- logo mark, sits on the green tile ---------- */
  logoMark:
    '<svg viewBox="0 0 64 64" class="art" role="img" aria-label="FarmProducts">' +
      '<g transform="rotate(-20 32 32)">' +
        '<rect x="16" y="26" width="32" height="14" rx="7" fill="#F4C53F"/>' +
        '<path d="M26 27v12M32 26.5v13M38 27v12" stroke="#C9972A" stroke-width="1.8" stroke-linecap="round"/>' +
      '</g>' +
    '</svg>',


  /* ---------- turmeric rhizome ---------- */
  turmeric:
    '<svg viewBox="0 0 64 64" class="art" role="img" aria-label="Turmeric rhizome">' +
      '<g transform="rotate(-15 32 34)">' +
        '<rect x="14" y="27" width="36" height="16" rx="8" fill="#E2A33F"/>' +
        '<rect x="14" y="27" width="36" height="16" rx="8" fill="none" stroke="#B4761F" stroke-width="1.6"/>' +
        '<path d="M24 28v14M32 27.5v15M40 28v14" stroke="#C98B2C" stroke-width="1.4" stroke-linecap="round"/>' +
      '</g>' +
      '<g transform="rotate(-58 19 24)">' +
        '<rect x="7" y="19" width="22" height="11" rx="5.5" fill="#D9932F"/>' +
        '<rect x="7" y="19" width="22" height="11" rx="5.5" fill="none" stroke="#B4761F" stroke-width="1.5"/>' +
      '</g>' +
      '<g transform="rotate(48 46 25)">' +
        '<rect x="35" y="20" width="21" height="10" rx="5" fill="#D9932F"/>' +
        '<rect x="35" y="20" width="21" height="10" rx="5" fill="none" stroke="#B4761F" stroke-width="1.5"/>' +
      '</g>' +
    '</svg>',

  /* ---------- black turmeric ---------- */
  turmericBlack:
    '<svg viewBox="0 0 64 64" class="art" role="img" aria-label="Black turmeric rhizome">' +
      '<g transform="rotate(-15 32 34)">' +
        '<rect x="14" y="27" width="36" height="16" rx="8" fill="#4A4550"/>' +
        '<rect x="14" y="27" width="36" height="16" rx="8" fill="none" stroke="#2C2932" stroke-width="1.6"/>' +
        '<path d="M24 28v14M32 27.5v15M40 28v14" stroke="#615B6B" stroke-width="1.4" stroke-linecap="round"/>' +
      '</g>' +
      '<g transform="rotate(-58 19 24)">' +
        '<rect x="7" y="19" width="22" height="11" rx="5.5" fill="#5B5564"/>' +
        '<rect x="7" y="19" width="22" height="11" rx="5.5" fill="none" stroke="#2C2932" stroke-width="1.5"/>' +
      '</g>' +
      '<g transform="rotate(48 46 25)">' +
        '<rect x="35" y="20" width="21" height="10" rx="5" fill="#5B5564"/>' +
        '<rect x="35" y="20" width="21" height="10" rx="5" fill="none" stroke="#2C2932" stroke-width="1.5"/>' +
      '</g>' +
    '</svg>',

  /* ---------- mango ginger ---------- */
  mangoGinger:
    '<svg viewBox="0 0 64 64" class="art" role="img" aria-label="Mango ginger rhizome">' +
      '<g transform="rotate(-15 32 34)">' +
        '<rect x="14" y="27" width="36" height="16" rx="8" fill="#D8C77E"/>' +
        '<rect x="14" y="27" width="36" height="16" rx="8" fill="none" stroke="#9A8A42" stroke-width="1.6"/>' +
        '<path d="M24 28v14M32 27.5v15M40 28v14" stroke="#B9A75E" stroke-width="1.4" stroke-linecap="round"/>' +
      '</g>' +
      '<g transform="rotate(-58 19 24)">' +
        '<rect x="7" y="19" width="22" height="11" rx="5.5" fill="#CFBC6E"/>' +
        '<rect x="7" y="19" width="22" height="11" rx="5.5" fill="none" stroke="#9A8A42" stroke-width="1.5"/>' +
      '</g>' +
      '<path d="M44 18c6-4 12-3 14 1-3 5-9 6-14-1z" fill="#8FB04A"/>' +
    '</svg>',

  /* ---------- sweet corn ---------- */
  corn:
    '<svg viewBox="0 0 64 64" class="art" role="img" aria-label="Corn cob">' +
      '<path d="M22 50C13 44 9 32 12 20c9 4 13 16 10 30z" fill="#7FA73F"/>' +
      '<path d="M42 50c9-6 13-18 10-30-9 4-13 16-10 30z" fill="#8FB84A"/>' +
      '<rect x="23" y="10" width="18" height="44" rx="9" fill="#F4C53F"/>' +
      '<rect x="23" y="10" width="18" height="44" rx="9" fill="none" stroke="#BE9220" stroke-width="1.6"/>' +
      '<g fill="#D9A827">' +
        '<circle cx="28.5" cy="19" r="1.9"/><circle cx="35.5" cy="19" r="1.9"/>' +
        '<circle cx="32" cy="23.5" r="1.9"/>' +
        '<circle cx="28.5" cy="28" r="1.9"/><circle cx="35.5" cy="28" r="1.9"/>' +
        '<circle cx="32" cy="32.5" r="1.9"/>' +
        '<circle cx="28.5" cy="37" r="1.9"/><circle cx="35.5" cy="37" r="1.9"/>' +
        '<circle cx="32" cy="41.5" r="1.9"/>' +
        '<circle cx="28.5" cy="46" r="1.9"/><circle cx="35.5" cy="46" r="1.9"/>' +
      '</g>' +
    '</svg>',

  /* ---------- popcorn ---------- */
  popcorn:
    '<svg viewBox="0 0 64 64" class="art" role="img" aria-label="Popped corn">' +
      '<g fill="#FDF6E3" stroke="#D8C390" stroke-width="1.5" stroke-linejoin="round">' +
        '<path d="M31 11a7 7 0 0 1 11 3 7 7 0 0 1 6 10 7 7 0 0 1-9 8 7 7 0 0 1-12-2 7 7 0 0 1-3-11 7 7 0 0 1 7-8z"/>' +
        '<path d="M17 31a6 6 0 0 1 9 2 6 6 0 0 1 5 9 6 6 0 0 1-8 6 6 6 0 0 1-10-2 6 6 0 0 1-2-9 6 6 0 0 1 6-6z"/>' +
        '<path d="M41 36a6 6 0 0 1 9 2 6 6 0 0 1 5 9 6 6 0 0 1-8 6 6 6 0 0 1-10-2 6 6 0 0 1-2-9 6 6 0 0 1 6-6z"/>' +
      '</g>' +
      '<circle cx="31" cy="51" r="4" fill="#E8B23A" stroke="#BE8A22" stroke-width="1.3"/>' +
    '</svg>',

  /* ---------- millet ---------- */
  millet:
    '<svg viewBox="0 0 64 64" class="art" role="img" aria-label="Millet grain head">' +
      '<path d="M32 56V30" stroke="#7E8F45" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path d="M32 42c-8-1-11-7-11-7s6-2 11 2" fill="#9FAE55"/>' +
      '<path d="M32 48c8-1 11-7 11-7s-6-2-11 2" fill="#8DA049"/>' +
      '<g fill="#E0B451" stroke="#B5892C" stroke-width="1.1">' +
        '<ellipse cx="32" cy="9" rx="4" ry="5"/>' +
        '<ellipse cx="26" cy="15" rx="4" ry="5"/><ellipse cx="38" cy="15" rx="4" ry="5"/>' +
        '<ellipse cx="32" cy="18" rx="4" ry="5"/>' +
        '<ellipse cx="25" cy="24" rx="4" ry="5"/><ellipse cx="39" cy="24" rx="4" ry="5"/>' +
        '<ellipse cx="32" cy="27" rx="4" ry="5"/>' +
      '</g>' +
    '</svg>',

  /* ---------- toor dal ---------- */
  pulse:
    '<svg viewBox="0 0 64 64" class="art" role="img" aria-label="Split pulses">' +
      '<g fill="#E6A742" stroke="#BE8125" stroke-width="1.4">' +
        '<path d="M14 30a10 10 0 0 1 20 0z"/>' +
        '<path d="M30 46a10 10 0 0 1 20 0z"/>' +
        '<path d="M34 24a9 9 0 0 1 18 0z"/>' +
        '<path d="M12 48a9 9 0 0 1 18 0z"/>' +
      '</g>' +
    '</svg>',

  /* ---------- sesame ---------- */
  sesame:
    '<svg viewBox="0 0 64 64" class="art" role="img" aria-label="Sesame seeds">' +
      '<g fill="#F2E4C2" stroke="#CBB785" stroke-width="1.2">' +
        '<ellipse cx="22" cy="24" rx="7" ry="4.5" transform="rotate(-25 22 24)"/>' +
        '<ellipse cx="40" cy="20" rx="7" ry="4.5" transform="rotate(18 40 20)"/>' +
        '<ellipse cx="32" cy="34" rx="7" ry="4.5" transform="rotate(-8 32 34)"/>' +
        '<ellipse cx="18" cy="40" rx="7" ry="4.5" transform="rotate(32 18 40)"/>' +
        '<ellipse cx="44" cy="40" rx="7" ry="4.5" transform="rotate(-30 44 40)"/>' +
      '</g>' +
    '</svg>'
};

/* ---------- small UI icons, 24x24, currentColor ---------- */
window.FP_ICON = {
  basket:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M5 9h14l-1.2 9.2A2 2 0 0 1 15.8 20H8.2a2 2 0 0 1-2-1.8L5 9z"/><path d="M9 9 11 4M15 9 13 4"/><path d="M3.5 9h17"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
  menu:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  heart:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M12 20s-7-4.4-7-9.3A4 4 0 0 1 12 8a4 4 0 0 1 7 2.7C19 15.6 12 20 12 20z"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 5.2 2 2 0 0 1 6 3z"/></svg>',
  pin:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>',
  shop:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z"/><path d="M3 9l1.5-5h15L21 9"/><path d="M9.5 20v-5h5v5"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M5 12.5 10 17 19 7"/></svg>',
  tag:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M4 11.5V5a1 1 0 0 1 1-1h6.5L20 12.5 12.5 20 4 11.5z"/><circle cx="8.5" cy="8.5" r="1.6"/></svg>',
  flask:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M10 3v6.5L4.8 18A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-3L14 9.5V3"/><path d="M8.5 3h7"/><path d="M7 15h10"/></svg>',
  sieve:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M3 9h18l-2.5 9.4A2 2 0 0 1 16.6 20H7.4a2 2 0 0 1-1.9-1.6L3 9z"/><path d="M8 13h8M9 17h6"/></svg>',
  box:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7z"/><path d="M4 8.5 12 13l8-4.5M12 13v7"/></svg>',
  leaf:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M20 4C9 4 4 9 4 15a5 5 0 0 0 5 5c6 0 11-5 11-16z"/><path d="M4 20c4-6 8-9 13-11"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M14.5 8.5h2.2V5.2h-2.6c-2.3 0-3.8 1.5-3.8 3.9v1.6H8v3.2h2.3V21h3.3v-7.1h2.4l.4-3.2h-2.8V9.6c0-.7.3-1.1.9-1.1z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M11 9.8l4 2.2-4 2.2V9.8z"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>'
};

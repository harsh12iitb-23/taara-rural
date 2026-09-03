// src/data/skillData.ts

export const skillJsonData = {
  "dropdown_options": [
    { "value": "D01", "label": "Creative & Handicrafts" },
    { "value": "D02", "label": "Technology & IT" },
    { "value": "D03", "label": "Agriculture & Environment" },
    { "value": "D04", "label": "Trade & Commerce" },
    { "value": "D05", "label": "Health & Wellness" },
    { "value": "D06", "label": "Construction & Engineering" }
  ],
  "skill_map": {
    "D01": {
      "id": "D01",
      "name": "Creative & Handicrafts",
      "clusters": {
        "C01_01": {
          "id": "C01_01",
          "name": "Textile & Embroidery",
          "time_minutes": 20,
          "skills": [
            { "id": "S01_01_01", "name": "Embroidery Work" },
            { "id": "S01_01_02", "name": "Handloom Weaving" },
            { "id": "S01_01_03", "name": "Tailoring & Dressmaking" },
            { "id": "S01_01_04", "name": "Fabric Dyeing & Printing" },
            { "id": "S01_01_05", "name": "Knitting & Crochet" }
          ],
          "question_topics": ["fabric types", "stitch techniques", "traditional embroidery styles", "handloom alignment", "seam tailoring"]
        }
      }
    }
  }
};

export const textileEmbroideryQuestions = [
  {
    skillName: "Embroidery Work",
    type: "MCQ",
    question: "Which embroidery style, originating from Punjab, is characterised by geometric patterns stitched on the wrong side of the fabric creating a mirror effect on the front?",
    options: ["Chikankari", "Phulkari", "Kantha", "Aari"],
    correctIdx: 1,
    explanation: "Phulkari is done on coarse khaddar with darning stitch from the wrong side."
  },
  {
    skillName: "Embroidery Work",
    type: "Scenario",
    question: "A customer brings an expensive silk saree and wants traditional Lucknowi shadow work. Which combination is historically accurate?",
    options: [
      "Heavy khaddar wool with metallic gold zari thread",
      "Lightweight semi-transparent muslin/georgette with white cotton untwisted thread",
      "Thick denim with synthetic polyester threads",
      "Coarse jute with silk cords"
    ],
    correctIdx: 1,
    explanation: "Chikankari uses lightweight fabrics like chiffon/georgette/muslin."
  },
  {
    skillName: "Handloom Weaving",
    type: "MCQ",
    question: "In handloom weaving, what are the lengthwise threads held stationary on the loom called?",
    options: ["Weft", "Warp", "Shuttle", "Heald"],
    correctIdx: 1,
    explanation: "Warp represents the vertical threads."
  },
  {
    skillName: "Handloom Weaving",
    type: "Scenario",
    question: "While weaving an Ikat pattern, warp threads are slipping tension. What is the immediate correct action?",
    options: [
      "Continue weaving faster",
      "Pause, adjust the warp beam tension dogs, and insert a lease rod",
      "Spray water on the weft threads",
      "Cut the slipping threads"
    ],
    correctIdx: 1,
    explanation: "Lease rods and tension calibration keep the layout aligned."
  },
  {
    skillName: "Tailoring & Dressmaking",
    type: "MCQ",
    question: "Which seam is most suitable for sheer, lightweight fabrics to enclose raw edges completely?",
    options: ["Plain Seam", "French Seam", "Flat-Felled Seam", "Overlocked Seam"],
    correctIdx: 1,
    explanation: "A French seam encloses raw edges completely."
  },
  {
    skillName: "Tailoring & Dressmaking",
    type: "Scenario",
    question: "Drafting a blouse pattern for a 36-inch bust. How much ease and seam allowance should you add?",
    options: [
      "No ease and 0.25 inches allowance",
      "0.5 inches of wearing ease and 1.5 inches of seam allowance",
      "3 inches of ease",
      "Subtract 2 inches"
    ],
    correctIdx: 1,
    explanation: "Correct wearing ease is 0.5 inches."
  },
  {
    skillName: "Fabric Dyeing & Printing",
    type: "MCQ",
    question: "Which traditional Indian block printing technique uses mud/clay resist paste before indigo immersion?",
    options: ["Dabu Printing", "Ajrakh Printing", "Bagh Printing", "Kalamkari Printing"],
    correctIdx: 0,
    explanation: "Dabu printing uses a mud-resist paste."
  },
  {
    skillName: "Fabric Dyeing & Printing",
    type: "Scenario",
    question: "An Indigo dye bath is bright blue instead of yellowish-green. What chemical adjustment is required?",
    options: [
      "Add more sulfuric acid",
      "Add sodium hydrosulfite and lime/caustic soda for an alkaline, oxygen-free state",
      "Add common salt and boil",
      "Expose to direct sunlight"
    ],
    correctIdx: 1,
    explanation: "Indigo requires reduction via sodium hydrosulfite."
  },
  {
    skillName: "Knitting & Crochet",
    type: "MCQ",
    question: "In knitting, what fabric structure is formed by alternating rows of knit and purl stitches?",
    options: ["Garter Stitch", "Stockinette Stitch", "Rib Stitch", "Seed Stitch"],
    correctIdx: 1,
    explanation: "Stockinette fabric uses alternating rows."
  },
  {
    skillName: "Knitting & Crochet",
    type: "Scenario",
    question: "A beginner's wool scarf edges are curling. What technique keeps it flat?",
    options: [
      "Knit tighter",
      "Add a 3-5 stitch border of garter or seed stitch on edges",
      "Iron on high steam",
      "Switch to nylon"
    ],
    correctIdx: 1,
    explanation: "Garter or seed stitch borders counteract curling."
  }
];
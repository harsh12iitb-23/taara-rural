// src/data/skillData.ts

// src/data/skillData.ts

export const skillJsonData = {
  "dropdown_options": [
    { "value": "D01", "label": "Creative & Handicrafts" },
    { "value": "D02", "label": "Technology & IT" },
    { "value": "D03", "label": "Agriculture & Environment" }
  ]
};

// ─── STAGE 3: UNIVERSAL APTITUDE BANK ───
export const aptitudeQuestions = [
  {
    skillName: "Logical Reasoning",
    type: "Aptitude",
    question: "Which one does NOT belong with the others?",
    options: ["Hammer", "Screwdriver", "Wrench", "Onion"],
    correctIdx: 3,
    explanation: "The other three are tools; an onion is food."
  },
  {
    skillName: "Numerical Ability",
    type: "Aptitude",
    question: "A worker earns ₹350 per day. How much does she earn in 6 days?",
    options: ["₹2,000", "₹2,100", "₹1,900", "₹2,300"],
    correctIdx: 1,
    explanation: "350 x 6 = 2100."
  },
  {
    skillName: "Practical Reasoning",
    type: "Aptitude",
    question: "A bicycle chain keeps slipping off. What should you check first?",
    options: ["The tyre pressure", "The chain tension/looseness", "The seat height", "The paint colour"],
    correctIdx: 1,
    explanation: "Chain tension directly affects its ability to stay on the gears."
  },
  {
    skillName: "Data Interpretation",
    type: "Aptitude",
    question: "Mandi prices this week: Mon ₹22/kg, Tue ₹25/kg, Wed ₹20/kg, Thu ₹28/kg. On which day should a farmer sell to get the best price?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correctIdx: 3,
    explanation: "Thursday has the highest price at 28/kg."
  }
];

// ─── STAGE 4: UNIVERSAL SITUATIONAL JUDGEMENT BANK ───
export const situationalQuestions = [
  {
    skillName: "Work Readiness",
    type: "SJT",
    question: "Your trainer shows the class a new technique. You don't understand it, but everyone else seems to. What do you do?",
    options: [
      "Stay quiet and hope to figure it out later",
      "Ask the trainer to explain again, even if others might already know it",
      "Copy a classmate's work without understanding it",
      "Give up on that part of the training"
    ],
    correctIdx: 1,
    explanation: "Asking for clarification shows initiative and is the only option that actually builds the skill."
  },
  {
    skillName: "Work Readiness",
    type: "SJT",
    question: "You made a mistake while helping a customer and it will cost you money to fix. What do you do?",
    options: [
      "Hide the mistake and hope no one notices",
      "Blame a co-worker",
      "Tell your supervisor honestly and offer to help fix it",
      "Fix it quietly without telling anyone"
    ],
    correctIdx: 2,
    explanation: "Honesty and accountability are highly valued soft skills."
  },
  {
    skillName: "Customer Service",
    type: "SJT",
    question: "A customer is angry about a delay that wasn't your fault. What do you do?",
    options: [
      "Argue back that it isn't your fault",
      "Stay calm, apologise for the inconvenience, and explain what you're doing about it",
      "Say nothing and let them keep complaining",
      "Blame the supplier openly in front of them"
    ],
    correctIdx: 1,
    explanation: "De-escalation and proactive problem solving."
  }
];

// ─── STAGE 5: DOMAIN-SPECIFIC SKILL BANK ───
export const domainSkillQuestions = [
  {
    skillName: "Embroidery Work",
    type: "Skill",
    question: "Which embroidery style, originating from Punjab, is characterised by geometric patterns stitched on the wrong side of the fabric creating a mirror effect on the front?",
    options: ["Chikankari", "Phulkari", "Kantha", "Aari"],
    correctIdx: 1,
    explanation: "Phulkari is done from the wrong side."
  },
  {
    skillName: "Fabric Dyeing & Printing",
    type: "Skill",
    question: "Which traditional Indian block printing technique from Rajasthan uses mud/clay resist paste before immersing the fabric in indigo vats?",
    options: ["Dabu Printing", "Ajrakh Printing", "Bagh Printing", "Kalamkari Printing"],
    correctIdx: 0,
    explanation: "Dabu printing uses a mud-resist paste."
  },
  {
    skillName: "Tailoring & Dressmaking",
    type: "Skill",
    question: "Which type of seam is most suitable for sheer, lightweight fabrics to enclose raw edges completely and prevent fraying?",
    options: ["Plain Seam", "French Seam", "Flat-Felled Seam", "Overlocked Seam"],
    correctIdx: 1,
    explanation: "A French seam encloses raw edges inside a second seam."
  }
];
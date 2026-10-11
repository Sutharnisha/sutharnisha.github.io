/* ------------------------------------------------------------------
   PROJECTS — the Projects section of index.html is built from this list.

   To add a project, copy one { ... } block, paste it where you want it
   to appear (the list is shown in this order) and edit the text.
   Nothing else needs to change.

   Shown on the card
     type      short label, also used for the filter buttons
     date      free text, e.g. "2026"
     title     project name
     tagline   one sentence
     image     cover picture, any .svg / .png / .jpg in assets/projects/
     tags      tools and methods (the first four appear on the card)

   Shown in the popup
     context   one line: who / where / with what data
     summary   two or three sentences
     stats     up to three { value, label } headline numbers      (optional)
     points    bullet list under "Key findings"                   (optional)
     table     { caption, head: [...], rows: [[...], ...] }       (optional)
     links     { label, href } — add target: "_blank" for external sites
   ------------------------------------------------------------------ */
window.PROJECTS = [
  {
    type: "Research",
    date: "2026",
    title: "When tasks fight: gradient conflict in molecular multi-task learning",
    tagline: "Does a learned referee for conflicting gradients still help once the encoder is pretrained?",
    image: "assets/projects/aim.svg",
    context: "Independent research · presented at the Institute of Molecular Systems Biology, ETH Zurich",
    summary: "When one model learns several molecular properties at once, the tasks can pull the shared encoder in opposite directions. I tested whether a learned gradient-conflict policy (AIM) still helps once the encoder is a pretrained 3D model, comparing it with linear scalarisation and PCGrad on a pretrained Uni-Mol encoder and a from-scratch MPNN under one protocol.",
    stats: [
      { value: "11", label: "QM9 properties learned jointly" },
      { value: "10 / 11", label: "properties where Uni-Mol beats the MPNN under AIM-Matrix" },
      { value: "35% vs 50%", label: "conflicting task-gradient pairs, Uni-Mol vs MPNN" }
    ],
    points: [
      "AIM's benefit depends on the backbone: it is the strongest method family on the from-scratch MPNN, while on pretrained Uni-Mol PCGrad is competitive and AIM-Matrix gives the best Δm but not the best mean rank.",
      "Pretraining changes the conflict itself, not just the accuracy: mean task-gradient cosine is +0.158 on Uni-Mol against +0.031 on the MPNN.",
      "The learned intervention thresholds differ between the two backbones, so they double as a map of which property pairs actually compete.",
      "Take-home: a multi-task optimiser cannot be judged independently of the representation it is training.",
      "Limits: one seed, a 10,000-molecule QM9 subset, and architecture and pretraining are not yet separated. A controlled ablation is the next step."
    ],
    table: {
      caption: "Δm = mean change in test MAE relative to single-task training. MR = mean rank over the 11 tasks. Lower is better for both.",
      head: ["Method", "Uni-Mol Δm %", "Uni-Mol MR", "MPNN Δm %", "MPNN MR"],
      rows: [
        ["LS", "19.2", "2.45", "232.2", "2.73"],
        ["PCGrad", "11.2", "1.64", "256.4", "3.45"],
        ["AIM-Scalar", "21.5", "3.55", "174.6", "1.64"],
        ["AIM-Matrix", "10.2", "2.36", "173.5", "2.18"]
      ]
    },
    tags: ["PyTorch", "Uni-Mol", "QM9", "Multi-task learning", "MPNN", "Gradient surgery"],
    links: [
      { label: "Animated walkthrough", href: "aim_film.html" }
    ]
  },
  {
    type: "Hackathon",
    date: "2026",
    title: "Health Report Generator",
    tagline: "One dataset, a different report for every audience, and numbers that cannot disagree.",
    image: "assets/projects/health.svg",
    context: "Team of three · Swiss FOPH open infectious-disease surveillance data",
    summary: "The same surveillance data answers different questions for different readers, and hand-built reports drift apart. We built one reproducible pipeline that renders a separate report for public-health officials and for researchers from a single cleaned table.",
    stats: [
      { value: "376,588", label: "rows harmonised into one table" },
      { value: "16", label: "surveillance indicators, 2013–2026" },
      { value: "370", label: "automated quality checks, 0 failed" }
    ],
    points: [
      "Six declared Snakemake steps: fetch, snapshot, harmonise, quality gate, report, web page. Unchanged steps are skipped and GitHub Actions refreshes the data weekly.",
      "37 raw FOPH exports reduced to 20 unique datasets after 17 duplicates were detected and skipped.",
      "A quality gate stops the build on failure: 347 checks passed, 21 skipped as not applicable, 2 explained warnings.",
      "Every report carries a machine-readable provenance record: source, retrieval date, SHA-256 per raw file, git commit and software versions.",
      "Quarto renders HTML and PDF per audience, so a new audience needs a new template rather than a new pipeline.",
      "Limits: the reports are descriptive and a prototype, not official guidance."
    ],
    tags: ["Snakemake", "Quarto", "Docker", "GitHub Actions", "Python", "R", "Marimo"],
    links: [
      { label: "Code on GitHub", href: "https://github.com/LarsEBaumann/Health_Report_Generator", target: "_blank" }
    ]
  },
  {
    type: "Industry",
    date: "2025",
    title: "Reproducible analytics for biomedical imaging",
    tagline: "Turning a legacy Python codebase into a cloud pipeline that anyone on the team can re-run.",
    image: "assets/projects/imaging.svg",
    context: "Data analysis internship · CompagOs, Zurich",
    summary: "The analysis behind the company's imaging results lived in a legacy Python codebase that was hard to run twice the same way. I refactored it into a streamlined, cloud-based analytical system with version-controlled deployment and structured reporting.",
    points: [
      "Refactored the legacy code into a reproducible, cloud-based analysis pipeline.",
      "Built version-controlled deployment workflows, technical documentation and reporting pipelines in Python and R.",
      "Worked directly with the CEO, folding strategic feedback into the outputs used for decisions."
    ],
    tags: ["Python", "R", "Cloud", "Git", "Reporting"],
    links: []
  },
  {
    type: "Chemistry",
    date: "2016",
    title: "How substituents steer the Ugi reaction",
    tagline: "Tracing how small structural changes redirect a four-component, one-pot reaction.",
    image: "assets/projects/ugi.svg",
    context: "Master's project · Kurukshetra University",
    summary: "The Ugi reaction joins four components in a single pot, which makes it a workhorse for building compound libraries. My Master's project examined how substituents shape its mechanism, intermediates and synthetic outcomes.",
    points: [
      "Investigated the reaction mechanism through theoretical and literature-based analysis.",
      "Evaluated how substituents change reaction pathways, intermediates and products.",
      "Interpreted NMR data and compared reported mechanisms to validate the proposed pathways."
    ],
    tags: ["Organic chemistry", "Reaction mechanisms", "NMR", "Multicomponent reactions"],
    links: []
  }
];

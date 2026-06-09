// ============================================================
//  PROFESSOR DATA — Edit everything here to customize the site
// ============================================================

export const professor = {
  name: "Dr. Vishnu Kumar",
  shortName: "Dr. Vishnu Kumar",
  title: "Professor of Mathematics",
  degrees: "PhD · MSc · BSc",
  institution: "Indian Institute of Technology, Chennai",
  taglines: ["Theorem Prover.", "JEE Mentor.", "Research Scholar.", "LaTeX Craftsman.", "Mathematical Thinker."],
  bio: [
    "I am a Professor of Mathematics specializing in Real Analysis, Topology, and Differential Geometry. My work sits at the intersection of abstract algebra and applied mathematical modeling.",
    "For over a decade I have guided JEE aspirants not by drilling problems, but by building mathematical intuition — the kind that outlasts any examination.",
    "Beyond the classroom, I believe mathematics is a language of truth. My research seeks to make that language richer.",
  ],
  stats: [
    { value: "24+", label: "Papers Published" },
    { value: "12+", label: "Years Teaching" },
    { value: "800+", label: "JEE Students" },
  ],
  email: "Dr. Vishnu Kumar",
  googleScholar: "https://scholar.google.com",
  researchGate: "https://researchgate.net",
  linkedin: "https://linkedin.com",
  ticker: [
    "Working on: Riemann Hypothesis — Partial Results",
    "Teaching: JEE Advanced Batch 2026",
    "Last Published: Journal of Pure Mathematics, Vol. 14",
    "LaTeX Workshop: Next session June 15",
    "Open to: Research Collaboration",
  ],
};

export const publications = [
  {
    id: 1,
    title: "On the Convergence of Fourier Series in Weighted Sobolev Spaces",
    journal: "Journal of Mathematical Analysis",
    year: "2024",
    volume: "Vol. 18, No. 2",
    abstract: "We establish sharp convergence criteria for Fourier series in weighted Sobolev spaces, extending classical results of Zygmund to the setting of Muckenhoupt weights.",
    tags: ["Analysis", "Fourier Theory", "Sobolev Spaces"],
    doi: "https://doi.org",
  },
  {
    id: 2,
    title: "Geometric Flows on Riemannian Manifolds with Boundary Constraints",
    journal: "Annals of Global Analysis and Geometry",
    year: "2023",
    volume: "Vol. 64, No. 1",
    abstract: "We study long-time behavior of Ricci flow on compact Riemannian manifolds under mixed boundary conditions, proving existence and uniqueness results via monotonicity formulas.",
    tags: ["Topology", "Differential Geometry", "Ricci Flow"],
    doi: "https://doi.org",
  },
  {
    id: 3,
    title: "A New Approach to Prime Distribution via Spectral Methods",
    journal: "Acta Mathematica Sinica",
    year: "2023",
    volume: "Vol. 39, No. 4",
    abstract: "Using spectral theory of Laplacians on arithmetic surfaces, we derive improved error estimates in the prime number theorem, connecting analytic number theory with spectral geometry.",
    tags: ["Number Theory", "Spectral Theory", "Primes"],
    doi: "https://doi.org",
  },
  {
    id: 4,
    title: "Stability Analysis of Partial Differential Equations in Hilbert Spaces",
    journal: "SIAM Journal on Mathematical Analysis",
    year: "2022",
    volume: "Vol. 54, No. 3",
    abstract: "We develop a unified framework for stability analysis of abstract Cauchy problems in Hilbert spaces using energy methods and semigroup theory.",
    tags: ["PDEs", "Functional Analysis", "Stability"],
    doi: "https://doi.org",
  },
];

export const teaching = [
  {
    id: 1,
    symbol: "∫",
    title: "JEE Mathematics",
    subtitle: "Advanced & Mains",
    description: "Building deep mathematical intuition in calculus, algebra, coordinate geometry, and probability. I focus on understanding over memorization — the kind of clarity that makes hard problems easy.",
    topics: ["Calculus & Integration", "Complex Numbers", "Vectors & 3D", "Probability"],
  },
  {
    id: 2,
    symbol: "∂",
    title: "University Courses",
    subtitle: "BSc & MSc Level",
    description: "Real Analysis, Abstract Algebra, Topology, Differential Geometry. Courses designed to transform students from problem-solvers into mathematical thinkers.",
    topics: ["Real Analysis", "Abstract Algebra", "Topology", "Differential Geometry"],
  },
  {
    id: 3,
    symbol: "Σ",
    title: "LaTeX Workshops",
    subtitle: "Academic Typesetting",
    description: "Hands-on workshops covering document structure, mathematical typesetting, bibliography management, and producing publication-quality research papers using LaTeX and BibTeX.",
    topics: ["Document Structure", "Math Typesetting", "BibTeX & Citations", "Beamer Presentations"],
  },
];

export const equations = [
  {
    latex: "e^{i\\pi} + 1 = 0",
    name: "Euler's Identity",
    note: "The most beautiful equation — connecting five fundamental constants.",
  },
  {
    latex: "\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}",
    name: "Gaussian Integral",
    note: "A result that surprises every student who first encounters it.",
  },
  {
    latex: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}",
    name: "Basel Problem",
    note: "Euler's 1734 solution — connecting integers to π in one stroke.",
  },
  {
    latex: "\\nabla^2 \\varphi = \\frac{1}{c^2}\\frac{\\partial^2 \\varphi}{\\partial t^2}",
    name: "Wave Equation",
    note: "The language in which nature describes propagation.",
  },
  {
    latex: "\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}",
    name: "Riemann Zeta Function",
    note: "The function whose zeros may hold the key to prime distribution.",
  },
];

export const timeline = [
  { year: "2005", title: "Bachelor of Science", detail: "Mathematics Honours — First Class", icon: "○" },
  { year: "2007", title: "Master of Science", detail: "Pure Mathematics — Gold Medalist", icon: "◑" },
  { year: "2008", title: "JEE Teaching Begins", detail: "First coaching batch — 47 students", icon: "◐" },
  { year: "2012", title: "PhD Completed", detail: "Thesis: Geometric Analysis on Manifolds", icon: "●" },
  { year: "2013", title: "First Paper Published", detail: "Journal of Mathematical Analysis", icon: "★" },
  { year: "2015", title: "Assistant Professor", detail: "IIT Chennai — Department of Mathematics", icon: "◆" },
  { year: "2019", title: "Associate Professor", detail: "Promoted with research excellence award", icon: "◆" },
  { year: "2024", title: "Professor", detail: "24 papers · 3 ongoing projects", icon: "◈" },
];



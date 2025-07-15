const COURSES = [
  {
    id: "IME027",
    name: "PRECÁLCULO I",
    level: 1,
    credits: 3.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: []
  },
  {
    id: "IME028",
    name: "INTRODUCCIÓN AL ÁLGEBRA",
    level: 1,
    credits: 3.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: []
  },
  {
    id: "IME029",
    name: "PRECÁLCULO II",
    level: 1,
    credits: 3.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: ["IME027"]
  },
  {
    id: "IME030",
    name: "ÁLGEBRA",
    level: 1,
    credits: 3.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: ["IME028"]
  },
  {
    id: "ICQ050",
    name: "INTRODUCCIÓN A LA QUÍMICA",
    level: 1,
    credits: 5.0,
    area: "DEPTO. DE CIENCIAS QUIMICAS Y REC. NAT.",
    prerequisites: []
  },
  {
    id: "DFI052",
    name: "HABILIDADES COMUNICATIVAS EN INGENIERÍA",
    level: 1,
    credits: 3.0,
    area: "COORDINACION FORMACIÓN GENERAL E IDIOMAS",
    prerequisites: []
  },
  {
    id: "ING050",
    name: "INGENIERÍA Y SOCIEDAD",
    level: 1,
    credits: 4.0,
    area: "DECANATO FACULTAD DE INGENIERIA",
    prerequisites: []
  },
  {
    id: "IME045",
    name: "CÁLCULO DIFERENCIAL",
    level: 2,
    credits: 3.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: ["IME029"]
  },
  {
    id: "IME046",
    name: "MATEMÁTICA PARA LA COMPUTACIÓN I",
    level: 2,
    credits: 2.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: []
  },
  {
    id: "IME048",
    name: "CÁLCULO INTEGRAL",
    level: 2,
    credits: 3.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: ["IME045"]
  },
  {
    id: "IME047",
    name: "MATEMÁTICA PARA LA COMPUTACIÓN II",
    level: 2,
    credits: 2.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: ["IME046"]
  },
  {
    id: "ICF115",
    name: "FÍSICA I",
    level: 2,
    credits: 6.0,
    area: "DEPTO. DE CIENCIAS FISICAS",
    prerequisites: ["IME029"]
  },
  {
    id: "ING104",
    name: "LABORATORIO DE CIENCIAS",
    level: 2,
    credits: 5.0,
    area: "DECANATO FACULTAD DE INGENIERIA",
    prerequisites: []
  },
  {
    id: "ING101",
    name: "INTRODUCCIÓN AL DISEÑO DE INGENIERÍA",
    level: 2,
    credits: 5.0,
    area: "DECANATO FACULTAD DE INGENIERIA",
    prerequisites: []
  }
];

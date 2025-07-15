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
  },
  {
    id: "IME298",
    name: "CÁLCULO MULTIVARIABLE",
    level: 3,
    credits: 5.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: ["IME048"]
  },
  {
    id: "IME299",
    name: "ÁLGEBRA LINEAL",
    level: 3,
    credits: 5.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: ["IME030"]
  },
  {
    id: "ICF177",
    name: "FÍSICA II",
    level: 3,
    credits: 6.0,
    area: "DEPTO. DE CIENCIAS FISICAS",
    prerequisites: ["IME048", "ICF115"]
  },
  {
    id: "ING400",
    name: "ELECTIVO DE INGENIERIA",
    level: 3,
    credits: 3.0,
    area: "FACULTAD DE INGENIERIA Y CIENCIAS",
    prerequisites: []
  },
  {
    id: "ICC157",
    name: "TALLER DE PROGRAMACIÓN",
    level: 3,
    credits: 3.0,
    area: "DEPTO. CS. COMPUTACION E INFORMATICA",
    prerequisites: ["ING104"]
  },
  {
    id: "ING180",
    name: "ECODISEÑO",
    level: 3,
    credits: 4.0,
    area: "DECANATO FACULTAD DE INGENIERIA",
    prerequisites: []
  },
  {
    id: "ICC490",
    name: "PROGRAMACION ORIENTADA A OBJETOS",
    level: 4,
    credits: 5.0,
    area: "DEPTO. CS. COMPUTACION E INFORMATICA",
    prerequisites: ["ICC157"]
  },
  {
    id: "IME317",
    name: "ECUACIONES DIFERENCIALES",
    level: 4,
    credits: 6.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: ["IME299"]
  },
  {
    id: "ICF489",
    name: "FISICA III",
    level: 4,
    credits: 5.0,
    area: "DEPTO. DE CIENCIAS FISICAS",
    prerequisites: ["IME298", "ICF177"]
  },
  {
    id: "ICC492",
    name: "TALLER DE COMPUTACION",
    level: 4,
    credits: 4.0,
    area: "DEPTO. CS. COMPUTACION E INFORMATICA",
    prerequisites: ["ING400"]
  },
  {
    id: "I95310",
    name: "ELECTIVO DE FORMACION GENERAL I",
    level: 4,
    credits: 3.0,
    area: "DIRECCION CARRERA ING. CIVIL INFORMATICA",
    prerequisites: []
  },
  {
    id: "ING200",
    name: "TALLER DE DISEÑO DE INGENIERÍA",
    level: 4,
    credits: 6.0,
    area: "DECANATO FACULTAD DE INGENIERIA",
    prerequisites: ["ING101", "ING180"]
  },
  {
    id: "IME396",
    name: "PROBABILIDAD Y ESTADÍSTICA PARA INGENIERÍA",
    level: 4,
    credits: 5.0,
    area: "DEPTO. DE MATEMATICAS Y ESTADISTICA",
    prerequisites: ["IME298", "COD558"]
  },
  {
    id: "ICC505",
    name: "BASES DE DATOS",
    level: 4,
    credits: 4.0,
    area: "DEPTO. CS. COMPUTACION E INFORMATICA",
    prerequisites: ["ICC490", "COD558"]
  },
  {
    id: "ICC506",
    name: "INTERNET Y SISTEMAS OPERATIVOS",
    level: 4,
    credits: 6.0,
    area: "DEPTO. CS. COMPUTACION E INFORMATICA",
    prerequisites: ["ICC492", "COD558"]
  },
  {
    id: "ICC507",
    name: "ALGORITMOS Y PARADIGMAS",
    level: 4,
    credits: 6.0,
    area: "DEPTO. CS. COMPUTACION E INFORMATICA",
    prerequisites: ["ICC490", "COD558"]
  }
];

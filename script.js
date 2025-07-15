document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const container = document.getElementById('malla-container');
  const creditDisplay = document.getElementById('credit-total');
  const creditMaxDisplay = document.getElementById('credit-max');
  const progressPercentDisplay = document.getElementById('progress-percent');
  const areaFilter = document.getElementById('area-filter');

  // Estado de selección
  let selectedCourseId = null;
  const completedIds = new Set(JSON.parse(localStorage.getItem('completedCourses') || "[]"));

  // Mapeo por año
  const YEAR_GROUPS = {
    "primer año": [1, 2],
    "segundo año": [3, 4],
    "tercer año": [5, 6],
    "cuarto año": [7, 8],
    "quinto año": [9, 10]
  };

  function getYearLabel(level) {
    for (const [label, levels] of Object.entries(YEAR_GROUPS)) {
      if (levels.includes(level)) return label;
    }
    return "otro año";
  }

  // Rellenar el filtro por área
  function initializeAreaFilter() {
    areaFilter.innerHTML = '<option value="all">Todas las áreas</option>';
    const areas = [...new Set(COURSES.map(c => c.area))].sort();
    areas.forEach(area => {
      const option = document.createElement('option');
      option.value = area;
      option.textContent = area;
      areaFilter.appendChild(option);
    });
  }

  // Construir la malla visual
  function initializeMalla() {
    container.innerHTML = "";
    const selectedArea = areaFilter.value;

    const levelsMap = {};
    COURSES.forEach(course => {
      if (selectedArea !== "all" && course.area !== selectedArea) return;
      if (!levelsMap[course.level]) levelsMap[course.level] = [];
      levelsMap[course.level].push(course);
    });

    Object.entries(YEAR_GROUPS).forEach(([yearName, levels]) => {
      const yearSection = document.createElement('section');
      yearSection.className = 'year-block';
      yearSection.innerHTML = `<h2>${yearName.toUpperCase()}</h2>`;

      const semesterGrid = document.createElement('div');
      semesterGrid.className = 'semester-grid';

      levels.forEach(level => {
        const courses = levelsMap[level];
        if (!courses) return;

        const levelColumn = document.createElement('div');
        levelColumn.className = 'semester-column';
        levelColumn.innerHTML = `<h3>Semestre ${level}</h3>`;

        courses.forEach(course => {
          const card = document.createElement('div');
          card.className = 'course-card';
          card.id = course.id;

          if (completedIds.has(course.id)) {
            card.classList.add('completed');
          }

          const prereqNames = course.prerequisites
            .map(pr => {
              const found = COURSES.find(c => c.id === pr);
              return found ? found.name : pr;
            })
            .join(", ");

          card.title = prereqNames ? `Prerrequisitos: ${prereqNames}` : "Sin prerrequisitos";

          card.innerHTML = `
            <div class="course-name">${course.name}</div>
            <div class="course-credits">SCT: ${course.credits}</div>
          `;

          card.addEventListener('click', () => handleCourseClick(course.id));
          levelColumn.appendChild(card);
        });

        semesterGrid.appendChild(levelColumn);
      });

      yearSection.appendChild(semesterGrid);
      container.appendChild(yearSection);
    });

    updateCreditProgress();
  }

  // Alternar selección de curso completado
  function handleCourseClick(courseId) {
    const card = document.getElementById(courseId);
    const course = COURSES.find(c => c.id === courseId);
    if (!card || !course) return;

    const isCompleted = card.classList.contains('completed');
    card.classList.toggle('completed');

    if (isCompleted) {
      completedIds.delete(courseId);
    } else {
      completedIds.add(courseId);
    }

    localStorage.setItem('completedCourses', JSON.stringify([...completedIds]));
    updateCreditProgress();
    resetAllCards();

    if (!card.classList.contains('completed')) {
      card.classList.add('selected');
      course.prerequisites.forEach(prereqId => {
        const prereqCard = document.getElementById(prereqId);
        if (prereqCard) prereqCard.classList.add('prerequisite');
      });

      const postrequisites = COURSES.filter(c => c.prerequisites.includes(courseId));
      postrequisites.forEach(post => {
        const postCard = document.getElementById(post.id);
        if (postCard) postCard.classList.add('postrequisite');
      });

      selectedCourseId = courseId;
    } else {
      selectedCourseId = null;
    }
  }

  // Actualizar contador y porcentaje
  function updateCreditProgress() {
    const completedCredits = [...completedIds].reduce((sum, id) => {
      const course = COURSES.find(c => c.id === id);
      return sum + (course?.credits || 0);
    }, 0);

    const totalCredits = COURSES.reduce((sum, c) => sum + c.credits, 0);
    const percent = totalCredits > 0 ? Math.round((completedCredits / totalCredits) * 100) : 0;

    creditDisplay.textContent = completedCredits;
    creditMaxDisplay.textContent = totalCredits;
    progressPercentDisplay.textContent = `${percent}%`;
  }

  // Limpiar resaltado visual
  function resetAllCards() {
    document.querySelectorAll('.course-card').forEach(card => {
      card.classList.remove('selected', 'prerequisite', 'postrequisite');
    });
  }

  // Inicializar filtros y render
  initializeAreaFilter();
  initializeMalla();
  areaFilter.addEventListener('change', initializeMalla);
});

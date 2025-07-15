document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('malla-container');
  let selectedCourseId = null;

  if (!container) {
    console.warn("El contenedor 'malla-container' no fue encontrado.");
    return;
  }

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

  function initializeMalla() {
    // Agrupar cursos por nivel
    const levelsMap = {};
    COURSES.forEach(course => {
      if (!levelsMap[course.level]) {
        levelsMap[course.level] = [];
      }
      levelsMap[course.level].push(course);
    });

    // Agrupar por año académico
    Object.entries(YEAR_GROUPS).forEach(([yearName, levels]) => {
      const yearSection = document.createElement('section');
      yearSection.className = 'year-block';
      const yearTitle = document.createElement('h2');
      yearTitle.textContent = yearName.toUpperCase();
      yearSection.appendChild(yearTitle);

      const semesterGrid = document.createElement('div');
      semesterGrid.className = 'semester-grid';

      levels.forEach(level => {
        if (!levelsMap[level]) return;

        const levelColumn = document.createElement('div');
        levelColumn.className = 'semester-column';

        const levelHeading = document.createElement('h3');
        levelHeading.textContent = `Semestre ${level}`;
        levelColumn.appendChild(levelHeading);

        levelsMap[level].forEach((course, index) => {
          const card = document.createElement('div');
          card.className = 'course-card';
          card.id = course.id;

          // Tooltip de prerrequisitos
          const prereqNames = course.prerequisites?.map(pr => {
            const found = COURSES.find(c => c.id === pr);
            return found ? found.name : pr;
          }).join(", ");
          card.title = prereqNames ? `Prerrequisitos: ${prereqNames}` : "Sin prerrequisitos";

          // Contenido del curso
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
  }

  function handleCourseClick(courseId) {
    resetAllCards();

    if (selectedCourseId === courseId) {
      selectedCourseId = null;
      return;
    }

    selectedCourseId = courseId;
    const course = COURSES.find(c => c.id === courseId);
    const card = document.getElementById(courseId);
    if (card) card.classList.add('selected');

    course.prerequisites?.forEach(prereqId => {
      const prereqCard = document.getElementById(prereqId);
      if (prereqCard) prereqCard.classList.add('prerequisite');
    });

    const postrequisites = COURSES.filter(c => c.prerequisites.includes(courseId));
    postrequisites.forEach(post => {
      const postCard = document.getElementById(post.id);
      if (postCard) postCard.classList.add('postrequisite');
    });
  }

  function resetAllCards() {
    document.querySelectorAll('.course-card').forEach(card => {
      card.classList.remove('selected', 'prerequisite', 'postrequisite');
    });
  }

  initializeMalla();
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('malla-container');
  let selectedCourseId = null;

  if (!container) {
    console.warn("El contenedor 'malla-container' no fue encontrado.");
    return;
  }

  function initializeMalla() {
    COURSES.forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.id = course.id;
      card.style.gridColumn = course.level;

      // Generar tooltip con los prerrequisitos si existen
      let tooltipText = "";
      if (course.prerequisites && course.prerequisites.length > 0) {
        const prereqNames = course.prerequisites
          .map(pr => {
            const prereqCourse = COURSES.find(c => c.id === pr);
            return prereqCourse ? prereqCourse.name : pr;
          })
          .join(", ");
        tooltipText = `Prerrequisitos: ${prereqNames}`;
      } else {
        tooltipText = "Sin prerrequisitos";
      }

      card.title = tooltipText;

      card.innerHTML = `
        <div class="course-name">${course.name}</div>
        <div class="course-credits">SCT: ${course.credits}</div>
      `;

      card.addEventListener('click', () => handleCourseClick(course.id));
      container.appendChild(card);
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
console.log("El archivo script.js está funcionando.");
console.log(COURSES);

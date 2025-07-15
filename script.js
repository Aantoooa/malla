document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('malla-container');
    let selectedCourse = null;

    // 1. Dibuja todos los cursos en la malla
    COURSES.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.id = course.id;
        // Posiciona la tarjeta en la columna correcta del semestre
        card.style.gridColumn = course.level;

        card.innerHTML = `
            <div class="course-name">${course.name}</div>
            <div class="course-credits">SCT: ${course.credits}</div>
        `;

        card.addEventListener('click', () => handleCourseClick(course.id));
        container.appendChild(card);
    });

    // 2. Función para manejar el clic en una asignatura
    function handleCourseClick(courseId) {
        // Limpia el estado anterior
        resetAllCards();

        const clickedCard = document.getElementById(courseId);

        // Si se hace clic en el mismo curso, solo se deselecciona
        if (selectedCourse === courseId) {
            selectedCourse = null;
            return;
        }

        selectedCourse = courseId;
        const courseData = COURSES.find(c => c.id === courseId);

        // Resalta el curso seleccionado
        clickedCard.classList.add('selected');

        // Resalta los prerrequisitos
        if (courseData.prerequisites) {
            courseData.prerequisites.forEach(prereqId => {
                document.getElementById(prereqId)?.classList.add('prerequisite');
            });
        }

        // Resalta las asignaturas que este curso desbloquea (post-requisitos)
        const postrequisites = findPostrequisites(courseId);
        postrequisites.forEach(postreq => {
            document.getElementById(postreq.id)?.classList.add('postrequisite');
        });
    }

    // 3. Función para limpiar el resaltado de todas las tarjetas
    function resetAllCards() {
        document.querySelectorAll('.course-card').forEach(card => {
            card.classList.remove('selected', 'prerequisite', 'postrequisite');
        });
    }

    // 4. Función para encontrar qué cursos tienen a 'courseId' como prerrequisito
    function findPostrequisites(courseId) {
        return COURSES.filter(course => course.prerequisites.includes(courseId));
    }
});

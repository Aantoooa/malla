<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Malla Curricular Interactiva - Ingeniería Civil Informática</title>

  <!-- Favicon (opcional) -->
  <link rel="icon" href="favicon.ico" type="image/x-icon" />

  <!-- Descripción para buscadores -->
  <meta name="description" content="Explora de forma visual e interactiva la malla curricular de Ingeniería Civil Informática." />

  <!-- Estilos -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Malla Curricular Interactiva</h1>
  </header>

  <!-- Panel de progreso académico -->
  <section id="progress-panel">
    <div>Créditos completados: <span id="credit-total">0</span> / <span id="credit-max">0</span></div>
    <div>Progreso: <span id="progress-percent">0%</span></div>

    <label for="area-filter">Filtrar por área:</label>
    <select id="area-filter">
      <option value="all">Todas las áreas</option>
    </select>
  </section>

  <!-- Leyenda visual (complementable desde JS) -->
  <section class="legend">
    <!-- Puedes mostrar aquí colores por departamento o asignaturas -->
  </section>

  <!-- Contenedor principal para la malla -->
  <main>
    <div id="malla-container">
      <!-- Aquí se renderizan los cursos dinámicamente -->
    </div>
  </main>

  <!-- Scripts: primero datos, luego lógica -->
  <script src="cursos.js"></script>
  <script src="script.js"></script>
</body>
</html>

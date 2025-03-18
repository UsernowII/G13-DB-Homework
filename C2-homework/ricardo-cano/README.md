## Punto 1: Modelo ER Básico - Cursos y Estudiantes

### Descripción

Este modelo ER gestiona la información sobre cursos y estudiantes, implementando una relación muchos a muchos entre ellos.

### Entidades

*   **Course:**
    *   `Course_ID` (Clave Primaria): Identificador único del curso.
    *   `Title`: Título del curso.
    *   `Description`: Descripción del curso.
*   **Student:**
    *   `Student_ID` (Clave Primaria): Identificador único del estudiante.
    *   `Name`: Nombre del estudiante.
    *   `Email`: Correo electrónico del estudiante.
*   **Course_Student:** (Tabla de Unión)
    *   `Course_ID` (Clave Foránea): Referencia a `Course(Course_ID)`.
    *   `Student_ID` (Clave Foránea): Referencia a `Student(Student_ID)`.

### Relaciones

*   Un estudiante puede estar inscrito en uno o más cursos.
*   Un curso puede tener uno o más estudiantes.

## Punto 2: Modelo ER Complejo - Proyectos y Empleados

### Descripción

Este modelo ER gestiona la información sobre proyectos y empleados, implementando una relación muchos a muchos entre ellos.

### Entidades

*   **Project:**
    *   `Project_ID` (Clave Primaria): Identificador único del proyecto.
    *   `Name`: Nombre del proyecto.
    *   `Start_Date`: Fecha de inicio del proyecto.
    *   `End_Date`: Fecha de finalización del proyecto.
*   **Employee:**
    *   `Employee_ID` (Clave Primaria): Identificador único del empleado.
    *   `Name`: Nombre del empleado.
    *   `Position`: Posición del empleado.
    *   `Department`: Departamento del empleado.
*   **Project_Employee:** (Tabla de Unión)
    *   `Project_ID` (Clave Foránea): Referencia a `Project(Project_ID)`.
    *   `Employee_ID` (Clave Foránea): Referencia a `Employee(Employee_ID)`.

### Relaciones

*   Un empleado puede trabajar en uno o más proyectos.
*   Un proyecto puede tener uno o más empleados.

## Punto 3: Instalación de PostgreSQL y pgAdmin

### Descripción

Este punto cubre la instalación de PostgreSQL y pgAdmin.

### Instrucciones

1.  Descargar e instalar PostgreSQL desde [postgresql.org](https://www.postgresql.org/).
2.  Descargar e instalar pgAdmin desde [pgadmin.org](https://www.pgadmin.org/).
3.  Crear una base de datos de prueba en pgAdmin llamada `test_db`.
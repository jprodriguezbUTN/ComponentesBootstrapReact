import CTable from '../Components/CTable.jsx';
import Datalist from "../Components/Datalist";

const estudiantesColumns = ["#", "Nombre", "Carrera", "Nota"];
const estudiantesRows = [
  [1, "Ana García", "Sistemas", 90],
  [2, "Luis Pérez", "Informática", 85],
  [3, "María López", "Sistemas", 92],
];

const cursosColumns = ["#", "Materia", "Profesor", "Créditos"];
const cursosRows = [
  [1, "Tecnologías Web", "Prof. Ramírez", 4],
  [2, "Bases de Datos", "Prof. Solano", 3],
];

export default function PTable() {
  return (
    <>
      <CTable
        title="Tabla de Estudiantes"
        columns={estudiantesColumns}
        rows={estudiantesRows}
      />
      <CTable
        title="Tabla de Cursos"
        columns={cursosColumns}
        rows={cursosRows}
      />
    </>
  );
}
export default function CTable() {
  return (
    <div className="container mt-4">
      <h2>Componente Table de Bootstrap</h2>

      {/* 1. Tabla básica */}
      <h5 className="mt-4">Tabla básica</h5>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ana García</td>
            <td>Sistemas</td>
            <td>90</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Luis Pérez</td>
            <td>Informática</td>
            <td>85</td>
          </tr>
          <tr>
            <td>3</td>
            <td>María López</td>
            <td>Sistemas</td>
            <td>92</td>
          </tr>
        </tbody>
      </table>

      {/* 2. Tabla con striped + hover + bordered */}
      <h5 className="mt-4">Striped + Hover + Bordered</h5>
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ana García</td>
            <td>Sistemas</td>
            <td>90</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Luis Pérez</td>
            <td>Informática</td>
            <td>85</td>
          </tr>
          <tr>
            <td>3</td>
            <td>María López</td>
            <td>Sistemas</td>
            <td>92</td>
          </tr>
        </tbody>
      </table>

      {/* 3. Variantes de color por fila */}
      <h5 className="mt-4">Variantes de color por fila</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Estado</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <td>Aprobado</td>
            <td>Nota mayor a 70</td>
          </tr>
          <tr className="table-warning">
            <td>En revisión</td>
            <td>Nota entre 50 y 70</td>
          </tr>
          <tr className="table-danger">
            <td>Reprobado</td>
            <td>Nota menor a 50</td>
          </tr>
          <tr className="table-info">
            <td>Pendiente</td>
            <td>Sin calificación</td>
          </tr>
        </tbody>
      </table>

      {/* 4. Tabla responsive */}
      <h5 className="mt-4">Responsive (scroll en mobile)</h5>
      <div className="table-responsive">
        <table className="table table-sm table-striped">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Carrera</th>
              <th>Materia</th>
              <th>Nota</th>
              <th>Estado</th>
              <th>Semestre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ana García</td>
              <td>Sistemas</td>
              <td>Tecnologías Web</td>
              <td>90</td>
              <td>Aprobado</td>
              <td>3ro</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Luis Pérez</td>
              <td>Informática</td>
              <td>Bases de Datos</td>
              <td>85</td>
              <td>Aprobado</td>
              <td>4to</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. Caption y table-active */}
      <h5 className="mt-4">Caption + fila activa</h5>
      <table className="table caption-top">
        <caption>Lista de estudiantes destacados</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <td>1</td>
            <td>Ana García</td>
            <td>92</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Luis Pérez</td>
            <td>85</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="table-group-divider">
            <td colSpan="2">Promedio general</td>
            <td>88.5</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
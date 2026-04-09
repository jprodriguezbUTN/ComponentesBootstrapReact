export default function CTable() {
  return (
    <div className="container mt-4">
      <h2>Componente Table de Bootstrap</h2>

      {/* 1. Tabla básica */}
      <h5 className="mt-4">1. Tabla básica</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ana García</td>
            <td>Sistemas</td>
            <td>90</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Luis Pérez</td>
            <td>Informática</td>
            <td>85</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>María López</td>
            <td>Sistemas</td>
            <td>92</td>
          </tr>
        </tbody>
      </table>

      {/* 2. Modificadores combinados */}
      <h5 className="mt-4">2. Striped + Hover + Bordered</h5>
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ana García</td>
            <td>Sistemas</td>
            <td>90</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Luis Pérez</td>
            <td>Informática</td>
            <td>85</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>María López</td>
            <td>Sistemas</td>
            <td>92</td>
          </tr>
        </tbody>
      </table>

      {/* 3. Variantes de color por fila */}
      <h5 className="mt-4">3. Variantes de color por fila</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Estado</th>
            <th scope="col">Descripción</th>
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
            <td>Sin calificación aún</td>
          </tr>
        </tbody>
      </table>

      {/* 4. Tabla responsive */}
      <h5 className="mt-4">4. Responsive</h5>
      <div className="table-responsive">
        <table className="table table-sm table-striped">
          <thead className="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Carrera</th>
              <th scope="col">Materia</th>
              <th scope="col">Nota</th>
              <th scope="col">Estado</th>
              <th scope="col">Semestre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ana García</td>
              <td>Sistemas</td>
              <td>Tecnologías Web</td>
              <td>90</td>
              <td>Aprobado</td>
              <td>3ro</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Luis Pérez</td>
              <td>Informática</td>
              <td>Bases de Datos</td>
              <td>85</td>
              <td>Aprobado</td>
              <td>4to</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>María López</td>
              <td>Sistemas</td>
              <td>Redes</td>
              <td>92</td>
              <td>Aprobado</td>
              <td>3ro</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. Caption + table-active + tfoot */}
      <h5 className="mt-4">5. Caption + fila activa + tfoot</h5>
      <table className="table caption-top">
        <caption>Lista de estudiantes destacados</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <th scope="row">1</th>
            <td>Ana García</td>
            <td>92</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Luis Pérez</td>
            <td>85</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>María López</td>
            <td>88</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="table-group-divider">
            <td colSpan="2">Promedio general</td>
            <td>88.3</td>
          </tr>
        </tfoot>
      </table>

    </div>
  );
}
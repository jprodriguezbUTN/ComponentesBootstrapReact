export default function CTable({ title, columns, rows }) {
  return (
    <div className="container mt-4">
      {title && <h5 className="mt-4">{title}</h5>}
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            {columns.map((col, i) => (
              <th key={i} scope="col">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                j === 0
                  ? <th key={j} scope="row">{cell}</th>
                  : <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
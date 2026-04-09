import Progress from '../Components/Progress';

export default function PProgress() {
  const pageClasses = "min-vh-100 bg-light p-4 d-flex flex-column align-items-center";

  return (
    <main className={pageClasses}>
      <h1 className="mb-5 fw-bold text-dark">Panel de Control UTN</h1>
      
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="row g-4">
          
          <div className="col-12">
            <Progress 
              titulo="Carga Dinamica" 
              tipo="manual" 
              color="bg-primary" 
            />
          </div>

          <div className="col-12">
            <Progress 
              titulo="Descargar paquetes" 
              tipo="descarga" 
              color="bg-info" 
            />
          </div>

        </div>
      </div>
    </main>
  );
}
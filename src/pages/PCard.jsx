import Card from "../Components/Card"
import Imagenes from "../Components/Images"

export default function PCard() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Componente Card</h1>

      <div className="row gap-4">
        {/* Card con imagen y contenido */}
        <div className="col-12 col-md-4 mb-4">
          <Card 
            titulo="Tarjeta con Imagen"
            texto="Esta tarjeta tiene imagen, título y descripción"
            bg="bg-white"
            colorTexto="text-dark"
          >
            <Imagenes 
              url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/JumpIn/UnifiedExperience/JumIn_Indonesia/Fuji_Desktop_JIIN_SingleImageCard_1x_EN._SY304_CB793605597_.jpg" 
              tipo="Redondo"
              bordes="SinBordes"
              clases="Responsivo"
              ancho="100%"
              alto="200px"
            />
          </Card>
        </div>

        {/* Card solo con texto */}
        <div className="col-12 col-md-4 mb-4">
          <Card 
            titulo="Tarjeta Simple"
            texto="Esta tarjeta solo tiene texto, sin imagen"
            bg="bg-light"
            colorTexto="text-dark"
          />
        </div>

        {/* Card con header y footer */}
        <div className="col-12 col-md-4 mb-4">
          <Card 
            header="Encabezado de la Tarjeta"
            titulo="Contenido Principal"
            texto="Tarjeta con header y footer"
            footer="Pie de página"
            bg="bg-primary"
            colorTexto="text-white"
          />
        </div>

        {/* Card con imagen redondeada y bordes */}
        <div className="col-12 col-md-4 mb-4">
          <Card 
            titulo="Imagen Redondeada"
            texto="Imagen con bordes redondeados y thumbnail"
          >
            <Imagenes 
              url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/JumpIn/UnifiedExperience/JumIn_Indonesia/Fuji_Desktop_JIIN_SingleImageCard_1x_EN._SY304_CB793605597_.jpg" 
              tipo="Redondo"
              bordes="ConBordes"
              clases="Centro"
              ancho="100%"
              alto="180px"
            />
          </Card>
        </div>

        {/* Card con imagen a la izquierda */}
        <div className="col-12 col-md-4 mb-4">
          <Card 
            titulo="Imagen Flotante"
            texto="La imagen flota hacia la izquierda"
          >
            <Imagenes 
              url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/JumpIn/UnifiedExperience/JumIn_Indonesia/Fuji_Desktop_JIIN_SingleImageCard_1x_EN._SY304_CB793605597_.jpg" 
              tipo="Normal"
              bordes="SinBordes"
              clases="Izquierda"
              ancho="150px"
              alto="150px"
            />
          </Card>
        </div>

        {/* Card con contenido personalizado */}
        <div className="col-12 col-md-4 mb-4">
          <Card 
            titulo="Card Personalizado"
            bg="bg-success"
            colorTexto="text-white"
          >
            <p>Contenido personalizado con elementos adicionales</p>
            <button className="btn btn-light btn-sm">Más info</button>
          </Card>
        </div>
      </div>
    </div>
  )
}

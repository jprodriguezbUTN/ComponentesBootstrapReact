import Carousel from "../Components/Carrousel";
import Imagenes from "../Components/Images";

export default function PCarousel() {
  return (
    <div className="container mt-4">

      <h3>Carousel</h3>

      <Carousel tiempo={2000}>

        <div className="carousel-item">
          <Imagenes url="img1.jpg" />
        </div>

        <div className="carousel-item">
          <Imagenes url="img2.jpg" />
        </div>

        <div className="carousel-item">
          <Imagenes url="img3.jpg" />
        </div>

      </Carousel>

    </div>
  );
}
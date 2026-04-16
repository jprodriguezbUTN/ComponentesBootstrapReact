import Carousel from "../Components/Carrousel";
import Imagenes from "../Components/Images";

export default function PCarousel() {
  return (
    <div className="container mt-4">

      <h3>Carousel</h3>

      <Carousel tiempo={2000}>

        <div className="carousel-item">
          <Imagenes url="https://cdn.pixabay.com/photo/2023/07/28/11/45/landscapes-8155111_1280.jpg" />
        </div>

        <div className="carousel-item">
          <Imagenes url="https://cdn.pixabay.com/photo/2020/03/15/13/15/desert-4933581_1280.jpg" />
        </div>

        <div className="carousel-item">
          <Imagenes url="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg" />
        </div>

      </Carousel>

    </div>
  );
}
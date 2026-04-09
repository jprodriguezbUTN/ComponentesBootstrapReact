import Imagenes from '../Components/Images';

export default function PImages() {
    return (
        <>
            <section>
                <h3>Redondo, Centro, 300x300px</h3>
                <Imagenes url="https://png.pngtree.com/png-vector/20240711/ourlarge/pngtree-beautiful-nature-landscape-png-image_13056143.png"
                    tipo="Redondo"
                    clases="Centro"
                    ancho="300px"
                    alto="300px" />
                <h3>Normal, Izquierda y Derecha, Tamaño Default</h3>
                <Imagenes url="https://png.pngtree.com/png-vector/20240711/ourlarge/pngtree-beautiful-nature-landscape-png-image_13056143.png"
                    tipo="Normal"
                    clases="Izquierda" />
                <Imagenes Tamaño Default url="https://png.pngtree.com/png-vector/20240711/ourlarge/pngtree-beautiful-nature-landscape-png-image_13056143.png"
                    tipo="Normal"
                    clases="Derecha" />
            </section>

        </>
    );
}
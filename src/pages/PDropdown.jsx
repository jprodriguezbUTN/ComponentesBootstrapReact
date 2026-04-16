import Dropdown from '../Components/Dropdown';
import Button from '../Components/Button';

export default function PDropdown() {
    const misLinks = [
        { texto: "Calculo I", link: "/mate" },
        { texto: "Redes CCNA", link: "/redes" }
    ];
    

    return (
        <div className="container mt-5 text-center">
            <h2 className="text-black mb-5">Variaciones de Dropdown</h2>

            <div className="d-flex justify-content-around align-items-center bg-dark p-5 rounded">

                <div className="text-white">
                    <p>Dropdown</p>
                    <Dropdown posicion="down" opciones={misLinks} >
                        <Button texto="Abajo" color="secondary" />
                    </Dropdown>
                </div>

                <div className="text-white">
                    <p>Dropup</p>
                    <Dropdown posicion="up" opciones={misLinks}>
                        <Button texto="Arriba" color="primary" />
                    </Dropdown>
                </div>

                <div className="text-white">
                    <p>Dropstart</p>
                    <Dropdown posicion="left" opciones={misLinks}>
                        <Button texto="Izquierda" color="info" />
                    </Dropdown>
                </div>


                <div className="text-white">
                    <p>Dropend</p>
                    <Dropdown posicion="right" opciones={misLinks} >
                        <Button texto="Derecha" color="warning" />
                    </Dropdown>
                </div>

            </div>
        </div>
    );
}
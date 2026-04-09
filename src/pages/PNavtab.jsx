import Navtabs from '../Components/Navtabs.jsx';

const tabsExample = `<Navtabs variant="nav-tabs">
  <li className="nav-item">
    <a className="nav-link active">Active</a>
  </li>
</Navtabs>`;

const baseNav = `<Navtabs>
    {/*Codigo del navtab*/}
</Navtabs>`;

const tabNav = `<Navtabs variant="nav-tabs">
    {/*Codigo del navtab*/}
</Navtabs>`;

const pillNav = `<Navtabs variant="nav-pills">
    {/*Codigo del navtab*/}
</Navtabs>`;

const centeredNav = `Navtabs alignment="justify-content-center">
    {/*Codigo del navtab*/}
</Navtabs>`;

const verticalNav = `Navtabs variant="nav-pills" extraClasses="flex-column">
    {/*Codigo del navtab*/}
</Navtabs>`;

const fillNav = `Navtabs variant="nav-pills" extraClasses="nav-fill">
    {/*Codigo del navtab*/}
</Navtabs>`;

const iconNav = `<Navtabs variant="nav-tabs">
    <li className="nav-item">
        <a className="nav-link active">
            <i className="bi bi-house-fill me-2"></i>
                Home
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link">
            <i className="bi bi-table me-2"></i>
                Table
        </a>
    </li>
</Navtabs>`;



export default function PNavtab() {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Ejemplos de Navs and tabs</h1>

            <p className="text-muted">
                Diferentes estilos de Navs and tabs de Bootstrap utilizando codigo de React reutilizable y personalizable.
            </p>

            {/* Base nav */}
            <section className="mb-5">
                <h4>Nav Base</h4>
                <h6>
                    Se consigue con el codigo:
                </h6>
                <pre className="bg-dark text-light p-3 rounded mt-3 text-start">
                    <code>{baseNav}</code>
                </pre>
                <h6>
                    Se ve asi:
                </h6>
                <Navtabs>
                    <li className="nav-item">
                        <a className="nav-link active">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </Navtabs>
            </section>

            {/* Tabs */}
            <section className="mb-5">
                <h4>Tabs</h4>
                <h6>
                    Se consigue con el codigo:
                </h6>
                <pre className="bg-dark text-light p-3 rounded mt-3 text-start">
                    <code>{tabNav}</code>
                </pre>
                <h6>
                    Se ve asi:
                </h6>
                <Navtabs variant="nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Link</a>
                    </li>
                </Navtabs>
            </section>

            {/* Pills */}
            <section className="mb-5">
                <h4>Pildoras</h4>
                <h6>
                    Se consigue con el codigo:
                </h6>
                <pre className="bg-dark text-light p-3 rounded mt-3 text-start">
                    <code>{pillNav}</code>
                </pre>
                <h6>
                    Se ve asi:
                </h6>
                <Navtabs variant="nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Link</a>
                    </li>
                </Navtabs>
            </section>

            {/* Alignment */}
            <section className="mb-5">
                <h4>Centrado</h4>
                <h6>
                    Se consigue con el codigo:
                </h6>
                <pre className="bg-dark text-light p-3 rounded mt-3 text-start">
                    <code>{centeredNav}</code>
                </pre>
                <h6>
                    Se ve asi:
                </h6>
                <Navtabs alignment="justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active">Center</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Link</a>
                    </li>
                </Navtabs>
            </section>

            {/* Vertical */}
            <section className="mb-5">
                <h4>Vertical</h4>
                <h6>
                    Se consigue con el codigo:
                </h6>
                <pre className="bg-dark text-light p-3 rounded mt-3 text-start">
                    <code>{verticalNav}</code>
                </pre>
                <h6>
                    Se ve asi:
                </h6>
                <Navtabs variant="nav-pills" extraClasses="flex-column">
                    <a className="nav-link active">Vertical</a>
                    <a className="nav-link">Link</a>
                    <a className="nav-link">Link</a>
                </Navtabs>
            </section>

            {/* Fill */}
            <section className="mb-5">
                <h4>Rellenar</h4>
                <h6>
                    Se consigue con el codigo:
                </h6>
                <pre className="bg-dark text-light p-3 rounded mt-3 text-start">
                    <code>{fillNav}</code>
                </pre>
                <h6>
                    Se ve asi:
                </h6>
                <Navtabs variant="nav-pills" extraClasses="nav-fill">
                    <li className="nav-item">
                        <a className="nav-link active">Fill</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Link</a>
                    </li>
                </Navtabs>
            </section>

            {/* Icons */}
            <section className="mb-5">
                <h4>Con Iconos</h4>
                <p className="text-muted">
                    El codigo para iconos se implementa diferente del resto de propiedades, ya que va en la escritura del {`<li>`} y no en el nombre del navtab como otros 
                </p>
                <h6>
                    Se consigue con el codigo: 
                </h6>
                <pre className="bg-dark text-light p-3 rounded mt-3 text-start">
                    <code>{iconNav}</code>
                </pre>
                <h6>
                    Se ve asi:
                </h6>
                <Navtabs variant="nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active">
                            <i className="bi bi-house-fill me-2"></i>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="bi bi-table me-2"></i>
                            Table
                        </a>
                    </li>
                </Navtabs>
            </section>

            <section className="mb-5">
                <h4>Como utilizarlo?</h4>
                <p>
                    Para utilizar este codigo, se puede seguir una estructura de codigo como la siguiente:
                </p>
                <pre className="bg-dark text-light p-3 rounded mt-3 text-start">
                    <code>{tabsExample}</code>
                </pre>
            </section>
        </div>
    );
}
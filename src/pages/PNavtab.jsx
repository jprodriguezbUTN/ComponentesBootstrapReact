import Navtabs from '../Components/Navtabs.jsx';

const tabsExample = `<NavTabs
  tabs={[
    { label: "Home", to: "/", icon: "bi-house-fill" },
    { label: "Table", to: "/table" }
  ]}
  variant="pills"
  centered
/>`;

const baseNav = `const baseTabs = [
  { label: "Active", to: "/" },
  { label: "Link", to: "/table" },
  { label: "Link", to: "/datalist" },
  { label: "Disabled", to: "#", disabled: true }
];

<Navtabs tabs={baseTabs} />`;

const tabNav = `const tabsTabs = [
  { label: "Active", to: "/" },
  { label: "Link", to: "/table" }
];

<Navtabs tabs={tabsTabs} variant="tabs" />`;

const pillNav = `const pillsTabs = [
  { label: "Active", to: "/" },
  { label: "Link", to: "/table" }
];

<Navtabs tabs={pillsTabs} variant="pills" />`;

const centeredNav = `const tabsTabs = [
  { label: "Active", to: "/" },
  { label: "Link", to: "/table" }
];

<Navtabs tabs={tabsTabs} centered />`;

const verticalNav = `const tabsTabs = [
  { label: "Active", to: "/" },
  { label: "Link", to: "/table" }
];

<Navtabs tabs={tabsTabs} variant="pills" vertical />`;

const fillNav = `<NavTabs
  tabs={[
    { label: "Active", to: "/" },
    { label: "Link", to: "/table" }
  ]}

<Navtabs tabs={tabsTabs} variant="pills" fill />`;

const iconNav = `const iconTabs = [
  { label: "Home", to: "/", icon: "bi-house-fill" },
  { label: "Table", to: "/table", icon: "bi-table" }
];

<Navtabs tabs={iconTabs} variant="tabs" />`;

const baseTabs = [
            {label: "Active", to: "/Navtab" },
            {label: "Link", to: "/table" },
            {label: "Link", to: "/datalist" },
            {label: "Disabled", to: "#", disabled: true }
            ];

const tabsTabs = [
  { label: "Active", to: "/Navtab" },
  { label: "Link", to: "/table" }
];

const pillsTabs = [
  { label: "Active", to: "/Navtab" },
  { label: "Link", to: "/table" }
];

const iconTabs = [
  { label: "Home", to: "/Navtab", icon: "bi-house-fill" },
  { label: "Table", to: "/table", icon: "bi-table" }
];


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
                <Navtabs tabs={baseTabs} />
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
                <Navtabs tabs={tabsTabs} variant="tabs" />
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
                <Navtabs tabs={pillsTabs} variant="pills" />
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
                <Navtabs tabs={tabsTabs} centered />
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
                <Navtabs tabs={tabsTabs} variant="pills" vertical />
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
                <Navtabs tabs={tabsTabs} variant="pills" fill />
            </section>

            {/* Icons */}
            <section className="mb-5">
                <h4>Con Iconos</h4>
                <h6>
                    Se consigue con el codigo:
                </h6>
                <pre className="bg-dark text-light p-3 rounded mt-3 text-start">
                    <code>{iconNav}</code>
                </pre>
                <h6>
                    Se ve asi:
                </h6>
                <Navtabs tabs={iconTabs} variant="tabs" />
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
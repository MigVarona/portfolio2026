const projects = [
  {
    number: "01",
    name: "Bookarta",
    type: "SaaS para restaurantes / producto propio",
    summary:
      "SaaS B2B para restaurantes con cartas QR dinamicas, reservas online, dashboard de gestion, pagos y extraccion de menus con IA.",
    decision:
      "No solo construir funcionalidades: convertir una operativa de restaurante en un producto vendible, mantenible y preparado para clientes reales.",
    stack: "Next.js 16 · Supabase · Stripe · OpenAI · TypeScript",
    image: "/images/bookarta/logo-crema.png",
    links: [
      { label: "bookarta.es", href: "https://bookarta.es" },
      { label: "bookarta.eu", href: "https://bookarta.eu" },
    ],
    tone: "green",
  },
  {
    number: "02",
    name: "RENEW",
    type: "Plataforma editorial de salud",
    summary:
      "Plataforma editorial sobre salud basada en evidencia: nutricion, neurociencia, longevidad, newsletter y guias descargables.",
    decision:
      "Dar forma de producto a contenido experto: identidad sobria, lectura clara y una base preparada para crecer.",
    stack: "Next.js 15 · MongoDB · TypeScript · shadcn/ui · Tailwind",
    image: "/images/renew-habits/renew.png",
    links: [{ label: "renew-habits.com", href: "https://www.renew-habits.com/" }],
    tone: "blue",
  },
  {
    number: "03",
    name: "II Premios AMAE",
    type: "Plataforma institucional / sistema de premios",
    summary:
      "Plataforma para premios audiovisuales con inscripciones publicas, dashboard de revision y portal de votacion para socios.",
    decision:
      "Ordenar un sistema institucional complejo con navegacion publica, administracion interna y confianza visual.",
    stack: "Next.js · Supabase · TypeScript",
    image: "/images/amae/amae1.png",
    links: [
      {
        label: "Premios AMAE",
        href: "https://v0-amae-award-website.vercel.app/",
      },
    ],
    tone: "clay",
  },
  {
    number: "04",
    name: "Cristina Gomez",
    type: "Portfolio creativo",
    summary:
      "Portfolio para editora de video con trabajos para Prime Video, Domestika y Bitvavo. Direccion visual oscura y cinematografica.",
    decision:
      "Construir una presencia personal que no parezca una plantilla: ritmo, foco en pieza visual y sensacion editorial.",
    stack: "Next.js 16 · TypeScript · shadcn/ui",
    image: "/images/crisgova/crisgova-home.jpg",
    links: [{ label: "crisgova.org", href: "https://www.crisgova.org/" }],
    tone: "ink",
  },
];

const capabilities = [
  "Aplicaciones web full-stack",
  "Plataformas SaaS y dashboards",
  "Desarrollo con Next.js / React",
  "APIs, bases de datos y backend",
  "E-commerce y sistemas de reservas",
  "Flujos de producto asistidos por IA",
];

const stack = [
  ["Frontend", "Next.js · React · TypeScript · Tailwind CSS · HTML5/CSS3 · Figma"],
  ["Backend", "Node.js · Express · Supabase · PostgreSQL · MongoDB · RESTful APIs · SSR"],
  ["Cloud", "Vercel · Docker · AWS · Railway · Git · GitHub Actions · SonarQube"],
  ["Integraciones", "OpenAI · Stripe · Resend · Claude AI · Groq"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Inicio">
          Miguel Varona
        </a>
        <nav aria-label="Principal">
          <a href="#work">Proyectos</a>
          <a href="#about">Servicios</a>
          <a href="mailto:migvaronag@gmail.com">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Desarrollo web · producto digital · integraciones</p>
          <h1>Construyo productos digitales con criterio de negocio, diseño y tecnologia.</h1>
          <p className="lead">
            Soy desarrollador full-stack en Madrid. Trabajo en todo el ciclo
            de producto: estrategia, interfaz, arquitectura, desarrollo,
            despliegue y crecimiento.
          </p>
          <div className="actions">
            <a className="button primary" href="#work">
              Ver proyectos
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button secondary" href="mailto:migvaronag@gmail.com">
              Hablemos
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Resumen">
          <p className="panel-kicker">De idea a producto funcional.</p>
          <p>
            Ayudo a convertir necesidades de negocio en productos digitales
            claros, usables y preparados para crecer: desde la estructura y el
            diseño hasta el desarrollo full-stack y la integracion con pagos,
            reservas, bases de datos o IA.
          </p>
          <ul className="hero-benefits" aria-label="Beneficios">
            <li>Ordenar ideas y convertirlas en una estructura clara.</li>
            <li>Diseñar interfaces cuidadas, usables y alineadas con negocio.</li>
            <li>Construir el producto completo: frontend, backend e integraciones.</li>
          </ul>
        </aside>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">Trabajo destacado</p>
          <h2>Software en produccion, presentado como decisiones de producto.</h2>
          <p>
            Desde plataformas SaaS hasta productos editoriales y sistemas
            institucionales. Cada proyecto responde a un problema concreto,
            restricciones reales y una superficie publica funcionando.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project project-${project.tone}`} key={project.name}>
              <div className="project-copy">
                <span>{project.number}</span>
                <h3>{project.name}</h3>
                <p className="project-type">{project.type}</p>
                <p>{project.summary}</p>
                <strong>{project.decision}</strong>
                <p className="project-stack">{project.stack}</p>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="project-visual">
                <img src={project.image} alt="" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band" id="about">
        <div className="section-heading">
          <p className="eyebrow">Para empresas</p>
          <h2>Diseño y desarrollo productos digitales para empresas que necesitan avanzar rapido.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              Trabajo con empresas, estudios y equipos que
              necesitan lanzar una web, un SaaS, un dashboard, una plataforma
              interna o una integracion a medida sin convertir el proceso en
              meses de reuniones.
            </p>
            <p>
              Puedo entrar en fases tempranas para ordenar la idea y definir el
              producto, o sumarme a un proyecto existente para diseñar,
              desarrollar, conectar APIs, mejorar experiencia o preparar una
              version lista para clientes reales.
            </p>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="stack-section">
        <div className="section-heading">
          <p className="eyebrow">Stack</p>
          <h2>Stack web moderno, ejecucion orientada a producto.</h2>
        </div>
        <div className="stack-list">
          {stack.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <h2>Hablemos si necesitas convertir una idea, proceso o servicio en un producto digital.</h2>
        <p>Desarrollo web, SaaS, dashboards, sistemas de reservas e integraciones a medida.</p>
        <a href="mailto:migvaronag@gmail.com">migvaronag@gmail.com</a>
      </footer>
    </main>
  );
}

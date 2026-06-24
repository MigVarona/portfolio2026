import { AnimatedMain } from "@/components/animated-main";
import { ContactForm } from "@/components/contact-form";
import { MagneticButton } from "@/components/magnetic-button";
import { TrackedLink } from "@/components/tracked-link";

const projects = [
  {
    number: "01",
    name: "Bookarta",
    type: "SaaS para restaurantes / producto propio",
    summary:
      "SaaS B2B para restaurantes con cartas QR dinámicas, reservas online, dashboard de gestión, pagos y extracción de menús con IA.",
    decision:
      "Del concepto a un SaaS en producción con clientes activos: carta QR, reservas, pagos y panel centralizado. Lanzado en España y Europa con ingresos recurrentes desde el primer mes.",
    stack: "Next.js 16 · Supabase · Stripe · OpenAI · TypeScript",
    tags: ["SaaS", "Pagos", "IA"],
    image: "/images/bookarta/bookarta.png",
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
      "Plataforma editorial sobre salud basada en evidencia: nutrición, neurociencia, longevidad, newsletter y guías descargables.",
    decision:
      "Construida para monetizar: arquitectura orientada a conversión con marketing de afiliados y Google Ads como motores de ingresos.",
    stack: "Next.js 15 · MongoDB · TypeScript · shadcn/ui · Tailwind",
    tags: ["Editorial", "Contenido", "Escalable"],
    image: "/images/renew-habits/renew4.png",
    links: [{ label: "renew-habits.com", href: "https://www.renew-habits.com/" }],
    tone: "blue",
  },
  {
    number: "03",
    name: "II Premios AMAE",
    type: "Plataforma institucional / sistema de premios",
    summary:
      "Plataforma para premios audiovisuales con inscripciones públicas, dashboard de revisión y portal de votación para socios.",
    decision:
      "El reto: tres roles distintos —público general, equipo de revisión y socios votantes— con accesos separados y flujos independientes, todo en un solo sistema sin duplicar complejidad técnica.",
    stack: "Next.js · Supabase · TypeScript",
    tags: ["Institucional", "Votaciones", "Admin"],
    image: "/images/amae/amae4.png",
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
    name: "Cristina Gómez",
    type: "Portfolio creativo",
    summary:
      "Portfolio para editora de video con trabajos para Prime Video, Domestika y Bitvavo. Dirección visual oscura y cinematográfica.",
    decision:
      "Una presencia visual que diferencia a la editora del resto: ritmo, foco en la pieza y sensación cinematográfica. No una plantilla.",
    stack: "Next.js 16 · TypeScript · shadcn/ui",
    tags: ["Portfolio", "Visual", "Cinemático"],
    image: "/images/crisgova/crisgova.png",
    links: [{ label: "crisgova.org", href: "https://www.crisgova.org/" }],
    tone: "ink",
  },
];

const services = [
  {
    number: "01",
    name: "Web de negocio",
    description:
      "Para ordenar la presencia digital de una marca, explicar mejor lo que vende y convertir visitas en conversaciones útiles.",
    outcomes: [
      "Narrativa, estructura y direccion visual",
      "Web responsive con rendimiento cuidado",
      "Formularios, analítica, CMS o integraciones básicas",
    ],
    fit: "Cuando necesitas una web que trabaje mejor para el negocio, no solo una página bonita.",
  },
  {
    number: "02",
    name: "SaaS o plataforma",
    description:
      "Para convertir un proceso, servicio o idea de producto en una herramienta usable por clientes, equipos o usuarios internos.",
    outcomes: [
      "Definición de alcance y flujos principales",
      "Frontend, backend, base de datos y roles",
      "Pagos, reservas, dashboards o áreas privadas",
    ],
    fit: "Cuando el valor está en resolver bien un flujo completo, con producto y tecnología trabajando juntos.",
  },
  {
    number: "03",
    name: "Integracion a medida",
    description:
      "Para mejorar un sistema que ya existe: conectar herramientas, automatizar partes repetitivas o incorporar IA donde tenga sentido.",
    outcomes: [
      "Análisis del sistema actual",
      "Alcance acotado y plan de implementación",
      "Entrega documentada y fácil de mantener",
    ],
    fit: "Cuando no hace falta rehacerlo todo, sino intervenir con precisión.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Contexto",
    description:
      "Entendemos qué quieres resolver, para quién, qué existe ya y qué restricciones reales hay alrededor del proyecto.",
  },
  {
    number: "02",
    title: "Alcance",
    description:
      "Aterrizamos prioridades, entregables, fases y presupuesto antes de empezar. Si algo no aporta, se queda fuera.",
  },
  {
    number: "03",
    title: "Construcción",
    description:
      "Diseñamos y desarrollamos con revisiones sobre producto real, manteniendo el foco en decisiones de negocio y experiencia de usuario.",
  },
  {
    number: "04",
    title: "Salida",
    description:
      "Dejamos el producto desplegado, medible y preparado para evolucionar: dominio, entornos, documentación y soporte inicial.",
  },
];

const heroPrinciples = [
  { value: "Producto", label: "antes que acumulación de pantallas" },
  { value: "Criterio", label: "para decidir que construir y que dejar fuera" },
  { value: "Continuidad", label: "desde la idea hasta el lanzamiento" },
];

const stack = [
  ["Frontend", "Next.js · React · TypeScript · Tailwind CSS · HTML5/CSS3 · Figma"],
  ["Backend", "Node.js · Express · Supabase · PostgreSQL · MongoDB · RESTful APIs · SSR"],
  ["Cloud", "Vercel · Docker · AWS · Railway · Git · GitHub Actions · SonarQube"],
  ["Integraciones", "OpenAI · Stripe · Resend · Claude AI · Groq"],
];

export default function Home() {
  return (
    <AnimatedMain>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Inicio">
          <img src="/images/logos/wearecapa_header.svg" alt="WEARECAPA" height="26" />
        </a>
        <nav aria-label="Principal">
          <a href="#work">Proyectos</a>
          <a href="#services">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Web · SaaS · Dashboards · Integraciones</p>
          <h1>Producto digital con criterio, listo para crecer.</h1>
          <p className="lead">
            Diseñamos y desarrollamos productos digitales a medida: webs, plataformas y
            sistemas que resuelven problemas reales con una mezcla cuidada de estrategia,
            interfaz y desarrollo full-stack.
          </p>
          <div className="actions">
            <MagneticButton className="button primary" href="#work" gaEvent="ver_proyectos" gaParams={{ location: "hero" }}>
              Ver proyectos
              <span aria-hidden="true">-&gt;</span>
            </MagneticButton>
            <MagneticButton className="button secondary" href="#contacto" gaEvent="cta_click" gaParams={{ location: "hero" }}>
              Solicitar presupuesto
            </MagneticButton>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Resumen">
          <div className="hero-statement">
            <p className="panel-kicker">Menos ruido. Mejor producto.</p>
            <p>
              Trabajamos con equipos y negocios que necesitan convertir una necesidad
              concreta en una experiencia digital clara, usable y lista para operar.
            </p>
          </div>

          <dl className="hero-principles" aria-label="Forma de trabajo">
            {heroPrinciples.map((item) => (
              <div key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">Casos de producto</p>
          <h2>Productos digitales llevados a producción.</h2>
          <p>
            SaaS, plataformas editoriales, sistemas institucionales y portfolios
            construidos con foco en negocio, experiencia de usuario y desarrollo
            full-stack.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => {
            const primaryLink = project.links[0];

            return (
              <article className={`project project-${project.tone}`} key={project.name}>
                <div className="project-copy">
                  <span>{project.number}</span>
                  <h3>{project.name}</h3>
                  <p className="project-type">{project.type}</p>
                  <p>{project.summary}</p>
                  <strong>{project.decision}</strong>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <TrackedLink href={link.href} key={link.href} target="_blank" rel="noreferrer" gaEvent="project_click" gaParams={{ project: project.name, label: link.label }}>
                        {link.label} <span aria-hidden="true">↗</span>
                      </TrackedLink>
                    ))}
                  </div>
                </div>
                <TrackedLink
                  href={primaryLink.href}
                  className="project-visual"
                  target="_blank"
                  rel="noreferrer"
                  gaEvent="project_image_click"
                  gaParams={{ project: project.name, label: primaryLink.label }}
                >
                  <img src={project.image} alt="" />
                </TrackedLink>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Formas de trabajo</p>
          <h2>El tipo de ayuda depende del problema.</h2>
          <p>
            No todo necesita el mismo proceso ni el mismo nivel de producto. Primero
            entendemos el contexto; después definimos una propuesta proporcionada al
            objetivo, al equipo y al momento del negocio.
          </p>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <div className="service-main">
                <span className="service-number">{service.number}</span>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
              <div className="service-detail">
                <ul className="service-outcomes">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <p className="service-fit">{service.fit}</p>
                <TrackedLink href="#contacto" className="service-cta" gaEvent="cta_click" gaParams={{ location: "servicios", service: service.name }}>
                  Hablar del proyecto <span aria-hidden="true">→</span>
                </TrackedLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">Proceso</p>
          <h2>Un proceso claro, sin teatralizarlo.</h2>
          <p>
            El objetivo no es correr por correr. Es tomar buenas decisiones pronto,
            construir con foco y que cada fase deje algo útil para la siguiente.
          </p>
        </div>
        <div className="process-list">
          {processSteps.map((step) => (
            <article className="process-line" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section">
        <div className="section-heading">
          <p className="eyebrow">Stack</p>
          <h2>Stack web moderno, ejecución orientada a producto.</h2>
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

      <footer id="contacto">
        <div className="footer-copy">
          <div className="footer-logo-wrap">
            <img src="/images/logos/wearecapa_logo_horizontal_negative.svg" alt="WEARECAPA" className="footer-logo" />
          </div>
          <p className="footer-eyebrow">Listo para empezar</p>
          <h2>Cuéntanos tu proyecto. Te devolvemos una propuesta clara.</h2>
          <p>Web, SaaS, dashboard, plataforma o integración a medida. Sin compromiso inicial.</p>
          <div className="contact-links" aria-label="Contacto directo">
            <a href="mailto:hola@wearecapa.es">
              <span>Email</span>
              <strong>hola@wearecapa.es</strong>
            </a>
            <a href="tel:+34652592293">
              <span>Teléfono</span>
              <strong>+34 652 592 293</strong>
            </a>
          </div>
        </div>
        <ContactForm />
      </footer>

      <div className="bottom-footer">
        <div className="bottom-footer-top">
          <a className="bottom-footer-brand" href="#top" aria-label="Volver al inicio">
            <img src="/images/logos/wearecapa_header.svg" alt="WEARECAPA" height="36" />
          </a>
          <span className="bottom-footer-tagline">Digital Product Consultancy</span>
        </div>
        <div className="bottom-footer-bottom">
          <nav aria-label="Footer">
            <a href="#work">Proyectos</a>
            <a href="#services">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <p>© 2026 WEARECAPA</p>
        </div>
      </div>
    </AnimatedMain>
  );
}

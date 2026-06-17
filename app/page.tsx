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
      "SaaS B2B para restaurantes con cartas QR dinamicas, reservas online, dashboard de gestion, pagos y extraccion de menus con IA.",
    decision:
      "Digitalizar la operativa completa de un restaurante: carta QR dinamica, reservas online y panel centralizado. Un producto real en manos de clientes reales.",
    stack: "Next.js 16 · Supabase · Stripe · OpenAI · TypeScript",
    tags: ["SaaS", "Pagos", "IA"],
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
      "Construida para monetizar: arquitectura orientada a conversión con marketing de afiliados y Google Ads como motores de ingresos.",
    stack: "Next.js 15 · MongoDB · TypeScript · shadcn/ui · Tailwind",
    tags: ["Editorial", "Contenido", "Escalable"],
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
      "El reto: tres roles distintos —publico general, equipo de revision y socios votantes— con accesos separados y flujos independientes, todo en un solo sistema sin duplicar complejidad tecnica.",
    stack: "Next.js · Supabase · TypeScript",
    tags: ["Institucional", "Votaciones", "Admin"],
    image: "/images/amae/iPhone-14-PRO-www.premiosamae.com.webp",
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
      "Una presencia visual que diferencia a la editora del resto: ritmo, foco en la pieza y sensacion cinematografica. No una plantilla.",
    stack: "Next.js 16 · TypeScript · shadcn/ui",
    tags: ["Portfolio", "Visual", "Cinematico"],
    image: "/images/crisgova/crisgova-home.jpg",
    links: [{ label: "crisgova.org", href: "https://www.crisgova.org/" }],
    tone: "ink",
  },
];

const services = [
  {
    number: "01",
    name: "Web de negocio",
    description:
      "Para empresas que necesitan presencia profesional online. Landing page, web corporativa o portfolio con diseño cuidado, rendimiento optimizado y despliegue incluido.",
    features: [
      "Diseño UI a medida, no plantillas",
      "Desarrollo full-stack completo",
      "Formularios, CMS e integraciones basicas",
      "Despliegue y configuracion de dominio",
    ],
    time: "2–3 semanas",
  },
  {
    number: "02",
    name: "SaaS o plataforma",
    description:
      "Para digitalizar un proceso interno o lanzar un producto. Dashboard, reservas, pagos o area privada, con entregas por fases desde la primera semana.",
    features: [
      "Definicion de producto y alcance",
      "Frontend + backend + base de datos",
      "Pagos, reservas e integraciones de terceros",
      "Entregas iterativas con revisiones reales",
    ],
    time: "4–8 semanas",
  },
  {
    number: "03",
    name: "Integracion a medida",
    description:
      "Para proyectos existentes que necesitan crecer: anadir IA, conectar APIs externas, automatizar procesos o mejorar una parte concreta del producto.",
    features: [
      "Analisis tecnico del sistema actual",
      "Propuesta de alcance en 48 horas",
      "Implementacion sin romper lo que funciona",
      "Documentacion y traspaso ordenado",
    ],
    time: "Segun alcance",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Cuentanos tu proyecto",
    description:
      "Un email o una llamada de 15 minutos. Sin formularios largos. Solo cuentanos que necesitas y que problema quieres resolver.",
  },
  {
    number: "02",
    title: "Propuesta clara en 48h",
    description:
      "Recibes un documento con el alcance exacto, los entregables, el plazo estimado y el coste. Sin letra pequena ni sorpresas.",
  },
  {
    number: "03",
    title: "Desarrollo por fases",
    description:
      "Trabajas con versiones reales desde la primera semana. Revisas, das feedback y ajustamos sobre algo que ya funciona.",
  },
  {
    number: "04",
    title: "Lanzamiento y soporte",
    description:
      "Desplegamos el producto, configuramos dominios y entornos, y nos quedamos disponibles para ajustes tras el lanzamiento.",
  },
];

const heroStats = [
  { value: "2–8 semanas", label: "desde idea hasta producto lanzado" },
  { value: "Propuesta", label: "cerrada y clara antes de empezar" },
  { value: "Full-stack", label: "diseño, codigo y despliegue" },
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
          <h1>De idea a producto digital funcionando, sin meses de espera.</h1>
          <p className="lead">
            Diseñamos y desarrollamos productos digitales a medida: webs, plataformas y
            sistemas que resuelven problemas reales sin meses de espera ni procesos
            interminables.
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
          <div className="hero-card">
            <p className="panel-kicker">De idea a producto lanzado.</p>
            <p>
              Convertimos necesidades de negocio en productos digitales funcionales:
              desde la estrategia y el diseño hasta el desarrollo completo y la
              integracion con pagos, reservas, bases de datos o IA.
            </p>
          </div>

          <div className="hero-stats" aria-label="Por que trabajar con nosotros">
            {heroStats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <ul className="hero-benefits" aria-label="Que incluye">
            <li>Estrategia y definicion del producto antes de escribir codigo.</li>
            <li>Diseño de interfaces cuidadas, usables y alineadas con negocio.</li>
            <li>Desarrollo completo: frontend, backend e integraciones.</li>
          </ul>
        </aside>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">Casos de producto</p>
          <h2>Productos digitales llevados a produccion.</h2>
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
                  <div className="project-tags" aria-label="Areas clave">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p className="project-stack">{project.stack}</p>
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
          <p className="eyebrow">Servicios</p>
          <h2>Elige el tipo de proyecto que necesitas.</h2>
          <p>
            Tres enfoques distintos segun el momento en el que esta tu negocio.
            Cada proyecto tiene su propio presupuesto: lo recibes en 48 horas, sin compromiso.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="service-features">
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="service-footer">
                <span className="service-time">{service.time}</span>
                <TrackedLink href="#contacto" className="service-cta" gaEvent="cta_click" gaParams={{ location: "servicios", service: service.name }}>
                  Solicitar presupuesto <span aria-hidden="true">→</span>
                </TrackedLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">Proceso</p>
          <h2>Como funciona trabajar juntos.</h2>
          <p>
            Sin reuniones semanales ni metodologias complejas. Un proceso directo
            que pasa de tu idea a un producto funcionando.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
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

      <footer id="contacto">
        <div className="footer-copy">
          <div className="footer-logo-wrap">
            <img src="/images/logos/wearecapa_logo_horizontal_negative.svg" alt="WEARECAPA" className="footer-logo" />
          </div>
          <p className="footer-eyebrow">Listo para empezar</p>
          <h2>Cuentanos tu proyecto. Tienes propuesta en 48 horas.</h2>
          <p>Web, SaaS, dashboard, plataforma o integracion a medida. Sin compromiso inicial.</p>
          <div className="contact-links" aria-label="Contacto directo">
            <a href="mailto:migvaronag@gmail.com">
              <span>Email</span>
              <strong>migvaronag@gmail.com</strong>
            </a>
            <a href="tel:+34652592293">
              <span>Telefono</span>
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
          <p>© 2025 WEARECAPA</p>
        </div>
      </div>
    </AnimatedMain>
  );
}

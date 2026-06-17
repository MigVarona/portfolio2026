"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Web corporativa o portfolio",
  "SaaS o producto digital",
  "Dashboard o herramienta interna",
  "E-commerce, reservas o pagos",
  "Integraciones con IA / APIs",
  "Mejora de producto existente",
];

const interestOptions = [
  "Tengo una idea y necesito darle forma",
  "Necesito lanzar una primera version",
  "Quiero mejorar algo que ya existe",
  "Busco apoyo tecnico para mi equipo",
];

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      services: formData.getAll("services").map(String),
      interest: String(formData.get("interest") || ""),
      budget: String(formData.get("budget") || ""),
      timeline: String(formData.get("timeline") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "No se pudo enviar el formulario.");
      }

      form.reset();
      setSubmitState("success");
      setFeedback("Mensaje enviado. Te respondere lo antes posible.");
    } catch (error) {
      setSubmitState("error");
      setFeedback(error instanceof Error ? error.message : "No se pudo enviar el formulario.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Nombre</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label>
        <span>Empresa o proyecto</span>
        <input name="company" type="text" autoComplete="organization" />
      </label>

      <fieldset>
        <legend>Servicios que te interesan</legend>
        <div className="option-grid">
          {serviceOptions.map((service) => (
            <label className="check-option" key={service}>
              <input name="services" type="checkbox" value={service} />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>En que punto estas</legend>
        <div className="radio-grid">
          {interestOptions.map((interest) => (
            <label className="radio-option" key={interest}>
              <input name="interest" type="radio" value={interest} required />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-grid">
        <label>
          <span>Presupuesto estimado</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>
              Selecciona una opcion
            </option>
            <option value="Menos de 2.000 EUR">Menos de 2.000 EUR</option>
            <option value="2.000 - 5.000 EUR">2.000 - 5.000 EUR</option>
            <option value="5.000 - 10.000 EUR">5.000 - 10.000 EUR</option>
            <option value="Mas de 10.000 EUR">Mas de 10.000 EUR</option>
            <option value="Prefiero comentarlo">Prefiero comentarlo</option>
          </select>
        </label>
        <label>
          <span>Plazo ideal</span>
          <select name="timeline" defaultValue="">
            <option value="" disabled>
              Selecciona una opcion
            </option>
            <option value="Cuanto antes">Cuanto antes</option>
            <option value="1-2 meses">1-2 meses</option>
            <option value="3-6 meses">3-6 meses</option>
            <option value="Sin fecha cerrada">Sin fecha cerrada</option>
          </select>
        </label>
      </div>

      <label>
        <span>Cuentame el contexto</span>
        <textarea
          name="message"
          rows={6}
          placeholder="Que necesitas construir, para quien es y que seria un buen resultado."
          required
        />
      </label>

      <label className="hidden-field" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-footer">
        <button className="button primary" type="submit" disabled={submitState === "sending"}>
          {submitState === "sending" ? "Enviando..." : "Enviar consulta"}
        </button>
        <p className={`form-feedback ${submitState === "error" ? "is-error" : ""}`} role="status">
          {feedback}
        </p>
      </div>
    </form>
  );
}

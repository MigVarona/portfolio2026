"use client";

import { useState, useEffect, useRef } from "react";

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
  "Necesito lanzar una primera versión",
  "Quiero mejorar algo que ya existe",
  "Busco apoyo técnico para mi equipo",
];

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");
  const [userName, setUserName] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitState === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitState]);

  async function handleSubmit(event: { preventDefault(): void; currentTarget: HTMLFormElement }) {
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
      interest: formData.getAll("interest").map(String).find(Boolean) || "",
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

      setUserName(String(formData.get("name") || "").split(" ")[0]);
      form.reset();
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setFeedback(error instanceof Error ? error.message : "No se pudo enviar el formulario.");
    }
  }

  if (submitState === "success") {
    return (
      <div className="form-success" role="status" ref={successRef}>
        <div className="form-success-check">
          <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <circle cx="32" cy="32" r="30" stroke="var(--acid)" strokeWidth="2.5" className="check-circle" />
            <path d="M18 32 L27 41 L46 22" stroke="var(--acid)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-path" />
          </svg>
        </div>
        <h3 className="form-success-title">
          Recibido{userName ? `, ${userName}` : ""}.
        </h3>
        <p className="form-success-body">
          Analizamos el contexto y te responderemos con una propuesta clara para decidir el siguiente paso.
        </p>
        <a href="mailto:hola@wearecapa.es" className="form-success-email">
          hola@wearecapa.es
        </a>
      </div>
    );
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

      <label>
        <span>¿Qué necesitas?</span>
        <select name="services" defaultValue="">
          <option value="" disabled>
            Selecciona una opción
          </option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <fieldset className="choice-fieldset">
        <legend>¿En qué punto estás?</legend>
        <div className="radio-grid">
          {interestOptions.map((interest) => (
            <label className="radio-option" key={interest}>
              <input name="interest" type="radio" value={interest} required />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label>
        <span>Mensaje</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Qué necesitas construir, para quién es y qué sería un buen resultado."
          required
        />
      </label>

      <label className="hidden-field" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-footer">
        <button className="button primary" type="submit" disabled={submitState === "sending"}>
          {submitState === "sending" ? "Enviando..." : "Enviar proyecto"}
        </button>
        <p className={`form-feedback ${submitState === "error" ? "is-error" : ""}`} role="status">
          {feedback}
        </p>
      </div>
    </form>
  );
}

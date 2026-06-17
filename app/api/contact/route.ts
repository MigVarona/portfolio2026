import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  services?: string[];
  interest?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value?: string) {
  return value?.trim() || "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderList(items: string[]) {
  if (items.length === 0) return "<li>No especificado</li>";
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Solicitud no valida." }, { status: 400 });
  }

  if (clean(payload.website)) {
    return NextResponse.json({ message: "Mensaje enviado." });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const company = clean(payload.company);
  const interest = clean(payload.interest);
  const budget = clean(payload.budget);
  const timeline = clean(payload.timeline);
  const message = clean(payload.message);
  const services = Array.isArray(payload.services) ? payload.services.map(clean).filter(Boolean) : [];

  if (!name || !email || !interest || !message) {
    return NextResponse.json(
      { message: "Completa nombre, email, punto del proyecto y contexto." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: "Introduce un email valido." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const to = process.env.CONTACT_TO || gmailUser;

  if (!gmailUser || !gmailAppPassword || !to) {
    return NextResponse.json(
      { message: "El formulario no esta configurado para enviar emails todavia." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  await transporter.sendMail({
    from: `"Varona Studio" <${gmailUser}>`,
    to,
    replyTo: `${name} <${email}>`,
    subject: `Nueva consulta desde portfolio: ${name}`,
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Empresa/proyecto: ${company || "No especificado"}`,
      `Servicios: ${services.join(", ") || "No especificado"}`,
      `Punto del proyecto: ${interest}`,
      `Presupuesto: ${budget || "No especificado"}`,
      `Plazo: ${timeline || "No especificado"}`,
      "",
      message,
    ].join("\n"),
    html: `
      <h2>Nueva consulta desde el portfolio</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Empresa/proyecto:</strong> ${escapeHtml(company || "No especificado")}</p>
      <p><strong>Punto del proyecto:</strong> ${escapeHtml(interest)}</p>
      <p><strong>Presupuesto:</strong> ${escapeHtml(budget || "No especificado")}</p>
      <p><strong>Plazo:</strong> ${escapeHtml(timeline || "No especificado")}</p>
      <p><strong>Servicios:</strong></p>
      <ul>${renderList(services)}</ul>
      <p><strong>Contexto:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `,
  });

  return NextResponse.json({ message: "Mensaje enviado." });
}

export const OS_RESET_CSS = `
html body #os-root,
html body #os-root * {
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif !important;
  font-size: 12px !important;
  line-height: 1.5 !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  text-shadow: none !important;
}
html body #os-root,
html body #os-root p,
html body #os-root li,
html body #os-root span,
html body #os-root a,
html body #os-root div,
html body #os-root td,
html body #os-root th,
html body #os-root label,
html body #os-root button,
html body #os-root input,
html body #os-root select,
html body #os-root textarea,
html body #os-root summary,
html body #os-root .text-os-muted,
html body #os-root .text-muted-foreground {
  color: #ffffff !important;
}
html body #os-root h1,
html body #os-root h2,
html body #os-root h3,
html body #os-root h4,
html body #os-root .os-title,
html body #os-root .os-section-label {
  color: #00ff00 !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  margin: 0 !important;
}
html body #os-root .text-os-accent,
html body #os-root .os-accent {
  color: #00ff00 !important;
  font-size: 12px !important;
}
html body #os-root .os-section-label {
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
}
`;

export function injectOsResetStyles() {
  const id = "os-reset-styles";
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = OS_RESET_CSS;
  document.head.appendChild(el);
}

export function removeOsResetStyles() {
  document.getElementById("os-reset-styles")?.remove();
}

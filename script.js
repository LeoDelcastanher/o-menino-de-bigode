/**
 * Renders the buttons in #links from the LINKS array in links.js.
 * You normally don't need to touch this file — edit links.js instead.
 */

const ICON_PATHS = {
  instagram:
    "M4,0h4v4h-4zM8,0h4v4h-4zM12,0h4v4h-4zM16,0h4v4h-4zM20,0h4v4h-4zM24,0h4v4h-4z" +
    "M0,4h4v4h-4zM28,4h4v4h-4z" +
    "M0,8h4v4h-4zM8,8h4v4h-4zM12,8h4v4h-4zM16,8h4v4h-4zM20,8h4v4h-4zM28,8h4v4h-4z" +
    "M0,12h4v4h-4zM8,12h4v4h-4zM20,12h4v4h-4zM28,12h4v4h-4z" +
    "M0,16h4v4h-4zM8,16h4v4h-4zM20,16h4v4h-4zM28,16h4v4h-4z" +
    "M0,20h4v4h-4zM8,20h4v4h-4zM12,20h4v4h-4zM16,20h4v4h-4zM20,20h4v4h-4zM28,20h4v4h-4z" +
    "M0,24h4v4h-4zM28,24h4v4h-4z" +
    "M4,28h4v4h-4zM8,28h4v4h-4zM12,28h4v4h-4zM16,28h4v4h-4zM20,28h4v4h-4zM24,28h4v4h-4z",
  tiktok:
    "M16,0h4v4h-4zM20,0h4v4h-4z" +
    "M12,4h4v4h-4zM24,4h4v4h-4z" +
    "M12,8h4v4h-4zM28,8h4v4h-4z" +
    "M12,12h4v4h-4zM28,12h4v4h-4z" +
    "M4,16h4v4h-4zM8,16h4v4h-4zM16,16h4v4h-4z" +
    "M0,20h4v4h-4zM12,20h4v4h-4zM16,20h4v4h-4z" +
    "M0,24h4v4h-4zM12,24h4v4h-4z" +
    "M4,28h4v4h-4zM8,28h4v4h-4z",
  youtube:
    "M4,0h4v4h-4zM8,0h4v4h-4zM12,0h4v4h-4zM16,0h4v4h-4zM20,0h4v4h-4zM24,0h4v4h-4z" +
    "M0,4h4v4h-4zM4,4h4v4h-4zM24,4h4v4h-4zM28,4h4v4h-4z" +
    "M0,8h4v4h-4zM4,8h4v4h-4zM8,8h4v4h-4zM24,8h4v4h-4zM28,8h4v4h-4z" +
    "M0,12h4v4h-4zM4,12h4v4h-4zM8,12h4v4h-4zM12,12h4v4h-4zM24,12h4v4h-4zM28,12h4v4h-4z" +
    "M0,16h4v4h-4zM4,16h4v4h-4zM8,16h4v4h-4zM12,16h4v4h-4zM24,16h4v4h-4zM28,16h4v4h-4z" +
    "M0,20h4v4h-4zM4,20h4v4h-4zM8,20h4v4h-4zM24,20h4v4h-4zM28,20h4v4h-4z" +
    "M0,24h4v4h-4zM4,24h4v4h-4zM24,24h4v4h-4zM28,24h4v4h-4z" +
    "M4,28h4v4h-4zM8,28h4v4h-4zM12,28h4v4h-4zM16,28h4v4h-4zM20,28h4v4h-4zM24,28h4v4h-4z",
  link:
    "M4,4h4v4h-4zM8,4h4v4h-4zM12,4h4v4h-4zM16,4h4v4h-4zM20,4h4v4h-4z" +
    "M0,8h4v4h-4zM24,8h4v4h-4z" +
    "M0,12h4v4h-4zM8,12h4v4h-4zM12,12h4v4h-4zM16,12h4v4h-4zM24,12h4v4h-4z" +
    "M0,16h4v4h-4zM8,16h4v4h-4zM16,16h4v4h-4zM24,16h4v4h-4z" +
    "M0,20h4v4h-4zM8,20h4v4h-4zM12,20h4v4h-4zM16,20h4v4h-4zM24,20h4v4h-4z" +
    "M4,24h4v4h-4zM8,24h4v4h-4zM12,24h4v4h-4zM16,24h4v4h-4zM20,24h4v4h-4z",
};

function iconSvg(name) {
  const path = ICON_PATHS[name] || ICON_PATHS.link;
  return `<svg viewBox="0 0 32 32" class="icon" aria-hidden="true"><path d="${path}"/></svg>`;
}

function renderLinks() {
  const container = document.getElementById("links");
  if (!container || typeof LINKS === "undefined") return;

  container.innerHTML = "";

  LINKS.forEach((link) => {
    const disabled = !!link.disabled || !link.url;
    const el = document.createElement(disabled ? "div" : "a");

    if (!disabled) {
      el.href = link.url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      el.setAttribute("aria-disabled", "true");
    }

    el.className = "link-btn";
    el.innerHTML = `
      ${iconSvg(link.icon)}
      <span class="link-label">${link.label}</span>
      ${disabled ? '<span class="link-soon">em breve</span>' : ""}
    `;

    container.appendChild(el);
  });
}

document.addEventListener("DOMContentLoaded", renderLinks);

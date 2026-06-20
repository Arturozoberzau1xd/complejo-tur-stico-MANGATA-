"use client";

import { useState } from "react";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${menuOpen ? "navbar--open" : ""}`}>
      <div className="navbar__bar">
        <div className="navbar__inner">
          
          {/* LOGO */}
          <a
            href="#inicio"
            className="navbar__logo"
            aria-label="Ir al inicio"
            onClick={closeMenu}
          >
            <span>Cabañas</span>
            <strong>MANGATA</strong>
          </a>

          {/* MENU ESCRITORIO */}
          <nav className="navbar__desktop-links" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* BOTÓN RESERVAR ESCRITORIO */}
          <a
            className="navbar__desktop-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar
          </a>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL (Usa la lógica de altura max-height de tu CSS) */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
      >
        <div className="navbar__mobile-panel">
          <nav className="navbar__mobile-links" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            className="navbar__mobile-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
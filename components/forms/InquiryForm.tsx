"use client";

import { useState } from "react";

export function InquiryForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <p className="form-success" role="status">
        Aanvraag staat alleen in deze browser. Koppel e-mail of een database voor je live gaat.
      </p>
    );
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label>
        <span>Naam</span>
        <input name="name" required />
      </label>
      <label>
        <span>E-mail</span>
        <input name="email" type="email" required />
      </label>
      <label>
        <span>Bericht</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit">Verstuur</button>
    </form>
  );
}

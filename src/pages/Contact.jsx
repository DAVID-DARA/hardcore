export default function Contact() {
  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER; // e.g., 234XXXXXXXXXX

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name")?.toString().trim();
    const contact = data.get("contact")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !contact || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const composed = `Hello, my name is ${name}. Contact: ${contact}. Message: ${message}`;
    if (waNumber) {
      const href = `https://wa.me/${waNumber}?text=${encodeURIComponent(
        composed
      )}`;
      window.location.href = href;
    } else {
      const mailto = `mailto:orders@example.com?subject=${encodeURIComponent(
        "New Order/Enquiry"
      )}&body=${encodeURIComponent(composed)}`;
      window.location.href = mailto;
    }
  };

  return (
    <section className="section" style={{ maxWidth: 720 }}>
      <h1 style={{ fontFamily: "Playfair Display,serif", fontSize: 36 }}>
        Contact
      </h1>
      <p style={{ color: "#6b7280" }}>
        For orders and enquiries, contact us directly. Bank transfer details
        will be shared upon confirmation.
      </p>

      <form
        onSubmit={onSubmit}
        style={{ marginTop: 24, display: "grid", gap: 12 }}
      >
        <input
          name="name"
          placeholder="Your Name"
          required
          style={{
            padding: 12,
            border: "1px solid var(--border)",
            borderRadius: 8,
          }}
        />
        <input
          name="contact"
          placeholder="Email or Phone"
          required
          style={{
            padding: 12,
            border: "1px solid var(--border)",
            borderRadius: 8,
          }}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
          style={{
            padding: 12,
            border: "1px solid var(--border)",
            borderRadius: 8,
          }}
        />
        <button className="btn" type="submit">
          Send
        </button>
      </form>

      <div style={{ marginTop: 16, color: "#6b7280", fontSize: 14 }}>
        {waNumber ? (
          <span>
            {/* Tip: Your message will open in WhatsApp chat ({waNumber}). */}
          </span>
        ) : (
          <span>
            Tip: Configure <code>VITE_WHATSAPP_NUMBER</code> to enable WhatsApp
            send.
          </span>
        )}
      </div>
    </section>
  );
}

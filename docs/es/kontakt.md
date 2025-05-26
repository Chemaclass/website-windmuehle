# Contacto

<script setup>
import { CONTACT } from '../.vitepress/variables'
</script>

¿Tienes alguna pregunta o quieres ponerte en contacto con nosotros?

Puedes enviarnos un correo electrónico directamente o utilizar el siguiente formulario. ¡Esperamos tu mensaje!

## 📞 Formas de contacto

- **Correo electrónico:** <a href="mailto:{{ CONTACT.email }}">{{ CONTACT.email }}</a>
- **Teléfono:** {{ CONTACT.phone }}

## 📝 Formulario de contacto

<form action="mailto:{{ CONTACT.email }}" method="post" enctype="text/plain" style="
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  font-family: sans-serif;
">
  <label for="name" style="display: block; margin-bottom: 1rem;">
    <strong>Tu nombre:</strong><br />
    <input type="text" id="name" name="name" required style="
      width: 100%;
      padding: 0.6rem;
      margin-top: 0.3rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
    ">
  </label>

  <label for="email" style="display: block; margin-bottom: 1rem;">
    <strong>Tu dirección de correo:</strong><br />
    <input type="email" id="email" name="email" required style="
      width: 100%;
      padding: 0.6rem;
      margin-top: 0.3rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
    ">
  </label>

  <label for="message" style="display: block; margin-bottom: 1rem;">
    <strong>Tu mensaje:</strong><br />
    <textarea id="message" name="message" rows="6" required style="
      width: 100%;
      padding: 0.6rem;
      margin-top: 0.3rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
      resize: vertical;
    "></textarea>
  </label>

  <div style="text-align: right;">
    <button type="submit" style="
      padding: 0.6rem 1.2rem;
      background-color: #4d90fe;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
    ">
      Enviar mensaje
    </button>
  </div>
</form>

---

¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible.

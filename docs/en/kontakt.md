# Contact

<script setup>
import { CONTACT } from '../.vitepress/variables'
</script>

Do you have a question or would like to reach out to us?

Feel free to send us an email directly or use the form below. We look forward to your message!

## 📞 Contact Options

- **Email:** <a href="mailto:{{ CONTACT.email }}">{{ CONTACT.email }}</a>
- **Phone:** {{ CONTACT.phone }}

## 📝 Contact Form

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
    <strong>Your Name:</strong><br />
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
    <strong>Your Email Address:</strong><br />
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
    <strong>Your Message:</strong><br />
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
      Send Message
    </button>
  </div>
</form>

---

Thank you for your message!
We will get back to you as soon as possible.

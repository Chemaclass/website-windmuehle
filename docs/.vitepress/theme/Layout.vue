<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref } from 'vue'
import { useData } from 'vitepress'

const { site, localeIndex } = useData()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const navItems = {
  'root': [
    { text: 'Start', link: '/' },
    { text: 'Aktuelles', link: '/aktuelles/' },
    { text: 'Geschichte', link: '/geschichte' },
    { text: 'Bilder', link: '/bilder' },
    { text: 'Spenden', link: '/spenden' },
    { text: 'Impressum', link: '/impressum' }
  ],
  'en': [
    { text: 'Home', link: '/en/' },
    { text: 'News', link: '/aktuelles/' },
    { text: 'History', link: '/en/geschichte' },
    { text: 'Gallery', link: '/en/bilder' },
    { text: 'Donate', link: '/en/spenden' },
    { text: 'Imprint', link: '/en/impressum' }
  ],
  'es': [
    { text: 'Inicio', link: '/es/' },
    { text: 'Noticias', link: '/aktuelles/' },
    { text: 'Historia', link: '/es/geschichte' },
    { text: 'Galería', link: '/es/bilder' },
    { text: 'Donar', link: '/es/spenden' },
    { text: 'Aviso legal', link: '/es/impressum' }
  ]
}

const currentNav = navItems[localeIndex.value] || navItems['root']
</script>

<template>
  <DefaultTheme.Layout />

  <!-- Mobile Menu Button -->
  <button
    class="mobile-menu-btn"
    @click="toggleMenu"
    :aria-expanded="isMenuOpen"
    aria-label="Toggle menu"
  >
    <span class="hamburger" :class="{ open: isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>

  <!-- Mobile Menu Overlay -->
  <Transition name="fade">
    <div v-if="isMenuOpen" class="mobile-overlay" @click="closeMenu"></div>
  </Transition>

  <!-- Mobile Menu Panel -->
  <Transition name="slide">
    <nav v-if="isMenuOpen" class="mobile-menu">
      <div class="mobile-menu-header">
        <img src="/imgs/logo.svg" alt="Logo" class="mobile-logo" />
        <span class="mobile-title">{{ site.title }}</span>
      </div>
      <ul class="mobile-nav-list">
        <li v-for="item in currentNav" :key="item.link">
          <a :href="item.link" @click="closeMenu">{{ item.text }}</a>
        </li>
      </ul>
      <div class="mobile-lang-section">
        <div class="mobile-lang-header">
          <svg class="globe-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>Sprache / Language</span>
        </div>
        <div class="mobile-lang-switcher">
          <a href="/" @click="closeMenu">DE</a>
          <a href="/en/" @click="closeMenu">EN</a>
          <a href="/es/" @click="closeMenu">ES</a>
        </div>
      </div>
    </nav>
  </Transition>
</template>

<style scoped>
.mobile-menu-btn {
  display: none;
  position: fixed;
  top: 12px;
  right: 16px;
  z-index: 100;
  width: 48px;
  height: 48px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }
}

.hamburger {
  width: 20px;
  height: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: #2563a8;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 98;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  max-width: 85vw;
  height: 100vh;
  background: #fff;
  z-index: 99;
  padding: 1.5rem;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.mobile-logo {
  width: 40px;
  height: auto;
}

.mobile-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: #2563a8;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.mobile-nav-list li {
  margin-bottom: 0.25rem;
}

.mobile-nav-list a {
  display: block;
  padding: 1rem;
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.mobile-nav-list a:hover {
  background: rgba(37, 99, 168, 0.08);
  color: #2563a8;
}

.mobile-lang-section {
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-lang-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
  padding-left: 0.25rem;
}

.globe-icon {
  color: #2563a8;
}

.mobile-lang-switcher {
  display: flex;
  gap: 0.5rem;
}

.mobile-lang-switcher a {
  flex: 1;
  padding: 0.75rem;
  text-align: center;
  background: rgba(37, 99, 168, 0.08);
  color: #2563a8;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.mobile-lang-switcher a:hover {
  background: #2563a8;
  color: #fff;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>

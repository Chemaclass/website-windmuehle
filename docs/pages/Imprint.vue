<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <div class="imprint-page">
    <!-- Hero Section with Parallax -->
    <div class="imprint-hero">
      <div class="imprint-hero-content">
        <h1>{{ t('imprint.title') }}</h1>
      </div>
    </div>

    <div class="imprint-wrapper">
      <div class="imprint-card">
        <div class="imprint-row">
          <div class="imprint-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            {{ t('imprint.associationLabel') }}
          </div>
          <div class="imprint-value">{{ t('imprint.association') }}</div>
        </div>

        <div class="imprint-row">
          <div class="imprint-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            {{ t('imprint.chairman') }}
          </div>
          <div class="imprint-value">{{ t('imprint.name') }}</div>
        </div>

        <div class="imprint-row">
          <div class="imprint-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {{ t('imprint.addressLabel') }}
          </div>
          <div class="imprint-value-with-action">
            <span style="white-space: pre-line;">{{ t('imprint.address') }}</span>
            <a
              href="https://maps.app.goo.gl/8GzrpqPirXxmYW2Q9"
              target="_blank"
              rel="noopener noreferrer"
              class="map-link"
              :title="t('imprint.openMap') || 'Open in Google Maps'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imprint-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.imprint-hero {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: url('/imgs/bilder/windmill-5.jpeg') center center / cover no-repeat fixed;
  padding: 6rem 1rem;
  position: relative;
  text-align: center;
}

.imprint-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6));
}

.imprint-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.imprint-hero h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

/* Content Wrapper */
.imprint-wrapper {
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem 1rem 4rem;
}

/* Card */
.imprint-card {
  max-width: 550px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 25px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.05);
}

.imprint-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.imprint-row:last-child {
  border-bottom: none;
}

.imprint-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 140px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.imprint-value {
  color: #333;
  line-height: 1.6;
}

.imprint-value-with-action {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  color: #333;
  line-height: 1.6;
  flex: 1;
}

.map-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--vp-c-brand-1);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.map-link:hover {
  background: var(--vp-c-brand-2);
  transform: scale(1.05);
}

.map-link:active {
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 768px) {
  .imprint-hero {
    padding: 3rem 1rem;
    background-size: cover;
    background-position: center center;
  }

  .imprint-hero h1 {
    font-size: 2rem;
  }

  .imprint-wrapper {
    padding: 2rem 1rem 3rem;
  }

  .imprint-card {
    padding: 1.5rem;
  }

  .imprint-row {
    flex-direction: column;
    gap: 0.5rem;
  }

  .imprint-label {
    min-width: auto;
  }

  .imprint-value-with-action {
    width: 100%;
  }

  .map-link {
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 480px) {
  .imprint-hero h1 {
    font-size: 1.75rem;
  }
}
</style>

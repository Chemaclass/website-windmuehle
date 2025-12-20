<script setup lang="ts">
import { ref, computed } from 'vue'
import { useT } from '../.vitepress/i18n'

const t = useT()
const copiedField = ref<string | null>(null)

// Aria-live announcement for screen readers
const copyAnnouncement = computed(() => {
  if (!copiedField.value) return ''
  return t('donate.copied') || 'Copied!'
})

function copyToClipboard(text: string, field: string) {
  navigator.clipboard.writeText(text)
  copiedField.value = field
  setTimeout(() => copiedField.value = null, 2000)
}
</script>

<template>
  <div class="donate-page">
    <!-- Screen reader announcement for copy feedback -->
    <div class="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {{ copyAnnouncement }}
    </div>

    <!-- Hero Section with Parallax -->
    <div class="donate-hero">
      <div class="donate-hero-content">
        <h1>{{ t('donate.title') }}</h1>
        <p class="donate-hero-text">{{ t('donate.introBold') }}</p>
      </div>
    </div>

    <div class="donate-content">
      <!-- Intro Section -->
      <div class="donate-intro">
        <p v-html="t('donate.introText')"></p>
      </div>

      <!-- Support Section -->
      <div class="donate-support">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          {{ t('donate.supportTitle') }}
        </h2>
        <p v-html="t('donate.supportText')"></p>
      </div>

      <!-- Impact Section -->
      <div class="donate-impact">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
          {{ t('donate.impactTitle') || 'Ihre Spende bewirkt' }}
        </h2>
        <div class="impact-grid">
          <div class="impact-item">
            <div class="impact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 20h20"/>
                <path d="M5 20V8.5a2 2 0 0 1 .4-1.2l3-4a2 2 0 0 1 3.2 0l3 4a2 2 0 0 1 .4 1.2V20"/>
                <path d="M17 20V8.5a2 2 0 0 1 .4-1.2l2-2.7"/>
              </svg>
            </div>
            <span>{{ t('donate.impact1') || 'Erhalt der historischen Bausubstanz' }}</span>
          </div>
          <div class="impact-item">
            <div class="impact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <span>{{ t('donate.impact2') || 'Sanierung von Flügeln und Mauerwerk' }}</span>
          </div>
          <div class="impact-item">
            <div class="impact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span>{{ t('donate.impact3') || 'Veranstaltungen und Führungen' }}</span>
          </div>
          <div class="impact-item">
            <div class="impact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <span>{{ t('donate.impact4') || 'Bewahrung für kommende Generationen' }}</span>
          </div>
        </div>
      </div>

      <!-- Bank Details Card -->
      <div class="bank-card">
        <div class="bank-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2"/>
            <line x1="2" x2="22" y1="10" y2="10"/>
          </svg>
          <h3>{{ t('donate.bankTitle') }}</h3>
        </div>
        <p class="bank-subtitle">{{ t('donate.donateText') }}</p>

        <div class="bank-details">
          <div class="bank-row copyable-row" @click="copyToClipboard('Volksbank Hameln-Stadthagen', 'bank')">
            <div class="bank-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" x2="21" y1="22" y2="22"/>
                <line x1="6" x2="6" y1="18" y2="11"/>
                <line x1="10" x2="10" y1="18" y2="11"/>
                <line x1="14" x2="14" y1="18" y2="11"/>
                <line x1="18" x2="18" y1="18" y2="11"/>
                <polygon points="12 2 20 7 4 7"/>
              </svg>
              <strong>Bank</strong>
            </div>
            <div class="bank-value-copy">
              <span>Volksbank Hameln-Stadthagen</span>
              <button class="copy-btn" :class="{ copied: copiedField === 'bank' }">
                <svg v-if="copiedField !== 'bank'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="bank-row copyable-row" @click="copyToClipboard('DE37254621600107707400', 'iban')">
            <div class="bank-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2"/>
                <line x1="2" x2="22" y1="10" y2="10"/>
              </svg>
              <strong>IBAN</strong>
            </div>
            <div class="bank-value-copy">
              <span>DE37 2546 2160 0107 7074 00</span>
              <button class="copy-btn" :class="{ copied: copiedField === 'iban' }">
                <svg v-if="copiedField !== 'iban'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="bank-row copyable-row" @click="copyToClipboard('GENODEF1HMP', 'bic')">
            <div class="bank-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" x2="22" y1="12" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <strong>BIC</strong>
            </div>
            <div class="bank-value-copy">
              <span>GENODEF1HMP</span>
              <button class="copy-btn" :class="{ copied: copiedField === 'bic' }">
                <svg v-if="copiedField !== 'bic'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="bank-row copyable-row" @click="copyToClipboard('Spende Windmühle Tündern', 'subject')">
            <div class="bank-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" x2="8" y1="13" y2="13"/>
                <line x1="16" x2="8" y1="17" y2="17"/>
              </svg>
              <strong>{{ t('donate.subject') }}</strong>
            </div>
            <div class="bank-value-copy">
              <span><em>Spende Windmühle Tündern</em></span>
              <button class="copy-btn" :class="{ copied: copiedField === 'subject' }">
                <svg v-if="copiedField !== 'subject'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Thanks Section -->
      <div class="thanks-section">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
          {{ t('donate.thanksTitle') }}
        </h3>
        <p v-html="t('donate.thanksText')"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Screen reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.donate-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.donate-hero {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: url('/imgs/pfingstmontag/pfingstmontag3.jpeg') center top / cover no-repeat fixed;
  padding: 6rem 1rem;
  position: relative;
  text-align: center;
}

.donate-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6));
}

.donate-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.donate-hero h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.donate-hero-text {
  color: #fff;
  font-size: 1.25rem;
  margin: 0;
  text-shadow: 0 1px 5px rgba(0,0,0,0.3);
  line-height: 1.6;
}

/* Content Area */
.donate-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

/* Intro Section */
.donate-intro {
  padding: 2rem 2.5rem;
  background: linear-gradient(135deg, rgba(37, 99, 168, 0.05) 0%, rgba(232, 168, 56, 0.05) 100%);
  border-radius: 20px;
  margin-bottom: 3rem;
  text-align: left;
}

.donate-intro p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin: 0;
}

/* Support Section */
.donate-support {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.05);
  border-left: 4px solid var(--vp-c-brand-1);
}

.donate-support h2 {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--vp-c-brand-1);
  font-size: 1.4rem;
  margin: 0 0 1rem;
}

.donate-support h2 svg {
  min-width: 20px;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.donate-support p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  margin: 0;
}

/* Impact Section */
.donate-impact {
  margin-bottom: 3rem;
}

.donate-impact h2 {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--vp-c-brand-1);
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
}

.donate-impact h2 svg {
  min-width: 20px;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.impact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
}

.impact-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.impact-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  border-radius: 12px;
  color: #fff;
}

.impact-item span {
  font-size: 1rem;
  color: #333;
  line-height: 1.4;
}

/* Bank Card */
.bank-card {
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 4px 25px rgba(0,0,0,0.08);
  margin-bottom: 3rem;
  border: 1px solid rgba(0,0,0,0.05);
}

.bank-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand-1);
}

.bank-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.bank-subtitle {
  color: #666;
  margin: 0 0 1.5rem;
}

.bank-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.bank-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: #f8fafc;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.copyable-row {
  cursor: pointer;
}

.copyable-row:hover {
  background: rgba(37, 99, 168, 0.08);
}

.bank-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--vp-c-brand-2);
}

.bank-label strong {
  font-weight: 600;
}

.bank-value {
  color: #333;
  font-size: 1rem;
}

.bank-value-copy {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.bank-value-copy span {
  color: #333;
  font-size: 1rem;
}

.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: var(--vp-c-brand-1);
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: var(--vp-c-brand-2);
  transform: scale(1.05);
}

.copy-btn.copied {
  background: #22c55e;
}

/* Thanks Section */
.thanks-section {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(37, 99, 168, 0.08) 0%, rgba(26, 74, 122, 0.08) 100%);
  border-radius: 20px;
  border-left: 5px solid var(--vp-c-brand-1);
  text-align: left;
}

.thanks-section h3 {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--vp-c-brand-1);
  font-size: 1.4rem;
  margin: 0 0 1rem;
}

.thanks-section h3 svg {
  min-width: 20px;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.thanks-section p {
  color: #444;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .donate-hero {
    padding: 3rem 1rem;
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
  }

  .donate-hero h1 {
    font-size: 2rem;
  }

  .donate-hero-text {
    font-size: 1rem;
  }

  .donate-content {
    padding: 2rem 1rem;
  }

  .donate-intro {
    padding: 1.5rem;
  }

  .donate-support {
    padding: 1.5rem;
  }

  .donate-support h2 {
    font-size: 1.2rem;
  }

  .donate-support p {
    font-size: 1rem;
  }

  .impact-grid {
    grid-template-columns: 1fr;
  }

  .bank-card {
    padding: 1.5rem;
  }

  .bank-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px dashed rgba(37, 99, 168, 0.3);
  }

  .bank-row.copyable-row:active {
    background: rgba(37, 99, 168, 0.15);
    transform: scale(0.98);
    border-color: var(--vp-c-brand-1);
  }

  .bank-value-copy {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .bank-value-copy span {
    font-size: 0.95rem;
    word-break: break-all;
  }

  .copy-btn {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
  }

  .copy-btn svg {
    width: 20px;
    height: 20px;
  }

  .thanks-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .donate-hero h1 {
    font-size: 1.75rem;
  }

  .donate-hero-text {
    font-size: 1rem;
  }

  .impact-item {
    padding: 1rem;
  }

  .impact-icon {
    width: 48px;
    height: 48px;
  }

  .impact-icon svg {
    width: 24px;
    height: 24px;
  }
}
</style>

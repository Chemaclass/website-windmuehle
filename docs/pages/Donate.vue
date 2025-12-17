<script setup lang="ts">
import { ref } from 'vue'
import { useT } from '../.vitepress/i18n'

const t = useT()
const copiedField = ref<string | null>(null)

function copyToClipboard(text: string, field: string) {
  navigator.clipboard.writeText(text)
  copiedField.value = field
  setTimeout(() => copiedField.value = null, 2000)
}
</script>

<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>{{ t('donate.title') }}</h1>
    </div>

    <div class="donate-intro">
      <strong>{{ t('donate.introBold') }}</strong>
      <p v-html="t('donate.introText')"></p>
    </div>

    <div class="bank-card">
      <h3>{{ t('donate.bankTitle') }}</h3>
      <p>{{ t('donate.donateText') }}</p>
      <ul>
        <li><strong>Bank:</strong> <span>Volksbank Hameln-Stadthagen</span></li>
        <li>
          <strong>IBAN:</strong>
          <span>DE37 2546 2160 0107 7074 00</span>
          <button
            class="copy-btn"
            :class="{ copied: copiedField === 'iban' }"
            @click="copyToClipboard('DE37254621600107707400', 'iban')"
          >
            {{ copiedField === 'iban' ? t('donate.copied') : t('donate.copy') }}
          </button>
        </li>
        <li>
          <strong>BIC:</strong>
          <span>GENODEF1HMP</span>
          <button
            class="copy-btn"
            :class="{ copied: copiedField === 'bic' }"
            @click="copyToClipboard('GENODEF1HMP', 'bic')"
          >
            {{ copiedField === 'bic' ? t('donate.copied') : t('donate.copy') }}
          </button>
        </li>
        <li>
          <strong>{{ t('donate.subject') }}:</strong>
          <span><em>Spende Windmühle Tündern</em></span>
          <button
            class="copy-btn"
            :class="{ copied: copiedField === 'subject' }"
            @click="copyToClipboard('Spende Windmühle Tündern', 'subject')"
          >
            {{ copiedField === 'subject' ? t('donate.copied') : t('donate.copy') }}
          </button>
        </li>
      </ul>
    </div>

    <div class="thanks-section">
      <h3>{{ t('donate.thanksTitle') }}</h3>
      <p v-html="t('donate.thanksText')"></p>
    </div>
  </div>
</template>

<style scoped>
.copy-btn {
  margin-left: auto;
  padding: 0;
  font-size: 0.75rem;
  background: none;
  color: var(--vp-c-text-2);
  border: none;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.copy-btn:hover {
  opacity: 1;
}

.copy-btn.copied {
  color: #22c55e;
  opacity: 1;
}
</style>

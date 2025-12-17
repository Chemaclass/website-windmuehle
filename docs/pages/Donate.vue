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
          <span
            class="copyable"
            @click="copyToClipboard('DE37254621600107707400', 'iban')"
          >
            DE37 2546 2160 0107 7074 00
            <span v-if="copiedField === 'iban'" class="copied-tooltip">{{ t('donate.copied') }}</span>
          </span>
        </li>
        <li>
          <strong>BIC:</strong>
          <span
            class="copyable"
            @click="copyToClipboard('GENODEF1HMP', 'bic')"
          >
            GENODEF1HMP
            <span v-if="copiedField === 'bic'" class="copied-tooltip">{{ t('donate.copied') }}</span>
          </span>
        </li>
        <li>
          <strong>{{ t('donate.subject') }}:</strong>
          <span
            class="copyable"
            @click="copyToClipboard('Spende Windmühle Tündern', 'subject')"
          >
            <em>Spende Windmühle Tündern</em>
            <span v-if="copiedField === 'subject'" class="copied-tooltip">{{ t('donate.copied') }}</span>
          </span>
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
.copyable {
  cursor: pointer;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.copyable:hover {
  background-color: rgba(37, 99, 168, 0.1);
}

.copied-tooltip {
  margin-left: 0.5rem;
  color: #2563a8;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
}
</style>

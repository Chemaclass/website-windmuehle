<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
import { useData } from 'vitepress'
const { site } = useData()
const t = useT()
</script>

<template>
  <h1>{{ t('donate.title') }}</h1>
  <p><strong>{{ t('donate.introBold') }}</strong></p>
  <p v-html="t('donate.introText')"></p>

  <h3>{{ t('donate.bankTitle') }}</h3>
  <p>{{ t('donate.donateText') }}</p>
  <ul>
    <li><strong>Bank:</strong> Volksbank Hameln-Stadthagen</li>
    <li><strong>IBAN:</strong>DE37 2546 2160 0107 7074 00</li>
    <li><strong>BIC:</strong> GENODEF1HMP</li>
    <li><strong>{{ t('donate.subject') }}:</strong> <em>Spende Windmühle Tündern</em></li>
  </ul>

  <h3>{{ t('donate.thanksTitle') }}</h3>
  <p v-html="t('donate.thanksText')"></p>
</template>

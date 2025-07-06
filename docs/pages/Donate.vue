<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
import { BANK } from '../.vitepress/variables'
import { useData } from 'vitepress'
const { site } = useData()
const siteLang = site.value.lang as 'de-DE' | 'en-US' | 'es-ES'
const t = useT()
</script>

<template>
  <h1>{{ t('donate.title') }}</h1>
  <p><strong>{{ t('donate.introBold') }}</strong></p>
  <p v-html="t('donate.introText')"></p>

  <h3>{{ t('donate.bankTitle') }}</h3>
  <p>{{ t('donate.donateText') }}</p>
  <ul>
    <li><strong>Bank:</strong> {{ BANK.name }}</li>
    <li><strong>IBAN:</strong> {{ BANK.iban }}</li>
    <li><strong>BIC:</strong> {{ BANK.bic }}</li>
    <li><strong>{{ t('donate.title') }}:</strong> <em>{{ BANK.reference[siteLang] }}</em></li>
  </ul>

  <h3>{{ t('donate.thanksTitle') }}</h3>
  <p v-html="t('donate.thanksText')"></p>
</template>

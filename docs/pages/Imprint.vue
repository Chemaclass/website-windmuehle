<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <div class="page-wrapper">
    <div class="imprint-card">
      <h1>{{ t('imprint.title') }}</h1>
      <p>
        <strong>{{ t('imprint.association') }}</strong><br/>
        {{ t('imprint.chairman') }}: <strong>{{ t('imprint.name') }}</strong><br/>
        <span style="white-space: pre-line;">{{ t('imprint.address') }}</span>
      </p>
    </div>
  </div>
</template>

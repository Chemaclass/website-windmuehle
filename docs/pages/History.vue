<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>{{ t('history.title') }}</h1>
      <p v-html="t('history.intro')"></p>
    </div>

    <div class="history-content">
      <div class="history-section">
        <h3>{{ t('history.rescueTitle') }}</h3>
        <p v-html="t('history.rescueText')"></p>
      </div>

      <div class="history-section">
        <h3>{{ t('history.todayTitle') }}</h3>
        <p v-html="t('history.todayText')"></p>
      </div>

      <img src="/imgs/bilder/windmill-7.jpeg" alt="Windmill" class="history-image" loading="lazy" />

      <div class="history-section">
        <h3>{{ t('history.fairyTitle') }}</h3>
        <p v-html="t('history.fairyText')"></p>
      </div>
    </div>
  </div>
</template>

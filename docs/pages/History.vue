<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <h1>{{ t('history.title') }}</h1>
  <p v-html="t('history.intro')"></p>

  <h3>{{ t('history.rescueTitle') }}</h3>
  <p v-html="t('history.rescueText')"></p>

  <h3>{{ t('history.todayTitle') }}</h3>
  <p v-html="t('history.todayText')"></p>

  <img src="/imgs/bilder/windmill-7.jpeg" alt="Windmill" style="width: 100%; height: auto; border-radius: 8px; margin-top: 1.5rem;" />

  <h3>{{ t('history.fairyTitle') }}</h3>
  <p v-html="t('history.fairyText')"></p>
</template>

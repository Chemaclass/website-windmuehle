<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <h1>{{ t('imprint.title') }}</h1>
  <p><strong>{{ t('imprint.association') }}</strong><br />
  _{{ t('imprint.chairman') }}:_<br />
  <strong>{{ t('imprint.name') }}</strong><br />
  {{ t('imprint.address') }}</p>
</template>

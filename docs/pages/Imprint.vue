<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <div id="imprint">
    <h1>{{ t('imprint.title') }}</h1>
    <p>
      <strong>{{ t('imprint.association') }}</strong><br/>
      {{ t('imprint.chairman') }}: <strong>{{ t('imprint.name') }}</strong><br/>
      {{ t('imprint.address') }}
    </p>
  </div>
</template>

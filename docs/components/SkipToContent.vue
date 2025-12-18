<script setup>
import { useT } from '../.vitepress/i18n'

const t = useT()
</script>

<template>
  <a href="#main-content" class="skip-link">
    {{ t('accessibility.skipToContent') || 'Skip to content' }}
  </a>
</template>

<style scoped>
.skip-link {
  position: fixed;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  background: #2563a8;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid #e8a838;
  outline-offset: 2px;
}
</style>

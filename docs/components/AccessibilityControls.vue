<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useT } from '../.vitepress/i18n'

const t = useT()

// Font size: 0 = normal, 1 = large, 2 = xlarge
const fontSize = ref(0)

const fontSizeClasses = ['', 'a11y-font-large', 'a11y-font-xlarge']

function applySettings() {
  const html = document.documentElement

  // Remove all font size classes
  fontSizeClasses.forEach(cls => {
    if (cls) html.classList.remove(cls)
  })

  // Apply current font size class
  if (fontSizeClasses[fontSize.value]) {
    html.classList.add(fontSizeClasses[fontSize.value])
  }

  // Save to localStorage
  localStorage.setItem('a11y-font-size', String(fontSize.value))
}

function decreaseFont() {
  if (fontSize.value > 0) {
    fontSize.value--
    applySettings()
  }
}

function increaseFont() {
  if (fontSize.value < 2) {
    fontSize.value++
    applySettings()
  }
}

onMounted(() => {
  // Load saved settings
  const saved = localStorage.getItem('a11y-font-size')
  if (saved) {
    fontSize.value = parseInt(saved) || 0
    applySettings()
  }
})
</script>

<template>
  <div class="a11y-controls">
    <button
      @click="decreaseFont"
      :disabled="fontSize === 0"
      class="a11y-btn"
      :aria-label="t('accessibility.fontSmaller')"
      :title="t('accessibility.fontSmaller')"
    >
      A-
    </button>
    <button
      @click="increaseFont"
      :disabled="fontSize === 2"
      class="a11y-btn"
      :aria-label="t('accessibility.fontLarger')"
      :title="t('accessibility.fontLarger')"
    >
      A+
    </button>
  </div>
</template>

<style scoped>
.a11y-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.a11y-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 0.5rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  cursor: pointer;
  color: #333;
  font-weight: 600;
  font-size: 0.85rem;
  font-family: Georgia, serif;
  transition: all 0.2s ease;
}

.a11y-btn:hover:not(:disabled) {
  background: #f5f5f5;
  border-color: rgba(0, 0, 0, 0.25);
}

.a11y-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Mobile styles */
@media (max-width: 768px) {
  .a11y-controls {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    padding: 1rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
    justify-content: center;
  }

  .a11y-btn {
    min-width: 44px;
    height: 44px;
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useT } from '../.vitepress/i18n'

const t = useT()

// Font size: 0 = normal, 1 = large, 2 = xlarge
const fontSize = ref(0)
const highContrast = ref(false)
const lineSpacing = ref(false)

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

  // High contrast
  html.classList.toggle('a11y-high-contrast', highContrast.value)

  // Line spacing
  html.classList.toggle('a11y-spacing', lineSpacing.value)

  // Save to localStorage
  localStorage.setItem('a11y-settings', JSON.stringify({
    fontSize: fontSize.value,
    highContrast: highContrast.value,
    lineSpacing: lineSpacing.value
  }))
}

function decreaseFont() {
  if (fontSize.value > 0) {
    fontSize.value--
    applySettings()
  }
}

function resetFont() {
  fontSize.value = 0
  applySettings()
}

function increaseFont() {
  if (fontSize.value < 2) {
    fontSize.value++
    applySettings()
  }
}

function toggleContrast() {
  highContrast.value = !highContrast.value
  applySettings()
}

function toggleSpacing() {
  lineSpacing.value = !lineSpacing.value
  applySettings()
}

onMounted(() => {
  // Load saved settings
  const saved = localStorage.getItem('a11y-settings')
  if (saved) {
    try {
      const settings = JSON.parse(saved)
      fontSize.value = settings.fontSize || 0
      highContrast.value = settings.highContrast || false
      lineSpacing.value = settings.lineSpacing || false
      applySettings()
    } catch (e) {
      // Ignore parse errors
    }
  }
})
</script>

<template>
  <div class="a11y-controls">
    <!-- Font Size Controls -->
    <div class="a11y-font-controls">
      <button
        @click="decreaseFont"
        :disabled="fontSize === 0"
        class="a11y-btn a11y-btn-font"
        :aria-label="t('accessibility.fontSmaller')"
        :title="t('accessibility.fontSmaller')"
      >
        A-
      </button>
      <button
        @click="resetFont"
        class="a11y-btn a11y-btn-font a11y-btn-reset"
        :class="{ active: fontSize === 0 }"
        :aria-label="t('accessibility.fontNormal')"
        :title="t('accessibility.fontNormal')"
      >
        A
      </button>
      <button
        @click="increaseFont"
        :disabled="fontSize === 2"
        class="a11y-btn a11y-btn-font"
        :aria-label="t('accessibility.fontLarger')"
        :title="t('accessibility.fontLarger')"
      >
        A+
      </button>
    </div>

    <!-- Contrast Toggle -->
    <button
      @click="toggleContrast"
      class="a11y-btn"
      :class="{ active: highContrast }"
      :aria-label="highContrast ? t('accessibility.contrastOff') : t('accessibility.contrastOn')"
      :title="highContrast ? t('accessibility.contrastOff') : t('accessibility.contrastOn')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2v20" />
        <path d="M12 2a10 10 0 0 1 0 20" fill="currentColor" />
      </svg>
    </button>

    <!-- Line Spacing Toggle -->
    <button
      @click="toggleSpacing"
      class="a11y-btn"
      :class="{ active: lineSpacing }"
      :aria-label="lineSpacing ? t('accessibility.spacingOff') : t('accessibility.spacingOn')"
      :title="lineSpacing ? t('accessibility.spacingOff') : t('accessibility.spacingOn')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
        <path d="M7 3v3M7 18v3M17 3v3M17 18v3"/>
      </svg>
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

.a11y-font-controls {
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  padding: 2px;
}

.a11y-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 0.5rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #555;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.a11y-btn:hover:not(:disabled) {
  background: rgba(37, 99, 168, 0.1);
  color: #2563a8;
}

.a11y-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.a11y-btn.active {
  background: #2563a8;
  color: #fff;
}

.a11y-btn.active:hover {
  background: #1a4a7a;
  color: #fff;
}

.a11y-btn-font {
  font-family: Georgia, serif;
}

.a11y-btn-font:first-child {
  font-size: 0.75rem;
}

.a11y-btn-reset {
  font-size: 1rem;
}

.a11y-btn-font:last-child {
  font-size: 1.1rem;
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

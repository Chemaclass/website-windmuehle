<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function updateProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

// Throttle function for performance
function throttle(fn, wait) {
  let lastTime = 0
  return function() {
    const now = Date.now()
    if (now - lastTime >= wait) {
      lastTime = now
      fn()
    }
  }
}

const throttledUpdate = throttle(updateProgress, 50)

onMounted(() => {
  window.addEventListener('scroll', throttledUpdate, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', throttledUpdate)
})
</script>

<template>
  <div class="reading-progress-container">
    <div class="reading-progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<style scoped>
.reading-progress-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: transparent;
  z-index: 200;
}

.reading-progress {
  height: 100%;
  background: linear-gradient(90deg, #2563a8, #e8a838);
  transition: width 0.1s ease-out;
  border-radius: 0 2px 2px 0;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useT } from '../.vitepress/i18n'
import Lightbox from '../components/Lightbox.vue'

const t = useT()

// Gallery sections with images
const sections = [
  {
    id: 'renovation',
    titleKey: 'gallery.renovationTitle',
    altKey: 'gallery.renovationAlt',
    images: [
      '/imgs/scaffolding/scaffolding1.jpeg',
      '/imgs/scaffolding/scaffolding2.jpeg',
      '/imgs/scaffolding/scaffolding3.jpeg',
      '/imgs/scaffolding/scaffolding4.jpeg',
      '/imgs/scaffolding/scaffolding5.jpeg',
      '/imgs/scaffolding/scaffolding6.jpeg',
      '/imgs/scaffolding/scaffolding7.jpeg'
    ]
  },
  {
    id: 'blades',
    titleKey: 'gallery.bladesTitle',
    altKey: 'gallery.bladesAlt',
    images: [
      '/imgs/flugel-abgebaut/windmill-1.jpeg',
      '/imgs/flugel-abgebaut/windmill-2.jpeg',
      '/imgs/flugel-abgebaut/windmill-3.jpeg',
      '/imgs/flugel-abgebaut/windmill-4.jpeg',
      '/imgs/flugel-abgebaut/windmill-5.jpeg'
    ]
  },
  {
    id: 'moods',
    titleKey: 'gallery.moodsTitle',
    altKey: 'gallery.moodsAlt',
    images: [
      '/imgs/bilder/windmill-1.jpeg',
      '/imgs/bilder/windmill-2.jpeg',
      '/imgs/bilder/windmill-6.jpeg',
      '/imgs/bilder/windmill-4.jpeg',
      '/imgs/bilder/windmill-5.jpeg'
    ]
  },
  {
    id: 'historic',
    titleKey: 'gallery.historicTitle',
    altKey: 'gallery.historicAlt',
    images: [
      '/imgs/bilder/windmill-8.jpeg',
      '/imgs/bilder/windmill-13.jpeg',
      '/imgs/bilder/windmill-14.jpeg',
      '/imgs/bilder/windmill-3.jpeg'
    ]
  },
  {
    id: 'fire',
    titleKey: 'gallery.fireTitle',
    altKey: 'gallery.fireAlt',
    images: [
      '/imgs/bilder/windmill-11.jpeg',
      '/imgs/bilder/windmill-12.jpeg',
      '/imgs/bilder/windmill-9.jpeg',
      '/imgs/bilder/windmill-10.jpeg',
      '/imgs/bilder/windmill-15.jpeg',
      '/imgs/bilder/windmill-16.jpeg'
    ]
  }
]

// Lightbox state
const lightboxOpen = ref(false)
const lightboxImages = ref<string[]>([])
const lightboxIndex = ref(0)

function openLightbox(sectionImages: string[], index: number) {
  lightboxImages.value = sectionImages
  lightboxIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}
</script>

<template>
  <div class="gallery-page">
    <div class="gallery-header">
      <h1>{{ t('gallery.title') }}</h1>
      <p v-html="t('gallery.intro')"></p>
    </div>

    <div class="gallery-sections">
      <section v-for="section in sections" :key="section.id" class="gallery-category">
        <div class="category-header">
          <h2>{{ t(section.titleKey) }}</h2>
          <span class="image-count">{{ section.images.length }} {{ t('gallery.photos') }}</span>
        </div>

        <div class="image-grid">
          <div
            v-for="(image, index) in section.images"
            :key="image"
            class="image-item"
            @click="openLightbox(section.images, index)"
          >
            <img
              :src="image"
              :alt="t(section.altKey)"
              loading="lazy"
            />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
                <path d="M11 8v6M8 11h6"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Lightbox
      :images="lightboxImages"
      :initial-index="lightboxIndex"
      :is-open="lightboxOpen"
      @close="closeLightbox"
    />
  </div>
</template>

<style scoped>
.gallery-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
}

.gallery-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
}

.gallery-header h1 {
  font-size: 2.5rem;
  color: #2563a8;
  margin: 0 0 1rem;
  font-weight: 800;
}

.gallery-header p {
  font-size: 1.15rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.gallery-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.gallery-category {
  background: #f8fafc;
  border-radius: 16px;
  padding: 1.5rem;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e8a838;
}

.category-header h2 {
  font-size: 1.4rem;
  color: #2563a8;
  margin: 0;
  font-weight: 700;
}

.image-count {
  background: #2563a8;
  color: #fff;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.image-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  border-radius: 0;
  transition: transform 0.3s ease;
}

.image-item:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(37, 99, 168, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-overlay svg {
  color: #fff;
  width: 36px;
  height: 36px;
}

.image-item:hover .image-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
  .gallery-page {
    padding: 1.5rem 1rem 3rem;
  }

  .gallery-header {
    margin-bottom: 2rem;
    padding-top: 1rem;
  }

  .gallery-header h1 {
    font-size: 2rem;
  }

  .gallery-header p {
    font-size: 1rem;
  }

  .gallery-category {
    padding: 1rem;
  }

  .category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .category-header h2 {
    font-size: 1.2rem;
  }

  .image-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .image-overlay {
    opacity: 0.7;
    background: rgba(37, 99, 168, 0.4);
  }

  .image-overlay svg {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .image-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .image-item {
    aspect-ratio: 1;
  }
}
</style>

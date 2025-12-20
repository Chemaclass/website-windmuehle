<script setup lang="ts">
import { ref } from 'vue'
import { useT } from '../.vitepress/i18n'
import Lightbox from '../components/Lightbox.vue'

const t = useT()

// Gallery sections with images
const sections = [
  {
    id: 'events',
    titleKey: 'gallery.eventsTitle',
    altKey: 'gallery.eventsAlt',
    images: [
      '/imgs/pfingstmontag/pfingstmontag1.jpeg',
      '/imgs/pfingstmontag/pfingstmontag2.jpeg',
      '/imgs/pfingstmontag/pfingstmontag3.jpeg',
      '/imgs/pfingstmontag/pfingstmontag4.jpeg',
      '/imgs/pfingstmontag/pfingstmontag5.jpeg',
      '/imgs/pfingstmontag/pfingstmontag6.jpeg'
    ]
  },
  {
    id: 'renovation',
    titleKey: 'gallery.renovationTitle',
    altKey: 'gallery.renovationAlt',
    images: [
      '/imgs/news/2025-nov/aktuelles-nob-windmuhle1.jpg',
      '/imgs/news/2025-nov/aktuelles-nob-windmuhle2.jpg',
      '/imgs/news/2025-nov/aktuelles-nob-windmuhle3.jpg',
      '/imgs/scaffolding/scaffolding1.jpeg',
      '/imgs/scaffolding/scaffolding2.jpeg',
      '/imgs/scaffolding/scaffolding3.jpeg',
      '/imgs/scaffolding/scaffolding4.jpeg',
      '/imgs/scaffolding/scaffolding5.jpeg',
      '/imgs/scaffolding/scaffolding6.jpeg',
      '/imgs/scaffolding/scaffolding7.jpeg',
      '/imgs/flugel-abgebaut/windmill-1.jpeg',
      '/imgs/flugel-abgebaut/windmill-2.jpeg',
      '/imgs/flugel-abgebaut/windmill-3.jpeg',
      '/imgs/flugel-abgebaut/windmill-4.jpeg',
      '/imgs/flugel-abgebaut/windmill-5.jpeg'
    ]
  },
  {
    id: 'historic',
    titleKey: 'gallery.historicTitle',
    altKey: 'gallery.historicAlt',
    images: [
      '/imgs/bilder/windmill-1.jpeg',
      '/imgs/bilder/windmill-2.jpeg',
      '/imgs/bilder/windmill-3.jpeg',
      '/imgs/bilder/windmill-4.jpeg',
      '/imgs/bilder/windmill-5.jpeg',
      '/imgs/bilder/windmill-6.jpeg',
      '/imgs/bilder/windmill-7.jpeg',
      '/imgs/bilder/windmill-8.jpeg',
      '/imgs/bilder/windmill-9.jpeg',
      '/imgs/bilder/windmill-10.jpeg',
      '/imgs/bilder/windmill-11.jpeg',
      '/imgs/bilder/windmill-12.jpeg',
      '/imgs/bilder/windmill-13.jpeg',
      '/imgs/bilder/windmill-14.jpeg',
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
    <!-- Hero Section with Parallax -->
    <div class="gallery-hero">
      <div class="gallery-hero-content">
        <h1>{{ t('gallery.title') }}</h1>
        <p>{{ t('gallery.subtitle') }}</p>
      </div>
    </div>

    <div class="gallery-wrapper">
      <div class="gallery-intro">
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
  margin: 0;
  padding: 0;
}

/* Hero Section */
.gallery-hero {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: url('/imgs/bilder/windmill-6.jpeg') center center / cover no-repeat fixed;
  padding: 6rem 1rem;
  position: relative;
  text-align: center;
}

.gallery-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6));
}

.gallery-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.gallery-hero h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.gallery-hero-content p {
  color: #fff;
  font-size: 1.25rem;
  margin: 0;
  text-shadow: 0 1px 5px rgba(0,0,0,0.3);
  line-height: 1.6;
}

/* Content Wrapper */
.gallery-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 4rem;
}

.gallery-intro {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(37, 99, 168, 0.05) 0%, rgba(232, 168, 56, 0.05) 100%);
  border-radius: 16px;
  margin-bottom: 3rem;
}

.gallery-intro p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin: 0;
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
  .gallery-hero {
    padding: 4rem 1rem;
    background-attachment: scroll;
  }

  .gallery-hero h1 {
    font-size: 2rem;
  }

  .gallery-hero-content p {
    font-size: 1rem;
  }

  .gallery-wrapper {
    padding: 2rem 1rem 3rem;
  }

  .gallery-intro {
    padding: 1.5rem;
  }

  .gallery-intro p {
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
    opacity: 0;
  }

  .image-overlay svg {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .gallery-hero h1 {
    font-size: 1.75rem;
  }

  .image-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .image-item {
    aspect-ratio: 1;
  }
}
</style>

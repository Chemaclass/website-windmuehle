<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import Lightbox from '../components/Lightbox.vue'
import { useT } from '../.vitepress/i18n'

const t = useT()
const siteUrl = 'https://windmuehle-tuendern.de'
let schemaScript: HTMLScriptElement | null = null

const props = defineProps<{
  postId: string
}>()

// Find post by ID from i18n
const posts = computed(() => t('newsPosts') as Array<{
  id: string
  title: string
  date: string
  image: string
  link: string
  body: string
}>)

const postIndex = computed(() => posts.value.findIndex(p => p.id === props.postId))
const post = computed(() => posts.value[postIndex.value])

// Compute prev/next from array (newer posts come first, so prev is index+1, next is index-1)
const prevPost = computed(() => postIndex.value < posts.value.length - 1 ? posts.value[postIndex.value + 1] : null)
const nextPost = computed(() => postIndex.value > 0 ? posts.value[postIndex.value - 1] : null)

// Get blog path based on current language
const blogPath = computed(() => {
  const link = post.value?.link || ''
  if (link.startsWith('/en/aktuelles/')) return '/en/aktuelles/'
  if (link.startsWith('/es/aktuelles/')) return '/es/aktuelles/'
  return '/aktuelles/'
})

const blogPostRef = ref<HTMLElement | null>(null)
const lightboxOpen = ref(false)
const lightboxImages = ref<string[]>([])
const lightboxIndex = ref(0)
const imageClickHandlers: Array<{ img: HTMLImageElement; handler: () => void }> = []

// NewsArticle JSON-LD schema for SEO
const articleSchema = computed(() => {
  if (!post.value) return ''
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.value.title,
    image: post.value.image ? `${siteUrl}${post.value.image}` : undefined,
    datePublished: post.value.date,
    author: {
      '@type': 'Organization',
      name: 'Förderverein Windmühle Tündern e.V.',
      url: siteUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Förderverein Windmühle Tündern e.V.',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/imgs/logo.svg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${post.value.link}`
    }
  })
})

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

onMounted(async () => {
  await nextTick()

  if (blogPostRef.value) {
    const images = blogPostRef.value.querySelectorAll('img')
    const imageSrcs: string[] = []

    images.forEach((img, index) => {
      const src = img.getAttribute('src')
      if (src) {
        imageSrcs.push(src)
        img.style.cursor = 'pointer'
        const handler = () => openLightbox(index)
        img.addEventListener('click', handler)
        imageClickHandlers.push({ img: img as HTMLImageElement, handler })
      }
    })

    lightboxImages.value = imageSrcs
  }

  // Inject NewsArticle JSON-LD schema for SEO
  if (post.value && articleSchema.value) {
    schemaScript = document.createElement('script')
    schemaScript.type = 'application/ld+json'
    schemaScript.textContent = articleSchema.value
    document.head.appendChild(schemaScript)
  }
})

onUnmounted(() => {
  // Clean up image click event listeners
  imageClickHandlers.forEach(({ img, handler }) => {
    img.removeEventListener('click', handler)
  })
  imageClickHandlers.length = 0

  // Clean up the schema script when leaving the page
  if (schemaScript && schemaScript.parentNode) {
    schemaScript.parentNode.removeChild(schemaScript)
  }
})
</script>

<template>
  <div class="blog-post" ref="blogPostRef" v-if="post">
    <div class="blog-header">
      <a :href="blogPath" class="blog-back">{{ t('blog.backToList') }}</a>
      <span class="blog-date">{{ post.date }}</span>
    </div>

    <h1 class="blog-title">{{ post.title }}</h1>

    <img v-if="post.image" :src="post.image" :alt="post.title" class="blog-hero-image" loading="lazy" />

    <div class="blog-content" v-html="post.body"></div>

    <nav class="blog-navigation">
      <a v-if="prevPost" :href="prevPost.link" class="blog-nav-link blog-nav-prev">
        <span class="blog-nav-label">{{ t('blog.prevPost') }}</span>
        <span class="blog-nav-title">{{ prevPost.title }}</span>
      </a>
      <div v-else class="blog-nav-spacer"></div>

      <a v-if="nextPost" :href="nextPost.link" class="blog-nav-link blog-nav-next">
        <span class="blog-nav-label">{{ t('blog.nextPost') }}</span>
        <span class="blog-nav-title">{{ nextPost.title }}</span>
      </a>
      <div v-else class="blog-nav-spacer"></div>
    </nav>

    <footer class="blog-footer">
      <div class="blog-footer-content">
        <p>{{ t('blog.supportMessage') }}</p>
        <a :href="t('home.ctaLink')" class="blog-cta">{{ t('blog.supportCta') }}</a>
      </div>
      <a :href="blogPath" class="blog-back-bottom">{{ t('blog.allNews') }}</a>
    </footer>

    <Lightbox
      :images="lightboxImages"
      :initial-index="lightboxIndex"
      :is-open="lightboxOpen"
      @close="closeLightbox"
    />
  </div>
</template>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 2rem auto 0;
  padding: 2rem 1rem 3rem;
}

.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.blog-back {
  color: #2563a8;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.blog-back:hover {
  color: #1a4a7a;
}

.blog-date {
  color: #888;
  font-size: 0.9rem;
}

.blog-title {
  font-size: 2.2rem;
  color: #2563a8;
  margin: 0 0 1.5rem;
  line-height: 1.3;
  font-weight: 700;
}

.blog-hero-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-hero-image:hover {
  transform: scale(1.01);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
}

.blog-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.blog-content :deep(p) {
  margin-bottom: 1.5rem;
}

.blog-content :deep(h2) {
  font-size: 1.5rem;
  color: #2563a8;
  margin: 2rem 0 1rem;
}

.blog-content :deep(h3) {
  font-size: 1.25rem;
  color: #2563a8;
  margin: 1.5rem 0 0.75rem;
}

.blog-content :deep(ul) {
  margin: 1rem 0 1.5rem;
  padding-left: 1.5rem;
}

.blog-content :deep(li) {
  margin-bottom: 0.5rem;
}

.blog-content :deep(img) {
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  margin: 1.5rem 0;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-content :deep(img:hover) {
  transform: scale(1.02);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
}

.blog-content :deep(.post-images) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 2rem 0;
}

.blog-content :deep(.post-images img) {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin: 0;
}

.blog-navigation {
  margin-top: 3rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.blog-nav-link {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease;
  background: rgba(37, 99, 168, 0.03);
}

.blog-nav-link:hover {
  background: rgba(37, 99, 168, 0.08);
}

.blog-nav-prev {
  text-align: left;
}

.blog-nav-next {
  text-align: right;
}

.blog-nav-label {
  font-size: 0.85rem;
  color: #888;
  font-weight: 500;
}

.blog-nav-title {
  font-size: 1rem;
  color: #2563a8;
  font-weight: 600;
  line-height: 1.4;
}

.blog-nav-spacer {
  min-height: 1px;
}

.blog-footer {
  margin-top: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(37, 99, 168, 0.05) 0%, rgba(232, 168, 56, 0.08) 100%);
  border-radius: 16px;
  text-align: center;
}

.blog-footer-content {
  margin-bottom: 1.5rem;
}

.blog-footer-content p {
  font-size: 1.1rem;
  color: #444;
  margin: 0 0 1rem;
}

.blog-cta {
  display: inline-block;
  background: linear-gradient(135deg, #e8a838 0%, #d4922a 100%);
  color: #1a1a1a;
  padding: 0.85rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(232, 168, 56, 0.3);
}

.blog-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232, 168, 56, 0.4);
}

.blog-back-bottom {
  display: inline-block;
  margin-top: 1.5rem;
  color: #2563a8;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
}

.blog-back-bottom:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .blog-post {
    padding: 1.5rem 1rem 2rem;
  }

  .blog-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .blog-title {
    font-size: 1.75rem;
  }

  
  .blog-content {
    font-size: 1rem;
  }

  .blog-content :deep(.post-images) {
    grid-template-columns: 1fr;
  }

  .blog-navigation {
    grid-template-columns: 1fr;
  }

  .blog-nav-next {
    text-align: left;
  }

  .blog-footer {
    padding: 1.5rem;
  }

  .blog-footer-content p {
    font-size: 1rem;
  }

  /* Disable image hover scale on mobile */
  .blog-hero-image:hover,
  .blog-content :deep(img:hover) {
    transform: none;
  }
}
</style>

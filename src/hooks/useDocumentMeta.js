import { useEffect } from 'react'

function setMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

const SITE_NAME = 'Bahnewal & Co.'
const SITE_ORIGIN = 'https://www.bahnewalco.in'

// Updates document.title and the key meta/OG tags for the active route.
// Note: this only affects the live DOM after JS runs. Crawlers that don't
// execute JavaScript (most social-share bots) will still see the static
// defaults baked into index.html. That's an inherent limit of a pure
// client-rendered SPA with no prerendering/SSR.
export default function useDocumentMeta({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Excellence in Manpower Solutions`
    document.title = fullTitle

    if (description) {
      setMetaByName('description', description)
      setMetaByProperty('og:description', description)
      setMetaByName('twitter:description', description)
    }

    setMetaByProperty('og:title', fullTitle)
    setMetaByName('twitter:title', fullTitle)

    const url = `${SITE_ORIGIN}${path}`
    setMetaByProperty('og:url', url)
    setCanonical(url)
  }, [title, description, path])
}

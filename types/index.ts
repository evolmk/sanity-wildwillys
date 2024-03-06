import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

// Menu
export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface ShowcaseService {
  _type: string
  description?: PortableTextBlock[]
  iconImage?: Image
  slug?: string
  summary?: PortableTextBlock[]
  title?: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseServices?: ShowcaseService[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  description?: PortableTextBlock[]
  slug?: string
  title?: string
}

export interface ServicePayload {
  body?: PortableTextBlock[]
  description?: PortableTextBlock[]
  iconImage?: Image
  slug?: string
  summary?: PortableTextBlock[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

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
  title?: string
  slug?: string
  meta?: PortableTextBlock[]
  description?: PortableTextBlock[]
  iconImage?: Image
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseServices?: ShowcaseService[]
  title?: string
}

export interface PagePayload {
  title?: string
  slug?: string
  meta?: PortableTextBlock[]
  body?: PortableTextBlock[]
}

export interface ServicePayload {
  title?: string
  slug?: string
  meta?: PortableTextBlock[]
  body?: PortableTextBlock[]
  description?: PortableTextBlock[]
  iconImage?: Image
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

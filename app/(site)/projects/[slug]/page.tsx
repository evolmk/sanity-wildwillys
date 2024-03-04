import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { ServicePage } from '@/components/pages/service/ServicePage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadService } from '@/sanity/loader/loadQuery'
const ServicePreview = dynamic(
  () => import('@/components/pages/service/ServicePreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: service } = await loadService(params.slug)
  const ogImage = urlForOpenGraphImage(service?.iconImage)

  return {
    title: service?.title,
    description: service?.description
      ? toPlainText(service.description)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('service')
}

export default async function ServiceSlugRoute({ params }: Props) {
  const initial = await loadService(params.slug)

  if (draftMode().isEnabled) {
    return <ServicePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <ServicePage data={initial.data} />
}

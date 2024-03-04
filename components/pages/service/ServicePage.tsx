import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import type { ServicePayload } from '@/types'

export interface ServicePageProps {
  data: ServicePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ServicePage({ data, encodeDataAttribute }: ServicePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    title,
    meta,
    body,
    description,
    iconImage,
  } = data ?? {}

  return (
    <div>
      <div className="mb-20 space-y-6">
        {/* Header */}
        <Header title={title} description={description} />

        <div className="rounded-md border">
          {/* Image  */}
          <ImageBox
            data-sanity={encodeDataAttribute?.('coverImage')}
            image={iconImage}
            // @TODO add alt field in schema
            alt=""
            classesWrapper="relative aspect-[16/9]"
          />
        </div>

        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-xl text-gray-600"
            value={body}
          />
        )}
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}

export default ServicePage

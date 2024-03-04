'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { serviceBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ServicePayload } from '@/types'

import ServicePage from './ServicePage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<ServicePayload | null>
}

export default function ServicePreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<ServicePayload | null>(
    serviceBySlugQuery,
    params,
    { initial },
  )

  return <ServicePage data={data!} encodeDataAttribute={encodeDataAttribute} />
}

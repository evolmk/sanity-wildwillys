import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseService } from '@/types'

interface ServiceProps {
  service: ShowcaseService
  odd: number
}

export function ServiceListItem(props: ServiceProps) {
  const { service, odd } = props

  return (
    <div
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-b border-t xl:flex-row-reverse'
      }`}
    >
      <div className="w-full xl:w-9/12">
        <ImageBox
          image={service.iconImage}
          alt={`Cover image from ${service.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </div>
      <div className="flex xl:w-1/4">
        <TextBox service={service} />
      </div>
    </div>
  )
}


function TextBox({ service }: { service: ShowcaseService }) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {service.title}
        </div>
        {/* Overview  */}
        <div className="font-serif text-gray-500">
          <CustomPortableText value={service.summary as PortableTextBlock[]} />
        </div>
      </div>
      {/* Tags
      <div className="mt-4 flex flex-row gap-x-2">
        {project.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </div> */}
    </div>
  )
}

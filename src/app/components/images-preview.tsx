import Image from 'next/image'

type ImagesPreviewProps = {
  images: File[]
}

export const ImagesPreview = ({ images }: ImagesPreviewProps) => {
  return (
    <>
      {images.map((image) => {
        const imageURL = URL.createObjectURL(image)
        return (
          <Image
            key={image.name}
            src={imageURL}
            alt={image.name}
            height={250}
            width={250}
          />
        )
      })}
    </>
  )
}

export interface GalleryItem {
  src: string
  alt: string
  width: number // natural width of the photo (keeps the original proportions)
  height: number // natural height of the photo
  title?: string
  caption?: string
}

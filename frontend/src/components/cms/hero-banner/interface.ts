export interface HeroBannerComponentInterface {
  heading: string
  description: string
  banner: {
    fields: {
      file: {
        url: string
        title: string
      }
    }
  }
  buttons: string[]
}

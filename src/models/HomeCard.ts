class HomeCard {
  title: string
  categories: string[]
  description: string
  image: string
  ratting: string
  id: number

  constructor(
    title: string,
    categories: string[],
    description: string,
    image: string,
    ratting: string,
    id: number
  ) {
    this.title = title
    this.categories = categories
    this.description = description
    this.image = image
    this.ratting = ratting
    this.id = id
  }
}

export default HomeCard

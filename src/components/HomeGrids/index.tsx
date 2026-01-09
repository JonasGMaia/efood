import Card from '../Cards'
import { Grid } from './style'
import HomeCard from '../../models/HomeCard'

export type HomeGridProps = {
  homeCards?: HomeCard[]
}

const HomeGrid = ({ homeCards }: HomeGridProps) => (
  <div className="container">
    <Grid>
      {homeCards?.map((card) => (
        <Card
          title={card.title}
          categories={card.categories}
          description={card.description}
          image={card.image}
          ratting={card.ratting}
          key={card.id}
        />
      ))}
    </Grid>
  </div>
)

export default HomeGrid

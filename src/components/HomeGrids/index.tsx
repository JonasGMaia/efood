import HomeCard from '../HomeCards'
import { Grid } from './styles'
import { Card } from '../../pages/Home'
import Loader from '../Loader'
import { useGetRestaurantsQuery } from '../../services/api'

export type HomeGridProps = {
  homeCards?: Card[]
}

const HomeGrid = ({ homeCards }: HomeGridProps) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()
  if (isLoading) {
    return <Loader />
  }
  const itemsToRender = homeCards || restaurants
  return (
    <div className="container">
      <Grid>
        {itemsToRender?.map((card) => (
          <HomeCard
            titulo={card.titulo}
            destacado={card.destacado}
            descricao={card.descricao}
            capa={card.capa}
            avaliacao={card.avaliacao}
            key={card.id}
            {...card}
          />
        ))}
      </Grid>
    </div>
  )
}

export default HomeGrid

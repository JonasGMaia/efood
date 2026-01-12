import HomeCard from '../HomeCards'
import { Grid } from './style'
import { Card } from '../../pages/Home'

export type HomeGridProps = {
  homeCards?: Card[]
}

const HomeGrid = ({ homeCards }: HomeGridProps) => (
  <div className="container">
    <Grid>
      {homeCards?.map((card) => (
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

export default HomeGrid

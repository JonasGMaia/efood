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
      {/* <Card
      //   title="Hioki Sushi"
      //   categories={['Japonesa', 'Destaque da Semana']}
      //   description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
      //   image={imagem1}
      //   ratting="4.9"
      // />
      // <Card
      //   title="La Dolce Vita Trattoria"
      //   categories={['Italiana']}
      //   description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      //   image={imagem2}
      //   ratting="4.6"
      // /> */}
    </Grid>
  </div>
)

export default HomeGrid

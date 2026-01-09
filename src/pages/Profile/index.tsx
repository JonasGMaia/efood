import HeroProfile from '../../components/HeroProfile'
import ProfileGrid from '../../components/ProfileGrids'
import ProfileCard from '../../models/ProfileCard'
import imagem3 from '../../assets/images/imagem3.png'
import imagem2 from '../../assets/images/imagem2.png'
import imagem1 from '../../assets/images/imagem1.png'

const products: ProfileCard[] = [
  {
    title: 'Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    details:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. Serve: de 2 a 3 pessoas',
    image: imagem3,
    id: 1
  },
  {
    title: 'Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    details:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\n Serve: de 2 a 3 pessoas',
    image: imagem2,
    id: 2
  },
  {
    title: 'pizza de peixe',
    description:
      'Uma deliciosa pizza de peixe com molho de tomate, queijo mussarela e temperos especiais. Sabor e frescor em cada mordida!',
    details:
      'A pizza de peixe é uma opção saborosa e refrescante para quem busca algo diferente. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela derretido e peixe fresco (como alevino ou tilápia), temperos especiais e um toque de azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e o peixe fresco, que adiciona um toque de sabor marinho. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\n Serve: de 2 a 3 pessoas',
    image: imagem1,
    id: 3
  },
  {
    title: 'pizza de pizza',
    description:
      'Uma deliciosa pizza de pizza com molho de tomate, queijo mussarela e temperos especiais. Sabor e frescor em cada mordida!',
    details:
      'A pizza de pizza é uma opção saborosa e refrescante para quem busca algo diferente. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela derretido e peixe fresco (como alevino ou tilápia), temperos especiais e um toque de azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e o peixe fresco, que adiciona um toque de sabor marinho. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\n Serve: de 2 a 3 pessoas',
    image: imagem1,
    id: 4
  }
]
const Profile = () => (
  <>
    <HeroProfile />
    <ProfileGrid profileCardsfunction={products} />
  </>
)

export default Profile

import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { SocialsContainer } from './styles'

const Socials = () => (
  <SocialsContainer>
    <img src={instagram} alt="Instagram" />
    <img src={facebook} alt="Facebook" />
    <img src={twitter} alt="Twitter" />
  </SocialsContainer>
)

export default Socials

import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { SocialLink, SocialsContainer } from './styles'

const Socials = () => (
  <SocialsContainer>
    <SocialLink>
      <img src={instagram} alt="Instagram" />
    </SocialLink>
    <SocialLink>
      <img src={facebook} alt="Facebook" />
    </SocialLink>
    <SocialLink>
      <img src={twitter} alt="Twitter" />
    </SocialLink>
  </SocialsContainer>
)

export default Socials

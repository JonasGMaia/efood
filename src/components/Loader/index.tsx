import { BounceLoader } from 'react-spinners'
import { cores } from '../../styles'
import { LoaderContainer } from './styles'

const Loader = () => (
  <LoaderContainer>
    <BounceLoader color={cores.rosa1} />
  </LoaderContainer>
)

export default Loader

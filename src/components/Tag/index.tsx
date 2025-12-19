import { TagContainer, TagLink } from './styles'
export type TagProps = {
  children?: string
  type: 'descriptor' | 'link'
  title?: string
  to?: string
  onClick?: () => void
}
const Tag = ({ children, type, title, to, onClick }: TagProps) => {
  if (type === 'descriptor') {
    return (
      <TagContainer type="descriptor" title={title} onClick={onClick}>
        {children}
      </TagContainer>
    )
  }
  return (
    <TagLink type="link" title={title} to={to as string} onClick={onClick}>
      {children}
    </TagLink>
  )
}

export default Tag
